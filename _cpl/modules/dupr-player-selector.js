// Player-level scoping for fetch-dupr.js's `--refresh-mode` and `--season=`
// flags — the DUPR-fetch analogues of run-pipeline.js's division-level `due`
// mode and `--season=` backfill flag (see refresh-selector.js).
//
// Both read only the already-cached per-division JSON (matchups.json,
// matchupDetails.json, players.json) that a prior run-pipeline.js run wrote —
// no network calls, same as selectDueDivisionSlugs(). A DUPR run scoped to
// stale cache just sees fewer/no players; it never fetches league data itself.

const fs = require('fs');
const path = require('path');
const { extractValues, getLeagueDataConfig } = require('./division-utils');
const { currentSeason, resolveLeagueSeasons } = require('./seasons');
const { parseScheduledTime, DEFAULT_TIMEZONE } = require('./refresh-selector');

const LEAGUES = ['local', 'travel'];
const MS_PER_DAY = 86400000;

// A week matches update-dupr.yml's own cron cadence (Monday 07:00 UTC), so
// "since the last scheduled run" and "in the past week" are nearly the same
// thing for that run. They're not made exactly the same thing on purpose:
// there is no persisted "last run" marker to read (the workflow keeps no
// state file), and even if there were, actions/checkout@v5's default shallow
// clone in CI has no git history to derive one from either. A fixed rolling
// window is simpler and just as accurate for the cron, so there's no flag to
// override it — `--refresh-mode` alone decides whether this window applies.
const DEFAULT_RECENT_DAYS = 7;

function readJson(filePath) {
  if (!fs.existsSync(filePath)) return null;
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return null;
  }
}

/**
 * Pure step: playerIds who appear in `matchupDetails` for a matchup in
 * `matchups` whose scheduled local time falls within [cutoffUtc, nowUtc].
 *
 * Only a completed matchup (`endResult` set) carries real matchupPlayerStats
 * (see fetcher.js's slimMatchupDetails) — an upcoming one's stats are all
 * zero and its lineup, even if posted, means nobody has actually played yet
 * — so an incomplete matchup contributes no players here regardless of when
 * it's scheduled.
 */
function recentPlayerIdsFromDivision(matchups, matchupDetails, { cutoffUtc, nowUtc, timezone = DEFAULT_TIMEZONE }) {
  const recentMatchupIds = new Set();
  for (const m of matchups || []) {
    if (!m?.matchupId || !m.endResult || !m.scheduledTime) continue;
    const parsed = parseScheduledTime(m.scheduledTime, timezone);
    if (!parsed) continue;
    if (parsed.utcDate >= cutoffUtc && parsed.utcDate <= nowUtc) recentMatchupIds.add(m.matchupId);
  }
  if (!recentMatchupIds.size) return new Set();

  const playerIds = new Set();
  for (const detail of matchupDetails || []) {
    if (!detail?.matchupId || !recentMatchupIds.has(detail.matchupId)) continue;
    for (const stat of extractValues(detail.details?.matchupPlayerStats)) {
      if (stat?.playerId) playerIds.add(stat.playerId);
    }
  }
  return playerIds;
}

/**
 * Pure step for the `--season=` filter: every playerId listed on a division's
 * cached roster — active or sub, there is no third status (see players.json's
 * `isSub`) — for one season.
 */
function rosterPlayerIdsFromDivision(playersRaw) {
  const playerIds = new Set();
  for (const p of extractValues(playersRaw)) {
    if (p?.playerId) playerIds.add(p.playerId);
  }
  return playerIds;
}

function readDivisionsForCurrentSeason(league) {
  const { dataSubdir, divisionsFile, seasonsFile } = getLeagueDataConfig(league);
  const leagueDir = path.join(__dirname, '..', dataSubdir);
  const seasons = readJson(path.join(leagueDir, seasonsFile));
  const season = Array.isArray(seasons) ? currentSeason(resolveLeagueSeasons(league, seasons)) : null;
  if (!season) return null;

  const dataDir = path.join(leagueDir, season.slug);
  const divisions = readJson(path.join(dataDir, divisionsFile));
  if (!Array.isArray(divisions) || !divisions.length) return null;

  return { dataDir, divisions, season };
}

/**
 * `--refresh-mode`'s player set: everyone credited with at least one game in
 * a completed matchup (regular season or playoff) inside `withinDays` of
 * `now`, across every division of each league's *current* season only — same
 * "current season only" restriction as selectDueDivisionSlugs(), for the same
 * reason: an archived season is frozen and has no new matches coming in.
 */
function selectRecentPlayerIds({ withinDays = DEFAULT_RECENT_DAYS, now = new Date(), timezone = DEFAULT_TIMEZONE } = {}) {
  const nowUtc = now;
  const cutoffUtc = new Date(nowUtc.getTime() - withinDays * MS_PER_DAY);
  const playerIds = new Set();

  for (const league of LEAGUES) {
    const found = readDivisionsForCurrentSeason(league);
    if (!found) continue;

    for (const div of found.divisions) {
      const divDir = path.join(found.dataDir, div.slug);
      const window = { cutoffUtc, nowUtc, timezone };

      const matchups = extractValues(readJson(path.join(divDir, 'matchups.json')));
      const matchupDetails = extractValues(readJson(path.join(divDir, 'matchupDetails.json')));
      for (const id of recentPlayerIdsFromDivision(matchups, matchupDetails, window)) playerIds.add(id);

      const playoffMatchups = extractValues(readJson(path.join(divDir, 'playoffMatchups.json')));
      const playoffMatchupDetails = extractValues(readJson(path.join(divDir, 'playoffMatchupDetails.json')));
      for (const id of recentPlayerIdsFromDivision(playoffMatchups, playoffMatchupDetails, window)) playerIds.add(id);
    }
  }

  return playerIds;
}

/**
 * `--season=<slug>`'s player set: everyone on any division's roster (active
 * or sub) for that one season, in either league — a season slug belongs to
 * exactly one league in practice, but both are checked the same way
 * `unmatchedDivisionSlugs`'s `--season=` check does for run-pipeline.js, since
 * nothing here can tell in advance which league a slug belongs to.
 *
 * `matched` is false when the slug isn't cached for either league (unknown
 * season, or a season this pipeline has never fetched) — the caller's signal
 * to fail loudly instead of silently scoping to zero players.
 */
function selectSeasonRosterPlayerIds(seasonSlug) {
  const playerIds = new Set();
  let matched = false;

  for (const league of LEAGUES) {
    const { dataSubdir, divisionsFile } = getLeagueDataConfig(league);
    const dataDir = path.join(__dirname, '..', dataSubdir, seasonSlug);
    const divisions = readJson(path.join(dataDir, divisionsFile));
    if (!Array.isArray(divisions) || !divisions.length) continue;

    matched = true;
    for (const div of divisions) {
      const playersRaw = readJson(path.join(dataDir, div.slug, 'players.json'));
      for (const id of rosterPlayerIdsFromDivision(playersRaw)) playerIds.add(id);
    }
  }

  return { playerIds, matched };
}

module.exports = {
  DEFAULT_RECENT_DAYS,
  recentPlayerIdsFromDivision,
  rosterPlayerIdsFromDivision,
  selectRecentPlayerIds,
  selectSeasonRosterPlayerIds,
};
