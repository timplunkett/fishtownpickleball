const test = require('node:test');
const assert = require('node:assert/strict');
const { getDivisionBracket } = require('../modules/brackets');

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
    { min: 0, max: 3.75 },
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
