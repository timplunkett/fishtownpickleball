const test = require('node:test');
const assert = require('node:assert/strict');
const { getDivisionBracket, MIN_DUPR } = require('../modules/brackets');

test('local range brackets', () => {
  assert.deepEqual(
    getDivisionBracket({ divisionName: '3.25 - 3.99', leagueType: 'local' }),
    { min: 3.25, max: 3.99 },
  );
  // en-dash variant
  assert.deepEqual(
    getDivisionBracket({ divisionName: '3.5 – 4.0', leagueType: 'local' }),
    { min: 3.5, max: 4 },
  );
});

test('local open-ended brackets', () => {
  assert.deepEqual(
    getDivisionBracket({ divisionName: '3.75 & Over', leagueType: 'local' }),
    { min: 3.75, max: Infinity },
  );
  assert.deepEqual(
    getDivisionBracket({ divisionName: '3.75 & Under', leagueType: 'local' }),
    { min: 2, max: 3.75 },
  );
});

// An "& Under" name states a ceiling and nothing else, so the lower bound has to
// come from DUPR itself. Regressed when the audit page's inline parser moved
// into this module and the build-side copy kept its old min of 0; the audit then
// showed "0.000 – 3.249" and could not flag anyone as under the bracket.
test('brackets never open below the lowest rating DUPR issues', () => {
  assert.equal(MIN_DUPR, 2);

  for (const divisionName of ['3.25 & Under', '3.75 & Under', '2.5 & Under']) {
    assert.equal(
      getDivisionBracket({ divisionName, leagueType: 'local' }).min,
      MIN_DUPR,
      `${divisionName} should start at the DUPR floor`,
    );
  }

  // A named bound below the floor is raised to it; one above it is left alone.
  assert.deepEqual(
    getDivisionBracket({ divisionName: '1.5 - 2.5', leagueType: 'local' }),
    { min: 2, max: 2.5 },
  );
  assert.deepEqual(
    getDivisionBracket({ divisionName: '1.0 & Over', leagueType: 'local' }),
    { min: 2, max: Infinity },
  );
  assert.deepEqual(
    getDivisionBracket({ divisionName: '2.0', leagueType: 'travel' }),
    { min: 2, max: 2.5 },
  );
  assert.equal(
    getDivisionBracket({ divisionName: '3.25 - 3.99', leagueType: 'local' }).min,
    3.25,
  );
});

test('travel brackets span half a point, uncapped from 4.5', () => {
  assert.deepEqual(
    getDivisionBracket({ divisionName: '4.0', leagueType: 'travel' }),
    { min: 4, max: 4.5 },
  );
  assert.deepEqual(
    getDivisionBracket({ divisionName: "3.5 Women's", leagueType: 'travel' }),
    { min: 3.5, max: 4 },
  );
  assert.deepEqual(
    getDivisionBracket({ divisionName: '4.5', leagueType: 'travel' }),
    { min: 4.5, max: Infinity },
  );
});

test('50+ travel brackets are uncapped from 4.0', () => {
  assert.deepEqual(
    getDivisionBracket({ divisionName: '4.0 (50+)', leagueType: 'travel' }),
    { min: 4, max: Infinity },
  );
  assert.deepEqual(
    getDivisionBracket({ divisionName: '3.5 (50+)', leagueType: 'travel' }),
    { min: 3.5, max: 4 },
  );
  assert.deepEqual(
    getDivisionBracket({ divisionName: '3.0 (50+)', leagueType: 'travel' }),
    { min: 3, max: 3.5 },
  );
});

test('unparseable names yield null', () => {
  assert.equal(getDivisionBracket({ divisionName: 'Open Play', leagueType: 'local' }), null);
  assert.equal(getDivisionBracket({ divisionName: '', leagueType: 'travel' }), null);
  assert.equal(getDivisionBracket(null), null);
});
