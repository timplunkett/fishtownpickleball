/* Season archive (cpl/archive/index.html): every finished division and its podium. */
(function () {
  'use strict';

  // shared.js and data.js are separate files with their own cache entries, so
  // either can be the one thing that fails to load. Reading off shared unguarded
  // threw on the first line, before anything was built — and a throw inside an
  // IIFE is invisible, so the page sat there with a heading and nothing under it,
  // indistinguishable from an archive that happens to be empty.
  var shared = window.CPLShared;
  var host = document.getElementById('archive-host');
  var empty = document.getElementById('archive-empty');
  if (!shared || !shared.escapeHtml || !host) {
    if (host) {
      host.innerHTML = '<p class="panel-empty load-error-msg"></p>';
      host.firstChild.textContent = "Couldn't load this page's scripts. Reload to try again.";
    }
    return;
  }

  var escapeHtml = shared.escapeHtml;
  var MEDALS = ['🥇', '🥈', '🥉'];
  var PLACE_NAMES = ['First place', 'Second place', 'Third place'];

  function rows() {
    var data = window.CPL_ARCHIVE;
    return data && Array.isArray(data.rows) ? data.rows : [];
  }

  // Rows arrive newest season first (the compiler emits them in catalog order),
  // so grouping in encounter order preserves it without a second sort.
  function groupBySeason(list) {
    var groups = [];
    var bySlug = {};
    list.forEach(function (row) {
      if (!bySlug[row.season]) {
        bySlug[row.season] = { slug: row.season, label: row.seasonLabel, rows: [] };
        groups.push(bySlug[row.season]);
      }
      bySlug[row.season].rows.push(row);
    });
    return groups;
  }

  function divisionCell(row) {
    var label = row.clubName
      ? escapeHtml(row.clubName) + ' <span class="arch-div">' + escapeHtml(row.division) + '</span>'
      : escapeHtml(row.division);
    var href = shared.divisionHref(row.league, row.season, row.slug, '../');
    return '<a class="arch-link" href="' + escapeHtml(href) + '">' + label + '</a>';
  }

  // A place a division never filled — a bracket that stopped early, or a
  // division too small to have a third team. Left as a dash rather than blank,
  // so an empty cell reads as "nobody finished here" instead of as a bug.
  function placeCell(row, index) {
    var name = row.places[index];
    if (!name) return '<td class="arch-place arch-none">—</td>';
    // Third place is a tiebreak rather than a result wherever no match decided
    // it: these brackets have two beaten semi-finalists and no third-place
    // match, so the better regular-season finisher is used. Marked, because the
    // other two places on the same row were actually played for.
    var provisional = index === 2 && row.thirdFromStandings && row.basis === 'playoffs';
    return '<td class="arch-place">' +
      '<span class="arch-medal" aria-hidden="true">' + MEDALS[index] + '</span>' +
      '<span class="arch-team">' + escapeHtml(name) + '</span>' +
      (provisional ? '<span class="arch-note" title="No third-place match was played; this is the better regular-season finish of the two beaten semi-finalists.">by standings</span>' : '') +
      '</td>';
  }

  // What decided the podium. Worth stating on every row rather than in a
  // footnote: both kinds are in this table at once, and "first place" means two
  // different things between them.
  function basisCell(row) {
    var playoffs = row.basis === 'playoffs';
    return '<td class="arch-basis">' +
      '<span class="arch-tag ' + (playoffs ? 'is-playoffs' : 'is-standings') + '" title="' +
      (playoffs
        ? 'Decided by the playoff bracket.'
        : 'No playoff final was played, so this is the final regular-season table.') +
      '">' + (playoffs ? 'Playoffs' : 'Regular season') + '</span></td>';
  }

  function tableFor(group) {
    var head = '<thead><tr>' +
      '<th scope="col">Division</th>' +
      PLACE_NAMES.map(function (name, i) {
        return '<th scope="col"><span aria-hidden="true">' + MEDALS[i] + '</span> ' + name + '</th>';
      }).join('') +
      '<th scope="col">Decided by</th>' +
      '</tr></thead>';
    var body = group.rows.map(function (row) {
      return '<tr><th scope="row">' + divisionCell(row) + '</th>' +
        placeCell(row, 0) + placeCell(row, 1) + placeCell(row, 2) +
        basisCell(row) + '</tr>';
    }).join('');
    return '<div class="arch-scroll"><table class="arch-table">' + head +
      '<tbody>' + body + '</tbody></table></div>';
  }

  function sectionFor(group) {
    var section = document.createElement('section');
    section.className = 'archive-season';
    var count = group.rows.length;
    section.innerHTML = '<h2 class="tier-head">' + escapeHtml(group.label) + '</h2>' +
      '<p class="tier-sub">' + count + (count === 1 ? ' division' : ' divisions') + '</p>' +
      tableFor(group);
    return section;
  }

  var groups = groupBySeason(rows());
  // Set either way rather than only unhiding: the markup ships this hidden, and
  // leaving the page's correctness to an attribute in a file nothing checks is
  // how the two drift apart.
  if (empty) empty.hidden = groups.length > 0;
  if (!groups.length) return;
  groups.forEach(function (group) {
    host.appendChild(sectionFor(group));
  });
}());
