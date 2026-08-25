const test = require('node:test');
const assert = require('node:assert/strict');
const { slimPlayers } = require('../modules/fetcher');

// The API hands us players in league-rank order. These fixtures are the same
// roster twice, ranked differently, as happens between two weekly fetches.
const player = (playerId, ranking, extra = {}) => ({
  playerId, firstName: 'A', lastName: 'B', gender: 'Male', dupr: 'XXXXXX',
  isCaptain: false, isSub: false, teamId: 'team-1', teamName: 'Team One',
  wins: 0, losses: 0, gamesPlayed: 0, pointsWon: 0, totalPointsAgainst: 0,
  clutchWins: 0, clutchLosses: 0, mixedWins: 0, mixedLosses: 0,
  genderWins: 0, genderLosses: 0, ranking, ...extra,
});

const ids = (slimmed) => slimmed.$values.map((p) => p.playerId);

test('rank shifts do not reorder the file', () => {
  const week1 = { $values: [player('c', 1), player('a', 2), player('b', 3)] };
  const week2 = { $values: [player('b', 1), player('c', 2), player('a', 3)] };
  assert.deepEqual(ids(slimPlayers(week1)), ['a', 'b', 'c']);
  assert.deepEqual(ids(slimPlayers(week2)), ['a', 'b', 'c']);
});

test('rank is preserved as data, not as position', () => {
  const raw = { $values: [player('c', 1), player('a', 2), player('b', 3)] };
  assert.deepEqual(slimPlayers(raw).$values.map((p) => p.ranking), [2, 3, 1]);
});

test('a player rostered on one team and subbing on another gets a stable row order', () => {
  const rostered = player('dup', 9, { isSub: false, teamId: 'team-blue' });
  const subbing = player('dup', 8, { isSub: true, teamId: 'team-green' });
  // Either arrival order must yield the sub row first, so the compiler's
  // "last non-sub row wins" team attribution always lands on the rostered one.
  for (const raw of [{ $values: [rostered, subbing] }, { $values: [subbing, rostered] }]) {
    const rows = slimPlayers(raw).$values;
    assert.deepEqual(rows.map((p) => p.isSub), [true, false]);
    assert.equal(rows.at(-1).teamId, 'team-blue');
  }
});

test('two sub rows on different teams are ordered by teamId', () => {
  const a = player('dup', 4, { isSub: true, teamId: 'team-z' });
  const b = player('dup', 5, { isSub: true, teamId: 'team-a' });
  assert.deepEqual(slimPlayers({ $values: [a, b] }).$values.map((p) => p.teamId), ['team-a', 'team-z']);
  assert.deepEqual(slimPlayers({ $values: [b, a] }).$values.map((p) => p.teamId), ['team-a', 'team-z']);
});

test('a non-array payload passes through untouched', () => {
  assert.deepEqual(slimPlayers({ $ref: '12' }), { $ref: '12' });
});
