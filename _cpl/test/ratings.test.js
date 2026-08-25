const test = require('node:test');
const assert = require('node:assert/strict');
const {
  invertMatrix,
  computeRatings,
  computePairSynergy,
  deriveProvisionalOutcome,
  isForfeit,
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
