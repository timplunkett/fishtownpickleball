// The playoff overview (cpl/playoffs/): the compiler's bracket model in
// _cpl/modules/playoff-outputs.js, and the page that draws it.
//
// The model has two jobs that can go wrong without anything looking broken.
// Linking posted rounds into a bracket; and drawing the rounds nobody has
// posted yet. Game numbers settle both; without them the posted rounds link
// through the teams, and a later round is a guess unless the pods make it a
// certainty. A wrong guess tells a team who it plays next, so the
// suite holds every archived bracket to "redrawn exactly or not at all".
//
// Data comes from archived seasons and synthetic brackets only. A current
// season's bracket changes with every refresh, so a test reading it would
// start failing, or quietly stop checking anything, without a code change.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const {
  buildBracket, divisionPlayoffs, pairForNextRound, rankPod, roundName,
} = require('../modules/playoff-outputs');
const { podiumOf } = require('../modules/archive-outputs');
const { CPL, archivedDivisions, compiledData } = require('./helpers/compiled');
const { slugify } = require('../modules/shared');
const { loadApp } = require('./helpers/app-harness');

// --- Synthetic brackets ----------------------------------------------------------

const team = (name, pod, w = 5, l = 5) => ({ name, reportedPod: pod, w, l });

const match = (round, home, away, result, homeSeed, awaySeed, extra = {}) => ({
  round, home, away,
  result: result || null,
  complete: result != null,
  ...(homeSeed != null ? { homeSeed } : {}),
  ...(awaySeed != null ? { awaySeed } : {}),
  ...extra,
});

const bye = (round, home, seed) => ({ round, home, away: 'Bye', result: null, complete: false, homeSeed: seed, awaySeed: null });

// Two pods of four, crossed over the way Spring 2026's travel brackets were:
// A1 v B4 and B2 v A3 meet, and so do B1 v A4 and A2 v B3.
const CROSSED_TEAMS = [
  team('A1', 'A'), team('A2', 'A'), team('A3', 'A'), team('A4', 'A'),
  team('B1', 'B'), team('B2', 'B'), team('B3', 'B'), team('B4', 'B'),
];
const CROSSED_ROUND_1 = [
  match(1, 'A1', 'B4', null, 1, 4),
  match(1, 'B1', 'A4', null, 1, 4),
  match(1, 'B2', 'A3', null, 2, 3),
  match(1, 'A2', 'B3', null, 2, 3),
];

const pairsOf = (round) => round.slots.map((slot) => (slot.from || []).slice().sort((a, b) => a - b).join('-')).sort().join(' ');

// Who can reach each match of a round, as sorted team lists. Unlike pairsOf it
// doesn't depend on the order a round's slots are listed in, so brackets drawn
// different ways can be compared.
function teamPairsOf(bracket, level) {
  const reach = [];
  bracket.rounds.forEach((round, at) => {
    reach[at] = round.slots.map((slot) => (slot.from
      ? slot.from.flatMap((index) => reach[at - 1][index])
      : [slot.home, slot.away].filter((name) => name != null)));
  });
  return reach[level].map((names) => names.slice().sort().join('+')).sort().join(' | ');
}

// --- Game numbers ------------------------------------------------------------------

// A bracket as it would arrive without game numbers, for the pods to draw.
const withoutGames = (playoffs) => playoffs.map((m) => {
  const copy = { ...m };
  delete copy.game;
  return copy;
});

// Eight teams from eight pods, so the pods settle nothing: only the numbers do.
const SCATTERED_TEAMS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map((name) => team(name, `Pod ${name}`));
const numbered = (round, game, home, away, result) => match(round, home, away, result, 1, 2, { game });

test('game numbers draw a bracket the pods cannot', () => {
  const playoffs = [
    numbered(1, 3, 'E', 'F'),
    numbered(1, 1, 'A', 'B'),
    numbered(1, 4, 'G', 'H'),
    numbered(1, 2, 'C', 'D'),
  ];
  assert.equal(buildBracket({ teams: SCATTERED_TEAMS, playoffs: withoutGames(playoffs) }).drawPending, true);

  const bracket = buildBracket({ teams: SCATTERED_TEAMS, playoffs });
  assert.equal(bracket.linked, true);
  assert.equal(bracket.drawPending, false);
  assert.deepEqual(bracket.rounds[0].slots.map((slot) => slot.home), ['A', 'C', 'E', 'G']);
  assert.equal(teamPairsOf(bracket, 1), 'A+B+C+D | E+F+G+H');
  assert.deepEqual(bracket.rounds.map((round) => round.label), ['Quarterfinals', 'Semifinals', 'Championship']);
  assert.ok(bracket.rounds[0].slots.every((slot) => !('game' in slot)), 'the working game number leaked out');
});

test('a round posted in part keeps its posted matches and draws the rest', () => {
  const bracket = buildBracket({
    teams: SCATTERED_TEAMS,
    playoffs: [
      numbered(1, 1, 'A', 'B', 'home'),
      numbered(1, 2, 'C', 'D', 'away'),
      numbered(1, 3, 'E', 'F', 'home'),
      numbered(1, 4, 'G', 'H', 'home'),
      numbered(2, 2, 'E', 'G'),
    ],
  });
  const semis = bracket.rounds[1];
  assert.equal(semis.projected, undefined);
  assert.deepEqual(semis.slots[0], { home: 'A', away: 'D', projected: true, from: [0, 1] });
  assert.equal(semis.slots[1].home, 'E');
  assert.equal(semis.slots[1].projected, undefined);
  assert.deepEqual(semis.slots[1].from, [2, 3]);
});

test('game numbers that disagree with the teams are not trusted', () => {
  const playoffs = [
    numbered(1, 1, 'A', 'B', 'home'),
    numbered(1, 2, 'C', 'D', 'home'),
    numbered(1, 3, 'E', 'F', 'home'),
    numbered(1, 4, 'G', 'H', 'home'),
    // A beat B in game 1 and E beat F in game 3: they can't meet in semi 1.
    numbered(2, 1, 'A', 'E'),
    numbered(2, 2, 'C', 'G'),
  ];
  const bracket = buildBracket({ teams: SCATTERED_TEAMS, playoffs });
  // The teams link the posted rounds as they were actually played instead.
  assert.equal(teamPairsOf(bracket, 1), 'A+B+E+F | C+D+G+H');
});

test('a first round that is not games 1 to n is not trusted', () => {
  const playoffs = [
    numbered(1, 1, 'A', 'B'),
    numbered(1, 2, 'C', 'D'),
    numbered(1, 2, 'E', 'F'),
    numbered(1, 4, 'G', 'H'),
  ];
  assert.equal(buildBracket({ teams: SCATTERED_TEAMS, playoffs }).drawPending, true);
});

test('a round with nothing after it is drawn forward from a crossover seeding', () => {
  const bracket = buildBracket({ teams: CROSSED_TEAMS, playoffs: CROSSED_ROUND_1 });
  assert.equal(bracket.linked, true);
  assert.equal(bracket.drawPending, false);
  assert.deepEqual(bracket.rounds.map((round) => round.label), ['Quarterfinals', 'Semifinals', 'Championship']);
  assert.deepEqual(bracket.rounds.map((round) => !!round.projected), [false, true, true]);
  // A1's match meets the one whose lower seed is from pod A: B2 v A3.
  assert.equal(pairsOf(bracket.rounds[1]), '0-2 1-3');
});

test('a projected side carries the team that has already won its way there', () => {
  const playoffs = CROSSED_ROUND_1.map((m) => ({ ...m }));
  Object.assign(playoffs[0], { result: 'home', complete: true });
  const bracket = buildBracket({ teams: CROSSED_TEAMS, playoffs });
  const semi = bracket.rounds[1].slots.find((slot) => slot.from.includes(0));
  assert.equal(semi.home, 'A1');
  assert.equal(semi.away, undefined, 'a side still being played for is left empty, not guessed');
});

test('posted rounds are linked through the teams, whatever order they arrive in', () => {
  const playoffs = [
    match(1, 'A1', 'B4', 'home', 1, 4),
    match(1, 'B1', 'A4', 'away', 1, 4),
    match(1, 'B2', 'A3', 'away', 2, 3),
    match(1, 'A2', 'B3', 'home', 2, 3),
    // Listed the other way round from round 1.
    match(2, 'A4', 'A2', null, 4, 2),
    match(2, 'A1', 'A3', null, 1, 3),
  ];
  const bracket = buildBracket({ teams: CROSSED_TEAMS, playoffs });
  assert.equal(bracket.linked, true);
  assert.deepEqual(bracket.rounds[1].slots.map((slot) => slot.from), [[1, 3], [0, 2]]);
  assert.equal(bracket.rounds[2].projected, true);
  assert.deepEqual(bracket.rounds[2].slots[0].from, [0, 1]);
});

test('rounds that do not chain are listed as rounds, without links or guesses', () => {
  const playoffs = [
    match(1, 'A1', 'B4', 'home', 1, 4),
    match(1, 'B1', 'A4', 'home', 1, 4),
    // A team round 1 never saw.
    match(2, 'A1', 'Somebody Else', null, 1, 2),
  ];
  const bracket = buildBracket({ teams: CROSSED_TEAMS, playoffs });
  assert.equal(bracket.linked, false);
  assert.ok(bracket.rounds.every((round) => round.slots.every((slot) => !slot.from)));
  assert.ok(bracket.rounds.every((round) => !round.projected));
});

test('two byes from one pod are never drawn against each other', () => {
  // 3.75 Mens in Fall 2026 was seeded like this: the pods alone would pair the
  // two North byes, and nothing else settles it.
  const teams = [
    team('N1', 'N'), team('N2', 'N'), team('N3', 'N'), team('N4', 'N'),
    team('E1', 'E'), team('E3', 'E'), team('E4', 'E'),
    team('S1', 'S'), team('S2', 'S'), team('S3', 'S'), team('S4', 'S'), team('E2', 'E'),
  ];
  const playoffs = [
    bye(1, 'N2', 2), bye(1, 'E1', 1), bye(1, 'S1', 1), bye(1, 'N1', 1),
    match(1, 'N4', 'E3', null, 4, 3),
    match(1, 'N3', 'E4', null, 3, 4),
    match(1, 'E2', 'S4', null, 2, 4),
    match(1, 'S2', 'S3', null, 2, 3),
  ];
  const bracket = buildBracket({ teams, playoffs });
  assert.equal(bracket.drawPending, true);
  assert.equal(bracket.rounds.length, 1, 'a round that cannot be drawn with certainty is not drawn');
});

test('a pairing is refused when a top seed has more than one match it could meet', () => {
  const slots = [
    { home: 'A1', away: 'B4', homeSeed: 1, awaySeed: 4, teams: ['A1', 'B4'] },
    { home: 'B2', away: 'A3', homeSeed: 2, awaySeed: 3, teams: ['B2', 'A3'] },
    { home: 'B1', away: 'A4', homeSeed: 1, awaySeed: 4, teams: ['B1', 'A4'] },
    // Two matches would both send their winner to A1.
    { home: 'C2', away: 'A2', homeSeed: 2, awaySeed: 3, teams: ['C2', 'A2'] },
  ];
  const podOf = (name) => name[0];
  assert.equal(pairForNextRound(slots, { firstRound: true, podOf }), null);
});

test('a lone first round of 1v2 and 3v4 is the medal round', () => {
  const teams = ['Alpha', 'Bravo', 'Charlie', 'Delta'].map((name) => ({ name, w: 6, l: 2 }));
  const data = {
    teams,
    playoffs: [
      match(1, 'Alpha', 'Bravo', 'away', 1, 2),
      match(1, 'Charlie', 'Delta', 'away', 3, 4),
    ],
    matches: [],
  };
  const result = divisionPlayoffs(data);
  assert.equal(result.stage, 'decided');
  assert.deepEqual(result.rounds.map((round) => round.label), ['Championship']);
  assert.equal(result.bronze.home, 'Charlie');
  assert.deepEqual(result.podium, ['Bravo', 'Alpha', 'Delta']);
  // The archive page reads the same bracket the same way.
  assert.deepEqual(podiumOf(data).places, result.podium);
  const byName = Object.fromEntries(result.field.map((row) => [row.name, row]));
  assert.equal(byName.Bravo.status, 'champion');
  assert.equal(byName.Alpha.place, 2);
  assert.equal(byName.Delta.place, 3);
  assert.equal(byName.Charlie.status, 'out');
  assert.equal(byName.Charlie.place, 4);
});

test('semi-finals that happen to read 1v2 and 3v4 are not mistaken for a medal round', () => {
  // Seeds are within the round, so a pair of semi-finals can read 1v2 and 3v4.
  // Their 3v4 is between two of the last round's winners; a bronze match is
  // between two of its losers.
  const teams = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map((name) => ({ name }));
  const bracket = buildBracket({
    teams,
    playoffs: [
      match(1, 'A', 'H', 'home', 1, 8),
      match(1, 'B', 'G', 'home', 2, 7),
      match(1, 'C', 'F', 'home', 3, 6),
      match(1, 'D', 'E', 'home', 4, 5),
      match(2, 'A', 'B', null, 1, 2),
      match(2, 'C', 'D', null, 3, 4),
    ],
  });
  assert.equal(bracket.bronze, undefined);
  assert.deepEqual(bracket.rounds.map((round) => round.label), ['Quarterfinals', 'Semifinals', 'Championship']);
  assert.equal(bracket.rounds[2].projected, true);
});

test('a division without a bracket reports its regular season and the top of each pod', () => {
  const teams = [team('A1', 'A', 9, 1), team('B1', 'B', 8, 2), team('A2', 'A', 5, 5), team('B2', 'B', 1, 9)];
  const meta = { reportedPods: ['A', 'B'] };
  const matches = [
    { complete: true, time: '2026-01-01T19:00:00' },
    { complete: false, time: '2026-01-08T19:00:00' },
    { complete: false, time: '2026-01-08T19:00:00' },
    // Never reported, weeks ago: still listed, for the page to tell apart.
    { complete: false, time: '2025-12-01T19:00:00' },
  ];
  const regular = divisionPlayoffs({ teams, meta, matches, playoffs: [] });
  assert.equal(regular.stage, 'regular');
  assert.deepEqual(regular.regular, {
    played: 1, total: 4, times: ['2025-12-01T19:00:00', '2026-01-08T19:00:00'],
  });
  assert.deepEqual(regular.leaders.map((group) => group.label), ['A', 'B']);
  assert.deepEqual(regular.leaders[0].teams.map((row) => row.name), ['A1', 'A2']);

  const done = divisionPlayoffs({ teams, meta, matches: [{ complete: true }], playoffs: [] });
  assert.equal(done.stage, 'awaiting');
});

test('round names count matches the way the dashboard does', () => {
  assert.equal(roundName(1), 'Championship');
  assert.equal(roundName(2), 'Semifinals');
  assert.equal(roundName(3), 'Quarterfinals');
  assert.equal(roundName(4), 'Quarterfinals');
  assert.equal(roundName(8), 'Round of 16');
  assert.equal(roundName(9), 'Round of 32');
});

// --- Archived brackets -------------------------------------------------------------

function archivedBrackets() {
  return archivedDivisions()
    .map((division) => ({ division, data: compiledData(division) }))
    .filter(({ data }) => Array.isArray(data.playoffs) && data.playoffs.length);
}

test('archived seasons hold brackets for these tests to check', () => {
  const brackets = archivedBrackets();
  assert.ok(brackets.length >= 10, `only ${brackets.length} archived brackets — the suite below would check next to nothing`);
  assert.ok(
    brackets.some(({ data }) => new Set(data.playoffs.map((m) => m.round)).size >= 4),
    'no archived bracket runs four rounds',
  );
});

test('every archived bracket links into one tree that ends in its champion', () => {
  for (const { division, data } of archivedBrackets()) {
    const result = divisionPlayoffs(data);
    assert.equal(result.linked, true, `${division.label} did not link`);
    assert.equal(result.drawPending, false, `${division.label} stops short of a final`);
    assert.ok(result.rounds.every((round) => !round.projected), `${division.label} projected a round it has`);
    assert.equal(result.rounds[result.rounds.length - 1].slots.length, 1, `${division.label} has no single final`);
    const podium = podiumOf(data);
    if (podium.basis === 'playoffs') {
      assert.equal(result.stage, 'decided', division.label);
      assert.equal(result.podium[0], podium.places[0], `${division.label} crowned a different champion than the archive`);
    }
  }
});

// The guarantee that matters: cut an archived bracket back to a round, and the
// rounds drawn forward from it either match what was actually played or are
// not drawn at all. Game numbers are stripped, so this holds the pods alone to
// it — they are what draws a bracket whose matches carry no numbers.

test('cut back a round at a time, every archived bracket is redrawn from the pods exactly or not at all', () => {
  let redrawn = 0;
  for (const { division, data } of archivedBrackets()) {
    const truth = buildBracket(data);
    const numbers = [...new Set(data.playoffs.map((m) => m.round))].sort((a, b) => a - b);
    for (let keep = 1; keep < numbers.length; keep += 1) {
      const cut = buildBracket({
        ...data,
        playoffs: withoutGames(data.playoffs.filter((m) => m.round <= numbers[keep - 1])),
      });
      for (let level = keep; level < cut.rounds.length; level += 1) {
        assert.equal(
          pairsOf(cut.rounds[level]),
          pairsOf(truth.rounds[level]),
          `${division.label}: cut to ${keep} round(s), ${cut.rounds[level].label} was drawn wrong`,
        );
        redrawn += 1;
      }
    }
  }
  assert.ok(redrawn >= 20, `only ${redrawn} projected rounds were checked — the abstention rule may have swallowed them all`);
});

// With game numbers there is no abstaining: the first round alone draws the
// whole bracket, and it has to be the one that was played.
test('every archived bracket with game numbers is redrawn exactly from its first round', () => {
  let checked = 0;
  for (const { division, data } of archivedBrackets()) {
    if (!data.playoffs.every((m) => Number.isInteger(m.game))) continue;
    const truth = buildBracket({ ...data, playoffs: withoutGames(data.playoffs) });
    const first = Math.min(...data.playoffs.map((m) => m.round));
    const cut = buildBracket({ ...data, playoffs: data.playoffs.filter((m) => m.round === first) });
    assert.equal(cut.drawPending, false, `${division.label} stopped short of a final`);
    assert.equal(cut.rounds.length, truth.rounds.length, `${division.label} drew a different number of rounds`);
    for (let level = 1; level < truth.rounds.length; level += 1) {
      assert.equal(
        teamPairsOf(cut, level),
        teamPairsOf(truth, level),
        `${division.label}: ${truth.rounds[level].label} was drawn wrong from game numbers`,
      );
    }
    checked += 1;
  }
  assert.ok(checked >= 10, `only ${checked} archived brackets carry game numbers — the check above saw next to nothing`);
});

test('the overview names every archived round the way the dashboard does', () => {
  for (const { division, data } of archivedBrackets()) {
    const { context } = loadApp(division.file);
    const bracket = buildBracket(data);
    for (const round of bracket.rounds) {
      assert.equal(round.label, context.playoffRoundLabel(round.round), `${division.label} round ${round.round}`);
    }
  }
});

// --- How the league seeds -------------------------------------------------------
//
// rankPod's claim is that the league seeds each pod by record against pod
// opponents. Every archived travel bracket is held to it: the teams each pod
// sent, in seed order, are rankPod's top teams for that pod.
//
// Spring 2026 4.0 is the one division it does not fit. Its pods ran 12/3/4/4
// and it sent 7/2/3/2 to a 14-team bracket, so it was seeded some other way.
const UNEVEN_PODS = new Set(['travel/2026-spring/data-dd1144f2.js']);

function seededPods() {
  const pods = [];
  for (const { division, data } of archivedBrackets()) {
    if (division.league !== 'travel' || UNEVEN_PODS.has(division.label)) continue;
    const first = Math.min(...data.playoffs.map((m) => m.round));
    const seed = new Map();
    for (const m of data.playoffs.filter((x) => x.round === first)) {
      if (!/^bye$/i.test(m.home)) seed.set(m.home, m.homeSeed);
      if (!/^bye$/i.test(m.away)) seed.set(m.away, m.awaySeed);
    }
    for (const pod of new Set(data.teams.map((t) => t.reportedPod))) {
      const teams = data.teams.filter((t) => t.reportedPod === pod);
      const sent = teams.filter((t) => seed.has(t.name)).sort((a, b) => seed.get(a.name) - seed.get(b.name));
      if (sent.length) pods.push({ label: `${division.label} ${pod}`, teams, sent, matches: data.matches });
    }
  }
  return pods;
}

test('each pod\'s playoff teams, in seed order, are its top teams by in-pod record', () => {
  const pods = seededPods();
  assert.ok(pods.length >= 30, `only ${pods.length} archived pods to check`);
  for (const pod of pods) {
    const ranked = rankPod(pod.teams, pod.matches).slice(0, pod.sent.length).map((r) => r.team.name);
    assert.deepEqual(ranked, pod.sent.map((t) => t.name), `${pod.label} was seeded differently`);
  }
  // And it is in-pod record doing the work: overall standings order gets at
  // least one of these pods wrong, or this test could not tell them apart.
  const overallWrong = pods.filter((pod) => (
    pod.teams.slice(0, pod.sent.length).some((t, i) => t.name !== pod.sent[i].name)
  ));
  assert.ok(overallWrong.length, 'overall standings order matches every pod, so this proves nothing about in-pod record');
});

test('a pod is ranked by record against pod opponents before overall record', () => {
  const teams = [team('Road Warrior', 'A', 9, 3), team('Pod Boss', 'A', 7, 5), team('Third', 'A', 5, 7)];
  const won = (home, away) => ({ complete: true, home, away, result: 'home' });
  const matches = [
    won('Pod Boss', 'Road Warrior'), won('Pod Boss', 'Third'), won('Road Warrior', 'Third'),
    // Out of the pod: counts overall, not in-pod.
    won('Road Warrior', 'Someone Else'),
  ];
  const leaders = divisionPlayoffs({ teams, meta: {}, matches, playoffs: [] }).leaders[0].teams;
  assert.deepEqual(leaders.map((t) => t.name), ['Pod Boss', 'Road Warrior', 'Third']);
  assert.deepEqual(leaders.map((t) => [t.pw, t.pl]), [[2, 0], [1, 1], [0, 2]]);
});

// --- The page ------------------------------------------------------------------------

function makeElement() {
  const element = {
    innerHTML: '',
    textContent: '',
    hidden: false,
    title: '',
    children: [],
    attributes: {},
    appendChild(child) { element.children.push(child); return child; },
    setAttribute(name, value) { element.attributes[name] = value; },
    removeAttribute(name) { delete element.attributes[name]; },
    getAttribute(name) { return element.attributes[name]; },
    addEventListener() {},
    getBoundingClientRect: () => ({ top: 0, height: 40 }),
    querySelectorAll: () => [],
    get firstChild() { return element.children[0] || null; },
    style: { setProperty() {} },
  };
  return element;
}

function runPage(divisions, { now = Date.UTC(2026, 0, 1, 12) } = {}) {
  const elements = new Map();
  const document = {
    getElementById(id) {
      if (!elements.has(id)) elements.set(id, makeElement());
      return elements.get(id);
    },
    createElement: () => makeElement(),
    documentElement: makeElement(),
  };
  // A clock the page can be pinned to: "next" and "awaiting a result" depend
  // on when the page is read.
  class FixedDate extends Date {
    constructor(...args) {
      super(...(args.length ? args : [now]));
    }

    static now() { return now; }
  }
  const context = {
    document,
    Date: FixedDate,
    URLSearchParams,
    location: { hash: '', pathname: '/cpl/playoffs/' },
    history: { replaceState() {} },
    addEventListener() {},
    requestAnimationFrame: (fn) => fn(),
    scrollTo() {},
  };
  context.window = context;
  context.globalThis = context;
  vm.runInNewContext(fs.readFileSync(path.join(CPL, 'compiled', 'shared.js'), 'utf8'), context);
  context.CPL_PLAYOFFS = divisions == null ? undefined : { divisions };
  vm.runInNewContext(fs.readFileSync(path.join(CPL, 'playoffs', 'playoffs.js'), 'utf8'), context);
  const host = elements.get('playoffs-host');
  return {
    html: host.children.map((child) => child.innerHTML).join('\n') + host.innerHTML,
    el: (id) => document.getElementById(id),
  };
}

const row = (fields) => ({
  season: '2099-spring', seasonLabel: 'Spring 2099', order: 20991, league: 'travel', teams: 8, asOf: null, ...fields,
});

test('no current season shows the empty line and nothing else', () => {
  const page = runPage([]);
  assert.equal(page.el('playoffs-empty').hidden, false);
  assert.equal(page.html, '');
});

test('a page with data hides the empty line', () => {
  const page = runPage([row({ slug: 'aaaa0001', division: '3.0', ...divisionPlayoffs({ teams: CROSSED_TEAMS, playoffs: CROSSED_ROUND_1, matches: [] }) })]);
  assert.equal(page.el('playoffs-empty').hidden, true);
});

test('the page draws a tile, a section and a bracket for every division', () => {
  const decided = archivedBrackets().find(({ data }) => podiumOf(data).basis === 'playoffs');
  assert.ok(decided, 'no decided archived bracket to draw');
  const divisions = [
    row({ slug: 'aaaa0001', division: '3.0', ...divisionPlayoffs({ teams: CROSSED_TEAMS, playoffs: CROSSED_ROUND_1, matches: [] }) }),
    row({ slug: 'aaaa0002', division: '3.5', ...divisionPlayoffs(decided.data) }),
    row({
      slug: 'aaaa0003',
      division: '4.0',
      ...divisionPlayoffs({ teams: CROSSED_TEAMS, matches: [{ complete: false, time: '2026-01-05T19:00:00' }], playoffs: [] }),
    }),
  ];
  const { html } = runPage(divisions);
  for (const slug of ['aaaa0001', 'aaaa0002', 'aaaa0003']) {
    assert.ok(html.includes(`href="#division-${slug}"`), `no tile links to ${slug}`);
    assert.ok(html.includes(`id="division-${slug}"`), `no section for ${slug}`);
  }
  // Two brackets drawn, one of them projected forward, one with its champion.
  assert.equal((html.match(/class="pb-bracket"/g) || []).length, 2);
  assert.ok(html.includes('pb-card is-projected'), 'the crossover bracket drew no projected round');
  assert.ok(html.includes('pb-card is-champion'), 'the decided bracket has no champion');
  assert.ok(html.includes(divisions[1].podium[0]), 'the champion is not named');
  // The regular-season division gets its pods, not a bracket.
  assert.ok(html.includes('po-pods'), 'the regular-season division has no pod tables');
  assert.ok(html.includes('Next Mon, Jan 5'), 'the regular season\'s next match is missing');
});

// Every team name on the page goes to that team's page on its own division's
// dashboard — the ?team= route the dashboard's team cards use — wherever the
// name appears: bracket, champion, Coming up, the field, and the pod tables.
test('team names link to their team pages on the division dashboard', () => {
  const decided = archivedBrackets().find(({ data }) => podiumOf(data).basis === 'playoffs');
  assert.ok(decided, 'no decided archived bracket to draw');
  const playoffs = CROSSED_ROUND_1.map((m) => ({ ...m, time: '2026-01-07T19:00:00' }));
  const divisions = [
    row({ slug: 'aaaa0001', division: '3.0', ...divisionPlayoffs({ teams: CROSSED_TEAMS, playoffs, matches: [] }) }),
    row({ slug: 'aaaa0002', division: '3.5', ...divisionPlayoffs(decided.data) }),
    row({
      slug: 'aaaa0003',
      division: '4.0',
      ...divisionPlayoffs({ teams: [team('Pod Leader', 'A', 9, 1)], meta: {}, matches: [{ complete: false }], playoffs: [] }),
    }),
  ];
  const { html } = runPage(divisions);
  const escapeRe = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // Hrefs are HTML-escaped in the markup, so & reads &amp; here.
  const linksTo = (cls, name) => html.match(new RegExp(
    `<a class="${cls}" href="[^"]*team=${escapeRe(slugify(name))}&amp;d=[^"]*" title="${escapeRe(name)}">`, 'g',
  )) || [];

  // A first-round card and the Coming up row both link A1, to its team page.
  const a1 = '<a class="pname pb-name" href="../travel/2099-spring/?team=a1&amp;d=aaaa0001" title="A1">';
  assert.ok(html.includes(a1), 'the bracket card does not link the team to its page');
  assert.ok(
    html.includes('<td class="po-match"><span class="pseed">#1</span> <a class="pname" href="../travel/2099-spring/?team=a1&amp;d=aaaa0001"'),
    'Coming up does not link the team to its page',
  );

  // Every team in the decided bracket's field is a link, and so is its champion.
  assert.equal(linksTo('pname pb-champ-name', divisions[1].podium[0]).length, 1, 'the champion is not linked');
  for (const entry of divisions[1].field) {
    assert.ok(linksTo('pname', entry.name).length >= 1, `${entry.name} is not linked in the field`);
  }

  // The pod tables, before there is a bracket.
  assert.ok(
    html.includes('<a class="pname po-pod-name" href="../travel/2099-spring/?team=pod-leader&amp;d=aaaa0003" title="Pod Leader">'),
    'the pod table does not link the team to its page',
  );
});

test('a match whose day has passed without a result is awaiting it, not coming up', () => {
  const playoffs = CROSSED_ROUND_1.map((m, index) => ({
    ...m, time: index ? '2026-01-07T19:00:00' : '2025-12-20T19:00:00',
  }));
  const division = row({ slug: 'aaaa0001', division: '3.0', ...divisionPlayoffs({ teams: CROSSED_TEAMS, playoffs, matches: [] }) });
  const { html } = runPage([division]);
  assert.ok(html.includes('Awaiting a result'), 'the stale match is listed as a fixture');
  assert.ok(html.includes('3 playoff matches scheduled · 1 awaiting a result'));
  assert.ok(html.includes('Next Wed, Jan 7'), 'the tile points at the stale match instead of the next one');
});

// .pb-name is a link on a real team and a plain span on an unfilled side of a
// projected match. A hover rule on the bare class lit the spans up as well,
// which read as something to click.
test('only linked team names answer a hover in the bracket', () => {
  const css = fs.readFileSync(path.join(CPL, 'home.css'), 'utf8');
  const hovers = [...css.matchAll(/([^{}]+)\{[^}]*\}/g)]
    .flatMap(([, selectors]) => selectors.split(','))
    .map((selector) => selector.trim())
    .filter((selector) => /\.pb-(name|champ-name)[^,]*:hover/.test(selector));
  assert.ok(hovers.length, 'no hover rule for bracket team names — the scan stopped matching');
  hovers.forEach((selector) => {
    assert.match(selector, /a\.pb-(name|champ-name):hover/, `${selector} also lights up plain-text sides`);
  });
});

// Coming up is grouped by day, then by division in the page's own order, then
// by time. Sorted by time first, two divisions playing the same evening
// interleaved row by row.
test('Coming up groups each day by division, in page order, then by time', () => {
  const at = (times) => CROSSED_ROUND_1.map((m, index) => ({ ...m, time: times[index] }));
  const divisions = [
    // Listed first on the page, but its matches start later in the evening.
    row({
      slug: 'aaaa0001',
      division: '3.0',
      ...divisionPlayoffs({ teams: CROSSED_TEAMS, matches: [], playoffs: at(['2026-01-07T19:30:00', '2026-01-07T19:30:00', '2026-01-08T19:00:00', '2026-01-07T19:30:00']) }),
    }),
    row({
      slug: 'aaaa0002',
      division: '3.5',
      ...divisionPlayoffs({ teams: CROSSED_TEAMS, matches: [], playoffs: at(['2026-01-07T20:00:00', '2026-01-07T19:00:00', '2026-01-07T19:00:00', '2026-01-07T21:00:00']) }),
    }),
  ];
  const { html } = runPage(divisions);
  const table = /<table class="arch-table po-upcoming">([^]*?)<\/table>/.exec(html);
  assert.ok(table, 'no Coming up table');
  const lines = table[1].match(/<tr[^>]*>[^]*?<\/tr>/g).slice(1).map((tr) => {
    if (tr.includes('arch-group')) return `[${/<th[^>]*>([^<]*)<\/th>/.exec(tr)[1]}]`;
    const division = /href="#division-([^"]+)"/.exec(tr);
    const time = /<td class="po-time">([^<]*)<\/td>/.exec(tr)[1];
    const home = /title="([^"]+)"/.exec(tr)[1];
    return `${tr.startsWith('<tr class="po-div-start"') ? '— ' : ''}${division ? division[1] + ' ' : ''}${time} ${home}`;
  });
  assert.deepEqual(lines, [
    '[Wed, Jan 7]',
    // The division is named on its first row only.
    'aaaa0001 7:30 PM A1',
    '7:30 PM A2',
    '7:30 PM B1',
    // A rule opens the next division; the day heading opened the first.
    '— aaaa0002 7:00 PM B1',
    '7:00 PM B2',
    '8:00 PM A1',
    '9:00 PM A2',
    '[Thu, Jan 8]',
    'aaaa0001 7:00 PM B2',
  ]);
});
