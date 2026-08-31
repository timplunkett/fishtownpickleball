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

Both fetch only the **current** season of each league, and compile **every**
season including the archived ones — see [Seasons and the Archive](#seasons-and-the-archive).

### Seasons and the Archive

Every division belongs to a season, and a season is the unit this site freezes.
Both leagues are scoped a season at a time, on disk and in the URL:

```
_cpl/data-<league>/seasons.json          which seasons exist
_cpl/data-<league>/<season>/             cached API JSON for one season
cpl/<league>/<season>/                   its compiled dashboards
cpl/<league>/                            a redirect stub, not a dashboard
cpl/catalog.js                           every league → season → division
```

A season slug is `<year>-<name>`: `2026-fall`, `2026-spring`, `2026-summer`.
The API numbers seasons 1–4 within a year (1 = Spring, 2 = Summer, 3 = Fall);
the mapping lives in `_cpl/modules/seasons.js`.

**Which season is current.** The newest season `/seasons` returns, and every
older one is archived. The API's own `active` flag is no help — every season it
has ever returned is `active: true`, including ones that finished a year ago.
Two overrides live in `_cpl/seasons.config.json`:

- `pin` holds a season current after its successor's shell appears upstream.
  That is the one window the automatic rule gets wrong: the league creates next
  season before this season's playoffs finish, which would freeze results early.
  **Clear it afterwards, or the league stops updating.**
- `archive` freezes a season early.

**What archived means.** Archived seasons are never fetched again. They *are*
recompiled on every run — that is what keeps their shards readable by an
`app.js` that has moved on — but nothing upstream can rewrite results that are
settled. The compile is offline and byte-stable, so a season nobody touched
produces no diff.

Archived seasons keep their full dashboards, stay in the player finder forever,
and are dropped from the DUPR bracket audit (auditing a finished roster against
today's ratings reports post-season drift as in-season misplacement).

`--season=<slug>` is the only way to fetch a season that is not current. The
crons never pass it, so no scheduled run can reach an archive; a run that does
warns. It is repeatable and works on both scripts:

```sh
node _cpl/run-pipeline.js travel --season=2026-spring   # backfill or refetch
node _cpl/compile.js travel --season=2026-spring        # recompile from cache
```

### Targeting one division

`--division=<slug>` works on both `run-pipeline.js` and `compile.js`, and is
repeatable:

```sh
node _cpl/compile.js local --division=a40bd7e8
node _cpl/run-pipeline.js travel --division=<slug> --division=<other-slug>
```

`--division=` selects **divisions**, nothing else. A typo'd slug is caught: the
run prints `--division slug(s) not found in the … manifest` and exits non-zero
rather than quietly fetching nothing and looking successful. `--season=` is
checked the same way, and it matters more there: the reason to type `--season`
is a backfill, and a silently-empty backfill looks exactly like a season the API
has no data for.

Note that each league has a *landing slug* — the division a bare
`/cpl/local/<season>/` URL opens on. That is only a default landing page. It is
not a "primary" division and carries no special status in the data; do not treat
it as one. It is keyed by league, not by season, so a season the table says
nothing about falls through to its first division.

### Old URLs

`/cpl/<league>/` is no longer a dashboard. It is a stub that redirects into a
season, and it exists because every link shared before seasons — and every link
the player finder used to emit — has the shape `/cpl/travel/?d=<slug>`.

Division slugs are the first eight characters of a division UUID, so they are
unique across seasons. The stub uses that: a `?d=` naming *any* season's
division goes to that season, archived or not, carrying `?team=` and `?player=`
along with it. A bare URL, or an unknown `?d=`, lands on the current season.
GitHub Pages cannot redirect, so this happens in the browser.

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

- `cpl/local/**` and `cpl/travel/**` — everything under them: the per-division
  `data-*.js`, `detail-*.js`, `dupr-*.js` shards, each season's `bootstrap.js`
  and `index.html`, and each league's `index.html` + `redirect.js` stub
- `cpl/shared.js` — a **verbatim copy of `_cpl/modules/shared.js`**, made on
  every compile. Edit the module in `_cpl/modules/`, never the copy. (ESLint is
  configured to ignore it for this reason.)
- `cpl/bootstrap-runtime.js` — generated from `_cpl/modules/bootstrap-gen.js`
- `cpl/catalog.js` — the league/season/division index every page reads
- `cpl/player-index.js` and `cpl/dupr-ratings.js`
- `cpl/dupr-audit/data.js`
- `_cpl/data/**`, `_cpl/data-local/**`, `_cpl/data-travel/**` — the cached raw
  API responses, including `_cpl/data/global_players.json`

The dashboard markup is **not** generated: `_cpl/templates/local.html` and
`_cpl/templates/travel.html` are the two hand-written shells, copied verbatim
into every season directory on compile. Edit those, never the copies.

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

**Re-run a single division.** Get the slug from `cpl/catalog.js` or from
`_cpl/data-<league>/<season>/`, then:

```sh
node _cpl/run-pipeline.js local --division=<slug>   # refetch + recompile
node _cpl/compile.js local --division=<slug>        # recompile from cache only
```

Commit the resulting `cpl/` and `_cpl/data*/` changes.

**Archive a season by hand.** The automatic rule archives a season as soon as a
newer one appears upstream, so this is only for freezing one early:

1. Add its slug to `archive` for that league in `_cpl/seasons.config.json`.
2. `npm run compile` — no fetch needed; the split is decided at read time.
3. Commit. The season moves into the Archive panel on `/cpl/`, its dashboards
   start reading "final", and no future run will fetch it.

**Backfill a season that was never fetched.** A season in `seasons.json` with no
directory under `_cpl/data-<league>/` is skipped quietly on every compile — that
is the resting state for any season older than the archive we chose to keep.
To pull one in:

```sh
node _cpl/run-pipeline.js travel --season=2026-spring
```

It will warn that it is refetching an archived season; that is the point. Check
the compiled dashboards before committing, and expect the diff to be large —
a season is roughly a megabyte per division.

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
