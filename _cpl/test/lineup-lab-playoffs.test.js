// The Lineup Lab plans playoff matches as well as regular-season ones: they
// follow the regular season in the matchup picker, a posted playoff lineup
// loads like any other, and the bracket links straight into the lab. Rendered
// through cpl/app.js on a real division with a bracket grafted on, so the test
// doesn't depend on which week the live data has reached.
const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');

const { playedDivisions } = require('./helpers/compiled');
const { loadApp } = require('./helpers/app-harness');

// Shorter than any regular-season match, so a borrowed shape is unmistakable.
const PLAYOFF_GAMES = 8;

// The first division with four teams that have posted a finished match.
function source() {
  for (const { file } of playedDivisions()) {
    const { context } = loadApp(file);
    const posted = (context.DATA.matches || []).filter((match) => match.complete && match.games?.length);
    const teams = [...new Set(posted.flatMap((match) => [match.home, match.away]))];
    if (teams.length >= 4) return { file, teams: teams.slice(0, 4) };
  }
  return null;
}

// Every regular-season match finished; round 1 of a bracket with one match
// whose lineup the home team has posted (taken from its own last match, cut to
// PLAYOFF_GAMES) and one with nothing posted.
function withBracket([a, b, c, d]) {
  return (DATA) => {
    for (const match of DATA.matches) match.complete = true;
    const last = DATA.matches.filter((match) => match.games?.length && (match.home === a || match.away === a)).pop();
    const side = last.home === a ? 'h' : 'a';
    DATA.meta.hasPlayoffs = true;
    DATA.playoffs = [
      {
        result: null, round: 1, home: a, away: b, complete: false, homeSeed: 1, awaySeed: 4,
        games: last.games.slice(0, PLAYOFF_GAMES).map((game) => ({ t: game.t, h: [...game[side]], a: ['', ''] })),
      },
      { result: null, round: 1, home: c, away: d, complete: false, homeSeed: 2, awaySeed: 3 },
    ];
  };
}

function load(file, teams) {
  const loaded = loadApp(file, { mutate: withBracket(teams) });
  const { context } = loaded;
  // Real routing: setRouteInUrl pushes a URL and handleRoute reads it back.
  context.history.pushState = (_state, _title, href) => {
    const url = new URL(href);
    Object.assign(context.location, { href, search: url.search, hash: url.hash, pathname: url.pathname });
  };
  return loaded;
}

function openLab(context, teamName) {
  const slug = context.CPLShared.slugify(teamName);
  context.location.search = `?lineup=1&team=${slug}`;
  context.location.href = `http://x/cpl/travel/?lineup=1&team=${slug}`;
  context.handleRoute();
}

const labState = (context) => vm.runInContext('lineupLabState', context);

function clickMode(context, mode) {
  const button = { dataset: { lineupMode: mode }, disabled: false };
  context.handleLineupLabClick({ button: 0, target: { closest: (selector) => (selector === '[data-lineup-mode]' ? button : null) } });
}

const selectedMatchup = (html) => Number(/<option value="(\d+)" selected>/.exec(html.split('id="lineup-matchup"')[1])[1]);

// Team A's chosen player in every slot, as [[slot 0, slot 1], …] per game.
function teamASlots(html) {
  const games = [];
  const pattern = /data-game="(\d+)" data-side="a" data-slot="(\d)"[^>]*>([\s\S]*?)<\/select>/g;
  for (const [, game, slot, options] of html.matchAll(pattern)) {
    const selected = /<option value="([^"]*)" selected>/.exec(options);
    (games[game] ||= ['', ''])[slot] = selected ? selected[1] : '';
  }
  return games;
}

const found = source();
const unescape = (text) => text.replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&');

test('playoff matches follow the regular season and the lab opens on them', () => {
  assert.ok(found, 'no archived division has four teams with a finished match to graft a bracket onto');
  const { context, document } = load(found.file, found.teams);
  const [a, b] = found.teams;
  const matches = context.lineupSeasonMatchesForTeam(a);
  const last = matches[matches.length - 1];
  assert.equal(last.playoff, true);
  assert.equal(matches.filter((match) => match.playoff).length, 1);
  assert.ok(matches.slice(0, -1).every((match) => !match.playoff));

  openLab(context, a);
  const html = document.getElementById('lineupview').innerHTML;
  assert.equal(selectedMatchup(html), matches.length - 1, 'defaults to the unplayed playoff match');
  assert.match(html, /<optgroup label="Regular season">/);
  assert.match(html, new RegExp(`<optgroup label="Playoffs"><option value="${matches.length - 1}" selected>Semifinals vs `));
  assert.ok(unescape(html).includes(`Semifinals: ${a} vs ${b} (posted, not yet played).`));

  // The posted playoff lineup is what loads, at its own length.
  const slots = teamASlots(unescape(html));
  assert.equal(slots.length, PLAYOFF_GAMES);
  assert.deepEqual(slots, JSON.parse(JSON.stringify(last.games.map((game) => game.h))));
});

test('an unposted playoff match borrows the bracket\'s format, not the regular season\'s', () => {
  assert.ok(found, 'no archived division has four teams with a finished match to graft a bracket onto');
  const { context, document } = load(found.file, found.teams);
  const [, , c] = found.teams;
  openLab(context, c);
  const html = document.getElementById('lineupview').innerHTML;
  assert.equal(selectedMatchup(html), context.lineupSeasonMatchesForTeam(c).length - 1);
  const slots = teamASlots(html);
  assert.equal(slots.length, PLAYOFF_GAMES);
  assert.ok(slots.every((pair) => !pair[0] && !pair[1]), 'Team A starts blank');
});

test('the bracket links each pending match\'s teams into the lab on that matchup', () => {
  assert.ok(found, 'no archived division has four teams with a finished match to graft a bracket onto');
  const { context, document } = load(found.file, found.teams);
  const [a, b, c, d] = found.teams;
  const bracket = unescape(document.getElementById('playoffs-host').innerHTML);
  for (const team of [a, b, c, d]) {
    assert.ok(bracket.includes(`data-lineup-team="${team}"`), `${team} has a lab link`);
  }

  // Point the lab at a regular-season match first, so the click has to move it.
  openLab(context, b);
  context.handleLineupLabChange({ target: { id: 'lineup-matchup', value: '0' } });
  const view = document.getElementById('lineupview');
  assert.equal(selectedMatchup(view.innerHTML), 0);
  view.hidden = true;

  let prevented = false;
  const link = { dataset: { lineupTeam: b, lineupRound: '1' } };
  context.handlePlayoffLabClick({
    button: 0,
    preventDefault() { prevented = true; },
    target: { closest: (selector) => (selector === '[data-lineup-team]' ? link : null) },
  });
  assert.ok(prevented);
  assert.match(context.location.search, /lineup=1/);
  assert.equal(view.hidden, false);
  assert.equal(selectedMatchup(view.innerHTML), context.lineupSeasonMatchesForTeam(b).length - 1);
});

test('playoff rounds are named by their size, counting back from the Championship', () => {
  assert.ok(found, 'no archived division has four teams with a finished match to graft a bracket onto');
  const round = (number, ...pairs) => pairs.map(([homeSeed, awaySeed]) => ({ round: number, homeSeed, awaySeed }));
  const labels = (playoffs) => {
    const { context } = loadApp(found.file, { mutate: (DATA) => { DATA.playoffs = playoffs; } });
    return [...new Set(playoffs.map((match) => match.round))].map((number) => context.playoffRoundLabel(number));
  };
  const firstRound = (count) => round(1, ...Array.from({ length: count }, () => [1, 2]));

  // A full 16-team bracket, and the same bracket with only its first round drawn.
  const full = [...firstRound(8), ...round(2, [1, 2], [1, 3], [1, 2], [1, 3]), ...round(3, [1, 2], [1, 2]), ...round(4, [1, 1])];
  assert.deepEqual(labels(full), ['Round of 16', 'Quarterfinals', 'Semifinals', 'Championship']);
  assert.deepEqual(labels(firstRound(8)), ['Round of 16']);
  assert.deepEqual(labels(firstRound(4)), ['Quarterfinals']);
  assert.deepEqual(labels(firstRound(16)), ['Round of 32']);
  // Byes are listed as matches, so a 12-team bracket's first round is still 8.
  assert.deepEqual(labels(round(1, [1, null], [2, 3], [1, null], [2, 3], [1, null], [2, 3], [1, null], [2, 3])), ['Round of 16']);

  // A final alone, and the medal round — final plus bronze match — are both
  // the Championship; the same seeds before a later round are semi-finals.
  assert.deepEqual(labels(round(1, [1, 2])), ['Championship']);
  assert.deepEqual(labels(round(1, [1, 2], [3, 4])), ['Championship']);
  assert.deepEqual(labels(round(1, [1, 4], [2, 3])), ['Semifinals']);
  assert.deepEqual(labels([...round(1, [3, 4], [1, 2]), ...round(2, [1, 1])]), ['Semifinals', 'Championship']);
});

test('a division without a bracket keeps a flat matchup list', () => {
  const division = playedDivisions()[0];
  const { context, document } = loadApp(division.file, { mutate: (DATA) => { DATA.playoffs = []; } });
  // A team that is actually on the schedule, so there are weeks to list.
  openLab(context, context.DATA.matches[0].home);
  const html = document.getElementById('lineupview').innerHTML;
  assert.doesNotMatch(html, /<optgroup/);
  assert.match(html, /<option value="0"[^>]*>Week /);
});

test('a team page heads its playoff matches with the round, not a week', () => {
  assert.ok(found, 'no archived division has four teams with a finished match to graft a bracket onto');
  const { context, document } = load(found.file, found.teams);
  const [a, , c] = found.teams;
  for (const team of [a, c]) {
    context.location.search = `?team=${context.CPLShared.slugify(team)}`;
    context.location.href = `http://x/cpl/travel/${context.location.search}`;
    context.handleRoute();
    const html = unescape(document.getElementById('teamview').innerHTML);
    // a's match has a posted lineup, c's has none: both kinds of pending block.
    const block = new RegExp(`id="playoff-w1-[^"]*">\\s*<div class="wk-head">\\s*<span>([^•]*) • `).exec(html);
    assert.ok(block, `${team}: no playoff block on the team page`);
    assert.equal(block[1], 'Semifinals', `${team}: heading`);
  }
});

// Captains may enter a playoff's tiebreak pairs any time before the match, so
// an opponent with every regular game in and its tiebreak round still open
// mustn't hold up "Best chance to win". Both ways the round can be open: the
// match's games stop short of it (the lab appends it, blank, from the bracket),
// or it's there with nobody in it.
const TIEBREAK_GAMES = 3;
function withOpenTiebreak([a, b, c, d], { roundListed, regularOpen = false }) {
  return (DATA) => {
    for (const match of DATA.matches) match.complete = true;
    const last = DATA.matches.filter((match) => match.games?.length && (match.home === b || match.away === b)).pop();
    const side = last.home === b ? 'h' : 'a';
    const regular = last.games.filter((game) => !game.tb)
      .map((game, index) => ({ t: game.t, h: ['', ''], a: regularOpen && index === 0 ? ['', ''] : [...game[side]] }));
    const round = regular.slice(0, TIEBREAK_GAMES).map((game) => ({ t: game.t, tb: true }));
    DATA.meta.hasPlayoffs = true;
    DATA.playoffs = [
      {
        result: null, round: 1, home: a, away: b, complete: false, homeSeed: 1, awaySeed: 4,
        games: [...regular, ...(roundListed ? round.map((game) => ({ ...game, h: ['', ''], a: ['', ''] })) : [])],
      },
      // The bracket's tiebreak format, for the lab to borrow.
      {
        result: null, round: 1, home: c, away: d, complete: false, homeSeed: 2, awaySeed: 3,
        games: [...regular, ...round].map((game) => ({ ...game, h: ['', ''], a: ['', ''] })),
      },
    ];
  };
}

function openTiebreakLab(teams, options) {
  const { context, document } = loadApp(found.file, { mutate: withOpenTiebreak(teams, options) });
  openLab(context, teams[0]);
  const games = labState(context).games;
  const tiebreak = games.map((game) => Boolean(game.tb));
  assert.equal(tiebreak.filter(Boolean).length, TIEBREAK_GAMES, 'the lab has the tiebreak round');
  assert.ok(games.every((game, index) => !tiebreak[index] || game.b.every((name) => !name)), 'their tiebreak round is open');
  return { context, document, games, tiebreak };
}

test('an opponent\'s open tiebreak round doesn\'t block "Best chance to win"', () => {
  assert.ok(found, 'no archived division has four teams with a finished match to graft a bracket onto');
  for (const roundListed of [false, true]) {
    const label = roundListed ? 'listed but blank' : 'not listed';
    const { context, document, games, tiebreak } = openTiebreakLab(found.teams, { roundListed });
    assert.ok(games.every((game, index) => tiebreak[index] || game.b.every(Boolean)), `${label}: every regular game is in`);

    const auto = context.lineupAutoResults();
    assert.equal(auto.error, undefined, `${label}: ${auto.error}`);
    const best = auto.results.best;
    assert.equal(best.error, undefined, `${label}: ${best.error}`);
    assert.equal(typeof best.chance, 'number', `${label}: the suggestion has a chance to win`);

    // Planned against their likely tiebreak round, their entered games as they are.
    const fill = context.lineupOpponentTiebreakFill();
    assert.ok(fill?.samples.length > 1, `${label}: the open round is filled from their likely lineups`);
    for (const sample of fill.samples) {
      sample.forEach((pair, index) => {
        if (tiebreak[index]) assert.ok(pair.every(Boolean), `${label}: simulated tiebreak game ${index + 1} is filled`);
        else assert.deepEqual([...pair], [...games[index].b], `${label}: entered game ${index + 1} is kept`);
      });
    }

    const view = document.getElementById('lineupview');
    context.renderLineupLab();
    assert.doesNotMatch(view.innerHTML, /data-lineup-mode="best" disabled/, `${label}: the mode is offered`);
    assert.match(view.innerHTML, /hasn't entered its tiebreak pairs yet/);
    clickMode(context, 'best');
    assert.match(view.innerHTML, /aria-checked="true" data-lineup-mode="best"/, `${label}: the mode stays selected`);
    assert.ok(labState(context).games.every((game) => game.a.every(Boolean)), `${label}: Team A's side is filled, tiebreak round too`);
    assert.match(view.innerHTML, /% to win the match \(tiebreak vs \d+ likely rounds\)/);
  }
});

test('an open regular game still waits for the opponent, tiebreak round or not', () => {
  assert.ok(found, 'no archived division has four teams with a finished match to graft a bracket onto');
  const { context } = openTiebreakLab(found.teams, { roundListed: false, regularOpen: true });
  const auto = context.lineupAutoResults();
  assert.ok(auto.waiting, 'reports it is waiting on the opponent');
  assert.match(auto.error, /\(1 of \d+ games still open\)/, 'counts only the regular games');
  assert.equal(context.lineupOpponentTiebreakFill(), null);
});
