#!/usr/bin/env node
const { downloadLatestApiData } = require('./modules/fetcher');
const { compileDashboardHtml, buildPlayerIndex } = require('./modules/compiler');
const {
  DEFAULT_MATCH_DURATION_HOURS,
  DEFAULT_RESULTS_WINDOW_HOURS,
  DEFAULT_TIMEZONE,
  selectDueDivisionSlugs,
} = require('./modules/refresh-selector');
const { unmatchedDivisionSlugs } = require('./modules/division-utils');

function parseArgs(argv) {
  const out = {
    league: null,
    refreshMode: 'full',
    timezone: DEFAULT_TIMEZONE,
    resultsWindowHours: DEFAULT_RESULTS_WINDOW_HOURS,
    matchDurationHours: DEFAULT_MATCH_DURATION_HOURS,
    divisionSlugs: null,
    seasonSlugs: null,
  };

  for (const arg of argv) {
    if (arg === 'local' || arg === 'travel') {
      out.league = arg;
    } else if (arg === '--refresh-mode') {
      out.refreshMode = 'due';
    } else if (arg.startsWith('--timezone=')) {
      out.timezone = arg.split('=')[1] || DEFAULT_TIMEZONE;
    } else if (arg.startsWith('--results-window-hours=')) {
      const value = Number(arg.split('=')[1]);
      if (Number.isFinite(value) && value > 0) out.resultsWindowHours = value;
    } else if (arg.startsWith('--match-duration-hours=')) {
      const value = Number(arg.split('=')[1]);
      if (Number.isFinite(value) && value > 0) out.matchDurationHours = value;
    } else if (arg.startsWith('--division=')) {
      const slug = arg.slice('--division='.length);
      if (slug) out.divisionSlugs = [...(out.divisionSlugs || []), slug];
    } else if (arg.startsWith('--season=')) {
      const slug = arg.slice('--season='.length);
      if (slug) out.seasonSlugs = [...(out.seasonSlugs || []), slug];
    }
  }

  return out;
}

// Runs one league end to end and returns the list of divisions that failed to
// fetch or compile. Hard errors (manifest unreachable, etc.) throw.
async function runPipeline(league, options) {
  let divisionSlugs = null;
  if (options.divisionSlugs) {
    divisionSlugs = options.divisionSlugs;
    console.log(`\n${league.toUpperCase()} refresh mode: explicit divisions (${divisionSlugs.join(', ')}).`);
  } else if (options.refreshMode === 'due') {
    divisionSlugs = selectDueDivisionSlugs(league, options);
  } else {
    console.log(`\n${league.toUpperCase()} refresh mode: full (weekly safety refresh/manual backfill).`);
  }

  // 1. Fetch from Azure APIs and cache raw JSON files to _cpl/data-<league>/<season>/
  const fetchResult = await downloadLatestApiData(league, {
    divisionSlugs,
    seasonSlugs: options.seasonSlugs,
  });

  // 2. Load the cached files, compute stats, and write
  //    cpl/<league>/<season>/data-<slug>.js.
  //
  // Compiling is not limited to the seasons that were just fetched: an archived
  // season is frozen against refetching, not against recompiling, and rebuilding
  // its shards on every run is what keeps them readable by an app.js that has
  // moved on since. The compile is offline and the output is byte-stable, so a
  // season nobody touched produces no diff.
  const compileResult = await compileDashboardHtml(league, { divisionSlugs });

  const failedDivisions = [
    ...(fetchResult?.failedDivisions || []),
    ...(compileResult?.failedDivisions || []),
  ];
  if (failedDivisions.length) {
    console.error(`\n⚠️ CPL Pipeline (${league}) finished with failures.`);
  } else {
    console.log(`\n🚀 CPL Pipeline (${league}) completed successfully!`);
  }
  return {
    failedDivisions,
    asOfBySlug: compileResult?.asOfBySlug || new Map(),
    ratingsBySlug: compileResult?.ratingsBySlug || new Map(),
    matchedSlugs: [
      ...(fetchResult?.matchedSlugs || []),
      ...(compileResult?.matchedSlugs || []),
    ],
    matchedSeasonSlugs: fetchResult?.matchedSeasonSlugs || [],
  };
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const leagues = options.league ? [options.league] : ['local', 'travel'];
  const failedDivisions = [];
  const matchedSlugs = [];
  const matchedSeasonSlugs = [];
  const asOfBySlug = new Map();
  const ratingsBySlug = new Map();

  for (const league of leagues) {
    try {
      const result = await runPipeline(league, options);
      failedDivisions.push(...result.failedDivisions);
      matchedSlugs.push(...result.matchedSlugs);
      matchedSeasonSlugs.push(...result.matchedSeasonSlugs);
      for (const [key, value] of result.asOfBySlug) asOfBySlug.set(key, value);
      for (const [key, value] of result.ratingsBySlug) ratingsBySlug.set(key, value);
    } catch (err) {
      console.error(`\n❌ Pipeline execution failed (${league}):`, err.message);
      failedDivisions.push({ league, slug: '(pipeline)', name: `${league} pipeline`, error: err.message });
    }
  }

  buildPlayerIndex({ asOfBySlug, ratingsBySlug });

  // A typo'd --division slug would otherwise fetch and compile nothing while
  // still exiting 0, which reads as "the data is up to date".
  const unmatched = unmatchedDivisionSlugs(options.divisionSlugs, matchedSlugs);
  if (unmatched.length) {
    console.error(`\n❌ --division slug(s) not found in the ${leagues.join('/')} manifest: ${unmatched.join(', ')}`);
    process.exitCode = 1;
  }

  // Same trap, one level up: --season=2026-sprnig would fetch nothing at all and
  // report a clean run. This one matters more than the division case, because
  // the reason to type --season is a backfill, and a silently-empty backfill
  // looks exactly like a season the API has no data for.
  const unmatchedSeasons = unmatchedDivisionSlugs(options.seasonSlugs, matchedSeasonSlugs);
  if (unmatchedSeasons.length) {
    console.error(`\n❌ --season slug(s) not found in the ${leagues.join('/')} seasons manifest: ${unmatchedSeasons.join(', ')}`);
    process.exitCode = 1;
  }

  // Fail loudly: everything above still ran (partial data is preserved and
  // compiled), but the run must go red so a broken division can't rot
  // unnoticed while the site quietly serves stale numbers.
  if (failedDivisions.length) {
    console.error(`\n❌ ${failedDivisions.length} division(s) failed this run:`);
    for (const f of failedDivisions) {
      console.error(`  - [${f.league}] ${f.name} (${f.slug}): ${f.error}`);
    }
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error('\n❌ Pipeline execution failed:', err.message);
  process.exit(1);
});
