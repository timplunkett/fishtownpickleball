// A playoff match can't end level: captains post three more pairs, a tiebreak
// round played only when the 32 regular games split 16–16 (a regular-season
// 16–16 goes to total points instead). The league marks nothing — those games
// are just the lineups past a regular match's length — so the pipeline flags
// them `tb`, and nothing that adds up a match may count them as regular games:
// not the game record, not the provisional call, not the Lineup Lab's pair
// limit, playing time or win chance. Checked on synthetic lineups and on every
// archived playoff match that had a tiebreak round posted.
const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');

const {
  deriveProvisionalOutcome,
  applyProvisionalOutcomes,
  regularMatchLength,
} = require('../modules/ratings');
const { archivedDivisions, compiledData } = require('./helpers/compiled');
const { loadApp } = require('./helpers/app-harness');

const REGULAR = 32;

function game(hs, as, matchType = 'mixed') {
  return {
    homePlayerId1: 'h1', homePlayerId2: 'h2', awayPlayerId1: 'a1', awayPlayerId2: 'a2',
    homeScore: hs, awayScore: as, matchType,
  };
}
const detail = (games) => ({ lineups: { lineups: { $values: games } } });
// `home` regular games won by home, the rest of the 32 by away.
const regular = (home) => Array.from({ length: REGULAR }, (_, index) => (index < home ? game(21, 15) : game(15, 21)));

test('regularMatchLength is the most common lineup count, and null with none', () => {
  const byId = new Map([
    ['a', detail(regular(16))], ['b', detail(regular(16))], ['c', detail(regular(16).slice(0, 24))], ['d', detail([])],
  ]);
  assert.equal(regularMatchLength(byId), REGULAR);
  assert.equal(regularMatchLength(new Map()), null);
});

test('a playoff decided in the regular games ignores its unplayed tiebreak round', () => {
  for (const tiebreak of [[null, null], [0, 0]]) {
    const lineups = [...regular(17), ...[0, 1, 2].map(() => game(...tiebreak))];
    const outcome = deriveProvisionalOutcome(detail(lineups), { tiebreakFrom: REGULAR });
    assert.ok(outcome, `17–15 with a ${tiebreak.join('–')} tiebreak round is decided`);
    assert.equal(outcome.result, 'home');
    assert.deepEqual([outcome.homeGW, outcome.awayGW], [17, 15]);
    assert.equal(outcome.tiebreakPlayed, false);
    assert.equal(outcome.unscoredGames, 0, 'the tiebreak round isn\'t left over as games to come');
  }
  // Without the tiebreak known, three unscored games could still flip a 17–15.
  const lineups = [...regular(17), game(null, null), game(null, null), game(null, null)];
  assert.equal(deriveProvisionalOutcome(detail(lineups)), null);
});

test('a 16–16 playoff goes to its tiebreak round, and waits for it', () => {
  const tied = regular(16);
  const decided = deriveProvisionalOutcome(detail([...tied, game(21, 17), game(17, 21), game(24, 22)]), { tiebreakFrom: REGULAR });
  assert.equal(decided.result, 'home');
  assert.deepEqual([decided.homeGW, decided.awayGW], [18, 17]);
  assert.equal(decided.tiebreakPlayed, true);
  assert.equal(decided.homePoints, 16 * 21 + 16 * 15 + 21 + 17 + 24);

  // 1–0 with one to play could still go either way; so could nothing played.
  assert.equal(deriveProvisionalOutcome(detail([...tied, game(21, 17), game(null, null), game(null, null)]), { tiebreakFrom: REGULAR }), null);
  assert.equal(deriveProvisionalOutcome(detail([...tied, game(0, 0), game(0, 0), game(0, 0)]), { tiebreakFrom: REGULAR }), null);
  // 2–0 is decided.
  const early = deriveProvisionalOutcome(detail([...tied, game(21, 17), game(21, 19), game(null, null)]), { tiebreakFrom: REGULAR });
  assert.equal(early.result, 'home');
});

test('a resolved playoff match loses an unneeded tiebreak round from its details', () => {
  const lineups = [...regular(18), game(0, 0), game(0, 0), game(0, 0)];
  const { matchups, detailById } = applyProvisionalOutcomes(
    [{ matchupId: 'm', homeTeamId: 'H', awayTeamId: 'A' }],
    new Map([['m', detail(lineups)]]),
    { isSubForTeam: () => false, tiebreakFrom: REGULAR },
  );
  assert.equal(matchups[0].endResult, 'home');
  assert.equal(detailById.get('m').lineups.lineups.$values.length, REGULAR);
});

// Every archived playoff match with a tiebreak round posted.
function archivedTiebreakMatches() {
  return archivedDivisions().flatMap((division) => (
    (compiledData(division).playoffs || [])
      .filter((match) => (match.games || []).length > REGULAR)
      .map((match) => ({ division, match }))
  ));
}

test('archived playoff tiebreak rounds are flagged, and counted only when played', () => {
  const found = archivedTiebreakMatches();
  const played = found.filter(({ match }) => match.complete && match.games.some((g) => g.tb && !g.ns));
  const unneeded = found.filter(({ match }) => match.complete && match.games.every((g) => !g.tb || g.ns));
  assert.ok(played.length, 'no archived playoff match went to its tiebreak round');
  assert.ok(unneeded.length, 'no archived playoff match had an unneeded tiebreak round');

  for (const { division, match } of found) {
    const where = `${division.label}: ${match.home} vs ${match.away}`;
    match.games.forEach((g, index) => assert.equal(Boolean(g.tb), index >= REGULAR, `${where}: game ${index + 1}`));
    if (!match.complete) continue;
    const regularGames = match.games.filter((g) => !g.tb);
    const regularHome = regularGames.filter((g) => !g.ns && g.hs > g.as).length;
    const regularAway = regularGames.filter((g) => !g.ns && g.hs <= g.as).length;
    const tiebreakPlayed = match.games.some((g) => g.tb && !g.ns);
    assert.equal(tiebreakPlayed, regularHome === regularAway, `${where}: the tiebreak is played exactly when the regular games split evenly`);
    assert.equal(match.homeGW + match.awayGW, match.games.filter((g) => !g.ns).length, `${where}: only played games count`);
    assert.equal(match.result, match.homeGW > match.awayGW ? 'home' : 'away', `${where}: the record agrees with the result`);
  }
});

// The Lineup Lab on an archived playoff match whose tiebreak round was posted
// and played out, from the home team's side.
function labOnTiebreak() {
  const { division, match } = archivedTiebreakMatches().find(({ match: m }) => m.complete);
  const loaded = loadApp(division.file);
  const { context } = loaded;
  const slug = context.CPLShared.slugify(match.home);
  context.location.search = `?lineup=1&team=${slug}`;
  context.location.href = `http://x/cpl/travel/?lineup=1&team=${slug}`;
  context.handleRoute();
  const index = context.lineupSeasonMatchesForTeam(match.home)
    .findIndex((m) => m.playoff && m.round === match.round && m.away === match.away);
  assert.notEqual(index, -1);
  context.handleLineupLabChange({ target: { id: 'lineup-matchup', value: String(index) } });
  return { ...loaded, match };
}

test('the Lineup Lab leaves the tiebreak round out of the weekly pair limit', () => {
  const { context, document } = labOnTiebreak();
  // A const in app.js, so not a property of the context.
  const { games } = vm.runInContext('lineupLabState', context);
  assert.equal(games.length, REGULAR + 3);
  assert.equal(JSON.stringify(games.map((g) => g.tb)), JSON.stringify(games.map((_, index) => index >= REGULAR)));

  // A pair already used twice in the regular games, put into the tiebreak
  // round too: still within the limit.
  const counts = new Map();
  let reused = null;
  for (const g of games.slice(0, REGULAR)) {
    const key = g.a.slice().sort().join('|');
    counts.set(key, (counts.get(key) || 0) + 1);
    const tiebreakGame = games.slice(REGULAR).find((t) => t.type === g.type);
    if (counts.get(key) === 2 && tiebreakGame) reused = { pair: g.a.slice(), tiebreakGame };
  }
  assert.ok(reused, 'no pair used twice in the regular games to reuse in the tiebreak');
  reused.tiebreakGame.a = reused.pair;
  context.renderLineupLab({ scroll: false });
  let html = document.getElementById('lineupview').innerHTML;
  assert.doesNotMatch(html, /weekly maximum/);
  assert.match(html, /Pair limit clear/);
  assert.match(html, /class="tiebreak-divider"><td colspan="5" class="l">Tiebreak — played only if the match is tied 16–16/);

  // The same pair a third time in a regular game does break it.
  const regularGame = games.slice(0, REGULAR).find((g) => g.type === reused.tiebreakGame.type
    && g.a.slice().sort().join('|') !== reused.pair.slice().sort().join('|'));
  regularGame.a = reused.pair.slice();
  context.renderLineupLab({ scroll: false });
  html = document.getElementById('lineupview').innerHTML;
  assert.match(html, /Pair used 3× — weekly maximum is 2/);
  assert.match(html, /Pair limit broken/);
});

test('a tiebreak round decides the win chance only from an even split', () => {
  const { context } = loadApp(archivedDivisions()[0].file);
  const coinFlips = new Array(REGULAR).fill(0.5);
  let even = 1;
  for (let k = 1; k <= 16; k++) even *= (16 + k) / k;
  even /= 2 ** REGULAR; // C(32,16) / 2^32
  const flags = [...coinFlips.map(() => false), true, true, true];
  const { chance, expected } = context.lineupMatchWinChance([...coinFlips, 0.6, 0.6, 0.6], flags);
  // Ahead outright half of the uneven nights, plus the tiebreak's 64.8% of the even ones.
  assert.ok(Math.abs(chance - ((1 - even) / 2 + even * 0.648)) < 1e-12);
  assert.ok(Math.abs(expected - (16 + even * 1.8)) < 1e-12);
  // Without flags those 35 games are one majority vote, as in the regular season.
  assert.ok(Math.abs(context.lineupMatchWinChance([...coinFlips, 0.6, 0.6, 0.6]).chance - chance) > 1e-3);
});

test('the auto lineup plans the tiebreak round outside the pair limit and playing time', () => {
  const { context } = labOnTiebreak();
  const auto = context.lineupAutoSpec();
  assert.ok(!auto.error, auto.error);
  const { spec, play } = auto;
  // JSON: the arrays come from app.js's own realm.
  assert.equal(JSON.stringify(spec.tiebreak), JSON.stringify(spec.slotGenders.map((_, index) => index >= REGULAR)));
  // Bands are shared out over the regular slots only.
  const bandSlots = Object.values(play.bands).reduce((sum, band) => sum + band.slots, 0);
  assert.equal(bandSlots, REGULAR * 2);

  const result = context.optimizeLineup(spec);
  assert.ok(!result.error, result.error);
  assert.equal(result.pairs.length, REGULAR + 3);
  const pairCounts = new Map();
  const games = new Map();
  result.pairs.forEach((pair, index) => {
    if (index >= REGULAR) return;
    const key = pair.slice().sort().join('|');
    pairCounts.set(key, (pairCounts.get(key) || 0) + 1);
    for (const name of pair) games.set(name, (games.get(name) || 0) + 1);
  });
  for (const [key, count] of pairCounts) assert.ok(count <= 2, `${key} paired ${count} times in the regular games`);
  for (let round = 0; round * 4 < result.pairs.length; round++) {
    const names = result.pairs.slice(round * 4, round * 4 + 4).flat();
    assert.equal(new Set(names).size, names.length, `round ${round + 1}: a player is on two courts`);
  }
  const genderOf = new Map(spec.players.map((player) => [player.name, player.gender]));
  for (const [name, count] of games) {
    const band = play.bands[play.poolOf({ gender: genderOf.get(name) })];
    assert.ok(count >= band.lo && count <= band.hi, `${name} plays ${count} regular games, outside ${band.lo}–${band.hi}`);
  }
});
