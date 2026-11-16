// The Lineup Lab's opponent simulation: filling Team B's open side with a
// "likely" or "strongest" lineup, ticking who on their roster may play, and
// "Best chance to win" planning against every simulated lineup at once.
// Archived divisions only, with the team's last regular-season match reopened
// so its lineups are open again. Rendered through cpl/app.js.
const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');

const { archivedDivisions, compiledData } = require('./helpers/compiled');
const { loadApp } = require('./helpers/app-harness');

// A rostered team whose last regular-season opponent posted lineups this
// season, so the opponent has history to simulate from.
function pickTeam(DATA) {
  for (const team of DATA.teams) {
    if (!DATA.players.some((player) => player.team === team.name)) continue;
    const involves = (match) => match.home === team.name || match.away === team.name;
    const matches = (DATA.matches || []).filter(involves).sort((a, b) => a.week - b.week);
    const last = matches[matches.length - 1];
    if (last?.games?.length) return { team: team.name, index: matches.length - 1, involves, real: last };
  }
  return null;
}

// Loads the lab on `division` with the picked team's last match reopened, and
// that matchup selected.
function openReopened(division) {
  const found = pickTeam(compiledData(division));
  assert.ok(found, `${division.label}: no team with a posted last match`);
  const { team, index, involves } = found;
  const mutate = (data) => {
    data.playoffs = [];
    const last = data.matches.filter(involves).sort((a, b) => a.week - b.week).pop();
    Object.assign(last, {
      complete: false, result: null, games: [], homePoints: 0, awayPoints: 0, homeGW: 0, awayGW: 0,
    });
  };
  const { context, document } = loadApp(division.file, { mutate });
  const slug = context.CPLShared.slugify(team);
  context.location.search = `?lineup=1&team=${slug}`;
  context.location.href = `http://x/cpl/travel/?lineup=1&team=${slug}`;
  context.handleRoute();
  context.handleLineupLabChange({ target: { id: 'lineup-matchup', value: String(index) } });
  const state = vm.runInContext('lineupLabState', context);
  const view = document.getElementById('lineupview');
  return { context, state, view, team, found };
}

const click = (context, selector, dataset) => context.handleLineupLabClick({
  button: 0,
  target: { closest: (wanted) => (wanted === selector ? { dataset, disabled: false } : null) },
});
const chooseOpp = (context, mode) => click(context, '[data-lineup-opp-mode]', { lineupOppMode: mode });
const chooseMode = (context, mode) => click(context, '[data-lineup-mode]', { lineupMode: mode });

// League rules, for one side's pairs: the slot's gender, one game per round,
// a pair at most twice, only `allowed` players.
function checkRules(context, state, pairs, allowed) {
  const genders = new Map(context.lineupRoster(state.teamB).map((player) => [player.name, player.gender]));
  assert.equal(pairs.length, state.games.length);
  const pairCounts = new Map();
  pairs.forEach((pair, game) => {
    assert.ok(pair[0] && pair[1] && pair[0] !== pair[1], `game ${game + 1}: ${pair.join(' / ')}`);
    pair.forEach((name, slot) => {
      assert.ok(allowed.has(name), `game ${game + 1}: ${name} is not an available player`);
      const gender = context.lineupExpectedGender(state.games[game].type, slot);
      if (gender) assert.equal(genders.get(name), gender, `game ${game + 1}: ${name} in a ${gender} slot`);
    });
    const key = pair.slice().sort().join('|');
    pairCounts.set(key, (pairCounts.get(key) || 0) + 1);
  });
  for (const [key, count] of pairCounts) assert.ok(count <= 2, `${key} paired ${count} times`);
  for (let round = 0; round * 4 < pairs.length; round++) {
    const names = pairs.slice(round * 4, round * 4 + 4).flat();
    assert.equal(new Set(names).size, names.length, `round ${round + 1}: a player is on two courts`);
  }
}

for (const division of archivedDivisions()) {
  test(`${division.label}: simulated opponent lineups follow the rules, skip outside subs, and order courts`, () => {
    const { context, state } = openReopened(division);
    assert.ok(context.lineupOpponentSimulatable(), 'the reopened matchup is open');
    const subs = new Set(context.lineupOutsideSubNames(state.teamB));
    const unavailable = context.lineupOppUnavailable();
    for (const name of subs) assert.ok(unavailable.has(name), `outside sub ${name} starts unavailable`);
    const allowed = new Set(context.lineupRoster(state.teamB).map((player) => player.name)
      .filter((name) => !unavailable.has(name)));
    const strength = (pair) => pair.reduce((sum, name) => sum + (context.resolvePlayerRating(name)?.rating ?? 0), 0)
      + (context.pairSynergyFor(pair[0], pair[1])?.synergy || 0);
    const totals = {};
    for (const mode of ['likely', 'strongest']) {
      const opp = context.lineupOpponentSamples(mode);
      assert.ok(!opp.error, `${mode}: ${opp.error}`);
      assert.equal(opp.samples.length, mode === 'likely' ? 24 : 1);
      let total = 0;
      for (const pairs of opp.samples) {
        checkRules(context, state, pairs, allowed);
        for (const name of pairs.flat()) assert.ok(!subs.has(name), `${mode} used outside sub ${name}`);
        // Within each round, the strongest pair of each game type is on the lowest court.
        for (let round = 0; round * 4 < pairs.length; round++) {
          const byType = new Map();
          for (let game = round * 4; game < Math.min(pairs.length, round * 4 + 4); game++) {
            const list = byType.get(state.games[game].type) || [];
            list.push(strength(pairs[game]));
            byType.set(state.games[game].type, list);
          }
          for (const list of byType.values()) {
            for (let k = 1; k < list.length; k++) assert.ok(list[k - 1] >= list[k] - 1e-9, `round ${round + 1} courts out of order`);
          }
        }
        total += pairs.reduce((sum, pair) => sum + strength(pair), 0);
      }
      totals[mode] = total / opp.samples.length;
    }
    assert.ok(totals.strongest >= totals.likely - 1e-9, `strongest ${totals.strongest} < likely ${totals.likely}`);
  });
}

// What "likely" is for: across archived divisions it should lean on pairs the
// team has actually used, and land each player's games nearer what they really
// played in the reopened match than "strongest" does.
test('likely lineups follow the team\'s own habits better than strongest', (t) => {
  let seen = 0;
  let pairs = 0;
  const error = { likely: 0, strongest: 0 };
  for (const division of archivedDivisions()) {
    const { context, state, found } = openReopened(division);
    const history = context.lineupOpponentHistory(state.teamB);
    assert.ok(history.matches > 0, `${division.label}: ${state.teamB} has no posted history`);
    const side = found.real.home === state.teamB ? 'h' : 'a';
    const real = new Map();
    for (const game of found.real.games) for (const name of game[side]) real.set(name, (real.get(name) || 0) + 1);
    for (const mode of ['likely', 'strongest']) {
      const { samples } = context.lineupOpponentSamples(mode);
      const games = new Map();
      for (const sample of samples) {
        for (const pair of sample) {
          for (const name of pair) games.set(name, (games.get(name) || 0) + 1 / samples.length);
          if (mode === 'likely') {
            pairs++;
            if (history.pairs.has(context.lineupPairKey(pair))) seen++;
          }
        }
      }
      for (const name of new Set([...real.keys(), ...games.keys()])) {
        error[mode] += Math.abs((real.get(name) || 0) - (games.get(name) || 0));
      }
    }
  }
  t.diagnostic(`likely: ${(seen / pairs * 100).toFixed(1)}% of pairs used before; games error likely ${error.likely.toFixed(0)}, strongest ${error.strongest.toFixed(0)}`);
  assert.ok(pairs > 0);
  assert.ok(seen / pairs >= 0.75, `only ${(seen / pairs * 100).toFixed(1)}% of likely pairs were used before`);
  assert.ok(error.likely < error.strongest, `likely ${error.likely} vs strongest ${error.strongest}`);
});

const [largest] = archivedDivisions()
  .map((division) => ({ division, players: compiledData(division).players.length }))
  .sort((a, b) => b.players - a.players)
  .map(({ division }) => division);

test('choosing a simulation fills the opponent\'s side, and "As entered" hands back what was there', () => {
  const { context, state, view } = openReopened(largest);
  assert.match(view.innerHTML, /Simulate .*'s lineup/);
  assert.match(view.innerHTML, /data-lineup-mode="best" disabled/);
  assert.match(view.innerHTML, /or simulate .*(?:'|&#39;)s lineup above/);
  const before = JSON.stringify(state.games.map((game) => game.b));

  chooseOpp(context, 'likely');
  assert.ok(state.games.every((game) => game.b.every(Boolean)), 'every opponent slot filled');
  assert.match(view.innerHTML, /aria-checked="true" data-lineup-opp-mode="likely"/);
  assert.match(view.innerHTML, /Showing 1 of 24 likely lineups/);
  assert.doesNotMatch(view.innerHTML, /data-lineup-mode="best" disabled/);

  chooseOpp(context, 'manual');
  assert.equal(JSON.stringify(state.games.map((game) => game.b)), before);
});

test('"Best chance to win" plans against every likely lineup, not the one on screen', () => {
  const { context, state, view } = openReopened(largest);
  chooseOpp(context, 'likely');
  chooseMode(context, 'best');
  const ours = JSON.stringify(state.games.map((game) => game.a));
  const shown = JSON.stringify(state.games.map((game) => game.b));
  assert.ok(state.games.every((game) => game.a.every(Boolean)), 'Team A filled');
  assert.match(view.innerHTML, /% to win the match vs 24 likely lineups/);

  // The reported chance is the average across the samples.
  const { samples } = context.lineupOpponentSamples();
  const pairs = state.games.map((game) => game.a);
  const average = samples.reduce((sum, sample) => sum + context.lineupChanceAgainst(pairs, sample), 0) / samples.length;
  assert.ok(Math.abs(context.lineupLineupChance(pairs) - average) < 1e-12);

  click(context, '[data-lineup-action]', { lineupAction: 'opp-reroll' });
  assert.match(view.innerHTML, /Showing 2 of 24 likely lineups/);
  assert.notEqual(JSON.stringify(state.games.map((game) => game.b)), shown, 'a different lineup on screen');
  assert.equal(JSON.stringify(state.games.map((game) => game.a)), ours, 'our lineup unchanged');
});

test('with one sample, planning against samples is planning against the grid', () => {
  const { context } = openReopened(largest);
  chooseOpp(context, 'strongest');
  const { spec } = context.lineupAutoSpec();
  assert.equal(spec.oppSamples.length, 1);
  const withSamples = context.optimizeLineup(spec);
  const without = context.optimizeLineup({ ...spec, oppSamples: undefined });
  assert.ok(!withSamples.error, withSamples.error);
  assert.equal(JSON.stringify(withSamples.pairs), JSON.stringify(without.pairs));
});

test('unticking an opponent drops them from every simulated lineup; editing their side takes it over', () => {
  const { context, state, view } = openReopened(largest);
  chooseOpp(context, 'likely');
  // The opponent's most-used player in the simulations.
  const counts = new Map();
  for (const sample of context.lineupOpponentSamples().samples) {
    for (const name of sample.flat()) counts.set(name, (counts.get(name) || 0) + 1);
  }
  const [name] = [...counts.entries()].sort((a, b) => b[1] - a[1])[0];
  assert.match(view.innerHTML, new RegExp(`class="lineup-available" data-side="b" data-player-name="${name}" checked`));
  context.handleLineupLabChange({
    target: { classList: { contains: (cls) => cls === 'lineup-available' }, checked: false, dataset: { side: 'b', playerName: name } },
  });
  assert.ok(context.lineupOppUnavailable().has(name));
  assert.ok(!context.lineupUnavailable().has(name), 'Team A availability untouched');
  for (const sample of context.lineupOpponentSamples().samples) {
    assert.ok(!sample.flat().includes(name), `${name} still in a simulated lineup`);
  }

  const slot = { dataset: { game: '0', side: 'b', slot: '0' }, value: state.games[0].b[0] };
  context.handleLineupLabChange({ target: { closest: (selector) => (selector === '.lineup-slot' ? slot : null) } });
  assert.equal(state.oppMode, 'manual');
  assert.ok(state.games.every((game) => game.b.every(Boolean)), 'the simulated lineup is kept');
});

test('a posted opponent has no simulation and a read-only roster', () => {
  const { context, document } = loadApp(largest.file);
  const team = context.DATA.teams.find((candidate) => (
    context.lineupSeasonMatchesForTeam(candidate.name).some((match) => match.complete && match.games?.length)
  ));
  assert.ok(team, 'no finished matchup');
  const slug = context.CPLShared.slugify(team.name);
  context.location.search = `?lineup=1&team=${slug}`;
  context.location.href = `http://x/cpl/travel/?lineup=1&team=${slug}`;
  context.handleRoute();
  const index = context.lineupSeasonMatchesForTeam(team.name).findIndex((match) => match.complete && match.games?.length);
  context.handleLineupLabChange({ target: { id: 'lineup-matchup', value: String(index) } });
  const html = document.getElementById('lineupview').innerHTML;
  assert.ok(!context.lineupOpponentSimulatable());
  assert.doesNotMatch(html, /data-lineup-opp-mode/);
  assert.doesNotMatch(html, /data-side="b" data-player-name/);
});
