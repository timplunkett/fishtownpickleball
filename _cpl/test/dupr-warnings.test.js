const test = require('node:test');
const assert = require('node:assert/strict');
const { sameDuprId, createWarningLog, formatWarningReport } = require('../modules/dupr-warnings');

test('DUPR IDs differing only in case are the same ID', () => {
  // The bug this guards: the API answers "2QMZN7" for a stored "2qmzn7", and the
  // raw string compare reported it as a merged account on every rebuild.
  assert.ok(sameDuprId('2QMZN7', '2qmzn7'));
  assert.ok(sameDuprId('2qmzn7', '2QMZN7'));
  assert.ok(sameDuprId(' 2QMZN7 ', '2qmzn7'), 'surrounding whitespace is not a mismatch either');
});

test('genuinely different DUPR IDs are still a mismatch', () => {
  assert.equal(sameDuprId('2QMZN7', 'XY12AB'), false);
  assert.equal(sameDuprId('2QMZN7', '2QMZN8'), false);
});

test('a missing DUPR ID is never a match', () => {
  assert.equal(sameDuprId(null, '2qmzn7'), false);
  assert.equal(sameDuprId('2qmzn7', undefined), false);
  assert.equal(sameDuprId(undefined, undefined), false);
});

test('warnings reach the live log and are kept for the replay', () => {
  const written = [];
  const { warn, messages } = createWarningLog((...args) => written.push(args));
  warn('[WARN] first');
  warn('[WARN] second:', 'Request rate exceeded');

  assert.deepEqual(written, [['[WARN] first'], ['[WARN] second:', 'Request rate exceeded']],
    'the sink still receives the original arguments, so live output is unchanged');
  assert.deepEqual(messages, ['[WARN] first', '[WARN] second: Request rate exceeded']);
});

test('a non-string warning argument is recorded readably', () => {
  const { warn, messages } = createWarningLog(() => {});
  warn('[WARN] failed:', new Error('boom'));
  assert.deepEqual(messages, ['[WARN] failed: boom']);
});

test('the report numbers the warnings under a count heading', () => {
  const report = formatWarningReport(['[WARN] a', '[WARN] b']);
  assert.equal(report, '2 warnings from this run:\n  1. [WARN] a\n  2. [WARN] b');
});

test('a single warning is not pluralised', () => {
  assert.equal(formatWarningReport(['[WARN] a']), '1 warning from this run:\n  1. [WARN] a');
});

test('a clean run prints no report at all', () => {
  assert.equal(formatWarningReport([]), null);
  assert.equal(formatWarningReport(undefined), null);
});
