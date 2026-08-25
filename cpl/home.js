/* Landing page (cpl/index.html): division pickers + cross-league player finder. */
(function () {
  'use strict';

  var escapeHtml = window.CPLShared.escapeHtml;
  var divisionSortKey = window.CPLShared.divisionSortKey;
  var isGenderedTravelDivision = window.CPLShared.isGenderedTravelDivisionName;
  var formatTravelDivisionLabel = window.CPLShared.formatTravelDivisionLabel;
  var slugify = window.CPLShared.slugify;

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

  buildLocalSelect(window.LOCAL_DIVISIONS || []);
  buildTravelSelect(window.TRAVEL_DIVISIONS || []);

  // ── Player Finder ──────────────────────────────────────────────────────────

  var searchInput = document.getElementById('player-search');
  var resultsEl = document.getElementById('player-results');
  var hintEl = document.getElementById('finder-hint');

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
    var playerIndex = window.PLAYER_INDEX || [];
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
        return '<a class="player-result-entry" href="' + escapeHtml(divisionUrl(e, name)) + '" role="listitem">' +
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
          window.CPLShared.formatDuprRating(duprData) +
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
  searchInput.addEventListener('input', function () {
    clearTimeout(debounceTimer);
    var val = searchInput.value;
    debounceTimer = setTimeout(function () { renderResults(val); }, 120);
  });
}());
