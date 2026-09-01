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

  // Newest season first, using the same comparator as the Archive box on the
  // landing page — the rows arrive grouped league by league, so their own order
  // put a local season after every travel one however recently it was played.
  function groupBySeason(list) {
    var groups = [];
    var bySlug = {};
    list.forEach(function (row) {
      if (!bySlug[row.season]) {
        bySlug[row.season] = {
          slug: row.season,
          label: row.seasonLabel,
          order: row.order || 0,
          rows: [],
        };
        groups.push(bySlug[row.season]);
      }
      bySlug[row.season].rows.push(row);
    });
    return groups.sort(shared.compareSeasonsNewestFirst);
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

  // Prefixed, because a season slug is a season slug and an element id is shared
  // with everything else on the page.
  function sectionId(group) {
    return 'season-' + group.slug;
  }

  function sectionFor(group) {
    var section = document.createElement('section');
    section.className = 'archive-season';
    section.id = sectionId(group);
    var count = group.rows.length;
    section.innerHTML = '<h2 class="tier-head">' + escapeHtml(group.label) + '</h2>' +
      '<p class="tier-sub">' + count + (count === 1 ? ' division' : ' divisions') + '</p>' +
      tableFor(group);
    return section;
  }

  // --- The season strip ------------------------------------------------------
  //
  // The same sticky strip of pills the division dashboards carry, for the same
  // reason: this page is one table per season stacked down a single column, and
  // by the fourth or fifth season the ones at the bottom are only reachable by
  // scrolling past every division above them.
  //
  // Written out here rather than shared with cpl/app.js. The strip is thirty
  // lines of DOM and this page loads none of app.js — pulling a 4,000-line
  // dashboard onto a static table to borrow its scroll spy would cost the reader
  // far more than it saves. The stylesheet is what the two actually share:
  // .section-toc and its chips are defined once, in styles.css.

  var toc = document.getElementById('archive-toc');
  // The gap a pill leaves between the strip and the season it lands on — the same
  // number app.js publishes for the dashboards, spent the same way.
  var SCROLL_GAP = 10;

  function tocHeight() {
    if (!toc || toc.hidden) return 0;
    return Math.round(toc.getBoundingClientRect().height);
  }

  // Published for the stylesheet, which spends it as scroll-margin so a pill
  // lands its season below the strip rather than behind it.
  function syncTocHeight() {
    document.documentElement.style.setProperty('--toc-height', tocHeight() + 'px');
  }

  // On a phone the strip is one row that scrolls sideways, so the pill it is
  // marking can be off the end of it. Nudged into view by scrolling the strip
  // itself, never scrollIntoView — that would drag the page along with it.
  function keepChipInView(link) {
    if (!link || toc.scrollWidth <= toc.clientWidth + 1) return;
    var stripBox = toc.getBoundingClientRect();
    var linkBox = link.getBoundingClientRect();
    if (linkBox.left < stripBox.left + 8) {
      toc.scrollLeft -= (stripBox.left + 8) - linkBox.left;
    } else if (linkBox.right > stripBox.right - 8) {
      toc.scrollLeft += linkBox.right - (stripBox.right - 8);
    }
  }

  // Which season the reader is in: the last one whose top has passed under the
  // strip. The ceiling reaches past the scroll gap as well, or a season parked
  // exactly where its own pill put it would sit ten pixels short of counting as
  // reached and the pill just clicked would stay unmarked.
  function markCurrent(sections) {
    if (!toc || toc.hidden || !sections.length) return;
    var ceiling = tocHeight() + SCROLL_GAP + 2;
    var current = sections[0];
    sections.forEach(function (section) {
      if (section.getBoundingClientRect().top <= ceiling) current = section;
    });
    var marked = null;
    Array.prototype.forEach.call(toc.querySelectorAll('a[href^="#"]'), function (link) {
      var on = link.getAttribute('href') === '#' + current.id;
      if (on) {
        link.className = 'toc-current';
        link.setAttribute('aria-current', 'true');
        marked = link;
      } else {
        link.className = '';
        link.removeAttribute('aria-current');
      }
    });
    keepChipInView(marked);
  }

  function scrollToSection(id, updateHash) {
    var target = document.getElementById(id);
    if (!target) return false;
    if (updateHash && window.history && window.history.replaceState) {
      window.history.replaceState(null, '', '#' + id);
    }
    target.scrollIntoView({ block: 'start', behavior: 'smooth' });
    return true;
  }

  function renderToc(groups) {
    if (!toc) return;
    // One season is not a list to jump around: the whole page is already on
    // screen, and a bar offering to take you to the only thing on it is noise.
    // Hidden here as well as in the markup, so the page's correctness does not
    // rest on an attribute in a file nothing checks.
    if (groups.length < 2) {
      toc.hidden = true;
      return;
    }
    toc.innerHTML =
      '<button type="button" class="toc-top" title="Back to the top of the page">↑ Top</button>' +
      groups.map(function (group) {
        return '<a href="#' + sectionId(group) + '">' + escapeHtml(group.label) + '</a>';
      }).join('');
    toc.hidden = false;

    var sections = groups.map(function (group) {
      return document.getElementById(sectionId(group));
    }).filter(Boolean);

    toc.addEventListener('click', function (event) {
      if (event.defaultPrevented || event.button || event.metaKey || event.ctrlKey
        || event.shiftKey || event.altKey) return;
      if (event.target.closest('.toc-top')) {
        // Back to the heading, and to a URL with no fragment left in it —
        // otherwise a reload would drop straight back to the season just left.
        if (window.history && window.history.replaceState) {
          window.history.replaceState(null, '', window.location.pathname);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      var link = event.target.closest('a[href^="#"]');
      if (link && scrollToSection(link.getAttribute('href').slice(1), true)) {
        event.preventDefault();
      }
    });

    // Coalesced to a frame: a scroll fires far faster than the page repaints.
    var frame = 0;
    window.addEventListener('scroll', function () {
      if (frame) return;
      frame = window.requestAnimationFrame(function () {
        frame = 0;
        markCurrent(sections);
      });
    }, { passive: true });
    // The strip wraps to a second row at some widths, so its height — and every
    // scroll-margin spending it — is a function of the viewport.
    window.addEventListener('resize', function () {
      syncTocHeight();
      markCurrent(sections);
    });

    syncTocHeight();
    markCurrent(sections);
    // A #season-… the page was opened with. The browser cannot do this itself:
    // nothing on this page is in the document when it parses the URL.
    if (window.location.hash.length > 1) {
      scrollToSection(window.location.hash.slice(1), false);
    }
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
  renderToc(groups);
}());
