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

  // The Division cell holds only the bracket. A local division's club is not
  // repeated on every row of the table — it heads a group of them instead, which
  // is what stops the Summer 2026 table from being four columns of the same four
  // club names.
  function divisionCell(row) {
    var href = shared.divisionHref(row.league, row.season, row.slug, '../');
    return '<a class="app-link" href="' + escapeHtml(href) + '">' + escapeHtml(row.division) + '</a>';
  }

  // A podium place.
  //
  // No medal glyph here: the column headers carry them once, and repeating a
  // medal on every row of a nineteen-row table is decoration rather than
  // information.
  //
  // Third place is left empty wherever no match decided it — these brackets have
  // two beaten semi-finalists and no third-place match, so there is no result to
  // report. It used to show the better-placed of the two, marked as a tiebreak,
  // which put a team's name under a bronze medal it had not won.
  function placeCell(row, index) {
    var name = row.places[index];
    var unearned = index === 2 && row.thirdFromStandings && row.basis === 'playoffs';
    if (!name || unearned) return '<td class="arch-place arch-none"></td>';
    return '<td class="arch-place"><span class="arch-team">' + escapeHtml(name) + '</span></td>';
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

  var COLUMNS = 5;

  // Consecutive rows sharing a club, in the order the compiler emitted them —
  // which already sorts local divisions by club, so a club's divisions arrive
  // together. Travel divisions have no club and each stand alone.
  function clubRuns(list) {
    var runs = [];
    list.forEach(function (row) {
      var last = runs[runs.length - 1];
      if (last && last.club === (row.clubName || '') && last.club) last.rows.push(row);
      else runs.push({ club: row.clubName || '', rows: [row] });
    });
    return runs;
  }

  function bodyFor(list) {
    return clubRuns(list).map(function (run) {
      var header = run.club
        ? '<tr class="arch-group"><th scope="colgroup" colspan="' + COLUMNS + '">' +
          escapeHtml(run.club) + '</th></tr>'
        : '';
      return header + run.rows.map(function (row) {
        return '<tr><th scope="row">' + divisionCell(row) + '</th>' +
          placeCell(row, 0) + placeCell(row, 1) + placeCell(row, 2) +
          basisCell(row) + '</tr>';
      }).join('');
    }).join('');
  }

  function tableFor(group) {
    var head = '<thead><tr>' +
      '<th scope="col">Division</th>' +
      PLACE_NAMES.map(function (name, i) {
        return '<th scope="col"><span aria-hidden="true">' + MEDALS[i] + '</span> ' + name + '</th>';
      }).join('') +
      '<th scope="col">Decided by</th>' +
      '</tr></thead>';
    return '<div class="arch-scroll"><table class="arch-table">' + head +
      '<tbody>' + bodyFor(group.rows) + '</tbody></table></div>';
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
