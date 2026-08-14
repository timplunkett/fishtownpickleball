const fs = require('fs');
const path = require('path');

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

function getPlayerMatch(data) {
  const hits = data.result?.hits || data.result?.content || data.result;
  return Array.isArray(hits) ? hits[0] : null;
}

async function searchPlayer(query, filter = null) {
  const url = 'https://api.dupr.gg/player/v1.0/search';
  const payload = {
    query,
    page: 0,
    pageSize: 10,
    limit: 1,
    sort: { order: 'ASC', parameter: 'RELEVANCE' },
  };
  if (filter) payload.filter = filter;

  try {
    const authHeader = 'Bearer ' + ACCESS_TOKEN;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => ({}));

    if (response.status === 429) return { playerMatch: null, rateLimited: true };
    if (!response.ok || data.status !== 'SUCCESS') {
      return { playerMatch: null, rateLimited: false, error: data.message || data.status || response.statusText };
    }
    return { playerMatch: getPlayerMatch(data), rateLimited: false };
  } catch (err) {
    return { playerMatch: null, rateLimited: false, error: err.message };
  }
}

/**
 * Fetches the doubles DUPR rating for a given DUPR ID.
 */
async function fetchDuprRating(duprId, existingNumericId = null) {
  if (!duprId || duprId.trim() === '') {
    return { rating: null, numericId: existingNumericId ?? null, rateLimited: false };
  }

  const primary = await searchPlayer(duprId, { duprId });
  if (primary.rateLimited) {
    console.warn(`[WARN] Failed lookup for DUPR ID ${duprId}: Request rate exceeded`);
    return { rating: null, numericId: null, rateLimited: true };
  }
  if (primary.playerMatch) {
    const numericId = primary.playerMatch.id ?? existingNumericId ?? null;
    const rating = primary.playerMatch.ratings?.doubles ?? null;
    return { rating, numericId, rateLimited: false };
  }

  if (primary.error) {
    console.warn(`[WARN] Failed lookup for DUPR ID ${duprId}:`, primary.error);
  }

  if (existingNumericId != null) {
    const numericId = Number(existingNumericId);
    console.warn(`[WARN] No player match for DUPR ID ${duprId}; retrying with numeric ID ${existingNumericId}.`);
    const fallback = await searchPlayer(String(existingNumericId), Number.isFinite(numericId) ? { id: numericId } : null);
    if (fallback.rateLimited) {
      console.warn(`[WARN] Failed numeric lookup for DUPR ID ${duprId} (${existingNumericId}): Request rate exceeded`);
      return { rating: null, numericId: null, rateLimited: true };
    }
    if (fallback.playerMatch) {
      const numericId = fallback.playerMatch.id ?? existingNumericId;
      const rating = fallback.playerMatch.ratings?.doubles ?? null;
      return { rating, numericId, rateLimited: false };
    }
    if (fallback.error) {
      console.warn(`[WARN] Failed numeric lookup for DUPR ID ${duprId} (${existingNumericId}):`, fallback.error);
    }
  }

  return { rating: null, numericId: existingNumericId ?? null, rateLimited: false };
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
  fs.writeFileSync(GLOBAL_PLAYERS_FILE, JSON.stringify(players, null, 2), 'utf-8');
  console.log(`Saved global players (${reason}).`);
}

function writeDuprRatingsJs(players) {
  const ratings = {};
  for (const p of players) {
    if (p.playerId && p.duprRating != null && p.duprRating !== 'NR') {
      ratings[p.playerId] = { rating: Number(p.duprRating), numericId: p.duprNumericId ?? null };
    }
  }
  const content = `window.DUPR_RATINGS = ${JSON.stringify(ratings)};`;
  fs.writeFileSync(DUPR_RATINGS_FILE, content, 'utf-8');
  console.log(`Saved dupr-ratings.js (${Object.keys(ratings).length} players with ratings).`);
}

async function run() {
  const bypassCache = process.argv.includes('--bypass-cache');

  console.log('Building global player list from all division files...');
  const globalPlayers = buildGlobalPlayers();
  console.log(`Found ${globalPlayers.length} unique players across all divisions.`);

  const validPlayers = globalPlayers.filter((p) => p.dupr && p.dupr.trim() !== '');
  const duprCache = new Map();

  if (bypassCache) {
    console.log('Cache bypass enabled — all players will be re-fetched from the DUPR API.');
  } else {
    for (const player of validPlayers) {
      if (player.duprRating != null) {
        if (!player.duprNumericId) {
          // Legacy migration: has rating but no numeric ID — do NOT cache so the loop forces a re-fetch
        } else {
          duprCache.set(player.dupr, { rating: player.duprRating, numericId: player.duprNumericId });
        }
      }
    }
  }

  const playersToFetch = bypassCache
    ? validPlayers
    : validPlayers.filter((p) => {
        if (p.duprRating == null) return true;
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
      player.duprRating = cachedRating;
      player.duprNumericId = cachedNumericId;
      delete player.duprLastFetchedFor;
      summary.push({
        Name: fullName,
        'DUPR ID': player.dupr,
        'Numeric ID': cachedNumericId ?? '—',
        'Fetched Rating': cachedRating,
      });
      continue;
    }

    const { rating, numericId, rateLimited } = await fetchDuprRating(player.dupr, player.duprNumericId ?? null);

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
      if (numericId != null) {
        player.duprNumericId = numericId;
      }
      if (rating != null) {
        player.duprRating = rating;
        delete player.duprLastFetchedFor;
      }
      if (numericId != null || rating != null) {
        duprCache.set(player.dupr, { rating, numericId });
      }

      summary.push({
        Name: fullName,
        'DUPR ID': player.dupr,
        'Numeric ID': numericId ?? '—',
        'Fetched Rating': rating !== null ? rating : 'NR',
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
