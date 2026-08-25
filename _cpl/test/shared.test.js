const test = require('node:test');
const assert = require('node:assert/strict');
const shared = require('../modules/shared');

test('escapeHtml escapes the five specials', () => {
  assert.equal(shared.escapeHtml(`<a href="x">Tom & Jerry's</a>`),
    '&lt;a href=&quot;x&quot;&gt;Tom &amp; Jerry&#39;s&lt;/a&gt;');
});

test('decodeHtmlEntities handles named and numeric entities', () => {
  assert.equal(shared.decodeHtmlEntities('Dill &amp; Dink'), 'Dill & Dink');
  assert.equal(shared.decodeHtmlEntities('O&#39;Brien &quot;OB&quot;'), `O'Brien "OB"`);
  assert.equal(shared.decodeHtmlEntities('3.5 &lt; 4.0'), '3.5 < 4.0');
});

test('slugify collapses to url-safe tokens', () => {
  assert.equal(shared.slugify("Joe O'Brien Jr."), 'joe-o-brien-jr');
  assert.equal(shared.slugify('  Kitchen  Nightmares  '), 'kitchen-nightmares');
  assert.equal(shared.slugify(''), '');
});

test('normalizeName title-cases and collapses whitespace', () => {
  assert.equal(shared.normalizeName('  joe   GRONCZEWSKI '), 'Joe Gronczewski');
});

test('travel division label flips gendered names', () => {
  assert.equal(shared.formatTravelDivisionLabel("3.5 Women's"), "Women's 3.5");
  assert.equal(shared.formatTravelDivisionLabel('4.0'), '4.0');
});

test('travel sort key puts regular divisions before gendered, low before high', () => {
  const keys = ['4.0', "3.5 Women's", '3.5'].map(shared.getTravelDivisionSortKey);
  assert.ok(keys[2].rating < keys[0].rating);
  assert.equal(keys[1].genderedRank, 1);
  assert.equal(keys[0].genderedRank, 0);
});

test('gender API base is detected, regular travel base is not', () => {
  const base = 'https://cplsecureapiproxy.azurewebsites.net/api/CPLSecureApiProxy';
  assert.equal(shared.isGenderApiBase(`${base}/gender/v0/api`), true);
  assert.equal(shared.isGenderApiBase(`${base}/v0/api`), false);
  assert.equal(shared.isGenderApiBase(`${base}/local/v0/api`), false);
  assert.equal(shared.isGenderApiBase(undefined), false);
});

test('travelDivisionGender reads the gender out of a division name', () => {
  assert.equal(shared.travelDivisionGender('4.5 Mens'), 'Male');
  assert.equal(shared.travelDivisionGender("3.5 Men's"), 'Male');
  assert.equal(shared.travelDivisionGender('3.25 Womens'), 'Female');
  assert.equal(shared.travelDivisionGender("3.5 Women's"), 'Female');
  assert.equal(shared.travelDivisionGender('4.0'), null);
  assert.equal(shared.travelDivisionGender('4.0 (50+)'), null);
});

test('formatDuprRating covers absent, plain, provisional and linked ratings', () => {
  assert.equal(shared.formatDuprRating(null), '—');
  assert.equal(shared.formatDuprRating({ rating: null }), '—');
  assert.equal(shared.formatDuprRating({ rating: 3.812 }), '3.812');
  assert.equal(shared.formatDuprRating({ rating: 'NR' }), 'NR');
  assert.match(shared.formatDuprRating({ rating: 3.5, provisional: true }), /3\.500<sup/);
  const linked = shared.formatDuprRating({ rating: 4.001, numericId: 12345 });
  assert.match(linked, /dashboard\.dupr\.com\/dashboard\/player\/12345/);
  assert.match(linked, /4\.001/);
});

test('getPlayerIndex unpacks the string-table format and caches it', () => {
  delete globalThis.PLAYER_INDEX;
  globalThis.PLAYER_INDEX_PACKED = {
    s: ['Al One', 'Team X', '3.5 - 4.0', 'abcd1234', 'pid-1', 'Club Y'],
    e: [
      [0, 1, 2, 3, 0, 4, 5, 3], // captain + sub, local, with club
      [0, 1, 2, 3, 1, -1, -1, 0], // travel, no id/club/flags
    ],
  };
  const index = shared.getPlayerIndex();
  assert.equal(index.length, 2);
  assert.deepEqual(index[0], {
    name: 'Al One', team: 'Team X', division: '3.5 - 4.0', slug: 'abcd1234',
    league: 'local', playerId: 'pid-1', club: 'Club Y', isCaptain: true, isSub: true,
  });
  assert.deepEqual(index[1], {
    name: 'Al One', team: 'Team X', division: '3.5 - 4.0', slug: 'abcd1234',
    league: 'travel', playerId: null,
  });
  assert.equal(shared.getPlayerIndex(), index, 'cached on second call');
  delete globalThis.PLAYER_INDEX;
  delete globalThis.PLAYER_INDEX_PACKED;
});

test('getPlayerIndex accepts a legacy plain-array index', () => {
  globalThis.PLAYER_INDEX = [{ name: 'Legacy' }];
  assert.deepEqual(shared.getPlayerIndex(), [{ name: 'Legacy' }]);
  delete globalThis.PLAYER_INDEX;
});
