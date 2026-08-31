# fishtownpickleball.com

Source for [fishtownpickleball.com](https://fishtownpickleball.com), the site for
the Fishtown Pickleball Club — a recreational pickleball club in the Fishtown
neighborhood of Philadelphia.

The repository holds two things that barely touch each other:

| | What it is | Where it lives |
| --- | --- | --- |
| **The club site** | A small Jekyll site on the `minima` theme, served by GitHub Pages. Homepage, the skill-level quiz at `/levels`, a 404 page. | `index.markdown`, `levels.md`, `404.html`, `_includes/`, `_sass/`, `assets/`, `_config.yml` |
| **The CPL app** | A static Cross Club League standings dashboard at `/cpl/`. Plain HTML/CSS/JS with the data baked into committed `.js` files — no framework, no runtime API calls. | `cpl/` (published output), `_cpl/` (the pipeline that generates it) |

Jekyll ignores `_cpl/` (leading underscore) and copies `cpl/` through verbatim,
so the dashboard is not templated by Jekyll at all.

## Local development

```sh
bundle install
bundle exec jekyll serve
```

Always use `bundle exec`. The `github-pages` gem pins Jekyll, Kramdown, Sass and
the plugin versions to exactly what GitHub Pages runs; a bare `jekyll` on your
`PATH` will build something production won't.

GitHub Pages **ignores the `Gemfile`** and reads the `plugins:` list in
`_config.yml`. A plugin that works locally but isn't in that list will silently
do nothing in production.

## The CPL data pipeline

Everything runs on Node (see `.github/workflows/` for the version CI uses) with
no runtime dependencies; `npm ci` only installs ESLint.

```sh
npm run build            # fetch from the API + compile everything (needs network)
npm run build:local      # just the local league
npm run build:travel     # just the travel league
npm run build:due        # only divisions whose matches are due a refresh

npm run compile          # compile only, from the cached JSON — works fully offline
npm run compile:local
npm run compile:travel

npm run dupr:fetch       # refresh DUPR ratings (needs DUPR_ACCESS_TOKEN)
npm run dupr:update      # same, bypassing the local cache
```

`npm run build` is `node _cpl/run-pipeline.js`: it fetches the league API into
the cached JSON under `_cpl/data*/`, then compiles that cache into the `cpl/`
shards. `npm run compile` is `node _cpl/compile.js`: it skips the fetch entirely
and recompiles from whatever is already cached, so it needs no network and no
credentials. Reach for `compile` when you've changed compiler or template code
and want to see the effect; reach for `build` when you want fresher numbers.

### Targeting one division

`--division=<slug>` works on both `run-pipeline.js` and `compile.js`, and is
repeatable:

```sh
node _cpl/compile.js local --division=a40bd7e8
node _cpl/run-pipeline.js travel --division=<slug> --division=<other-slug>
```

`--division=` selects **divisions**, nothing else. A typo'd slug is caught: the
run prints `--division slug(s) not found in the … manifest` and exits non-zero
rather than quietly fetching nothing and looking successful.

Note that each league has a *landing slug* — the division a bare `/cpl/local/`
or `/cpl/travel/` URL opens on. That is only a default landing page. It is not a
"primary" division and carries no special status in the data; do not treat it as
one.

### DUPR ratings

`npm run dupr:fetch` reads `DUPR_ACCESS_TOKEN` from `.env` (via Node's
`--env-file`, so `.env` is required for those two scripts and is gitignored).

**The token is a JWT with a roughly 30-day lifetime and must be refreshed.** To
rotate it: sign in to DUPR, copy a fresh bearer token, then update both the
`DUPR_ACCESS_TOKEN` repository secret and your local `.env`. The script decodes
the token's `exp` itself and warns a week out, then errors once it's expired —
if a DUPR run reports no changes, check the token before assuming the ratings
really are unchanged.

## Generated paths — never hand-edit

These are written by the pipeline. Editing them by hand works exactly until the
next run, which overwrites your change without a word:

- `cpl/local/**` and `cpl/travel/**` — the per-division `data-*.js`,
  `detail-*.js`, `dupr-*.js` shards and `bootstrap.js`
- `cpl/shared.js` — a **verbatim copy of `_cpl/modules/shared.js`**, made on
  every compile. Edit the module in `_cpl/modules/`, never the copy. (ESLint is
  configured to ignore it for this reason.)
- `cpl/bootstrap-runtime.js` — generated from `_cpl/modules/bootstrap-gen.js`
- `cpl/player-index.js` and `cpl/dupr-ratings.js`
- `cpl/dupr-audit/data.js`
- `_cpl/data/**`, `_cpl/data-local/**`, `_cpl/data-travel/**` — the cached raw
  API responses, including `_cpl/data/global_players.json`

## Automation

Two workflows write to the repository. They share a `cpl-repo-writes`
concurrency group so they can never race each other's push.

- **`.github/workflows/update-data.yml` — Weekly Data Update.** Two crons:
  every 6 hours (`0 */6 * * *`) it runs a *due-only* refresh, and Sundays at
  09:00 UTC (`0 9 * * 0`) it runs a *full* refresh of every division. Either way
  it commits whatever compiled successfully, then fails the run if any division
  errored — so partial data still ships but a broken division can't rot
  unnoticed. Also runnable via **Run workflow** with a `refresh_mode` of `due`
  or `full`.
- **`.github/workflows/update-dupr.yml` — Update DUPR Ratings.** Manual
  (`workflow_dispatch`) only, no cron. Needs the `DUPR_ACCESS_TOKEN` secret.
- **`.github/workflows/ci.yml` — CI.** Runs on pushes to `main` and on every
  PR: lint, unit tests, and `npm run compile` as a smoke test.

## Verifying a change

```sh
npm run lint             # ESLint over cpl/ entry points and _cpl/
npm run lint:fix
npm test                 # node --test _cpl/test/*.test.js
npm run compile          # offline smoke test — must succeed
bundle exec jekyll build # the Jekyll site itself
```

Run all four before pushing; CI runs the first three.

## Runbook

**Re-run a single division.** Get the slug from the league's
`cpl/<league>/bootstrap.js` or from `_cpl/data-<league>/`, then:

```sh
node _cpl/run-pipeline.js local --division=<slug>   # refetch + recompile
node _cpl/compile.js local --division=<slug>        # recompile from cache only
```

Commit the resulting `cpl/` and `_cpl/data*/` changes.

**Recover from bad published data.** Reverting the commit is not enough — the
6-hourly cron will refetch and re-commit the same bad data within 6 hours. Do
both, in this order:

1. **Disable the workflow first.** GitHub → Actions → *Weekly Data Update* →
   `⋯` → **Disable workflow**. (Or comment out the `schedule:` block and push.)
2. Then revert the bad commit(s) and push.
3. Fix the underlying cause — usually a fetcher or compiler bug, or an upstream
   API change.
4. Re-enable the workflow and dispatch a manual `full` run to confirm the data
   comes back clean.

If you skip step 1, step 2 buys you less than six hours.

**A run went red but data was committed.** That's by design: the pipeline
preserves and commits every division that succeeded, then exits non-zero. Read
the pipeline step log for the `division(s) failed this run` list — those
divisions are serving stale data until they're fixed.

## Data & privacy

The `/cpl/` dashboard is compiled from the **Cross Club League** API and from
**DUPR** ratings. It is an unofficial, personal project and is **not affiliated
with, endorsed by, or supported by** either the Cross Club League or DUPR.

Because it publishes roughly 3,000 real people's names alongside their ratings,
`/cpl/` is deliberately kept out of search engines: the pages carry
`<meta name="robots" content="noindex">`, and `robots.txt` disallows `/cpl/`. The
meta tag is the part that actually prevents indexing; `robots.txt` is only a
request that well-behaved crawlers not fetch at all. Keep both.

**Contributors: do not add new personal fields to the published output.** Names,
team membership, match results and DUPR ratings are already more than enough.
Email addresses, phone numbers, ages, home addresses, photos and anything else
identifying must not be written into `cpl/`, even if the upstream API returns it.
If a change would widen what's published about a person, it needs a deliberate
decision, not a commit.

## License

Source code: [ISC](LICENSE), © Tim Plunkett.

**The license covers the code only.** The compiled league data under `cpl/` and
`_cpl/` is third-party — derived from the Cross Club League and DUPR — and no
rights to it are granted here.
