// Covers the manual 'missing' marker added to global_players.json for a DUPR
// ID confirmed to be a typo or a deleted profile: it must be skipped on a
// standard `npm run dupr:fetch`, but still re-checked under either bypass
// flag, in case the profile reappears — exactly like a real 'NR' rating.
const test = require('node:test');
const assert = require('node:assert/strict');
const { shouldFetchPlayer, resolveOutputRating } = require('../fetch-dupr');

test('a player with no rating on file yet is always fetched', () => {
  assert.equal(shouldFetchPlayer({ duprRating: null }), true);
});

test('a manually-flagged "missing" DUPR ID is skipped on a standard run', () => {
  const player = { dupr: 'ABC123', duprRating: 'missing', duprNumericId: null };
  assert.equal(shouldFetchPlayer(player, {}), false);
  assert.equal(shouldFetchPlayer(player), false);
});

test('"missing" is re-fetched under --bypass-cache-nr, same as a real NR rating', () => {
  const player = { dupr: 'ABC123', duprRating: 'missing', duprNumericId: null };
  assert.equal(shouldFetchPlayer(player, { bypassNrCache: true }), true);
});

test('"missing" is re-fetched under --bypass-cache like every other player', () => {
  const player = { dupr: 'ABC123', duprRating: 'missing', duprNumericId: 12345 };
  assert.equal(shouldFetchPlayer(player, { bypassCache: true }), true);
});

test('a real "NR" rating is treated identically to "missing"', () => {
  const player = { dupr: 'ABC123', duprRating: 'NR', duprNumericId: null };
  assert.equal(shouldFetchPlayer(player, {}), false);
  assert.equal(shouldFetchPlayer(player, { bypassNrCache: true }), true);
});

test('a numeric rating with a numeric ID on file is skipped on a standard run', () => {
  const player = { dupr: 'ABC123', duprRating: '3.75', duprNumericId: 555 };
  assert.equal(shouldFetchPlayer(player, {}), false);
});

test('a numeric rating with no numeric ID yet (legacy) is re-fetched to capture one', () => {
  const player = { dupr: 'ABC123', duprRating: '3.75', duprNumericId: null };
  assert.equal(shouldFetchPlayer(player, {}), true);
});

test('resolveOutputRating collapses "missing" to "NR" instead of NaN', () => {
  assert.equal(resolveOutputRating('missing'), 'NR');
  assert.equal(resolveOutputRating('NR'), 'NR');
  assert.equal(resolveOutputRating('3.75'), 3.75);
});
