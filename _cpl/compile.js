#!/usr/bin/env node
const path = require('path');
const { compileDashboardHtml, buildPlayerIndex } = require('./modules/compiler');
const { unmatchedDivisionSlugs } = require('./modules/division-utils');
const { eachLeagueSeason, seasonCacheDir } = require('./modules/catalog');
const {
  loadCache, saveCache, computeModuleHash, computeDivisionInputHash, partitionByHash,
} = require('./modules/incremental');

// --division=<slug> (repeatable) compiles just those divisions from the cached
// JSON, bypassing change detection entirely — an explicit ask always compiles.
// --season=<slug> (repeatable) narrows the same way by season. --full ignores
// the change-detection cache and recompiles every division in scope, exactly
// like every `npm run compile` used to before this file learned to skip
// divisions whose cached inputs haven't moved (see modules/incremental.js).
// Omitting both --division and --full compiles only what changed since the
// last compile — CI and the pre-push hook always pass --full (see
// .githooks/pre-push), since their whole job is proving a fresh compile still
// matches the committed output, which an incremental run can't promise.
function parsePrefixed(argv, prefix) {
  const values = argv
    .filter((arg) => arg.startsWith(prefix))
    .map((arg) => arg.slice(prefix.length))
    .filter(Boolean);
  return values.length ? values : null;
}

// Which of one league's cached divisions (optionally narrowed by --season)
// have changed since the cache last recorded them, and this run's fresh
// hashes for all of them (used afterward to update the cache — see main()).
//
// moduleChanged forces every division in scope into the changed bucket: the
// compiler code moved out from under the cache, so nothing on disk can be
// trusted to reflect it. It's tracked per league rather than as one global
// flag because compile:local/compile:travel run as separate invocations —
// a single global hash would let compiling one league mark the *other*
// league's stale-format divisions as "up to date" without ever touching them.
function selectChangedDivisions(league, { seasonSlugs = null, cache, moduleHash }) {
  const requestedSeasons = Array.isArray(seasonSlugs) ? new Set(seasonSlugs) : null;
  const moduleChanged = (cache.moduleHashByLeague || {})[league] !== moduleHash;

  const entries = [];
  const hashesByKey = new Map();
  for (const { season, divisions } of eachLeagueSeason([league])) {
    if (requestedSeasons && !requestedSeasons.has(season.slug)) continue;
    const dataDir = seasonCacheDir(league, season.slug);
    for (const div of divisions) {
      const key = `${league}/${season.slug}/${div.slug}`;
      const hash = computeDivisionInputHash(path.join(dataDir, div.slug), div);
      hashesByKey.set(key, hash);
      entries.push({ key, slug: div.slug, hash });
    }
  }

  const { changed, unchanged } = partitionByHash(entries, cache.divisions || {}, moduleChanged);
  return {
    moduleChanged, changedSlugs: changed, unchangedSlugs: unchanged, hashesByKey,
  };
}

async function main() {
  const argv = process.argv.slice(2);
  const leagueArg = argv.find((arg) => arg === 'local' || arg === 'travel');
  const leagues = leagueArg ? [leagueArg] : ['local', 'travel'];
  const explicitDivisionSlugs = parsePrefixed(argv, '--division=');
  const seasonSlugs = parsePrefixed(argv, '--season=');
  const full = argv.includes('--full');

  const cache = loadCache();
  const moduleHash = computeModuleHash();

  const failedDivisions = [];
  const matchedSlugs = [];
  const asOfBySlug = new Map();
  const ratingsBySlug = new Map();

  for (const league of leagues) {
    let divisionSlugs = explicitDivisionSlugs;
    // Change detection only runs (and only updates the cache) when the caller
    // didn't already name specific divisions — an explicit --division is a
    // deliberate, narrow ask that should behave exactly as it always has.
    let selection = null;
    if (!explicitDivisionSlugs) {
      selection = selectChangedDivisions(league, { seasonSlugs, cache, moduleHash });
      if (full) {
        divisionSlugs = null; // compile every division in scope, cache aside
      } else {
        divisionSlugs = selection.changedSlugs;
        if (selection.unchangedSlugs.length) {
          const reason = selection.moduleChanged ? '_cpl/modules/ changed' : 'inputs unchanged';
          console.log(
            `\n${league.toUpperCase()}: skipping ${selection.unchangedSlugs.length} unchanged division(s), `
            + `compiling ${selection.changedSlugs.length} (${reason} for the rest). Pass --full to recompile everything.`,
          );
        }
      }
    }

    const {
      failedDivisions: failed = [],
      matchedSlugs: matched = [],
      asOfBySlug: asOf = new Map(),
      ratingsBySlug: ratings = new Map(),
    } = await compileDashboardHtml(league, { divisionSlugs, seasonSlugs }) || {};
    failedDivisions.push(...failed);
    matchedSlugs.push(...matched);
    for (const [key, value] of asOf) asOfBySlug.set(key, value);
    for (const [key, value] of ratings) ratingsBySlug.set(key, value);
    if (!failed.length) console.log(`\n✅ Compile (${league}) completed successfully!`);

    // Record what actually compiled cleanly this run (asOf is only set right
    // after a successful compileDivision — see compiler.js), so the next
    // incremental run can trust these hashes. Only bump the league's module
    // hash when nothing narrowed the scope (--season absent): a --season=
    // run's untouched seasons would otherwise look "current" against a code
    // change they never actually recompiled against.
    if (selection) {
      for (const [key, hash] of selection.hashesByKey) {
        if (asOf.has(key)) cache.divisions[key] = hash;
      }
      if (!seasonSlugs) cache.moduleHashByLeague[league] = moduleHash;
    }
  }

  saveCache(cache);

  buildPlayerIndex({ asOfBySlug, ratingsBySlug });

  const unmatched = unmatchedDivisionSlugs(explicitDivisionSlugs, matchedSlugs);
  if (unmatched.length) {
    console.error(`\n❌ --division slug(s) not found in the ${leagues.join('/')} manifest: ${unmatched.join(', ')}`);
    process.exitCode = 1;
  }

  if (failedDivisions.length) {
    console.error(`\n❌ ${failedDivisions.length} division(s) failed to compile.`);
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error("\n❌ Compile failed:", err.message);
  process.exit(1);
});
