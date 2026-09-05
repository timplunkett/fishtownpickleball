const test = require('node:test');
const assert = require('node:assert/strict');
const {
  NR_RATING,
  MISSING_RATING,
  isNrRating,
  isMissingRating,
  isUnratedDuprValue,
} = require('../modules/dupr-rating-values');

test('the marker literals are what the rest of the codebase expects', () => {
  assert.equal(NR_RATING, 'NR');
  assert.equal(MISSING_RATING, 'missing');
});

test('isNrRating matches "NR" regardless of case or surrounding whitespace', () => {
  assert.equal(isNrRating('NR'), true);
  assert.equal(isNrRating('nr'), true);
  assert.equal(isNrRating(' Nr '), true);
  assert.equal(isNrRating('missing'), false);
  assert.equal(isNrRating('3.75'), false);
  assert.equal(isNrRating(null), false);
  assert.equal(isNrRating(undefined), false);
  assert.equal(isNrRating(3.75), false);
});

test('isMissingRating matches the manual "missing" marker regardless of case', () => {
  assert.equal(isMissingRating('missing'), true);
  assert.equal(isMissingRating('Missing'), true);
  assert.equal(isMissingRating(' MISSING '), true);
  assert.equal(isMissingRating('NR'), false);
  assert.equal(isMissingRating(null), false);
  assert.equal(isMissingRating(''), false);
});

test('isUnratedDuprValue is true for either marker and false for a real rating', () => {
  assert.equal(isUnratedDuprValue('NR'), true);
  assert.equal(isUnratedDuprValue('missing'), true);
  assert.equal(isUnratedDuprValue('3.75'), false);
  assert.equal(isUnratedDuprValue(null), false);
  assert.equal(isUnratedDuprValue(undefined), false);
});
