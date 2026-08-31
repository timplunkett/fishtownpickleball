/* Season archive (cpl/archive/index.html): every finished season, newest first. */
(function () {
  'use strict';

  // shared.js and catalog.js are separate files with their own cache entries, so
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

  // Seasons grouped by slug, newest first, each carrying the leagues that played
  // it. Grouping by season rather than by league is what makes this page read as
  // a history: Spring 2026 is one thing that happened, even when two leagues
  // were part of it.
  //
  // Ordering across leagues is by season slug, descending. Slugs start with the
  // year, so that sorts chronologically by year — and within a year it sorts
  // spring/summer/fall alphabetically rather than chronologically, which is
  // wrong. The catalog already holds each league's seasons in true newest-first
  // order, so the position within its own league is what actually orders this:
  // slug is only the tiebreak between two leagues' seasons.
  function archivedSeasons() {
    var groups = {};
    var order = [];
    shared.catalogLeagues().forEach(function (league) {
      var rank = 0;
      league.seasons.forEach(function (season) {
        if (season.status === 'current' || !season.divisions.length) return;
        if (!groups[season.slug]) {
          groups[season.slug] = { slug: season.slug, label: season.label, rank: rank, entries: [] };
          order.push(season.slug);
        }
        // The best (lowest) position this season holds in any league it was
        // played in. A season two leagues both ran should sort by how recent it
        // is, not by which league happened to register it first.
        groups[season.slug].rank = Math.min(groups[season.slug].rank, rank);
        groups[season.slug].entries.push({ league: league, season: season });
        rank += 1;
      });
    });
    return order.map(function (slug) { return groups[slug]; }).sort(function (a, b) {
      if (a.rank !== b.rank) return a.rank - b.rank;
      return b.slug.localeCompare(a.slug);
    });
  }

  function divisionCount(entries) {
    return entries.reduce(function (total, entry) { return total + entry.season.divisions.length; }, 0);
  }

  function buildSelect(panel, entry) {
    var wrap = document.createElement('div');
    wrap.className = 'select-wrap';
    var select = document.createElement('select');
    select.setAttribute(
      'aria-label',
      'Select a division in ' + entry.league.label + ', ' + entry.season.label,
    );
    // base: '../' because this page sits one directory inside /cpl/, and the
    // option values are paths relative to /cpl/ itself.
    select.innerHTML = shared.divisionOptionsHtml(entry.league.key, entry.season, { base: '../' });
    select.addEventListener('change', function () {
      if (select.value) window.location.href = select.value;
    });
    wrap.appendChild(select);
    panel.appendChild(wrap);
  }

  function buildSeasonBlock(group) {
    var section = document.createElement('section');
    section.className = 'archive-season';

    var heading = document.createElement('h2');
    heading.className = 'tier-head';
    heading.textContent = group.label;
    section.appendChild(heading);

    var count = divisionCount(group.entries);
    var sub = document.createElement('p');
    sub.className = 'tier-sub';
    sub.textContent = count === 1 ? '1 division' : count + ' divisions';
    section.appendChild(sub);

    var panels = document.createElement('div');
    panels.className = 'panels';
    group.entries.forEach(function (entry) {
      var panel = document.createElement('div');
      panel.className = 'panel';
      var panelHead = document.createElement('div');
      panelHead.className = 'panel-head';
      var title = document.createElement('h3');
      title.textContent = entry.league.label;
      var meta = document.createElement('p');
      meta.className = 'panel-season';
      meta.textContent = entry.season.divisions.length === 1
        ? '1 division'
        : entry.season.divisions.length + ' divisions';
      panelHead.appendChild(title);
      panelHead.appendChild(meta);
      panel.appendChild(panelHead);
      buildSelect(panel, entry);
      panels.appendChild(panel);
    });
    section.appendChild(panels);
    return section;
  }

  var groups = archivedSeasons();
  // Set either way rather than only unhiding: the markup ships this hidden, and
  // leaving the page's correctness to an attribute in a file nothing checks is
  // how the two drift apart.
  if (empty) empty.hidden = groups.length > 0;
  if (!groups.length) return;
  groups.forEach(function (group) {
    host.appendChild(buildSeasonBlock(group));
  });
}());
