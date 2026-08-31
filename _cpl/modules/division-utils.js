const path = require('path');

// Every league's cache is now a season at a time: _cpl/data-<league>/ holds one
// directory per season, plus the seasons.json manifest listing them. The
// per-season directory holds divisions.json and one directory per division —
// the layout the flat cache used to have at the top level.
function getLeagueDataConfig(league = 'local') {
  return {
    dataSubdir: league === 'travel' ? 'data-travel' : 'data-local',
    divisionsFile: 'divisions.json',
    seasonsFile: 'seasons.json',
  };
}

function getSeasonDataDir(league, seasonSlug) {
  const { dataSubdir } = getLeagueDataConfig(league);
  return path.join(__dirname, '..', dataSubdir, seasonSlug);
}

// The division a bare /cpl/<league>/<season>/ URL opens when no ?d= is supplied.
// This is only a landing preference: every division is fetched, compiled and
// served identically, and its data lives at data-<slug>.js like all the others.
// Kept out of divisions.json on purpose, so the cached API manifest stays a
// faithful record of the API and nothing downstream can treat one division as
// special.
//
// Keyed by league rather than by season: a season the table says nothing about
// falls through to its first division, which is what every archived season does.
// Naming a landing division per season would be a table to maintain forever for
// a page nobody lands on without a ?d=.
const LEAGUE_LANDING_SLUGS = {
  local: '3e9b6a58', // Bounce - Philly / 3.5 - 4.0
  travel: 'b7ca04e4', // 3.5
};

// Falls back to the first division so an inactive/renamed landing division
// degrades to "some division loads" rather than a blank dashboard.
function getLandingSlug(league, divisions) {
  const preferred = LEAGUE_LANDING_SLUGS[league];
  if (preferred && divisions.some((div) => div.slug === preferred)) return preferred;
  return divisions[0] ? divisions[0].slug : '';
}

// --division= is the only way to target a subset of divisions, so a typo'd slug
// must not pass as a successful no-op run. Requested slugs are checked against
// the divisions the run actually touched — across every league processed, since
// a slug belongs to exactly one league — rather than against a manifest on
// disk, which the fetch phase may have just replaced.
function unmatchedDivisionSlugs(divisionSlugs, matchedSlugs) {
  if (!Array.isArray(divisionSlugs)) return [];
  const matched = new Set(matchedSlugs);
  return divisionSlugs.filter((slug) => !matched.has(slug));
}

function filterDivisions(divisions, { divisionSlugs = null } = {}) {
  const divisionSlugSet = Array.isArray(divisionSlugs) ? new Set(divisionSlugs) : null;
  if (!divisionSlugSet) return [...divisions];
  return divisions.filter((div) => divisionSlugSet.has(div.slug));
}

function formatDivisionLabel(division) {
  return division.clubName ? `${division.clubName} / ` : '';
}

// Deterministic division order within one season:
// - local by clubName then divisionName
// - travel by numeric bracket, then regular before gendered, then name
//
// Lives here rather than in the compiler because the catalog has to produce the
// same order from the same manifest. Two orders for one list is how a division
// selector and a landing page end up disagreeing about which division is first.
function sortDivisionsForLeague(league, divisions) {
  // Required lazily: shared.js is a UMD module and requiring it at the top of
  // this file would put it in the load path of everything that only wants the
  // path helpers above.
  const { getTravelDivisionSortKey } = require('./shared');
  return [...divisions].sort((a, b) => {
    if (league === 'local') {
      const clubCmp = (a.clubName || '').localeCompare(b.clubName || '');
      if (clubCmp !== 0) return clubCmp;
    } else if (league === 'travel') {
      const aKey = getTravelDivisionSortKey(a.divisionName);
      const bKey = getTravelDivisionSortKey(b.divisionName);
      if (aKey.genderedRank !== bKey.genderedRank) return aKey.genderedRank - bKey.genderedRank;
      if (aKey.rating !== bKey.rating) return aKey.rating - bKey.rating;
      return aKey.text.localeCompare(bKey.text, undefined, { numeric: true });
    }
    return (a.divisionName || '').localeCompare(b.divisionName || '', undefined, { numeric: true });
  });
}

function extractValues(raw) {
  if (Array.isArray(raw)) return raw;
  if (!raw || typeof raw !== 'object') return [];
  if (Array.isArray(raw.$values)) return raw.$values;
  if (Array.isArray(raw.matchups?.$values)) return raw.matchups.$values;
  if (Array.isArray(raw.matchups)) return raw.matchups;
  return [];
}

module.exports = {
  extractValues,
  filterDivisions,
  formatDivisionLabel,
  getLandingSlug,
  getLeagueDataConfig,
  getSeasonDataDir,
  sortDivisionsForLeague,
  unmatchedDivisionSlugs,
};
