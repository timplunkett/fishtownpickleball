const fs = require('fs');

// The base URL for all your Azure API calls
const baseUrl = 'https://cplsecureapiproxy.azurewebsites.net/api/CPLSecureApiProxy/local/v0/api/divisions/3e9b6a58-8823-46d9-8f00-81d53e63f0eb';

// Derived endpoints
const MATCHUPS_URL = `${baseUrl}/matchups`;
const PLAYERS_URL = `${baseUrl}/players`;

async function getAllSiteData() {
  try {
    console.log('Fetching initial matchups and players list...');

    // 1. Fetch matchups and players in parallel
    const [matchupsRes, playersRes] = await Promise.all([
      fetch(MATCHUPS_URL),
      fetch(PLAYERS_URL)
    ]);

    const matchupsRaw = await matchupsRes.json();
    const players = await playersRes.json();

    // Safely extract the array if the API nests it in $values
    const matchupsArray = matchupsRaw.$values || matchupsRaw;

    if (!Array.isArray(matchupsArray)) {
      throw new Error('Matchups data is not an array. Check your API response structure.');
    }

    console.log(`Found ${matchupsArray.length} matchups. Fetching individual details for each...`);

    // 2. Loop through each matchup to fetch its specific details
    const individualDetails = await Promise.all(
      matchupsArray.map(async (matchup) => {
        try {
          // Constructing the loop URL using the MATCHUPS_URL and matchupId
          const loopUrl = `${MATCHUPS_URL}/${matchup.matchupId}`;

          const detailRes = await fetch(loopUrl);
          const detailData = await detailRes.json();

          // Return an object keyed by matchupId so it's easy to look up in the frontend
          return {
            matchupId: matchup.matchupId,
            details: detailData
          };
        } catch (err) {
          console.error(`Failed fetching details for matchup ${matchup.matchupId}:`, err);
          return { matchupId: matchup.matchupId, details: null }; // Fallback so the script doesn't crash
        }
      })
    );

    // 3. Ensure the Jekyll _data directory exists
    if (!fs.existsSync('_data')) {
      fs.mkdirSync('_data');
    }

    // 4. Save into three separate clean JSON files
    fs.writeFileSync('_data/matchups.json', JSON.stringify(matchupsRaw, null, 2));
    fs.writeFileSync('_data/players.json', JSON.stringify(players, null, 2));
    fs.writeFileSync('_data/matchupDetails.json', JSON.stringify(individualDetails, null, 2));

    console.log('Successfully saved matchups.json, players.json, and matchupDetails.json!');

  } catch (error) {
    console.error('Data pipeline fetch failed:', error);
    process.exit(1);
  }
}

getAllSiteData();
