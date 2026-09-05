const fs = require('fs');
const path = require('path');
const { jsonStringify, expandJson } = require('./modules/json-utils');
const { writeDuprShards } = require('./modules/dupr-outputs');
const { sameDuprId, createWarningLog, formatWarningReport } = require('./modules/dupr-warnings');
const { NR_RATING, isNrRating, isMissingRating, isUnratedDuprValue } = require('./modules/dupr-rating-values');

// --- Configuration ---
const DATA_DIR = path.join(__dirname, 'data');
const GLOBAL_PLAYERS_FILE = path.join(DATA_DIR, 'global_players.json');
const DUPR_RATINGS_FILE = path.join(__dirname, '..', 'cpl', 'dupr-ratings.js');
const REQUEST_DELAY_MS = 800; // Delay between DUPR API calls
const MAX_CONSECUTIVE_429 = 3;

// A dead token, a renamed response field, or a change to the search endpoint all
// present identically: every lookup comes back with no match, each existing
// rating is correctly left alone, the output files end up byte-identical, and the
// workflow reports success. Nothing downstream can tell that apart from "no
// ratings changed this week", so a miss rate above this is treated as a broken
// run rather than as a few unclaimed profiles.
const MAX_MISS_RATE = 0.2;
// Below this many real lookups the rate is noise — one genuinely unlisted player
// out of two is 50%, and must not turn a two-player incremental run red.
const MIN_MISS_RATE_SAMPLE = 10;
// The token is a ~30-day JWT, so a week is enough notice to rotate it before a
// run silently stops updating anything.
const TOKEN_EXPIRY_WARN_DAYS = 7;
const MS_PER_DAY = 86400000;

const ACCESS_TOKEN = process.env.DUPR_ACCESS_TOKEN;

const TOKEN_FIX_HINT = 'Fix: sign in to DUPR, copy a fresh bearer token, and update the DUPR_ACCESS_TOKEN repository secret (and your local .env).';

// Raised instead of being folded into a per-player miss, so it can abort the run
// at the first rejected request rather than after ~3,000 doomed ones.
class DuprAuthError extends Error {
  constructor(status) {
    super(`DUPR API rejected the access token (HTTP ${status}). DUPR_ACCESS_TOKEN is a JWT with a ~30-day lifetime and has most likely expired. ${TOKEN_FIX_HINT}`);
    this.name = 'DuprAuthError';
    this.status = status;
  }
}

/**
 * Reads `exp` out of a JWT payload with no dependencies. Returns null for
 * anything it cannot parse: the check is advisory, so a token shape this does
 * not understand must not stop a run whose token may well be valid.
 */
function decodeJwtExpiry(token) {
  try {
    const payload = String(token).split('.')[1];
    if (!payload) return null;
    const json = Buffer.from(payload.replaceAll('-', '+').replaceAll('_', '/'), 'base64').toString('utf-8');
    const { exp } = JSON.parse(json);
    return typeof exp === 'number' && Number.isFinite(exp) ? exp : null;
  } catch {
    return null;
  }
}

function describeTokenExpiry(token, nowMs = Date.now()) {
  const exp = decodeJwtExpiry(token);
  if (exp == null) return { level: 'unknown', daysLeft: null, message: null };
  const daysLeft = (exp * 1000 - nowMs) / MS_PER_DAY;
  const expiresAt = new Date(exp * 1000).toISOString();
  if (daysLeft <= 0) {
    return {
      level: 'expired',
      daysLeft,
      message: `::error::DUPR_ACCESS_TOKEN expired ${Math.floor(-daysLeft)} day(s) ago (exp ${expiresAt}). ${TOKEN_FIX_HINT}`,
    };
  }
  if (daysLeft <= TOKEN_EXPIRY_WARN_DAYS) {
    return {
      level: 'warn',
      daysLeft,
      message: `::warning::DUPR_ACCESS_TOKEN expires in ${Math.floor(daysLeft)} day(s) (exp ${expiresAt}). ${TOKEN_FIX_HINT}`,
    };
  }
  return { level: 'ok', daysLeft, message: null };
}

/**
 * `attempted` counts only lookups that actually reached the API — cached and
 * skipped players are excluded, or a run that skips everything would divide by
 * a denominator that says nothing about whether the API still works.
 */
function exceedsMissRateFloor(attempted, missed) {
  if (!attempted || attempted < MIN_MISS_RATE_SAMPLE) return false;
  return missed / attempted > MAX_MISS_RATE;
}

function formatMissRateError(attempted, missed) {
  const pct = ((missed / attempted) * 100).toFixed(1);
  return `::error::${missed} of ${attempted} DUPR lookups (${pct}%) found no match, above the ${MAX_MISS_RATE * 100}% ceiling. `
    + 'Existing ratings were preserved, so the output files may look unchanged. Check that DUPR_ACCESS_TOKEN is valid and that the search/profile responses still carry the expected fields.';
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Logged live, exactly as before, and replayed after the summary table.
const { messages: warnings, warn } = createWarningLog();

function printWarningReport() {
  const report = formatWarningReport(warnings);
  if (report) console.warn(`\n${report}`);
}

function getPlayerMatch(data) {
  const hits = data.result?.hits || data.result?.content || data.result;
  return Array.isArray(hits) ? hits[0] : null;
}

async function duprRequest(url, options = {}) {
  let response;
  try {
    response = await fetch(url, {
      ...options,
      headers: {
        'Authorization': 'Bearer ' + ACCESS_TOKEN,
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    // Transport-level failure only: a single flaky request stays a per-player miss.
    return { data: null, rateLimited: false, error: err.message };
  }

  const data = await response.json().catch(() => ({}));

  // A rejected token is not this player's problem — it is every remaining
  // player's problem. Returning a generic miss here is what let an expired token
  // freeze the ratings indefinitely behind a green workflow, so this throws.
  if (response.status === 401 || response.status === 403) {
    throw new DuprAuthError(response.status);
  }
  if (response.status === 429) return { data: null, rateLimited: true };
  if (!response.ok || data.status !== 'SUCCESS') {
    return { data: null, rateLimited: false, error: data.message || data.status || response.statusText };
  }
  return { data, rateLimited: false };
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
      warn(`[WARN] Failed direct lookup for DUPR ID ${duprId} (${existingNumericId}): Request rate exceeded`);
      return RATE_LIMITED;
    }
    if (direct.playerMatch) {
      const match = direct.playerMatch;
      // Case alone is not a mismatch — see sameDuprId().
      if (match.duprId && !sameDuprId(match.duprId, duprId)) {
        warn(`[WARN] Profile ${existingNumericId} reports DUPR ID ${match.duprId}, expected ${duprId} — likely a merged account.`);
      }
      return resolveMatch(match, existingNumericId);
    }
    if (direct.error) {
      warn(`[WARN] Failed direct lookup for DUPR ID ${duprId} (${existingNumericId}):`, direct.error);
    }
    warn(`[WARN] Profile ${existingNumericId} did not resolve; falling back to search for DUPR ID ${duprId}.`);
  }

  const search = await searchPlayer(duprId, { duprId });
  if (search.rateLimited) {
    warn(`[WARN] Failed lookup for DUPR ID ${duprId}: Request rate exceeded`);
    return RATE_LIMITED;
  }
  if (search.playerMatch) {
    return resolveMatch(search.playerMatch, existingNumericId);
  }
  if (search.error) {
    warn(`[WARN] Failed lookup for DUPR ID ${duprId}:`, search.error);
  } else if (existingNumericId == null) {
    // Zero-hit SUCCESS: either no such DUPR ID, or an unclaimed (INACTIVE)
    // profile, which the search index omits. Without a numeric ID to read
    // directly, the two are indistinguishable from here.
    warn(`[WARN] No search match for DUPR ID ${duprId}; no numeric ID on file to read directly.`);
  } else {
    warn(`[WARN] No search match for DUPR ID ${duprId} either.`);
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

/**
 * Whether a player belongs in dupr-ratings.js at all. A manually-flagged
 * 'missing' DUPR ID (see dupr-rating-values.js) has no real profile — DUPR
 * has never confirmed anything about it. Writing it out as 'NR' would show it
 * exactly like a real, findable account DUPR confirms just has no rating yet,
 * which it is not, so it is excluded entirely here, the same as a still-null
 * duprRating.
 */
function hasRatableDuprValue(player) {
  return Boolean(player.playerId) && player.duprRating != null && !isMissingRating(player.duprRating);
}

/**
 * Maps a stored duprRating to what dupr-ratings.js should show, for a player
 * hasRatableDuprValue() has already let through. Defensive rather than load-
 * bearing: 'missing' is filtered out before this runs, but it must never
 * reach Number() (which would silently write NaN into the ratings table), so
 * it collapses to 'NR' here too if it ever does.
 */
function resolveOutputRating(duprRating) {
  return isUnratedDuprValue(duprRating) ? NR_RATING : Number(duprRating);
}

function writeDuprRatingsJs(players) {
  const byPlayerId = {};
  for (const p of players) {
    if (hasRatableDuprValue(p)) {
      const rating = resolveOutputRating(p.duprRating);
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

/**
 * Decides whether a player needs an API lookup this run. Exported so the
 * decision — including how the manual 'missing' marker is treated — can be
 * tested without exercising the whole run() loop.
 *
 * 'missing' is parsed exactly like 'NR': skipped on a standard run, but still
 * re-checked under --bypass-cache (every player) or --bypass-cache-nr
 * (specifically the unrated ones), in case a flagged profile reappears.
 */
function shouldFetchPlayer(player, { bypassCache = false, bypassNrCache = false } = {}) {
  if (bypassCache) return true;
  if (player.duprRating == null) return true;
  if (isUnratedDuprValue(player.duprRating)) return bypassNrCache;
  if (player.duprNumericId) return false;
  // Legacy: has a rating but no numeric ID yet — re-fetch to capture one.
  return true;
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
    console.log('NR cache bypass enabled — players with current "NR" or "missing" ratings will be re-fetched from the DUPR API.');
  } else {
    for (const player of validPlayers) {
      if (player.duprRating != null) {
        if (!player.duprNumericId && !isUnratedDuprValue(player.duprRating)) {
          // Legacy migration: has rating but no numeric ID — do NOT cache so the loop forces a re-fetch
        } else {
          duprCache.set(player.dupr, { rating: player.duprRating, numericId: player.duprNumericId ?? null, provisional: player.duprProvisional ?? false });
        }
      }
    }
  }

  const playersToFetch = validPlayers.filter((p) => shouldFetchPlayer(p, { bypassCache, bypassNrCache }));

  console.log(`Skipping ${validPlayers.length - playersToFetch.length} cached player lookups.`);
  console.log(`Processing ${playersToFetch.length} new/changed DUPR IDs with ${REQUEST_DELAY_MS}ms pacing...\n`);

  const summary = [];
  let consecutive429s = 0;
  let shouldStop = false;
  let attemptedLookups = 0;
  let missedLookups = 0;

  const persistAndExit = (signal) => {
    warn(`\n[WARN] Received ${signal}; saving successful DUPR lookups before exit...`);
    saveGlobalPlayers(globalPlayers, `interrupted by ${signal}`);
    writeDuprRatingsJs(globalPlayers);
    // An interrupted run has no summary table, so this is the only replay it gets.
    printWarningReport();
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
    // Counted here, past the cache `continue` above, so the denominator holds
    // only lookups that actually reached the API.
    attemptedLookups += 1;
    if (!found) missedLookups += 1;

    if (rateLimited) {
      consecutive429s += 1;
      summary.push({
        Name: fullName,
        'DUPR ID': player.dupr,
        'Numeric ID': '—',
        'Fetched Rating': 'NR (429)',
      });
      if (consecutive429s >= MAX_CONSECUTIVE_429) {
        warn(`\n[WARN] Hit ${MAX_CONSECUTIVE_429} consecutive 429 responses; stopping early.`);
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
  printWarningReport();

  if (attemptedLookups) {
    console.log(`\n${missedLookups} of ${attemptedLookups} API lookups found no match.`);
  }
  if (exceedsMissRateFloor(attemptedLookups, missedLookups)) {
    console.error(formatMissRateError(attemptedLookups, missedLookups));
    process.exitCode = 1;
  }
}

if (require.main === module) {
  if (!ACCESS_TOKEN) {
    console.error('[ERROR] DUPR_ACCESS_TOKEN environment variable is not set.');
    process.exit(1);
  }

  const expiry = describeTokenExpiry(ACCESS_TOKEN);
  if (expiry.message) {
    if (expiry.level === 'expired') {
      console.error(expiry.message);
      // No point spending ~40 minutes of paced requests to learn this.
      process.exit(1);
    }
    console.warn(expiry.message);
  }

  run().catch((err) => {
    if (err instanceof DuprAuthError) {
      console.error(`::error::${err.message}`);
    } else {
      console.error(err);
    }
    process.exit(1);
  });
}

// Exported for tests; requiring this file must not start a run, hence the guard above.
module.exports = {
  MAX_MISS_RATE,
  MIN_MISS_RATE_SAMPLE,
  TOKEN_EXPIRY_WARN_DAYS,
  decodeJwtExpiry,
  describeTokenExpiry,
  exceedsMissRateFloor,
  formatMissRateError,
  shouldFetchPlayer,
  hasRatableDuprValue,
  resolveOutputRating,
};
