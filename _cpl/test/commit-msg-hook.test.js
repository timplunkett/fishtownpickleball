// Runs .githooks/commit-msg against sample messages, the way git would: one
// argument, the path to a file holding the message. Title rules depend on the
// current branch, so each case runs inside a throwaway repo on either `main`
// or a feature branch rather than in this checkout (whose branch varies).
// CLAUDECODE is controlled explicitly per case so the result doesn't depend
// on whether the test run itself happens inside Claude Code.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const HOOK = path.join(__dirname, '..', '..', '.githooks', 'commit-msg');
const TRAILER = 'Co-authored-by: Claude Opus 5.5 <noreply@anthropic.com>';

function cleanEnv() {
  const env = { ...process.env };
  delete env.CLAUDECODE;
  // Set when the suite runs from inside another git hook; would point git at
  // this checkout instead of the throwaway repo.
  for (const key of Object.keys(env)) if (key.startsWith('GIT_')) delete env[key];
  return env;
}

function makeRepo(branch) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'commit-msg-repo-'));
  const r = spawnSync('git', ['init', '-q', '-b', branch], { cwd: dir, env: cleanEnv() });
  assert.equal(r.status, 0, String(r.stderr));
  return dir;
}

const REPOS = { main: makeRepo('main'), branch: makeRepo('feat-x') };
test.after(() => {
  for (const dir of Object.values(REPOS)) fs.rmSync(dir, { recursive: true, force: true });
});

function runHook(message, { claudeCode = false, on = 'main' } = {}) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'commit-msg-'));
  const file = path.join(dir, 'COMMIT_EDITMSG');
  fs.writeFileSync(file, message);
  const env = cleanEnv();
  if (claudeCode) env.CLAUDECODE = '1';
  const result = spawnSync('sh', [HOOK, file], { env, encoding: 'utf8', cwd: REPOS[on] });
  fs.rmSync(dir, { recursive: true, force: true });
  return result;
}

const accepts = (message, opts) => {
  const r = runHook(message, opts);
  assert.equal(r.status, 0, `expected accept, got:\n${r.stderr}`);
};
const rejects = (message, opts, pattern) => {
  const r = runHook(message, opts);
  assert.notEqual(r.status, 0, 'expected reject');
  if (pattern) assert.match(r.stderr, pattern);
};

test('accepts scoped and unscoped conventional titles', () => {
  accepts('feat(CPL): Add the thing\n');
  accepts('fix(Lineup Lab): Keep ?team= in sync\n');
  accepts('build: Update Gemfile.lock\n');
  accepts('feat(CPL): #88 Show Mixed and Gender win%\n');
});

// AGENTS.md lists the commit types and the hook enforces them, and the two had
// drifted: AGENTS.md was missing `revert` and `task`, which the hook accepted.
// The hook adds `bot`, which only the automated workflows use, so AGENTS.md
// lists it separately rather than among the types an agent picks from.
test('AGENTS.md lists exactly the types the hook accepts, plus bot', () => {
  const hookTypes = fs.readFileSync(HOOK, 'utf8').match(/types='([^']+)'/)[1].split('|');
  const agents = fs.readFileSync(path.join(__dirname, '..', '..', 'AGENTS.md'), 'utf8');
  const commits = agents.slice(agents.indexOf('## Commits'), agents.indexOf('\n## ', agents.indexOf('## Commits') + 1));
  const documented = [...commits.matchAll(/^ {2}- `([a-z]+)`: /gm)].map((match) => match[1]);
  assert.ok(documented.length > 0, 'no type bullets found under ## Commits');
  assert.deepEqual([...documented, 'bot'].sort(), [...hookTypes].sort());
  documented.forEach((type) => accepts(`${type}: Capitalized subject\n`));
});

test('accepts the automated workflow titles', () => {
  accepts('bot(CPL): Automated data refresh (due) [3.5, 4.0]\n\nFetched, no changes: 3.0\n');
  accepts('bot(DUPR): Update player DUPR ratings\n');
});

test('lets merge, revert and autosquash commits through', () => {
  accepts("Merge branch 'main' into feat-x\n");
  accepts('Revert "feat(CPL): Add the thing"\n');
  accepts('fixup! feat(CPL): Add the thing\n');
});

test('rejects a non-conventional title', () => {
  rejects('Lineup Lab: sort the Team dropdown\n', {}, /conventional commit/);
  rejects('update stuff\n', {}, /conventional commit/);
  rejects('feature(CPL): Add the thing\n', {}, /conventional commit/);
});

test('rejects a lowercase first word after the colon', () => {
  rejects('fix(CPL): link both matches\n', {}, /capitalize/);
});

test('requires a blank line after the title', () => {
  rejects('fix(CPL): Do it\nbody right away\n', {}, /blank line/);
});

test('ignores comment lines and everything below the scissors', () => {
  accepts(`# Please enter the commit message\nfix(CPL): Do it\n\n# comment\n${TRAILER}\n`);
  accepts(
    'fix(CPL): Do it\n\n# ------------------------ >8 ------------------------\n' +
    'Co-authored-by: Claude <noreply@anthropic.com>\n',
  );
});

test('lets branch commits use any title', () => {
  accepts('Lineup Lab: sort the Team dropdown\n', { on: 'branch' });
  accepts('fix(CPL): link both matches\n', { on: 'branch' });
  accepts('wip\nno blank line either\n', { on: 'branch' });
});

test('still checks trailers on branch commits', () => {
  rejects('wip\n\nCo-authored-by: Claude <noreply@anthropic.com>\n', { on: 'branch' }, /name the model/);
  rejects('wip\n', { on: 'branch', claudeCode: true }, /co-author trailer/);
  accepts(`wip\n\n${TRAILER}\n`, { on: 'branch', claudeCode: true });
});

test('accepts a Claude trailer that names a model, in either capitalization', () => {
  accepts(`fix(CPL): Do it\n\nWhy.\n\n${TRAILER}\n`);
  accepts('fix(CPL): Do it\n\nCo-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>\n');
});

test('rejects a Claude trailer with no model name', () => {
  rejects('fix(CPL): Do it\n\nCo-authored-by: Claude <noreply@anthropic.com>\n', {}, /name the model/);
  rejects('fix(CPL): Do it\n\nCo-authored-by: Claude Opus <noreply@anthropic.com>\n', {}, /name the model/);
});

test('only requires the trailer inside Claude Code', () => {
  accepts('fix(CPL): Do it\n');
  rejects('fix(CPL): Do it\n', { claudeCode: true }, /co-author trailer/);
  accepts(`fix(CPL): Do it\n\n${TRAILER}\n`, { claudeCode: true });
});

test('leaves non-Claude co-authors alone', () => {
  accepts('fix(CPL): Do it\n\nCo-authored-by: Someone Else <someone@example.com>\n');
});
