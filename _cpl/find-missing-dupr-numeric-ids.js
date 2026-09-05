const fs = require('fs');
const path = require('path');
const { eachLeagueSeason, seasonCacheDir } = require('./modules/catalog');
const { compareSeasons } = require('./modules/seasons');

/**
 * playerId -> Map(`${league}/${season.slug}` -> { league, season }), built by
 * walking every division's players.json for every season of every league —
 * current and archived alike, the same source buildPlayerIndex in
 * compiler.js reads for the finder. Unlike that function this does no
 * roster canonicalization: a player showing up on more than one team in the
 * same season still collapses to one entry, which is all a "what seasons has
 * this person played" report needs.
 */
function buildSeasonsByPlayerId() {
  const seasonsByPlayerId = new Map();
  for (const { league, season, divisions } of eachLeagueSeason()) {
    const dataDir = seasonCacheDir(league, season.slug);
    for (const div of divisions) {
      const playersPath = path.join(dataDir, div.slug, 'players.json');
      if (!fs.existsSync(playersPath)) continue;
      const raw = JSON.parse(fs.readFileSync(playersPath, 'utf8'));
      const roster = (raw && raw.$values) ? raw.$values : (Array.isArray(raw) ? raw : []);
      for (const p of roster) {
        if (!p.playerId) continue;
        let seasons = seasonsByPlayerId.get(p.playerId);
        if (!seasons) {
          seasons = new Map();
          seasonsByPlayerId.set(p.playerId, seasons);
        }
        seasons.set(`${league}/${season.slug}`, { league, season });
      }
    }
  }
  return seasonsByPlayerId;
}

/**
 * Renders one player's seasons newest-first, e.g. "Travel Fall 2026, Local
 * Summer 2026" — the first entry is also the answer to "most recent season",
 * so one column serves both. Empty for a player this run found no roster
 * entry for at all (shouldn't happen, since global_players.json is itself
 * built from these rosters, but a report script degrading to a blank cell
 * beats it throwing on a stale global_players.json).
 */
function formatSeasons(seasons) {
  if (!seasons || !seasons.size) return '';
  return [...seasons.values()]
    .sort((a, b) => compareSeasons(b.season, a.season))
    .map(({ league, season }) => `${league.charAt(0).toUpperCase()}${league.slice(1)} ${season.label}`)
    .join(', ');
}

function run() {
  const globalPlayersPath = path.join(__dirname, 'data', 'global_players.json');
  const players = JSON.parse(fs.readFileSync(globalPlayersPath, 'utf-8'));

  // Deliberately unfiltered by duprRating: a 'missing' player (see
  // dupr-rating-values.js) is exactly the kind of confirmed-bad DUPR ID this
  // report exists to surface, alongside the ones nobody has looked at yet.
  const missingNumericIds = players.filter(
    (player) => player.dupr && player.dupr.trim() !== '' && player.duprNumericId == null
  );

  console.log(`Found ${missingNumericIds.length} players with DUPR ID but missing duprNumericId.`);

  if (missingNumericIds.length === 0) return;

  const seasonsByPlayerId = buildSeasonsByPlayerId();
  const rows = missingNumericIds.map((player) => ({
    firstName: player.firstName,
    lastName: player.lastName,
    dupr: player.dupr,
    duprRating: player.duprRating,
    seasons: formatSeasons(player.playerId ? seasonsByPlayerId.get(player.playerId) : null),
    playerId: player.playerId,
  }));

  console.table(rows);
}

// Exported for tests; requiring this file must not run the report.
if (require.main === module) {
  run();
}

module.exports = { buildSeasonsByPlayerId, formatSeasons };
