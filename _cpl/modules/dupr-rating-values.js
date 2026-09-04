'use strict';

// The literal, non-numeric values a player's `duprRating` can hold in
// global_players.json, and the single place that recognizes them.
//
// `NR` comes from the DUPR API itself: a real, findable profile that has no
// doubles rating yet.
//
// `missing` is never written by the fetcher. It is a manual marker for a
// `dupr` ID a person has confirmed is a typo or a deleted profile — one that
// will keep coming back with no match forever. Without it, `fetch-dupr.js`
// re-attempts (and re-misses) that lookup on every standard run, which both
// wastes paced API calls and inflates the miss-rate that guards against a
// dead access token (see MAX_MISS_RATE in fetch-dupr.js). Marking it 'missing'
// lets a standard run skip it outright, while --bypass-cache and
// --bypass-cache-nr still re-check it, in case the profile reappears.
//
// Anywhere a stored duprRating is parsed as a number, it must be checked
// against both markers first — 'NR' and 'missing' both must never reach
// Number(), which would silently produce NaN.
const NR_RATING = 'NR';
const MISSING_RATING = 'missing';

function isNrRating(value) {
  return typeof value === 'string' && value.trim().toUpperCase() === NR_RATING;
}

function isMissingRating(value) {
  return typeof value === 'string' && value.trim().toLowerCase() === MISSING_RATING;
}

// True for either marker — a duprRating that is not a real numeric rating.
function isUnratedDuprValue(value) {
  return isNrRating(value) || isMissingRating(value);
}

module.exports = {
  NR_RATING,
  MISSING_RATING,
  isNrRating,
  isMissingRating,
  isUnratedDuprValue,
};
