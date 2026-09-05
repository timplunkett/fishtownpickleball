// The `seasons` column added to `npm run dupr:missing-numeric`: a
// newest-first, comma-separated list of every league/season a player is
// rostered in, so a stalled DUPR lookup (including one manually marked
// 'missing' — see dupr-rating-values.js) can be told apart from someone who
// hasn't shown up in years.
const test = require('node:test');
const assert = require('node:assert/strict');
const { formatSeasons } = require('../find-missing-dupr-numeric-ids');

function season(slug, label, seasonYear, seasonNumber) {
  return { slug, label, seasonYear, seasonNumber };
}

test('formatSeasons is empty for a player with no roster entry at all', () => {
  assert.equal(formatSeasons(undefined), '');
  assert.equal(formatSeasons(new Map()), '');
});

test('formatSeasons orders newest first regardless of league', () => {
  const seasons = new Map([
    ['local/2025-fall', { league: 'local', season: season('2025-fall', 'Fall 2025', 2025, 3) }],
    ['travel/2026-spring', { league: 'travel', season: season('2026-spring', 'Spring 2026', 2026, 1) }],
  ]);
  assert.equal(formatSeasons(seasons), 'Travel Spring 2026, Local Fall 2025');
});

test('formatSeasons capitalizes the league and includes both when a player crosses leagues', () => {
  const seasons = new Map([
    ['travel/2026-fall', { league: 'travel', season: season('2026-fall', 'Fall 2026', 2026, 3) }],
    ['local/2026-summer', { league: 'local', season: season('2026-summer', 'Summer 2026', 2026, 2) }],
  ]);
  assert.equal(formatSeasons(seasons), 'Travel Fall 2026, Local Summer 2026');
});

test('the first entry is the most recent season, for a reader who only wants that', () => {
  const seasons = new Map([
    ['local/2024-spring', { league: 'local', season: season('2024-spring', 'Spring 2024', 2024, 1) }],
    ['local/2026-summer', { league: 'local', season: season('2026-summer', 'Summer 2026', 2026, 2) }],
    ['local/2025-fall', { league: 'local', season: season('2025-fall', 'Fall 2025', 2025, 3) }],
  ]);
  assert.equal(formatSeasons(seasons).split(', ')[0], 'Local Summer 2026');
});
