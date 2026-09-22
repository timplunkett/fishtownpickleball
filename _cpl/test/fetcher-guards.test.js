// The failure these guard against is the quiet one: upstream renames a field,
// every shape helper folds the unrecognized payload into an empty array, the
// empty result is written over good data, the run exits 0 and the bot commits a
// blank site. Each case below is one link in that chain.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {
  assertArrayShape, isEmptyValue, writeGuarded, writeIfChanged,
} = require('../modules/fetcher');

function tempDir(t) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'cpl-fetcher-guards-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  return dir;
}

const NON_EMPTY = { $values: [{ matchupId: 'm1' }] };
const EMPTY_WRAPPER = { $values: [] };

test('writeGuarded allows a first write, empty or not', (t) => {
  const dir = tempDir(t);

  const fresh = path.join(dir, 'players.json');
  writeGuarded(fresh, NON_EMPTY, 'players');
  assert.deepEqual(JSON.parse(fs.readFileSync(fresh, 'utf-8')), NON_EMPTY);

  // No file on disk means nothing to lose: a genuine first run of a division
  // whose season has not started must not be blocked.
  const emptyFirst = path.join(dir, 'teams.json');
  writeGuarded(emptyFirst, EMPTY_WRAPPER, 'teams');
  assert.deepEqual(JSON.parse(fs.readFileSync(emptyFirst, 'utf-8')), EMPTY_WRAPPER);
});

test('writeGuarded allows non-empty over non-empty', (t) => {
  const dir = tempDir(t);
  const file = path.join(dir, 'matchups.json');
  writeGuarded(file, NON_EMPTY, 'matchups');

  const updated = { $values: [{ matchupId: 'm1' }, { matchupId: 'm2' }] };
  writeGuarded(file, updated, 'matchups');
  assert.deepEqual(JSON.parse(fs.readFileSync(file, 'utf-8')), updated);
});

test('writeGuarded refuses to replace non-empty with empty and leaves the file intact', (t) => {
  const dir = tempDir(t);
  const file = path.join(dir, 'matchups.json');
  writeGuarded(file, NON_EMPTY, 'matchups');
  const before = fs.readFileSync(file, 'utf-8');

  assert.throws(
    () => writeGuarded(file, EMPTY_WRAPPER, '3e9b6a58 matchups'),
    /Refusing to replace non-empty 3e9b6a58 matchups/,
  );
  // The point of the guard: the good data is still on disk afterwards.
  assert.equal(fs.readFileSync(file, 'utf-8'), before);
});

test('writeGuarded rejects an empty division manifest over a populated one', (t) => {
  const dir = tempDir(t);

  const manifest = path.join(dir, 'divisions.json');
  writeGuarded(manifest, [{ slug: 'abc12345' }], 'local division manifest');
  assert.throws(() => writeGuarded(manifest, [], 'local division manifest'), /Refusing to replace/);

  const obj = path.join(dir, 'thing.json');
  writeGuarded(obj, { a: 1 }, 'thing');
  assert.throws(() => writeGuarded(obj, {}, 'thing'), /Refusing to replace/);
});

test('writeGuarded overwrites a corrupt or already-empty cached file', (t) => {
  const dir = tempDir(t);

  const corrupt = path.join(dir, 'matchups.json');
  fs.writeFileSync(corrupt, 'not json at all');
  writeGuarded(corrupt, EMPTY_WRAPPER, 'matchups');
  assert.deepEqual(JSON.parse(fs.readFileSync(corrupt, 'utf-8')), EMPTY_WRAPPER);

  const alreadyEmpty = path.join(dir, 'teams.json');
  fs.writeFileSync(alreadyEmpty, JSON.stringify(EMPTY_WRAPPER));
  writeGuarded(alreadyEmpty, EMPTY_WRAPPER, 'teams');
  assert.deepEqual(JSON.parse(fs.readFileSync(alreadyEmpty, 'utf-8')), EMPTY_WRAPPER);
});

// writeGuarded/writeIfChanged report whether the write was a no-op, which is
// what lets fetchedAt.json skip re-stamping when a "due" fetch comes back
// identical to what's already cached — see fetcher.js's fetchedAt comment.
test('writeGuarded reports false when the fetch came back unchanged', (t) => {
  const dir = tempDir(t);
  const file = path.join(dir, 'players.json');

  assert.equal(writeGuarded(file, NON_EMPTY, 'players'), true, 'first write is always a change');
  assert.equal(writeGuarded(file, NON_EMPTY, 'players'), false, 'identical re-fetch is not a change');

  const updated = { $values: [{ matchupId: 'm1' }, { matchupId: 'm2' }] };
  assert.equal(writeGuarded(file, updated, 'players'), true, 'a real difference is a change');
});

test('writeIfChanged mirrors writeGuarded\'s change reporting for unguarded files', (t) => {
  const dir = tempDir(t);
  const file = path.join(dir, 'playoffMatchups.json');

  assert.equal(writeIfChanged(file, EMPTY_WRAPPER), true, 'first write is always a change');
  assert.equal(writeIfChanged(file, EMPTY_WRAPPER), false, 'identical re-fetch is not a change');
  assert.equal(writeIfChanged(file, NON_EMPTY), true, 'a real difference is a change');
});

test('isEmptyValue recognizes both the bare and $values-wrapped shapes', () => {
  assert.equal(isEmptyValue([]), true);
  assert.equal(isEmptyValue({}), true);
  assert.equal(isEmptyValue({ $values: [] }), true);
  assert.equal(isEmptyValue(null), true);
  assert.equal(isEmptyValue(undefined), true);
  assert.equal(isEmptyValue([1]), false);
  assert.equal(isEmptyValue({ $values: [1] }), false);
  assert.equal(isEmptyValue({ a: 1 }), false);
});

test('assertArrayShape accepts every shape extractValues understands', () => {
  assert.doesNotThrow(() => assertArrayShape([], 'matchups'));
  assert.doesNotThrow(() => assertArrayShape({ $values: [] }, 'matchups'));
  assert.doesNotThrow(() => assertArrayShape({ matchups: [] }, 'matchups'));
  assert.doesNotThrow(() => assertArrayShape({ matchups: { $values: [] } }, 'matchups'));
});

test('assertArrayShape rejects a renamed envelope instead of silently yielding []', () => {
  // Exactly the payload extractValues() flattens to [] — the reason the old
  // `!Array.isArray(extractValues(...))` check could never fire.
  assert.throws(
    () => assertArrayShape({ items: [{ matchupId: 'm1' }] }, 'Matchups for division abc12345'),
    /Matchups for division abc12345 payload is not a recognized array shape \(got object with keys \[items\]\)/,
  );
  assert.throws(() => assertArrayShape(null, 'Players'), /got null/);
  assert.throws(() => assertArrayShape('nope', 'Teams'), /got string/);
});

// ---------------------------------------------------------------------------
// Season guards
//
// The chain above is about an upstream rename emptying a division. These are
// about an upstream change silently filing one season's data under another
// season's name, which is worse: nothing is empty, nothing throws, and the
// archive quietly becomes a second copy of the current season.
// ---------------------------------------------------------------------------

const {
  assertSeasonMatches, mergeSeasonRecords, selectSeasonsToFetch, mergeGlobalPlayers,
  aggregateSeasonResults,
} = require('../modules/fetcher');

const FALL_2026 = { seasonNumber: 3, seasonYear: 2026 };
const SPRING_2026 = { seasonNumber: 1, seasonYear: 2026 };

test('divisions from the season that was asked for pass', () => {
  assert.doesNotThrow(() => assertSeasonMatches(
    [{ divisionName: '3.5', seasonNumber: 1, seasonYear: 2026 }],
    SPRING_2026,
    '/regions',
  ));
  // Nothing to check is not a failure: a season with no divisions is caught by
  // the empty-manifest guard instead, which reports it far more usefully.
  assert.doesNotThrow(() => assertSeasonMatches([], SPRING_2026, '/regions'));
});

// This is the one that matters. If the API stops honouring seasonNumber and
// seasonYear it answers for the current season, and a backfill would write live
// Fall divisions into 2026-spring/ — publishing this season's standings under
// last season's name, with every label on the page internally consistent.
test('a division from another season is refused rather than filed under this one', () => {
  assert.throws(
    () => assertSeasonMatches(
      [{ divisionName: '3.5', seasonNumber: 3, seasonYear: 2026 }],
      SPRING_2026,
      '/regions',
    ),
    /not being honoured/,
  );
});

test('the season manifest only ever grows', () => {
  // A season upstream stops listing is a season whose archive would otherwise
  // become unreachable: the cached manifest is the only index of it.
  const merged = mergeSeasonRecords([SPRING_2026, { seasonNumber: 3, seasonYear: 2025 }], [FALL_2026]);
  assert.deepEqual(
    merged.map((s) => `${s.seasonYear}/${s.seasonNumber}`),
    ['2026/3', '2026/1', '2025/3'],
    'newest first, and nothing dropped',
  );
});

test('the season manifest deduplicates the two travel API legs', () => {
  // The mixed and gendered legs both report Fall 2026 under different seasonIds.
  const merged = mergeSeasonRecords([], [FALL_2026, { ...FALL_2026 }]);
  assert.equal(merged.length, 1);
});

test('malformed season records are dropped rather than written through', () => {
  const merged = mergeSeasonRecords([{ seasonNumber: 'three', seasonYear: 2026 }, null], [FALL_2026]);
  assert.deepEqual(merged, [FALL_2026]);
});

// The crons pass no --season, so this is what makes "archived seasons are never
// fetched again" true rather than merely intended.
const RESOLVED = [
  { slug: '2026-fall', status: 'current' },
  { slug: '2026-spring', status: 'archived' },
  { slug: '2025-fall', status: 'archived' },
];

test('with no --season only the current season is fetched', () => {
  assert.deepEqual(selectSeasonsToFetch('travel', RESOLVED, null).map((s) => s.slug), ['2026-fall']);
  assert.deepEqual(selectSeasonsToFetch('travel', RESOLVED, []).map((s) => s.slug), ['2026-fall']);
});

test('--season is the one way to reach an archived season', () => {
  assert.deepEqual(
    selectSeasonsToFetch('travel', RESOLVED, ['2026-spring']).map((s) => s.slug),
    ['2026-spring'],
  );
});

test('a --season slug that names no season matches nothing, for the caller to report', () => {
  assert.deepEqual(selectSeasonsToFetch('travel', RESOLVED, ['2026-sprnig']), []);
});

test('a league with nothing current fetches nothing rather than the newest archive', () => {
  const allArchived = RESOLVED.map((season) => ({ ...season, status: 'archived' }));
  assert.deepEqual(selectSeasonsToFetch('travel', allArchived, null), []);
});

// ---------------------------------------------------------------------------
// global_players.json merge
//
// This is what decides whether the CPL Data Refresh workflow triggers a DUPR
// fetch for a run that just added a new player (see update-data.yml's
// "Fetch DUPR ratings for new players" step and run-pipeline.js's
// NEW_PLAYER_COUNT line) — a wrong count here either skips rating a real new
// player or fetches DUPR needlessly on every run.
// ---------------------------------------------------------------------------

const STAMP = '2026-09';

test('mergeGlobalPlayers counts a player not already on file as new', () => {
  const { merged, newPlayerCount } = mergeGlobalPlayers(
    [],
    [{ playerId: 'p1', firstName: 'Ann', lastName: 'Lee', dupr: 'abc123' }],
    STAMP,
  );
  assert.equal(newPlayerCount, 1);
  assert.deepEqual(merged, [{
    playerId: 'p1', firstName: 'Ann', lastName: 'Lee', dupr: 'abc123', duprRating: null, lastSeen: STAMP,
  }]);
});

test('mergeGlobalPlayers does not count an existing player as new, and preserves duprRating', () => {
  const existing = [{
    playerId: 'p1', firstName: 'Ann', lastName: 'Lee', dupr: 'abc123', duprRating: 4.1, lastSeen: '2026-01',
  }];
  const { merged, newPlayerCount } = mergeGlobalPlayers(
    existing,
    [{ playerId: 'p1', firstName: 'Ann', lastName: 'Lee', dupr: 'abc123' }],
    STAMP,
  );
  assert.equal(newPlayerCount, 0, 'a player already on file is not new, even on a plain re-fetch');
  assert.deepEqual(merged, [{
    playerId: 'p1', firstName: 'Ann', lastName: 'Lee', dupr: 'abc123', duprRating: 4.1, lastSeen: STAMP,
  }]);
});

test('mergeGlobalPlayers counts only the players actually new, in a mixed batch', () => {
  const existing = [{
    playerId: 'p1', firstName: 'Ann', lastName: 'Lee', dupr: null, duprRating: 4.1, lastSeen: '2026-01',
  }];
  const { merged, newPlayerCount } = mergeGlobalPlayers(
    existing,
    [
      { playerId: 'p1', firstName: 'Ann', lastName: 'Lee', dupr: null },
      { playerId: 'p2', firstName: 'Bo', lastName: 'Diaz', dupr: null },
    ],
    STAMP,
  );
  assert.equal(newPlayerCount, 1);
  assert.equal(merged.length, 2);
  const p2 = merged.find((p) => p.playerId === 'p2');
  assert.equal(p2.duprRating, null, 'a brand-new player always starts unrated');
});

test('mergeGlobalPlayers preserves entries the current run never saw (other leagues, prior runs)', () => {
  const existing = [
    { playerId: 'p1', firstName: 'Ann', lastName: 'Lee', dupr: null, duprRating: 4.1, lastSeen: '2026-01' },
  ];
  const { merged, newPlayerCount } = mergeGlobalPlayers(existing, [], STAMP);
  assert.equal(newPlayerCount, 0);
  assert.deepEqual(merged, existing);
});

test('mergeGlobalPlayers skips rows with no playerId on either side', () => {
  const { merged, newPlayerCount } = mergeGlobalPlayers(
    [{ firstName: 'No', lastName: 'Id' }],
    [{ firstName: 'Also', lastName: 'NoId' }],
    STAMP,
  );
  assert.equal(newPlayerCount, 0);
  assert.deepEqual(merged, []);
});

// ---------------------------------------------------------------------------
// Season result aggregation
//
// downloadLatestApiData() fetches one season at a time and combines their
// downloadSeason() results into what run-pipeline.js reports. A field that
// isn't explicitly summed here is silently dropped for any league with more
// than one season to fetch — exactly what happened to newPlayerCount from
// 2026-09-20 (ef332791) until this fix: it was computed correctly per
// season but never carried past this reduction, so NEW_PLAYER_COUNT was
// always 0 and "Fetch DUPR ratings for new players" never ran.
// ---------------------------------------------------------------------------

test('aggregateSeasonResults sums newPlayerCount across seasons instead of dropping it', () => {
  const result = aggregateSeasonResults([
    { failedDivisions: [], matchedSlugs: ['a'], matchedDivisions: [{ slug: 'a', name: 'A' }], newPlayerCount: 3 },
    { failedDivisions: [], matchedSlugs: ['b'], matchedDivisions: [{ slug: 'b', name: 'B' }], newPlayerCount: 4 },
  ]);
  assert.equal(result.newPlayerCount, 7, 'each season\'s new players must add up, not disappear');
});

test('aggregateSeasonResults concatenates failedDivisions and matched lists across seasons', () => {
  const result = aggregateSeasonResults([
    {
      failedDivisions: [{ league: 'travel', slug: 'x', name: 'X', error: 'boom' }],
      matchedSlugs: ['x'],
      matchedDivisions: [{ slug: 'x', name: 'X' }],
      newPlayerCount: 0,
    },
    {
      failedDivisions: [],
      matchedSlugs: ['y'],
      matchedDivisions: [{ slug: 'y', name: 'Y' }],
      newPlayerCount: 1,
    },
  ]);
  assert.deepEqual(result.failedDivisions, [{ league: 'travel', slug: 'x', name: 'X', error: 'boom' }]);
  assert.deepEqual(result.matchedSlugs, ['x', 'y']);
  assert.equal(result.newPlayerCount, 1);
});

test('aggregateSeasonResults treats a season with no result fields as contributing nothing', () => {
  // What a caught downloadSeason() failure pushes: just a failedDivisions
  // entry, with no matchedSlugs/matchedDivisions/newPlayerCount at all.
  const result = aggregateSeasonResults([
    { failedDivisions: [{ league: 'local', slug: '(2026-fall)', name: 'local 2026-fall', error: 'network down' }] },
  ]);
  assert.equal(result.newPlayerCount, 0);
  assert.deepEqual(result.matchedSlugs, []);
  assert.deepEqual(result.matchedDivisions, []);
});

test('aggregateSeasonResults returns zero/empty for no seasons fetched', () => {
  assert.deepEqual(aggregateSeasonResults([]), {
    failedDivisions: [], matchedSlugs: [], matchedDivisions: [], newPlayerCount: 0,
  });
});
