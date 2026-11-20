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

// A side is slotted if at least one of its two players showed up — a team
// short a player still plays the game 1-against-2 rather than forfeiting it,
// and the league counts that game for everyone who was on court. Only a side
// with neither slot filled (both players absent) means the game itself never
// happened.
const hasPlayer = (g) => (g.homePlayerId1 || g.homePlayerId2) && (g.awayPlayerId1 || g.awayPlayerId2);

const isScored = (g) => Number.isFinite(g.homeScore) && Number.isFinite(g.awayScore);

// A game with a result: scored, and not 0–0. The league leaves a game it never
// played either blank or at 0–0 — regular-season games left over once a match
// was decided (games 25–32 of a 12–12 night settled on points), and a playoff
// tiebreak round the match didn't need. Its own player rows count a 0–0 game
// for nobody: not a win, not a loss, not even a game played. A blank one is a
// game played, with no result (see synthesizeMatchupPlayerStats).
const isPlayed = (g) => isScored(g) && Math.max(g.homeScore, g.awayScore) > 0;

// A playoff match can't end level. Captains post a tiebreak round on top of the
// regular games — three more pairs — and it's played only when the regular
// games split evenly; a regular-season 16–16 goes to total points instead. The
// league flags nothing: the tiebreak is simply every lineup past the length of
// a regular-season match (see regularMatchLength), so `tiebreakFrom` is that
// length, or null where there's no tiebreak to look for. A tiebreak game the
// match didn't need is left unscored or recorded 0–0 (see isPlayed).
const isTiebreakIndex = (index, tiebreakFrom) => tiebreakFrom != null && index >= tiebreakFrom;
const hasTiebreakRound = (details, tiebreakFrom) => tiebreakFrom != null
  && ((details && details.lineups && details.lineups.lineups && details.lineups.lineups.$values) || []).length > tiebreakFrom;

// A slotted game left unscored either hasn't been played yet or never will be —
// the league sometimes leaves a game blank once the match is already decided.
// Either way the result is knowable as soon as the leader is ahead by more games
// than are still unscored: nothing left can overturn it, and a match still in
// progress whose outcome could flip stays unresolved. The unscored games are
// left out of `games` and the point totals; there's no score to count. Blank
// ones are returned separately as `unscoredLineups`, because the league still
// counts them as games played (see synthesizeMatchupPlayerStats); a 0–0 one
// counts as unplayed for deciding the match, but isn't anyone's game played
// (see isPlayed).
//
// With `tiebreakFrom` (playoffs; see isTiebreakIndex) the regular games are
// called first, on their own: a lead the unscored regular games can't overturn
// decides the match, and the tiebreak round goes unplayed — it isn't counted,
// not even as games still to come, which is what once left a 17–15 playoff
// match "undecided" with three tiebreak games outstanding. Only an even split
// with every regular game scored goes to the tiebreak, called the same way.
// `tiebreakPlayed` says whether its games are part of the result.
function deriveProvisionalOutcome(details, { tiebreakFrom = null } = {}) {
  const allLineups = ((details && details.lineups && details.lineups.lineups && details.lineups.lineups.$values) || []);
  const hasTiebreak = hasTiebreakRound(details, tiebreakFrom);
  const regular = hasTiebreak ? allLineups.slice(0, tiebreakFrom) : allLineups;
  const tally = (lineups) => {
    const slotted = lineups.filter(hasPlayer);
    const scored = slotted.filter(isPlayed);
    const unscored = slotted.filter(g => !isPlayed(g));
    let homeGW = 0, awayGW = 0, homePoints = 0, awayPoints = 0;
    for (const g of scored) {
      homePoints += g.homeScore;
      awayPoints += g.awayScore;
      if (g.homeScore > g.awayScore) homeGW++;
      else awayGW++;
    }
    return { scored, unscored, homeGW, awayGW, homePoints, awayPoints };
  };

  const main = tally(regular);
  if (!main.scored.length) return null;
  const outcome = (parts, tiebreakPlayed) => {
    const sum = (key) => parts.reduce((total, part) => total + part[key], 0);
    const homeGW = sum('homeGW'), awayGW = sum('awayGW');
    const unplayed = parts.flatMap(part => part.unscored);
    return {
      result: homeGW > awayGW ? 'home' : 'away',
      homeGW, awayGW, homePoints: sum('homePoints'), awayPoints: sum('awayPoints'),
      games: parts.flatMap(part => part.scored),
      unscoredGames: unplayed.length, unscoredLineups: unplayed.filter(g => !isScored(g)), tiebreakPlayed,
    };
  };

  if (Math.abs(main.homeGW - main.awayGW) > main.unscored.length) return outcome([main], false);
  if (!hasTiebreak || main.unscored.length || main.homeGW !== main.awayGW) return null;
  const tiebreak = tally(allLineups.slice(tiebreakFrom));
  if (Math.abs(tiebreak.homeGW - tiebreak.awayGW) <= tiebreak.unscored.length) return null;
  return outcome([main, tiebreak], true);
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

// How many games a regular-season match has in this division: the most common
// lineup count across its matches (32 everywhere so far — but a division has
// run a short match, so it's counted rather than assumed). A playoff match's
// lineups past this many are its tiebreak round (see isTiebreakIndex). Null
// with no posted lineups to count, and then nothing is taken for a tiebreak.
function regularMatchLength(detailByMatchupId) {
  const counts = new Map();
  for (const details of detailByMatchupId.values()) {
    const length = ((details && details.lineups && details.lineups.lineups && details.lineups.lineups.$values) || []).length;
    if (length) counts.set(length, (counts.get(length) || 0) + 1);
  }
  let modal = null, best = 0;
  for (const [length, count] of counts) {
    if (count > best || (count === best && length < modal)) { best = count; modal = length; }
  }
  return modal;
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
        if (!playerId) continue; // short-handed side: the empty slot has no player to credit
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

  // A slotted game left unscored once the match was decided still counts as a
  // game played for everyone slotted into it, with no win, loss or points: the
  // league's rows for such a match report gamesPlayed one higher than
  // wins + losses for exactly those players (first seen 2026-11-05, travel
  // 2026-fall). For a match still being played this can run a game ahead, but it
  // lands on the league's number either way: the game is scored later or it stays blank.
  for (const g of (provisional.unscoredLineups || [])) {
    const sides = [
      { ids: [g.homePlayerId1, g.homePlayerId2], teamId: matchup.homeTeamId },
      { ids: [g.awayPlayerId1, g.awayPlayerId2], teamId: matchup.awayTeamId },
    ];
    for (const side of sides) {
      for (const playerId of side.ids) {
        if (playerId) rowFor(playerId, side.teamId).gamesPlayed++;
      }
    }
  }
  return [...rows.values()];
}

// Fold provisional outcomes into a matchup feed so everything downstream sees them
// as results. A matchup the league hasn't closed out but whose lineups are filled
// and scored far enough to decide it gets the derived `endResult` and point
// totals written onto it, plus `provisional: true` for the UI to label, and its
// details gain the per-player stat rows the league hasn't published yet (and
// lose any games still unscored). `completed` filters and
// stat accumulation then need no special case: a provisional result counts toward
// standings, records and ratings exactly as a confirmed one does, and the only
// thing that distinguishes it is the flag.
//
// Returns fresh objects throughout; neither input is mutated.
//
// `tiebreakFrom` is for playoff feeds only (see deriveProvisionalOutcome): a
// resolved match's details lose its tiebreak round as well when the match
// didn't need it.
function applyProvisionalOutcomes(matchups, detailByMatchupId, { isSubForTeam, tiebreakFrom = null }) {
  const gameTarget = inferGameTarget(detailByMatchupId);
  const resolvedMatchups = [];
  const resolvedDetailById = new Map(detailByMatchupId);
  let provisionalCount = 0;

  for (const matchup of matchups) {
    const details = detailByMatchupId.get(matchup.matchupId);
    const provisional = (matchup.endResult || !details) ? null : deriveProvisionalOutcome(details, { tiebreakFrom });
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
      // Downstream reads the lineups of every completed match as played games, so
      // a decided match's unscored games go: no stat should count them. The
      // compiler's match game list reads the unresolved details to show them.
      ...(provisional.unscoredGames || (hasTiebreakRound(details, tiebreakFrom) && !provisional.tiebreakPlayed) ? {
        lineups: {
          ...details.lineups,
          lineups: {
            ...details.lineups.lineups,
            $values: details.lineups.lineups.$values.filter((g, index) => (
              isPlayed(g) && (!isTiebreakIndex(index, tiebreakFrom) || provisional.tiebreakPlayed)
            )),
          },
        },
      } : {}),
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
//
// This is the single hottest path in the whole compile — profiling a full
// `npm run compile` (2026-09-24, 35 divisions) showed >80% of wall time inside
// this function, almost entirely computeWeeklyRatingHistory's one call per
// round (a division with W weeks re-solves this from scratch W+1 times, each
// on a growing player count). The algorithm here is unchanged from the plain-array
// version it replaced — same Gauss-Jordan steps, same pivoting, same order of
// operations — only the backing store did: each row is a Float64Array instead
// of a generic (boxed, polymorphic) Array, so the O(n³) inner loops run on
// untagged doubles. Verified bit-for-bit identical against the old
// implementation on random SPD matrices up to n=150 before landing; ratings.test.js
// pins the small hand-checked cases.
function invertMatrix(A) {
  const n = A.length;
  const width = 2 * n;
  // Augment [A | I] and reduce the left block to the identity.
  const M = new Array(n);
  for (let i = 0; i < n; i++) {
    const row = new Float64Array(width);
    const src = A[i];
    for (let j = 0; j < n; j++) row[j] = src[j];
    row[n + i] = 1;
    M[i] = row;
  }
  for (let col = 0; col < n; col++) {
    let piv = col;
    let pivAbs = Math.abs(M[col][col]);
    for (let r = col + 1; r < n; r++) {
      const v = Math.abs(M[r][col]);
      if (v > pivAbs) { piv = r; pivAbs = v; }
    }
    if (pivAbs < 1e-12) continue; // ridge should prevent singularity
    if (piv !== col) { const tmp = M[col]; M[col] = M[piv]; M[piv] = tmp; }
    const pivotRow = M[col];
    const pivVal = pivotRow[col];
    for (let c = 0; c < width; c++) pivotRow[c] /= pivVal;
    for (let r = 0; r < n; r++) {
      if (r === col) continue;
      const row = M[r];
      const factor = row[col];
      if (factor === 0) continue;
      for (let c = 0; c < width; c++) row[c] -= factor * pivotRow[c];
    }
  }
  // The right block is A⁻¹ — copied back into plain arrays so every caller
  // (JSON-serializing consumers included) keeps getting ordinary numbers.
  const inv = new Array(n);
  for (let i = 0; i < n; i++) {
    const out = new Array(n);
    const row = M[i];
    for (let j = 0; j < n; j++) out[j] = row[n + j];
    inv[i] = out;
  }
  return inv;
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

// A "round" is one calendar date's worth of completed matchups within a given
// week. Almost every week is a single round; a week that includes a make-up
// match played on a different date (a team playing twice in what the schedule
// calls "Week N") becomes two (or more) rounds, ordered chronologically, so a
// rating snapshot exists after each one instead of only once the whole week's
// matches are in. Grouping by calendar date (rather than exact scheduledTime)
// keeps same-night, different-court staggered start times — the common case —
// collapsed into one round.
//
// A playoff matchup arrives with `playoffRound` set and `weekNumber` already
// moved past the regular season (see computeWeeklyRatingHistory), so the
// bracket's rounds sort after every week; their labels are "P1", "P2", ….
const weekLabelOf = (round) => (round.playoffRound != null ? `P${round.playoffRound}` : String(round.week));

function groupMatchupsIntoRounds(completed) {
  const dateOnly = (t) => (t ? String(t).slice(0, 10) : '');
  const roundKeyOf = (matchup) => `${matchup.weekNumber}::${dateOnly(matchup.scheduledTime)}`;

  const roundByKey = new Map();
  for (const matchup of completed) {
    const key = roundKeyOf(matchup);
    if (!roundByKey.has(key)) {
      roundByKey.set(key, {
        key, week: matchup.weekNumber, sortTime: matchup.scheduledTime || '',
        ...(matchup.playoffRound != null ? { playoffRound: matchup.playoffRound } : {}),
      });
    }
  }

  const rounds = [...roundByKey.values()]
    .sort((a, b) => (a.week - b.week) || a.sortTime.localeCompare(b.sortTime));

  const roundsPerWeek = new Map();
  for (const round of rounds) roundsPerWeek.set(round.week, (roundsPerWeek.get(round.week) || 0) + 1);

  const seenInWeek = new Map();
  rounds.forEach((round, seq) => {
    const ordinal = seenInWeek.get(round.week) || 0;
    seenInWeek.set(round.week, ordinal + 1);
    round.seq = seq;
    round.round = ordinal + 1; // 1-based round number within the week
    round.roundsInWeek = roundsPerWeek.get(round.week);
    // "Week 3" when the week is a single round (the common case, unchanged
    // from before); "3a" / "3b" / ... when the week has more than one.
    round.baseLabel = weekLabelOf(round);
    round.label = round.roundsInWeek > 1
      ? `${round.baseLabel}${String.fromCharCode(96 + round.round)}`
      : round.baseLabel;
  });

  return { rounds, roundKeyOf };
}

// A division-wide round split (see groupMatchupsIntoRounds) tells us a make-up
// match happened somewhere that week, but not whether THIS player is the one
// who played twice — most players in a multi-round week just have a bye in
// one of the rounds and show up in it anyway (once they've played their first
// game, the cumulative rating recompute includes them in every later round,
// changed or not). Collapse a player's raw per-round entries down to what
// actually happened to THEM: keep a round only if their own ratingGames grew
// during it (a real match), and if none did that week (an ordinary bye), keep
// just the week's final round as the one carried-forward snapshot — exactly
// what the old week-only computation always showed. Only when a player has
// more than one real round in the same week do we keep them all, each with
// its own label ("2a" / "2b" / ...).
//
// A playoff round is not a bye for someone who didn't play in it: most of the
// division never plays a playoff match, and one flat point per round on all
// their charts would say nothing. So a playoff round a player sat out is
// dropped, except the last round of all — the refit after the final still
// moves everyone a little (every rating is solved jointly), and the history has
// to end on the rating the player is shown with.
function collapsePlayerHistory(rawEntries, finalRoundByWeek, lastWeek) {
  let prevRatingGames = null;
  const marked = rawEntries.map((entry) => {
    const isReal = prevRatingGames == null || entry.ratingGames !== prevRatingGames;
    prevRatingGames = entry.ratingGames;
    return { entry, isReal };
  });

  const kept = [];
  let i = 0;
  while (i < marked.length) {
    let j = i;
    while (j < marked.length && marked[j].entry.week === marked[i].entry.week) j++;
    const group = marked.slice(i, j);
    const realOnes = group.filter((m) => m.isReal).map((m) => m.entry);
    const satOutPlayoffRound = !realOnes.length && group[0].entry.playoffRound != null
      && group[0].entry.week !== lastWeek;
    const weekEntries = realOnes.length ? realOnes : [group[group.length - 1].entry];
    const canonical = finalRoundByWeek.get(weekEntries[0].week);

    if (satOutPlayoffRound) {
      // Nothing kept: see above.
    } else if (weekEntries.length === 1) {
      kept.push({ ...weekEntries[0], round: 1, roundsInWeek: 1, seq: canonical.seq, label: canonical.label });
    } else {
      weekEntries.forEach((entry, index) => {
        kept.push({
          ...entry,
          round: index + 1,
          roundsInWeek: weekEntries.length,
          label: `${canonical.label}${String.fromCharCode(97 + index)}`,
        });
      });
    }
    i = j;
  }
  return kept;
}

// `playoffs` are the completed playoff matchups, rated like any other week and
// charted after the last one: round n of the bracket becomes a week past the
// regular season's last, labelled "Pn" and carrying `playoffRound: n` instead
// of a `week` (that week number is only an ordering key and isn't shipped).
// `detailByMatchupId` has to hold their details too.
function computeWeeklyRatingHistory(completed, detailByMatchupId, playersById, { playoffs = [] } = {}) {
  const lastRegularWeek = Math.max(0, ...completed.map((matchup) => matchup.weekNumber || 0));
  const rated = [
    ...completed,
    ...playoffs.map((matchup) => ({
      ...matchup,
      weekNumber: lastRegularWeek + (matchup.weekNumber || 1),
      playoffRound: matchup.weekNumber || 1,
    })),
  ];
  const { rounds, roundKeyOf } = groupMatchupsIntoRounds(rated);
  const seqByRoundKey = new Map(rounds.map((round) => [round.key, round.seq]));
  const rawHistoryByPid = {};

  rounds.forEach((round) => {
    const snapshotRatings = computeRatings(
      rated.filter((matchup) => seqByRoundKey.get(roundKeyOf(matchup)) <= round.seq),
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
      (rawHistoryByPid[pid] = rawHistoryByPid[pid] || []).push({
        week: round.week,
        ...(round.playoffRound != null ? { playoffRound: round.playoffRound } : {}),
        seq: round.seq,
        rating: snapshot.rating,
        confidence: snapshot.confidence,
        rank: index + 1,
        ratingGames: snapshot.ratingGames,
        strengthOfPartners: snapshot.strengthOfPartners,
        strengthOfOpponents: snapshot.strengthOfOpponents,
      });
    });
  });

  // The last (chronologically latest) round of each week — where a player
  // who didn't personally double up that week collapses down to, regardless
  // of which of the week's rounds their one real match actually fell in.
  const finalRoundByWeek = new Map();
  for (const round of rounds) finalRoundByWeek.set(round.week, { seq: round.seq, label: round.baseLabel });
  const lastWeek = rounds.length ? rounds[rounds.length - 1].week : null;

  // `round`/`roundsInWeek` only exist to drive the two decisions below (is
  // this entry part of a genuine per-player doubleheader, and does the
  // shared axis need split ticks for this week) — strip them from what
  // actually ships, since nothing downstream reads them once that's decided.
  const collapsedByPid = {};
  for (const [pid, rawEntries] of Object.entries(rawHistoryByPid)) {
    collapsedByPid[pid] = collapsePlayerHistory(rawEntries, finalRoundByWeek, lastWeek);
  }

  const weeksNeedingSplit = new Set();
  for (const entries of Object.values(collapsedByPid)) {
    for (const entry of entries) {
      if (entry.roundsInWeek > 1) weeksNeedingSplit.add(entry.week);
    }
  }

  const weekKeyOf = (entry) => (entry.playoffRound != null ? { playoffRound: entry.playoffRound } : { week: entry.week });
  const historyByPid = {};
  for (const [pid, entries] of Object.entries(collapsedByPid)) {
    historyByPid[pid] = entries.map((entry) => ({
      ...weekKeyOf(entry),
      seq: entry.seq,
      label: entry.label,
      rating: entry.rating,
      confidence: entry.confidence,
      rank: entry.rank,
      ratingGames: entry.ratingGames,
      strengthOfPartners: entry.strengthOfPartners,
      strengthOfOpponents: entry.strengthOfOpponents,
    }));
  }

  const weeks = rounds
    .filter((round) => round.roundsInWeek === 1 || weeksNeedingSplit.has(round.week) || round.round === round.roundsInWeek)
    .map((round) => {
      const splitting = round.roundsInWeek > 1 && weeksNeedingSplit.has(round.week);
      return {
        ...weekKeyOf(round),
        label: splitting ? round.label : round.baseLabel,
        seq: round.seq,
      };
    });

  return { historyByPid, weeks };
}

// Teammate-pair "chemistry": how much a pair over/under-performs the result
// their four individual ratings predict. Per game, residual = actual margin -
// expected margin (from ratings). Synergy is the shrunk average residual,
// Σresidual / (n + PAIR_K), which pulls thin-sample pairs toward 0.
// Returns { duos: [...n>=PAIR_MIN, sorted...], partnersByPid: { pid: [{...}] } }.
function computePairSynergy(completed, detailByMatchupId, ratings, homeTeamByPid = {}, nameById = {}) {
  const rOf = pid => (ratings[pid] ? ratings[pid].rating : 0);
  const nameOf = {}, teamOf = {};
  const acc = {}; // "idA|idB" -> { a, b, n, sumRes, sumAct, sumExp, w }

  for (const mu of completed) {
    const d = detailByMatchupId.get(mu.matchupId) || null;
    if (!d) continue;
    const teamNameById = { [mu.homeTeamId]: mu.homeName, [mu.awayTeamId]: mu.awayName };
    for (const p of (d.matchupPlayerStats && d.matchupPlayerStats.$values) || []) {
      nameOf[p.playerId] = nameById[p.playerId] || '';
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
  isScored,
  isPlayed,
  isTiebreakIndex,
  regularMatchLength,
  inferGameTarget,
  clampGameScores,
  synthesizeMatchupPlayerStats,
  applyProvisionalOutcomes,
  invertMatrix,
  computeRatings,
  computeWeeklyRatingHistory,
  computePairSynergy,
};
