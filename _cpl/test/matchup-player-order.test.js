const test = require('node:test');
const assert = require('node:assert/strict');
const { slimMatchupDetails } = require('../modules/fetcher');

// The API doesn't hold a completed matchup's per-player stats in a stable
// order either — these fixtures are the same matchup's stats twice, in two
// different arrival orders, as happens between two fetches with nothing
// about any player's stats actually changed.
const playerStat = (playerId, extra = {}) => ({
  playerId, isSub: false, teamId: 'team-1', gamesPlayed: 6, wins: 4, losses: 2,
  pointsWon: 100, totalPointsAgainst: 90, clutchWins: 1, clutchLosses: 1,
  mixedWins: 2, mixedLosses: 1, genderWins: 2, genderLosses: 1, ...extra,
});

const detailsFor = (statsArr) => [{
  matchupId: 'm1',
  details: {
    matchup: { endResult: 'home' },
    matchupPlayerStats: { $values: statsArr },
  },
}];

const ids = (slimmed) => slimmed[0].details.matchupPlayerStats.$values.map((p) => p.playerId);

test('arrival order does not reorder a completed matchup\'s player stats', () => {
  const fetch1 = detailsFor([playerStat('c'), playerStat('a'), playerStat('b')]);
  const fetch2 = detailsFor([playerStat('b'), playerStat('c'), playerStat('a')]);
  assert.deepEqual(ids(slimMatchupDetails(fetch1)), ['a', 'b', 'c']);
  assert.deepEqual(ids(slimMatchupDetails(fetch2)), ['a', 'b', 'c']);
});

test('players with no games played are still dropped after sorting', () => {
  const raw = detailsFor([playerStat('b'), playerStat('a', { gamesPlayed: 0 }), playerStat('c')]);
  assert.deepEqual(ids(slimMatchupDetails(raw)), ['b', 'c']);
});

test('a player rostered on one team and subbing on another (rare, but possible within one matchup) sorts sub row first', () => {
  const rostered = playerStat('dup', { isSub: false, teamId: 'team-blue' });
  const subbing = playerStat('dup', { isSub: true, teamId: 'team-green' });
  for (const arr of [[rostered, subbing], [subbing, rostered]]) {
    const rows = slimMatchupDetails(detailsFor(arr))[0].details.matchupPlayerStats.$values;
    assert.deepEqual(rows.map((p) => p.isSub), [true, false]);
  }
});

test('an incomplete matchup has no matchupPlayerStats to sort', () => {
  const raw = [{ matchupId: 'm2', details: { matchup: { endResult: null } } }];
  assert.equal(slimMatchupDetails(raw)[0].details.matchupPlayerStats, undefined);
});
