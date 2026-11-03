// The Lineup Lab's availability picker and its auto mode, "Best chance to
// win". The optimizer is checked against the league's own rules on every
// compiled division with a finished match, and against the lineup the team
// actually posted: under the same rules it should never give a worse chance of
// winning the match. Rendered through cpl/app.js.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const { compiledDivisions } = require('./helpers/compiled');
const { loadApp } = require('./helpers/app-harness');

function openLab(context, teamName) {
  const slug = context.CPLShared.slugify(teamName);
  context.location.search = `?lineup=1&team=${slug}`;
  context.location.href = `http://x/cpl/travel/?lineup=1&team=${slug}`;
  context.handleRoute();
}

function chooseMatchup(context, index) {
  context.handleLineupLabChange({ target: { id: 'lineup-matchup', value: String(index) } });
}

function setAvailable(context, name, available) {
  context.handleLineupLabChange({
    target: { classList: { contains: (name_) => name_ === 'lineup-available' }, checked: available, dataset: { playerName: name } },
  });
}

function clickMode(context, mode) {
  const button = { dataset: { lineupMode: mode }, disabled: false };
  context.handleLineupLabClick({ button: 0, target: { closest: (selector) => (selector === '[data-lineup-mode]' ? button : null) } });
}

// The first team in each division with a finished, posted match.
function finishedMatchup(context) {
  for (const team of context.DATA.teams) {
    const matches = context.lineupSeasonMatchesForTeam(team.name);
    const index = matches.findIndex((match) => match.complete && match.games?.length);
    if (index !== -1) {
      const match = matches[index];
      const side = match.home === team.name ? 'h' : 'a';
      return { team, index, match, side, opp: side === 'h' ? 'a' : 'h' };
    }
  }
  return null;
}

function checkRules(context, pairs, players) {
  const genders = new Map(players.map((player) => [player.name, player.gender]));
  const counts = new Map();
  const pairCounts = new Map();
  pairs.forEach((pair, game) => {
    assert.notEqual(pair[0], pair[1], `game ${game + 1}: same player twice`);
    for (const name of pair) {
      assert.ok(genders.has(name), `game ${game + 1}: ${name} is not an available player`);
      counts.set(name, (counts.get(name) || 0) + 1);
    }
    const key = pair.slice().sort().join('|');
    pairCounts.set(key, (pairCounts.get(key) || 0) + 1);
  });
  for (const [key, count] of pairCounts) assert.ok(count <= 2, `${key} paired ${count} times`);
  for (let round = 0; round * 4 < pairs.length; round++) {
    const names = pairs.slice(round * 4, round * 4 + 4).flat();
    assert.equal(new Set(names).size, names.length, `round ${round + 1}: a player is on two courts`);
  }
  return { counts, genders };
}

for (const { label, file } of compiledDivisions()) {
  test(`${label}: auto lineups follow the rules and beat or match the posted lineup`, () => {
    const { context } = loadApp(file);
    const found = finishedMatchup(context);
    if (!found) return;
    const { team, index, match, side, opp } = found;
    openLab(context, team.name);
    chooseMatchup(context, index);

    // Switching matchups puts the actual opponent's players on side b.
    const games = context.rebuildLineupLabGames();
    // JSON: the arrays come from app.js's own realm.
    assert.equal(
      JSON.stringify(games.map((game) => game.b)),
      JSON.stringify(match.games.map((game) => [game[opp][0] || '', game[opp][1] || ''])),
    );

    const auto = context.lineupAutoSpec();
    if (auto.error) return; // e.g. a posted lineup leaning on subs from other rosters
    const { spec } = auto;
    const postedPairs = match.games.map((game) => game[side]);
    const postedNames = new Set(postedPairs.flat());
    const postedFits = [...postedNames].every((name) => spec.players.some((player) => player.name === name));

    // Even split: every pool's counts land on floor/ceil of its share.
    const even = context.lineupPlayTimeBands(spec.slotGenders, spec.players, 0);
    const result = context.optimizeLineup({ ...spec, bands: even.bands });
    assert.ok(!result.error, result.error);
    const { counts, genders } = checkRules(context, result.pairs, spec.players);
    for (const [name, count] of counts) {
      const band = even.bands[even.poolOf({ gender: genders.get(name) })];
      assert.ok(count >= band.lo && count <= band.hi, `${name} plays ${count}, outside ${band.lo}–${band.hi}`);
    }

    // No limit: at least as good a chance as what the team actually posted.
    const open = context.lineupPlayTimeBands(spec.slotGenders, spec.players, 99);
    const best = context.optimizeLineup({ ...spec, bands: open.bands });
    checkRules(context, best.pairs, spec.players);
    if (postedFits) {
      const ours = context.lineupLineupChance(best.pairs);
      const theirs = context.lineupLineupChance(postedPairs);
      assert.ok(ours >= theirs - 0.005, `best chance ${ours.toFixed(3)}, posted lineup ${theirs.toFixed(3)}`);
    }
  });
}

test('the win curve and match chance behave', (t) => {
  const { context } = loadApp(compiledDivisions()[0].file);
  assert.equal(context.lineupGameWinChance(0), 0.5);
  assert.equal(context.lineupGameWinChance(null), 0.5);
  assert.ok(Math.abs(context.lineupGameWinChance(3) + context.lineupGameWinChance(-3) - 1) < 1e-12);
  // 32 coin flips: half the 16–16 ties go our way, so exactly 50%.
  assert.ok(Math.abs(context.lineupMatchWinChance(new Array(32).fill(0.5)).chance - 0.5) < 1e-12);
  // 3 games at 60%: P(2+) = 3·0.6²·0.4 + 0.6³.
  assert.ok(Math.abs(context.lineupMatchWinChance([0.6, 0.6, 0.6]).chance - 0.648) < 1e-12);
  t.diagnostic(`k = ${vm.runInContext('LINEUP_WIN_CURVE', context)}`);
});

const [largest] = compiledDivisions()
  .map((division) => ({ ...division, ...loadApp(division.file) }))
  .sort((a, b) => b.context.DATA.players.length - a.context.DATA.players.length);

test('the same inputs always produce the same auto lineup', () => {
  const { context } = loadApp(largest.file);
  const found = finishedMatchup(context);
  openLab(context, found.team.name);
  chooseMatchup(context, found.index);
  const { spec } = context.lineupAutoSpec();
  const first = context.optimizeLineup(spec);
  const second = context.optimizeLineup(spec);
  assert.equal(JSON.stringify(first.pairs), JSON.stringify(second.pairs));
});

test('auto modes wait for the opponent\'s full lineup', () => {
  const { context, document } = loadApp(largest.file);
  for (const team of context.DATA.teams) {
    const matches = context.lineupSeasonMatchesForTeam(team.name);
    const index = matches.findIndex((match) => !match.games?.length);
    if (index === -1) continue;
    openLab(context, team.name);
    chooseMatchup(context, index);
    const auto = context.lineupAutoResults();
    assert.ok(auto.waiting, 'reports it is waiting on the opponent');
    const html = document.getElementById('lineupview').innerHTML;
    assert.match(html, /data-lineup-mode="best" disabled/);
    assert.match(html, /Waiting on/);
    return;
  }
});

test('choosing a mode fills Team A\'s side, and Manual hands back the previous lineup', () => {
  const { context, document } = loadApp(largest.file);
  const found = finishedMatchup(context);
  openLab(context, found.team.name);
  chooseMatchup(context, found.index);
  const view = document.getElementById('lineupview');
  const manualSelects = view.innerHTML.match(/data-side="a"[^>]*>[\s\S]*?<\/select>/g).join();

  clickMode(context, 'best');
  assert.match(view.innerHTML, /aria-checked="true" data-lineup-mode="best"/);
  assert.match(view.innerHTML, /Projected game score — Best chance to win/);
  assert.match(view.innerHTML, /% to win the match/);

  clickMode(context, 'manual');
  assert.match(view.innerHTML, /aria-checked="true" data-lineup-mode="manual"/);
  assert.equal(view.innerHTML.match(/data-side="a"[^>]*>[\s\S]*?<\/select>/g).join(), manualSelects);
});

test('unavailable players drop out of the lab\'s dropdowns, Top Duos and the partner chemistry modal', () => {
  const { context, document } = loadApp(largest.file);
  const view = document.getElementById('lineupview');
  // A Team A player with a qualified duo partner on the same team.
  const duo = context.DATA.duos.find((candidate) => candidate.team === context.DATA.teams[0].name)
    || context.DATA.duos[0];
  const team = duo.team;
  openLab(context, team);
  context.handleLineupLabClick({
    button: 0,
    target: { closest: (selector) => (selector === '[data-lineup-action]' ? { dataset: { lineupAction: 'available-all' } } : null) },
  });
  const duoRow = (markup) => markup.includes(`data-player="${duo.aId}"`) && markup.includes(`data-player="${duo.bId}"`);
  const duosSection = () => view.innerHTML.split('class="lineup-duos"')[1].split('</details>')[0];
  assert.ok(duoRow(duosSection()), 'duo listed while both are available');

  setAvailable(context, duo.b, false);
  assert.ok(!duoRow(duosSection()), 'duo hidden once one of them is unavailable');
  assert.match(view.innerHTML, /class="lineup-unavailable"/);
  // Not offered in any Team A dropdown, except one where they're already
  // picked: unchecking someone flags them in place rather than rewriting the
  // lineup, so a posted lineup that includes them keeps them, marked.
  const options = view.innerHTML.match(/data-side="a"[^>]*>[\s\S]*?<\/select>/g)
    .flatMap((select) => select.match(/<option[^>]*>[^<]*/g))
    .filter((option) => option.includes(`>${duo.b} (`));
  for (const option of options) {
    assert.match(option, / selected>/, 'unavailable player is only listed where already picked');
    assert.match(option, /— unavailable$/, 'and is marked unavailable there');
  }

  const player = context.DATA.players.find((candidate) => candidate.playerId === duo.aId);
  const detailFile = path.join(path.dirname(largest.file), path.basename(context.DATA.meta.detailFile));
  vm.runInNewContext(fs.readFileSync(detailFile, 'utf8'), context, { filename: detailFile });
  context.mergePlayerDetails();
  const modal = context.renderPartnerChemistrySection(player);
  assert.ok(!modal.includes(`>${duo.b}</td>`), 'unavailable partner hidden in the modal over the lab');
  assert.match(modal, /unavailable hidden/);

  // Away from the lab the modal lists everyone again.
  view.hidden = true;
  assert.ok(context.renderPartnerChemistrySection(player).includes(`>${duo.b}</td>`));
});

test('outside subs start unavailable on an unposted matchup, and "No subs" restores that', () => {
  const { context, document } = loadApp(largest.file);
  const view = document.getElementById('lineupview');
  for (const team of context.DATA.teams) {
    const subs = context.lineupOutsideSubNames(team.name);
    const index = context.lineupSeasonMatchesForTeam(team.name).findIndex((match) => !match.games?.length);
    if (!subs.length || index === -1) continue;
    openLab(context, team.name);
    chooseMatchup(context, index);
    const own = context.lineupRoster(team.name).filter((player) => !player.outsideSub);
    assert.equal(JSON.stringify([...context.lineupUnavailable()].sort()), JSON.stringify(subs.slice().sort()));
    assert.match(view.innerHTML, new RegExp(`${own.length} of ${own.length + subs.length} available`));

    const action = (lineupAction) => context.handleLineupLabClick({
      button: 0,
      target: { closest: (selector) => (selector === '[data-lineup-action]' ? { dataset: { lineupAction } } : null) },
    });
    action('available-all');
    assert.equal(context.lineupUnavailable().size, 0);
    action('available-no-subs');
    assert.equal(JSON.stringify([...context.lineupUnavailable()].sort()), JSON.stringify(subs.slice().sort()));
    return;
  }
});

test('the opponent\'s roster lists their lineup first, then who is sitting', () => {
  const { context, document } = loadApp(largest.file);
  const found = finishedMatchup(context);
  openLab(context, found.team.name);
  chooseMatchup(context, found.index);
  const opponent = found.match.home === found.team.name ? found.match.away : found.match.home;
  // Team A's roster renders first, the opponent's second.
  const section = document.getElementById('lineupview').innerHTML.split('<section class="lineup-roster"')[2].split('</section>')[0];
  const usage = context.lineupUsage(opponent, 'b');
  const byKey = new Map(context.lineupRoster(opponent).map((player) => [context.routeKeyForPlayer(player), player.name]));
  const [top, bottom = ''] = section.split('Not in lineup');
  const keysIn = (markup) => [...markup.matchAll(/data-player="([^"]+)"/g)].map((match) => byKey.get(match[1]));
  assert.ok(keysIn(top).length, 'lineup players listed');
  assert.ok(keysIn(top).every((name) => usage.get(name) > 0), 'only players in the lineup above the divider');
  assert.ok(keysIn(bottom).every((name) => !usage.get(name)), 'only players sitting below it');
  assert.equal(keysIn(top).length + keysIn(bottom).length, byKey.size, 'nobody dropped');
});

function bulk(context, lineupAction) {
  context.handleLineupLabClick({
    button: 0,
    target: { closest: (selector) => (selector === '[data-lineup-action]' ? { dataset: { lineupAction } } : null) },
  });
}

test('the playing-time slider defaults to the least flex that reaches the target chance', (t) => {
  const { context, document } = loadApp(largest.file);
  const view = document.getElementById('lineupview');
  const target = vm.runInContext('LINEUP_TARGET_CHANCE', context);
  const tolerance = vm.runInContext('LINEUP_FLEX_TOLERANCE', context);
  const reasons = {};
  let checked = 0;
  for (const team of context.DATA.teams) {
    const matches = context.lineupSeasonMatchesForTeam(team.name);
    matches.forEach((match, index) => {
      if ((reasons.target || 0) + (reasons.best || 0) >= 4 || !match.games?.length) return;
      openLab(context, team.name);
      chooseMatchup(context, index);
      bulk(context, 'available-no-subs');
      const slider = view.innerHTML.match(/id="lineup-flex"[^>]*max="(\d+)"[^>]*value="(\d+)"/);
      if (!slider) return;
      const [max, flex] = [Number(slider[1]), Number(slider[2])];
      // An even split that already reaches the target is the common case;
      // a few of those are enough, the rest of the time goes on the others.
      if (context.lineupAutoResultsAt(0).results.best.chance >= target && (reasons.even || 0) >= 3) return;
      const chances = [];
      for (let k = 0; k <= max; k++) chances.push(context.lineupAutoResultsAt(k).results.best.chance);
      const reaching = chances.findIndex((chance) => chance >= target);
      const expected = reaching !== -1
        ? reaching
        : chances.findIndex((chance) => chance >= Math.max(...chances) - tolerance);
      assert.equal(flex, expected, `chances ${chances.map((chance) => Math.round(chance * 100)).join(' ')}`);
      const reason = reaching === -1 ? 'best' : reaching ? 'target' : 'even';
      reasons[reason] = (reasons[reason] || 0) + 1;
      assert.match(view.innerHTML, /\(auto: /);
      checked++;
    });
  }
  assert.ok(checked, 'found matchups to check');
  t.diagnostic(JSON.stringify(reasons));
});

test('moving the slider sticks until the matchup changes', () => {
  const { context, document } = loadApp(largest.file);
  const view = document.getElementById('lineupview');
  const found = finishedMatchup(context);
  openLab(context, found.team.name);
  chooseMatchup(context, found.index);
  const max = Number(view.innerHTML.match(/id="lineup-flex"[^>]*max="(\d+)"/)[1]);
  context.handleLineupLabChange({ target: { id: 'lineup-flex', value: String(max) } });
  assert.match(view.innerHTML, new RegExp(`id="lineup-flex"[^>]*value="${max}"`));
  assert.doesNotMatch(view.innerHTML, /\(auto:/);
  bulk(context, 'available-all');
  // The range's max can move with the roster, so check it's still the
  // captain's setting rather than an auto one.
  assert.doesNotMatch(view.innerHTML, /\(auto:/, 'availability change keeps it');
  chooseMatchup(context, found.index);
  assert.match(view.innerHTML, /\(auto:/, 'a new matchup chooses again');
});

test('the bulk availability button stays lit until the checkboxes drift from it', () => {
  const { context, document } = loadApp(largest.file);
  const view = document.getElementById('lineupview');
  const team = context.DATA.teams[0].name;
  openLab(context, team);
  const lit = () => (view.innerHTML.match(/data-lineup-action="(available-[a-z-]+)" class="active"/g) || [])
    .map((match) => match.match(/available-[a-z-]+/)[0]);
  bulk(context, 'available-none');
  assert.deepEqual([...lit()], ['available-none']);
  bulk(context, 'available-all');
  assert.ok(lit().includes('available-all'));
  setAvailable(context, context.lineupRoster(team)[0].name, false);
  const drifted = lit();
  assert.ok(!drifted.includes('available-all') && !drifted.includes('available-none'));
});
