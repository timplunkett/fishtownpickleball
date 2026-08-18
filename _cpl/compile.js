#!/usr/bin/env node
const { compileDashboardHtml, buildPlayerIndex } = require('./modules/compiler');

const primaryOnly = process.argv.includes('--primary-only');

async function compile(league) {
  try {
    await compileDashboardHtml(league, { primaryOnly });
    console.log(`\n✅ Compile (${league}) completed successfully!`);
  } catch (err) {
    console.error("\n❌ Compile failed:", err.message);
    process.exit(1);
  }
}

const arg = process.argv[2];
if (arg === 'local' || arg === 'travel') {
  compile(arg).then(() => buildPlayerIndex());
} else {
  // Default: compile both leagues sequentially.
  (async () => {
    await compile('local');
    await compile('travel');
    buildPlayerIndex();
  })();
}
