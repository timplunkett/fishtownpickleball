// Content-hash-based change detection for `node _cpl/compile.js`, so a bare
// `npm run compile` recompiles only the divisions whose cached inputs actually
// moved since the last time it ran, instead of every division in the cache
// every time. `--full` (see compile.js) opts back into the old
// compile-everything behavior.
//
// Deliberately hashes file *content*, not mtimes: `git checkout`/`clone`/`pull`
// stamp every touched file with the moment of the checkout, not when it was
// really last changed, so an mtime comparison would be meaningless right after
// a fresh clone or a pull — exactly the two situations this cache most needs
// to behave in. Hashing is a little more CPU than a stat() call, but sha1 over
// even the biggest division's ~5MB of cached JSON costs low tens of
// milliseconds — negligible next to the ridge-regression work a changed
// division still has to do (see the profiling note on invertMatrix in
// ratings.js).
//
// This module only knows about hashing and cache I/O. Walking the league/season
// tree to decide which divisions are in scope stays in compile.js, using the
// same catalog.js helpers compiler.js already relies on — see
// selectChangedDivisions in compile.js.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const CACHE_PATH = path.join(__dirname, '..', '.compile-cache.json');
const CACHE_VERSION = 1;

// Every module compileDivision's output depends on, directly or transitively —
// listed explicitly, the same way DIVISION_INPUT_FILES below is, so a new
// dependency has to be added here on purpose rather than silently missed. A
// mismatch here just means the module-hash safety net (see selectChangedDivisions
// in compile.js) doesn't notice a code change that should have invalidated
// every division's cache; --full (used unconditionally by CI and the pre-push
// hook — see .githooks/pre-push) is what actually guarantees correctness, this
// is a convenience for the common local case of "I edited the compiler and ran
// a bare `npm run compile`."
const TRACKED_MODULE_FILES = [
  'compiler.js',
  'ratings.js',
  'pods.js',
  'brackets.js',
  'bootstrap-gen.js',
  'division-utils.js',
  'shared.js',
  'dupr-rating-values.js',
];

// Every file compileDivision reads out of a division's cache directory. Order
// doesn't matter for correctness (each file's bytes are hashed under its own
// name), but keeping it stable keeps the hash itself easy to reason about.
const DIVISION_INPUT_FILES = [
  'matchups.json',
  'players.json',
  'matchupDetails.json',
  'teams.json',
  'playoffMatchups.json',
  'playoffMatchupDetails.json',
  'fetchedAt.json',
];

function sha1Hex(buffers) {
  const hash = crypto.createHash('sha1');
  for (const buf of buffers) hash.update(buf);
  return hash.digest('hex');
}

// A fingerprint of the compiler code itself. Parameterized (rather than always
// reading _cpl/modules) purely so tests can point it at a fixture directory
// without touching real repo files.
function computeModuleHash(modulesDir = __dirname, files = TRACKED_MODULE_FILES) {
  const parts = [];
  for (const file of files) {
    parts.push(Buffer.from(file));
    parts.push(fs.readFileSync(path.join(modulesDir, file)));
  }
  return sha1Hex(parts);
}

// A fingerprint of one division's cached inputs plus its manifest entry (club
// name, division name, apiBase, etc. — divisions.json can change independently
// of anything under the division's own data directory, e.g. a renamed
// division). A missing file hashes as a fixed sentinel rather than being
// skipped, so "the file used to exist and now doesn't" still changes the hash.
function computeDivisionInputHash(divDataDir, manifestEntry, files = DIVISION_INPUT_FILES) {
  const parts = [Buffer.from(JSON.stringify(manifestEntry || {}))];
  for (const file of files) {
    const filePath = path.join(divDataDir, file);
    parts.push(Buffer.from(file));
    parts.push(fs.existsSync(filePath) ? fs.readFileSync(filePath) : Buffer.from('__missing__'));
  }
  return sha1Hex(parts);
}

function emptyCache() {
  return { version: CACHE_VERSION, moduleHashByLeague: {}, divisions: {} };
}

// A missing or corrupt cache degrades to "every division counts as changed" —
// the same full compile `npm run compile` always did before this feature
// existed — rather than throwing.
function loadCache(cachePath = CACHE_PATH) {
  try {
    const raw = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
    if (raw && raw.version === CACHE_VERSION && raw.divisions && raw.moduleHashByLeague) return raw;
  } catch {
    // No cache yet, or unreadable/corrupt — fall through to empty.
  }
  return emptyCache();
}

function saveCache(cache, cachePath = CACHE_PATH) {
  fs.writeFileSync(cachePath, `${JSON.stringify(cache, null, 1)}\n`);
}

// Pure decision step, split out from the filesystem walk so it's cheap to unit
// test with fabricated hashes: given { key, slug, hash } entries and the
// previously-cached hash for each key, which slugs need recompiling?
//
// `moduleChanged` forces every entry into the changed bucket regardless of its
// own hash — the compiler code moved out from under the cached inputs, so
// nothing already on disk can be trusted to reflect it.
function partitionByHash(entries, cacheDivisions, moduleChanged) {
  const changed = [];
  const unchanged = [];
  for (const { slug, key, hash } of entries) {
    const isChanged = moduleChanged || cacheDivisions[key] !== hash;
    (isChanged ? changed : unchanged).push(slug);
  }
  return { changed, unchanged };
}

module.exports = {
  CACHE_PATH,
  CACHE_VERSION,
  TRACKED_MODULE_FILES,
  DIVISION_INPUT_FILES,
  computeModuleHash,
  computeDivisionInputHash,
  emptyCache,
  loadCache,
  saveCache,
  partitionByHash,
};
