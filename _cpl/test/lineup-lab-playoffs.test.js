// The Lineup Lab plans playoff matches as well as regular-season ones: they
// follow the regular season in the matchup picker, a posted playoff lineup
// loads like any other, and the bracket links straight into the lab. Rendered
// through cpl/app.js on a real division with a bracket grafted on, so the test
// doesn't depend on which week the live data has reached.
const test = require('node:test');
const assert = require('node:assert/strict');

const { compiledDivisions } = require('./helpers/compiled');
const { loadApp } = require('./helpers/app-harness');

// Shorter than any regular-season match, so a borrowed shape is unmistakable.
const PLAYOFF_GAMES = 8;

// The first division with four teams that have posted a finished match.
function source() {
  for (const { file } of compiledDivisions()) {
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

test('playoff matches follow the regular season and the lab opens on them', { skip: !found }, () => {
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
  assert.match(html, new RegExp(`<optgroup label="Playoffs"><option value="${matches.length - 1}" selected>Playoffs vs `));
  assert.ok(unescape(html).includes(`Playoffs: ${a} vs ${b} (posted, not yet played).`));

  // The posted playoff lineup is what loads, at its own length.
  const slots = teamASlots(unescape(html));
  assert.equal(slots.length, PLAYOFF_GAMES);
  assert.deepEqual(slots, JSON.parse(JSON.stringify(last.games.map((game) => game.h))));
});

test('an unposted playoff match borrows the bracket\'s format, not the regular season\'s', { skip: !found }, () => {
  const { context, document } = load(found.file, found.teams);
  const [, , c] = found.teams;
  openLab(context, c);
  const html = document.getElementById('lineupview').innerHTML;
  assert.equal(selectedMatchup(html), context.lineupSeasonMatchesForTeam(c).length - 1);
  const slots = teamASlots(html);
  assert.equal(slots.length, PLAYOFF_GAMES);
  assert.ok(slots.every((pair) => !pair[0] && !pair[1]), 'Team A starts blank');
});

test('the bracket links each pending match\'s teams into the lab on that matchup', { skip: !found }, () => {
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

test('a division without a bracket keeps a flat matchup list', () => {
  const division = compiledDivisions()[0];
  const { context, document } = loadApp(division.file, { mutate: (DATA) => { DATA.playoffs = []; } });
  openLab(context, context.DATA.teams[0].name);
  const html = document.getElementById('lineupview').innerHTML;
  assert.doesNotMatch(html, /<optgroup/);
  assert.match(html, /<option value="0"[^>]*>Week /);
});
