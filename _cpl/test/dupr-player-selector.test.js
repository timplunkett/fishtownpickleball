// Pure-function coverage for the --refresh-mode/--season scoping added to
// fetch-dupr.js. The fs-reading wrappers (selectRecentPlayerIds,
// selectSeasonRosterPlayerIds) aren't covered here, same as
// selectDueDivisionSlugs in refresh-selector.test.js — they're thin readers
// over real cache paths, and the logic worth pinning down is in the pure
// steps below.
const test = require('node:test');
const assert = require('node:assert/strict');
const {
  recentPlayerIdsFromDivision,
  rosterPlayerIdsFromDivision,
} = require('../modules/dupr-player-selector');

const TIMEZONE = 'America/New_York';

// A 7-day window ending "now", matching DEFAULT_RECENT_DAYS.
const NOW_UTC = new Date('2026-09-29T12:00:00Z');
const CUTOFF_UTC = new Date('2026-09-22T12:00:00Z');
const WINDOW = { nowUtc: NOW_UTC, cutoffUtc: CUTOFF_UTC, timezone: TIMEZONE };

function matchupPlayerStats(playerIds) {
  return { $values: playerIds.map((playerId) => ({ playerId, gamesPlayed: 5 })) };
}

test('recentPlayerIdsFromDivision credits players from a completed matchup inside the window', () => {
  const matchups = [
    { matchupId: 'm1', endResult: 'home', scheduledTime: '2026-09-27T19:00' },
  ];
  const matchupDetails = [
    { matchupId: 'm1', details: { matchupPlayerStats: matchupPlayerStats(['p1', 'p2']) } },
  ];
  const ids = recentPlayerIdsFromDivision(matchups, matchupDetails, WINDOW);
  assert.deepEqual([...ids].sort(), ['p1', 'p2']);
});

test('recentPlayerIdsFromDivision excludes an incomplete matchup even inside the window', () => {
  const matchups = [
    { matchupId: 'm1', endResult: null, scheduledTime: '2026-09-27T19:00' },
  ];
  const matchupDetails = [
    { matchupId: 'm1', details: { matchupPlayerStats: matchupPlayerStats(['p1']) } },
  ];
  const ids = recentPlayerIdsFromDivision(matchups, matchupDetails, WINDOW);
  assert.deepEqual([...ids], []);
});

test('recentPlayerIdsFromDivision excludes a completed matchup older than the window', () => {
  const matchups = [
    { matchupId: 'm1', endResult: 'home', scheduledTime: '2026-08-01T19:00' },
  ];
  const matchupDetails = [
    { matchupId: 'm1', details: { matchupPlayerStats: matchupPlayerStats(['p1']) } },
  ];
  const ids = recentPlayerIdsFromDivision(matchups, matchupDetails, WINDOW);
  assert.deepEqual([...ids], []);
});

test('recentPlayerIdsFromDivision excludes a matchup scheduled after "now"', () => {
  const matchups = [
    { matchupId: 'm1', endResult: 'home', scheduledTime: '2026-10-05T19:00' },
  ];
  const matchupDetails = [
    { matchupId: 'm1', details: { matchupPlayerStats: matchupPlayerStats(['p1']) } },
  ];
  const ids = recentPlayerIdsFromDivision(matchups, matchupDetails, WINDOW);
  assert.deepEqual([...ids], []);
});

test('recentPlayerIdsFromDivision only pulls stats for matchups it actually selected', () => {
  const matchups = [
    { matchupId: 'm1', endResult: 'home', scheduledTime: '2026-09-27T19:00' }, // in window
    { matchupId: 'm2', endResult: 'away', scheduledTime: '2026-08-01T19:00' }, // stale
  ];
  const matchupDetails = [
    { matchupId: 'm1', details: { matchupPlayerStats: matchupPlayerStats(['p1']) } },
    { matchupId: 'm2', details: { matchupPlayerStats: matchupPlayerStats(['p2']) } },
  ];
  const ids = recentPlayerIdsFromDivision(matchups, matchupDetails, WINDOW);
  assert.deepEqual([...ids], ['p1']);
});

test('recentPlayerIdsFromDivision tolerates missing/malformed input', () => {
  assert.deepEqual([...recentPlayerIdsFromDivision(null, null, WINDOW)], []);
  assert.deepEqual([...recentPlayerIdsFromDivision([{ matchupId: 'm1' }], [], WINDOW)], []);
});

test('rosterPlayerIdsFromDivision reads playerIds out of a $values-wrapped roster', () => {
  const raw = {
    $values: [
      { playerId: 'p1', isSub: false },
      { playerId: 'p2', isSub: true },
    ],
  };
  assert.deepEqual([...rosterPlayerIdsFromDivision(raw)].sort(), ['p1', 'p2']);
});

test('rosterPlayerIdsFromDivision accepts a plain array too, and dedupes', () => {
  const raw = [
    { playerId: 'p1', isSub: false, teamId: 't1' },
    { playerId: 'p1', isSub: true, teamId: 't2' }, // same player, sub on a second team
  ];
  assert.deepEqual([...rosterPlayerIdsFromDivision(raw)], ['p1']);
});

test('rosterPlayerIdsFromDivision tolerates missing input', () => {
  assert.deepEqual([...rosterPlayerIdsFromDivision(null)], []);
});
