/* Landing page (cpl/index.html): division pickers + cross-league player finder. */
(function () {
  'use strict';

  // shared.js is a separate file with its own cache entry, so it can be the one
  // thing that fails to load. Reading these off it unguarded threw on the first
  // line, before either picker was built — and a throw in an IIFE is invisible,
  // so the page sat there with two panel headings and nothing under them,
  // looking like a division list that happened to be empty.
  var shared = window.CPLShared;
  if (!shared || !shared.escapeHtml) {
    ['now-panels', 'player-results'].forEach(function (id) {
      var host = document.getElementById(id);
      if (!host) return;
      host.innerHTML = '<p class="panel-empty load-error-msg"></p>';
      host.firstChild.textContent = "Couldn't load this page's scripts. Reload to try again.";
    });
    return;
  }

  var escapeHtml = shared.escapeHtml;
  var slugify = shared.slugify;

  // One <select> per (league, season). Its option values are the paths to go to
  // — see divisionOptionsHtml — so the handler is the same three lines wherever
  // it is used, and the archive page reuses both.
  function buildSeasonSelect(host, league, season, ariaLabel) {
    var wrap = document.createElement('div');
    wrap.className = 'select-wrap';
    var sel = document.createElement('select');
    sel.setAttribute('aria-label', ariaLabel);
    sel.innerHTML = shared.divisionOptionsHtml(league, season);
    sel.addEventListener('change', function () {
      if (sel.value) window.location.href = sel.value;
    });
    wrap.appendChild(sel);
    host.appendChild(wrap);
  }

  // The "Now playing" tier: one panel per league that actually has a season in
  // progress, built from the catalog rather than hard-coded.
  //
  // This used to be two fixed panels, one per league, which asserted that both
  // leagues are always in season. They are not: Cross Club plays spring and
  // fall, the local league ran a summer season, and between the two there are
  // stretches where one league has nothing live. A league with nothing current
  // is left out of this tier entirely and pointed at the archive below, rather
  // than shown as a heading over an empty picker.
  //
  // The season is named in the panel head, not left implicit — with more than
  // one season in the world, "Cross Club League" alone does not say which season
  // the picker is for.
  function buildNowPanels() {
    var host = document.getElementById('now-panels');
    var empty = document.getElementById('now-empty');
    var head = document.getElementById('now-head');
    if (!host) return;

    var live = shared.catalogLeagues().map(function (league) {
      var season = league.seasons.filter(function (entry) {
        return entry.status === 'current' && entry.divisions.length;
      })[0];
      return season ? { league: league, season: season } : null;
    }).filter(Boolean);

    // Both branches set both flags rather than relying on the markup's starting
    // state. The HTML ships with the empty line hidden, so the empty case only
    // ever needed to unhide it — but that makes the page's correctness depend on
    // an attribute in a file nothing checks, and the two would drift.
    var nothingLive = !live.length;
    if (head) head.hidden = nothingLive;
    if (empty) empty.hidden = !nothingLive;
    if (nothingLive) {
      // Every league between seasons at once. Rare, but it is what the site
      // looks like in the gap, and it should read as a lull rather than a fault.
      return;
    }

    live.forEach(function (entry) {
      var panel = document.createElement('div');
      panel.className = 'panel';

      var panelHead = document.createElement('div');
      panelHead.className = 'panel-head';
      var h2 = document.createElement('h2');
      h2.textContent = entry.league.label;
      var sub = document.createElement('p');
      sub.className = 'panel-season';
      sub.textContent = entry.season.label;
      panelHead.appendChild(h2);
      panelHead.appendChild(sub);
      panel.appendChild(panelHead);

      buildSeasonSelect(
        panel,
        entry.league.key,
        entry.season,
        'Select a division in ' + entry.league.label + ', ' + entry.season.label,
      );
      host.appendChild(panel);
    });
  }

  // The card linking to /cpl/archive/, summarised so the link says what is
  // behind it. Hidden outright when nothing is archived, which is what both
  // leagues look like in their first season — an "Archive" heading over nothing
  // invites someone to wonder what is missing.
  function buildArchiveCard() {
    var panel = document.getElementById('archive-panel');
    var summary = document.getElementById('archive-summary');
    if (!panel) return;

    var seasons = [];
    shared.catalogLeagues().forEach(function (league) {
      league.seasons.forEach(function (season) {
        if (season.status !== 'current' && season.divisions.length) seasons.push(season);
      });
    });
    // Set either way, for the same reason as the Now tier above.
    panel.hidden = !seasons.length;
    if (!seasons.length) return;

    if (summary) {
      var newest = seasons.map(function (season) { return season.label; })[0];
      summary.textContent = seasons.length === 1
        ? 'One finished season — ' + newest + ' — frozen as it ended'
        : seasons.length + ' finished seasons, frozen as they ended';
    }
  }

  // How fresh the data is, on the one page whose URL actually gets shared — it
  // said nothing at all before. The newest stamp across every division, read off
  // the catalog this page already loads: the alternative is a data shard, and
  // those run hundreds of kilobytes each with twenty-two to choose from. ISO
  // timestamps sort lexicographically, so the last one is the newest, and a
  // date-only stamp from an older shard still sorts into the right place.
  //
  // Current seasons only. An archived season's stamp is the moment it froze and
  // will never move again, so including it would either be ignored (it is older)
  // or, once every season is archived, report a months-old freeze as this
  // page's update time.
  function renderFreshness() {
    var host = document.getElementById('data-freshness');
    if (!host) return;
    var stamps = [];
    shared.catalogLeagues().forEach(function (league) {
      league.seasons.forEach(function (season) {
        if (season.status !== 'current') return;
        season.divisions.forEach(function (div) {
          if (div.asOf) stamps.push(div.asOf);
        });
      });
    });
    var newest = stamps.sort().pop();
    if (!newest) return;
    var age = shared.formatDataAge(newest);
    host.textContent = age.text;
    if (age.title) host.title = age.title;
  }

  buildNowPanels();
  buildArchiveCard();
  renderFreshness();

  // ── Player Finder ──────────────────────────────────────────────────────────
  // The index (~250 KB of scripts) is only needed once someone actually
  // searches, so it lazy-loads on first focus/keystroke in the search box.

  var searchInput = document.getElementById('player-search');
  var resultsEl = document.getElementById('player-results');
  var hintEl = document.getElementById('finder-hint');
  var finderDataPromise = null;
  // Set when the index itself never arrived, which is a different fact from a
  // name that matched nothing. Reporting both as "No players found" told someone
  // on a flaky connection that a player they know is in the league does not
  // exist — the one answer this box must never give wrongly.
  var finderIndexFailed = false;

  function loadScript(src) {
    return new Promise(function (resolve) {
      var script = document.createElement('script');
      script.src = src;
      script.async = false;
      script.onload = function () { resolve(true); };
      script.onerror = function () { resolve(false); };
      document.body.appendChild(script);
    });
  }

  function ensureFinderData() {
    if (!finderDataPromise) {
      // The DUPR table only decorates a result with a rating, so its failure is
      // survivable and unremarked; the index is the search itself.
      finderDataPromise = Promise.all([
        loadScript('player-index.js'),
        loadScript('dupr-ratings.js'),
      ]).then(function (loaded) {
        finderIndexFailed = !loaded[0];
      });
    }
    return finderDataPromise;
  }

  function normalize(s) {
    return String(s || '').toLowerCase().replace(/\s+/g, ' ').trim();
  }

  function divisionUrl(entry, playerName) {
    var params = { player: entry.playerId || slugify(playerName) };
    if (entry.team) params.team = slugify(entry.team);
    return shared.divisionPath(entry, params);
  }

  function renderResults(query) {
    var q = normalize(query);
    if (finderIndexFailed) {
      resultsEl.innerHTML = '<p class="panel-empty load-error-msg"></p>';
      resultsEl.firstChild.textContent = "Couldn't load the player list — check your connection.";
      hintEl.style.display = '';
      hintEl.textContent = 'Player list unavailable';
      return;
    }
    var playerIndex = shared.getPlayerIndex();
    if (!q) {
      resultsEl.innerHTML = '';
      hintEl.style.display = '';
      hintEl.textContent = 'Start typing to search across all leagues and divisions';
      return;
    }

    // Group entries by player identity (name + playerId), filtering by query.
    // Players sharing the same name but having different IDs are distinct people.
    var byKey = Object.create(null);
    var keyOrder = [];
    for (var i = 0; i < playerIndex.length; i++) {
      var entry = playerIndex[i];
      var normalizedName = normalize(entry.name);
      if (normalizedName.indexOf(q) === -1) continue;
      var playerKey = entry.name + (entry.playerId ? '|' + entry.playerId : '');
      if (!byKey[playerKey]) {
        byKey[playerKey] = [];
        keyOrder.push(playerKey);
      }
      byKey[playerKey].push(entry);
    }

    if (!keyOrder.length) {
      resultsEl.innerHTML = '<p class="panel-empty">No players found matching “' + escapeHtml(query) + '”.</p>';
      hintEl.textContent = 'No players found';
      return;
    }

    // The hint doubles as the screen-reader live region for result counts.
    hintEl.textContent = keyOrder.length + (keyOrder.length === 1 ? ' player found' : ' players found');

    var html = keyOrder.map(function (key) {
      var entries = byKey[key];
      var name = entries[0].name;
      // Current seasons first, then archived ones newest-first. A finder result
      // for someone who has played four seasons is mostly history, and the row
      // that matters is the team they are on now.
      var sortedEntries = entries.slice().sort(function (a, b) {
        if (!!a.archived !== !!b.archived) return a.archived ? 1 : -1;
        return String(b.season || '').localeCompare(String(a.season || ''));
      });
      var entriesHtml = sortedEntries.map(function (e) {
        var badgeClass = e.league === 'travel' ? 'travel' : 'local';
        var badgeLabel = e.league === 'travel' ? 'CPL' : 'Local';
        var locationParts = [];
        if (e.club) locationParts.push(escapeHtml(e.club));
        locationParts.push(escapeHtml(e.division));
        var locationText = locationParts.join(' — ');
        // The season is named on archived rows only. On a current row it would
        // repeat the same label down every result for no information; on an
        // archived one it is the whole reason the row reads differently from the
        // one above it.
        var seasonHtml = e.archived && e.seasonLabel
          ? ' <span class="season-tag" title="Archived season">' + escapeHtml(e.seasonLabel) + '</span>'
          : '';
        // No role="listitem" here. #player-results carried role="list", but
        // these anchors are its grandchildren (inside .player-result /
        // .player-result-entries), so the list contained no items at all and a
        // screen reader announced an empty list over every result. They are
        // links, and the roles bought nothing even when they lined up — so both
        // are gone rather than the DOM flattened around them.
        return '<a class="player-result-entry' + (e.archived ? ' archived' : '') + '" href="' +
          escapeHtml(divisionUrl(e, name)) + '">' +
          '<span class="league-badge ' + badgeClass + '">' + badgeLabel + '</span>' +
          '<span class="division-name">' + locationText + '</span>' +
          '<span class="team-name">· ' + escapeHtml(e.team || '') + '</span>' +
          (e.isCaptain ? ' <sup class="captain-tag" title="Team captain">C</sup>' : '') +
          (e.isSub ? ' <span class="sub-tag" title="Sub — not a rostered team member">sub</span>' : '') +
          seasonHtml +
          '</a>';
      }).join('');
      // Use the first entry that has a playerId with DUPR data
      var duprRatings = window.DUPR_RATINGS || {};
      var duprEntry = entries.find(function (e) { return e.playerId && duprRatings[e.playerId] != null; });
      var duprHtml = '';
      if (duprEntry) {
        var duprData = duprRatings[duprEntry.playerId];
        duprHtml = '<span class="player-result-dupr">DUPR ' +
          shared.formatDuprRating(duprData) +
          '</span>';
      }
      return '<div class="player-result">' +
        '<div class="player-result-name">' + escapeHtml(name) + duprHtml + '</div>' +
        '<div class="player-result-entries">' + entriesHtml + '</div>' +
        '</div>';
    }).join('');

    resultsEl.innerHTML = html;
  }

  var debounceTimer = null;
  searchInput.addEventListener('focus', function () { ensureFinderData(); });
  searchInput.addEventListener('input', function () {
    clearTimeout(debounceTimer);
    var val = searchInput.value;
    debounceTimer = setTimeout(function () {
      ensureFinderData().then(function () { renderResults(val); });
    }, 120);
  });
}());
