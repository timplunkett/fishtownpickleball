const { normalizeName: norm } = require('./shared');

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

function deriveProvisionalOutcome(details) {
  const allLineups = ((details && details.lineups && details.lineups.lineups && details.lineups.lineups.$values) || []);
  const slottedLineups = allLineups.filter((g) => g.homePlayerId1 && g.homePlayerId2 && g.awayPlayerId1 && g.awayPlayerId2);
  if (!slottedLineups.length) return null;

  const hasUnscoredSlottedGame = slottedLineups.some((g) => !Number.isFinite(g.homeScore) || !Number.isFinite(g.awayScore));
  if (hasUnscoredSlottedGame) return null;

  let homeGW = 0, awayGW = 0, homePoints = 0, awayPoints = 0;
  for (const g of slottedLineups) {
    homePoints += g.homeScore;
    awayPoints += g.awayScore;
    if (g.homeScore > g.awayScore) homeGW++;
    else awayGW++;
  }

  if (homeGW === awayGW) return null;
  return { result: homeGW > awayGW ? 'home' : 'away', homeGW, awayGW, homePoints, awayPoints, games: slottedLineups };
}

// Games are played to a fixed target with win-by-two, so the overwhelmingly most
// common winning score in a division IS that target. Inferring it beats hardcoding
// one: the league has run both 11- and 21-point formats, and a division that
// switches would otherwise silently mis-scale every synthesized point total.
// Falls back to 21, the current format, when there is nothing to count.
const GAME_TARGET_FALLBACK = 21;

function inferGameTarget(detailByMatchupId) {
  const winningScoreCounts = new Map();
  for (const details of detailByMatchupId.values()) {
    for (const g of ((details && details.lineups && details.lineups.lineups && details.lineups.lineups.$values) || [])) {
      if (!Number.isFinite(g.homeScore) || !Number.isFinite(g.awayScore)) continue;
      const winningScore = Math.max(g.homeScore, g.awayScore);
      winningScoreCounts.set(winningScore, (winningScoreCounts.get(winningScore) || 0) + 1);
    }
  }
  let target = null, best = 0;
  for (const [score, count] of winningScoreCounts) {
    if (count > best) { best = count; target = score; }
  }
  return target ?? GAME_TARGET_FALLBACK;
}

// A game the league counts toward a player's record: one that actually reached the
// target. That excludes walkovers, recorded as a token 1-0, and games abandoned
// part-way, which show up as things like 8-12 in a 21-point division. Neither
// touches games played, record or points for anyone who was on court; the team's
// point totals still include them. Same principle as the rating's forfeit
// exclusion, and a superset of it — isForfeit's fixed 11 predates the 21-point
// format and is left alone because the compiled `ff` flag and the rating both
// depend on its exact current meaning.
const countsTowardPlayerStats = (g, gameTarget) => Math.max(g.homeScore, g.awayScore) >= gameTarget;

// A game the league counts as clutch: decided by two points or fewer, which under
// win-by-two means it went to at least one deuce. The 1-0 of a forfeit is a
// one-point margin but nobody's clutch performance, hence the guard — though in
// practice countsTowardPlayerStats has already dropped those.
const isClutch = g => !isForfeit(g) && Math.abs(g.homeScore - g.awayScore) <= 2;

// The league reports a player's points won/against with the winner clamped to the
// game target and the same overage taken off the loser, so a 25-23 deuce marathon
// is recorded as 21-19. Margin survives, inflation doesn't. (Its *team* totals are
// the raw scores instead — inconsistent, but reproduced faithfully in both places
// so provisional rows sit on the same scale as reported ones.)
function clampGameScores(g, gameTarget) {
  const overage = Math.max(0, Math.max(g.homeScore, g.awayScore) - gameTarget);
  return { home: g.homeScore - overage, away: g.awayScore - overage };
}

// Rebuild the per-player stat rows the league omits from a matchup it hasn't
// closed out. Every field is recoverable from the lineups plus the roster, and
// every derivation here was reverse-engineered from the rows the league does
// publish: across 5663 reported player-matchup rows in the cached feeds, games
// played, wins, losses and the mixed/gender splits reproduce exactly, and points
// (99.6%), clutch (99.96%) and sub status (99.8%) all but exactly — the residue
// being rows whose reported totals disagree with their own game scores.
// provisional-fidelity.test.js re-runs that comparison on every build.
//
// `isSubForTeam(playerId, teamId)` supplies the one thing the lineups can't: a
// player who turned out for a team they aren't rostered on is a sub.
function synthesizeMatchupPlayerStats(provisional, matchup, { gameTarget, isSubForTeam }) {
  const rows = new Map();
  const rowFor = (playerId, teamId) => {
    let row = rows.get(playerId);
    if (!row) {
      row = {
        playerId, teamId, isSub: !!isSubForTeam(playerId, teamId),
        gamesPlayed: 0, wins: 0, losses: 0, pointsWon: 0, totalPointsAgainst: 0,
        clutchWins: 0, clutchLosses: 0, mixedWins: 0, mixedLosses: 0,
        genderWins: 0, genderLosses: 0, ranking: null,
      };
      rows.set(playerId, row);
    }
    return row;
  };

  for (const g of provisional.games) {
    if (!countsTowardPlayerStats(g, gameTarget)) continue;
    const clamped = clampGameScores(g, gameTarget);
    const sides = [
      { ids: [g.homePlayerId1, g.homePlayerId2], teamId: matchup.homeTeamId, mine: clamped.home, theirs: clamped.away },
      { ids: [g.awayPlayerId1, g.awayPlayerId2], teamId: matchup.awayTeamId, mine: clamped.away, theirs: clamped.home },
    ];
    for (const side of sides) {
      const won = side.mine > side.theirs;
      for (const playerId of side.ids) {
        const row = rowFor(playerId, side.teamId);
        row.gamesPlayed++;
        row.pointsWon += side.mine;
        row.totalPointsAgainst += side.theirs;
        if (won) row.wins++; else row.losses++;
        if (isClutch(g)) { if (won) row.clutchWins++; else row.clutchLosses++; }
        if (g.matchType === 'mixed') { if (won) row.mixedWins++; else row.mixedLosses++; }
        if (g.matchType === 'male' || g.matchType === 'female') { if (won) row.genderWins++; else row.genderLosses++; }
      }
    }
  }
  return [...rows.values()];
}

// Fold provisional outcomes into a matchup feed so everything downstream sees them
// as results. A matchup the league hasn't closed out but whose lineups are filled
// and fully scored gets the derived `endResult` and point totals written onto it,
// plus `provisional: true` for the UI to label, and its details gain the
// per-player stat rows the league hasn't published yet. `completed` filters and
// stat accumulation then need no special case: a provisional result counts toward
// standings, records and ratings exactly as a confirmed one does, and the only
// thing that distinguishes it is the flag.
//
// Returns fresh objects throughout; neither input is mutated.
function applyProvisionalOutcomes(matchups, detailByMatchupId, { isSubForTeam }) {
  const gameTarget = inferGameTarget(detailByMatchupId);
  const resolvedMatchups = [];
  const resolvedDetailById = new Map(detailByMatchupId);
  let provisionalCount = 0;

  for (const matchup of matchups) {
    const details = detailByMatchupId.get(matchup.matchupId);
    const provisional = (matchup.endResult || !details) ? null : deriveProvisionalOutcome(details);
    if (!provisional) {
      resolvedMatchups.push(matchup);
      continue;
    }
    resolvedMatchups.push({
      ...matchup,
      endResult: provisional.result,
      homePoints: provisional.homePoints,
      awayPoints: provisional.awayPoints,
      provisional: true,
    });
    resolvedDetailById.set(matchup.matchupId, {
      ...details,
      matchupPlayerStats: {
        $values: synthesizeMatchupPlayerStats(provisional, matchup, { gameTarget, isSubForTeam }),
      },
    });
    provisionalCount++;
  }

  return { matchups: resolvedMatchups, detailById: resolvedDetailById, provisionalCount, gameTarget };
}

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
// `detailByMatchupId` is a Map of matchupId -> matchup details.
function computeRatings(completed, detailByMatchupId, lambda = RIDGE_LAMBDA) {
  // Collect one row per game: +1 home pair, -1 away pair, target = home margin.
  const rows = []; // each: { plus: [id,id], minus: [id,id], margin }
  const gamesPlayedCount = {};
  for (const mu of completed) {
    const d = detailByMatchupId.get(mu.matchupId) || null;
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

function computeWeeklyRatingHistory(completed, detailByMatchupId, playersById) {
  const weeks = [...new Set(completed.map((matchup) => matchup.weekNumber))].sort((a, b) => a - b);
  const historyByPid = {};

  for (const week of weeks) {
    const snapshotRatings = computeRatings(
      completed.filter((matchup) => matchup.weekNumber <= week),
      detailByMatchupId,
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
function computePairSynergy(completed, detailByMatchupId, ratings, homeTeamByPid = {}, playerInfoById = {}) {
  const rOf = pid => (ratings[pid] ? ratings[pid].rating : 0);
  const nameOf = {}, teamOf = {};
  const acc = {}; // "idA|idB" -> { a, b, n, sumRes, sumAct, sumExp, w }

  for (const mu of completed) {
    const d = detailByMatchupId.get(mu.matchupId) || null;
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
    (partnersByPid[e.aId] = partnersByPid[e.aId] || []).push({ pid: e.bId, name: e.b, n: e.n, synergy: e.synergy });
    (partnersByPid[e.bId] = partnersByPid[e.bId] || []).push({ pid: e.aId, name: e.a, n: e.n, synergy: e.synergy });
  }
  for (const pid of Object.keys(partnersByPid)) partnersByPid[pid].sort((x, y) => y.synergy - x.synergy);

  return { duos, partnersByPid };
}

module.exports = {
  RIDGE_LAMBDA,
  PAIR_K,
  PAIR_MIN,
  isForfeit,
  isClutch,
  countsTowardPlayerStats,
  deriveProvisionalOutcome,
  inferGameTarget,
  clampGameScores,
  synthesizeMatchupPlayerStats,
  applyProvisionalOutcomes,
  invertMatrix,
  computeRatings,
  computeWeeklyRatingHistory,
  computePairSynergy,
};
