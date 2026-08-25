#!/usr/bin/env node
const { compileDashboardHtml, buildPlayerIndex } = require('./modules/compiler');
const { unmatchedDivisionSlugs } = require('./modules/division-utils');

// --division=<slug> (repeatable) compiles just those divisions from the cached
// JSON; omit it to compile every division in the manifest.
function parseDivisionSlugs(argv) {
  const slugs = argv
    .filter((arg) => arg.startsWith('--division='))
    .map((arg) => arg.slice('--division='.length))
    .filter(Boolean);
  return slugs.length ? slugs : null;
}

async function main() {
  const argv = process.argv.slice(2);
  const leagueArg = argv.find((arg) => arg === 'local' || arg === 'travel');
  const leagues = leagueArg ? [leagueArg] : ['local', 'travel'];
  const divisionSlugs = parseDivisionSlugs(argv);
  const failedDivisions = [];
  const matchedSlugs = [];

  for (const league of leagues) {
    const { failedDivisions: failed = [], matchedSlugs: matched = [] } = await compileDashboardHtml(league, { divisionSlugs }) || {};
    failedDivisions.push(...failed);
    matchedSlugs.push(...matched);
    if (!failed.length) console.log(`\n✅ Compile (${league}) completed successfully!`);
  }

  buildPlayerIndex();

  const unmatched = unmatchedDivisionSlugs(divisionSlugs, matchedSlugs);
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
