const fs = require('fs');
const path = require('path');
const { extractValues, filterDivisions, formatDivisionLabel, getLeagueDataConfig } = require('./division-utils');
const { jsonStringify } = require('./json-utils');
const {
  compareSeasons, currentSeason, isFetchable, resolveLeagueSeasons, seasonSlug,
} = require('./seasons');
const { decodeHtmlEntities } = require('./shared');

const LOCAL_API_BASE = 'https://cplsecureapiproxy.azurewebsites.net/api/CPLSecureApiProxy/local/v0/api';
const TRAVEL_API_BASE = 'https://cplsecureapiproxy.azurewebsites.net/api/CPLSecureApiProxy/v0/api';
const TRAVEL_GENDER_API_BASE = 'https://cplsecureapiproxy.azurewebsites.net/api/CPLSecureApiProxy/gender/v0/api';
const TRAVEL_REGION_ID = 'ffc383dc-fd43-4afa-9310-920c4b0545f2';

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

const PLAYOFF_MATCHUP_KEEP = new Set([
  'matchupId', 'weekNumber', 'homeTeamId', 'awayTeamId', 'homePoints', 'awayPoints',
  'endResult', 'scheduledTime', 'homeName', 'awayName',
  'homePodRanking', 'awayPodRanking', 'playoffGame',
]);

const PLAYER_KEEP = new Set([
  'playerId', 'firstName', 'lastName', 'gender', 'dupr', 'isCaptain', 'isSub', 'teamId', 'teamName',
  'wins', 'losses', 'gamesPlayed', 'pointsWon', 'totalPointsAgainst', 'clutchWins', 'clutchLosses',
  'mixedWins', 'mixedLosses', 'genderWins', 'genderLosses', 'ranking',
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

// The API serializes with JSON.NET reference tracking: an object that has already
// appeared in the payload is emitted as {"$ref":"12"} rather than repeated. Teams
// embed each other through their schedules, so most top-level entries in /teams are
// refs back to a copy nested inside an earlier team. Index every $id to resolve them.
function indexById(node, index = new Map()) {
  if (Array.isArray(node)) {
    for (const item of node) indexById(item, index);
    return index;
  }
  if (node && typeof node === 'object') {
    if (node.$id != null) index.set(String(node.$id), node);
    for (const value of Object.values(node)) indexById(value, index);
  }
  return index;
}

// The /teams payload is enormous — each team carries its full schedule, roster and
// nested club records. The only thing we need from it is the pod the league has
// assigned each team, published as a name (e.g. "Southeast") on team.statistics.pod.
// "Overall" means the division isn't split; "TBD" means pods aren't drawn yet.
function slimTeams(raw) {
  const arr = extractValues(raw);
  if (!Array.isArray(arr)) return raw;
  const byId = indexById(raw);
  const deref = node => (node && node.$ref != null ? byId.get(String(node.$ref)) : node);
  return {
    $values: arr.map(entry => {
      const team = deref(entry) || {};
      const stats = deref(team.statistics) || {};
      return {
        teamId: team.teamId ?? null,
        teamName: team.teamName ?? null,
        pod: stats.pod ?? null,
      };
    }),
  };
}

function pickKeys(obj, keepSet) {
  const out = {};
  for (const key of Object.keys(obj)) {
    if (keepSet.has(key)) out[key] = obj[key];
  }
  return out;
}

function slimMatchups(raw) {
  const arr = extractValues(raw);
  if (!Array.isArray(arr)) return raw;
  return { $values: arr.map(m => pickKeys(m, MATCHUP_KEEP)) };
}

function slimPlayoffMatchups(raw) {
  const arr = extractValues(raw);
  if (!Array.isArray(arr)) return raw;
  return { $values: arr.map(m => pickKeys(m, PLAYOFF_MATCHUP_KEEP)) };
}

// The API returns players in league-rank order, so one player's rank shift
// reshuffles the whole array and buries the week's real changes in a diff of
// moved blocks (a single rank change once moved 355 of 359 rows). Persist a
// rank-independent order instead: playerId, which never changes for a person.
// Rank itself is not lost — it stays in each row's `ranking` field.
//
// A player can hold more than one row in a division (rostered on one team,
// listed as a sub on another), so the tiebreaks below make those rows
// deterministic too. Sub rows sort first, leaving the rostered row last: the
// compiler's team attribution (homeTeamByPid, rankByPid) keeps the last
// non-sub row it sees, so this pins it to a stable choice rather than to
// whichever row the API happened to rank lower that week.
function comparePlayers(a, b) {
  const aId = String(a.playerId || '');
  const bId = String(b.playerId || '');
  if (aId !== bId) return aId < bId ? -1 : 1;
  if (!!a.isSub !== !!b.isSub) return a.isSub ? -1 : 1;
  const aTeam = String(a.teamId || '');
  const bTeam = String(b.teamId || '');
  if (aTeam !== bTeam) return aTeam < bTeam ? -1 : 1;
  return 0;
}

function slimPlayers(raw) {
  const arr = raw.$values || raw;
  if (!Array.isArray(arr)) return raw;
  return { $values: arr.map(p => pickKeys(p, PLAYER_KEEP)).sort(comparePlayers) };
}

function slimMatchupDetails(details) {
  return details.map(({ matchupId, details: d }) => {
    if (!d) return { matchupId, details: null };
    const slimmed = {};

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

// Every shape guard in this file ultimately funnels through extractValues(),
// which returns [] for any payload it does not recognize. So an upstream rename
// (`$values` → something else, `active` → something else, `/clubs` returning [])
// arrives here as "this division has no matchups" rather than as an error: the
// slim files get written empty, nothing throws, the run exits 0, and the bot
// commits a manifest that renders every dashboard blank with a clean console.
// The floor below is what makes that loud: an empty value may never replace a
// file that currently holds something. A genuine first run — no file on disk —
// is still allowed through.
function isEmptyValue(value) {
  if (Array.isArray(value)) return value.length === 0;
  if (value && typeof value === 'object') {
    // The API's array wrapper: {"$values": [...]}. An empty wrapper is empty.
    if (Array.isArray(value.$values)) return value.$values.length === 0;
    return Object.keys(value).length === 0;
  }
  return value == null;
}

// Unparseable cached JSON is treated as nothing worth protecting — replacing it
// is a repair, not a regression.
function fileHoldsContent(filePath) {
  if (!fs.existsSync(filePath)) return false;
  try {
    return !isEmptyValue(JSON.parse(fs.readFileSync(filePath, 'utf-8')));
  } catch {
    return false;
  }
}

// True if writing `serialized` to `filePath` would actually change its bytes.
// Used to tell a real content change from a fetch that came back identical —
// so fetchedAt.json (see below) only advances when there was something to
// advance it for.
function wouldChange(filePath, serialized) {
  if (!fs.existsSync(filePath)) return true;
  try {
    return fs.readFileSync(filePath, 'utf8') !== serialized;
  } catch {
    return true;
  }
}

// Returns whether the write actually changed the file's contents, so callers
// can accumulate a division-level "did anything real change" flag.
function writeGuarded(filePath, value, label) {
  if (isEmptyValue(value) && fileHoldsContent(filePath)) {
    throw new Error(
      `Refusing to replace non-empty ${label} (${filePath}) with empty data. `
      + 'The upstream response is empty or its shape changed; the cached file has been left as-is.',
    );
  }
  const serialized = jsonStringify(value);
  const changed = wouldChange(filePath, serialized);
  if (changed) fs.writeFileSync(filePath, serialized);
  return changed;
}

// Same idea as writeGuarded but for the two files that are intentionally
// unguarded (playoff brackets/details can legitimately go empty mid-season).
function writeIfChanged(filePath, value) {
  const serialized = jsonStringify(value);
  const changed = wouldChange(filePath, serialized);
  if (changed) fs.writeFileSync(filePath, serialized);
  return changed;
}

// extractValues() accepts exactly these shapes and flattens everything else to
// [], so a check on its *output* can never fire. Assert against the raw payload
// instead — that is the only point at which an upstream rename is still visible.
function assertArrayShape(raw, label) {
  const recognized = Array.isArray(raw)
    || (raw && typeof raw === 'object'
      && (Array.isArray(raw.$values) || Array.isArray(raw.matchups?.$values) || Array.isArray(raw.matchups)));
  if (!recognized) {
    let got = typeof raw;
    if (raw === null) got = 'null';
    else if (got === 'object') got = `object with keys [${Object.keys(raw).join(', ')}]`;
    throw new Error(`${label} payload is not a recognized array shape (got ${got}) — upstream may have renamed the response envelope.`);
  }
}

async function checkResponse(res, label) {
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`HTTP ${res.status} from ${label}: ${body.slice(0, 200)}`);
  }
}

async function fetchWithRetry(url, retries = 3, delayMs = 1000) {
  let lastErr;
  for (let i = 0; i < retries; i++) {
    if (i > 0) await new Promise(r => setTimeout(r, delayMs * i));
    try {
      const res = await fetch(url);
      if (res.ok) return res;
      const body = await res.text().catch(() => '');
      lastErr = new Error(`HTTP ${res.status}: ${body.slice(0, 200)}`);
    } catch (err) {
      lastErr = err;
    }
    console.warn(`  ↻ Retry ${i}/${retries - 1} for ${url} (${lastErr.message})`);
  }
  throw lastErr;
}

async function fetchJsonWithRetry(url) {
  const res = await fetchWithRetry(url);
  await checkResponse(res, url);
  return res.json();
}

// Run `fn` over `items` with at most `limit` requests in flight, preserving
// order. Keeps the burst against the API proxy bounded — a big division has
// 40+ matchup-detail endpoints and firing them all at once invites 429s/5xx.
const DETAIL_FETCH_CONCURRENCY = 6;
async function mapWithConcurrency(items, limit, fn) {
  const results = new Array(items.length);
  let next = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (next < items.length) {
      const index = next++;
      results[index] = await fn(items[index], index);
    }
  });
  await Promise.all(workers);
  return results;
}

// Fetch per-matchup details for a list of matchups. Failed fetches yield
// { details: null } and are reported in `failures` so callers can decide
// whether to fall back to previously cached data.
async function fetchMatchupDetails(divBase, matchupsArray, label, failures) {
  if (!Array.isArray(matchupsArray) || !matchupsArray.length) return [];
  return mapWithConcurrency(matchupsArray, DETAIL_FETCH_CONCURRENCY, async (matchup) => {
    const url = `${divBase}/matchups/${matchup.matchupId}`;
    try {
      const detailRes = await fetchWithRetry(url);
      const detailData = await detailRes.json();
      return { matchupId: matchup.matchupId, details: normalizeVolatileLineupIds(detailData) };
    } catch (err) {
      console.error(`⚠️ Failed fetching ${label} ${matchup.matchupId} after retries:`, err.message);
      failures.push(`${label} ${matchup.matchupId}: ${err.message}`);
      return { matchupId: matchup.matchupId, details: null };
    }
  });
}

async function fetchDivisionData(apiBase, divisionId, detailFailures) {
  const divBase = `${apiBase}/divisions/${divisionId}`;
  const [matchupsRaw, players, playoffMatchupsRaw, teamsRaw] = await Promise.all([
    fetchJsonWithRetry(`${divBase}/matchups`),
    fetchJsonWithRetry(`${divBase}/players`),
    fetchJsonWithRetry(`${divBase}/matchups?playoffs=true`),
    fetchJsonWithRetry(`${divBase}/teams`),
  ]);

  // Checked before extractValues() flattens anything, and only for the three
  // payloads whose slim files are load-bearing. Playoff matchups are left out
  // on purpose: that endpoint legitimately has nothing to return until a
  // bracket is drawn, so asserting on it would fail most of the season.
  assertArrayShape(matchupsRaw, `Matchups for division ${divisionId}`);
  assertArrayShape(players, `Players for division ${divisionId}`);
  assertArrayShape(teamsRaw, `Teams for division ${divisionId}`);

  const matchupsArray = extractValues(matchupsRaw);
  const individualDetails = await fetchMatchupDetails(divBase, matchupsArray, 'matchup', detailFailures);
  const playoffMatchupsArray = extractValues(playoffMatchupsRaw);
  const playoffIndividualDetails = await fetchMatchupDetails(divBase, playoffMatchupsArray, 'playoff matchup', detailFailures);

  return { matchupsRaw, players, teamsRaw, matchupDetails: individualDetails, playoffMatchupsRaw, playoffMatchupDetails: playoffIndividualDetails };
}

// A failed detail fetch must not clobber previously cached data with nulls:
// keep the old cached entry for any matchup whose fresh fetch failed.
function mergeDetailsWithCache(freshDetails, cachedPath) {
  const failedIds = freshDetails.filter(d => !d.details).map(d => d.matchupId);
  if (!failedIds.length || !fs.existsSync(cachedPath)) return freshDetails;
  try {
    const cachedById = new Map(
      JSON.parse(fs.readFileSync(cachedPath, 'utf8')).map(d => [d.matchupId, d]),
    );
    return freshDetails.map(d => (!d.details && cachedById.get(d.matchupId)?.details ? cachedById.get(d.matchupId) : d));
  } catch {
    return freshDetails;
  }
}

function getLeagueApiBases(league) {
  return league === 'travel'
    ? [TRAVEL_API_BASE, TRAVEL_GENDER_API_BASE]
    : [LOCAL_API_BASE];
}

// Every (seasonYear, seasonNumber) any of a league's API legs knows about.
// The travel league is served by two legs — the mixed one and the gendered one
// — and they do not list the same seasons: /gender only goes back to Fall 2026,
// when gendered divisions were introduced. A season either leg reports is a
// season of this league.
async function fetchSeasonRecords(apiBases) {
  const byKey = new Map();
  for (const apiBase of apiBases) {
    const raw = await fetchJsonWithRetry(`${apiBase}/seasons`);
    assertArrayShape(raw, `Seasons from ${apiBase}`);
    for (const season of extractValues(raw)) {
      const seasonNumber = Number(season.seasonNumber);
      const seasonYear = Number(season.seasonYear);
      if (!Number.isFinite(seasonNumber) || !Number.isFinite(seasonYear)) continue;
      byKey.set(`${seasonYear}/${seasonNumber}`, { seasonNumber, seasonYear });
    }
  }
  return [...byKey.values()];
}

// Additive on purpose. The cached seasons.json is the index of the archive, and
// an archived season's directory is only reachable through it — so a season
// upstream stops listing (a retention window, a renumbering, a bad deploy) must
// not drop out of the site. Seasons are only ever added here; removing one is a
// deliberate edit to the committed file.
function mergeSeasonRecords(cached, fresh) {
  const byKey = new Map();
  for (const season of [...(cached || []), ...fresh]) {
    if (!Number.isFinite(season?.seasonNumber) || !Number.isFinite(season?.seasonYear)) continue;
    byKey.set(`${season.seasonYear}/${season.seasonNumber}`, {
      seasonNumber: season.seasonNumber,
      seasonYear: season.seasonYear,
    });
  }
  return [...byKey.values()].sort(compareSeasons).reverse();
}

function readCachedSeasons(league) {
  const { dataSubdir, seasonsFile } = getLeagueDataConfig(league);
  const seasonsPath = path.join(__dirname, '..', dataSubdir, seasonsFile);
  if (!fs.existsSync(seasonsPath)) return [];
  try {
    const parsed = JSON.parse(fs.readFileSync(seasonsPath, 'utf8'));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

// The season query the discovery endpoints take. Both /regions and /clubs
// accept it; without it they answer for the current season only, which is how
// this pipeline behaved before seasons existed.
function seasonQuery(season) {
  return `seasonNumber=${season.seasonNumber}&seasonYear=${season.seasonYear}`;
}

// Divisions carry the season they belong to, so the response can be checked
// against what was asked for. This is the guard that matters most in the whole
// season change: if the API ever stops honouring the query parameters and
// answers for the current season instead, every backfill would write live
// divisions into an archived season's directory and publish this season's
// standings under last season's name. Cheap to check, silent to get wrong.
function assertSeasonMatches(divisions, season, label) {
  const mismatched = divisions.filter((div) => (
    Number(div.seasonNumber) !== season.seasonNumber || Number(div.seasonYear) !== season.seasonYear
  ));
  if (mismatched.length) {
    throw new Error(
      `${label} returned ${mismatched.length} division(s) from a season other than ${seasonSlug(season)} `
      + `(e.g. ${mismatched[0].divisionName} is ${mismatched[0].seasonYear}/${mismatched[0].seasonNumber}). `
      + 'The season query parameters are not being honoured; refusing to file another season\'s divisions under this one.',
    );
  }
}

async function discoverTravelDivisions(season) {
  const divisionsById = new Map();
  let regionSeen = false;

  for (const sourceApiBase of getLeagueApiBases('travel')) {
    const regionsUrl = `${sourceApiBase}/regions?${seasonQuery(season)}`;
    const regionsRes = await fetch(regionsUrl);
    await checkResponse(regionsRes, regionsUrl);
    const regionsRaw = await regionsRes.json();
    const regions = regionsRaw.$values || regionsRaw;
    const region = regions.find(r => r.regionId === TRAVEL_REGION_ID);
    // A leg with nothing for this season answers with an empty region list —
    // /gender does exactly that for every season before Fall 2026. That is not
    // the same as the region having gone missing, so it is only fatal if no leg
    // reports the region at all.
    if (!region) continue;
    regionSeen = true;
    const divs = (region.divisions && region.divisions.$values) || region.divisions || [];
    assertSeasonMatches(divs, season, `${sourceApiBase}/regions`);
    for (const div of divs) {
      if (!div.active) continue;
      const existing = divisionsById.get(div.divisionId);
      const next = {
        slug: slugForDivision(div.divisionId),
        divisionId: div.divisionId,
        divisionName: decodeHtmlEntities(div.divisionName),
        regionName: region.regionName || region.name || '',
        apiBase: sourceApiBase,
      };
      if (existing) {
        if (!existing.regionName && next.regionName) existing.regionName = next.regionName;
      } else {
        divisionsById.set(div.divisionId, next);
      }
    }
  }

  if (!regionSeen) {
    throw new Error(`Region ${TRAVEL_REGION_ID} not found in any /regions response for ${seasonSlug(season)}.`);
  }
  return [...divisionsById.values()];
}

async function discoverLocalDivisions(season) {
  const clubsUrl = `${LOCAL_API_BASE}/clubs?${seasonQuery(season)}`;
  const clubsRes = await fetch(clubsUrl);
  await checkResponse(clubsRes, clubsUrl);
  const clubsRaw = await clubsRes.json();
  const clubs = clubsRaw.$values || clubsRaw;
  const allDivisions = [];
  for (const club of clubs) {
    const divs = (club.divisions && club.divisions.$values) || club.divisions || [];
    assertSeasonMatches(divs, season, `${LOCAL_API_BASE}/clubs`);
    for (const div of divs) {
      if (!div.active) continue;
      allDivisions.push({
        slug: slugForDivision(div.divisionId),
        divisionId: div.divisionId,
        divisionName: decodeHtmlEntities(div.divisionName),
        clubName: normalizeClubName(club.name),
        clubId: club.clubId,
      });
    }
  }
  return allDivisions;
}

// Fetch one season of one league into _cpl/data-<league>/<season>/.
async function downloadSeason(league, season, { divisionSlugs = null } = {}) {
  const apiBase = league === 'travel' ? TRAVEL_API_BASE : LOCAL_API_BASE;
  const { dataSubdir, divisionsFile } = getLeagueDataConfig(league);
  const slug = season.slug;

  console.log(`\nFetching clubs/divisions manifest for ${league} ${slug}...`);
  const allDivisions = league === 'travel'
    ? await discoverTravelDivisions(season)
    : await discoverLocalDivisions(season);

  // Path resolution up to root directory from _cpl/modules/
  const dataDir = path.join(__dirname, '..', dataSubdir, slug);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  // A season with zero active divisions is never legitimate here, so this is
  // fatal rather than merely guarded: an empty manifest leaves divisionsToFetch
  // empty, which means the fetch loop below never runs and never records a
  // failure. Without this the run would exit 0 having replaced the manifest
  // that every dashboard page reads.
  if (!allDivisions.length) {
    throw new Error(
      `${slug}/${divisionsFile}: upstream returned 0 active divisions for the ${league} league. `
      + 'Either the API is down or it renamed the clubs/divisions/active fields; refusing to publish an empty manifest.',
    );
  }

  writeGuarded(path.join(dataDir, divisionsFile), allDivisions, `${league} ${slug} division manifest`);
  console.log(`✓ ${slug}/${divisionsFile} written (${allDivisions.length} active divisions).`);

  // Fetch data for each division.
  const divisionsToFetch = filterDivisions(allDivisions, { divisionSlugs });
  console.log(`Preparing to fetch ${divisionsToFetch.length} / ${allDivisions.length} divisions.`);
  const allPlayersFlat = [];
  const seenPlayerIds = new Set();
  const failedDivisions = [];
  for (const div of divisionsToFetch) {
    const label = formatDivisionLabel(div);
    console.log(`\nFetching division: ${label}${div.divisionName} (${div.slug})...`);
    try {
      const divisionApiBase = div.apiBase || apiBase;
      const detailFailures = [];
      const { matchupsRaw, players, teamsRaw, matchupDetails, playoffMatchupsRaw, playoffMatchupDetails } = await fetchDivisionData(divisionApiBase, div.divisionId, detailFailures);

      const matchupsArray = extractValues(matchupsRaw);
      console.log(`  Found ${matchupsArray.length} matchups.`);
      const playoffMatchupsArray = extractValues(playoffMatchupsRaw);
      if (playoffMatchupsArray && playoffMatchupsArray.length) {
        console.log(`  Found ${playoffMatchupsArray.length} playoff matchups.`);
      }

      const divDataDir = path.join(dataDir, div.slug);
      if (!fs.existsSync(divDataDir)) fs.mkdirSync(divDataDir, { recursive: true });

      // Whether *anything* this division actually publishes changed. Drives
      // whether fetchedAt.json (below) advances — a fetch that came back
      // byte-identical to the cache is not an event worth re-stamping.
      let divisionChanged = false;

      divisionChanged = writeGuarded(path.join(divDataDir, 'matchups.json'), slimMatchups(matchupsRaw), `${div.slug} matchups`) || divisionChanged;
      // Not guarded: an empty playoff bracket is the normal state for most of
      // the season, and a bracket can legitimately be withdrawn and redrawn.
      divisionChanged = writeIfChanged(path.join(divDataDir, 'playoffMatchups.json'), slimPlayoffMatchups(playoffMatchupsRaw)) || divisionChanged;

      const slimTeamList = slimTeams(teamsRaw);
      divisionChanged = writeGuarded(path.join(divDataDir, 'teams.json'), slimTeamList, `${div.slug} teams`) || divisionChanged;
      const podNames = [...new Set((slimTeamList.$values || []).map(t => t.pod).filter(Boolean))];
      console.log(`  Found ${(slimTeamList.$values || []).length} teams (pods: ${podNames.join(', ') || 'none reported'}).`);

      const slimmed = slimPlayers(players);
      divisionChanged = writeGuarded(path.join(divDataDir, 'players.json'), slimmed, `${div.slug} players`) || divisionChanged;
      const detailsPath = path.join(divDataDir, 'matchupDetails.json');
      const playoffDetailsPath = path.join(divDataDir, 'playoffMatchupDetails.json');
      divisionChanged = writeIfChanged(detailsPath, mergeDetailsWithCache(slimMatchupDetails(matchupDetails), detailsPath)) || divisionChanged;
      divisionChanged = writeIfChanged(playoffDetailsPath, mergeDetailsWithCache(slimMatchupDetails(playoffMatchupDetails), playoffDetailsPath)) || divisionChanged;

      if (detailFailures.length) {
        failedDivisions.push({
          league,
          slug: div.slug,
          name: `${label}${div.divisionName}`,
          error: `${detailFailures.length} matchup detail fetch(es) failed (cached details kept where available): ${detailFailures.slice(0, 3).join('; ')}${detailFailures.length > 3 ? '; …' : ''}`,
        });
      }

      // Accumulate unique players for the flat players.json (used by the DUPR workflow).
      for (const p of (players.$values || [])) {
        if (p.playerId && !seenPlayerIds.has(p.playerId)) {
          seenPlayerIds.add(p.playerId);
          allPlayersFlat.push(p);
        }
      }

      // When this division's data last actually changed, recorded only once
      // every write above succeeded. This is what the dashboard reports as "as
      // of", so it has to be the fetch time and not the compile time:
      // recompiling Tuesday's cache on Thursday does not make the standings
      // current as of Thursday. It also has to live in a committed file rather
      // than a file mtime, because a CI clone stamps every mtime with the
      // checkout time.
      //
      // Only advanced when something above actually changed. A "due" run that
      // re-fetches a division and gets back exactly what was already cached is
      // not new information — stamping it anyway would turn every 6-hourly run
      // into a commit (a timestamp bump with nothing else in the diff) and
      // would overstate "as of" as "just re-verified" rather than what it's
      // meant to mean, "current as of". First run for a division (no stamp
      // file yet) always stamps, so a fresh division isn't left without one.
      const fetchedAtPath = path.join(divDataDir, 'fetchedAt.json');
      if (divisionChanged || !fs.existsSync(fetchedAtPath)) {
        fs.writeFileSync(fetchedAtPath, jsonStringify({ fetchedAt: new Date().toISOString() }));
      } else {
        console.log(`  ↳ No change for ${div.slug}; fetchedAt left at previous value.`);
      }

      console.log(`  ✓ Cached to ${dataSubdir}/${slug}/${div.slug}/`);
    } catch (err) {
      console.error(`  ⚠️ Failed for ${div.slug}:`, err.message);
      failedDivisions.push({
        league,
        slug: div.slug,
        name: `${label}${div.divisionName}`,
        error: err.message,
      });
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
    // Stamp every player seen in this run so stale entries (players who left
    // the league seasons ago) can eventually be pruned by lastSeen date.
    const seenStamp = new Date().toISOString().slice(0, 10);
    for (const p of allPlayersFlat) {
      if (!p.playerId) continue;
      if (existingMap[p.playerId]) {
        // Update identity + dupr fields but preserve any fetched duprRating.
        existingMap[p.playerId].firstName = p.firstName;
        existingMap[p.playerId].lastName = p.lastName;
        existingMap[p.playerId].dupr = p.dupr || existingMap[p.playerId].dupr || null;
        existingMap[p.playerId].lastSeen = seenStamp;
      } else {
        existingMap[p.playerId] = {
          playerId: p.playerId,
          firstName: p.firstName,
          lastName: p.lastName,
          dupr: p.dupr || null,
          duprRating: null,
          lastSeen: seenStamp,
        };
      }
    }
    const merged = Object.values(existingMap);
    const globalDataDir = path.join(__dirname, '..', 'data');
    if (!fs.existsSync(globalDataDir)) fs.mkdirSync(globalDataDir, { recursive: true });
    fs.writeFileSync(globalPlayersFile, jsonStringify(merged));
    console.log(`\n✓ global_players.json updated (${merged.length} total players).`);
  }

  return { failedDivisions, matchedSlugs: divisionsToFetch.map((div) => div.slug) };
}

// Which seasons this run is allowed to touch.
//
// Nothing but the current season is fetched unless --season names others by
// hand. That is the whole of "archived seasons are never fetched again": the
// crons pass no --season, so no scheduled run can reach an archive, and a
// season's results stop moving the moment it is classified archived. A person
// typing --season=2026-spring has said what they mean, so it is allowed — with
// a warning, because refetching an archive rewrites results that were settled.
function selectSeasonsToFetch(league, resolvedSeasons, seasonSlugs) {
  if (!seasonSlugs || !seasonSlugs.length) {
    const current = currentSeason(resolvedSeasons);
    if (!current) {
      console.warn(`⚠️ ${league}: no current season (every season is archived); nothing to fetch.`);
      return [];
    }
    return [current];
  }

  const requested = new Set(seasonSlugs);
  const matched = resolvedSeasons.filter((season) => requested.has(season.slug));
  for (const season of matched.filter((s) => !isFetchable(s))) {
    console.warn(
      `⚠️ ${league} ${season.slug} is archived and is being refetched because --season named it. `
      + 'Settled results may change.',
    );
  }
  return matched;
}

async function downloadLatestApiData(league = 'local', { divisionSlugs = null, seasonSlugs = null } = {}) {
  console.log(`--- Phase 1: Fetching Remote API Data (${league}) ---`);

  const { dataSubdir, seasonsFile } = getLeagueDataConfig(league);
  const seasons = mergeSeasonRecords(
    readCachedSeasons(league),
    await fetchSeasonRecords(getLeagueApiBases(league)),
  );
  const seasonsPath = path.join(__dirname, '..', dataSubdir, seasonsFile);
  fs.mkdirSync(path.dirname(seasonsPath), { recursive: true });
  writeGuarded(seasonsPath, seasons, `${league} seasons manifest`);

  const resolved = resolveLeagueSeasons(league, seasons);
  console.log(`✓ ${seasonsFile}: ${resolved.map((s) => `${s.slug} (${s.status})`).join(', ')}`);

  const seasonsToFetch = selectSeasonsToFetch(league, resolved, seasonSlugs);
  const failedDivisions = [];
  const matchedSlugs = [];
  const matchedSeasonSlugs = [];

  for (const season of seasonsToFetch) {
    matchedSeasonSlugs.push(season.slug);
    try {
      const result = await downloadSeason(league, season, { divisionSlugs });
      failedDivisions.push(...result.failedDivisions);
      matchedSlugs.push(...result.matchedSlugs);
    } catch (err) {
      console.error(`  ⚠️ Failed for season ${season.slug}:`, err.message);
      failedDivisions.push({
        league,
        slug: `(${season.slug})`,
        name: `${league} ${season.slug}`,
        error: err.message,
      });
    }
  }

  if (failedDivisions.length) {
    console.error(`\n⚠️ Phase 1 finished with ${failedDivisions.length} failed division(s).`);
  } else {
    console.log('\n✓ Phase 1 complete.');
  }
  return { failedDivisions, matchedSlugs, matchedSeasonSlugs, seasons: resolved };
}

module.exports = {
  downloadLatestApiData, downloadSeason, slugForDivision, slimPlayers, comparePlayers,
  assertArrayShape, isEmptyValue, writeGuarded, writeIfChanged,
  fetchSeasonRecords, mergeSeasonRecords, selectSeasonsToFetch, assertSeasonMatches,
};
