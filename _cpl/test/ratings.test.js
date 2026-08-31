const test = require('node:test');
const assert = require('node:assert/strict');
const {
  invertMatrix,
  computeRatings,
  computePairSynergy,
  deriveProvisionalOutcome,
  isForfeit,
  isClutch,
  inferGameTarget,
  clampGameScores,
  synthesizeMatchupPlayerStats,
  applyProvisionalOutcomes,
} = require('../modules/ratings');

function game(h1, h2, a1, a2, hs, as, matchType = 'mixed') {
  return {
    homePlayerId1: h1, homePlayerId2: h2,
    awayPlayerId1: a1, awayPlayerId2: a2,
    homeScore: hs, awayScore: as, matchType,
  };
}

function detailWithGames(games) {
  return { lineups: { lineups: { $values: games } } };
}

test('invertMatrix inverts a diagonal matrix', () => {
  const inv = invertMatrix([[2, 0], [0, 4]]);
  assert.deepEqual(inv, [[0.5, 0], [0, 0.25]]);
});

test('invertMatrix produces A·A⁻¹ ≈ I', () => {
  const A = [[5, 1, 0], [1, 6, 2], [0, 2, 7]];
  const inv = invertMatrix(A);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let sum = 0;
      for (let k = 0; k < 3; k++) sum += A[i][k] * inv[k][j];
      assert.ok(Math.abs(sum - (i === j ? 1 : 0)) < 1e-9, `entry ${i},${j} = ${sum}`);
    }
  }
});

test('isForfeit flags token 1-0 scores only', () => {
  assert.equal(isForfeit({ homeScore: 1, awayScore: 0 }), true);
  assert.equal(isForfeit({ homeScore: 11, awayScore: 0 }), false);
  assert.equal(isForfeit({ homeScore: 9, awayScore: 11 }), false);
});

test('computeRatings credits the winning pair symmetrically and stays bounded', () => {
  const completed = [{ matchupId: 'm1', weekNumber: 1 }];
  const details = new Map([
    ['m1', detailWithGames([
      game('a', 'b', 'c', 'd', 11, 5),
      game('a', 'b', 'c', 'd', 11, 7),
    ])],
  ]);
  const ratings = computeRatings(completed, details);

  assert.deepEqual(Object.keys(ratings).sort(), ['a', 'b', 'c', 'd']);
  assert.equal(ratings.a.rating, ratings.b.rating);
  assert.equal(ratings.c.rating, ratings.d.rating);
  assert.ok(ratings.a.rating > 0, 'winners rate above average');
  assert.ok(ratings.c.rating < 0, 'losers rate below average');
  // Zero-sum design: winners and losers mirror each other.
  assert.equal(ratings.a.rating, -ratings.c.rating);
  for (const r of Object.values(ratings)) {
    assert.equal(r.ratingGames, 2);
    assert.ok(r.confidence >= 0 && r.confidence <= 100);
  }
});

test('computeRatings excludes forfeits entirely', () => {
  const completed = [{ matchupId: 'm1', weekNumber: 1 }];
  const details = new Map([
    ['m1', detailWithGames([game('a', 'b', 'c', 'd', 1, 0)])],
  ]);
  assert.deepEqual(computeRatings(completed, details), {});
});

test('computeRatings tolerates a matchup without details', () => {
  const completed = [{ matchupId: 'missing', weekNumber: 1 }];
  assert.deepEqual(computeRatings(completed, new Map()), {});
});

test('deriveProvisionalOutcome needs fully slotted, fully scored, non-tied lineups', () => {
  assert.equal(deriveProvisionalOutcome(detailWithGames([])), null);
  // Unscored slotted game -> null
  assert.equal(deriveProvisionalOutcome(detailWithGames([
    { homePlayerId1: 'a', homePlayerId2: 'b', awayPlayerId1: 'c', awayPlayerId2: 'd', homeScore: null, awayScore: null },
  ])), null);
  // Tie on game wins -> null
  assert.equal(deriveProvisionalOutcome(detailWithGames([
    game('a', 'b', 'c', 'd', 11, 5),
    game('a', 'b', 'c', 'd', 5, 11),
  ])), null);

  const outcome = deriveProvisionalOutcome(detailWithGames([
    game('a', 'b', 'c', 'd', 11, 5),
    game('a', 'b', 'c', 'd', 11, 7),
    game('a', 'b', 'c', 'd', 3, 11),
  ]));
  assert.equal(outcome.result, 'home');
  assert.equal(outcome.homeGW, 2);
  assert.equal(outcome.awayGW, 1);
  assert.equal(outcome.homePoints, 25);
  assert.equal(outcome.awayPoints, 23);
});

test('isClutch flags two-point games but not forfeits', () => {
  assert.equal(isClutch({ homeScore: 21, awayScore: 19 }), true);
  assert.equal(isClutch({ homeScore: 25, awayScore: 23 }), true);
  assert.equal(isClutch({ homeScore: 19, awayScore: 21 }), true);
  assert.equal(isClutch({ homeScore: 21, awayScore: 18 }), false);
  assert.equal(isClutch({ homeScore: 1, awayScore: 0 }), false, 'forfeits are not clutch');
});

test('inferGameTarget picks the most common winning score', () => {
  const details = new Map([
    ['m1', detailWithGames([
      game('a', 'b', 'c', 'd', 21, 19),
      game('a', 'b', 'c', 'd', 25, 23),
      game('a', 'b', 'c', 'd', 18, 21),
    ])],
  ]);
  assert.equal(inferGameTarget(details), 21);
  assert.equal(inferGameTarget(new Map()), 21, 'falls back to the current format');
});

test('clampGameScores takes the overage off both sides, preserving margin', () => {
  assert.deepEqual(clampGameScores({ homeScore: 25, awayScore: 23 }, 21), { home: 21, away: 19 });
  assert.deepEqual(clampGameScores({ homeScore: 19, awayScore: 22 }, 21), { home: 18, away: 21 });
  assert.deepEqual(clampGameScores({ homeScore: 21, awayScore: 12 }, 21), { home: 21, away: 12 });
  assert.deepEqual(clampGameScores({ homeScore: 1, awayScore: 0 }, 21), { home: 1, away: 0 });
});

test('synthesizeMatchupPlayerStats rebuilds the stat rows the league omits', () => {
  const matchup = { matchupId: 'm1', homeTeamId: 'H', awayTeamId: 'A' };
  const provisional = deriveProvisionalOutcome(detailWithGames([
    game('a', 'b', 'c', 'd', 25, 23, 'mixed'),
    game('a', 'b', 'c', 'd', 21, 12, 'male'),
    game('a', 'b', 'c', 'd', 15, 21, 'female'),
  ]));
  const rows = synthesizeMatchupPlayerStats(provisional, matchup, {
    gameTarget: 21,
    isSubForTeam: (playerId) => playerId === 'd',
  });

  assert.deepEqual(rows.map(r => r.playerId), ['a', 'b', 'c', 'd']);
  const a = rows.find(r => r.playerId === 'a');
  assert.equal(a.teamId, 'H');
  assert.equal(a.isSub, false);
  assert.equal(a.gamesPlayed, 3);
  assert.equal(a.wins, 2);
  assert.equal(a.losses, 1);
  // Points are clamped: the 25-23 counts as 21-19, so 21+21+15 / 19+12+21.
  assert.equal(a.pointsWon, 57);
  assert.equal(a.totalPointsAgainst, 52);
  assert.equal(a.clutchWins, 1, 'the 25-23 was a two-point game');
  assert.equal(a.clutchLosses, 0);
  assert.deepEqual([a.mixedWins, a.mixedLosses], [1, 0]);
  assert.deepEqual([a.genderWins, a.genderLosses], [1, 1], "men's and women's both count as gender games");

  const c = rows.find(r => r.playerId === 'c');
  assert.equal(c.teamId, 'A');
  assert.equal(c.pointsWon, 52, 'mirrors the home side');
  assert.equal(c.wins, 1);
  assert.equal(c.clutchLosses, 1);
  assert.equal(rows.find(r => r.playerId === 'd').isSub, true);
});

test('synthesizeMatchupPlayerStats leaves out games that never reached the target', () => {
  const matchup = { matchupId: 'm1', homeTeamId: 'H', awayTeamId: 'A' };
  const provisional = deriveProvisionalOutcome(detailWithGames([
    game('a', 'b', 'c', 'd', 21, 12),
    game('a', 'b', 'c', 'd', 1, 0),   // walkover
    game('a', 'b', 'c', 'd', 8, 12),  // abandoned part-way
  ]));
  const rows = synthesizeMatchupPlayerStats(provisional, matchup, {
    gameTarget: 21,
    isSubForTeam: () => false,
  });

  const a = rows.find(r => r.playerId === 'a');
  assert.equal(a.gamesPlayed, 1, 'only the completed game counts');
  assert.deepEqual([a.wins, a.losses], [1, 0]);
  assert.equal(a.pointsWon, 21);
  assert.equal(a.totalPointsAgainst, 12);
  assert.equal(a.clutchLosses, 0, 'a 1-0 walkover is not a clutch loss');

  // The team totals in the outcome still carry every point scored, walkovers and
  // abandoned games included — that's how the league reports them.
  assert.equal(provisional.homePoints, 30);
  assert.equal(provisional.awayPoints, 24);
});

test('applyProvisionalOutcomes resolves a scored-but-unconfirmed matchup into a result', () => {
  const scored = { matchupId: 'prov', weekNumber: 2, homeTeamId: 'H', awayTeamId: 'A', endResult: null, homePoints: 0, awayPoints: 0 };
  const confirmed = { matchupId: 'done', weekNumber: 1, homeTeamId: 'H', awayTeamId: 'A', endResult: 'away', homePoints: 30, awayPoints: 40 };
  const upcoming = { matchupId: 'next', weekNumber: 3, homeTeamId: 'H', awayTeamId: 'A', endResult: null };
  const details = new Map([
    ['done', detailWithGames([game('a', 'b', 'c', 'd', 15, 21)])],
    ['prov', detailWithGames([
      game('a', 'b', 'c', 'd', 21, 19),
      game('a', 'b', 'c', 'd', 21, 12),
    ])],
    // Lineups posted but not yet played: stays unresolved.
    ['next', detailWithGames([
      { homePlayerId1: 'a', homePlayerId2: 'b', awayPlayerId1: 'c', awayPlayerId2: 'd', homeScore: null, awayScore: null, matchType: 'mixed' },
    ])],
  ]);

  const resolved = applyProvisionalOutcomes([confirmed, scored, upcoming], details, {
    isSubForTeam: () => false,
  });

  assert.equal(resolved.provisionalCount, 1);
  assert.equal(resolved.gameTarget, 21);
  const [done, prov, next] = resolved.matchups;

  assert.equal(done.endResult, 'away', 'a confirmed matchup passes through untouched');
  assert.equal(done.provisional, undefined);
  assert.equal(next.endResult, null, 'an unplayed matchup stays unresolved');

  assert.equal(prov.endResult, 'home');
  assert.equal(prov.provisional, true);
  assert.equal(prov.homePoints, 42);
  assert.equal(prov.awayPoints, 31);

  // The details gain the synthesized stat rows, so the stat loop treats it like
  // any other result; the confirmed matchup's details are untouched.
  const provRows = resolved.detailById.get('prov').matchupPlayerStats.$values;
  assert.equal(provRows.length, 4);
  assert.equal(provRows.find(r => r.playerId === 'a').wins, 2);
  assert.equal(resolved.detailById.get('done'), details.get('done'));
  assert.equal(resolved.detailById.get('next'), details.get('next'));

  // Inputs are not mutated.
  assert.equal(scored.endResult, null);
  assert.equal(scored.homePoints, 0);
  assert.equal(details.get('prov').matchupPlayerStats, undefined);
});

test('applyProvisionalOutcomes feeds provisional games into the ratings', () => {
  const scored = { matchupId: 'prov', weekNumber: 1, homeTeamId: 'H', awayTeamId: 'A', endResult: null };
  const details = new Map([
    ['prov', detailWithGames([
      game('a', 'b', 'c', 'd', 21, 5),
      game('a', 'b', 'c', 'd', 21, 7),
    ])],
  ]);
  const resolved = applyProvisionalOutcomes([scored], details, { isSubForTeam: () => false });
  const completed = resolved.matchups.filter(m => m.endResult);

  assert.equal(completed.length, 1);
  const ratings = computeRatings(completed, resolved.detailById);
  assert.ok(ratings.a.rating > 0, 'the provisional winners are rated');
  assert.ok(ratings.c.rating < 0);
  assert.equal(ratings.a.ratingGames, 2);
});

test('computePairSynergy surfaces pairs only at 3+ shared games', () => {
  const mu = { matchupId: 'm1', weekNumber: 1, homeTeamId: 'H', awayTeamId: 'A', homeName: 'Homies', awayName: 'Aways' };
  const details = new Map([
    ['m1', {
      matchupPlayerStats: { $values: [
        { playerId: 'a', teamId: 'H' },
        { playerId: 'b', teamId: 'H' },
        { playerId: 'c', teamId: 'A' },
        { playerId: 'd', teamId: 'A' },
      ] },
      lineups: { lineups: { $values: [
        game('a', 'b', 'c', 'd', 11, 5),
        game('a', 'b', 'c', 'd', 11, 6),
        game('a', 'b', 'c', 'd', 11, 7),
      ] } },
    }],
  ]);
  const ratings = computeRatings([mu], details);
  const { duos, partnersByPid } = computePairSynergy([mu], details, ratings, {}, {
    a: { firstName: 'Al', lastName: 'One' },
    b: { firstName: 'Bo', lastName: 'Two' },
    c: { firstName: 'Cy', lastName: 'Three' },
    d: { firstName: 'Dee', lastName: 'Four' },
  });
  assert.equal(duos.length, 2); // both pairs played 3 games together
  assert.equal(duos[0].n, 3);
  assert.ok(partnersByPid.a.some((p) => p.pid === 'b' && p.name === 'Bo Two'));
});
