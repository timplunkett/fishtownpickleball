# AGENTS.md

Instructions for coding agents (Claude Code, Codex, Cursor, …) working in this
repo. `README.md` is the source of truth for how the site and the CPL pipeline
work — read the relevant section before changing anything there. This file only
holds what an agent needs on top of it: workflow rules and the invariants that
are easy to break without noticing.

## Workflow

- **Branch before editing.** Every change goes on a new `<type>-<slug>` branch
  off `main` (e.g. `feat-cpl-favorites`, `fix-dupr-cookie-auth`) and is
  committed there without being asked. Never leave edits uncommitted on `main`.
- **Don't push or open PRs unless asked.** When asked, write the PR title and
  body; the PR is the handoff.
- **Never push to `main`.** Not directly, not by force, not by deleting it —
  everything reaches `main` through a PR that Tim merges. Create branches with
  `--no-track` (a branch made from `origin/main` otherwise tracks it), and push
  by explicit refspec, `git push origin HEAD:refs/heads/<branch>`: with
  `push.default=tracking`, a bare `git push origin <branch>` goes to the
  branch's upstream, which is how an agent once landed a feature branch on
  `main`. `.githooks/pre-push` refuses any update to `main` from inside
  Claude Code; if it fires, the push was wrong — don't work around it.
- **Force pushes: `--force-with-lease` only, and only when asked.** Keep a
  branch current by merging `main` into it, which needs no force push. Rebase
  only when Tim asks for it, and then push the feature branch with
  `git push --force-with-lease=refs/heads/<branch>:<sha you last pushed> origin HEAD:refs/heads/<branch>`.
  Pinning the lease to the commit you last pushed makes git refuse if
  anyone else has moved the branch since. Never `--force`, `-f` or a
  `+refspec`, and never on `main`.
- **Stay inside the checkout.** Don't create files, worktrees or symlinks
  outside this repository's directory, temp files included.
- Don't switch branches in a checkout someone is actively serving with Jekyll.
  For parallel work, use a worktree inside the checkout (`.claude/` is
  gitignored):
  `git worktree add --no-track .claude/worktrees/<slug> -b <branch> origin/main`.
- Verify before calling anything done (see "Verifying a change" in the README):

  ```sh
  npm run lint
  npm test
  npm run compile -- --full
  ```

  A pre-push hook reruns the full compile and fails on `cpl/` drift. Don't
  bypass it with `--no-verify`; fix the drift.

## Commits

- Conventional commits, scoped: `feat(CPL): Capitalize the first word after the colon`.
  `(CPL)` is almost always right; `(Lineup Lab)` and `(CPL Data Refresh)` also
  appear. Types: `feat fix chore style refactor build test perf docs ci`.
  `bot(…)` is reserved for the automated data/DUPR workflows.
- Author is `Tim Plunkett <git@plnktt.com>` — not a work address. Check
  `git config user.email` if in doubt.
- End every agent-written commit with a trailer naming **the model actually
  running this session**, full name, not copied from history:

  ```
  Co-authored-by: Claude <Model Name> <noreply@anthropic.com>
  ```

  Re-read the trailer immediately before committing. A bare `Claude`, a missing
  trailer, or a stale model name have each slipped through before.
  `.githooks/commit-msg` rejects a malformed title when committing on `main`
  (branch commits that land via a merge commit can be titled freely; the
  merge commit's title must conform), and on any branch a trailer without a
  model name or, inside Claude Code, a missing trailer. It can't tell a
  *stale* model name from the right one, so checking that is still on you.
  If it rejects a commit, fix the message; don't `--no-verify` past it.
- Body explains *why*. Data churn cleanup from a fix goes in its own
  `chore(CPL): …` commit, not mixed into the code change.

## Invariants that are easy to break

**Generated vs hand-written.** Anything under a `compiled/` directory, each
season's `index.html`, and `cpl/<league>/index.html` are generated — edits are
silently overwritten. Edit the source instead: `_cpl/modules/shared.js` (not
`cpl/compiled/shared.js`), `_cpl/templates/<league>.html` (not the season
copies). Full list: README "Generated paths — never hand-edit". Hand-written:
`cpl/app.js`, `cpl/home.js`, `cpl/styles.css`, `cpl/home.css`, `cpl/index.html`,
`cpl/archive/{index.html,archive.js}`, `cpl/dupr-audit/index.html`.

**CSS placement.** `cpl/styles.css` loads on every page; `cpl/home.css` only on
the homepage. Markup shared between `app.js` and `home.js` must be styled in
`styles.css`.

**No primary division.** No division is special. Target subsets with
`--division=<slug>` (repeatable). `LEAGUE_LANDING_SLUGS` in
`_cpl/modules/division-utils.js` only picks which division a bare
`/cpl/<league>/` URL opens; nothing else may branch on it. Don't reintroduce an
`isDefault`-style flag in the manifests.

**Seasons.** Archived seasons are frozen against *fetching*, not compiling —
every run recompiles every season. The API's season `active` flag is always
`true`; current vs archived comes from `_cpl/seasons.config.json`. A leftover
`pin` there silently stops a league updating. `/cpl/<league>/` is a redirect
stub, not a dashboard.

**`cpl/app.js` path depth.** It's shared by every division and has hand-written
relative paths inside it. If `cpl/` gains or loses a directory level,
`grep "'\.\./" cpl/app.js`; `_cpl/test/other-leagues.test.js` guards the known
two.

**Stable ordering of committed data.** The API returns arrays in unstable or
rank-dependent order. Anything written to `_cpl/data*/` must be sorted on a
rank-independent key (see `comparePlayers` / `compareMatchups` in
`_cpl/modules/fetcher.js`), or every refresh produces wholesale, meaningless
diffs. Don't persist values that mirror *current* API state onto historical
records (e.g. today's rank on last month's matchup). When a player has several
rows in one division, code picking "the" row must state its own precedence.

**Incremental compile.** `npm run compile` skips divisions whose inputs didn't
change. If you make `compileDivision` depend on a new module or data file, add
it to `TRACKED_MODULE_FILES` / `DIVISION_INPUT_FILES` in
`_cpl/modules/incremental.js`. CI and the pre-push hook must keep passing
`--full`.

**Git hooks.** The compile check is `.githooks/pre-push` on purpose: pre-commit
was too slow, and GitHub can't run server-side hooks.

## Agents in `.claude/agents/`

- `planner` (Opus, read-only): turns a request into a plan file and stops.
- `implementer` (Sonnet): executes a plan on a branch, verifies, commits.
- `reviewer` (Opus, read-only): reviews `main...HEAD` with fresh context.
