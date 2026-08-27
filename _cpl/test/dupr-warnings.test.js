const test = require('node:test');
const assert = require('node:assert/strict');
const { sameDuprId } = require('../modules/dupr-warnings');

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
