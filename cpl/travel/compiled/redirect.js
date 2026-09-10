'use strict';

(() => {
  const LEAGUE = "travel";

  function seasonsOf() {
    const catalog = window.CPL_CATALOG;
    const leagues = (catalog && Array.isArray(catalog.leagues)) ? catalog.leagues : [];
    const entry = leagues.find((league) => league.key === LEAGUE);
    return entry ? entry : null;
  }

  function target() {
    const league = seasonsOf();
    if (!league || !league.seasons.length) return '';
    const search = window.location.search;
    const requested = new URLSearchParams(search).get('d') || '';

    // A ?d= naming a division of any season goes to that season, archived or
    // not. This is the whole point of the stub.
    if (requested) {
      const owner = league.seasons.find(
        (season) => season.divisions.some((division) => division.slug === requested),
      );
      if (owner) return owner.slug + '/' + search;
    }

    // Otherwise the current season, falling back to the newest one when the
    // league has wound down and nothing is current. Seasons are newest first.
    const current = league.seasons.find((season) => season.status === 'current')
      || league.seasons[0];
    return current.slug + '/' + search;
  }

  const to = target();
  if (to) {
    window.location.replace(to);
    return;
  }

  // Nothing to redirect to. Say so rather than leaving a blank page: this is
  // what a league whose catalog failed to load looks like from the outside.
  const host = document.getElementById('redirect-message');
  if (host) {
    host.textContent = "Couldn't work out which season to open. Go back to all leagues.";
  }
})();
