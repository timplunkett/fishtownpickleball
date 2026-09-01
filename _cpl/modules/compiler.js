const fs = require('fs');
const path = require('path');
const {
  filterDivisions, formatDivisionLabel, getLandingSlug, getLeagueDataConfig, sortDivisionsForLeague,
} = require('./division-utils');
const {
  LEAGUE_LABELS,
  eachLeagueSeason,
  readCompiledAsOf,
  readLeagueSeasons,
  seasonCacheDir,
  seasonOutDir,
  writeCatalog,
} = require('./catalog');
const {
  normalizeName: norm,
  isGenderApiBase,
  travelDivisionGender,
  displayPodGroups,
} = require('./shared');
const { getDivisionBracket } = require('./brackets');
const { assignPods } = require('./pods');
const { writeDuprShards } = require('./dupr-outputs');
const { writeArchiveData } = require('./archive-outputs');
const { expandJson } = require('./json-utils');
const {
  isForfeit,
  applyProvisionalOutcomes,
  computeRatings,
  computeWeeklyRatingHistory,
  computePairSynergy,
} = require('./ratings');
const {
  buildBootstrapSource,
  buildBootstrapRuntimeSource,
  buildLeagueRedirectHtml,
  buildLeagueRedirectSource,
} = require('./bootstrap-gen');

const round1 = n => Math.round(n * 10) / 10;
const ratio = (wins, losses) => {
  const total = wins + losses;
  return total ? wins / total : 0;
};

function firstValues(obj) {
  if (!obj || typeof obj !== "object") return null;
  if (Array.isArray(obj.$values)) return obj.$values;
  for (const k of Object.keys(obj)) {
    const r = firstValues(obj[k]);
    if (r) return r;
  }
  return null;
}

// Posted-but-unplayed lineups for a scheduled matchup, as the UI's `games`
// shape. In the days before a match one team often submits before the other,
// and a slot can sit empty inside an otherwise-filled pair, so any row with at
// least one named player is carried through with "" standing in for the slots
// still to come — the dashboard renders those as TBD and skips the projection.
// Only rows with nothing at all in them are dropped. Shared by the pre-season
// and in-season match builders so upcoming schedules show lineups in both.
function buildPendingGames(detail, nameById) {
  const lineups = (detail && detail.lineups && detail.lineups.lineups && detail.lineups.lineups.$values) || [];
  const name = (playerId) => (playerId && nameById[playerId]) || "";
  return lineups
    .map((g) => ({
      t: g.matchType,
      h: [name(g.homePlayerId1), name(g.homePlayerId2)],
      a: [name(g.awayPlayerId1), name(g.awayPlayerId2)],
    }))
    .filter((g) => [...g.h, ...g.a].some(Boolean));
}

// Every rostered player already ships a name and a playerId inside
// DATA.players, so emitting the whole name→id map again would duplicate the
// roster for nothing — on a large travel division that repetition cost more
// than the entire match schedule. Only the names with no player row survive:
// subs, who never get one but do appear in posted lineups. The dashboard
// rebuilds the full map by laying these over the players array.
function selectExtraPlayerIds(playerArr, playerIdsByName) {
  const named = new Set(playerArr.map((player) => player.name));
  const extra = {};
  for (const [name, playerId] of Object.entries(playerIdsByName)) {
    if (!named.has(name)) extra[name] = playerId;
  }
  return extra;
}

// When this division's cache was last fetched from upstream, which is what the
// dashboard means by "as of". Deliberately not the compile time: `npm run
// compile` re-emits from cached JSON, and stamping that moment would both
// overstate the freshness and make compilation non-idempotent, so CI's
// drift check would fail on every run for no reason.
//
// Falls back to the previously compiled stamp, then to the cache's own date, so
// a division fetched before fetchedAt.json existed keeps a truthful (if coarse)
// value instead of jumping to today.
function readFetchedAt(divDataDir, cplDir, slug) {
  const stampPath = path.join(divDataDir, 'fetchedAt.json');
  if (fs.existsSync(stampPath)) {
    try {
      const { fetchedAt } = JSON.parse(fs.readFileSync(stampPath, 'utf8'));
      if (fetchedAt) return fetchedAt;
    } catch {
      // A corrupt stamp is not worth failing a build over; fall through.
    }
  }
  const previous = readCompiledAsOf(cplDir, slug);
  if (previous) return previous;
  const matchupsPath = path.join(divDataDir, 'matchups.json');
  if (fs.existsSync(matchupsPath)) return fs.statSync(matchupsPath).mtime.toISOString();
  return new Date().toISOString();
}

function writeDataScript(outPath, data) {
  const asOf = data && data.meta ? data.meta.asOf : undefined;
  const divisionSlug = data && data.meta ? data.meta.divisionSlug : undefined;
  const scriptData = {
    ...data,
    meta: { ...((data && data.meta) || {}) },
  };
  delete scriptData.meta.asOf;
  // Indented JSON so a week's update touches a few lines instead of rewriting
  // one giant line — git stores far smaller deltas for the 6-hourly bot
  // commits. gzip flattens the extra whitespace on the wire.
  const lines = [
    '(function () {',
    `  const DATA = ${JSON.stringify(scriptData, null, 1)};`,
  ];
  if (asOf != null) lines.push(`  DATA.meta.asOf = ${JSON.stringify(asOf)};`);
  lines.push('  window.DATA = DATA;');
  lines.push('  window.CPL_DATASETS = window.CPL_DATASETS || {};');
  if (divisionSlug != null && divisionSlug !== '') {
    lines.push(`  window.CPL_DATASETS[${JSON.stringify(divisionSlug)}] = DATA;`);
  }
  lines.push('})();');
  fs.writeFileSync(outPath, `${lines.join('\n')}\n`);
}

// Per-player detail (match log, game log, rating history, partner chemistry)
// is only needed when a player modal opens, so it ships as a separate script
// the dashboard lazy-loads. Keyed by playerId under the division slug.
const PLAYER_DETAIL_KEYS = ['log', 'games', 'ratingHistory', 'partners'];

function splitPlayerDetails(playerArr) {
  const detailByPid = {};
  for (const player of playerArr) {
    const detail = {};
    let hasContent = false;
    for (const key of PLAYER_DETAIL_KEYS) {
      detail[key] = player[key] || [];
      if (detail[key].length) hasContent = true;
      delete player[key];
    }
    // Rostered players who haven't played yet have nothing to record; the
    // dashboard treats a missing entry as empty.
    if (player.playerId && hasContent) detailByPid[player.playerId] = detail;
  }
  return detailByPid;
}

function writeDetailScript(outPath, divisionSlug, detailByPid) {
  const lines = [
    '(function () {',
    `  const DETAILS = ${JSON.stringify(detailByPid, null, 1)};`,
    '  window.CPL_DETAILS = window.CPL_DETAILS || {};',
    `  window.CPL_DETAILS[${JSON.stringify(divisionSlug)}] = DETAILS;`,
    '})();',
  ];
  fs.writeFileSync(outPath, `${lines.join('\n')}\n`);
}

function normalizeDuprCode(value) {
  return String(value || '').trim().toUpperCase();
}

function getDivisionFitDistance(player, duprByPid, divisionBracket) {
  if (!divisionBracket) return null;
  const rating = Number(duprByPid[player.playerId]?.rating);
  if (!Number.isFinite(rating)) return null;

  const upperInclusive = Number.isFinite(divisionBracket.max) ? divisionBracket.max - 0.001 : Infinity;
  if (rating < divisionBracket.min) return divisionBracket.min - rating;
  if (rating > upperInclusive) return rating - upperInclusive;
  return 0;
}

function shouldPreferRosterPlayer(candidate, current, duprByPid, divisionBracket) {
  if (!!candidate.isSub !== !!current.isSub) return !candidate.isSub;

  const candidateGames = Number(candidate.gamesPlayed) || 0;
  const currentGames = Number(current.gamesPlayed) || 0;
  if (candidateGames !== currentGames) return candidateGames > currentGames;

  const candidateGlobalDupr = normalizeDuprCode(duprByPid[candidate.playerId]?.dupr);
  const currentGlobalDupr = normalizeDuprCode(duprByPid[current.playerId]?.dupr);
  const candidateMatchesGlobal = candidateGlobalDupr && normalizeDuprCode(candidate.dupr) === candidateGlobalDupr;
  const currentMatchesGlobal = currentGlobalDupr && normalizeDuprCode(current.dupr) === currentGlobalDupr;
  if (candidateMatchesGlobal !== currentMatchesGlobal) return candidateMatchesGlobal;

  const candidateFit = getDivisionFitDistance(candidate, duprByPid, divisionBracket);
  const currentFit = getDivisionFitDistance(current, duprByPid, divisionBracket);
  const candidateHasFit = Number.isFinite(candidateFit);
  const currentHasFit = Number.isFinite(currentFit);
  if (candidateHasFit !== currentHasFit) return candidateHasFit;
  if (candidateHasFit && candidateFit !== currentFit) return candidateFit < currentFit;

  const candidateRank = Number(candidate.ranking);
  const currentRank = Number(current.ranking);
  const candidateHasRank = Number.isFinite(candidateRank);
  const currentHasRank = Number.isFinite(currentRank);
  if (candidateHasRank !== currentHasRank) return candidateHasRank;
  if (candidateHasRank && candidateRank !== currentRank) return candidateRank < currentRank;

  return false;
}

function selectCanonicalRosterPlayers(players, duprByPid = {}, divisionMeta = null) {
  const byNameAndTeam = new Map();
  const list = Array.isArray(players) ? players : [];
  const divisionBracket = getDivisionBracket(divisionMeta);
  for (const p of list) {
    const name = norm(`${p.firstName || ''} ${p.lastName || ''}`);
    const teamName = String(p.teamName || '').trim();
    if (!name || !teamName) continue;
    const key = `${name.toLowerCase()}|${teamName.toLowerCase()}`;
    const existing = byNameAndTeam.get(key);
    if (!existing || shouldPreferRosterPlayer(p, existing, duprByPid, divisionBracket)) {
      byNameAndTeam.set(key, p);
    }
  }
  return [...byNameAndTeam.values()];
}

function loadDuprByPid() {
  const globalPlayersPath = path.join(__dirname, '..', 'data', 'global_players.json');
  if (!fs.existsSync(globalPlayersPath)) return {};
  const globalPlayers = JSON.parse(fs.readFileSync(globalPlayersPath, 'utf8'));
  const map = {};
  for (const p of globalPlayers) {
    if (p.playerId && p.duprRating != null && p.duprRating != 'NR') {
      map[p.playerId] = {
        dupr: p.dupr ?? null,
        rating: Number(p.duprRating),
        numericId: p.duprNumericId ?? null,
      };
    }
  }
  return map;
}

const DAY_NAMES = ['Sundays', 'Mondays', 'Tuesdays', 'Wednesdays', 'Thursdays', 'Fridays', 'Saturdays'];

function computeTypicalDay(matchups) {
  const dayCounts = {};
  for (const m of matchups) {
    if (!m.scheduledTime) continue;
    const datePart = m.scheduledTime.split('T')[0];
    if (!datePart || !/^\d{4}-\d{2}-\d{2}$/.test(datePart)) continue;
    const [y, mo, d] = datePart.split('-').map(Number);
    const dayIndex = new Date(Date.UTC(y, mo - 1, d)).getUTCDay();
    dayCounts[dayIndex] = (dayCounts[dayIndex] || 0) + 1;
  }
  if (Object.keys(dayCounts).length === 0) return null;
  const topDay = Object.entries(dayCounts).sort((a, b) => b[1] - a[1])[0][0];
  return DAY_NAMES[topDay];
}

function compileDivision(slug, divDataDir, outPath, detailOutPath, divisionMeta) {
  const asOf = readFetchedAt(divDataDir, path.dirname(outPath), slug);
  const feed = JSON.parse(fs.readFileSync(path.join(divDataDir, "matchups.json"), "utf8"));
  const playerListJson = JSON.parse(fs.readFileSync(path.join(divDataDir, "players.json"), "utf8"));
  const matchupDetailsJson = JSON.parse(fs.readFileSync(path.join(divDataDir, "matchupDetails.json"), "utf8"));
  const duprByPid = loadDuprByPid();
  const rosterPlayers = selectCanonicalRosterPlayers(firstValues(playerListJson) || [], duprByPid, divisionMeta);

  // A player can hold several roster rows in one division — rostered on one team
  // and subbing on others, occasionally rostered on two — each row carrying its
  // own team, captaincy and league rank. Anywhere we need the one row that
  // represents the player, resolve it with the same precedence the roster
  // dedupe uses (rostered over sub, then games played, then rank), rather than
  // taking whichever row arrived last: row order comes from the API's rank
  // ordering, which reshuffles whenever anyone's rank moves.
  const rosterBracket = getDivisionBracket(divisionMeta);
  const claimCanonicalRow = (map, key, p) => {
    if (!key) return;
    const held = map[key];
    if (!held || shouldPreferRosterPlayer(p, held, duprByPid, rosterBracket)) map[key] = p;
  };

  // Detail records keyed by matchup for O(1) lookups everywhere below.
  const detailById = new Map(matchupDetailsJson.map(x => [x.matchupId, x.details]));

  // Pod assignments as reported by the league's /teams endpoint, keyed by team name
  // (the only identifier the matchup feed and standings share). Missing file means
  // the division was cached before pods were fetched; pod detection falls back.
  const teamsPath = path.join(divDataDir, "teams.json");
  const podNameByTeam = new Map();
  if (fs.existsSync(teamsPath)) {
    const teamsJson = JSON.parse(fs.readFileSync(teamsPath, "utf8"));
    for (const t of (firstValues(teamsJson) || [])) {
      if (t.teamName) podNameByTeam.set(String(t.teamName).trim(), t.pod || null);
    }
  }

  const playoffMatchupsPath = path.join(divDataDir, "playoffMatchups.json");
  const playoffMatchupDetailsPath = path.join(divDataDir, "playoffMatchupDetails.json");
  const playoffFeed = fs.existsSync(playoffMatchupsPath)
    ? JSON.parse(fs.readFileSync(playoffMatchupsPath, "utf8"))
    : null;
  const playoffMatchupDetailsJson = fs.existsSync(playoffMatchupDetailsPath)
    ? JSON.parse(fs.readFileSync(playoffMatchupDetailsPath, "utf8"))
    : [];

  const matchups = (feed.$values || firstValues(feed) || []);

  // Teams that appear in at least one scheduled or completed matchup — used to
  // filter out placeholder entries (e.g. "Open Play") that exist in the player
  // roster but will never actually compete against anyone.
  const teamNamesWithMatchups = new Set(
    matchups.flatMap(m => [m.homeName, m.awayName]).filter(Boolean),
  );

  const TEAMNAME = {};
  const players = new Map();
  const teams = new Map();
  const weeksSeen = new Set();

  const ensureTeam = name => {
    if (!teams.has(name)) teams.set(name, { name, w: 0, l: 0, pf: 0, pa: 0, gw: 0, gl: 0 });
    return teams.get(name);
  };

  // Player ID -> primary (non-sub) team from the roster, so intra-league subs
  // are attributed to their home team in player records. Only players whose
  // team has actual matchups: players on placeholder teams (e.g. "Open Play")
  // are not rostered league members. This is the single source of truth for a
  // player's team, including for players rostered on more than one.
  const homeTeamByPid = {};
  const captainTeamByPid = {};
  // Player ID -> static profile info (firstName, lastName, gender) so
  // matchupPlayerStats entries don't need to repeat those fields.
  const playerInfoById = {};
  // A handful of players hold a rostered row on two teams at once. Pick the one
  // where the league ranks them highest rather than whichever row happens to
  // arrive last, so the attribution does not move when the roster file's order
  // does. Rank ascends, so the lowest number is the best standing.
  const homeRowByPid = {};
  const captainRowByPid = {};
  for (const p of rosterPlayers) {
    if (p.playerId) playerInfoById[p.playerId] = { firstName: p.firstName, lastName: p.lastName, gender: p.gender };
    if (p.isSub || !p.playerId || !p.teamName || !teamNamesWithMatchups.has(p.teamName)) continue;
    claimCanonicalRow(homeRowByPid, p.playerId, p);
    if (p.isCaptain) claimCanonicalRow(captainRowByPid, p.playerId, p);
  }
  for (const [pid, p] of Object.entries(homeRowByPid)) homeTeamByPid[pid] = p.teamName;
  for (const [pid, p] of Object.entries(captainRowByPid)) captainTeamByPid[pid] = p.teamName;

  // Player ID -> display name, built from the complete player roster
  // (players.json) so it resolves upcoming matchups too, whose
  // matchupPlayerStats has been omitted. Needed before the pre-season branch
  // below, which also renders posted lineups.
  const nameById = {};
  for (const [pid, info] of Object.entries(playerInfoById)) {
    nameById[pid] = norm(`${info.firstName || ''} ${info.lastName || ''}`);
  }

  // The reverse lookup, over the whole division roster — subs included, who are
  // absent from DATA.players but do appear in lineups. Lineups identify players
  // by name only, so this is what lets the dashboard join a lineup slot to the
  // client-side DUPR table (kept out of the compiled data so the DUPR workflow
  // can refresh ratings without a recompile). Names that two players share are
  // dropped rather than guessed at: a wrong join would silently rate the wrong
  // person.
  //
  // Only the part of this the dashboard can't already derive gets emitted — see
  // selectExtraPlayerIds.
  const playerIdsByName = {};
  const ambiguousNames = new Set();
  for (const [pid, name] of Object.entries(nameById)) {
    if (!name) continue;
    if (playerIdsByName[name] && playerIdsByName[name] !== pid) ambiguousNames.add(name);
    playerIdsByName[name] = pid;
  }
  for (const name of ambiguousNames) delete playerIdsByName[name];

  // A matchup whose lineups are filled and fully scored has a knowable result even
  // before the league closes it out. Resolve those into the feed here, once, so
  // every computation below — standings, player records, ratings, weekly rating
  // history, pair chemistry, format splits — counts them like any other result.
  // They stay flagged `provisional` so the UI can say the league hasn't confirmed
  // them yet. Everything from this point on reads the resolved pair; the raw
  // `matchups` / `detailById` only describe fixtures (schedule, pods, typical day),
  // where a result makes no difference.
  const teamNameById = {};
  for (const mu of [...matchups, ...((playoffFeed && (playoffFeed.$values || firstValues(playoffFeed))) || [])]) {
    if (mu.homeTeamId) teamNameById[mu.homeTeamId] = mu.homeName;
    if (mu.awayTeamId) teamNameById[mu.awayTeamId] = mu.awayName;
  }
  const {
    matchups: resolvedMatchups,
    detailById: resolvedDetailById,
    provisionalCount,
  } = applyProvisionalOutcomes(matchups, detailById, {
    // The lineups name who played but not on whose behalf: a player who turned
    // out for a team other than the one they're rostered on is a sub, and one the
    // division doesn't roster at all is an outside sub. Matches the league's own
    // isSub on 6065 of 6075 reported player-matchup rows.
    isSubForTeam: (playerId, teamId) => homeTeamByPid[playerId] !== teamNameById[teamId],
  });
  const completed = resolvedMatchups.filter(m => m.endResult);
  const provisionalNote = provisionalCount ? ` (${provisionalCount} provisional)` : '';
  console.log(`Processing stats for ${completed.length} completed matches${provisionalNote}.`);

  // A rostered player who hasn't logged a game yet: real identity, zeroed
  // stats, no rating. Used pre-season and for teams whose first match hasn't
  // been played while the rest of the division is under way.
  const blankRosterPlayer = (p) => ({
    name: norm(`${p.firstName} ${p.lastName}`), gender: p.gender,
    team: homeTeamByPid[p.playerId], matches: 0, outsideSub: false, isCaptain: !!p.isCaptain,
    gamesPlayed: 0, wins: 0, losses: 0, pointsWon: 0, totalPointsAgainst: 0,
    mixedWins: 0, mixedLosses: 0, genderWins: 0, genderLosses: 0,
    clutchWins: 0, clutchLosses: 0, log: [], games: [],
    winPct: 0, diff: 0, ppg: 0,
    leagueRank: p.ranking ?? null,
    rating: null, ratingGames: 0, confidence: 0,
    strengthOfPartners: null, strengthOfOpponents: null,
    ratingHistory: [], partners: [],
    playerId: p.playerId,
  });

  // Seed every rostered (non-sub) player on a team that actually has matchups.
  // Players who go on to appear in matchupPlayerStats get their real stats
  // merged over this; the rest stay 0-0 so their team page still has a roster.
  // Skips duplicate roster rows for players listed on more than one team, so
  // the team recorded here always matches homeTeamByPid.
  const seedRosterPlayers = () => {
    for (const p of rosterPlayers) {
      if (!p.playerId || p.isSub) continue;
      if (homeTeamByPid[p.playerId] !== p.teamName) continue;
      ensureTeam(p.teamName);
      if (!players.has(p.playerId)) players.set(p.playerId, blankRosterPlayer(p));
    }
  };

  // When the season hasn't started yet, seed teams and players directly from
  // the roster so the dashboard still shows something useful pre-season.
  if (!completed.length) {
    seedRosterPlayers();
    // The schedule decides who is in the division; the roster only decides who
    // has a roster. A team can have fixtures and no rostered player: the league
    // marks every row isSub until a captain confirms the roster, and
    // seedRosterPlayers skips subs, so nothing above would name that team.
    // 3.25 Womens went out that way — ten teams in the league's own team list
    // and a full round robin scheduled, but Pickleball Kingdom Hillsborough
    // missing from the standings while its thirteen fixtures showed on every
    // opponent's page.
    //
    // In-season this is already how it works, further down: teams come from the
    // matchups and the roster fills them in. Pre-season now matches, so the
    // division doesn't gain a team the moment its first match is scored.
    for (const mu of matchups) {
      if (mu.homeName) ensureTeam(mu.homeName);
      if (mu.awayName) ensureTeam(mu.awayName);
    }
    const teamArr = [...teams.values()].sort((a, b) => a.name.localeCompare(b.name));
    for (const t of teamArr) { t.diff = 0; t.gameDiff = 0; t.fmt = { mixed: [0, 0], male: [0, 0], female: [0, 0] }; t.power = null; }
    const playerArr = [...players.values()].sort((a, b) => a.name.localeCompare(b.name));
    // Build the schedule from all matchups (none completed yet). Lineups are
    // often posted well before the first match is played, so carry them through
    // here too — otherwise every team's upcoming schedule reads "Lineups have
    // not been posted yet" for the whole pre-season.
    const matches = matchups.map(m => {
      const rec = {
        result: m.endResult || null,
        week: m.weekNumber,
        home: m.homeName,
        away: m.awayName,
        time: m.scheduledTime || null,
        complete: false,
      };
      const pendingGames = buildPendingGames(resolvedDetailById.get(m.matchupId), nameById);
      if (pendingGames.length) rec.games = pendingGames;
      return rec;
    });
    // Pods are known pre-season: the league reports them, and the schedule implies them.
    divisionMeta = { ...(divisionMeta || {}), ...assignPods(teamArr, matchups, podNameByTeam) };
    const detailByPid = splitPlayerDetails(playerArr);
    const DATA = {
      players: playerArr, teams: teamArr, duos: [], matches, playoffs: [],
      extraPlayerIds: selectExtraPlayerIds(playerArr, playerIdsByName),
      meta: {
        matchesPlayed: 0, provisionalMatches: 0, weeks: "", asOf,
        totalPlayers: playerArr.length, ratingHistoryWeeks: [], divisionSlug: slug,
        hasPlayoffs: false,
        typicalDay: computeTypicalDay(matchups),
        detailFile: path.basename(detailOutPath),
        ...(divisionMeta || {}),
      },
    };
    writeDataScript(outPath, DATA);
    writeDetailScript(detailOutPath, slug, detailByPid);
    console.log(`  ✓ ${path.basename(outPath)} written (pre-season roster only)`);
    return DATA.meta.asOf;
  }

  // Seed teams from all matchups (completed + scheduled) so teams that haven't
  // played yet still appear in the standings with a 0-0 record, and seed their
  // rosters too — otherwise those teams' pages would show no players at all.
  for (const mu of matchups) {
    if (mu.homeName) ensureTeam(mu.homeName);
    if (mu.awayName) ensureTeam(mu.awayName);
  }
  seedRosterPlayers();

  for (const mu of completed) {
    const d = resolvedDetailById.get(mu.matchupId) || null;

    const homeId = mu.homeTeamId, awayId = mu.awayTeamId;
    TEAMNAME[homeId] = mu.homeName; TEAMNAME[awayId] = mu.awayName;
    weeksSeen.add(mu.weekNumber);

    const ps = d ? ((d.matchupPlayerStats && d.matchupPlayerStats.$values) || []) : [];
    const games = d ? ((d.lineups && d.lineups.lineups && d.lineups.lineups.$values) || []) : [];

    let hgw = 0, agw = 0;
    for (const g of games) (g.homeScore > g.awayScore ? hgw++ : agw++);

    const home = { id: homeId, name: mu.homeName, points: mu.homePoints, gw: hgw };
    const away = { id: awayId, name: mu.awayName, points: mu.awayPoints, gw: agw };
    const homeWon = mu.endResult === 'home';

    ensureTeam(home.name); ensureTeam(away.name);
    teams.get(home.name).pf += home.points; teams.get(home.name).pa += away.points;
    teams.get(away.name).pf += away.points; teams.get(away.name).pa += home.points;
    teams.get(home.name).gw += hgw; teams.get(home.name).gl += agw;
    teams.get(away.name).gw += agw; teams.get(away.name).gl += hgw;
    (homeWon ? teams.get(home.name) : teams.get(away.name)).w++;
    (homeWon ? teams.get(away.name) : teams.get(home.name)).l++;

    const id2name = {};
    for (const p of ps) {
      const info = playerInfoById[p.playerId] || {};
      id2name[p.playerId] = norm(`${info.firstName || ''} ${info.lastName || ''}`);
    }

    // Build per-match lookups for intra-league subs: set of IDs and map to guest team name.
    const subPids = new Set();
    const subForByPid = {};
    for (const p of ps) {
      if (p.isSub && p.gamesPlayed) { subPids.add(p.playerId); subForByPid[p.playerId] = TEAMNAME[p.teamId]; }
    }

    for (const p of ps) {
      if (!p.gamesPlayed) continue;
      const pid = p.playerId;
      if (!players.has(pid)) {
        const info = playerInfoById[pid] || {};
        players.set(pid, {
          name: norm(`${info.firstName || ''} ${info.lastName || ''}`), gender: info.gender,
          team: homeTeamByPid[pid] || TEAMNAME[p.teamId], matches: 0,
          outsideSub: !homeTeamByPid[pid],
          isCaptain: false,
          gamesPlayed: 0, wins: 0, losses: 0, pointsWon: 0, totalPointsAgainst: 0,
          mixedWins: 0, mixedLosses: 0, genderWins: 0, genderLosses: 0,
          clutchWins: 0, clutchLosses: 0, log: [], games: [],
          playerId: pid,
        });
      }
      const P = players.get(pid);
      if (!p.isSub) P.matches++;
      P.gamesPlayed += p.gamesPlayed; P.wins += p.wins; P.losses += p.losses;
      P.pointsWon += p.pointsWon; P.totalPointsAgainst += p.totalPointsAgainst;
      P.mixedWins += p.mixedWins; P.mixedLosses += p.mixedLosses;
      P.genderWins += p.genderWins; P.genderLosses += p.genderLosses;
      P.clutchWins += p.clutchWins; P.clutchLosses += p.clutchLosses;

      const mine = (p.teamId === homeId) ? home : away;
      const opp = (p.teamId === homeId) ? away : home;
      const teamWon = (mine === home) ? homeWon : !homeWon;
      P.log.push({
        week: mu.weekNumber, opp: opp.name, homeAway: (mine === home) ? "H" : "A",
        w: p.wins, l: p.losses, gp: p.gamesPlayed, pf: p.pointsWon, pa: p.totalPointsAgainst,
        mx: [p.mixedWins, p.mixedLosses], gn: [p.genderWins, p.genderLosses],
        cl: [p.clutchWins, p.clutchLosses],
        teamRes: teamWon ? "W" : "L", teamGW: mine.gw, teamGL: opp.gw,
        sub: p.isSub ? 1 : 0, subFor: p.isSub ? TEAMNAME[p.teamId] : null,
      });
    }

    for (const g of games) {
      const persp = [
        [g.homePlayerId1, g.homePlayerId2, away.name, g.awayPlayerId1, g.awayPlayerId2, g.homeScore, g.awayScore],
        [g.homePlayerId2, g.homePlayerId1, away.name, g.awayPlayerId1, g.awayPlayerId2, g.homeScore, g.awayScore],
        [g.awayPlayerId1, g.awayPlayerId2, home.name, g.homePlayerId1, g.homePlayerId2, g.awayScore, g.homeScore],
        [g.awayPlayerId2, g.awayPlayerId1, home.name, g.homePlayerId1, g.homePlayerId2, g.awayScore, g.homeScore],
      ];
      for (const [me, partner, oppTeam, o1, o2, my, their] of persp) {
        const P = players.get(me);
        if (!P) continue;
        P.games.push({
          wk: mu.weekNumber, opp: oppTeam, t: g.matchType,
          with: id2name[partner] || "", vs: [id2name[o1] || "", id2name[o2] || ""],
          f: my, a: their, w: my > their ? 1 : 0, ff: isForfeit(g) ? 1 : 0,
          sub: subForByPid[me] ? 1 : 0, subFor: subForByPid[me] || null,
        });
      }
    }
  }

  let rankByPid = {};
  let rankByName = {};
  try {
    const list = rosterPlayers;
    // Each of a player's roster rows carries its own league rank — someone who
    // subbed for two teams has two partial records, and the league ranks each.
    // Report their best standing: the rostered row when there is one, else the
    // strongest rank among the sub rows. Note this deliberately differs from
    // claimCanonicalRow, which prefers the row with the most games played: that
    // is the right question for "which team is this player on", but here the
    // answer wanted is the player's best rank, per the rule this replaces.
    //
    // That old rule was "first row wins", which only landed on the best rank
    // because the API handed us the file in rank order; it silently changed
    // answer whenever anyone's rank shifted that order.
    const claimBestRank = (map, key, p) => {
      const rank = Number(p.ranking);
      if (!key || !Number.isFinite(rank)) return;
      const held = map[key];
      const better = !held
        || (held.isSub && !p.isSub)
        || (held.isSub === !!p.isSub && rank < held.rank);
      if (better) map[key] = { rank, isSub: !!p.isSub };
    };
    const bestRankByPid = {};
    const bestRankByName = {};
    for (const p of list) {
      if (p.ranking == null) continue;
      if (p.playerId) claimBestRank(bestRankByPid, p.playerId, p);
      claimBestRank(bestRankByName, norm(`${p.firstName} ${p.lastName}`), p);
    }
    for (const [pid, v] of Object.entries(bestRankByPid)) rankByPid[pid] = v.rank;
    for (const [name, v] of Object.entries(bestRankByName)) rankByName[name] = v.rank;
  } catch (e) {
    console.warn("⚠️ League rank extraction encountered anomalies:", e.message);
  }

  // Ridge-APM ratings: partner/opponent-adjusted net points per game.
  const ratings = computeRatings(completed, resolvedDetailById);
  const { historyByPid, weeks: ratingHistoryWeeks } = computeWeeklyRatingHistory(completed, resolvedDetailById, players);
  // Teammate-pair chemistry (over/under-performance vs. rating-expected result).
  const { duos, partnersByPid } = computePairSynergy(completed, resolvedDetailById, ratings, homeTeamByPid, playerInfoById);

  const playerArr = [];
  for (const [pid, P] of players.entries()) {
    P.winPct = P.gamesPlayed ? round1(100 * P.wins / P.gamesPlayed) : 0;
    P.diff = P.pointsWon - P.totalPointsAgainst;
    P.ppg = P.gamesPlayed ? round1(P.pointsWon / P.gamesPlayed) : 0;
    P.leagueRank = rankByPid[pid] ?? rankByName[norm(P.name)] ?? null;
    P.rating = ratings[pid] ? ratings[pid].rating : null;
    P.ratingGames = ratings[pid] ? ratings[pid].ratingGames : 0;
    P.confidence = ratings[pid] ? ratings[pid].confidence : 0;
    P.strengthOfPartners = ratings[pid] ? ratings[pid].strengthOfPartners : null;
    P.strengthOfOpponents = ratings[pid] ? ratings[pid].strengthOfOpponents : null;
    P.ratingHistory = historyByPid[pid] || [];
    P.partners = partnersByPid[pid] || [];
    P.isCaptain = captainTeamByPid[pid] === P.team;
    P.log.sort((a, b) => a.week - b.week);
    P.games.sort((a, b) => a.wk - b.wk);
    playerArr.push(P);
  }
  playerArr.sort((a, b) => (b.winPct - a.winPct) || (b.diff - a.diff));

  const teamArr = [...teams.values()];
  for (const t of teamArr) {
    t.diff = t.pf - t.pa;
    t.gameDiff = t.gw - t.gl;
  }
  teamArr.sort((a, b) => (
    ratio(b.w, b.l) - ratio(a.w, a.l) ||
    ratio(b.gw, b.gl) - ratio(a.gw, a.gl) ||
    (b.diff - a.diff) ||
    a.name.localeCompare(b.name)
  ));

  // Team power: games-weighted average of a roster's player ratings, ranked.
  const rosterRatings = {};
  for (const P of playerArr) {
    if (P.rating == null) continue;
    (rosterRatings[P.team] = rosterRatings[P.team] || []).push(P);
  }
  for (const t of teamArr) {
    const ps = rosterRatings[t.name] || [];
    let wsum = 0, w = 0;
    for (const P of ps) { const g = P.ratingGames || 0; wsum += P.rating * g; w += g; }
    t.power = w ? Math.round(wsum / w * 10) / 10 : null;
  }
  [...teamArr].filter(t => t.power != null).sort((a, b) => b.power - a.power)
    .forEach((t, i) => { t.powerRank = i + 1; });

  // Assign each team its pod. `pod` is a 1-based integer and `podName` the league's
  // label for it; podCount === 1 means the division isn't split.
  {
    const podMeta = assignPods(teamArr, matchups, podNameByTeam);
    // Recompute powerRank within the group the team page shows the team in — the
    // league's own pod where it publishes one, the schedule section otherwise. The
    // page prints this as "#3 of 6", and the 6 is that group's size, so a rank
    // scoped to anything else would contradict its own denominator.
    for (const group of displayPodGroups(teamArr, podMeta)) {
      if (!group.label) continue; // undivided: the division-wide ranking already stands
      group.teams.filter(t => t.power != null)
        .sort((a, b) => b.power - a.power)
        .forEach((t, i) => { t.powerRank = i + 1; });
    }
    // Expose pod metadata so the UI can render separate standings sections.
    divisionMeta = { ...(divisionMeta || {}), ...podMeta };
  }

  // Full match list (completed + scheduled) and per-team format splits, for the
  // team pages: match history by week, upcoming schedule, mixed/men's/women's.
  // Build sub-player lookup for completed matchups (names shown next to match results).
  // Reads the resolved details so a provisional result names its subs too — the
  // league hasn't published stat rows for it, but the synthesized ones carry isSub.
  const subNamesByMatchupId = {};
  for (const [matchupId, details] of resolvedDetailById) {
    const subs = [];
    const players = (details && details.matchupPlayerStats && details.matchupPlayerStats.$values) || [];
    // Collect the set of player IDs that appear as regular (non-sub) roster members in this matchup.
    const rosterPids = new Set(players.filter(p => !p.isSub).map(p => p.playerId));
    for (const p of players) {
      // Only mark as sub if not also listed as a regular roster member in the same matchup.
      if (p.isSub && !rosterPids.has(p.playerId)) subs.push(nameById[p.playerId] || p.playerId);
    }
    if (subs.length) subNamesByMatchupId[matchupId] = subs;
  }
  const fmt = {};
  const ensureFmt = n => fmt[n] || (fmt[n] = { mixed: [0, 0], male: [0, 0], female: [0, 0] });
  const matches = [];
  for (const m of resolvedMatchups) {
    const d = resolvedDetailById.get(m.matchupId);
    const complete = !!m.endResult;
    const rec = { result: m.endResult, week: m.weekNumber, home: m.homeName, away: m.awayName, time: m.scheduledTime || null, complete };
    if (m.provisional) rec.provisional = true;
    if (complete && d) {
      let hgw = 0, agw = 0;
      const glist = [];
      for (const g of (d.lineups && d.lineups.lineups && d.lineups.lineups.$values) || []) {
        const homeWin = g.homeScore > g.awayScore;
        homeWin ? hgw++ : agw++;
        if (["mixed", "male", "female"].includes(g.matchType)) {
          ensureFmt(m.homeName)[g.matchType][homeWin ? 0 : 1]++;
          ensureFmt(m.awayName)[g.matchType][homeWin ? 1 : 0]++;
        }
        glist.push({
          t: g.matchType, ff: isForfeit(g) ? 1 : 0, hs: g.homeScore, as: g.awayScore,
          h: [nameById[g.homePlayerId1] || "", nameById[g.homePlayerId2] || ""],
          a: [nameById[g.awayPlayerId1] || "", nameById[g.awayPlayerId2] || ""],
        });
      }
      Object.assign(rec, { homePoints: m.homePoints, awayPoints: m.awayPoints, homeGW: hgw, awayGW: agw, games: glist, subs: subNamesByMatchupId[m.matchupId] || [] });
    } else if (complete) {
      // Details not yet available but the matchup is complete: include the score totals
      // from the matchup record so the UI can display the result without showing "undefined".
      console.warn(`⚠️ Completed match ${m.matchupId} (${m.homeName} vs ${m.awayName}, week ${m.weekNumber}) has no detail data — game record will show 0–0. Re-run the fetcher to pick up missing scores.`);
      Object.assign(rec, { homePoints: m.homePoints, awayPoints: m.awayPoints, homeGW: 0, awayGW: 0, games: [], subs: [] });
    } else if (d) {
      const pendingGames = buildPendingGames(d, nameById);
      if (pendingGames.length) {
        Object.assign(rec, { games: pendingGames });
      }
    }
    matches.push(rec);
  }
  for (const t of teamArr) t.fmt = fmt[t.name] || { mixed: [0, 0], male: [0, 0], female: [0, 0] };

  const weeks = [...weeksSeen].sort((a, b) => a - b);
  const weekLabel = weeks.length ? (weeks[0] === weeks[weeks.length - 1] ? `${weeks[0]}` : `${weeks[0]}-${weeks[weeks.length - 1]}`) : "";

  const typicalDay = computeTypicalDay(matchups);

  // Build the playoffs list from playoff matchups if available. Playoff results
  // are display-only — the regular season alone drives standings and ratings — but
  // they get the same provisional resolution so a scored-but-unconfirmed bracket
  // game shows its result, flagged, like a regular-season one.
  const rawPlayoffMatchups = (playoffFeed && (playoffFeed.$values || firstValues(playoffFeed))) || [];
  const rawPlayoffDetailById = new Map((playoffMatchupDetailsJson || []).map(x => [x.matchupId, x.details]));
  const {
    matchups: playoffMatchups,
    detailById: playoffDetailById,
  } = applyProvisionalOutcomes(rawPlayoffMatchups, rawPlayoffDetailById, {
    isSubForTeam: (playerId, teamId) => homeTeamByPid[playerId] !== teamNameById[teamId],
  });
  const playoffs = [];
  for (const m of playoffMatchups) {
    const d = playoffDetailById.get(m.matchupId);
    const complete = !!m.endResult;
    const rec = {
      result: m.endResult || null, round: m.weekNumber, home: m.homeName, away: m.awayName,
      time: m.scheduledTime || null, complete,
      homeSeed: m.homePodRanking ?? null, awaySeed: m.awayPodRanking ?? null,
    };
    if (m.provisional) rec.provisional = true;
    if (complete && d) {
      let hgw = 0, agw = 0;
      const glist = [];
      for (const g of (d.lineups && d.lineups.lineups && d.lineups.lineups.$values) || []) {
        const homeWin = g.homeScore > g.awayScore;
        homeWin ? hgw++ : agw++;
        glist.push({
          t: g.matchType, ff: isForfeit(g) ? 1 : 0, hs: g.homeScore, as: g.awayScore,
          h: [nameById[g.homePlayerId1] || "", nameById[g.homePlayerId2] || ""],
          a: [nameById[g.awayPlayerId1] || "", nameById[g.awayPlayerId2] || ""],
        });
      }
      Object.assign(rec, { homePoints: m.homePoints, awayPoints: m.awayPoints, homeGW: hgw, awayGW: agw, games: glist });
    } else if (d) {
      const pendingGames = buildPendingGames(d, nameById);
      if (pendingGames.length) Object.assign(rec, { games: pendingGames });
    }
    playoffs.push(rec);
  }

  const detailByPid = splitPlayerDetails(playerArr);

  const DATA = {
    players: playerArr, teams: teamArr, duos, matches, playoffs,
    extraPlayerIds: selectExtraPlayerIds(playerArr, playerIdsByName),
    meta: {
      matchesPlayed: completed.length, provisionalMatches: provisionalCount, weeks: weekLabel,
      // A full timestamp, not a date. The bot refreshes every six hours, so a
      // date-only stamp described four different datasets and gave a reader no
      // way to tell whether the refresh they were waiting on had landed.
      asOf, totalPlayers: playerArr.length,
      ratingHistoryWeeks, divisionSlug: slug,
      hasPlayoffs: playoffs.length > 0,
      typicalDay,
      detailFile: path.basename(detailOutPath),
      ...(divisionMeta || {}),
    },
  };

  writeDataScript(outPath, DATA);
  writeDetailScript(detailOutPath, slug, detailByPid);
  console.log(`  ✓ ${path.basename(outPath)} written (+ ${path.basename(detailOutPath)})`);
  return DATA.meta.asOf;
}

// One season of one league, into cpl/<league>/<season>/.
function compileSeason(league, season, { divisionSlugs = null } = {}) {
  const { divisionsFile } = getLeagueDataConfig(league);
  const dataDir = seasonCacheDir(league, season.slug);
  const cplDir = seasonOutDir(path.join(__dirname, '../..'), league, season.slug);

  const divisionsPath = path.join(dataDir, divisionsFile);
  if (!fs.existsSync(divisionsPath)) {
    throw new Error(`${season.slug}/${divisionsFile} not found — run the fetcher first.`);
  }
  const allDivisions = JSON.parse(fs.readFileSync(divisionsPath, 'utf8'));
  const sortedDivisions = sortDivisionsForLeague(league, allDivisions);

  if (!fs.existsSync(cplDir)) {
    fs.mkdirSync(cplDir, { recursive: true });
  }

  const divisionsToCompile = filterDivisions(allDivisions, { divisionSlugs });
  console.log(`\n${league} ${season.slug} (${season.status}): compiling ${divisionsToCompile.length} / ${allDivisions.length} divisions.`);

  const failedDivisions = [];
  const asOfBySlug = new Map();
  for (const div of divisionsToCompile) {
    const label = formatDivisionLabel(div);
    const divDataDir = path.join(dataDir, div.slug);
    if (!fs.existsSync(divDataDir)) {
      console.warn(`  ⚠️ No data dir for ${div.slug} (${label}${div.divisionName}), skipping.`);
      continue;
    }
    console.log(`\nCompiling: ${label}${div.divisionName} (${div.slug})`);
    try {
      const outFile = `data-${div.slug}.js`;
      const detailFile = `detail-${div.slug}.js`;
      // Mens/Womens divisions come from the /gender API leg: single-gender
      // rosters, no mixed play. The dashboard drops the mixed splits and the
      // gender filter when this is set.
      const singleGender = isGenderApiBase(div.apiBase)
        ? travelDivisionGender(div.divisionName)
        : null;
      const asOf = compileDivision(div.slug, divDataDir, path.join(cplDir, outFile), path.join(cplDir, detailFile), {
        clubName: div.clubName || '',
        divisionName: div.divisionName,
        leagueType: league,
        // The season a dataset belongs to travels with the dataset, not only
        // with the URL that served it. app.js needs it to label an archived
        // dashboard as archived, and a data file that has been saved, moved or
        // linked from somewhere else still has to be able to say which season
        // it is.
        seasonSlug: season.slug,
        seasonLabel: season.label,
        seasonStatus: season.status,
        ...(league === 'travel' && div.regionName ? { regionName: div.regionName } : {}),
        ...(singleGender ? { singleGender } : {}),
      });
      if (asOf) asOfBySlug.set(`${league}/${season.slug}/${div.slug}`, asOf);
    } catch (err) {
      console.warn(`  ⚠️ Skipped ${div.slug}: ${err.message}`);
      failedDivisions.push({
        league,
        slug: div.slug,
        name: `${season.slug} ${label}${div.divisionName}`,
        error: err.message,
      });
    }
  }

  // The page shell and the three-string bootstrap. Both are generated per season
  // directory from one hand-written template per league (_cpl/templates/), so a
  // change to the dashboard markup reaches every season including the archived
  // ones — which is the point: they are served by the same app.js.
  fs.writeFileSync(path.join(cplDir, 'index.html'), readDashboardTemplate(league));
  fs.writeFileSync(path.join(cplDir, 'bootstrap.js'), buildBootstrapSource({
    league,
    season: season.slug,
    landingSlug: getLandingSlug(league, sortedDivisions),
  }));

  return {
    failedDivisions,
    matchedSlugs: divisionsToCompile.map((div) => div.slug),
    asOfBySlug,
  };
}

function divisionsFileFor(league) {
  return getLeagueDataConfig(league).divisionsFile;
}

// The hand-written dashboard shell for a league. There is exactly one per
// league and it is copied into every season directory verbatim — all of its
// relative paths are already two levels up, which is true of every season
// directory and of none of the old flat one.
function readDashboardTemplate(league) {
  return fs.readFileSync(path.join(__dirname, '..', 'templates', `${league}.html`), 'utf8');
}

async function compileDashboardHtml(league = 'local', { divisionSlugs = null, seasonSlugs = null } = {}) {
  console.log(`\n--- Phase 2: Processing Stats & Building View (${league}) ---`);
  const rootDir = path.join(__dirname, '../..');

  const runtimePath = path.join(rootDir, 'cpl', 'bootstrap-runtime.js');
  fs.writeFileSync(runtimePath, buildBootstrapRuntimeSource());
  // The shared utils are UMD: the same file serves the pipeline via require()
  // and the dashboards as window.CPLShared. Copy it verbatim into cpl/.
  fs.copyFileSync(path.join(__dirname, 'shared.js'), path.join(rootDir, 'cpl', 'shared.js'));

  const seasons = readLeagueSeasons(league);
  if (!seasons.length) {
    throw new Error(`No seasons cached for the ${league} league — run the fetcher first.`);
  }
  const requested = Array.isArray(seasonSlugs) ? new Set(seasonSlugs) : null;
  const seasonsToCompile = requested
    ? seasons.filter((season) => requested.has(season.slug))
    : seasons;

  const failedDivisions = [];
  const matchedSlugs = [];
  const asOfBySlug = new Map();

  for (const season of seasonsToCompile) {
    // A season upstream lists but nothing has ever fetched. That is the normal
    // resting state for any season older than the archive we chose to backfill:
    // seasons.json is a faithful record of what the API offers, and offering a
    // season is not the same as this site holding it. Only a season named
    // explicitly by --season is worth failing over, because there the caller
    // asked for it by name.
    if (!requested && !fs.existsSync(path.join(seasonCacheDir(league, season.slug), divisionsFileFor(league)))) {
      console.log(`  · ${league} ${season.slug}: no cached data, skipping (never fetched).`);
      continue;
    }
    try {
      const result = compileSeason(league, season, { divisionSlugs });
      failedDivisions.push(...result.failedDivisions);
      matchedSlugs.push(...result.matchedSlugs);
      for (const [key, value] of result.asOfBySlug) asOfBySlug.set(key, value);
    } catch (err) {
      console.warn(`  ⚠️ Skipped season ${season.slug}: ${err.message}`);
      failedDivisions.push({
        league,
        slug: `(${season.slug})`,
        name: `${league} ${season.slug}`,
        error: err.message,
      });
    }
  }

  // The stub at /cpl/<league>/, which every pre-seasons link and every stale
  // bookmark still points at.
  const leagueDir = path.join(rootDir, 'cpl', league);
  fs.mkdirSync(leagueDir, { recursive: true });
  fs.writeFileSync(path.join(leagueDir, 'index.html'), buildLeagueRedirectHtml({
    label: LEAGUE_LABELS[league] || league,
  }));
  fs.writeFileSync(path.join(leagueDir, 'redirect.js'), buildLeagueRedirectSource({ league }));

  if (failedDivisions.length) {
    console.error(`\n⚠️ Phase 2 finished with ${failedDivisions.length} failed division(s).`);
  } else {
    console.log('\n✓ Phase 2 complete.');
  }
  return { failedDivisions, matchedSlugs, asOfBySlug };
}

// Pack the player index with a string table: names, teams, divisions and even
// playerIds repeat across divisions, so interning them cuts the file to a
// fraction of the plain-JSON size. Decoded client-side by CPLShared.getPlayerIndex().
// Entry layout: [name, team, divisionRow, playerId|-1, flags(1=captain, 2=sub)],
// where divisionRow points into a table of
// [slug, divisionName, league(0=local,1=travel), club, season, seasonLabel,
//  archived(0|1)].
// Packs the finder index, which is one row per (player, division) across every
// league — the largest asset the site ships.
//
// A division's label, league and club are properties of the division, not of
// the player, so they live in a table of ~22 rows that each entry points at
// rather than being repeated thousands of times.
//
// playerId stays, even though the UUIDs are over half the compressed file.
// Dropping them for a name slug was tried and reverted: the finder and the DUPR
// audit both look ratings up by id, so removing the column forced a second,
// name-keyed copy of every rating into the repo, and left the handful of
// players who share a display name with no rating shown at all. One id-keyed
// table that everything reads is worth more than the bytes.
function packPlayerIndex(entries) {
  const table = () => {
    const list = [];
    const index = new Map();
    return {
      list,
      intern: (value) => {
        if (value == null || value === '') return -1;
        let at = index.get(value);
        if (at === undefined) {
          at = list.length;
          list.push(value);
          index.set(value, at);
        }
        return at;
      },
    };
  };

  const names = table();
  const teams = table();
  const ids = table();
  // Keyed by slug: a division's other facts never vary within one. A division
  // slug is the first eight characters of its UUID and so is unique across
  // seasons too, but the key carries the season anyway — a duplicate slug across
  // two seasons would otherwise silently merge two rosters into one row.
  const divisionKeys = [];
  const divisionAt = new Map();
  const divisionRow = (entry) => {
    const key = `${entry.league}/${entry.season}/${entry.slug}`;
    let at = divisionAt.get(key);
    if (at === undefined) {
      at = divisionKeys.length;
      divisionKeys.push([
        entry.slug,
        entry.division,
        entry.league === 'travel' ? 1 : 0,
        entry.club || '',
        entry.season,
        entry.seasonLabel,
        entry.archived ? 1 : 0,
      ]);
      divisionAt.set(key, at);
    }
    return at;
  };

  const packed = entries.map((entry) => [
    names.intern(entry.name),
    teams.intern(entry.team),
    divisionRow(entry),
    ids.intern(entry.playerId),
    (entry.isCaptain ? 1 : 0) | (entry.isSub ? 2 : 0),
  ]);

  return { n: names.list, t: teams.list, d: divisionKeys, i: ids.list, e: packed };
}

// Builds the cross-league outputs derived from every division's roster:
// cpl/player-index.js (packed finder index) and cpl/dupr-audit/data.js
// (precomputed audit rows, so the audit page no longer downloads every
// division dataset), plus the DUPR tables each page shape needs. DUPR values
// stay in their own files, which the DUPR workflow updates without recompiling.
function buildPlayerIndex({ asOfBySlug = new Map() } = {}) {
  console.log('\n--- Building player index ---');
  const rootDir = path.join(__dirname, '../..');

  // The catalog is built from the cache rather than from what this run compiled,
  // so it stays complete after a single-league or single-division build — same
  // reasoning as the player index below it.
  writeCatalog(rootDir, { asOfBySlug });

  // Build a playerId → { dupr, rating } lookup from global_players.json for canonical player deduplication.
  const globalPlayersPath = path.join(__dirname, '..', 'data', 'global_players.json');
  const duprByPlayerId = new Map();
  if (fs.existsSync(globalPlayersPath)) {
    const globalPlayers = JSON.parse(fs.readFileSync(globalPlayersPath, 'utf8'));
    for (const gp of globalPlayers) {
      if (gp.playerId && gp.dupr) {
        duprByPlayerId.set(gp.playerId, {
          dupr: gp.dupr,
          rating: gp.duprRating != null && gp.duprRating !== 'NR' ? Number(gp.duprRating) : null,
        });
      }
    }
  }

  const entries = [];
  const auditRows = [];
  // Division-level facts (label, league, bracket) live here keyed by slug
  // instead of being repeated on all ~3k audit rows.
  const auditDivisions = {};

  // Every season of every league, archived ones included. This is the promise
  // the archive makes: a season stops being fetched and stops being listed as
  // somewhere to go next, but the people who played in it stay findable by name
  // forever. It is also the only place an archived season's roster is read.
  for (const { league, season, divisions } of eachLeagueSeason()) {
    const dataDir = seasonCacheDir(league, season.slug);
    for (const div of divisions) {
      const playersPath = path.join(dataDir, div.slug, 'players.json');
      if (!fs.existsSync(playersPath)) continue;

      const bracket = getDivisionBracket({ divisionName: div.divisionName, leagueType: league });
      const raw = JSON.parse(fs.readFileSync(playersPath, 'utf8'));
      const players = selectCanonicalRosterPlayers(
        (raw && raw.$values) ? raw.$values : (Array.isArray(raw) ? raw : []),
        Object.fromEntries(duprByPlayerId.entries()),
        { divisionName: div.divisionName, leagueType: league },
      );
      for (const p of players) {
        if (!p.firstName && !p.lastName) continue;
        const name = norm(`${p.firstName || ''} ${p.lastName || ''}`);
        const entry = {
          name,
          team: p.teamName || '',
          division: div.divisionName,
          slug: div.slug,
          league,
          season: season.slug,
          seasonLabel: season.label,
          archived: season.status !== 'current',
          playerId: p.playerId || null,
        };
        if (div.clubName) entry.club = div.clubName;
        if (p.isCaptain) entry.isCaptain = true;
        if (p.isSub) entry.isSub = true;
        entries.push(entry);

        // Audit rows exist only for divisions whose name encodes a bracket.
        // Subs are excluded here — the audit only ever reports rostered
        // players. max: null encodes "no upper bound" (Infinity isn't JSON).
        //
        // Archived seasons are excluded too, and unlike the finder above that is
        // not a size decision. The audit asks whether a player's DUPR sits
        // inside the bracket of the division they are rostered in — a question
        // about a roster somebody can still act on. Run against a finished
        // season it compares last season's roster to today's ratings, which
        // reports drift that happened after the season ended as if it were a
        // misplacement during it.
        if (bracket && !p.isSub && season.status === 'current') {
          if (!auditDivisions[div.slug]) {
            auditDivisions[div.slug] = {
              division: div.clubName ? `${div.clubName} • ${div.divisionName}` : div.divisionName,
              league,
              // The audit only ever holds current seasons (see the guard on the
              // condition above), but which current season a division belongs to
              // is not obvious from its name — the two leagues are on different
              // calendars, so a page showing both is showing two season names at
              // once. The page groups and filters on this rather than on league.
              season: season.slug,
              seasonLabel: season.label,
              min: bracket.min,
              max: Number.isFinite(bracket.max) ? bracket.max : null,
            };
          }
          auditRows.push({
            name,
            playerId: p.playerId || null,
            team: p.teamName || '',
            slug: div.slug,
            gender: p.gender || '',
          });
        }
      }
    }
  }

  entries.sort((a, b) => a.name.localeCompare(b.name));

  const outPath = path.join(rootDir, 'cpl', 'player-index.js');
  // levels=2: the five tables each start a line, and every row inside them gets
  // its own, so a roster change shows up as the handful of lines it actually is.
  // Named for its shape — a table per column — rather than reusing
  // PLAYER_INDEX_PACKED, which held the single-string-table encoding this
  // replaced. A shared.js cached from before the change reads only the name it
  // knows, finds nothing there, and degrades to an empty finder instead of
  // throwing on a shape it predates. See getPlayerIndex in modules/shared.js.
  fs.writeFileSync(outPath, `window.PLAYER_INDEX_TABLES = ${expandJson(packPlayerIndex(entries), 2)};\n`);
  console.log(`✓ player-index.js written (${entries.length} player-division entries, packed).`);

  const auditDir = path.join(rootDir, 'cpl', 'dupr-audit');
  if (!fs.existsSync(auditDir)) fs.mkdirSync(auditDir, { recursive: true });
  const divisionLabel = (row) => (auditDivisions[row.slug] || {}).division || '';
  auditRows.sort((a, b) => a.name.localeCompare(b.name) || divisionLabel(a).localeCompare(divisionLabel(b)));
  const sortedDivisions = Object.fromEntries(
    Object.keys(auditDivisions).sort().map((slug) => [slug, auditDivisions[slug]]),
  );
  fs.writeFileSync(
    path.join(auditDir, 'data.js'),
    `window.DUPR_AUDIT = ${JSON.stringify({ divisions: sortedDivisions, rows: auditRows }, null, 1)};\n`,
  );
  console.log(`✓ dupr-audit/data.js written (${auditRows.length} roster rows).`);

  // The archive page's own rows: one per division of every archived season,
  // with its podium. Read from the compiled shards just above, so this runs
  // after them.
  writeArchiveData(rootDir, { eachLeagueSeason, seasonOutDir, sortDivisionsForLeague });

  // Keep a DUPR shard beside every division dataset. The DUPR refresh rewrites
  // these too, so ratings still update without a recompile; doing it here as
  // well is what guarantees a newly compiled division has one at all.
  const ratingsPath = path.join(rootDir, 'cpl', 'dupr-ratings.js');
  if (fs.existsSync(ratingsPath)) {
    const scope = {};
    new Function('window', fs.readFileSync(ratingsPath, 'utf8'))(scope);
    const shards = writeDuprShards(rootDir, scope.DUPR_RATINGS || {});
    console.log(`✓ ${shards} per-division DUPR shards written.`);
  }
}

module.exports = {
  compileDashboardHtml,
  buildPlayerIndex,
  compileDivision,
  selectCanonicalRosterPlayers,
  writeDataScript,
};
