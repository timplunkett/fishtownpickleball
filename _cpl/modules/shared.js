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

    return duprData.numericId
      ? `<a href="https://dashboard.dupr.com/dashboard/player/${encodeURIComponent(duprData.numericId)}" target="_blank" rel="nofollow">${display}</a>`
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

  // Decode the packed player index emitted by the compiler (name, team and id
  // tables, a division table, integer entries; see packPlayerIndex) into the
  // plain entry objects the finder and dashboards consume. Unpacks once, then
  // serves the cached array.
  function unpackPlayerIndex(packed) {
    const pick = (list, index) => (index === -1 ? '' : list[index]);
    return packed.e.map((entry) => {
      const division = packed.d[entry[2]] || ['', '', 0, ''];
      const decoded = {
        name: pick(packed.n, entry[0]),
        team: pick(packed.t, entry[1]),
        division: division[1],
        slug: division[0],
        league: division[2] === 1 ? 'travel' : 'local',
        playerId: entry[3] === -1 ? null : packed.i[entry[3]],
      };
      if (division[3]) decoded.club = division[3];
      if (entry[4] & 1) decoded.isCaptain = true;
      if (entry[4] & 2) decoded.isSub = true;
      return decoded;
    });
  }

  // The previous encoding, in case a browser pairs a cached player-index.js
  // with a newer shared.js.
  function unpackLegacyPlayerIndex(packed) {
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

  function getPlayerIndex() {
    const root = globalThis;
    if (Array.isArray(root.PLAYER_INDEX)) return root.PLAYER_INDEX;
    const packed = root.PLAYER_INDEX_PACKED;
    if (!packed || !Array.isArray(packed.e)) return [];
    root.PLAYER_INDEX = Array.isArray(packed.s)
      ? unpackLegacyPlayerIndex(packed)
      : unpackPlayerIndex(packed);
    return root.PLAYER_INDEX;
  }

  return {
    escapeHtml,
    decodeHtmlEntities,
    slugify,
    normalizeName,
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
