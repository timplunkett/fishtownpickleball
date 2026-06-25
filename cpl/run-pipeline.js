#!/usr/bin/env node
const { downloadLatestApiData } = require('./modules/fetcher');
const { compileDashboardHtml } = require('./modules/compiler');

async function runPipeline() {
  try {
    // 1. Fetch from Azure APIs and cache raw JSON files to _data/
    await downloadLatestApiData();

    // 2. Load the cached files, compute stats, and write cpl/index.html
    await compileDashboardHtml();

    console.log("\n🚀 CPL Pipeline completed successfully!");
  } catch (err) {
    console.error("\n❌ Pipeline execution failed:", err.message);
    process.exit(1);
  }
}

runPipeline();
