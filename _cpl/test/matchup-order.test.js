const test = require('node:test');
const assert = require('node:assert/strict');
const { slimMatchups, slimPlayoffMatchups, compareMatchups } = require('../modules/fetcher');

// The API hands matchups back in an unstable order — these fixtures are the
// same schedule twice, in two different arrival orders, as happens between
// two fetches with nothing about the matches themselves having changed.
const matchup = (matchupId, weekNumber, scheduledTime, extra = {}) => ({
  matchupId, weekNumber, scheduledTime, homeTeamId: 'home', awayTeamId: 'away',
  homePoints: 0, awayPoints: 0, endResult: null, homeName: 'Home', awayName: 'Away',
  ...extra,
});

const ids = (slimmed) => slimmed.$values.map((m) => m.matchupId);

test('arrival order does not reorder the file', () => {
  const a = matchup('a', 1, '2026-08-26T19:00:00');
  const b = matchup('b', 1, '2026-08-26T19:30:00');
  const c = matchup('c', 2, '2026-08-26T19:00:00');
  const week1 = { $values: [c, a, b] };
  const week2 = { $values: [b, c, a] };
  assert.deepEqual(ids(slimMatchups(week1)), ['a', 'b', 'c']);
  assert.deepEqual(ids(slimMatchups(week2)), ['a', 'b', 'c']);
});

test('matches scheduled at the same time are ordered by matchupId', () => {
  const a = matchup('z-later-id', 1, '2026-08-26T19:00:00');
  const b = matchup('a-earlier-id', 1, '2026-08-26T19:00:00');
  assert.deepEqual(ids(slimMatchups({ $values: [a, b] })), ['a-earlier-id', 'z-later-id']);
  assert.deepEqual(ids(slimMatchups({ $values: [b, a] })), ['a-earlier-id', 'z-later-id']);
});

test('week groups sort before scheduledTime within a week', () => {
  const week2 = matchup('later-week', 2, '2026-08-26T19:00:00');
  const week1 = matchup('earlier-week', 1, '2026-09-02T19:00:00');
  assert.deepEqual(ids(slimMatchups({ $values: [week2, week1] })), ['earlier-week', 'later-week']);
});

test('playoff matchups sort the same way', () => {
  const a = matchup('a', 1, '2026-08-26T19:00:00', { homePodRanking: 1, awayPodRanking: 2, playoffGame: 1 });
  const b = matchup('b', 1, '2026-08-26T19:30:00', { homePodRanking: 3, awayPodRanking: 4, playoffGame: 1 });
  assert.deepEqual(ids(slimPlayoffMatchups({ $values: [b, a] })), ['a', 'b']);
});

test('an unrecognized payload shape yields an empty list, not a throw', () => {
  // extractValues() (pre-existing behavior, unrelated to sorting) flattens
  // any shape it doesn't recognize to [], so there's nothing to sort.
  assert.deepEqual(slimMatchups({ $ref: '12' }), { $values: [] });
  assert.deepEqual(slimPlayoffMatchups({ $ref: '12' }), { $values: [] });
});

test('compareMatchups is exported and usable directly for pre-sorting fetch order', () => {
  const arr = [matchup('b', 1, '2026-08-26T19:30:00'), matchup('a', 1, '2026-08-26T19:00:00')];
  assert.deepEqual(arr.slice().sort(compareMatchups).map((m) => m.matchupId), ['a', 'b']);
});
