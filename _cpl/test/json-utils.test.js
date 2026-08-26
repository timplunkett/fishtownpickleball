const test = require('node:test');
const assert = require('node:assert/strict');
const { expandJson } = require('../modules/json-utils');

const TABLE = {
  'pid-b': { rating: 4.0, provisional: true },
  'pid-a': { rating: 3.5, provisional: false },
};

test('expandJson puts one record per line and keeps the record compact', () => {
  const lines = expandJson(TABLE).split('\n');
  assert.deepEqual(lines, [
    '{',
    ' "pid-b": {"rating":4,"provisional":true},',
    ' "pid-a": {"rating":3.5,"provisional":false}',
    '}',
  ]);
});

test('expandJson round-trips through JSON.parse', () => {
  assert.deepEqual(JSON.parse(expandJson(TABLE)), TABLE);
  const nested = { n: ['a', 'b'], e: [[0, 1], [2, 3]], a: {} };
  assert.deepEqual(JSON.parse(expandJson(nested, 2)), nested);
  assert.deepEqual(JSON.parse(expandJson([1, [2, 3]], 3)), [1, [2, 3]]);
});

test('expandJson expands exactly as many levels as asked', () => {
  const wrapper = { rows: [[1, 2], [3, 4]] };
  assert.equal(expandJson(wrapper, 1), '{\n "rows": [[1,2],[3,4]]\n}');
  assert.equal(expandJson(wrapper, 2), '{\n "rows": [\n  [1,2],\n  [3,4]\n ]\n}');
  assert.equal(expandJson(wrapper, 0), '{"rows":[[1,2],[3,4]]}');
});

test('expandJson leaves empty containers and scalars on one line', () => {
  assert.equal(expandJson({ a: {}, b: [], c: null, d: 'x' }), '{\n "a": {},\n "b": [],\n "c": null,\n "d": "x"\n}');
  assert.equal(expandJson([]), '[]');
  assert.equal(expandJson(3.5), '3.5');
});

// The whole point is that one changed value moves one line.
test('changing one record changes exactly one line', () => {
  const before = expandJson(TABLE).split('\n');
  const after = expandJson({ ...TABLE, 'pid-a': { rating: 3.7, provisional: false } }).split('\n');
  assert.equal(before.length, after.length);
  assert.equal(before.filter((line, i) => line !== after[i]).length, 1);
});
