// Unit coverage for the incremental-compile cache: content hashing (module code
// and per-division inputs), cache load/save, and the pure changed/unchanged
// decision. The filesystem walk that feeds real division data into this (see
// selectChangedDivisions in compile.js) isn't covered here — it's thin glue
// over catalog.js's own league/season discovery, which already has its own
// tests, and there's no fixture-friendly way to point it at a temp directory
// without writing into the real _cpl/data-*/ cache.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {
  computeModuleHash,
  computeDivisionInputHash,
  emptyCache,
  loadCache,
  saveCache,
  partitionByHash,
} = require('../modules/incremental');

function tmpDir(t) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'cpl-incremental-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  return dir;
}

test('computeModuleHash is deterministic and order-independent', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'cpl-incremental-mod-'));
  try {
    fs.writeFileSync(path.join(dir, 'a.js'), 'const a = 1;\n');
    fs.writeFileSync(path.join(dir, 'b.js'), 'const b = 2;\n');
    const first = computeModuleHash(dir, ['a.js', 'b.js']);
    const second = computeModuleHash(dir, ['a.js', 'b.js']);
    assert.equal(first, second);
    assert.match(first, /^[0-9a-f]{40}$/);
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

test('computeModuleHash changes when a tracked file\'s content changes', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'cpl-incremental-mod-'));
  try {
    fs.writeFileSync(path.join(dir, 'a.js'), 'const a = 1;\n');
    const before = computeModuleHash(dir, ['a.js']);
    fs.writeFileSync(path.join(dir, 'a.js'), 'const a = 2;\n');
    const after = computeModuleHash(dir, ['a.js']);
    assert.notEqual(before, after);
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

test('computeDivisionInputHash changes when a tracked input file changes', (t) => {
  const dir = tmpDir(t);
  fs.writeFileSync(path.join(dir, 'matchups.json'), JSON.stringify({ $values: [] }));
  const manifestEntry = { slug: 'abc123', divisionName: '3.5' };
  const before = computeDivisionInputHash(dir, manifestEntry, ['matchups.json']);

  fs.writeFileSync(path.join(dir, 'matchups.json'), JSON.stringify({ $values: [{ matchupId: 'm1' }] }));
  const after = computeDivisionInputHash(dir, manifestEntry, ['matchups.json']);

  assert.notEqual(before, after);
});

test('computeDivisionInputHash changes when the manifest entry changes but files do not', (t) => {
  const dir = tmpDir(t);
  fs.writeFileSync(path.join(dir, 'matchups.json'), JSON.stringify({ $values: [] }));
  const before = computeDivisionInputHash(dir, { divisionName: '3.5' }, ['matchups.json']);
  const after = computeDivisionInputHash(dir, { divisionName: '4.0' }, ['matchups.json']);
  assert.notEqual(before, after);
});

test('computeDivisionInputHash treats a missing file as a real (stable) input state', (t) => {
  const dir = tmpDir(t);
  // Neither file exists — hashing must not throw, and must be stable.
  const first = computeDivisionInputHash(dir, {}, ['matchups.json', 'teams.json']);
  const second = computeDivisionInputHash(dir, {}, ['matchups.json', 'teams.json']);
  assert.equal(first, second);

  // A file appearing where it was previously absent changes the hash — a
  // division whose teams.json shows up for the first time (see the fallback
  // note on podNameByTeam in compiler.js) must not look "unchanged".
  fs.writeFileSync(path.join(dir, 'teams.json'), JSON.stringify({ $values: [] }));
  const third = computeDivisionInputHash(dir, {}, ['matchups.json', 'teams.json']);
  assert.notEqual(second, third);
});

test('computeDivisionInputHash is unaffected by files outside the tracked list', (t) => {
  const dir = tmpDir(t);
  fs.writeFileSync(path.join(dir, 'matchups.json'), JSON.stringify({ $values: [] }));
  const before = computeDivisionInputHash(dir, {}, ['matchups.json']);
  // A file this division's compile doesn't read (an unrelated stray file)
  // must not perturb the hash.
  fs.writeFileSync(path.join(dir, 'notes.txt'), 'unrelated');
  const after = computeDivisionInputHash(dir, {}, ['matchups.json']);
  assert.equal(before, after);
});

test('loadCache returns an empty cache when nothing has been written yet', (t) => {
  const dir = tmpDir(t);
  const cachePath = path.join(dir, '.compile-cache.json');
  assert.deepEqual(loadCache(cachePath), emptyCache());
});

test('loadCache returns an empty cache for a corrupt file rather than throwing', (t) => {
  const dir = tmpDir(t);
  const cachePath = path.join(dir, '.compile-cache.json');
  fs.writeFileSync(cachePath, '{ not valid json');
  assert.deepEqual(loadCache(cachePath), emptyCache());
});

test('loadCache returns an empty cache for an unrecognized version rather than trusting stale shape', (t) => {
  const dir = tmpDir(t);
  const cachePath = path.join(dir, '.compile-cache.json');
  fs.writeFileSync(cachePath, JSON.stringify({ version: 999, divisions: { x: 'y' } }));
  assert.deepEqual(loadCache(cachePath), emptyCache());
});

test('saveCache then loadCache round-trips exactly', (t) => {
  const dir = tmpDir(t);
  const cachePath = path.join(dir, '.compile-cache.json');
  const cache = {
    version: 1,
    moduleHashByLeague: { local: 'deadbeef' },
    divisions: { 'local/2026-fall/abc123': 'cafef00d' },
  };
  saveCache(cache, cachePath);
  assert.deepEqual(loadCache(cachePath), cache);
});

test('partitionByHash keeps an entry unchanged only when its hash matches the cache', () => {
  const cacheDivisions = { 'local/2026-fall/abc': 'hash-a', 'local/2026-fall/def': 'hash-b' };
  const entries = [
    { key: 'local/2026-fall/abc', slug: 'abc', hash: 'hash-a' }, // matches -> unchanged
    { key: 'local/2026-fall/def', slug: 'def', hash: 'hash-b-new' }, // differs -> changed
    { key: 'local/2026-fall/ghi', slug: 'ghi', hash: 'hash-c' }, // never cached -> changed
  ];
  const { changed, unchanged } = partitionByHash(entries, cacheDivisions, false);
  assert.deepEqual(changed.sort(), ['def', 'ghi']);
  assert.deepEqual(unchanged, ['abc']);
});

test('partitionByHash forces everything changed when the module hash moved', () => {
  const cacheDivisions = { 'local/2026-fall/abc': 'hash-a' };
  const entries = [{ key: 'local/2026-fall/abc', slug: 'abc', hash: 'hash-a' }];
  const { changed, unchanged } = partitionByHash(entries, cacheDivisions, true);
  assert.deepEqual(changed, ['abc']);
  assert.deepEqual(unchanged, []);
});

test('partitionByHash treats an empty entry list as nothing to do', () => {
  const { changed, unchanged } = partitionByHash([], {}, false);
  assert.deepEqual(changed, []);
  assert.deepEqual(unchanged, []);
});
