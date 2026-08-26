const fs = require('fs');
const path = require('path');
const { getLeagueDataConfig } = require('./division-utils');
const { expandJson } = require('./json-utils');

// Per-division slices of the league-wide DUPR table.
//
// A dashboard page needs DUPR at first paint (the roster column, the sort, and
// the projection fallback), so it can't be deferred — but a division needs only
// its own ~500 players, and the league-wide file carries ~2,900. Loading one
// shard instead costs 16 KB gzipped rather than 91 KB.
//
// The saving is per visit, not in total: a quarter of players appear in more
// than one division, so the 22 shards together gzip to about 1.33x the single
// file they stand in for (121 KB against 91 KB). That trade is worth making
// because almost nobody loads every division, but it does mean the repo carries
// more DUPR bytes than it did, not fewer.
//
// A shard is a subset of the league-wide table, not a second shape for the same
// data: same playerId keys, same values, read through the same
// window.DUPR_RATINGS. That is deliberate. An earlier attempt keyed a second
// copy by display name so the player index could drop its id column; it saved
// bytes and cost a whole extra table in the repo, so it was reverted.
//
// Written by both the compile step and the DUPR refresh, from the same inputs:
// compiling guarantees a shard exists for every division, and refreshing
// ratings updates them without a recompile. A missing or stale shard is not
// fatal — the page falls back to the global file.

// The rating entries for one division's roster, in a stable key order so an
// unchanged roster produces a byte-identical file and doesn't churn diffs.
function buildDuprShard(rosterPlayers, ratings) {
  const shard = {};
  const playerIds = [...new Set(
    (rosterPlayers || []).map((player) => player && player.playerId).filter(Boolean),
  )].sort();
  for (const playerId of playerIds) {
    if (ratings[playerId]) shard[playerId] = ratings[playerId];
  }
  return shard;
}

function shardFileName(slug) {
  return `dupr-${slug}.js`;
}

function readRoster(playersPath) {
  const raw = JSON.parse(fs.readFileSync(playersPath, 'utf8'));
  if (raw && Array.isArray(raw.$values)) return raw.$values;
  return Array.isArray(raw) ? raw : [];
}

// Walks every division's raw roster (players.json, straight from the league
// API) rather than the compiled output, so this stays runnable from the DUPR
// refresh without a compile having happened first.
function writeDuprShards(rootDir, ratings) {
  const dataRoot = path.join(rootDir, '_cpl');
  let written = 0;

  for (const league of ['local', 'travel']) {
    const { dataSubdir, divisionsFile } = getLeagueDataConfig(league);
    const dataDir = path.join(dataRoot, dataSubdir);
    const divisionsPath = path.join(dataDir, divisionsFile);
    if (!fs.existsSync(divisionsPath)) continue;

    const outDir = path.join(rootDir, 'cpl', league);
    if (!fs.existsSync(outDir)) continue;

    for (const division of JSON.parse(fs.readFileSync(divisionsPath, 'utf8'))) {
      const playersPath = path.join(dataDir, division.slug, 'players.json');
      if (!fs.existsSync(playersPath)) continue;
      const shard = buildDuprShard(readRoster(playersPath), ratings);
      fs.writeFileSync(
        path.join(outDir, shardFileName(division.slug)),
        `window.DUPR_RATINGS = ${expandJson(shard)};\n`,
      );
      written++;
    }
  }

  return written;
}

module.exports = { buildDuprShard, shardFileName, writeDuprShards };
