const fs = require('fs');
const path = require('path');

const LOCAL_API_BASE = 'https://cplsecureapiproxy.azurewebsites.net/api/CPLSecureApiProxy/local/v0/api';
const TRAVEL_API_BASE = 'https://cplsecureapiproxy.azurewebsites.net/api/CPLSecureApiProxy/v0/api';
const LOCAL_DEFAULT_DIVISION_ID = '3e9b6a58-8823-46d9-8f00-81d53e63f0eb';
const TRAVEL_REGION_ID = 'ffc383dc-fd43-4afa-9310-920c4b0545f2';
const TRAVEL_DEFAULT_DIVISION_ID = 'b7ca04e4-a9b8-4c10-8054-e58329d8dc49';

function slugForDivision(divisionId) {
  return divisionId.slice(0, 8);
}

function normalizeClubName(clubName) {
  return (clubName || '').replaceAll(' Pickleball Club', '');
}

const MATCHUP_KEEP = new Set([
  'matchupId', 'weekNumber', 'homeTeamId', 'awayTeamId', 'homePoints', 'awayPoints',
  'endResult', 'scheduledTime', 'homeName', 'awayName',
]);

const PLAYER_KEEP = new Set([
  'playerId', 'firstName', 'lastName', 'gender', 'dupr', 'isCaptain', 'isSub', 'teamId', 'teamName',
  'wins', 'losses', 'gamesPlayed', 'pointsWon', 'totalPointsAgainst', 'clutchWins', 'clutchLosses',
  'mixedWins', 'mixedLosses', 'genderWins', 'genderLosses', 'ranking',
]);

const MATCHUP_DETAIL_MATCHUP_KEEP = new Set([
  'matchupId', 'weekNumber', 'homeTeamId', 'awayTeamId',
  'homePoints', 'awayPoints', 'endResult', 'homeName', 'awayName', 'weekNumber',
]);

// Per-matchup player stat entries: only matchup-specific stats + identity keys.
// Static profile fields (firstName, lastName, gender) are omitted here because
// they never change and are already stored in players.json.
const MATCHUP_PLAYER_STATS_KEEP = new Set([
  'playerId', 'isSub', 'teamId',
  'gamesPlayed', 'wins', 'losses', 'pointsWon', 'totalPointsAgainst',
  'clutchWins', 'clutchLosses', 'mixedWins', 'mixedLosses', 'genderWins', 'genderLosses',
  'ranking',
]);

const LINEUP_KEEP = new Set([
  'homePlayerId1', 'homePlayerId2', 'awayPlayerId1', 'awayPlayerId2',
  'homeScore', 'awayScore', 'matchType', 'matchupId',
]);

function pickKeys(obj, keepSet) {
  const out = {};
  for (const key of Object.keys(obj)) {
    if (keepSet.has(key)) out[key] = obj[key];
  }
  return out;
}

function slimMatchups(raw) {
  const arr = raw.$values || (raw.matchups && raw.matchups.$values) || raw;
  if (!Array.isArray(arr)) return raw;
  return { $values: arr.map(m => pickKeys(m, MATCHUP_KEEP)) };
}

function slimPlayers(raw) {
  const arr = raw.$values || raw;
  if (!Array.isArray(arr)) return raw;
  return { $values: arr.map(p => pickKeys(p, PLAYER_KEEP)) };
}

function slimMatchupDetails(details) {
  return details.map(({ matchupId, details: d }) => {
    if (!d) return { matchupId, details: null };
    const slimmed = {};

    if (d.matchup) slimmed.matchup = pickKeys(d.matchup, MATCHUP_DETAIL_MATCHUP_KEEP);

    const isCompleted = !!(d.matchup && d.matchup.endResult);
    if (d.matchupPlayerStats && isCompleted) {
      // For completed matchups, keep only players who actually participated.
      // Players with gamesPlayed == 0 contributed nothing and are never used.
      const arr = d.matchupPlayerStats.$values || d.matchupPlayerStats;
      const slimArr = Array.isArray(arr)
        ? arr.map(p => pickKeys(p, MATCHUP_PLAYER_STATS_KEEP)).filter(p => p.gamesPlayed)
        : [];
      slimmed.matchupPlayerStats = { $values: slimArr };
    }
    // For upcoming matchups (no endResult), matchupPlayerStats is omitted: all
    // stats are zero, and player names are resolved from players.json instead.

    if (d.lineups) {
      const lineupArr = d.lineups?.lineups?.$values || d.lineups?.$values || d.lineups;
      if (Array.isArray(lineupArr)) {
        const slimLineups = lineupArr
          .map(l => pickKeys(l, LINEUP_KEEP))
          .filter(l => l.homePlayerId1 || l.homePlayerId2 || l.awayPlayerId1 || l.awayPlayerId2);
        if (slimLineups.length) {
          slimmed.lineups = { lineups: { $values: slimLineups } };
        }
      }
    }

    return { matchupId, details: slimmed };
  });
}

function normalizeVolatileLineupIds(detailData) {
  const lineups = detailData?.lineups?.lineups?.$values;
  if (!Array.isArray(lineups)) return detailData;
  for (const lineup of lineups) {
    if (!lineup) continue;
    delete lineup.lineupId;
  }
  return detailData;
}

async function checkResponse(res, label) {
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`HTTP ${res.status} from ${label}: ${body.slice(0, 200)}`);
  }
}

async function fetchDivisionData(apiBase, divisionId) {
  const divBase = `${apiBase}/divisions/${divisionId}`;
  const [matchupsRes, playersRes] = await Promise.all([
    fetch(`${divBase}/matchups`),
    fetch(`${divBase}/players`),
  ]);
  await checkResponse(matchupsRes, `${divBase}/matchups`);
  await checkResponse(playersRes, `${divBase}/players`);
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
        await checkResponse(detailRes, `${divBase}/matchups/${matchup.matchupId}`);
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

async function downloadLatestApiData(league = 'local', { primaryOnly = false } = {}) {
  console.log(`--- Phase 1: Fetching Remote API Data (${league}) ---`);

  const apiBase = league === 'travel' ? TRAVEL_API_BASE : LOCAL_API_BASE;
  const dataSubdir = league === 'travel' ? 'data-travel' : 'data-local';
  const divisionsFile = league === 'travel' ? 'divisions-travel.json' : 'divisions.json';

  // Fetch all clubs/divisions to build the division manifest.
  console.log('Fetching clubs/divisions manifest...');

  const allDivisions = [];

  if (league === 'travel') {
    // Travel league: discover divisions via the /regions endpoint.
    const regionsUrl = `${apiBase}/regions`;
    const regionsRes = await fetch(regionsUrl);
    await checkResponse(regionsRes, regionsUrl);
    const regionsRaw = await regionsRes.json();
    const regions = regionsRaw.$values || regionsRaw;
    const region = regions.find(r => r.regionId === TRAVEL_REGION_ID);
    if (!region) {
      throw new Error(`Region ${TRAVEL_REGION_ID} not found in /regions response.`);
    }
    const divs = (region.divisions && region.divisions.$values) || region.divisions || [];
    for (const div of divs) {
      if (!div.active) continue;
      allDivisions.push({
        slug: slugForDivision(div.divisionId),
        divisionId: div.divisionId,
        divisionName: div.divisionName.replace(/&amp;/g, '&'),
        isDefault: div.divisionId === TRAVEL_DEFAULT_DIVISION_ID,
        regionName: region.regionName || region.name || '',
      });
    }
  } else {
    // Local league: discover divisions via /clubs.
    const clubsUrl = `${apiBase}/clubs`;
    const clubsRes = await fetch(clubsUrl);
    await checkResponse(clubsRes, clubsUrl);
    const clubsRaw = await clubsRes.json();
    const clubs = clubsRaw.$values || clubsRaw;
    for (const club of clubs) {
      const divs = (club.divisions && club.divisions.$values) || club.divisions || [];
      for (const div of divs) {
        if (!div.active) continue;
        allDivisions.push({
          slug: slugForDivision(div.divisionId),
          divisionId: div.divisionId,
          divisionName: div.divisionName.replace(/&amp;/g, '&'),
          isDefault: div.divisionId === LOCAL_DEFAULT_DIVISION_ID,
          clubName: normalizeClubName(club.name),
          clubId: club.clubId,
        });
      }
    }
  }

  // Path resolution up to root directory from _cpl/modules/
  const dataDir = path.join(__dirname, '..', dataSubdir);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  fs.writeFileSync(path.join(dataDir, divisionsFile), JSON.stringify(allDivisions, null, 2));
  console.log(`✓ ${divisionsFile} written (${allDivisions.length} active divisions).`);

  // Fetch data for each division.
  const divisionsToFetch = primaryOnly ? allDivisions.filter(d => d.isDefault) : allDivisions;
  const allPlayersFlat = [];
  const seenPlayerIds = new Set();
  for (const div of divisionsToFetch) {
    const label = div.clubName ? `${div.clubName} / ` : '';
    console.log(`\nFetching division: ${label}${div.divisionName} (${div.slug})...`);
    try {
      const { matchupsRaw, players, matchupDetails } = await fetchDivisionData(apiBase, div.divisionId);

      const matchupsArray = matchupsRaw.$values || (matchupsRaw.matchups && matchupsRaw.matchups.$values) || matchupsRaw;
      console.log(`  Found ${matchupsArray.length} matchups.`);

      const divDataDir = path.join(dataDir, div.slug);
      if (!fs.existsSync(divDataDir)) fs.mkdirSync(divDataDir, { recursive: true });

      fs.writeFileSync(path.join(divDataDir, 'matchups.json'), JSON.stringify(slimMatchups(matchupsRaw), null, 2));

      const slimmed = slimPlayers(players);
      fs.writeFileSync(path.join(divDataDir, 'players.json'), JSON.stringify(slimmed, null, 2));
      fs.writeFileSync(path.join(divDataDir, 'matchupDetails.json'), JSON.stringify(slimMatchupDetails(matchupDetails), null, 2));

      // Accumulate unique players for the flat players.json (used by the DUPR workflow).
      for (const p of (players.$values || [])) {
        if (p.playerId && !seenPlayerIds.has(p.playerId)) {
          seenPlayerIds.add(p.playerId);
          allPlayersFlat.push(p);
        }
      }

      console.log(`  ✓ Cached to ${dataSubdir}/${div.slug}/`);
    } catch (err) {
      console.error(`  ⚠️ Failed for ${div.slug}:`, err.message);
    }
  }

  // Merge new players into global_players.json non-destructively.
  // Existing entries (from other leagues or prior runs) and duprRating values are preserved.
  if (allPlayersFlat.length > 0) {
    const globalPlayersFile = path.join(__dirname, '..', 'data', 'global_players.json');
    const existing = fs.existsSync(globalPlayersFile)
      ? JSON.parse(fs.readFileSync(globalPlayersFile, 'utf-8'))
      : [];
    const existingMap = {};
    for (const p of existing) {
      if (p.playerId) existingMap[p.playerId] = p;
    }
    for (const p of allPlayersFlat) {
      if (!p.playerId) continue;
      if (existingMap[p.playerId]) {
        // Update identity + dupr fields but preserve any fetched duprRating.
        existingMap[p.playerId].firstName = p.firstName;
        existingMap[p.playerId].lastName = p.lastName;
        existingMap[p.playerId].dupr = p.dupr || existingMap[p.playerId].dupr || null;
      } else {
        existingMap[p.playerId] = {
          playerId: p.playerId,
          firstName: p.firstName,
          lastName: p.lastName,
          dupr: p.dupr || null,
          duprRating: null,
        };
      }
    }
    const merged = Object.values(existingMap);
    const globalDataDir = path.join(__dirname, '..', 'data');
    if (!fs.existsSync(globalDataDir)) fs.mkdirSync(globalDataDir, { recursive: true });
    fs.writeFileSync(globalPlayersFile, JSON.stringify(merged, null, 2));
    console.log(`\n✓ global_players.json updated (${merged.length} total players).`);
  }

  console.log('\n✓ Phase 1 complete.');
}

module.exports = { downloadLatestApiData, slugForDivision };
