const test = require('node:test');
const assert = require('node:assert/strict');
const {
  parseScheduledTime,
  summarizeDivisionSchedule,
  lineupDueUtc,
  DEFAULT_TIMEZONE,
  DEFAULT_RESULTS_WINDOW_HOURS,
  DEFAULT_MATCH_DURATION_HOURS,
  DEFAULT_AWAY_LINEUP_DAYS_BEFORE,
  DEFAULT_HOME_LINEUP_DAYS_BEFORE,
  DEFAULT_LINEUP_POST_HOUR,
} = require('../modules/refresh-selector');

const OPTIONS = {
  timezone: DEFAULT_TIMEZONE,
  resultsWindowHours: DEFAULT_RESULTS_WINDOW_HOURS,
  matchDurationHours: DEFAULT_MATCH_DURATION_HOURS,
  awayLineupDaysBefore: DEFAULT_AWAY_LINEUP_DAYS_BEFORE,
  lineupPostHour: DEFAULT_LINEUP_POST_HOUR,
};

test('parseScheduledTime converts Eastern wall time to UTC (EDT)', () => {
  const parsed = parseScheduledTime('2026-08-24T19:00', 'America/New_York');
  assert.equal(parsed.weekday, 'Mon');
  assert.equal(parsed.utcDate.toISOString(), '2026-08-24T23:00:00.000Z'); // UTC-4 in August
});

test('parseScheduledTime converts Eastern wall time to UTC (EST)', () => {
  const parsed = parseScheduledTime('2026-01-12T19:00', 'America/New_York');
  assert.equal(parsed.utcDate.toISOString(), '2026-01-13T00:00:00.000Z'); // UTC-5 in January
});

test('parseScheduledTime rejects junk', () => {
  assert.equal(parseScheduledTime('not-a-date', DEFAULT_TIMEZONE), null);
  assert.equal(parseScheduledTime(null, DEFAULT_TIMEZONE), null);
});

test('a division is due inside the post-match results window', () => {
  // Match ended ~3h ago (2h duration): inside the 12h results window.
  const nowUtc = new Date('2026-08-25T02:00:00Z');
  const matchups = [{ scheduledTime: '2026-08-24T19:00', endResult: null }];
  const summary = summarizeDivisionSchedule(matchups, nowUtc, OPTIONS);
  assert.equal(summary.eligible, true);
  assert.match(summary.reason, /post-match window/);
});

test('a division with only completed matchups is not due', () => {
  const nowUtc = new Date('2026-08-25T02:00:00Z');
  const matchups = [{ scheduledTime: '2026-08-24T19:00', endResult: 'home' }];
  const summary = summarizeDivisionSchedule(matchups, nowUtc, OPTIONS);
  assert.equal(summary.eligible, false);
  assert.equal(summary.reason, 'no incomplete scheduled matches');
});

test('a long-incomplete matchup keeps the division eligible as stale', () => {
  const nowUtc = new Date('2026-08-28T12:00:00Z'); // days later
  const matchups = [{ scheduledTime: '2026-08-24T19:00', endResult: null }];
  const summary = summarizeDivisionSchedule(matchups, nowUtc, OPTIONS);
  assert.equal(summary.eligible, true);
  assert.match(summary.reason, /stale/);
});

test('an upcoming matchup is not yet due before either lineup deadline', () => {
  // Match is Mon 2026-08-24 19:00 ET; away lineup isn't due until Sat 2026-08-22
  // 20:00 ET. Friday noon is well before that.
  const nowUtc = new Date('2026-08-21T12:00:00Z');
  const matchups = [{ scheduledTime: '2026-08-24T19:00', endResult: null }];
  const summary = summarizeDivisionSchedule(matchups, nowUtc, OPTIONS);
  assert.equal(summary.eligible, false);
  assert.equal(summary.reason, 'outside post-match window');
});

test('lineupDueUtc computes the away deadline (2 days before, 8pm local)', () => {
  const due = lineupDueUtc('2026-08-24T19:00', DEFAULT_TIMEZONE, DEFAULT_AWAY_LINEUP_DAYS_BEFORE, DEFAULT_LINEUP_POST_HOUR);
  assert.equal(due.toISOString(), '2026-08-23T00:00:00.000Z'); // Sat 8pm EDT
});

test('lineupDueUtc computes the home deadline (1 day before, 8pm local)', () => {
  const due = lineupDueUtc('2026-08-24T19:00', DEFAULT_TIMEZONE, DEFAULT_HOME_LINEUP_DAYS_BEFORE, DEFAULT_LINEUP_POST_HOUR);
  assert.equal(due.toISOString(), '2026-08-24T00:00:00.000Z'); // Sun 8pm EDT
});

test('a pending match becomes due once the away lineup deadline passes', () => {
  // Match Mon 2026-08-24 19:00 ET; away lineup due Sat 2026-08-22 20:00 ET.
  const nowUtc = new Date('2026-08-23T12:00:00Z'); // Sunday, after away due, before home due
  const matchups = [{ scheduledTime: '2026-08-24T19:00', endResult: null }];
  const summary = summarizeDivisionSchedule(matchups, nowUtc, OPTIONS);
  assert.equal(summary.eligible, true);
  assert.match(summary.reason, /pending match lineup/);
});

test('a pending match stays due after the home lineup deadline, up to game time', () => {
  const nowUtc = new Date('2026-08-24T12:00:00Z'); // Monday, match plays tonight
  const matchups = [{ scheduledTime: '2026-08-24T19:00', endResult: null }];
  const summary = summarizeDivisionSchedule(matchups, nowUtc, OPTIONS);
  assert.equal(summary.eligible, true);
  assert.match(summary.reason, /pending match lineup/);
});

test('primary weekday is the modal scheduled day', () => {
  const nowUtc = new Date('2026-08-25T00:00:00Z');
  const matchups = [
    { scheduledTime: '2026-08-24T19:00', endResult: 'home' }, // Mon
    { scheduledTime: '2026-08-17T19:00', endResult: 'home' }, // Mon
    { scheduledTime: '2026-08-19T19:00', endResult: 'home' }, // Wed
  ];
  const summary = summarizeDivisionSchedule(matchups, nowUtc, OPTIONS);
  assert.equal(summary.primaryWeekday, 'Mon');
});
