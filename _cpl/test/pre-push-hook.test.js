// Runs .githooks/pre-push the way git does: the remote's name and URL as
// arguments, one "<local ref> <local sha> <remote ref> <remote sha>" line per
// ref on stdin. These cases only cover the guard against coding agents
// pushing to main, which runs before the hook does anything with git, so they
// need no repository. Deleting a feature branch is the allowed case for the
// same reason: the drift check skips deletions without touching git either.
// CLAUDECODE is controlled explicitly per case so the result doesn't depend
// on whether the test run itself happens inside Claude Code.
const test = require('node:test');
const assert = require('node:assert/strict');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const HOOK = path.join(__dirname, '..', '..', '.githooks', 'pre-push');
const Z40 = '0'.repeat(40);
const SHA = 'a'.repeat(40);

function runHook(lines, { claudeCode = false } = {}) {
  const env = { ...process.env };
  delete env.CLAUDECODE;
  for (const key of Object.keys(env)) if (key.startsWith('GIT_')) delete env[key];
  if (claudeCode) env.CLAUDECODE = '1';
  return spawnSync('sh', [HOOK, 'origin', 'git@github.com:example/repo.git'], {
    env,
    encoding: 'utf8',
    cwd: os.tmpdir(),
    input: `${lines.join('\n')}\n`,
  });
}

test('refuses an agent updating main', () => {
  const r = runHook([`refs/heads/main ${SHA} refs/heads/main ${SHA.replace(/a/g, 'b')}`], { claudeCode: true });
  assert.notEqual(r.status, 0);
  assert.match(r.stderr, /refusing to update main from a coding agent/);
});

// The incident this guard exists for: the command named a feature branch,
// but its upstream was origin/main, so git mapped it onto main.
test('refuses an agent pushing a feature branch onto main', () => {
  const r = runHook([`refs/heads/fix-x ${SHA} refs/heads/main ${SHA.replace(/a/g, 'b')}`], { claudeCode: true });
  assert.notEqual(r.status, 0);
  assert.match(r.stderr, /refs\/heads\/fix-x -> refs\/heads\/main/);
});

test('refuses an agent deleting main', () => {
  const r = runHook([`(delete) ${Z40} refs/heads/main ${SHA}`], { claudeCode: true });
  assert.notEqual(r.status, 0);
});

test('refuses when main is one of several refs in the push', () => {
  const r = runHook([
    `(delete) ${Z40} refs/heads/feat-x ${SHA}`,
    `refs/heads/feat-x ${SHA} refs/heads/main ${SHA.replace(/a/g, 'b')}`,
  ], { claudeCode: true });
  assert.notEqual(r.status, 0);
});

test('lets an agent push to other branches', () => {
  const r = runHook([`(delete) ${Z40} refs/heads/feat-x ${SHA}`], { claudeCode: true });
  assert.equal(r.status, 0, r.stderr);
});

test('leaves a person pushing to main alone', () => {
  const r = runHook([`(delete) ${Z40} refs/heads/main ${SHA}`]);
  assert.equal(r.status, 0, r.stderr);
});
