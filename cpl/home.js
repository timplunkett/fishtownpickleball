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
    ['travel-select-host', 'local-select-host', 'player-results'].forEach(function (id) {
      var host = document.getElementById(id);
      if (!host) return;
      host.innerHTML = '<p class="panel-empty load-error-msg"></p>';
      host.firstChild.textContent = "Couldn't load this page's scripts. Reload to try again.";
    });
    return;
  }

  var escapeHtml = shared.escapeHtml;
  var divisionSortKey = shared.divisionSortKey;
  var isGenderedTravelDivision = shared.isGenderedTravelDivisionName;
  var formatTravelDivisionLabel = shared.formatTravelDivisionLabel;
  var slugify = shared.slugify;

  function buildLocalSelect(divisions) {
    var host = document.getElementById('local-select-host');
    if (!divisions || !divisions.length) {
      host.innerHTML = '<p class="panel-empty">No divisions available.</p>';
      return;
    }
    var optsHtml = '<option value="" disabled selected>Select a division…</option>' +
      divisions.map(function (div) {
        var label = escapeHtml((div.clubName || '') + ' — ' + div.divisionName);
        return '<option value="' + escapeHtml(div.slug) + '">' + label + '</option>';
      }).join('');
    var wrap = document.createElement('div');
    wrap.className = 'select-wrap';
    var sel = document.createElement('select');
    sel.setAttribute('aria-label', 'Select a local league division');
    sel.innerHTML = optsHtml;
    sel.addEventListener('change', function () {
      window.location.href = 'local/?d=' + encodeURIComponent(sel.value);
    });
    wrap.appendChild(sel);
    host.appendChild(wrap);
  }

  function buildTravelSelect(divisions) {
    var host = document.getElementById('travel-select-host');
    if (!divisions || !divisions.length) {
      host.innerHTML = '<p class="panel-empty">No divisions available yet.</p>';
      return;
    }
    var sorted = divisions.slice().sort(function (a, b) {
      var keyA = divisionSortKey(a.divisionName);
      var keyB = divisionSortKey(b.divisionName);
      var genderA = isGenderedTravelDivision(a.divisionName) ? 1 : 0;
      var genderB = isGenderedTravelDivision(b.divisionName) ? 1 : 0;
      if (genderA !== genderB) return genderA - genderB;
      if (keyA !== keyB) return keyA - keyB;
      return String(a.divisionName || '').localeCompare(String(b.divisionName || ''), undefined, { numeric: true });
    });
    var opts = '<option value="" disabled selected>Select a division…</option>' +
      sorted.map(function (div) {
        return '<option value="' + escapeHtml(div.slug) + '">' + escapeHtml(formatTravelDivisionLabel(div.divisionName)) + '</option>';
      }).join('');
    var wrap = document.createElement('div');
    wrap.className = 'select-wrap';
    var sel = document.createElement('select');
    sel.setAttribute('aria-label', 'Select a cross club league division');
    sel.innerHTML = opts;
    sel.addEventListener('change', function () {
      window.location.href = 'travel/?d=' + encodeURIComponent(sel.value);
    });
    wrap.appendChild(sel);
    host.appendChild(wrap);
  }

  // How fresh the data is, on the one page whose URL actually gets shared — it
  // said nothing at all before. The newest stamp across every division, read off
  // the two bootstraps this page already loads: the alternative is a data shard,
  // and those run hundreds of kilobytes each with twenty-two to choose from.
  // ISO timestamps sort lexicographically, so the last one is the newest, and a
  // date-only stamp from an older shard still sorts into the right place.
  function renderFreshness() {
    var host = document.getElementById('data-freshness');
    if (!host) return;
    var newest = (window.LOCAL_DIVISIONS || []).concat(window.TRAVEL_DIVISIONS || [])
      .map(function (div) { return div.asOf || ''; })
      .filter(Boolean)
      .sort()
      .pop();
    if (!newest) return;
    var age = shared.formatDataAge(newest);
    host.textContent = age.text;
    if (age.title) host.title = age.title;
  }

  buildLocalSelect(window.LOCAL_DIVISIONS || []);
  buildTravelSelect(window.TRAVEL_DIVISIONS || []);
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
    var playerKey = entry.playerId || slugify(playerName);
    if (entry.team) {
      return entry.league + '/?d=' + encodeURIComponent(entry.slug) +
        '&team=' + encodeURIComponent(slugify(entry.team)) +
        '&player=' + encodeURIComponent(playerKey);
    }
    return entry.league + '/?d=' + encodeURIComponent(entry.slug) +
      '&player=' + encodeURIComponent(playerKey);
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
      var entriesHtml = entries.map(function (e) {
        var badgeClass = e.league === 'travel' ? 'travel' : 'local';
        var badgeLabel = e.league === 'travel' ? 'CPL' : 'Local';
        var locationParts = [];
        if (e.club) locationParts.push(escapeHtml(e.club));
        locationParts.push(escapeHtml(e.division));
        var locationText = locationParts.join(' — ');
        // No role="listitem" here. #player-results carried role="list", but
        // these anchors are its grandchildren (inside .player-result /
        // .player-result-entries), so the list contained no items at all and a
        // screen reader announced an empty list over every result. They are
        // links, and the roles bought nothing even when they lined up — so both
        // are gone rather than the DOM flattened around them.
        return '<a class="player-result-entry" href="' + escapeHtml(divisionUrl(e, name)) + '">' +
          '<span class="league-badge ' + badgeClass + '">' + badgeLabel + '</span>' +
          '<span class="division-name">' + locationText + '</span>' +
          '<span class="team-name">· ' + escapeHtml(e.team || '') + '</span>' +
          (e.isCaptain ? ' <sup class="captain-tag" title="Team captain">C</sup>' : '') +
          (e.isSub ? ' <span class="sub-tag" title="Sub — not a rostered team member">sub</span>' : '') +
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
