// Control characters in the hand-written sources, which nothing else would
// catch. A stray NUL landed in cpl/app.js once, inside a template literal used
// only as an opaque cache key — so it changed no behaviour, passed every test and
// every lint rule, and announced itself only by making `grep` call the file
// binary. Cheap to assert, and the failure mode is invisible without it.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '../..');

// The files a person edits. The compiled data-*.js and the vendored copies are
// generated, and dupr-ratings.js is large enough that scanning it earns nothing.
const SOURCES = [
  'cpl/app.js',
  'cpl/home.js',
  'cpl/shared.js',
  'cpl/bootstrap-runtime.js',
  'cpl/styles.css',
  'cpl/home.css',
  'cpl/index.html',
  'cpl/local/index.html',
  'cpl/travel/index.html',
  ...fs.readdirSync(path.join(ROOT, '_cpl'))
    .filter((name) => name.endsWith('.js'))
    .map((name) => `_cpl/${name}`),
  ...fs.readdirSync(path.join(ROOT, '_cpl/modules'))
    .map((name) => `_cpl/modules/${name}`),
  ...fs.readdirSync(path.join(ROOT, '_cpl/test'))
    .map((name) => `_cpl/test/${name}`),
];

// Tab, newline and carriage return are the only control characters a source file
// has any business holding.
const ALLOWED = new Set([0x09, 0x0a, 0x0d]);

test('no source file holds a stray control character', () => {
  const offenders = [];
  SOURCES.forEach((relative) => {
    const full = path.join(ROOT, relative);
    if (!fs.existsSync(full)) return;
    const bytes = fs.readFileSync(full);
    bytes.forEach((byte, index) => {
      if (byte < 0x20 && !ALLOWED.has(byte)) {
        // Line and column, so the report points somewhere.
        const before = bytes.subarray(0, index).toString('utf8');
        const line = before.split('\n').length;
        offenders.push(`${relative}:${line} holds 0x${byte.toString(16).padStart(2, '0')}`);
      }
    });
  });
  assert.deepEqual(offenders, []);
});

test('the source list covers the files this repo actually hand-writes', () => {
  // A guard on the guard: if cpl/app.js ever moves, the test above would quietly
  // stop checking anything.
  ['cpl/app.js', 'cpl/styles.css', 'cpl/local/index.html'].forEach((relative) => {
    assert.ok(SOURCES.includes(relative), `${relative} is not being scanned`);
    assert.ok(fs.existsSync(path.join(ROOT, relative)), `${relative} does not exist`);
  });
});
