const test = require('node:test');
const assert = require('node:assert/strict');
const {
  classifySeasons,
  compareSeasons,
  currentSeason,
  isFetchable,
  parseSeasonSlug,
  resolveLeagueSeasons,
  seasonLabel,
  seasonSlug,
} = require('../modules/seasons');

const FALL_2026 = { seasonNumber: 3, seasonYear: 2026 };
const SPRING_2026 = { seasonNumber: 1, seasonYear: 2026 };
const FALL_2025 = { seasonNumber: 3, seasonYear: 2025 };

test('season slugs and labels follow the number → name mapping', () => {
  assert.equal(seasonSlug(FALL_2026), '2026-fall');
  assert.equal(seasonSlug(SPRING_2026), '2026-spring');
  assert.equal(seasonSlug({ seasonNumber: 2, seasonYear: 2026 }), '2026-summer');
  assert.equal(seasonLabel(FALL_2026), 'Fall 2026');
  assert.equal(seasonLabel(SPRING_2026), 'Spring 2026');
});

test('an unrecognized season number degrades instead of throwing', () => {
  // The league can invent a season 5 without telling us. Ugly but unambiguous
  // beats a pipeline that stops dead.
  assert.equal(seasonSlug({ seasonNumber: 5, seasonYear: 2027 }), '2027-s5');
  assert.equal(seasonLabel({ seasonNumber: 5, seasonYear: 2027 }), 'Season 5 2027');
});

test('slugs round-trip back to their season numbers', () => {
  assert.deepEqual(parseSeasonSlug('2026-fall'), { seasonYear: 2026, seasonNumber: 3 });
  assert.deepEqual(parseSeasonSlug('2027-s5'), { seasonYear: 2027, seasonNumber: 5 });
  assert.equal(parseSeasonSlug('nonsense'), null);
  assert.equal(parseSeasonSlug(''), null);
});

test('seasons order by year then by number within the year', () => {
  const sorted = [FALL_2026, FALL_2025, SPRING_2026].sort(compareSeasons);
  assert.deepEqual(sorted.map(seasonSlug), ['2025-fall', '2026-spring', '2026-fall']);
});

test('the newest season is current and every older one is archived', () => {
  const classified = classifySeasons([FALL_2025, FALL_2026, SPRING_2026]);
  assert.deepEqual(
    classified.map((s) => [s.slug, s.status]),
    [['2025-fall', 'archived'], ['2026-spring', 'archived'], ['2026-fall', 'current']],
  );
});

test('pin holds a season current past the arrival of its successor', () => {
  // The window this exists for: next season's shell is created upstream while
  // this season's playoffs are still being played.
  const classified = classifySeasons([SPRING_2026, FALL_2026], { pin: '2026-spring' });
  assert.deepEqual(
    classified.map((s) => [s.slug, s.status]),
    [['2026-spring', 'current'], ['2026-fall', 'archived']],
  );
});

test('a pin naming a season upstream does not have is ignored, not fatal', () => {
  const classified = classifySeasons([SPRING_2026, FALL_2026], { pin: '2030-winter' });
  assert.equal(currentSeason(classified).slug, '2026-fall');
});

test('archive freezes a season early, handing current to the next one down', () => {
  const classified = classifySeasons([SPRING_2026, FALL_2026], { archive: ['2026-fall'] });
  assert.deepEqual(
    classified.map((s) => [s.slug, s.status]),
    [['2026-spring', 'current'], ['2026-fall', 'archived']],
  );
});

test('archiving every season leaves none current rather than picking one anyway', () => {
  const classified = classifySeasons([SPRING_2026], { archive: ['2026-spring'] });
  assert.equal(currentSeason(classified), null);
});

test('an empty season list yields no seasons and no current season', () => {
  assert.deepEqual(classifySeasons([]), []);
  assert.equal(currentSeason([]), null);
});

test('resolveLeagueSeasons returns newest first and reads its own league key', () => {
  const config = { travel: { pin: '2026-spring' }, local: {} };
  const resolved = resolveLeagueSeasons('travel', [FALL_2025, SPRING_2026, FALL_2026], config);
  assert.deepEqual(resolved.map((s) => s.slug), ['2026-fall', '2026-spring', '2025-fall']);
  assert.equal(currentSeason(resolved).slug, '2026-spring');

  // The local league's config must not reach into the travel league's split.
  const localResolved = resolveLeagueSeasons('local', [SPRING_2026, FALL_2026], config);
  assert.equal(currentSeason(localResolved).slug, '2026-fall');
});

test('only the current season may be fetched', () => {
  const classified = classifySeasons([SPRING_2026, FALL_2026]);
  assert.deepEqual(classified.filter(isFetchable).map((s) => s.slug), ['2026-fall']);
});
