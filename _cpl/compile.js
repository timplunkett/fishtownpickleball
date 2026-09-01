#!/usr/bin/env node
const { compileDashboardHtml, buildPlayerIndex } = require('./modules/compiler');
const { unmatchedDivisionSlugs } = require('./modules/division-utils');

// --division=<slug> (repeatable) compiles just those divisions from the cached
// JSON; omit it to compile every division in the manifest. --season=<slug>
// (repeatable) narrows the same way by season; omit it to compile every season,
// archived ones included.
function parsePrefixed(argv, prefix) {
  const values = argv
    .filter((arg) => arg.startsWith(prefix))
    .map((arg) => arg.slice(prefix.length))
    .filter(Boolean);
  return values.length ? values : null;
}

async function main() {
  const argv = process.argv.slice(2);
  const leagueArg = argv.find((arg) => arg === 'local' || arg === 'travel');
  const leagues = leagueArg ? [leagueArg] : ['local', 'travel'];
  const divisionSlugs = parsePrefixed(argv, '--division=');
  const seasonSlugs = parsePrefixed(argv, '--season=');
  const failedDivisions = [];
  const matchedSlugs = [];
  const asOfBySlug = new Map();
  const ratingsBySlug = new Map();

  for (const league of leagues) {
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
  }

  buildPlayerIndex({ asOfBySlug, ratingsBySlug });

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
