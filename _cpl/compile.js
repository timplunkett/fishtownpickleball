#!/usr/bin/env node
const { compileDashboardHtml, buildPlayerIndex } = require('./modules/compiler');

const primaryOnly = process.argv.includes('--primary-only');

async function main() {
  const arg = process.argv[2];
  const leagues = (arg === 'local' || arg === 'travel') ? [arg] : ['local', 'travel'];
  const failedDivisions = [];

  for (const league of leagues) {
    const { failedDivisions: failed = [] } = await compileDashboardHtml(league, { primaryOnly }) || {};
    failedDivisions.push(...failed);
    if (!failed.length) console.log(`\n✅ Compile (${league}) completed successfully!`);
  }

  buildPlayerIndex();

  if (failedDivisions.length) {
    console.error(`\n❌ ${failedDivisions.length} division(s) failed to compile.`);
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error("\n❌ Compile failed:", err.message);
  process.exit(1);
});
