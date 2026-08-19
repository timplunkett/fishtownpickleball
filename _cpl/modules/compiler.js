const fs = require('fs');
const path = require('path');
const { filterDivisions, formatDivisionLabel, getLeagueDataConfig } = require('./division-utils');

const round1 = n => Math.round(n * 10) / 10;
const ratio = (wins, losses) => {
  const total = wins + losses;
  return total ? wins / total : 0;
};
const norm = s => (s || "").replace(/\s+/g, " ").trim().toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
const escapeBootstrapString = value => String(value || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");

function buildBootstrapDivisionsLiteral(divisions) {
  return divisions.map((division) => {
    const entries = [
      `slug: '${escapeBootstrapString(division.slug)}'`,
      division.clubName ? `clubName: '${escapeBootstrapString(division.clubName)}'` : null,
      `divisionName: '${escapeBootstrapString(division.divisionName)}'`,
    ].filter(Boolean);

    return `    { ${entries.join(', ')} }`;
  }).join(',\n');
}

function buildBootstrapDatasetsLiteral(datasets) {
  const entries = Object.entries(datasets).map(([datasetName, fileName]) => (
    `    '${escapeBootstrapString(datasetName)}': '${escapeBootstrapString(fileName)}'`
  ));

  return entries.length
    ? `{\n${entries.map((entry) => `      ${entry.trimStart()}`).join(',\n')}\n    }`
    : '{}';
}

function buildBootstrapSource({
  dashboardPath,
  defaultSlug,
  divisionsLiteral,
  globalVar,
  testDatasets,
}) {
  return `'use strict';

(() => {
  const DIVISIONS = Object.freeze([
${divisionsLiteral}
  ]);
  const CONFIG = Object.freeze({
    dashboardPath: '${dashboardPath}',
    defaultSlug: '${defaultSlug}',
    divisionsGlobal: '${globalVar}',
    testDatasets: Object.freeze(${buildBootstrapDatasetsLiteral(testDatasets)}),
  });
  const KNOWN_SLUGS = new Set(DIVISIONS.map((division) => division.slug));
  const LOCAL_HOSTS = new Set(['', 'localhost', '127.0.0.1', '::1']);

  function exposeDivisionsForLandingPage() {
    window[CONFIG.divisionsGlobal] = DIVISIONS;
  }

  function isDashboardPage() {
    return window.location.pathname.includes(CONFIG.dashboardPath);
  }

  function isLocalHost() {
    return LOCAL_HOSTS.has(window.location.hostname);
  }

  function appendScript(src, onload, onerror) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.onload = onload || null;
    script.onerror = onerror || null;
    document.body.appendChild(script);
  }

  function loadApp() {
    appendScript('../app.js');
  }

  function loadDataWithFallback(src) {
    appendScript(src, loadApp, () => appendScript('data.js', loadApp));
  }

  function getRequestedDataset() {
    return new URLSearchParams(window.location.search).get('dataset') || '';
  }

  function getRequestedDivision() {
    return new URLSearchParams(window.location.search).get('d') || '';
  }

  function resolveDatasetFile() {
    const requestedDataset = getRequestedDataset();
    if (!requestedDataset || !isLocalHost()) return '';

    return CONFIG.testDatasets[requestedDataset] || '';
  }

  function resolveDivisionDataFile() {
    const requestedDivision = getRequestedDivision();
    const slug = KNOWN_SLUGS.has(requestedDivision) ? requestedDivision : CONFIG.defaultSlug;

    if (!slug) return '';

    return slug === CONFIG.defaultSlug ? 'data.js' : \`data-\${slug}.js\`;
  }

  exposeDivisionsForLandingPage();

  // This file is also loaded by /cpl/, where data/app relative paths are different.
  if (!isDashboardPage()) return;

  window.DIVISIONS = DIVISIONS;

  const datasetFile = resolveDatasetFile();
  if (datasetFile) {
    loadDataWithFallback(datasetFile);
    return;
  }

  const dataFile = resolveDivisionDataFile();
  if (!dataFile) return;

  loadDataWithFallback(dataFile);
})();
`;
}

function firstValues(obj) {
  if (!obj || typeof obj !== "object") return null;
  if (Array.isArray(obj.$values)) return obj.$values;
  for (const k of Object.keys(obj)) {
    const r = firstValues(obj[k]);
    if (r) return r;
  }
  return null;
}

function normalizeDuprCode(value) {
  return String(value || '').trim().toUpperCase();
}

function shouldPreferRosterPlayer(candidate, current, duprByPid) {
  if (!!candidate.isSub !== !!current.isSub) return !candidate.isSub;

  const candidateGames = Number(candidate.gamesPlayed) || 0;
  const currentGames = Number(current.gamesPlayed) || 0;
  if (candidateGames !== currentGames) return candidateGames > currentGames;

  const candidateGlobalDupr = normalizeDuprCode(duprByPid[candidate.playerId]?.dupr);
  const currentGlobalDupr = normalizeDuprCode(duprByPid[current.playerId]?.dupr);
  const candidateMatchesGlobal = candidateGlobalDupr && normalizeDuprCode(candidate.dupr) === candidateGlobalDupr;
  const currentMatchesGlobal = currentGlobalDupr && normalizeDuprCode(current.dupr) === currentGlobalDupr;
  if (candidateMatchesGlobal !== currentMatchesGlobal) return candidateMatchesGlobal;

  const candidateRank = Number(candidate.ranking);
  const currentRank = Number(current.ranking);
  const candidateHasRank = Number.isFinite(candidateRank);
  const currentHasRank = Number.isFinite(currentRank);
  if (candidateHasRank !== currentHasRank) return candidateHasRank;
  if (candidateHasRank && candidateRank !== currentRank) return candidateRank < currentRank;

  return false;
}

function selectCanonicalRosterPlayers(players, duprByPid = {}) {
  const byNameAndTeam = new Map();
  const list = Array.isArray(players) ? players : [];
  for (const p of list) {
    const name = norm(`${p.firstName || ''} ${p.lastName || ''}`);
    const teamName = String(p.teamName || '').trim();
    if (!name || !teamName) continue;
    const key = `${name.toLowerCase()}|${teamName.toLowerCase()}`;
    const existing = byNameAndTeam.get(key);
    if (!existing || shouldPreferRosterPlayer(p, existing, duprByPid)) {
      byNameAndTeam.set(key, p);
    }
  }
  return [...byNameAndTeam.values()];
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

// A forfeit/walkover is recorded as a token 1-0 score (no real pickleball game
// ends with the winner under 11). These reflect attendance, not play, so they
// are excluded from the rating; standings/records still count them.
const isForfeit = g => Math.max(g.homeScore, g.awayScore) < 11;

// Teammate-pair chemistry tuning: shrinkage strength and the minimum shared
// games before a pair is surfaced.
const PAIR_K = 4;
const PAIR_MIN = 3;

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
      if (isForfeit(g)) continue; // walkovers measure attendance, not play
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

  // Strength of schedule: game-weighted average rating of each player's
  // partners and opponents, on the same points/game scale as the rating.
  const partnerSum = new Array(n).fill(0), partnerN = new Array(n).fill(0);
  const oppSum = new Array(n).fill(0), oppN = new Array(n).fill(0);
  const addContext = (selfId, partnerId, oppA, oppB) => {
    const i = idx[selfId];
    partnerSum[i] += beta[idx[partnerId]]; partnerN[i] += 1;
    oppSum[i] += beta[idx[oppA]] + beta[idx[oppB]]; oppN[i] += 2;
  };
  for (const row of rows) {
    const [p0, p1] = row.plus, [m0, m1] = row.minus;
    addContext(p0, p1, m0, m1);
    addContext(p1, p0, m0, m1);
    addContext(m0, m1, p0, p1);
    addContext(m1, m0, p0, p1);
  }

  const out = {};
  ids.forEach((id, i) => {
    const conf = Math.max(0, Math.min(1, 1 - lambda * inv[i][i]));
    out[id] = {
      rating: Math.round(beta[i] * 10) / 10,
      ratingGames: gamesPlayedCount[id],
      confidence: Math.round(conf * 100),
      strengthOfPartners: partnerN[i] ? Math.round(partnerSum[i] / partnerN[i] * 10) / 10 : null,
      strengthOfOpponents: oppN[i] ? Math.round(oppSum[i] / oppN[i] * 10) / 10 : null,
    };
  });
  return out;
}

function computeWeeklyRatingHistory(completed, matchupDetailsJson, playersById) {
  const weeks = [...new Set(completed.map((matchup) => matchup.weekNumber))].sort((a, b) => a - b);
  const historyByPid = {};

  for (const week of weeks) {
    const snapshotRatings = computeRatings(
      completed.filter((matchup) => matchup.weekNumber <= week),
      matchupDetailsJson,
    );
    const ratedPlayers = Object.entries(snapshotRatings)
      .sort(([pidA, ratingA], [pidB, ratingB]) => (
        (ratingB.rating - ratingA.rating) ||
        (ratingB.confidence - ratingA.confidence) ||
        (ratingB.ratingGames - ratingA.ratingGames) ||
        (playersById.get(pidA)?.name || '').localeCompare(playersById.get(pidB)?.name || '')
      ));

    ratedPlayers.forEach(([pid, snapshot], index) => {
      (historyByPid[pid] = historyByPid[pid] || []).push({
        week,
        rating: snapshot.rating,
        confidence: snapshot.confidence,
        rank: index + 1,
        ratingGames: snapshot.ratingGames,
        strengthOfPartners: snapshot.strengthOfPartners,
        strengthOfOpponents: snapshot.strengthOfOpponents,
      });
    });
  }

  return { historyByPid, weeks };
}

// Teammate-pair "chemistry": how much a pair over/under-performs the result
// their four individual ratings predict. Per game, residual = actual margin -
// expected margin (from ratings). Synergy is the shrunk average residual,
// Σresidual / (n + PAIR_K), which pulls thin-sample pairs toward 0.
// Returns { duos: [...n>=PAIR_MIN, sorted...], partnersByPid: { pid: [{...}] } }.
function computePairSynergy(completed, matchupDetailsJson, ratings, homeTeamByPid = {}, playerInfoById = {}) {
  const rOf = pid => (ratings[pid] ? ratings[pid].rating : 0);
  const nameOf = {}, teamOf = {};
  const acc = {}; // "idA|idB" -> { a, b, n, sumRes, sumAct, sumExp, w }

  for (const mu of completed) {
    const match = matchupDetailsJson.find(item => item.matchupId === mu.matchupId);
    const d = match ? match.details : null;
    if (!d) continue;
    const teamNameById = { [mu.homeTeamId]: mu.homeName, [mu.awayTeamId]: mu.awayName };
    for (const p of (d.matchupPlayerStats && d.matchupPlayerStats.$values) || []) {
      const info = playerInfoById[p.playerId] || {};
      nameOf[p.playerId] = norm(`${info.firstName || ''} ${info.lastName || ''}`);
      teamOf[p.playerId] = teamNameById[p.teamId] || null;
    }
    for (const g of (d.lineups && d.lineups.lineups && d.lineups.lineups.$values) || []) {
      if (g.homeScore == null || g.awayScore == null || isForfeit(g)) continue;
      const H = [g.homePlayerId1, g.homePlayerId2], A = [g.awayPlayerId1, g.awayPlayerId2];
      if (H.concat(A).some(x => !x)) continue;
      const expH = (rOf(H[0]) + rOf(H[1])) - (rOf(A[0]) + rOf(A[1]));
      const actH = g.homeScore - g.awayScore;
      const record = (pair, act, exp) => {
        const [a, b] = pair.slice().sort();
        const e = acc[`${a}|${b}`] || (acc[`${a}|${b}`] = { a, b, n: 0, sumRes: 0, sumAct: 0, sumExp: 0, w: 0 });
        e.n++; e.sumRes += act - exp; e.sumAct += act; e.sumExp += exp; if (act > 0) e.w++;
      };
      record(H, actH, expH);
      record(A, -actH, -expH);
    }
  }

  const entries = Object.values(acc).map(e => ({
    a: nameOf[e.a], b: nameOf[e.b], team: homeTeamByPid[e.a] || homeTeamByPid[e.b] || teamOf[e.a],
    n: e.n, w: e.w, l: e.n - e.w,
    synergy: Math.round(e.sumRes / (e.n + PAIR_K) * 10) / 10,
    avgActual: Math.round(e.sumAct / e.n * 10) / 10,
    avgExpected: Math.round(e.sumExp / e.n * 10) / 10,
    aId: e.a, bId: e.b,
  }));
  const duos = entries.filter(e => e.n >= PAIR_MIN).sort((x, y) => y.synergy - x.synergy);

  const partnersByPid = {};
  for (const e of entries) {
    if (e.n < PAIR_MIN) continue;
    (partnersByPid[e.aId] = partnersByPid[e.aId] || []).push({ name: e.b, n: e.n, synergy: e.synergy });
    (partnersByPid[e.bId] = partnersByPid[e.bId] || []).push({ name: e.a, n: e.n, synergy: e.synergy });
  }
  for (const pid of Object.keys(partnersByPid)) partnersByPid[pid].sort((x, y) => y.synergy - x.synergy);

  return { duos, partnersByPid };
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

function compileDivision(slug, divDataDir, outPath, divisionMeta) {
  const feed = JSON.parse(fs.readFileSync(path.join(divDataDir, "matchups.json"), "utf8"));
  const playerListJson = JSON.parse(fs.readFileSync(path.join(divDataDir, "players.json"), "utf8"));
  const matchupDetailsJson = JSON.parse(fs.readFileSync(path.join(divDataDir, "matchupDetails.json"), "utf8"));
  const duprByPid = loadDuprByPid();
  const rosterPlayers = selectCanonicalRosterPlayers(firstValues(playerListJson) || [], duprByPid);

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
          team: p.teamName, matches: 0, outsideSub: false,
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
    // Detect pods from the schedule even pre-season.
    {
      const podParent = {};
      for (const m of matchups) {
        if (m.homeName) podParent[m.homeName] = podParent[m.homeName] || m.homeName;
        if (m.awayName) podParent[m.awayName] = podParent[m.awayName] || m.awayName;
      }
      const podFind = n => { while (podParent[n] !== n) { podParent[n] = podParent[podParent[n]]; n = podParent[n]; } return n; };
      for (const m of matchups) {
        if (m.homeName && m.awayName) {
          const ra = podFind(m.homeName), rb = podFind(m.awayName);
          if (ra !== rb) podParent[ra] = rb;
        }
      }
      const podLabel = {};
      let nextPod = 1;
      for (const t of teamArr) {
        const root = podFind(t.name);
        if (!podLabel[root]) podLabel[root] = nextPod++;
        t.pod = podLabel[root];
      }
      divisionMeta = { ...(divisionMeta || {}), podCount: nextPod - 1 };
    }
    const DATA = {
      players: playerArr, teams: teamArr, duos: [], matches, playoffs: [],
      meta: {
        matchesPlayed: 0, weeks: "", asOf: new Date().toISOString().slice(0, 10),
        totalPlayers: playerArr.length, ratingHistoryWeeks: [], divisionSlug: slug,
        hasPlayoffs: false,
        ...(divisionMeta || {}),
      },
    };
    fs.writeFileSync(outPath, "const DATA = " + JSON.stringify(DATA) + ";");
    console.log(`  ✓ data.js written to ${outPath} (pre-season roster only)`);
    return;
  }

  // Build a map of player ID -> primary (non-sub) team from the player roster so
  // that intra-league subs are attributed to their home team in player records.
  // Only map players whose team has actual matchups; players on placeholder teams
  // (e.g. "Open Play") should not be treated as rostered league members.
  const homeTeamByPid = {};
  // Build a map of player ID -> static profile info (firstName, lastName, gender)
  // so matchupPlayerStats entries don't need to repeat those fields.
  const playerInfoById = {};
  for (const p of rosterPlayers) {
    if (!p.isSub && p.playerId && p.teamName && teamNamesWithMatchups.has(p.teamName)) homeTeamByPid[p.playerId] = p.teamName;
    if (p.playerId) playerInfoById[p.playerId] = { firstName: p.firstName, lastName: p.lastName, gender: p.gender };
  }

  for (const mu of completed) {
    const match = matchupDetailsJson.find(item => item.matchupId === mu.matchupId);
    const d = match ? match.details : null;
    if (!d) continue;

    const homeId = mu.homeTeamId, awayId = mu.awayTeamId;
    TEAMNAME[homeId] = mu.homeName; TEAMNAME[awayId] = mu.awayName;
    weeksSeen.add(mu.weekNumber);

    const ps = (d.matchupPlayerStats && d.matchupPlayerStats.$values) || [];
    const games = (d.lineups && d.lineups.lineups && d.lineups.lineups.$values) || [];

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
  const ratings = computeRatings(completed, matchupDetailsJson);
  const { historyByPid, weeks: ratingHistoryWeeks } = computeWeeklyRatingHistory(completed, matchupDetailsJson, players);
  // Teammate-pair chemistry (over/under-performance vs. rating-expected result).
  const { duos, partnersByPid } = computePairSynergy(completed, matchupDetailsJson, ratings, homeTeamByPid, playerInfoById);

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

  // Detect connected sub-groups (pods): teams that only ever play each other and
  // never meet teams in another sub-group. Uses all matchups (completed + scheduled)
  // so the pod structure is known before the season ends. Each team's `pod` field
  // is a 1-based integer; podCount === 1 means a fully connected division.
  {
    const podParent = {};
    const allTeamNames = new Set(matchups.flatMap(m => [m.homeName, m.awayName]).filter(Boolean));
    for (const name of allTeamNames) podParent[name] = name;
    const podFind = n => { while (podParent[n] !== n) { podParent[n] = podParent[podParent[n]]; n = podParent[n]; } return n; };
    for (const m of matchups) {
      if (m.homeName && m.awayName) {
        const ra = podFind(m.homeName), rb = podFind(m.awayName);
        if (ra !== rb) podParent[ra] = rb;
      }
    }
    // Assign stable 1-based pod numbers ordered by first appearance in the sorted team list.
    const podLabel = {};
    let nextPod = 1;
    for (const t of teamArr) {
      const root = podFind(t.name);
      if (!podLabel[root]) podLabel[root] = nextPod++;
      t.pod = podLabel[root];
    }
    const podCount = nextPod - 1;
    if (podCount > 1) {
      console.warn(`  ⚠️  ${podCount} disconnected sub-groups (pods) found in this division.`);
      for (let p = 1; p <= podCount; p++) {
        const members = teamArr.filter(t => t.pod === p).map(t => t.name);
        console.warn(`     Pod ${p}: ${members.join(', ')}`);
      }
      // Recompute powerRank within each pod so team pages show pod-relative rank.
      for (let p = 1; p <= podCount; p++) {
        [...teamArr].filter(t => t.pod === p && t.power != null)
          .sort((a, b) => b.power - a.power)
          .forEach((t, i) => { t.powerRank = i + 1; });
      }
    }
    // Expose podCount in meta so the UI can render separate standings sections.
    if (!divisionMeta) divisionMeta = {};
    divisionMeta = { ...divisionMeta, podCount };
  }

  // Full match list (completed + scheduled) and per-team format splits, for the
  // team pages: match history by week, upcoming schedule, mixed/men's/women's.
  const detailById = new Map(matchupDetailsJson.map(x => [x.matchupId, x.details]));
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
    } else if (d) {
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
      ...(divisionMeta || {}),
    },
  };

  fs.writeFileSync(outPath, "const DATA = " + JSON.stringify(DATA) + ";");
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
  // Sort divisions deterministically: local by clubName then divisionName; travel by divisionName (numeric).
  const sortedDivisions = [...allDivisions].sort((a, b) => {
    if (league === 'local') {
      const clubCmp = (a.clubName || '').localeCompare(b.clubName || '');
      if (clubCmp !== 0) return clubCmp;
    }
    return (a.divisionName || '').localeCompare(b.divisionName || '', undefined, { numeric: true });
  });
 const defaultDiv = allDivisions.find(d => d.isDefault) || allDivisions[0];
 const defaultSlug = defaultDiv ? defaultDiv.slug : '';
 const divisionsLiteral = buildBootstrapDivisionsLiteral(sortedDivisions);
 const globalVar = league === 'travel' ? 'TRAVEL_DIVISIONS' : 'LOCAL_DIVISIONS';
 const bootstrapSrc = buildBootstrapSource({
   dashboardPath: `/cpl/${league}`,
   defaultSlug: escapeBootstrapString(defaultSlug),
   divisionsLiteral,
   globalVar,
   testDatasets: league === 'local'
     ? { week1: 'data.test-week1.js', week6: 'data.test-week6.js' }
     : {},
 });
 fs.writeFileSync(path.join(cplDir, 'bootstrap.js'), bootstrapSrc);
  console.log(`✓ bootstrap.js written for ${league} (${allDivisions.length} divisions, default: ${defaultSlug}, window.${globalVar} exposed).`);

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

  // Build a playerId → { dupr } lookup from global_players.json for canonical player deduplication.
  const globalPlayersPath = path.join(__dirname, '..', 'data', 'global_players.json');
  const duprByPlayerId = new Map();
  if (fs.existsSync(globalPlayersPath)) {
    const globalPlayers = JSON.parse(fs.readFileSync(globalPlayersPath, 'utf8'));
    for (const gp of globalPlayers) {
      if (gp.playerId && gp.dupr) {
        duprByPlayerId.set(gp.playerId, { dupr: gp.dupr });
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

module.exports = { compileDashboardHtml, buildPlayerIndex };
