// Covers the pinned "Processing X of Y" status line used by dupr:fetch: a
// finished result or a warning must scroll away cleanly above the pinned
// line rather than concatenating onto it (the bug this module replaced —
// see fetch-dupr.js's use of progress.wrapSink()) — and none of that
// clear/redraw machinery should touch stdout at all off a real terminal,
// where there is no "current line" to redraw.
const test = require('node:test');
const assert = require('node:assert/strict');
const { createProgressLine } = require('../modules/progress-line');

function fakeStream(isTTY) {
  const writes = [];
  return { isTTY, write: (s) => writes.push(s), writes };
}

test('off a TTY, set() writes nothing — there is no line to pin', () => {
  const stream = fakeStream(false);
  const progress = createProgressLine(stream);
  progress.set('Processing 1 of 3: Alice (AAA111)');
  assert.deepEqual(stream.writes, []);
});

test('off a TTY, println() writes one plain line and set() stays silent', () => {
  const stream = fakeStream(false);
  const progress = createProgressLine(stream);
  progress.set('Processing 1 of 3: Alice (AAA111)');
  progress.println('✅ Alice (AAA111)');
  assert.deepEqual(stream.writes, ['✅ Alice (AAA111)\n']);
});

test('off a TTY, wrapSink() just forwards to the underlying sink unchanged', () => {
  const stream = fakeStream(false);
  const progress = createProgressLine(stream);
  const sunk = [];
  const warn = progress.wrapSink((...args) => sunk.push(args.join(' ')));
  progress.set('Processing 1 of 3: Alice (AAA111)');
  warn('[WARN] something');
  assert.deepEqual(sunk, ['[WARN] something']);
  assert.deepEqual(stream.writes, []);
});

test('on a TTY, set() writes the status with no trailing newline', () => {
  const stream = fakeStream(true);
  const progress = createProgressLine(stream);
  progress.set('Processing 1 of 3: Alice (AAA111)');
  assert.equal(stream.writes.at(-1), 'Processing 1 of 3: Alice (AAA111)');
});

test('on a TTY, println() clears the pinned line, prints its own line, then restores the pinned line', () => {
  const stream = fakeStream(true);
  const progress = createProgressLine(stream);
  progress.set('Processing 1 of 3: Alice (AAA111)');
  stream.writes.length = 0; // isolate what println() itself does
  progress.println('✅ Alice (AAA111)');
  // A clear/cursor pair, the finished line, then the pinned line restored —
  // in that order, so the pinned status is always what's left on screen.
  assert.equal(stream.writes.length, 4);
  assert.equal(stream.writes[2], '✅ Alice (AAA111)\n');
  assert.equal(stream.writes[3], 'Processing 1 of 3: Alice (AAA111)');
});

test('on a TTY, println() does not restore a pinned line if none was ever set', () => {
  const stream = fakeStream(true);
  const progress = createProgressLine(stream);
  progress.println('✅ Alice (AAA111)');
  assert.deepEqual(stream.writes, ['✅ Alice (AAA111)\n']);
});

test('on a TTY, wrapSink() clears and restores the pinned line around the warning', () => {
  const stream = fakeStream(true);
  const progress = createProgressLine(stream);
  const sunk = [];
  const warn = progress.wrapSink((...args) => {
    sunk.push(args.join(' '));
    stream.write(`${args.join(' ')}\n`);
  });
  progress.set('Processing 2 of 3: Bob (BBB222)');
  stream.writes.length = 0;
  warn('[WARN] no match');
  assert.deepEqual(sunk, ['[WARN] no match']);
  assert.equal(stream.writes[2], '[WARN] no match\n');
  assert.equal(stream.writes.at(-1), 'Processing 2 of 3: Bob (BBB222)');
});

test('on a TTY, done() clears the pinned line and forgets it — a later println() will not restore it', () => {
  const stream = fakeStream(true);
  const progress = createProgressLine(stream);
  progress.set('Processing 3 of 3: Carol (CCC333)');
  progress.done();
  stream.writes.length = 0;
  progress.println('Saving global players...');
  assert.deepEqual(stream.writes, ['Saving global players...\n']);
});
