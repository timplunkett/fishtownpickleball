const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '../../cpl/index.html');
const TEMPLATE = path.join(__dirname, '../template.html');

const round1 = n => Math.round(n * 10) / 10;
const norm = s => (s || "").replace(/\s+/g, " ").trim().toLowerCase().replace(/\b\w/g, c => c.toUpperCase());

function firstValues(obj) {
  if (!obj || typeof obj !== "object") return null;
  if (Array.isArray(obj.$values)) return obj.$values;
  for (const k of Object.keys(obj)) {
    const r = firstValues(obj[k]);
    if (r) return r;
  }
  return null;
}

async function compileDashboardHtml() {
  console.log('\n--- Phase 2: Processing Stats & Building View ---');
  console.log('Loading local JSON caches from disk...');

  const dataDir = path.join(__dirname, '../data');
  const feed = JSON.parse(fs.readFileSync(path.join(dataDir, "matchups.json"), "utf8"));
  const playerListJson = JSON.parse(fs.readFileSync(path.join(dataDir, "players.json"), "utf8"));
  const matchupDetailsJson = JSON.parse(fs.readFileSync(path.join(dataDir, "matchupDetails.json"), "utf8"));

  const matchups = (feed.$values || firstValues(feed) || []);
  const completed = matchups.filter(m => m.endResult);
  console.log(`Processing stats for ${completed.length} completed matches.`);

  if (!completed.length) throw new Error("No completed matches recorded to construct dashboard rows.");

  const TEAMNAME = {};
  const players = new Map();
  const teams = new Map();
  const weeksSeen = new Set();

  const ensureTeam = name => {
    if (!teams.has(name)) teams.set(name, { name, w: 0, l: 0, pf: 0, pa: 0, gw: 0, gl: 0 });
    return teams.get(name);
  };

  for (const mu of completed) {
    const match = matchupDetailsJson.find(item => item.matchupId === mu.matchupId);
    const d = match ? match.details : null;
    if (!d) continue;

    const M = d.matchup;
    const homeId = M.homeTeamId, awayId = M.awayTeamId;
    TEAMNAME[homeId] = M.homeName; TEAMNAME[awayId] = M.awayName;
    weeksSeen.add(M.weekNumber);

    const ps = (d.matchupPlayerStats && d.matchupPlayerStats.$values) || [];
    const games = (d.lineups && d.lineups.lineups && d.lineups.lineups.$values) || [];

    let hgw = 0, agw = 0;
    for (const g of games) (g.homeScore > g.awayScore ? hgw++ : agw++);

    const home = { id: homeId, name: M.homeName, points: M.homePoints, gw: hgw };
    const away = { id: awayId, name: M.awayName, points: M.awayPoints, gw: agw };
    const homeWon = M.homePoints > M.awayPoints;

    ensureTeam(home.name); ensureTeam(away.name);
    teams.get(home.name).pf += home.points; teams.get(home.name).pa += away.points;
    teams.get(away.name).pf += away.points; teams.get(away.name).pa += home.points;
    teams.get(home.name).gw += hgw; teams.get(home.name).gl += agw;
    teams.get(away.name).gw += agw; teams.get(away.name).gl += hgw;
    (homeWon ? teams.get(home.name) : teams.get(away.name)).w++;
    (homeWon ? teams.get(away.name) : teams.get(home.name)).l++;

    const id2name = {};
    for (const p of ps) id2name[p.playerId] = norm(`${p.firstName} ${p.lastName}`);

    for (const p of ps) {
      if (!p.gamesPlayed) continue;
      const pid = p.playerId;
      if (!players.has(pid)) {
        players.set(pid, {
          name: norm(`${p.firstName} ${p.lastName}`), gender: p.gender,
          team: TEAMNAME[p.teamId], matches: 0,
          gamesPlayed: 0, wins: 0, losses: 0, pointsWon: 0, totalPointsAgainst: 0,
          mixedWins: 0, mixedLosses: 0, genderWins: 0, genderLosses: 0,
          clutchWins: 0, clutchLosses: 0, log: [], games: [],
        });
      }
      const P = players.get(pid);
      P.matches++;
      P.gamesPlayed += p.gamesPlayed; P.wins += p.wins; P.losses += p.losses;
      P.pointsWon += p.pointsWon; P.totalPointsAgainst += p.totalPointsAgainst;
      P.mixedWins += p.mixedWins; P.mixedLosses += p.mixedLosses;
      P.genderWins += p.genderWins; P.genderLosses += p.genderLosses;
      P.clutchWins += p.clutchWins; P.clutchLosses += p.clutchLosses;

      const mine = (p.teamId === homeId) ? home : away;
      const opp = (p.teamId === homeId) ? away : home;
      const teamWon = (mine === home) ? homeWon : !homeWon;
      P.log.push({
        week: M.weekNumber, opp: opp.name, homeAway: (mine === home) ? "H" : "A",
        w: p.wins, l: p.losses, gp: p.gamesPlayed, pf: p.pointsWon, pa: p.totalPointsAgainst,
        mx: [p.mixedWins, p.mixedLosses], gn: [p.genderWins, p.genderLosses],
        cl: [p.clutchWins, p.clutchLosses],
        teamRes: teamWon ? "W" : "L", teamGW: mine.gw, teamGL: opp.gw,
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
          wk: M.weekNumber, opp: oppTeam, t: g.matchType,
          with: id2name[partner] || "", vs: [id2name[o1] || "", id2name[o2] || ""],
          f: my, a: their, w: my > their ? 1 : 0,
        });
      }
    }
  }

  let rankByName = {};
  try {
    const list = firstValues(playerListJson) || [];
    for (const p of list) {
      const key = norm(`${p.firstName} ${p.lastName}`);
      if (p.ranking != null) rankByName[key] = p.ranking;
    }
  } catch (e) {
    console.warn("⚠️ League rank extraction encountered anomalies:", e.message);
  }

  const playerArr = [];
  for (const P of players.values()) {
    P.winPct = P.gamesPlayed ? round1(100 * P.wins / P.gamesPlayed) : 0;
    P.diff = P.pointsWon - P.totalPointsAgainst;
    P.ppg = P.gamesPlayed ? round1(P.pointsWon / P.gamesPlayed) : 0;
    P.leagueRank = rankByName[norm(P.name)] ?? null;
    P.log.sort((a, b) => a.week - b.week);
    P.games.sort((a, b) => a.wk - b.wk);
    playerArr.push(P);
  }
  playerArr.sort((a, b) => (b.winPct - a.winPct) || (b.diff - a.diff));

  const teamArr = [...teams.values()];
  for (const t of teamArr) t.diff = t.pf - t.pa;
  teamArr.sort((a, b) => (b.w - a.w) || (b.diff - a.diff));

  const weeks = [...weeksSeen].sort((a, b) => a - b);
  const weekLabel = weeks.length ? (weeks[0] === weeks[weeks.length - 1] ? `${weeks[0]}` : `${weeks[0]}-${weeks[weeks.length - 1]}`) : "";

  const DATA = {
    players: playerArr, teams: teamArr,
    meta: {
      matchesPlayed: completed.length, weeks: weekLabel,
      asOf: new Date().toISOString().slice(0, 10), totalPlayers: playerArr.length,
    },
  };

  if (!fs.existsSync(TEMPLATE)) {
    throw new Error(`Critical Dependency Missing: Unable to locate layout template at: ${TEMPLATE}`);
  }

  let template = fs.readFileSync(TEMPLATE, "utf8");
  const html = template.replace("const DATA = __DATA__;", "const DATA = " + JSON.stringify(DATA) + ";");

  const outDir = path.dirname(OUT);
  if (!fs.existsSync(outDir)){
      fs.mkdirSync(outDir, { recursive: true });
  }

  fs.writeFileSync(OUT, html);
  console.log(`✓ Dashboard written safely to route target: ${OUT}`);
}

module.exports = { compileDashboardHtml };
