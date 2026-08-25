const fs = require('fs');
const path = require('path');
const { filterDivisions, formatDivisionLabel, getLeagueDataConfig } = require('./division-utils');
const { normalizeName: norm, getTravelDivisionSortKey } = require('./shared');
const { getDivisionBracket } = require('./brackets');
const { assignPods } = require('./pods');
const {
  isForfeit,
  deriveProvisionalOutcome,
  computeRatings,
  computeWeeklyRatingHistory,
  computePairSynergy,
} = require('./ratings');
const {
  escapeBootstrapString,
  buildBootstrapDivisionsLiteral,
  buildBootstrapSource,
  buildBootstrapRuntimeSource,
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

function writeDataScript(outPath, data) {
  const asOf = data && data.meta ? data.meta.asOf : undefined;
  const divisionSlug = data && data.meta ? data.meta.divisionSlug : undefined;
  const scriptData = {
    ...data,
    meta: { ...((data && data.meta) || {}) },
  };
  delete scriptData.meta.asOf;
  const lines = [
    '(function () {',
    `  const DATA = ${JSON.stringify(scriptData)};`,
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

function compileDivision(slug, divDataDir, outPath, divisionMeta) {
  const feed = JSON.parse(fs.readFileSync(path.join(divDataDir, "matchups.json"), "utf8"));
  const playerListJson = JSON.parse(fs.readFileSync(path.join(divDataDir, "players.json"), "utf8"));
  const matchupDetailsJson = JSON.parse(fs.readFileSync(path.join(divDataDir, "matchupDetails.json"), "utf8"));
  const duprByPid = loadDuprByPid();
  const rosterPlayers = selectCanonicalRosterPlayers(firstValues(playerListJson) || [], duprByPid, divisionMeta);

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
  const completed = matchups.filter(m => m.endResult);
  console.log(`Processing stats for ${completed.length} completed matches.`);

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

  // When the season hasn't started yet, seed teams and players directly from
  // the roster so the dashboard still shows something useful pre-season.
  if (!completed.length) {
    for (const p of rosterPlayers) {
      if (!p.teamName || p.isSub || !teamNamesWithMatchups.has(p.teamName)) continue;
      ensureTeam(p.teamName);
      const pid = p.playerId;
      if (!players.has(pid)) {
        players.set(pid, {
          name: norm(`${p.firstName} ${p.lastName}`), gender: p.gender,
          team: p.teamName, matches: 0, outsideSub: false, isCaptain: !!p.isCaptain,
          gamesPlayed: 0, wins: 0, losses: 0, pointsWon: 0, totalPointsAgainst: 0,
          mixedWins: 0, mixedLosses: 0, genderWins: 0, genderLosses: 0,
          clutchWins: 0, clutchLosses: 0, log: [], games: [],
          winPct: 0, diff: 0, ppg: 0,
          leagueRank: p.ranking ?? null,
          rating: null, ratingGames: 0, confidence: 0,
          strengthOfPartners: null, strengthOfOpponents: null,
          ratingHistory: [], partners: [],
          dupr: p.dupr,
          playerId: pid,
        });
      }
    }
    const teamArr = [...teams.values()].sort((a, b) => a.name.localeCompare(b.name));
    for (const t of teamArr) { t.diff = 0; t.gameDiff = 0; t.fmt = { mixed: [0, 0], male: [0, 0], female: [0, 0] }; t.power = null; }
    const playerArr = [...players.values()].sort((a, b) => a.name.localeCompare(b.name));
    // Build the schedule from all matchups (none completed yet).
    const matches = matchups.map(m => ({
      result: m.endResult || null,
      week: m.weekNumber,
      home: m.homeName,
      away: m.awayName,
      time: m.scheduledTime || null,
      complete: false,
    }));
    // Pods are known pre-season: the league reports them, and the schedule implies them.
    divisionMeta = { ...(divisionMeta || {}), ...assignPods(teamArr, matchups, podNameByTeam) };
    const DATA = {
      players: playerArr, teams: teamArr, duos: [], matches, playoffs: [],
      meta: {
        matchesPlayed: 0, weeks: "", asOf: new Date().toISOString().slice(0, 10),
        totalPlayers: playerArr.length, ratingHistoryWeeks: [], divisionSlug: slug,
        hasPlayoffs: false,
        typicalDay: computeTypicalDay(matchups),
        ...(divisionMeta || {}),
      },
    };
    writeDataScript(outPath, DATA);
    console.log(`  ✓ data.js written to ${outPath} (pre-season roster only)`);
    return;
  }

  // Build a map of player ID -> primary (non-sub) team from the player roster so
  // that intra-league subs are attributed to their home team in player records.
  // Only map players whose team has actual matchups; players on placeholder teams
  // (e.g. "Open Play") should not be treated as rostered league members.
  const homeTeamByPid = {};
  const captainTeamByPid = {};
  // Build a map of player ID -> static profile info (firstName, lastName, gender)
  // so matchupPlayerStats entries don't need to repeat those fields.
  const playerInfoById = {};
  for (const p of rosterPlayers) {
    if (!p.isSub && p.playerId && p.teamName && teamNamesWithMatchups.has(p.teamName)) homeTeamByPid[p.playerId] = p.teamName;
    if (!p.isSub && p.isCaptain && p.playerId && p.teamName && teamNamesWithMatchups.has(p.teamName)) captainTeamByPid[p.playerId] = p.teamName;
    if (p.playerId) playerInfoById[p.playerId] = { firstName: p.firstName, lastName: p.lastName, gender: p.gender };
  }

  // Seed teams from all matchups (completed + scheduled) so teams that haven't
  // played yet still appear in the standings with a 0-0 record.
  for (const mu of matchups) {
    if (mu.homeName) ensureTeam(mu.homeName);
    if (mu.awayName) ensureTeam(mu.awayName);
  }

  for (const mu of completed) {
    const d = detailById.get(mu.matchupId) || null;

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
    for (const p of list) {
      const key = norm(`${p.firstName} ${p.lastName}`);
      if (p.ranking == null) continue;
      if (p.playerId && (rankByPid[p.playerId] == null || !p.isSub)) {
        rankByPid[p.playerId] = p.ranking;
      }
      if (rankByName[key] == null || !p.isSub || p.ranking < rankByName[key]) {
        rankByName[key] = p.ranking;
      }
    }
  } catch (e) {
    console.warn("⚠️ League rank extraction encountered anomalies:", e.message);
  }

  // Ridge-APM ratings: partner/opponent-adjusted net points per game.
  const ratings = computeRatings(completed, detailById);
  const { historyByPid, weeks: ratingHistoryWeeks } = computeWeeklyRatingHistory(completed, detailById, players);
  // Teammate-pair chemistry (over/under-performance vs. rating-expected result).
  const { duos, partnersByPid } = computePairSynergy(completed, detailById, ratings, homeTeamByPid, playerInfoById);

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
    if (podMeta.podCount > 1) {
      // Recompute powerRank within each pod so team pages show pod-relative rank.
      for (let p = 1; p <= podMeta.podCount; p++) {
        [...teamArr].filter(t => t.pod === p && t.power != null)
          .sort((a, b) => b.power - a.power)
          .forEach((t, i) => { t.powerRank = i + 1; });
      }
    }
    // Expose pod metadata so the UI can render separate standings sections.
    divisionMeta = { ...(divisionMeta || {}), ...podMeta };
  }

  // Full match list (completed + scheduled) and per-team format splits, for the
  // team pages: match history by week, upcoming schedule, mixed/men's/women's.
  // Build nameById from the complete player roster (players.json) so it works
  // even for upcoming matchups whose matchupPlayerStats has been omitted.
  const nameById = {};
  for (const [pid, info] of Object.entries(playerInfoById)) {
    nameById[pid] = norm(`${info.firstName || ''} ${info.lastName || ''}`);
  }
  // Build sub-player lookup for completed matchups (names shown next to match results).
  const subNamesByMatchupId = {};
  for (const e of matchupDetailsJson) {
    const subs = [];
    const players = (e.details && e.details.matchupPlayerStats && e.details.matchupPlayerStats.$values) || [];
    // Collect the set of player IDs that appear as regular (non-sub) roster members in this matchup.
    const rosterPids = new Set(players.filter(p => !p.isSub).map(p => p.playerId));
    for (const p of players) {
      // Only mark as sub if not also listed as a regular roster member in the same matchup.
      if (p.isSub && !rosterPids.has(p.playerId)) subs.push(nameById[p.playerId] || p.playerId);
    }
    if (subs.length) subNamesByMatchupId[e.matchupId] = subs;
  }
  const fmt = {};
  const ensureFmt = n => fmt[n] || (fmt[n] = { mixed: [0, 0], male: [0, 0], female: [0, 0] });
  const matches = [];
  for (const m of matchups) {
    const d = detailById.get(m.matchupId);
    const complete = !!m.endResult;
    const rec = { result: m.endResult, week: m.weekNumber, home: m.homeName, away: m.awayName, time: m.scheduledTime || null, complete };
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
      const provisional = deriveProvisionalOutcome(d);
      if (provisional) {
        const glist = provisional.games.map((g) => ({
          t: g.matchType, ff: isForfeit(g) ? 1 : 0, hs: g.homeScore, as: g.awayScore,
          h: [nameById[g.homePlayerId1] || "", nameById[g.homePlayerId2] || ""],
          a: [nameById[g.awayPlayerId1] || "", nameById[g.awayPlayerId2] || ""],
        }));
        Object.assign(rec, {
          complete: true,
          provisional: true,
          result: provisional.result,
          homePoints: provisional.homePoints,
          awayPoints: provisional.awayPoints,
          homeGW: provisional.homeGW,
          awayGW: provisional.awayGW,
          games: glist,
          subs: subNamesByMatchupId[m.matchupId] || [],
        });
        matches.push(rec);
        continue;
      }
      const pendingGames = ((d.lineups && d.lineups.lineups && d.lineups.lineups.$values) || [])
        .filter((g) => g.homePlayerId1 && g.homePlayerId2 && g.awayPlayerId1 && g.awayPlayerId2)
        .map((g) => ({
          t: g.matchType,
          h: [nameById[g.homePlayerId1] || "", nameById[g.homePlayerId2] || ""],
          a: [nameById[g.awayPlayerId1] || "", nameById[g.awayPlayerId2] || ""],
        }));
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

  // Build the playoffs list from playoff matchups if available.
  const playoffMatchups = (playoffFeed && (playoffFeed.$values || firstValues(playoffFeed))) || [];
  const playoffDetailById = new Map((playoffMatchupDetailsJson || []).map(x => [x.matchupId, x.details]));
  const playoffs = [];
  for (const m of playoffMatchups) {
    const d = playoffDetailById.get(m.matchupId);
    const complete = !!m.endResult;
    const rec = {
      result: m.endResult || null, round: m.weekNumber, home: m.homeName, away: m.awayName,
      time: m.scheduledTime || null, complete,
      homeSeed: m.homePodRanking ?? null, awaySeed: m.awayPodRanking ?? null,
    };
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
      const provisional = deriveProvisionalOutcome(d);
      if (provisional) {
        const glist = provisional.games.map((g) => ({
          t: g.matchType, ff: isForfeit(g) ? 1 : 0, hs: g.homeScore, as: g.awayScore,
          h: [nameById[g.homePlayerId1] || "", nameById[g.homePlayerId2] || ""],
          a: [nameById[g.awayPlayerId1] || "", nameById[g.awayPlayerId2] || ""],
        }));
        Object.assign(rec, {
          complete: true,
          provisional: true,
          result: provisional.result,
          homePoints: provisional.homePoints,
          awayPoints: provisional.awayPoints,
          homeGW: provisional.homeGW,
          awayGW: provisional.awayGW,
          games: glist,
        });
        playoffs.push(rec);
        continue;
      }
      const pendingGames = ((d.lineups && d.lineups.lineups && d.lineups.lineups.$values) || [])
        .filter((g) => g.homePlayerId1 && g.homePlayerId2 && g.awayPlayerId1 && g.awayPlayerId2)
        .map((g) => ({
          t: g.matchType,
          h: [nameById[g.homePlayerId1] || "", nameById[g.homePlayerId2] || ""],
          a: [nameById[g.awayPlayerId1] || "", nameById[g.awayPlayerId2] || ""],
        }));
      if (pendingGames.length) Object.assign(rec, { games: pendingGames });
    }
    playoffs.push(rec);
  }

  const DATA = {
    players: playerArr, teams: teamArr, duos, matches, playoffs,
    meta: {
      matchesPlayed: completed.length, weeks: weekLabel,
      asOf: new Date().toISOString().slice(0, 10), totalPlayers: playerArr.length,
      ratingHistoryWeeks, divisionSlug: slug,
      hasPlayoffs: playoffs.length > 0,
      typicalDay,
      ...(divisionMeta || {}),
    },
  };

  writeDataScript(outPath, DATA);
  console.log(`  ✓ data.js written to ${outPath}`);
}

async function compileDashboardHtml(league = 'local', { primaryOnly = false, divisionSlugs = null } = {}) {
  console.log(`\n--- Phase 2: Processing Stats & Building View (${league}) ---`);
  const { dataSubdir, divisionsFile } = getLeagueDataConfig(league);
  const dataDir = path.join(__dirname, '..', dataSubdir);
  const cplDir = path.join(__dirname, '../../cpl', league);

  const divisionsPath = path.join(dataDir, divisionsFile);
  if (!fs.existsSync(divisionsPath)) {
    throw new Error(`${divisionsFile} not found — run the fetcher first.`);
  }
  const allDivisions = JSON.parse(fs.readFileSync(divisionsPath, 'utf8'));

  if (!fs.existsSync(cplDir)) {
    fs.mkdirSync(cplDir, { recursive: true });
  }

  // Write bootstrap.js with the current division list baked in.
  // Sort divisions deterministically:
  // - local by clubName then divisionName
  // - travel by numeric bracket, then regular before gendered, then name
  const sortedDivisions = [...allDivisions].sort((a, b) => {
    if (league === 'local') {
      const clubCmp = (a.clubName || '').localeCompare(b.clubName || '');
      if (clubCmp !== 0) return clubCmp;
    } else if (league === 'travel') {
      const aKey = getTravelDivisionSortKey(a.divisionName);
      const bKey = getTravelDivisionSortKey(b.divisionName);
      if (aKey.genderedRank !== bKey.genderedRank) return aKey.genderedRank - bKey.genderedRank;
      if (aKey.rating !== bKey.rating) return aKey.rating - bKey.rating;
      return aKey.text.localeCompare(bKey.text, undefined, { numeric: true });
    }
    return (a.divisionName || '').localeCompare(b.divisionName || '', undefined, { numeric: true });
  });
  const defaultDiv = allDivisions.find((d) => d.isDefault) || allDivisions[0];
  const defaultSlug = defaultDiv ? defaultDiv.slug : '';
  const divisionsLiteral = buildBootstrapDivisionsLiteral(sortedDivisions);
  const divisionsGlobal = league === 'travel' ? 'TRAVEL_DIVISIONS' : 'LOCAL_DIVISIONS';
  const bootstrapSrc = buildBootstrapSource({
    dashboardPath: `/cpl/${league}`,
    defaultSlug: escapeBootstrapString(defaultSlug),
    divisionsLiteral,
    divisionsGlobal,
    testDatasets: league === 'local'
      ? { week1: 'data.test-week1.js', week6: 'data.test-week6.js' }
      : {},
  });
  fs.writeFileSync(path.join(cplDir, 'bootstrap.js'), bootstrapSrc);
  const runtimePath = path.join(__dirname, '../../cpl/bootstrap-runtime.js');
  fs.writeFileSync(runtimePath, buildBootstrapRuntimeSource());
  console.log(`✓ bootstrap.js written for ${league} (${allDivisions.length} divisions, default: ${defaultSlug}, window.${divisionsGlobal} exposed).`);

  const divisionsToCompile = filterDivisions(allDivisions, { primaryOnly, divisionSlugs });
  console.log(`Compiling ${divisionsToCompile.length} / ${allDivisions.length} divisions.`);

  for (const div of divisionsToCompile) {
    const label = formatDivisionLabel(div);
    const divDataDir = path.join(dataDir, div.slug);
    if (!fs.existsSync(divDataDir)) {
      console.warn(`  ⚠️ No data dir for ${div.slug} (${label}${div.divisionName}), skipping.`);
      continue;
    }
    console.log(`\nCompiling: ${label}${div.divisionName} (${div.slug})`);
    try {
      const outFile = div.isDefault ? 'data.js' : `data-${div.slug}.js`;
      compileDivision(div.slug, divDataDir, path.join(cplDir, outFile), {
        clubName: div.clubName || '',
        divisionName: div.divisionName,
        leagueType: league,
        ...(league === 'travel' && div.regionName ? { regionName: div.regionName } : {}),
      });
    } catch (err) {
      console.warn(`  ⚠️ Skipped ${div.slug}: ${err.message}`);
    }
  }

  console.log('\n✓ Phase 2 complete.');
}

function buildPlayerIndex() {
  console.log('\n--- Building player index ---');
  const rootDir = path.join(__dirname, '../..');
  const leagueConfigs = [
    { league: 'local', ...getLeagueDataConfig('local') },
    { league: 'travel', ...getLeagueDataConfig('travel') },
  ];

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

  for (const { league, dataSubdir, divisionsFile } of leagueConfigs) {
    const dataDir = path.join(__dirname, '..', dataSubdir);
    const divisionsPath = path.join(dataDir, divisionsFile);
    if (!fs.existsSync(divisionsPath)) continue;

    const divisions = JSON.parse(fs.readFileSync(divisionsPath, 'utf8'));
    for (const div of divisions) {
      const playersPath = path.join(dataDir, div.slug, 'players.json');
      if (!fs.existsSync(playersPath)) continue;

      const raw = JSON.parse(fs.readFileSync(playersPath, 'utf8'));
      const players = selectCanonicalRosterPlayers(
        (raw && raw.$values) ? raw.$values : (Array.isArray(raw) ? raw : []),
        Object.fromEntries(duprByPlayerId.entries()),
        { divisionName: div.divisionName, leagueType: league },
      );
      for (const p of players) {
        if (!p.firstName && !p.lastName) continue;
        const entry = {
          name: norm(`${p.firstName || ''} ${p.lastName || ''}`),
          team: p.teamName || '',
          division: div.divisionName,
          slug: div.slug,
          league,
          playerId: p.playerId || null,
        };
        if (div.clubName) entry.club = div.clubName;
        if (p.isCaptain) entry.isCaptain = true;
        if (p.isSub) entry.isSub = true;
        entries.push(entry);
      }
    }
  }

  entries.sort((a, b) => a.name.localeCompare(b.name));

  const outPath = path.join(rootDir, 'cpl', 'player-index.js');
  fs.writeFileSync(outPath, `window.PLAYER_INDEX = ${JSON.stringify(entries)};`);
  console.log(`✓ player-index.js written (${entries.length} player-division entries).`);
}

module.exports = { compileDashboardHtml, buildPlayerIndex, selectCanonicalRosterPlayers, writeDataScript };
