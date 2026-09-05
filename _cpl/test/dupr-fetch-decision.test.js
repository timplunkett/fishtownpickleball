// Covers the manual 'missing' marker added to global_players.json for a DUPR
// ID confirmed to be a typo or a deleted profile: it must be skipped on a
// standard `npm run dupr:fetch`, but still re-checked under either bypass
// flag, in case the profile reappears — exactly like a real 'NR' rating.
const test = require('node:test');
const assert = require('node:assert/strict');
const { shouldFetchPlayer, hasRatableDuprValue, resolveOutputRating } = require('../fetch-dupr');

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

test('resolveOutputRating collapses "missing" to "NR" instead of NaN (defensive — see hasRatableDuprValue)', () => {
  assert.equal(resolveOutputRating('missing'), 'NR');
  assert.equal(resolveOutputRating('NR'), 'NR');
  assert.equal(resolveOutputRating('3.75'), 3.75);
});

// dupr-ratings.js (and the per-division dupr shards it feeds) is a public,
// site-facing table. A real 'NR' rating means DUPR confirms the account
// exists with no doubles rating yet; 'missing' means DUPR has confirmed
// nothing at all. Showing 'missing' as 'NR' would claim a confirmation that
// was never made, so — unlike shouldFetchPlayer, where 'missing' mirrors
// 'NR' — here it must be excluded outright, the same as a still-null rating.
test('hasRatableDuprValue excludes a manually-flagged "missing" player from the ratings output', () => {
  assert.equal(hasRatableDuprValue({ playerId: 'p1', duprRating: 'missing' }), false);
  assert.equal(hasRatableDuprValue({ playerId: 'p1', duprRating: 'MISSING' }), false);
});

test('hasRatableDuprValue includes a real NR rating and a real numeric rating', () => {
  assert.equal(hasRatableDuprValue({ playerId: 'p1', duprRating: 'NR' }), true);
  assert.equal(hasRatableDuprValue({ playerId: 'p1', duprRating: '3.75' }), true);
});

test('hasRatableDuprValue excludes a player with no rating yet or no playerId', () => {
  assert.equal(hasRatableDuprValue({ playerId: 'p1', duprRating: null }), false);
  assert.equal(hasRatableDuprValue({ playerId: null, duprRating: '3.75' }), false);
});
