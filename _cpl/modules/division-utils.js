function getLeagueDataConfig(league = 'local') {
  return league === 'travel'
    ? { dataSubdir: 'data-travel', divisionsFile: 'divisions-travel.json' }
    : { dataSubdir: 'data-local', divisionsFile: 'divisions.json' };
}

// The division a bare /cpl/<league>/ URL opens when no ?d= is supplied. This is
// only a landing preference: every division is fetched, compiled and served
// identically, and its data lives at data-<slug>.js like all the others. Kept
// out of divisions.json on purpose, so the cached API manifest stays a faithful
// record of the API and nothing downstream can treat one division as special.
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
  unmatchedDivisionSlugs,
};
