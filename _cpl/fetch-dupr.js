const fs = require('fs');
const path = require('path');

// --- Configuration ---
const DATA_DIR = path.join(__dirname, 'data');
const GLOBAL_PLAYERS_FILE = path.join(DATA_DIR, 'global_players.json');
const BATCH_SIZE = 5;       // Number of concurrent API requests per batch
const BATCH_DELAY_MS = 300; // Delay in milliseconds between batches to prevent rate limits

const ACCESS_TOKEN = process.env.DUPR_ACCESS_TOKEN;
if (!ACCESS_TOKEN) {
  console.error('[ERROR] DUPR_ACCESS_TOKEN environment variable is not set.');
  process.exit(1);
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Fetches the doubles DUPR rating for a given DUPR ID.
 */
async function fetchDuprRating(duprId) {
  if (!duprId || duprId.trim() === '') return null;

  const url = 'https://api.dupr.gg/player/v1.0/search';
  const payload = {
    query: duprId,
    filter: { duprId },
    page: 0,
    pageSize: 10,
    limit: 1,
    sort: { order: 'ASC', parameter: 'RELEVANCE' },
  };

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

    const data = await response.json();

    if (response.ok && data.status === 'SUCCESS') {
      const hits = data.result?.hits || data.result?.content || data.result;
      const playerMatch = Array.isArray(hits) ? hits[0] : null;
      if (playerMatch?.ratings?.doubles) {
        return playerMatch.ratings.doubles;
      }
    } else {
      console.warn(`[WARN] Failed lookup for DUPR ID ${duprId}:`, data.message || data.status);
    }
  } catch (err) {
    console.error(`[ERROR] Network error for DUPR ID ${duprId}:`, err.message);
  }

  return null;
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

async function run() {
  console.log('Building global player list from all division files...');
  const globalPlayers = buildGlobalPlayers();
  console.log(`Found ${globalPlayers.length} unique players across all divisions.`);

  const validPlayers = globalPlayers.filter((p) => p.dupr && p.dupr.trim() !== '');
  console.log(`Processing ${validPlayers.length} players with DUPR IDs in batches of ${BATCH_SIZE}...\n`);

  const summary = [];

  for (let i = 0; i < validPlayers.length; i += BATCH_SIZE) {
    const chunk = validPlayers.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(validPlayers.length / BATCH_SIZE);
    console.log(`Processing batch ${batchNum} of ${totalBatches}...`);

    await Promise.all(chunk.map(async (player) => {
      const fullName = `${player.firstName} ${player.lastName}`.trim();
      const rating = await fetchDuprRating(player.dupr);
      player.duprRating = rating;

      summary.push({
        Name: fullName,
        'DUPR ID': player.dupr,
        'Fetched Rating': rating !== null ? rating : 'NR',
      });
    }));

    if (i + BATCH_SIZE < validPlayers.length) {
      await sleep(BATCH_DELAY_MS);
    }
  }

  console.log(`\nSaving global players to: ${GLOBAL_PLAYERS_FILE}`);
  fs.writeFileSync(GLOBAL_PLAYERS_FILE, JSON.stringify(globalPlayers, null, 2), 'utf-8');

  console.log('\nProcess complete!\n');
  console.table(summary);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
