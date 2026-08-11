#!/usr/bin/env node
const { downloadLatestApiData } = require('./modules/fetcher');
const { compileDashboardHtml } = require('./modules/compiler');

const primaryOnly = process.argv.includes('--primary-only');

async function runPipeline(league) {
  try {
    // 1. Fetch from Azure APIs and cache raw JSON files to _data/
    await downloadLatestApiData(league, { primaryOnly });

    // 2. Load the cached files, compute stats, and write cpl/<league>/data.js
    await compileDashboardHtml(league, { primaryOnly });

    console.log(`\n🚀 CPL Pipeline (${league}) completed successfully!`);
  } catch (err) {
    console.error("\n❌ Pipeline execution failed:", err.message);
    process.exit(1);
  }
}

const arg = process.argv[2];
if (arg === '--league=local' || arg === 'local') {
  runPipeline('local');
} else if (arg === '--league=travel' || arg === 'travel') {
  runPipeline('travel');
} else {
  // Default: run both leagues sequentially.
  (async () => {
    await runPipeline('local');
    await runPipeline('travel');
  })();
}
