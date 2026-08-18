function getLeagueDataConfig(league = 'local') {
  return league === 'travel'
    ? { dataSubdir: 'data-travel', divisionsFile: 'divisions-travel.json' }
    : { dataSubdir: 'data-local', divisionsFile: 'divisions.json' };
}

function filterDivisions(divisions, { primaryOnly = false, divisionSlugs = null } = {}) {
  const divisionSlugSet = Array.isArray(divisionSlugs) ? new Set(divisionSlugs) : null;
  return divisions.filter((div) => {
    if (primaryOnly && !div.isDefault) return false;
    if (divisionSlugSet && !divisionSlugSet.has(div.slug)) return false;
    return true;
  });
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
  getLeagueDataConfig,
};
