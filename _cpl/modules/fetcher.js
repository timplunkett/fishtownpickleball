const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const API_BASE = 'https://cplsecureapiproxy.azurewebsites.net/api/CPLSecureApiProxy/local/v0/api';
const CLUBS_URL = `${API_BASE}/clubs`;
const DEFAULT_DIVISION_ID = '3e9b6a58-8823-46d9-8f00-81d53e63f0eb';

function slugForDivision(divisionId) {
  return divisionId.slice(0, 8);
}

function normalizeClubName(clubName) {
  return (clubName || '').replaceAll(' Pickleball Club', '');
}

function stableLineupId(matchupId, lineup) {
  const key = [
    matchupId || '',
    lineup.gameNumber ?? '',
    lineup.matchType || '',
    lineup.homePlayerId1 || '',
    lineup.homePlayerId2 || '',
    lineup.awayPlayerId1 || '',
    lineup.awayPlayerId2 || '',
  ].join('|');
  const hex = crypto.createHash('sha1').update(key).digest('hex').slice(0, 32);
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

function normalizeVolatileLineupIds(detailData) {
  const lineups = detailData?.lineups?.lineups?.$values;
  if (!Array.isArray(lineups)) return detailData;
  const matchupId = detailData?.matchup?.matchupId;
  for (const lineup of lineups) {
    if (!lineup) continue;
    lineup.lineupId = stableLineupId(matchupId || lineup.matchupId, lineup);
  }
  return detailData;
}

async function fetchDivisionData(divisionId) {
  const divBase = `${API_BASE}/divisions/${divisionId}`;
  const [matchupsRes, playersRes] = await Promise.all([
    fetch(`${divBase}/matchups`),
    fetch(`${divBase}/players`),
  ]);
  const matchupsRaw = await matchupsRes.json();
  const players = await playersRes.json();

  const matchupsArray = matchupsRaw.$values || (matchupsRaw.matchups && matchupsRaw.matchups.$values) || matchupsRaw;
  if (!Array.isArray(matchupsArray)) {
    throw new Error(`Matchups data invalid for division ${divisionId}.`);
  }

  const individualDetails = await Promise.all(
    matchupsArray.map(async (matchup) => {
      try {
        const detailRes = await fetch(`${divBase}/matchups/${matchup.matchupId}`);
        const detailData = await detailRes.json();
        return { matchupId: matchup.matchupId, details: normalizeVolatileLineupIds(detailData) };
      } catch (err) {
        console.error(`⚠️ Failed fetching matchup ${matchup.matchupId}:`, err.message);
        return { matchupId: matchup.matchupId, details: null };
      }
    })
  );

  return { matchupsRaw, players, matchupDetails: individualDetails };
}

async function downloadLatestApiData() {
  console.log('--- Phase 1: Fetching Remote API Data ---');

  // Fetch all clubs/divisions to build the division manifest.
  console.log('Fetching clubs/divisions manifest...');
  const clubsRes = await fetch(CLUBS_URL);
  const clubsRaw = await clubsRes.json();
  const clubs = clubsRaw.$values || clubsRaw;

  // Build a flat list of active divisions across all clubs.
  const allDivisions = [];
  for (const club of clubs) {
    const divs = (club.divisions && club.divisions.$values) || club.divisions || [];
    for (const div of divs) {
      if (!div.active) continue;
      allDivisions.push({
        slug: slugForDivision(div.divisionId),
        divisionId: div.divisionId,
        divisionName: div.divisionName.replace(/&amp;/g, '&'),
        clubName: normalizeClubName(club.name),
        clubId: club.clubId,
        isDefault: div.divisionId === DEFAULT_DIVISION_ID,
      });
    }
  }

  // Path resolution up to root directory from _cpl/modules/
  const dataDir = path.join(__dirname, '../data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  fs.writeFileSync(path.join(dataDir, 'divisions.json'), JSON.stringify(allDivisions, null, 2));
  console.log(`✓ divisions.json written (${allDivisions.length} active divisions).`);

  // Fetch data for each division.
  for (const div of allDivisions) {
    console.log(`\nFetching division: ${div.clubName} / ${div.divisionName} (${div.slug})...`);
    try {
      const { matchupsRaw, players, matchupDetails } = await fetchDivisionData(div.divisionId);

      const matchupsArray = matchupsRaw.$values || (matchupsRaw.matchups && matchupsRaw.matchups.$values) || matchupsRaw;
      console.log(`  Found ${matchupsArray.length} matchups.`);

      const divDataDir = path.join(dataDir, div.slug);
      if (!fs.existsSync(divDataDir)) fs.mkdirSync(divDataDir, { recursive: true });

      fs.writeFileSync(path.join(divDataDir, 'matchups.json'), JSON.stringify(matchupsRaw, null, 2));
      fs.writeFileSync(path.join(divDataDir, 'players.json'), JSON.stringify(players, null, 2));
      fs.writeFileSync(path.join(divDataDir, 'matchupDetails.json'), JSON.stringify(matchupDetails, null, 2));

      console.log(`  ✓ Cached to data/${div.slug}/`);
    } catch (err) {
      console.error(`  ⚠️ Failed for ${div.slug}:`, err.message);
    }
  }

  console.log('\n✓ Phase 1 complete.');
}

module.exports = { downloadLatestApiData, slugForDivision };
