#!/usr/bin/env node
const { downloadLatestApiData } = require('./modules/fetcher');
const { compileDashboardHtml, buildPlayerIndex } = require('./modules/compiler');
const {
  DEFAULT_MATCH_DURATION_HOURS,
  DEFAULT_RESULTS_WINDOW_HOURS,
  DEFAULT_TIMEZONE,
  selectDueDivisionSlugs,
} = require('./modules/refresh-selector');

function parseArgs(argv) {
  const out = {
    league: null,
    primaryOnly: false,
    refreshMode: 'full',
    timezone: DEFAULT_TIMEZONE,
    resultsWindowHours: DEFAULT_RESULTS_WINDOW_HOURS,
    matchDurationHours: DEFAULT_MATCH_DURATION_HOURS,
    divisionSlugs: null,
  };

  for (const arg of argv) {
    if (arg === 'local' || arg === 'travel') {
      out.league = arg;
    } else if (arg === '--primary-only') {
      out.primaryOnly = true;
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
      const slug = arg.split('=')[1];
      if (slug) out.divisionSlugs = [slug];
    }
  }

  return out;
}

async function runPipeline(league, options) {
  try {
    let divisionSlugs = null;
    if (options.divisionSlugs) {
      divisionSlugs = options.divisionSlugs;
      console.log(`\n${league.toUpperCase()} refresh mode: single division (${divisionSlugs.join(', ')}).`);
    } else if (options.refreshMode === 'due') {
      divisionSlugs = selectDueDivisionSlugs(league, options);
    } else {
      console.log(`\n${league.toUpperCase()} refresh mode: full (weekly safety refresh/manual backfill).`);
    }

    // 1. Fetch from Azure APIs and cache raw JSON files to _data/
    await downloadLatestApiData(league, {
      primaryOnly: options.primaryOnly,
      divisionSlugs,
    });

    // 2. Load the cached files, compute stats, and write cpl/<league>/data.js
    await compileDashboardHtml(league, {
      primaryOnly: options.primaryOnly,
      divisionSlugs,
    });

    console.log(`\n🚀 CPL Pipeline (${league}) completed successfully!`);
  } catch (err) {
    console.error("\n❌ Pipeline execution failed:", err.message);
    process.exit(1);
  }
}

const options = parseArgs(process.argv.slice(2));

if (options.league === 'local') {
  runPipeline('local', options).then(() => buildPlayerIndex());
} else if (options.league === 'travel') {
  runPipeline('travel', options).then(() => buildPlayerIndex());
} else {
  (async () => {
    await runPipeline('local', options);
    await runPipeline('travel', options);
    buildPlayerIndex();
  })();
}
