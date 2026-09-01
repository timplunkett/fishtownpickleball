// Utilities shared between the build pipeline (Node, via require) and the
// dashboard pages (browser, as window.CPLShared — the compile step copies this
// file verbatim to cpl/shared.js). Keep this file dependency-free and UMD-safe.
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.CPLShared = factory();
  }
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const HTML_ESCAPE_MAP = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => HTML_ESCAPE_MAP[character]);
  }

  // Decode the named/numeric entities the league API is known to emit.
  function decodeHtmlEntities(value) {
    return String(value)
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#0*39;|&apos;/g, "'")
      .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)));
  }

  function slugify(name) {
    return String(name || '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  // Collapse whitespace and title-case each word ("joe  DOE" -> "Joe Doe").
  function normalizeName(value) {
    return String(value || '')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase()
      .replace(/\b\w/g, (character) => character.toUpperCase());
  }

  function isGenderedTravelDivisionName(name) {
    return /\b(women'?s?|men'?s?)\b/i.test(String(name || ''));
  }

  // Divisions served by the /gender leg of the CPL API are single-gender: the
  // roster is all-male or all-female and every game is same-gender doubles, so
  // mixed and opposite-gender splits are dead weight in those divisions.
  function isGenderApiBase(apiBase) {
    return /\/gender\//.test(String(apiBase || ''));
  }

  // The gender a division name implies: "4.5 Mens" -> Male, "3.25 Womens" ->
  // Female, anything else -> null. Women is tested first: "Womens" would also
  // match the men pattern.
  function travelDivisionGender(name) {
    const text = String(name || '');
    if (/women'?s?\b/i.test(text)) return 'Female';
    if (/men'?s?\b/i.test(text)) return 'Male';
    return null;
  }

  // "3.5 Women's" -> "Women's 3.5"; non-gendered names pass through untouched.
  function formatTravelDivisionLabel(name) {
    const text = String(name || '').trim();
    const match = text.match(/^(\d+(?:\.\d+)?)\s+(women'?s?|men'?s?)$/i);
    if (!match) return text;
    return `${match[2]} ${match[1]}`;
  }

  // Leading number in a division name, for numeric sort ("3.25 - 3.99" -> 3.25).
  function divisionSortKey(name) {
    const match = String(name || '').match(/[\d.]+/);
    return match ? parseFloat(match[0]) : Infinity;
  }

  // Composite sort key for travel divisions: numeric bracket first, regular
  // divisions before gendered ones, then name.
  function getTravelDivisionSortKey(name) {
    const text = formatTravelDivisionLabel(name);
    const ratingMatch = text.match(/(\d+(?:\.\d+)?)/);
    const rating = ratingMatch ? Number(ratingMatch[1]) : Number.POSITIVE_INFINITY;
    const genderedRank = isGenderedTravelDivisionName(text) ? 1 : 0;
    return { rating, genderedRank, text: text.toLowerCase() };
  }

  // Render a DUPR rating as HTML: linked to the player's DUPR dashboard when
  // the numeric id is known, starred when provisional, em-dash when absent.
  function formatDuprRating(duprData) {
    if (!duprData || duprData.rating == null) return '—';

    const numericRating = Number(duprData.rating);
    const label = Number.isFinite(numericRating)
      ? escapeHtml(numericRating.toFixed(3))
      : escapeHtml(String(duprData.rating));
    const display = duprData.provisional
      ? `${label}<sup title="Provisional rating">*</sup>`
      : label;

    // rel replaces the browser default rather than adding to it, so `nofollow`
    // on its own hands the opened tab a window.opener onto this page. The other
    // two have to be spelled out alongside it.
    return duprData.numericId
      ? `<a href="https://dashboard.dupr.com/dashboard/player/${encodeURIComponent(duprData.numericId)}" target="_blank" rel="nofollow noopener noreferrer">${display}</a>`
      : display;
  }

  // Points/game of expected scoring margin per point of DUPR. Fitted by
  // regressing the dashboard's APM rating on DUPR across every division with
  // completed play, restricted to players with enough games that ridge
  // shrinkage isn't flattening the slope (n≈580, R²≈0.39). Per-division slopes
  // run 2.8–5.4, so this is a league-wide average and not a precise per-player
  // conversion — projections built on it are labelled as estimates.
  const DUPR_POINTS_PER_RATING = 3.8;

  // Convert a division's DUPR ratings into stand-in APM ratings, keyed by
  // display name, for players with no rating earned in the division yet.
  //
  // APM measures net points/game against an *average player in this division*,
  // so DUPR has to be re-centred on the division's own mean before the two can
  // be added together in a pair total — an absolute DUPR would put every player
  // in a 3.0 division hundreds of points below every player in a 5.0 one.
  // Centring on the mean is also what makes the regression slope the right
  // multiplier: it predicts the conditional average APM at a given distance
  // from the middle of the field, so the estimates are appropriately
  // conservative for players far from it.
  //
  // `playerIdsByName` spans the whole roster including subs; `duprRatings` is
  // the client-side DUPR table keyed by player id.
  function buildDuprRatingIndex(playerIdsByName, duprRatings) {
    const rated = [];
    for (const name of Object.keys(playerIdsByName || {})) {
      const entry = (duprRatings || {})[playerIdsByName[name]];
      const dupr = entry ? Number(entry.rating) : NaN;
      if (Number.isFinite(dupr)) rated.push([name, dupr]);
    }
    if (!rated.length) return {};
    const mean = rated.reduce((total, pair) => total + pair[1], 0) / rated.length;
    const index = {};
    for (const [name, dupr] of rated) {
      index[name] = Math.round((dupr - mean) * DUPR_POINTS_PER_RATING * 10) / 10;
    }
    return index;
  }

  // Decode the player index the compiler writes today — a table per column
  // (names, teams, divisions, ids) plus integer entries pointing into them; see
  // packPlayerIndex — into the plain entry objects the finder and dashboards
  // consume. Unpacked once, then served from the cached array.
  //
  // The division row grew three columns when seasons arrived (season slug,
  // season label, archived flag) and kept its name and its first four columns,
  // which is the one kind of change to this file that does not need a new global
  // (see the note on readsAs below). A shared.js cached from before seasons
  // reads columns 0–3, ignores 4–6, and builds an entry with no season on it —
  // whose finder link is /cpl/<league>/?d=<slug>, the season-less URL that the
  // redirect stub in front of every league exists to resolve. The old reader
  // therefore degrades to a working link rather than a broken one, which is the
  // only reason this was safe to do in place.
  function unpackTableIndex(packed) {
    const pick = (list, index) => (index === -1 ? '' : list[index]);
    return packed.e.map((entry) => {
      const division = packed.d[entry[2]] || ['', '', 0, '', '', '', 0];
      const decoded = {
        name: pick(packed.n, entry[0]),
        team: pick(packed.t, entry[1]),
        division: division[1],
        slug: division[0],
        league: division[2] === 1 ? 'travel' : 'local',
        season: division[4] || '',
        seasonLabel: division[5] || '',
        archived: division[6] === 1,
        playerId: entry[3] === -1 ? null : packed.i[entry[3]],
      };
      if (division[3]) decoded.club = division[3];
      if (entry[4] & 1) decoded.isCaptain = true;
      if (entry[4] & 2) decoded.isSub = true;
      return decoded;
    });
  }

  // The encoding before it: one string table shared by every column. Kept for
  // the browser that pairs a cached player-index.js with a newer shared.js.
  function unpackStringTableIndex(packed) {
    const s = (index) => (index === -1 ? '' : packed.s[index]);
    return packed.e.map((entry) => {
      const decoded = {
        name: s(entry[0]),
        team: s(entry[1]),
        division: s(entry[2]),
        slug: s(entry[3]),
        league: entry[4] === 1 ? 'travel' : 'local',
        playerId: entry[5] === -1 ? null : packed.s[entry[5]],
      };
      if (entry[6] !== -1) decoded.club = packed.s[entry[6]];
      if (entry[7] & 1) decoded.isCaptain = true;
      if (entry[7] & 2) decoded.isSub = true;
      return decoded;
    });
  }

  // Every encoding of the index gets its own global, named for the shape it
  // holds — PLAYER_INDEX_TABLES for the per-column tables written today,
  // PLAYER_INDEX_PACKED for the single shared string table written before it.
  //
  // The names must differ because player-index.js and shared.js are separate
  // files with separate caches and nothing busts them, so a returning visitor
  // can hold one from before a deploy and one from after — the same skew
  // bootstrap.js and bootstrap-runtime.js already guard against. One name
  // covering two shapes breaks the direction no later fix can reach: a cached
  // old shared.js reads whatever sits under the name it knows and throws inside
  // the player modal, and code already in a browser cannot be corrected. Under
  // its own name it finds nothing, falls through its own empty guard, and
  // quietly drops the finder rows instead.
  //
  // Marking the format inside the payload would not do: the older code checks
  // only that `e` is an array, which any of these shapes satisfies, so it would
  // decode the new one regardless of what a version field said.
  //
  // So a new shape takes a new name describing it. There is no ordering here to
  // keep up to date, and nothing to number.
  const readsAs = (packed, tables) => (
    !!packed && Array.isArray(packed.e) && tables.every((name) => Array.isArray(packed[name]))
  );

  function getPlayerIndex() {
    const root = globalThis;
    if (Array.isArray(root.PLAYER_INDEX)) return root.PLAYER_INDEX;
    // Each candidate is checked for every table its decoder will index into,
    // not just for its entry list. Half a table is as unreadable as none, and
    // what this owes the player modal is that an index it cannot read costs the
    // finder rows rather than the whole modal.
    if (readsAs(root.PLAYER_INDEX_TABLES, ['n', 't', 'd', 'i'])) {
      root.PLAYER_INDEX = unpackTableIndex(root.PLAYER_INDEX_TABLES);
    } else if (readsAs(root.PLAYER_INDEX_PACKED, ['s'])) {
      root.PLAYER_INDEX = unpackStringTableIndex(root.PLAYER_INDEX_PACKED);
    } else {
      return [];
    }
    return root.PLAYER_INDEX;
  }

  // ---------------------------------------------------------------------------
  // Team name abbreviations
  //
  // The head-to-head grid labels a team in two places with two budgets: a row or
  // column header with room for a word or two, and a cell chip with room for
  // about four characters. Both are built here so one team reads the same way in
  // both, and both are built per-grid rather than per-division: an abbreviation
  // only has to be unique among the teams it sits beside, and scoping wider than
  // that costs readability for collisions nobody can see (pre-2026-08-27 this
  // was division-wide, which is how Bounce Philly ended up "BP2" in a pod where
  // no other B-P team appeared).
  //
  // Most CPL team names are a venue brand plus a location: five "Pickleball
  // Kingdom …" teams, three "Picklr …", two "Montville …". The brand is the part
  // they share, so initials over the whole name throw away the only part that
  // distinguishes them — every PK team abbreviates to "PK…". These functions
  // find the shared leading words within each brand group and spend the
  // character budget on what follows.
  // ---------------------------------------------------------------------------

  const ABBR_SEPARATOR = '·'; // Middle dot: "PK·Hills".

  // Venue franchise prefixes, lowercased, longest match winning. Clustering
  // infers a shared brand from the names beside it, but it can only see the one
  // division being rendered: "Pickleball Kingdom Tinton Falls" is the only
  // Kingdom team in 3.25 Womens, so it clusters against "Pickleball Lehigh
  // Valley", shares only "Pickleball", and spends its four characters on "KING"
  // — the brand, not the team. The same team reads "HAMI" one division over,
  // where three Kingdom teams make the brand visible.
  //
  // These are facts about the league rather than a heuristic, which is why they
  // are a list and not a rule. The bar for adding one is that the franchise
  // fields teams at several locations, so the location is the identity and the
  // brand says nothing: seven Pickleball Kingdom teams, six Dill Dinkers, six
  // ACE, five Picklr, five Bounce. Clubs that field two teams of their own —
  // Flemington Blue and Green, Montville Rocks and Dragons — stay off it: their
  // name still identifies them when only one of the pair is in a division, and
  // clustering strips it when both are.
  //
  // A brand never consumes a whole name, so a team called exactly "Bounce
  // Malvern" keeps it.
  const KNOWN_BRANDS = [
    ['pickleball', 'kingdom'],
    ['pickleball', 'palace'],
    ['picklerage', 'union', 'county'],
    ['dill', 'dinkers'],
    ['bounce', 'malvern'],
    ['jersey', 'devil'],
    ['life', 'time'],
    ['picklr'],
    ['bounce'],
    ['ace'],
  ];

  // How many leading words of this name are a known brand, or 0. Never the whole
  // name: a team called exactly "Pickleball Palace" is named by it.
  function knownBrandWordCount(words) {
    let longest = 0;
    KNOWN_BRANDS.forEach((brand) => {
      if (brand.length >= words.length || brand.length <= longest) return;
      if (brand.every((word, index) => words[index].toLowerCase() === word)) {
        longest = brand.length;
      }
    });
    return longest;
  }

  function teamNameWords(teamName) {
    return String(teamName || '').split(/[^A-Za-z0-9]+/).filter(Boolean);
  }

  // How many leading words each name shares with its closest neighbours, found
  // by clustering on one word at a time and recursing into any cluster still
  // holding more than one name.
  //
  // The clustering has to nest. A flat "longest prefix common to the whole
  // group" stops at the first word any member disagrees on, which in a division
  // holding both "Pickleball Kingdom …" and "Pickleball Palace Black"/"… Blue"
  // is the second word — leaving the two Palace teams to be told apart by
  // "Palace", which they also share, and nothing downstream can recover the
  // colour that actually names them. Nesting gives each sub-cluster its own
  // shared prefix, so Palace Black and Palace Blue reduce to Black and Blue.
  //
  // A name stops descending one word short of its end, so every team keeps at
  // least one word of its own to be named by.
  function assignSharedWordCounts(names, wordsByName, depth, shared) {
    const clusters = new Map();
    names.forEach((name) => {
      const words = wordsByName.get(name);
      if (depth >= words.length - 1) {
        shared.set(name, depth);
        return;
      }
      const key = words[depth].toLowerCase();
      if (!clusters.has(key)) clusters.set(key, []);
      clusters.get(key).push(name);
    });
    clusters.forEach((members) => {
      if (members.length === 1) {
        shared.set(members[0], depth);
      } else {
        assignSharedWordCounts(members, wordsByName, depth + 1, shared);
      }
    });
  }

  function initials(words) {
    return words.map((word) => word[0]).join('').toUpperCase();
  }

  // Squeeze words into maxLength, giving up detail in the order that costs the
  // least: the whole thing, then initials for everything but the last word, then
  // a truncation of that, then initials alone.
  //
  // Initials are held back until the truncation runs out because two letters say
  // very little — collapsing "Pickle Juice Blackwood" to "P·JB" loses the team
  // where "P·JBlackwo" keeps it. They do win at three letters or more, where
  // they beat cutting a word mid-syllable ("HPT" over "HPTi").
  function condenseWords(words, maxLength) {
    if (!words.length) return '';
    const joined = words.join('');
    if (joined.length <= maxLength) return joined;
    if (words.length > 1) {
      const leadInitials = initials(words.slice(0, -1));
      const last = words[words.length - 1];
      if (leadInitials.length + last.length <= maxLength) return leadInitials + last;
      const allInitials = initials(words);
      if (allInitials.length >= 3 && allInitials.length <= maxLength) return allInitials;
      if (leadInitials.length < maxLength) return (leadInitials + last).slice(0, maxLength);
      if (allInitials.length <= maxLength) return allInitials;
    }
    return joined.slice(0, maxLength);
  }

  // Ordered fallbacks for a header label, widest budget first. Later rungs are
  // only reached when an earlier one collides.
  function labelLadder(brand, tail, fullName) {
    const prefix = brand.length ? initials(brand) + ABBR_SEPARATOR : '';
    // Unbranded names carry their own first word, so they need the wider budget:
    // at 10 "ACE Moorestown" degrades past "AMoorestown" all the way to "AM".
    const budgets = brand.length ? [8, 10, 12, 16] : [12, 14, 16, 20];
    const ladder = budgets.map((budget) => prefix + condenseWords(tail, budget));
    ladder.push(fullName);
    return ladder;
  }

  // Ordered fallbacks for a cell chip. A chip is too short for condenseWords'
  // graceful degradation — at four characters "TFalls" would come back as "TF"
  // and throw away the letters that carry the word. So the rungs truncate the
  // words instead.
  //
  // The order is which loss hurts least. Leading letters go first, because they
  // are what a reader recognises and are usually already unambiguous ("STEL",
  // "HILL"). The last word comes next: it is the most identifying word in a CPL
  // team name, so it rescues the pairs whose leading letters agree — "Pickle
  // Place" and "Pickleball Palace" both open on "PICK" and separate cleanly into
  // "PLAC" and "PALA". Initials sit after that, discriminating where letters
  // cannot ("HPT" and "HS" beat "HAMI" twice over) but reading poorly on their
  // own, and a longer truncation is the last resort before the brand is pulled
  // back in.
  function codeLadder(brand, tail) {
    const joined = tail.join('').toUpperCase();
    const tailInitials = initials(tail);
    const lastWord = tail.length ? tail[tail.length - 1].toUpperCase() : '';
    const ladder = [
      joined.slice(0, 4),
      lastWord.slice(0, 4),
      tailInitials,
      joined.slice(0, 6),
      joined.slice(0, 8),
    ];
    if (brand.length) {
      ladder.push(initials(brand) + tailInitials);
      ladder.push(initials(brand) + joined.slice(0, 4));
    }
    return ladder;
  }

  // Walk every key down its ladder together: when a rung is claimed by more than
  // one key, all of them advance. Advancing only the losers would hand the good
  // abbreviation to whoever sorted first and read as arbitrary from outside —
  // two Hamilton teams should both end up on initials, not one on "HAMI" and the
  // other on "HPT". Keys whose ladders run out take a numeric suffix, which is
  // the readability floor rather than the strategy.
  function resolveUniqueLabels(keys, ladders) {
    const rungs = new Map(keys.map((key) => [key, 0]));
    const valueAt = (key) => {
      const ladder = ladders.get(key);
      return ladder[Math.min(rungs.get(key), ladder.length - 1)];
    };

    // Each pass either advances at least one key or stops, and no key advances
    // past its ladder, so the longest ladder bounds the pass count.
    const maxPasses = Math.max(1, ...keys.map((key) => ladders.get(key).length)) + 1;
    for (let pass = 0; pass < maxPasses; pass += 1) {
      const byValue = new Map();
      keys.forEach((key) => {
        const value = valueAt(key);
        if (!byValue.has(value)) byValue.set(value, []);
        byValue.get(value).push(key);
      });

      let advanced = false;
      byValue.forEach((claimants) => {
        if (claimants.length < 2) return;
        claimants.forEach((key) => {
          if (rungs.get(key) < ladders.get(key).length - 1) {
            rungs.set(key, rungs.get(key) + 1);
            advanced = true;
          }
        });
      });
      if (!advanced) break;
    }

    const resolved = {};
    const used = new Set();
    keys.forEach((key) => {
      let value = valueAt(key);
      if (used.has(value)) {
        let attempt = 2;
        while (used.has(`${value}${attempt}`)) attempt += 1;
        value = `${value}${attempt}`;
      }
      used.add(value);
      resolved[key] = value;
    });
    return resolved;
  }

  // { name: { label, code } } for the teams sharing one grid. `overrides` maps a
  // team name to a label, a code, or both, and is applied before uniqueness is
  // resolved so a hand-written abbreviation still forces the rest to move around
  // it rather than being silently renumbered itself.
  function buildTeamAbbreviations(teamNames, overrides) {
    const names = (Array.isArray(teamNames) ? teamNames : [])
      .map((name) => String(name || ''))
      .filter(Boolean);
    if (!names.length) return {};

    const overrideMap = overrides || {};
    const words = new Map(names.map((name) => [name, teamNameWords(name)]));
    const shared = new Map();
    assignSharedWordCounts(names, words, 0, shared);

    const labels = new Map();
    const codes = new Map();
    names.forEach((name) => {
      const list = words.get(name);
      // Whichever sees more brand: the neighbours, or the known list.
      const sharedCount = Math.max(shared.get(name) || 0, knownBrandWordCount(list));
      const brand = list.slice(0, sharedCount);
      const tail = list.slice(sharedCount);
      const override = overrideMap[name] || {};
      labels.set(name, override.label ? [override.label] : labelLadder(brand, tail, name));
      codes.set(name, override.code ? [override.code] : codeLadder(brand, tail));
    });

    const resolvedLabels = resolveUniqueLabels(names, labels);
    const resolvedCodes = resolveUniqueLabels(names, codes);
    return Object.fromEntries(names.map((name) => [name, {
      label: resolvedLabels[name],
      code: resolvedCodes[name],
    }]));
  }

  // The groups the dashboard presents a division in: the league's own pods when it
  // publishes one for every team, otherwise the schedule sections. A section is
  // whatever the schedule connects, so a handful of cross-pod matchups fuse several
  // pods into one section labelled "Northeast / Southeast / Southwest" — a heading
  // that names three groups and groups by none of them. The head-to-head matrix is
  // the one view that has to keep the sections, because a matrix has to contain
  // every matchup it displays and only the sections guarantee that.
  //
  // Everything that ranks a team among its neighbours reads this, in the pipeline
  // and on the page alike, so the seed on a card, the rank on a team page and the
  // power rank behind it can't drift apart. `label` is null only for an undivided
  // division, which has nothing to head. Teams keep the order they arrive in.
  function displayPodGroups(teams, meta) {
    const reported = (meta && meta.reportedPods) || null;
    if (reported && reported.length > 1 && teams.every((team) => team.reportedPod)) {
      return reported
        .map((label) => ({ label, teams: teams.filter((team) => team.reportedPod === label) }))
        .filter((group) => group.teams.length);
    }
    const podCount = meta && meta.podCount > 1 ? meta.podCount : 1;
    if (podCount <= 1) return [{ label: null, teams: teams.slice() }];
    const names = (meta && meta.podNames) || null;
    return Array.from({ length: podCount }, (_, index) => ({
      label: (names && names[index]) || `Pod ${index + 1}`,
      teams: teams.filter((team) => team.pod === index + 1),
    })).filter((group) => group.teams.length);
  }

  // The one thing every page here needs and none of them had: something to show
  // a reader when a load fails. Returned as a string so each caller can put it
  // in the container it owns — #mainview on a dashboard, a panel on the landing
  // page. Calm on purpose: the page is already broken, and a red alarm on top of
  // that only makes a reader think they did something wrong.
  function loadErrorHtml(message, linkText, linkHref) {
    const action = linkHref
      ? `<p class="load-error-action"><a href="${escapeHtml(linkHref)}">${escapeHtml(linkText)}</a></p>`
      : '';
    return `<div class="load-error" role="alert"><p class="load-error-msg">${escapeHtml(message)}</p>${action}</div>`;
  }

  // How stale the data on screen is, as { text, title }: a relative phrase to
  // read and an absolute timestamp for the tooltip.
  //
  // The bot refreshes every six hours, so a date-only asOf described four
  // different datasets and gave a reader no way to tell whether the refresh they
  // were waiting for had landed. meta.asOf is a full ISO timestamp now — but
  // shards compiled before that change still carry a bare date, and a bare date
  // has no time of day to be relative to. Reading one as midnight would report a
  // morning refresh as "16h ago", so those stay absolute rather than become
  // confidently wrong. Anything unparseable is echoed as-is; the one output this
  // must never produce is "undefined" or "NaN".
  function formatDataAge(asOf, now) {
    const raw = String(asOf == null ? '' : asOf).trim();
    if (!raw) return { text: 'update time unknown', title: '' };

    const parsed = new Date(raw);
    if (Number.isNaN(parsed.getTime())) return { text: `as of ${raw}`, title: '' };
    if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return { text: `as of ${raw}`, title: raw };

    const title = parsed.toLocaleString();
    const elapsed = (now == null ? Date.now() : now) - parsed.getTime();
    const minutes = Math.floor(elapsed / 60000);
    // A negative elapsed means the clock on this device is behind the builder's,
    // not that the data is from the future.
    if (minutes < 2) return { text: 'updated just now', title };
    if (minutes < 60) return { text: `updated ${minutes}m ago`, title };
    const hours = Math.floor(minutes / 60);
    if (hours < 36) return { text: `updated ${hours}h ago`, title };
    const days = Math.floor(hours / 24);
    return { text: `updated ${days}d ago`, title };
  }

  // ---------------------------------------------------------------------------
  // The site catalog (cpl/catalog.js): leagues → seasons → divisions.
  //
  // Read through these rather than off window.CPL_CATALOG directly. catalog.js
  // is a separate file with its own cache entry and nothing busts it, so every
  // page that reads it has to survive it being absent or a shape older than the
  // code reading it — the same skew the two player-index globals guard against.
  // Every accessor below answers with an empty value in that case, which costs a
  // selector rather than a page.
  // ---------------------------------------------------------------------------

  function getCatalog() {
    const catalog = globalThis.CPL_CATALOG;
    return catalog && Array.isArray(catalog.leagues) ? catalog : { leagues: [] };
  }

  function catalogLeagues() {
    return getCatalog().leagues.filter((league) => league && Array.isArray(league.seasons));
  }

  function catalogLeague(key) {
    return catalogLeagues().find((league) => league.key === key) || null;
  }

  function catalogSeasons(leagueKey) {
    const league = catalogLeague(leagueKey);
    return league ? league.seasons.filter((season) => season && Array.isArray(season.divisions)) : [];
  }

  function catalogSeason(leagueKey, seasonSlug) {
    return catalogSeasons(leagueKey).find((season) => season.slug === seasonSlug) || null;
  }

  // The season a league is playing now, falling back to its newest season when
  // every season is archived — a league that has wound down still has to be
  // reachable, and the archive is all there is to reach.
  function catalogCurrentSeason(leagueKey) {
    const seasons = catalogSeasons(leagueKey);
    return seasons.find((season) => season.status === 'current') || seasons[0] || null;
  }

  // Path from /cpl/ to one division's dashboard. Used by the finder and the
  // landing page, both of which sit at /cpl/.
  //
  // An entry with no season on it — decoded from a player-index.js written
  // before seasons, or by a shared.js cached from before them — yields the
  // season-less /cpl/<league>/?d=<slug>, which the league's redirect stub
  // resolves to the right season. So the season being missing costs one extra
  // hop, not a broken link.
  // The catalog, regrouped by season instead of by league: one entry per season
  // slug, each listing the leagues that played it.
  //
  // Season is the axis both /cpl/ and /cpl/archive/ organize by now. League is
  // not: the two leagues run their own calendars, so "which league" answers a
  // question nobody asks first, while "what is being played" and "what has
  // finished" are the two things a reader arrives wanting.
  //
  // Ordering is newest first, by the numeric `order` the compiler stamps on each
  // season. That stamp exists because nothing here can derive one: slugs read
  // <year>-<name>, so sorting them as strings puts Summer 2026 above Fall 2026.
  // A catalog cached from before the stamp falls back to the slug, which is
  // right across years and only wrong between seasons of the same one.
  function seasonsInPlay(status) {
    const groups = new Map();
    catalogLeagues().forEach((league) => {
      let rank = 0;
      league.seasons.forEach((season) => {
        if (!Array.isArray(season.divisions) || !season.divisions.length) return;
        const matches = status === 'current'
          ? season.status === 'current'
          : season.status !== 'current';
        if (!matches) {
          rank += 1;
          return;
        }
        if (!groups.has(season.slug)) {
          groups.set(season.slug, {
            slug: season.slug,
            label: season.label,
            order: Number(season.order) || 0,
            rank,
            entries: [],
          });
        }
        const group = groups.get(season.slug);
        group.rank = Math.min(group.rank, rank);
        group.entries.push({ key: league.key, label: league.label, season });
        rank += 1;
      });
    });
    return [...groups.values()].sort((a, b) => {
      if (a.order !== b.order) return b.order - a.order;
      if (a.rank !== b.rank) return a.rank - b.rank;
      return b.slug.localeCompare(a.slug);
    });
  }

  // How a division reads in a picker. Travel divisions are a bare bracket
  // ("3.5", "4.5 Mens") and get the league's own formatting; a local division is
  // meaningless without its club, since five clubs run a "3.25 - 3.99".
  function divisionOptionLabel(leagueKey, division) {
    return leagueKey === 'travel'
      ? formatTravelDivisionLabel(division.divisionName)
      : `${division.clubName || ''} — ${division.divisionName}`;
  }

  // The path from /cpl/ to one division's dashboard. `base` is the path from the
  // calling page back to /cpl/: '' from the landing page, '../' from a page one
  // directory in.
  function divisionHref(leagueKey, seasonSlug, divisionSlug, base = '') {
    return `${base}${leagueKey}/${seasonSlug}/?d=${encodeURIComponent(divisionSlug)}`;
  }

  // One <option>, value-carrying the path to go to. Building the path into the
  // value is what lets a single picker hold divisions from more than one season
  // *and* more than one league without its change handler having to work out
  // which of either an option came from — which is what the landing page's one
  // picker needs, now that it groups by season across both leagues.
  function divisionOptionHtml(leagueKey, seasonSlug, division, base = '') {
    const href = divisionHref(leagueKey, seasonSlug, division.slug, base);
    return `<option value="${escapeHtml(href)}">${escapeHtml(divisionOptionLabel(leagueKey, division))}</option>`;
  }

  // The <option> markup for one season's divisions.
  //
  // Divisions are used in catalog order (see sortDivisionsForLeague) and not
  // re-sorted here. The landing page used to sort them again with a subtly
  // different comparator, so it and the dashboards disagreed about which
  // division came first.
  function divisionOptionsHtml(leagueKey, season, { base = '', placeholder = 'Select a division…' } = {}) {
    const options = season.divisions
      .map((division) => divisionOptionHtml(leagueKey, season.slug, division, base))
      .join('');
    return `<option value="" disabled selected>${escapeHtml(placeholder)}</option>${options}`;
  }

  function divisionPath(entry, params) {
    const search = new URLSearchParams(params || {});
    search.set('d', entry.slug);
    const seasonSegment = entry.season ? `${entry.season}/` : '';
    return `${entry.league}/${seasonSegment}?${search.toString()}`;
  }

  return {
    escapeHtml,
    catalogCurrentSeason,
    catalogLeague,
    catalogLeagues,
    catalogSeason,
    catalogSeasons,
    divisionHref,
    divisionOptionHtml,
    divisionOptionLabel,
    divisionOptionsHtml,
    divisionPath,
    seasonsInPlay,
    getCatalog,
    decodeHtmlEntities,
    displayPodGroups,
    loadErrorHtml,
    formatDataAge,
    slugify,
    normalizeName,
    teamNameWords,
    condenseWords,
    buildTeamAbbreviations,
    isGenderedTravelDivisionName,
    isGenderApiBase,
    travelDivisionGender,
    formatTravelDivisionLabel,
    divisionSortKey,
    getTravelDivisionSortKey,
    formatDuprRating,
    DUPR_POINTS_PER_RATING,
    buildDuprRatingIndex,
    getPlayerIndex,
  };
}));
