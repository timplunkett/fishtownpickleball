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

// Clone an existing match detail entry, replacing its matchupId and weekNumber.
// Optionally swap home/away team identity so the cloned match reflects a new pairing.
// This lets us fabricate plausible week 6 results from real week 1-5 game data.
function cloneDetailAs(details, sourceMatchupId, targetMatchupId, targetWeekNumber, teamSwap) {
  const source = details.find((d) => d.matchupId === sourceMatchupId);
  if (!source) throw new Error(`Source matchup ${sourceMatchupId} not found in matchupDetails.`);
  const cloned = JSON.parse(JSON.stringify(source));
  cloned.matchupId = targetMatchupId;
  const M = cloned.details.matchup;
  M.matchupId = targetMatchupId;
  M.weekNumber = targetWeekNumber;
  if (teamSwap) {
    // Replace one team's identity (name + id) while leaving game data and player ids intact.
    // Only the team-level attribution changes; per-player stats still belong to real players.
    if (teamSwap.home) {
      M.homeTeamId = teamSwap.home.teamId;
      M.homeName = teamSwap.home.name;
      if (M.homeTeam) M.homeTeam.teamId = teamSwap.home.teamId;
    }
    if (teamSwap.away) {
      M.awayTeamId = teamSwap.away.teamId;
      M.awayName = teamSwap.away.name;
      if (M.awayTeam) M.awayTeam.teamId = teamSwap.away.teamId;
    }
  }
  for (const s of (cloned.details.matchupPlayerStats && cloned.details.matchupPlayerStats.$values) || []) {
    s.matchupId = targetMatchupId;
  }
  for (const g of (cloned.details.lineups && cloned.details.lineups.lineups && cloned.details.lineups.lineups.$values) || []) {
    g.matchupId = targetMatchupId;
  }
  return cloned;
}

async function generate() {
  const dataDir = path.join(__dirname, 'data');
  const feed = JSON.parse(fs.readFileSync(path.join(dataDir, 'matchups.json'), 'utf8'));
  const matchups = (feed.$values || firstValues(feed) || []);
  const details = JSON.parse(fs.readFileSync(path.join(dataDir, 'matchupDetails.json'), 'utf8'));
  const completed = toSortedCompleted(matchups);

  if (completed.length < 10) {
    throw new Error('Expected at least 10 completed matches (weeks 1-5) to generate test datasets.');
  }

  // --- Scenario 1: Week 1 — only 2 matches played (KN appears with 0-0 record) ---
  const week1CompletedIds = new Set(
    completed.filter((m) => m.weekNumber === 1).map((m) => m.matchupId),
  );

  // --- Scenario 2: "Week 6" — all weeks 1-5 done + both week 6 matches fabricated ---
  // Week 6 matchups (not yet played):
  //   219085d9: Baggers (home) vs Balls of Fury
  //   dab7dac5: License to Dill (home) vs Picholas Cage
  //
  // Cloning strategy: pick an existing completed match where the home team matches,
  // and if the away team differs from the week 6 away team, supply a teamSwap so the
  // away team identity is updated. Player-level stats stay from the source match but
  // team-level records will correctly attribute wins/losses to the right teams.
  //
  //   For Baggers (home) vs BoF (away): clone e96939a2 (Baggers vs KN, week 2)
  //     → swap away identity from KN → Balls of Fury
  //   For License to Dill (home) vs PC (away): clone 2ce48089 (LTD vs BoF, week 2)
  //     → swap away identity from BoF → Picholas Cage
  const TEAM_IDS = {
    'Balls of Fury': '788752a8-685a-4f95-bbc9-dd3636862a76',
    'Picholas Cage': '1ef6000c-4d56-434c-abbc-734996c56dff',
  };
  const WEEK6_BAGGERS_ID = '219085d9-c5fb-4a68-a1d1-1f2292b19f0e';
  const WEEK6_LTD_ID = 'dab7dac5-95bb-4916-9a85-2282d3fc0a77';
  const fabricatedBaggers = cloneDetailAs(
    details, 'e96939a2-fc64-48a8-83df-490e4dcbb9ef', WEEK6_BAGGERS_ID, 6,
    { away: { teamId: TEAM_IDS['Balls of Fury'], name: 'Balls of Fury' } },
  );
  const fabricatedLtd = cloneDetailAs(
    details, '2ce48089-a81e-4f13-a5a1-9f0726ebdaeb', WEEK6_LTD_ID, 6,
    { away: { teamId: TEAM_IDS['Picholas Cage'], name: 'Picholas Cage' } },
  );

  const week6MatchupsOverride = withOnlyCompleted(
    matchups.map((m) => {
      if (m.matchupId === WEEK6_BAGGERS_ID) {
        return { ...m, endResult: fabricatedBaggers.details.matchup.endResult, homePoints: fabricatedBaggers.details.matchup.homePoints, awayPoints: fabricatedBaggers.details.matchup.awayPoints };
      }
      if (m.matchupId === WEEK6_LTD_ID) {
        return { ...m, endResult: fabricatedLtd.details.matchup.endResult, homePoints: fabricatedLtd.details.matchup.homePoints, awayPoints: fabricatedLtd.details.matchup.awayPoints };
      }
      return m;
    }),
    new Set([...completed.map((m) => m.matchupId), WEEK6_BAGGERS_ID, WEEK6_LTD_ID]),
  );

  const week6DetailsOverride = [
    ...details.filter((d) => d.matchupId !== WEEK6_BAGGERS_ID && d.matchupId !== WEEK6_LTD_ID),
    fabricatedBaggers,
    fabricatedLtd,
  ];

  const scenarios = [
    {
      outputPath: path.join(__dirname, '../cpl/data.test-week1.js'),
      matchupsOverride: withOnlyCompleted(matchups, week1CompletedIds),
    },
    {
      outputPath: path.join(__dirname, '../cpl/data.test-week6.js'),
      matchupsOverride: week6MatchupsOverride,
      matchupDetailsOverride: week6DetailsOverride,
    },
  ];

  for (const scenario of scenarios) {
    await compileDashboardHtml(scenario);
  }
}

generate().catch((error) => {
  console.error('❌ Failed to generate test datasets:', error.message);
  process.exit(1);
});
