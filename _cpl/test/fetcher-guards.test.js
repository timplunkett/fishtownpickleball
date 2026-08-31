// The failure these guard against is the quiet one: upstream renames a field,
// every shape helper folds the unrecognized payload into an empty array, the
// empty result is written over good data, the run exits 0 and the bot commits a
// blank site. Each case below is one link in that chain.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { assertArrayShape, isEmptyValue, writeGuarded } = require('../modules/fetcher');

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
