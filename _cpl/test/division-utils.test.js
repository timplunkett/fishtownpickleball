const test = require('node:test');
const assert = require('node:assert/strict');
const {
  filterDivisions, getLandingSlug, summarizeMatchedDivisionNames, unmatchedDivisionSlugs,
} = require('../modules/division-utils');

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

test('summarizeMatchedDivisionNames sorts by rating number, not lexically', () => {
  // A plain localeCompare(..., { numeric: true }) treats the decimal point as
  // just another digit-run boundary, so "3.25" (3, 25) sorts after "3.5" (3,
  // 5) — this must sort by the actual number instead.
  const matched = [
    { slug: 'a', name: '3.5' },
    { slug: 'b', name: '3.0' },
    { slug: 'c', name: '3.25 Womens' },
    { slug: 'd', name: '4.5 Mens' },
  ];
  assert.deepEqual(
    summarizeMatchedDivisionNames(matched),
    ['3.0', '3.25 Womens', '3.5', '4.5 Mens'],
  );
});

test('summarizeMatchedDivisionNames dedupes by name', () => {
  const matched = [
    { slug: 'travel-slug', name: '3.5' },
    { slug: 'other-travel-slug', name: '3.5' },
  ];
  assert.deepEqual(summarizeMatchedDivisionNames(matched), ['3.5']);
});

test('summarizeMatchedDivisionNames breaks ties alphabetically', () => {
  const matched = [
    { slug: 'a', name: 'Bounce - Philly / 3.5 - 4.0' },
    { slug: 'b', name: 'Bounce - Malvern / 3.5 - 4.0' },
  ];
  assert.deepEqual(
    summarizeMatchedDivisionNames(matched),
    ['Bounce - Malvern / 3.5 - 4.0', 'Bounce - Philly / 3.5 - 4.0'],
  );
});

test('summarizeMatchedDivisionNames puts names with no rating number last', () => {
  const matched = [
    { slug: 'a', name: 'Playoffs' },
    { slug: 'b', name: '3.5' },
  ];
  assert.deepEqual(summarizeMatchedDivisionNames(matched), ['3.5', 'Playoffs']);
});

test('summarizeMatchedDivisionNames of an empty list is empty', () => {
  assert.deepEqual(summarizeMatchedDivisionNames([]), []);
});
