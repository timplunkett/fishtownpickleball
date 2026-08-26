// Parse a division name into its expected DUPR bracket { min, max }.
// max is exclusive-ish: callers treat max - 0.001 as the inclusive upper bound.
// Returns null when the name doesn't encode a bracket.
function getDivisionBracket(divisionMeta) {
  const divisionName = String(divisionMeta?.divisionName || '').trim();
  if (!divisionName) return null;

  if (divisionMeta?.leagueType === 'travel') {
    const ratingMatch = divisionName.match(/^(\d+(?:\.\d+)?)/);
    if (!ratingMatch) return null;
    const min = Number(ratingMatch[1]);
    // The top bracket of an age group is uncapped: 4.5 in the open divisions,
    // 4.0 in the 50+ divisions.
    const isSenior = /\(\s*50\s*\+\s*\)/.test(divisionName);
    const ceiling = isSenior ? 4 : 4.5;
    return { min, max: min >= ceiling ? Infinity : min + 0.5 };
  }

  const rangeMatch = divisionName.match(/^(\d+(?:\.\d+)?)\s*[–-]\s*(\d+(?:\.\d+)?)$/);
  if (rangeMatch) {
    return { min: Number(rangeMatch[1]), max: Number(rangeMatch[2]) };
  }

  const overMatch = divisionName.match(/^(\d+(?:\.\d+)?)\s*&\s*over$/i);
  if (overMatch) {
    return { min: Number(overMatch[1]), max: Infinity };
  }

  const underMatch = divisionName.match(/^(\d+(?:\.\d+)?)\s*&\s*under$/i);
  if (underMatch) {
    return { min: 0, max: Number(underMatch[1]) };
  }

  return null;
}

module.exports = { getDivisionBracket };
