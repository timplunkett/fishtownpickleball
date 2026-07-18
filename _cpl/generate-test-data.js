#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { compileDashboardHtml } = require('./modules/compiler');

function firstValues(obj) {
  if (!obj || typeof obj !== 'object') return null;
  if (Array.isArray(obj.$values)) return obj.$values;
  for (const key of Object.keys(obj)) {
    const nested = firstValues(obj[key]);
    if (nested) return nested;
  }
  return null;
}

function toSortedCompleted(matchups) {
  return matchups
    .filter((matchup) => matchup.endResult)
    .sort((a, b) => (a.weekNumber - b.weekNumber) || a.matchupId.localeCompare(b.matchupId));
}

function withOnlyCompleted(matchups, completedIds) {
  return matchups.map((matchup) => {
    if (completedIds.has(matchup.matchupId)) {
      return { ...matchup };
    }

    return {
      ...matchup,
      endResult: null,
      homePoints: null,
      awayPoints: null,
    };
  });
}

async function generate() {
  const dataDir = path.join(__dirname, 'data');
  const feed = JSON.parse(fs.readFileSync(path.join(dataDir, 'matchups.json'), 'utf8'));
  const matchups = (feed.$values || firstValues(feed) || []);
  const completed = toSortedCompleted(matchups);

  if (completed.length < 4) {
    throw new Error('Expected at least 4 completed matches to generate test datasets.');
  }

  const scenarios = [
    {
      outputPath: path.join(__dirname, '../cpl/data.test-week1.js'),
      completedIds: new Set(completed.slice(0, 2).map((matchup) => matchup.matchupId)),
    },
    {
      outputPath: path.join(__dirname, '../cpl/data.test-week6.js'),
      completedIds: new Set(completed.slice(0, 4).map((matchup) => matchup.matchupId)),
    },
  ];

  for (const scenario of scenarios) {
    await compileDashboardHtml({
      outputPath: scenario.outputPath,
      matchupsOverride: withOnlyCompleted(matchups, scenario.completedIds),
    });
  }
}

generate().catch((error) => {
  console.error('❌ Failed to generate test datasets:', error.message);
  process.exit(1);
});
