// The lowest rating DUPR will issue. Nothing below it exists, so a bracket that
// would otherwise open at zero — an "& Under" division, whose name states only a
// ceiling — starts here instead. Without the floor the audit prints a range of
// "0.000 – 3.249" and can never flag a player as under the bracket, because no
// real rating falls short of zero.
const MIN_DUPR = 2;

// Parse a division name into its expected DUPR bracket { min, max }.
// max is exclusive-ish: callers treat max - 0.001 as the inclusive upper bound.
// min is never below MIN_DUPR.
// Returns null when the name doesn't encode a bracket.
function getDivisionBracket(divisionMeta) {
  // The floor is applied on the way out rather than at each return, so a bracket
  // shape added later can't quietly skip it.
  const bracket = (min, max) => ({ min: Math.max(min, MIN_DUPR), max });

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
    return bracket(min, min >= ceiling ? Infinity : min + 0.5);
  }

  const rangeMatch = divisionName.match(/^(\d+(?:\.\d+)?)\s*[–-]\s*(\d+(?:\.\d+)?)$/);
  if (rangeMatch) {
    return bracket(Number(rangeMatch[1]), Number(rangeMatch[2]));
  }

  const overMatch = divisionName.match(/^(\d+(?:\.\d+)?)\s*&\s*over$/i);
  if (overMatch) {
    return bracket(Number(overMatch[1]), Infinity);
  }

  const underMatch = divisionName.match(/^(\d+(?:\.\d+)?)\s*&\s*under$/i);
  if (underMatch) {
    return bracket(0, Number(underMatch[1]));
  }

  return null;
}

module.exports = { getDivisionBracket, MIN_DUPR };
