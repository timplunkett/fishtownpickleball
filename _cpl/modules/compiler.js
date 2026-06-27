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

// --- Ridge-regularized Adjusted Plus-Minus (APM) player ratings -------------
// Each doubles game becomes one equation: (myPair) - (theirPair) ~= pointMargin.
// We solve for a per-player rating = net points/game contributed vs. an average
// player, AFTER controlling for who they played with and against. Ridge (L2)
// regularization toward zero both (a) handles the small early-season sample by
// shrinking thin-evidence players toward average, and (b) resolves the rank
// deficiency inherent to +1/-1 plus-minus design matrices (the all-ones vector
// is otherwise in the null space). Larger LAMBDA = more shrinkage toward 0.
const RIDGE_LAMBDA = 4;

// Invert an n x n matrix via Gauss-Jordan elimination with partial pivoting.
// Used here on (XᵀX + λI), which ridge keeps well-conditioned. We need the full
// inverse (not just a single solve) so we can read its diagonal for the
// per-player confidence score.
function invertMatrix(A) {
  const n = A.length;
  // Augment [A | I] and reduce the left block to the identity.
  const M = A.map((row, i) => {
    const aug = row.slice();
    for (let j = 0; j < n; j++) aug.push(i === j ? 1 : 0);
    return aug;
  });
  for (let col = 0; col < n; col++) {
    let piv = col;
    for (let r = col + 1; r < n; r++) {
      if (Math.abs(M[r][col]) > Math.abs(M[piv][col])) piv = r;
    }
    if (Math.abs(M[piv][col]) < 1e-12) continue; // ridge should prevent singularity
    [M[col], M[piv]] = [M[piv], M[col]];
    const pivVal = M[col][col];
    for (let c = 0; c < 2 * n; c++) M[col][c] /= pivVal;
    for (let r = 0; r < n; r++) {
      if (r === col) continue;
      const factor = M[r][col];
      if (factor === 0) continue;
      for (let c = 0; c < 2 * n; c++) M[r][c] -= factor * M[col][c];
    }
  }
  return M.map(row => row.slice(n)); // the right block is A⁻¹
}

// Build the design from completed matchups' individual games and return
// { [playerId]: { rating, ratingGames, confidence } }.
//   rating      = ridge-APM net points/game vs. an average player.
//   ratingGames = games contributing to the fit.
//   confidence  = 0..100, the fraction of the estimate driven by real game
//                 evidence rather than the average-player prior. Derived from
//                 the posterior variance: conf_i = 1 - λ·[(XᵀX + λI)⁻¹]_ii.
//                 (Data only ever shrinks variance below the prior 1/λ, so this
//                 is guaranteed to land in [0, 1].)
function computeRatings(completed, matchupDetailsJson, lambda = RIDGE_LAMBDA) {
  // Collect one row per game: +1 home pair, -1 away pair, target = home margin.
  const rows = []; // each: { plus: [id,id], minus: [id,id], margin }
  const gamesPlayedCount = {};
  for (const mu of completed) {
    const match = matchupDetailsJson.find(item => item.matchupId === mu.matchupId);
    const d = match ? match.details : null;
    if (!d) continue;
    const games = (d.lineups && d.lineups.lineups && d.lineups.lineups.$values) || [];
    for (const g of games) {
      const h1 = g.homePlayerId1, h2 = g.homePlayerId2, a1 = g.awayPlayerId1, a2 = g.awayPlayerId2;
      if (!h1 || !h2 || !a1 || !a2) continue;
      if (g.homeScore == null || g.awayScore == null) continue;
      rows.push({ plus: [h1, h2], minus: [a1, a2], margin: g.homeScore - g.awayScore });
      for (const id of [h1, h2, a1, a2]) gamesPlayedCount[id] = (gamesPlayedCount[id] || 0) + 1;
    }
  }

  const ids = Object.keys(gamesPlayedCount);
  const idx = {};
  ids.forEach((id, i) => { idx[id] = i; });
  const n = ids.length;
  if (!n) return {};

  // Normal equations: (XᵀX + λI) β = Xᵀy, accumulated without materializing X.
  const AtA = Array.from({ length: n }, () => new Array(n).fill(0));
  const Atb = new Array(n).fill(0);
  for (const row of rows) {
    const signed = [[row.plus[0], 1], [row.plus[1], 1], [row.minus[0], -1], [row.minus[1], -1]];
    for (const [idI, sI] of signed) {
      const i = idx[idI];
      Atb[i] += sI * row.margin;
      for (const [idJ, sJ] of signed) AtA[i][idx[idJ]] += sI * sJ;
    }
  }
  for (let i = 0; i < n; i++) AtA[i][i] += lambda;

  // β = (XᵀX + λI)⁻¹ Xᵀy, and confidence from the inverse's diagonal.
  const inv = invertMatrix(AtA);
  const beta = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let s = 0;
    for (let j = 0; j < n; j++) s += inv[i][j] * Atb[j];
    beta[i] = s;
  }

  const out = {};
  ids.forEach((id, i) => {
    const conf = Math.max(0, Math.min(1, 1 - lambda * inv[i][i]));
    out[id] = {
      rating: Math.round(beta[i] * 10) / 10,
      ratingGames: gamesPlayedCount[id],
      confidence: Math.round(conf * 100),
    };
  });
  return out;
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

  // Ridge-APM ratings: partner/opponent-adjusted net points per game.
  const ratings = computeRatings(completed, matchupDetailsJson);

  const playerArr = [];
  for (const [pid, P] of players.entries()) {
    P.winPct = P.gamesPlayed ? round1(100 * P.wins / P.gamesPlayed) : 0;
    P.diff = P.pointsWon - P.totalPointsAgainst;
    P.ppg = P.gamesPlayed ? round1(P.pointsWon / P.gamesPlayed) : 0;
    P.leagueRank = rankByName[norm(P.name)] ?? null;
    P.rating = ratings[pid] ? ratings[pid].rating : null;
    P.ratingGames = ratings[pid] ? ratings[pid].ratingGames : 0;
    P.confidence = ratings[pid] ? ratings[pid].confidence : 0;
    P.log.sort((a, b) => a.week - b.week);
    P.games.sort((a, b) => a.wk - b.wk);
    playerArr.push(P);
  }
  playerArr.sort((a, b) => (b.winPct - a.winPct) || (b.diff - a.diff));

  const teamArr = [...teams.values()];
  for (const t of teamArr) { t.diff = t.pf - t.pa; t.gameDiff = t.gw - t.gl; }
  teamArr.sort((a, b) => (b.w - a.w) || (b.gameDiff - a.gameDiff) || (b.diff - a.diff));

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
