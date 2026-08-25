const test = require('node:test');
const assert = require('node:assert/strict');
const { filterDivisions, getLandingSlug, unmatchedDivisionSlugs } = require('../modules/division-utils');

const DIVISIONS = [
  { slug: 'ab12cd34', divisionName: '3.5 - 4.0' },
  { slug: 'ef56ab78', divisionName: '4.0 - 4.5' },
  { slug: '3e9b6a58', divisionName: 'Bounce - Philly 3.5 - 4.0' },
];

test('no --division compiles every division', () => {
  assert.deepEqual(filterDivisions(DIVISIONS, {}).map((d) => d.slug), ['ab12cd34', 'ef56ab78', '3e9b6a58']);
  assert.deepEqual(filterDivisions(DIVISIONS, { divisionSlugs: null }).map((d) => d.slug), ['ab12cd34', 'ef56ab78', '3e9b6a58']);
});

test('--division keeps only the named slugs, in manifest order', () => {
  assert.deepEqual(
    filterDivisions(DIVISIONS, { divisionSlugs: ['3e9b6a58', 'ab12cd34'] }).map((d) => d.slug),
    ['ab12cd34', '3e9b6a58'],
  );
});

test('--division with an unknown slug compiles nothing rather than everything', () => {
  assert.deepEqual(filterDivisions(DIVISIONS, { divisionSlugs: ['nope'] }), []);
});

test('the landing slug is the configured one when it is still active', () => {
  assert.equal(getLandingSlug('local', DIVISIONS), '3e9b6a58');
});

test('the landing slug degrades to the first division when the configured one is gone', () => {
  const withoutLanding = DIVISIONS.filter((d) => d.slug !== '3e9b6a58');
  assert.equal(getLandingSlug('local', withoutLanding), 'ab12cd34');
  assert.equal(getLandingSlug('local', []), '');
  assert.equal(getLandingSlug('nonsense', DIVISIONS), 'ab12cd34');
});

test('a typo\'d --division slug is reported rather than passing as a no-op run', () => {
  assert.deepEqual(unmatchedDivisionSlugs(['ab12cd34', 'typo'], ['ab12cd34']), ['typo']);
  assert.deepEqual(unmatchedDivisionSlugs(['typo'], []), ['typo']);
});

test('slugs matched in either league count as matched', () => {
  // compile.js/run-pipeline.js pool matchedSlugs across both leagues, so a
  // travel slug is not "unmatched" just because the local league skipped it.
  assert.deepEqual(unmatchedDivisionSlugs(['ab12cd34', 'b7ca04e4'], ['ab12cd34', 'b7ca04e4']), []);
});

test('no --division flag means nothing to validate', () => {
  assert.deepEqual(unmatchedDivisionSlugs(null, []), []);
});
