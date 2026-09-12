// Covers the fix for a real, reproduced bug in dupr:fetch's SIGINT/SIGTERM
// handling: two Ctrl-Cs sent 10ms apart used to leave global_players.json
// truncated mid-write, because `process.once`'s listener had already removed
// itself by the time the first signal's handler ran, so the second signal
// fell through to Node's default (immediate, unhandled) exit. This tests the
// guard itself, deterministically — not the OS signal plumbing around it.
const test = require('node:test');
const assert = require('node:assert/strict');
const { guardAgainstReentry } = require('../modules/reentry-guard');

test('a second synchronous call is a no-op', () => {
  let calls = 0;
  const guarded = guardAgainstReentry(() => { calls += 1; });
  guarded();
  guarded();
  guarded();
  assert.equal(calls, 1);
});

test('a second call made from inside the first (the SIGINT-mid-handler case) is a no-op', () => {
  let calls = 0;
  const guarded = guardAgainstReentry(() => {
    calls += 1;
    if (calls === 1) guarded(); // simulates a second signal arriving mid-handler
  });
  guarded();
  assert.equal(calls, 1);
});

test('arguments reach the wrapped function on the first call', () => {
  const seen = [];
  const guarded = guardAgainstReentry((...args) => seen.push(args));
  guarded('SIGINT');
  guarded('SIGTERM');
  assert.deepEqual(seen, [['SIGINT']]);
});

test("the wrapped function's return value comes back on the first call, undefined after", () => {
  const guarded = guardAgainstReentry(() => 'saved');
  assert.equal(guarded(), 'saved');
  assert.equal(guarded(), undefined);
});
