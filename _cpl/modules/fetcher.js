const fs = require('fs');
const path = require('path');

const baseUrl = 'https://cplsecureapiproxy.azurewebsites.net/api/CPLSecureApiProxy/local/v0/api/divisions/3e9b6a58-8823-46d9-8f00-81d53e63f0eb';
const MATCHUPS_URL = `${baseUrl}/matchups`;
const PLAYERS_URL = `${baseUrl}/players`;

async function downloadLatestApiData() {
  console.log('--- Phase 1: Fetching Remote API Data ---');
  console.log('Fetching initial matchups and players list...');

  const [matchupsRes, playersRes] = await Promise.all([
    fetch(MATCHUPS_URL),
    fetch(PLAYERS_URL)
  ]);

  const matchupsRaw = await matchupsRes.json();
  const players = await playersRes.json();

  // Handle standard array normalization or .NET $values wrapper unpacking
  const matchupsArray = matchupsRaw.$values || (matchupsRaw.matchups && matchupsRaw.matchups.$values) || matchupsRaw;

  if (!Array.isArray(matchupsArray)) {
    throw new Error('Matchups data layout is invalid. Expected an array structure.');
  }

  console.log(`Found ${matchupsArray.length} scheduled matchups. Fetching individual details...`);

  // Map simultaneously through completed or targeted matchups
  const individualDetails = await Promise.all(
    matchupsArray.map(async (matchup) => {
      try {
        const loopUrl = `${MATCHUPS_URL}/${matchup.matchupId}`;
        const detailRes = await fetch(loopUrl);
        const detailData = await detailRes.json();

        return {
          matchupId: matchup.matchupId,
          details: detailData
        };
      } catch (err) {
        console.error(`⚠️ Failed fetching details for matchup ID ${matchup.matchupId}:`, err.message);
        return { matchupId: matchup.matchupId, details: null };
      }
    })
  );

  // Path resolution up to root directory from cpl/modules/ folder
  const dataDir = path.join(__dirname, '../data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  fs.writeFileSync(path.join(dataDir, 'matchups.json'), JSON.stringify(matchupsRaw, null, 2));
  fs.writeFileSync(path.join(dataDir, 'players.json'), JSON.stringify(players, null, 2));
  fs.writeFileSync(path.join(dataDir, 'matchupDetails.json'), JSON.stringify(individualDetails, null, 2));

  console.log('✓ Successfully cached matchups.json, players.json, and matchupDetails.json.');
}

module.exports = { downloadLatestApiData };
