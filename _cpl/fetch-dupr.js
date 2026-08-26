const fs = require('fs');
const path = require('path');
const { jsonStringify, expandJson } = require('./modules/json-utils');
const { writeDuprShards } = require('./modules/dupr-outputs');

// --- Configuration ---
const DATA_DIR = path.join(__dirname, 'data');
const GLOBAL_PLAYERS_FILE = path.join(DATA_DIR, 'global_players.json');
const DUPR_RATINGS_FILE = path.join(__dirname, '..', 'cpl', 'dupr-ratings.js');
const REQUEST_DELAY_MS = 800; // Delay between DUPR API calls
const MAX_CONSECUTIVE_429 = 3;

const ACCESS_TOKEN = process.env.DUPR_ACCESS_TOKEN;

if (!ACCESS_TOKEN) {
  console.error('[ERROR] DUPR_ACCESS_TOKEN environment variable is not set.');
  process.exit(1);
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function isNrRating(value) {
  return typeof value === 'string' && value.trim().toUpperCase() === 'NR';
}

function getPlayerMatch(data) {
  const hits = data.result?.hits || data.result?.content || data.result;
  return Array.isArray(hits) ? hits[0] : null;
}

async function duprRequest(url, options = {}) {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Authorization': 'Bearer ' + ACCESS_TOKEN,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json().catch(() => ({}));

    if (response.status === 429) return { data: null, rateLimited: true };
    if (!response.ok || data.status !== 'SUCCESS') {
      return { data: null, rateLimited: false, error: data.message || data.status || response.statusText };
    }
    return { data, rateLimited: false };
  } catch (err) {
    return { data: null, rateLimited: false, error: err.message };
  }
}

/**
 * Searches the DUPR player index. Note: the index only contains players whose
 * account status is ACTIVE. Unclaimed / invitation-only profiles are absent from
 * it entirely, so a zero-hit SUCCESS response does not mean the player is unknown
 * to DUPR — see getPlayerByNumericId().
 */
async function searchPlayer(query, filter = null) {
  const payload = {
    query,
    page: 0,
    pageSize: 10,
    limit: 1,
    sort: { order: 'ASC', parameter: 'RELEVANCE' },
  };
  // The endpoint rejects a payload with no filter (HTTP 400).
  if (filter) payload.filter = filter;

  const { data, rateLimited, error } = await duprRequest('https://api.dupr.gg/player/v1.0/search', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
  if (rateLimited) return { playerMatch: null, rateLimited: true };
  if (!data) return { playerMatch: null, rateLimited: false, error };
  return { playerMatch: getPlayerMatch(data), rateLimited: false };
}

/**
 * Reads a player profile directly by numeric ID — the same lookup the DUPR
 * dashboard uses. Unlike search, this resolves INACTIVE / unclaimed profiles.
 */
async function getPlayerByNumericId(numericId) {
  const { data, rateLimited, error } = await duprRequest(
    `https://api.dupr.gg/player/v1.0/${numericId}`,
    { method: 'GET' },
  );
  if (rateLimited) return { playerMatch: null, rateLimited: true };
  if (!data) return { playerMatch: null, rateLimited: false, error };
  const result = data.result;
  const playerMatch = result && typeof result === 'object' && !Array.isArray(result) ? result : null;
  return { playerMatch, rateLimited: false };
}

/**
 * Fetches the doubles DUPR rating for a given DUPR ID.
 */
function extractRating(playerMatch) {
  const confirmedRaw = playerMatch.ratings?.doubles ?? null;
  const confirmed = isNrRating(confirmedRaw)
    ? null
    : confirmedRaw;
  const provisional = playerMatch.ratings?.provisionalRatings?.doublesRating ?? null;
  const rating = confirmed ?? provisional;
  return { rating, provisional: rating != null && confirmed == null };
}

const MISS = (numericId = null) => ({ rating: null, provisional: false, numericId, rateLimited: false, found: false });
const RATE_LIMITED = { rating: null, provisional: false, numericId: null, rateLimited: true, found: false };

function resolveMatch(playerMatch, fallbackNumericId) {
  const { rating, provisional } = extractRating(playerMatch);
  return {
    rating,
    provisional,
    numericId: playerMatch.id ?? fallbackNumericId ?? null,
    rateLimited: false,
    found: true,
  };
}

/**
 * Resolves a player's doubles rating.
 *
 * A known numeric ID is read directly, which is one request and — unlike the
 * search index — keeps working if the player's account goes INACTIVE. Search is
 * used only to discover a numeric ID we don't have yet, or to recover when a
 * stored numeric ID no longer resolves.
 */
async function fetchDuprRating(duprId, existingNumericId = null) {
  if (!duprId || duprId.trim() === '') {
    return MISS(existingNumericId ?? null);
  }

  if (existingNumericId != null) {
    const direct = await getPlayerByNumericId(existingNumericId);
    if (direct.rateLimited) {
      console.warn(`[WARN] Failed direct lookup for DUPR ID ${duprId} (${existingNumericId}): Request rate exceeded`);
      return RATE_LIMITED;
    }
    if (direct.playerMatch) {
      const match = direct.playerMatch;
      if (match.duprId && match.duprId !== duprId) {
        console.warn(`[WARN] Profile ${existingNumericId} reports DUPR ID ${match.duprId}, expected ${duprId} — likely a merged account.`);
      }
      return resolveMatch(match, existingNumericId);
    }
    if (direct.error) {
      console.warn(`[WARN] Failed direct lookup for DUPR ID ${duprId} (${existingNumericId}):`, direct.error);
    }
    console.warn(`[WARN] Profile ${existingNumericId} did not resolve; falling back to search for DUPR ID ${duprId}.`);
  }

  const search = await searchPlayer(duprId, { duprId });
  if (search.rateLimited) {
    console.warn(`[WARN] Failed lookup for DUPR ID ${duprId}: Request rate exceeded`);
    return RATE_LIMITED;
  }
  if (search.playerMatch) {
    return resolveMatch(search.playerMatch, existingNumericId);
  }
  if (search.error) {
    console.warn(`[WARN] Failed lookup for DUPR ID ${duprId}:`, search.error);
  } else if (existingNumericId == null) {
    // Zero-hit SUCCESS: either no such DUPR ID, or an unclaimed (INACTIVE)
    // profile, which the search index omits. Without a numeric ID to read
    // directly, the two are indistinguishable from here.
    console.warn(`[WARN] No search match for DUPR ID ${duprId}; no numeric ID on file to read directly.`);
  } else {
    console.warn(`[WARN] No search match for DUPR ID ${duprId} either.`);
  }

  return MISS(existingNumericId ?? null);
}

/**
 * Reads global_players.json (built by fetcher.js) and returns the player list.
 * Any existing duprRating values are preserved.
 */
function buildGlobalPlayers() {
  if (!fs.existsSync(GLOBAL_PLAYERS_FILE)) {
    throw new Error(`global_players.json not found at ${GLOBAL_PLAYERS_FILE} — run the fetcher first.`);
  }
  return JSON.parse(fs.readFileSync(GLOBAL_PLAYERS_FILE, 'utf-8'));
}

function saveGlobalPlayers(players, reason = 'progress') {
  fs.writeFileSync(GLOBAL_PLAYERS_FILE, jsonStringify(players), 'utf-8');
  console.log(`Saved global players (${reason}).`);
}

function writeDuprRatingsJs(players) {
  const byPlayerId = {};
  for (const p of players) {
    if (p.playerId && p.duprRating != null) {
      let rating = p.duprRating === 'NR' ? p.duprRating : Number(p.duprRating);
      byPlayerId[p.playerId] = { rating: rating, numericId: p.duprNumericId ?? null, provisional: p.duprProvisional ?? false };
    }
  }
  // Sorted by player id, so the committed file depends only on the ratings and
  // not on the order global_players.json happens to be in. Without this, an
  // upstream reshuffle rewrites every line and buries the real change.
  const ratings = {};
  for (const playerId of Object.keys(byPlayerId).sort()) ratings[playerId] = byPlayerId[playerId];
  const content = `window.DUPR_RATINGS = ${expandJson(ratings)};\n`;
  fs.writeFileSync(DUPR_RATINGS_FILE, content, 'utf-8');
  console.log(`Saved dupr-ratings.js (${Object.keys(ratings).length} players with ratings).`);

  // The league-wide table above serves the finder and the DUPR audit page, and
  // stands in for a missing shard. Dashboard pages load only their own
  // division's slice of it, so refresh those here too — otherwise a rating
  // update would not reach a dashboard until the next compile.
  const shards = writeDuprShards(path.join(__dirname, '..'), ratings);
  console.log(`Saved ${shards} per-division DUPR shards.`);
}

async function run() {
  const bypassCache = process.argv.includes('--bypass-cache');
  const bypassNrCache = process.argv.includes('--bypass-cache-nr');

  console.log('Building global player list from all division files...');
  const globalPlayers = buildGlobalPlayers();
  console.log(`Found ${globalPlayers.length} unique players across all divisions.`);

  const validPlayers = globalPlayers.filter((p) => p.dupr && p.dupr.trim() !== '');
  const duprCache = new Map();

  if (bypassCache) {
    console.log('Cache bypass enabled — all players will be re-fetched from the DUPR API.');
  } else if (bypassNrCache) {
    console.log('NR cache bypass enabled — players with current "NR" ratings will be re-fetched from the DUPR API.');
  } else {
    for (const player of validPlayers) {
      if (player.duprRating != null) {
        if (!player.duprNumericId && !isNrRating(player.duprRating)) {
          // Legacy migration: has rating but no numeric ID — do NOT cache so the loop forces a re-fetch
        } else {
          duprCache.set(player.dupr, { rating: player.duprRating, numericId: player.duprNumericId ?? null, provisional: player.duprProvisional ?? false });
        }
      }
    }
  }

  const playersToFetch = bypassCache
    ? validPlayers
    : validPlayers.filter((p) => {
        if (p.duprRating == null) return true;
        if (isNrRating(p.duprRating)) return bypassNrCache;
        if (p.duprNumericId) return false;
        // Legacy: has rating but no numeric ID yet — re-fetch to capture numeric ID
        return true;
      });

  console.log(`Skipping ${validPlayers.length - playersToFetch.length} cached player lookups.`);
  console.log(`Processing ${playersToFetch.length} new/changed DUPR IDs with ${REQUEST_DELAY_MS}ms pacing...\n`);

  const summary = [];
  let consecutive429s = 0;
  let shouldStop = false;

  const persistAndExit = (signal) => {
    console.warn(`\n[WARN] Received ${signal}; saving successful DUPR lookups before exit...`);
    saveGlobalPlayers(globalPlayers, `interrupted by ${signal}`);
    writeDuprRatingsJs(globalPlayers);
    process.exit(130);
  };
  process.once('SIGINT', persistAndExit);
  process.once('SIGTERM', persistAndExit);

  for (let i = 0; i < playersToFetch.length; i += 1) {
    const player = playersToFetch[i];
    const fullName = `${player.firstName} ${player.lastName}`.trim();
    console.log(`Processing ${i + 1} of ${playersToFetch.length}: ${fullName} (${player.dupr})`);

    if (duprCache.has(player.dupr)) {
      const cached = duprCache.get(player.dupr);
      const cachedRating = typeof cached === 'object' ? cached.rating : cached;
      const cachedNumericId = typeof cached === 'object' ? cached.numericId : null;
      const cachedProvisional = typeof cached === 'object' ? (cached.provisional ?? false) : false;
      player.duprRating = cachedRating;
      player.duprNumericId = cachedNumericId;
      player.duprProvisional = cachedProvisional;
      delete player.duprLastFetchedFor;
      summary.push({
        Name: fullName,
        'DUPR ID': player.dupr,
        'Numeric ID': cachedNumericId ?? '—',
        'Fetched Rating': cachedRating,
      });
      continue;
    }

    const { rating, provisional, numericId, rateLimited, found } = await fetchDuprRating(player.dupr, player.duprNumericId ?? null);

    if (rateLimited) {
      consecutive429s += 1;
      summary.push({
        Name: fullName,
        'DUPR ID': player.dupr,
        'Numeric ID': '—',
        'Fetched Rating': 'NR (429)',
      });
      if (consecutive429s >= MAX_CONSECUTIVE_429) {
        console.warn(`\n[WARN] Hit ${MAX_CONSECUTIVE_429} consecutive 429 responses; stopping early.`);
        shouldStop = true;
        break;
      }
    } else {
      consecutive429s = 0;
      // A player who exists in DUPR but has no confirmed or provisional doubles
      // rating is recorded as 'NR' so the cache can skip them on the next run.
      // A failed lookup (found === false) stays null so it is retried.
      const resolvedRating = rating != null ? rating : (found ? 'NR' : null);
      const resolvedProvisional = rating != null ? provisional : false;

      if (numericId != null) {
        player.duprNumericId = numericId;
      }
      if (resolvedRating != null) {
        player.duprRating = resolvedRating;
        player.duprProvisional = resolvedProvisional;
        delete player.duprLastFetchedFor;
      }
      if (numericId != null || resolvedRating != null) {
        duprCache.set(player.dupr, { rating: resolvedRating, numericId, provisional: resolvedProvisional });
      }

      summary.push({
        Name: fullName,
        'DUPR ID': player.dupr,
        'Numeric ID': numericId ?? '—',
        'Fetched Rating': resolvedRating != null ? resolvedRating : 'not found',
      });
    }

    if (i + 1 < playersToFetch.length) {
      await sleep(REQUEST_DELAY_MS);
    }
  }

  console.log(`\nSaving global players to: ${GLOBAL_PLAYERS_FILE}`);
  saveGlobalPlayers(globalPlayers, shouldStop ? 'early stop' : 'complete run');
  writeDuprRatingsJs(globalPlayers);
  process.removeListener('SIGINT', persistAndExit);
  process.removeListener('SIGTERM', persistAndExit);

  console.log('\nProcess complete!\n');
  console.table(summary);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
