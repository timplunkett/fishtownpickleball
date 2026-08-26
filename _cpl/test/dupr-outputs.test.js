const test = require('node:test');
const assert = require('node:assert/strict');
const { buildDuprShard, shardFileName } = require('../modules/dupr-outputs');

const RATINGS = {
  'pid-a': { rating: 3.5, numericId: 1, provisional: false },
  'pid-b': { rating: 4.0, numericId: 2, provisional: true },
};

test('a shard carries only the division roster, in a stable key order', () => {
  const roster = [{ playerId: 'pid-b' }, { playerId: 'pid-a' }, { playerId: 'pid-b' }];
  const shard = buildDuprShard(roster, RATINGS);
  assert.deepEqual(Object.keys(shard), ['pid-a', 'pid-b'], 'sorted, and the repeat is collapsed');
  assert.deepEqual(shard['pid-a'], RATINGS['pid-a']);
});

test('a shard skips roster entries the ratings table has nothing for', () => {
  const shard = buildDuprShard([{ playerId: 'pid-a' }, { playerId: 'pid-unrated' }, {}], RATINGS);
  assert.deepEqual(Object.keys(shard), ['pid-a']);
});

test('a shard is a subset of the league-wide table, not a reshaped copy', () => {
  // Dashboard pages read a shard through the same window.DUPR_RATINGS the
  // league-wide file sets, so the keys and values have to match it exactly.
  const shard = buildDuprShard([{ playerId: 'pid-a' }], RATINGS);
  assert.equal(shard['pid-a'], RATINGS['pid-a'], 'the same value object, untouched');
});

test('shard files are named after their division slug', () => {
  assert.equal(shardFileName('b7ca04e4'), 'dupr-b7ca04e4.js');
});
