const test = require('node:test');
const assert = require('node:assert/strict');
const shared = require('../modules/shared');

// --- displayPodGroups ------------------------------------------------------
//
// The one grouping the pipeline and the page both rank by, so a card's seed, a
// team page's rank and the power rank behind it cannot disagree.

const FUSED = {
  // 4.0 travel: cross-pod play fuses three of the four pods into one schedule
  // section, so the section label names three pods and groups by none of them.
  teams: [
    { name: 'NW One', pod: 1, reportedPod: 'Northwest' },
    { name: 'NE One', pod: 2, reportedPod: 'Northeast' },
    { name: 'SE One', pod: 2, reportedPod: 'Southeast' },
    { name: 'SW One', pod: 2, reportedPod: 'Southwest' },
    { name: 'NE Two', pod: 2, reportedPod: 'Northeast' },
  ],
  meta: {
    podCount: 2,
    podNames: ['Northwest', 'Northeast / Southeast / Southwest'],
    reportedPods: ['Northeast', 'Northwest', 'Southeast', 'Southwest'],
  },
};

test('displayPodGroups splits by the league\'s pods, not the fused section', () => {
  const groups = shared.displayPodGroups(FUSED.teams, FUSED.meta);
  assert.deepEqual(groups.map((group) => group.label),
    ['Northeast', 'Northwest', 'Southeast', 'Southwest']);
  assert.deepEqual(groups[0].teams.map((team) => team.name), ['NE One', 'NE Two']);
  // A joint label belongs to the head-to-head grids and nowhere else.
  groups.forEach(({ label }) => assert.ok(!label.includes(' / ')));
});

test('displayPodGroups falls back to the sections where no pods are published', () => {
  const teams = FUSED.teams.map((team) => ({ ...team, reportedPod: null }));
  const groups = shared.displayPodGroups(teams, { ...FUSED.meta, reportedPods: null });
  assert.deepEqual(groups.map((group) => group.label),
    ['Northwest', 'Northeast / Southeast / Southwest']);
});

test('displayPodGroups keeps the sections when one team is missing its pod', () => {
  // A partial grouping would leave that team out of every group and out of the
  // standings, so all or nothing.
  const teams = FUSED.teams.map((team, index) => (
    index === 2 ? { ...team, reportedPod: null } : team
  ));
  const groups = shared.displayPodGroups(teams, FUSED.meta);
  assert.deepEqual(groups.map((group) => group.label),
    ['Northwest', 'Northeast / Southeast / Southwest']);
  assert.equal(groups.reduce((total, group) => total + group.teams.length, 0), teams.length);
});

test('an undivided division is one unlabelled group', () => {
  const teams = [{ name: 'Solo', pod: 1, reportedPod: null }];
  assert.deepEqual(shared.displayPodGroups(teams, { podCount: 1 }), [{ label: null, teams }]);
  // A single published pod names nothing the heading doesn't already say.
  assert.deepEqual(
    shared.displayPodGroups([{ name: 'Solo', pod: 1, reportedPod: 'North' }], {
      podCount: 1, reportedPods: ['North'],
    }).map((group) => group.label),
    [null],
  );
});

test('displayPodGroups numbers unnamed sections and drops empty ones', () => {
  const teams = [{ name: 'A', pod: 1 }, { name: 'B', pod: 3 }];
  assert.deepEqual(
    shared.displayPodGroups(teams, { podCount: 3 }).map((group) => group.label),
    ['Pod 1', 'Pod 3'],
  );
});

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

test('formatSignedValue always shows a sign, at the requested precision', () => {
  assert.equal(shared.formatSignedValue(2.4, 1), '+2.4');
  assert.equal(shared.formatSignedValue(-0.6, 1), '-0.6');
  assert.equal(shared.formatSignedValue(0, 1), '+0.0');
  // No digits argument: the value's own String() form, sign forced on.
  assert.equal(shared.formatSignedValue(3), '+3');
});

test('getPlayerIndex unpacks the per-column table format and caches it', () => {
  delete globalThis.PLAYER_INDEX;
  globalThis.PLAYER_INDEX_TABLES = {
    n: ['Al One', 'Bo Two'],
    t: ['Team X', 'Team Z'],
    d: [
      ['abcd1234', '3.5 - 4.0', 0, 'Club Y', '2026-summer', 'Summer 2026', 0],
      ['ef567890', '4.0', 1, '', '2026-spring', 'Spring 2026', 1],
    ],
    i: ['pid-1'],
    e: [
      [0, 0, 0, 0, 3], // captain + sub, local division with a club
      [0, 1, 1, 0, 0], // same player in the travel division, no club, no flags
      [1, 0, 0, -1, 0], // a player the roster has no id for
    ],
  };
  const index = shared.getPlayerIndex();
  assert.equal(index.length, 3);
  assert.deepEqual(index[0], {
    name: 'Al One', team: 'Team X', division: '3.5 - 4.0', slug: 'abcd1234',
    league: 'local', season: '2026-summer', seasonLabel: 'Summer 2026', archived: false,
    playerId: 'pid-1', club: 'Club Y', isCaptain: true, isSub: true,
  });
  assert.deepEqual(index[1], {
    name: 'Al One', team: 'Team Z', division: '4.0', slug: 'ef567890',
    league: 'travel', season: '2026-spring', seasonLabel: 'Spring 2026', archived: true,
    playerId: 'pid-1',
  });
  assert.equal(index[2].playerId, null, 'a missing id decodes as null, not as an empty string');
  assert.equal(shared.getPlayerIndex(), index, 'cached on second call');
  delete globalThis.PLAYER_INDEX;
  delete globalThis.PLAYER_INDEX_TABLES;
});

// Rating is a sixth entry column, added after the five above — the in-place
// growth the file's own comments describe for the division row. A cached
// player-index.js from before Rating existed hands unpackTableIndex five-
// element entries; entry[5] reads as `undefined` there, not as a missing sixth
// table, so this is the one test above that has to see both shapes.
test('getPlayerIndex decodes a Rating column when present, and omits it when absent', () => {
  delete globalThis.PLAYER_INDEX;
  globalThis.PLAYER_INDEX_TABLES = {
    n: ['Al One'],
    t: ['Team X'],
    d: [['abcd1234', '3.5 - 4.0', 0, '', '2026-summer', 'Summer 2026', 0]],
    i: [],
    e: [
      [0, 0, 0, -1, 0, 2.4], // rated
      [0, 0, 0, -1, 0, -0.6], // a negative rating is not mistaken for "absent"
      [0, 0, 0, -1, 0, null], // explicitly unrated
      [0, 0, 0, -1, 0], // a pre-Rating cached file: no sixth element at all
    ],
  };
  const index = shared.getPlayerIndex();
  assert.equal(index[0].rating, 2.4);
  assert.equal(index[1].rating, -0.6);
  assert.equal('rating' in index[2], false, 'an explicit null rating should not appear as a key');
  assert.equal('rating' in index[3], false, 'a missing sixth column must not decode as a rating of undefined');
  delete globalThis.PLAYER_INDEX;
  delete globalThis.PLAYER_INDEX_TABLES;
});

// DUPR id is a seventh entry column, added after Rating the same way Rating
// was added after the original five — trailing growth a cached shared.js or
// a cached player-index.js from before it can both survive. Unlike
// name/team/id it is a literal string on the entry, not an index into a
// table of its own (see the note on packPlayerIndex in modules/compiler.js:
// interning it made a one-account DUPR correction rewrite nearly every
// entry's index), so there is no `u` table to go with it.
test('getPlayerIndex decodes a DUPR id column when present, and omits it when absent', () => {
  delete globalThis.PLAYER_INDEX;
  globalThis.PLAYER_INDEX_TABLES = {
    n: ['Al One'],
    t: ['Team X'],
    d: [['abcd1234', '3.5 - 4.0', 0, '', '2026-summer', 'Summer 2026', 0]],
    i: [],
    e: [
      [0, 0, 0, -1, 0, null, 'ABC123'], // has a DUPR id
      [0, 0, 0, -1, 0, null, null], // no DUPR id on file
      [0, 0, 0, -1, 0, null], // a pre-DUPR-id cached file: no seventh element at all
    ],
  };
  const index = shared.getPlayerIndex();
  assert.equal(index[0].dupr, 'ABC123');
  assert.equal('dupr' in index[1], false, 'an explicit null must not decode as a DUPR id');
  assert.equal('dupr' in index[2], false, 'a missing seventh column must not decode as a DUPR id');
  delete globalThis.PLAYER_INDEX;
  delete globalThis.PLAYER_INDEX_TABLES;
});

// A browser can pair a cached player-index.js with a newer shared.js.
test('getPlayerIndex still unpacks the shared string-table format', () => {
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
  // No season columns in this shape, and none invented for it: an entry with no
  // season yields the season-less /cpl/<league>/?d=<slug>, which the league's
  // redirect stub resolves.
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

// buildDuprRatingIndex converts DUPR onto the rating's points/game scale. The
// centring is the load-bearing part: the numbers it returns get added to APM
// ratings inside a pair total, and APM is measured against the average player
// in the division, so an uncentred DUPR would be meaningless there.
const DUPR_TABLE = {
  'pid-low': { rating: 3.0 },
  'pid-mid': { rating: 3.5 },
  'pid-high': { rating: 4.0 },
};
const IDS_BY_NAME = { Low: 'pid-low', Mid: 'pid-mid', High: 'pid-high' };

test('buildDuprRatingIndex centres a division on its own mean', () => {
  const index = shared.buildDuprRatingIndex(IDS_BY_NAME, DUPR_TABLE);
  assert.equal(index.Mid, 0, 'the division-average player rates as average');
  assert.equal(index.High, +(0.5 * shared.DUPR_POINTS_PER_RATING).toFixed(1));
  assert.equal(index.Low, -index.High, 'the spread is symmetric about the mean');
});

test('buildDuprRatingIndex measures relative standing, not absolute DUPR', () => {
  // The same field shifted up a full point must produce the same ratings: a
  // 4.0 is average in a 4.0 division, not two points/game above everyone.
  const shifted = Object.fromEntries(
    Object.entries(DUPR_TABLE).map(([id, entry]) => [id, { rating: entry.rating + 1 }]),
  );
  assert.deepEqual(
    shared.buildDuprRatingIndex(IDS_BY_NAME, shifted),
    shared.buildDuprRatingIndex(IDS_BY_NAME, DUPR_TABLE),
  );
});

test('buildDuprRatingIndex skips players the DUPR table cannot rate', () => {
  const index = shared.buildDuprRatingIndex(
    { ...IDS_BY_NAME, Unlisted: 'pid-none', Unrated: 'pid-nr' },
    { ...DUPR_TABLE, 'pid-nr': { rating: 'NR' } },
  );
  assert.equal('Unlisted' in index, false);
  assert.equal('Unrated' in index, false);
  assert.equal(Object.keys(index).length, 3, 'and they do not shift the mean');
});

test('buildDuprRatingIndex tolerates an empty or missing DUPR table', () => {
  assert.deepEqual(shared.buildDuprRatingIndex(IDS_BY_NAME, {}), {});
  assert.deepEqual(shared.buildDuprRatingIndex(IDS_BY_NAME, undefined), {});
  assert.deepEqual(shared.buildDuprRatingIndex(undefined, DUPR_TABLE), {});
});

// player-index.js and shared.js cache independently and nothing busts them, so
// a returning visitor can hold one from either side of a deploy. The encodings
// therefore live under separate globals: the one direction no code change can
// rescue is a cached *old* shared.js meeting a *new* index, because that code
// is already in the browser. It has to find nothing rather than a shape it
// predates. (This is the failure that reached a browser once: the old decoder
// read the new file and threw inside the player modal.)
test('an index is invisible to a decoder that predates its shape', () => {
  delete globalThis.PLAYER_INDEX;
  globalThis.PLAYER_INDEX_TABLES = {
    n: ['Al One'], t: ['Team X'], d: [['abcd1234', '3.5', 0, '', '2026-fall', 'Fall 2026', 0]],
    i: [], e: [[0, 0, 0, -1, 0]],
  };
  // Exactly what the shipped older shared.js does before it touches any field.
  const seenByOldDecoder = globalThis.PLAYER_INDEX_PACKED;
  assert.equal(!seenByOldDecoder || !Array.isArray(seenByOldDecoder.e), true,
    'the old global stays unset, so the old guard returns [] instead of throwing');
  assert.equal(shared.getPlayerIndex().length, 1, 'while the current decoder reads it');
  delete globalThis.PLAYER_INDEX;
  delete globalThis.PLAYER_INDEX_TABLES;
});

test('the per-column tables win when a stale index left the old global behind', () => {
  delete globalThis.PLAYER_INDEX;
  globalThis.PLAYER_INDEX_PACKED = { s: ['Stale', 'T', 'D', 'slug'], e: [[0, 1, 2, 3, 0, -1, -1, 0]] };
  globalThis.PLAYER_INDEX_TABLES = {
    n: ['Fresh'], t: ['Team X'], d: [['abcd1234', '3.5', 0, '', '2026-fall', 'Fall 2026', 0]],
    i: [], e: [[0, 0, 0, -1, 0]],
  };
  assert.equal(shared.getPlayerIndex()[0].name, 'Fresh');
  delete globalThis.PLAYER_INDEX;
  delete globalThis.PLAYER_INDEX_PACKED;
  delete globalThis.PLAYER_INDEX_TABLES;
});

// An index that is present but unreadable has to cost the finder rows, not the
// player modal that calls this. Anything the decoder would index into is
// checked before it runs — a half-written or truncated file otherwise throws
// from inside the map, which is what a malformed fixture did once.
test('a packed index missing one of its tables degrades instead of throwing', () => {
  const cases = {
    'legacy entries with no string table': { PLAYER_INDEX_PACKED: { e: [[0, 0, 0, 0, 0, 0, 0, 0]] } },
    'current entries with no tables at all': { PLAYER_INDEX_TABLES: { e: [[0, 0, 0, 0, 0]] } },
    'current entries missing only the id table': {
      PLAYER_INDEX_TABLES: { n: ['A'], t: ['B'], d: [['s', 'D', 0, '']], e: [[0, 0, 0, 0, 0]] },
    },
    'entry list that is not a list': { PLAYER_INDEX_TABLES: { n: [], t: [], d: [], i: [], e: 'nope' } },
  };
  for (const [label, globals] of Object.entries(cases)) {
    delete globalThis.PLAYER_INDEX;
    delete globalThis.PLAYER_INDEX_PACKED;
    delete globalThis.PLAYER_INDEX_TABLES;
    Object.assign(globalThis, globals);
    assert.deepEqual(shared.getPlayerIndex(), [], label);
  }
  delete globalThis.PLAYER_INDEX;
  delete globalThis.PLAYER_INDEX_PACKED;
  delete globalThis.PLAYER_INDEX_TABLES;
});
