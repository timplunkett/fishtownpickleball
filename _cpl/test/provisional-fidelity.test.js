// The league doesn't publish per-player stat rows for a matchup it hasn't closed
// out, so a provisional result has to have them rebuilt from the lineups. Each
// field's derivation was reverse-engineered against the rows the league DOES
// publish, and this test is what keeps it honest: it re-derives the stat rows for
// every completed matchup in the cached feeds and compares them to the league's
// own numbers.
//
// Wins, losses, games played and the mixed/gender splits have to match exactly —
// they follow from the scores with nothing left to interpret. Points and clutch
// counts are held to a high-but-not-perfect bar, because a small number of
// matchups have reported totals that disagree with their own game scores; the
// derivation can't reproduce a contradiction, and shouldn't be rewritten to chase
// one. If these thresholds start failing, the league changed a convention (the
// game target, or what counts as clutch) and the derivations need revisiting —
// not the thresholds.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { cachedDivisions } = require('./helpers/compiled');

const {
  inferGameTarget,
  synthesizeMatchupPlayerStats,
  deriveProvisionalOutcome,
} = require('../modules/ratings');

const EXACT_FIELDS = ['gamesPlayed', 'wins', 'losses', 'mixedWins', 'mixedLosses', 'genderWins', 'genderLosses'];
const APPROXIMATE_FIELDS = ['pointsWon', 'totalPointsAgainst', 'clutchWins', 'clutchLosses', 'isSub'];
const MIN_APPROXIMATE_AGREEMENT = 0.98;
const MIN_ROWS = 500; // Enough cached data for the agreement rates to mean anything.

function firstArray(node) {
  if (Array.isArray(node)) return node;
  if (node && Array.isArray(node.$values)) return node.$values;
  if (node && typeof node === 'object') return Object.values(node).find(Array.isArray) || [];
  return [];
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

// Every cached division across both leagues, as { matchups, details, roster }.
function loadDivisions() {
  const divisions = [];
  for (const { league, season, slug, dir } of cachedDivisions()) {
    {
      const dataDir = `data-${league}/${season}`;
      const matchupsPath = path.join(dir, 'matchups.json');
      const detailsPath = path.join(dir, 'matchupDetails.json');
      const playersPath = path.join(dir, 'players.json');
      if (!fs.existsSync(matchupsPath) || !fs.existsSync(detailsPath) || !fs.existsSync(playersPath)) continue;
      divisions.push({
        name: `${dataDir}/${slug}`,
        matchups: firstArray(readJson(matchupsPath)),
        detailById: new Map(readJson(detailsPath).map(entry => [entry.matchupId, entry.details])),
        roster: firstArray(readJson(playersPath)),
      });
    }
  }
  return divisions;
}

// The compiler's own rule, condensed: a player's team is the non-sub roster row on
// a team that actually has fixtures.
function homeTeamByPlayer(division) {
  const teamsWithFixtures = new Set(division.matchups.flatMap(m => [m.homeName, m.awayName]).filter(Boolean));
  const byPlayer = {};
  for (const p of division.roster) {
    if (p.isSub || !p.playerId || !p.teamName || !teamsWithFixtures.has(p.teamName)) continue;
    if (!byPlayer[p.playerId]) byPlayer[p.playerId] = p.teamName;
  }
  return byPlayer;
}

test('synthesized player stats reproduce the ones the league reports', () => {
  const divisions = loadDivisions();
  assert.ok(divisions.length, 'no cached division data to check against');

  let rowsChecked = 0;
  const disagreements = {};
  for (const field of APPROXIMATE_FIELDS) disagreements[field] = 0;

  for (const division of divisions) {
    const gameTarget = inferGameTarget(division.detailById);
    const homeTeam = homeTeamByPlayer(division);
    const teamNameById = {};
    for (const m of division.matchups) {
      if (m.homeTeamId) teamNameById[m.homeTeamId] = m.homeName;
      if (m.awayTeamId) teamNameById[m.awayTeamId] = m.awayName;
    }

    for (const matchup of division.matchups) {
      if (!matchup.endResult) continue;
      const details = division.detailById.get(matchup.matchupId);
      if (!details) continue;
      // Reuse the real outcome's game list so the comparison is over the same
      // games the league scored, not a re-litigation of which games count.
      const outcome = deriveProvisionalOutcome(details);
      if (!outcome) continue;

      const synthesized = new Map(
        synthesizeMatchupPlayerStats(outcome, matchup, {
          gameTarget,
          isSubForTeam: (playerId, teamId) => homeTeam[playerId] !== teamNameById[teamId],
        }).map(row => [row.playerId, row]),
      );

      for (const reported of firstArray(details.matchupPlayerStats)) {
        if (!reported.gamesPlayed) continue;
        const row = synthesized.get(reported.playerId);
        if (!row) continue;
        rowsChecked++;

        for (const field of EXACT_FIELDS) {
          assert.equal(
            row[field], reported[field],
            `${division.name} ${matchup.matchupId} player ${reported.playerId}: ${field}`,
          );
        }
        for (const field of APPROXIMATE_FIELDS) {
          const expected = field === 'isSub' ? !!reported[field] : reported[field];
          if (row[field] !== expected) disagreements[field]++;
        }
      }
    }
  }

  assert.ok(rowsChecked >= MIN_ROWS, `only ${rowsChecked} player rows available to check`);
  for (const field of APPROXIMATE_FIELDS) {
    const agreement = 1 - disagreements[field] / rowsChecked;
    assert.ok(
      agreement >= MIN_APPROXIMATE_AGREEMENT,
      `${field} agrees with the league on only ${(agreement * 100).toFixed(2)}% of ${rowsChecked} rows ` +
      `(${disagreements[field]} disagreements) — the league likely changed a convention`,
    );
  }
});
