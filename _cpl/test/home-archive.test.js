// The landing page's two boxes (cpl/home.js) and the season archive
// (cpl/archive/archive.js).
//
// The landing page is built from cpl/catalog.js, so the cases worth pinning are
// the ones the old league-per-panel layout could not express: a league between
// seasons, both leagues between seasons, and a season two leagues both played.
// The archive page is built from its own cpl/archive/data.js instead — those
// rows are read here and nowhere else, and they grow with every finished season.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const CPL = path.join(__dirname, '../../cpl');

// A DOM stub thin enough to run under node:test and thick enough for two pages
// that only ever create elements, set text, and listen for change.
function makeElement(tag) {
  const element = {
    tagName: String(tag || 'div').toUpperCase(),
    className: '',
    textContent: '',
    innerHTML: '',
    value: '',
    hidden: false,
    title: '',
    children: [],
    attributes: {},
    listeners: {},
    appendChild(child) {
      element.children.push(child);
      return child;
    },
    setAttribute(name, value) { element.attributes[name] = value; },
    getAttribute(name) { return element.attributes[name]; },
    removeAttribute(name) { delete element.attributes[name]; },
    addEventListener(type, fn) {
      (element.listeners[type] = element.listeners[type] || []).push(fn);
    },
    // Lets a test drive a listener the page attached, e.g. a click on the strip.
    fire(type, event = {}) {
      (element.listeners[type] || []).slice().forEach((fn) => fn(event));
    },
    get firstChild() { return element.children[0] || null; },
    // Enough of a box for the archive's season strip to measure itself and
    // decide whether its pills have scrolled off the end of it. Settable, so a
    // test can put a season above or below the sticky ceiling.
    rect: { width: 900, height: 40, top: 500, left: 0, right: 900, bottom: 540 },
    getBoundingClientRect() { return element.rect; },
    scrollLeft: 0,
    scrollWidth: 900,
    clientWidth: 900,
    scrollIntoView() { element.scrolledIntoView = true; },
    // The strip rebuilds its own chips from innerHTML, which is the only query
    // either page runs; anything else legitimately finds nothing here.
    querySelectorAll(selector) {
      if (selector !== 'a[href^="#"]') return [];
      element.chips = element.chips || new Map();
      return [...element.innerHTML.matchAll(/href="#([^"]+)"/g)].map(([, id]) => {
        if (!element.chips.has(id)) {
          const chip = makeElement('a');
          chip.setAttribute('href', `#${id}`);
          element.chips.set(id, chip);
        }
        return element.chips.get(id);
      });
    },
    querySelector: () => null,
    closest: () => null,
    style: {
      props: new Map(),
      setProperty(name, value) { this.props.set(name, String(value)); },
      getPropertyValue(name) { return this.props.get(name) || ''; },
    },
  };
  return element;
}

// Every element the pages ask for by id, created on demand so a page that looks
// for one this test does not care about still runs.
function makeDocument(ids) {
  const elements = new Map();
  for (const id of ids) elements.set(id, makeElement('div'));
  return {
    elements,
    getElementById(id) {
      if (!elements.has(id)) elements.set(id, makeElement('div'));
      return elements.get(id);
    },
    // An element that is given an id becomes findable by it, the way appending
    // it to the document would in a browser. The archive's season strip is built
    // by looking its sections back up by id, so a createElement that dropped
    // them on the floor would have the strip pointing at conjured empties.
    createElement(tag) {
      const element = makeElement(tag);
      let id = '';
      Object.defineProperty(element, 'id', {
        get: () => id,
        set: (value) => { id = String(value); elements.set(id, element); },
      });
      return element;
    },
    addEventListener() {},
    body: makeElement('body'),
    // The archive publishes its strip's measured height here, for the
    // scroll-margin the stylesheet spends on each season.
    documentElement: makeElement('html'),
  };
}

function runPage(file, { catalog, ids, archive, hash = '' } = {}) {
  const document = makeDocument(ids);
  const navigated = [];
  const replaced = [];
  const scrolled = [];
  const frames = [];
  const context = {
    document,
    URLSearchParams,
    setTimeout,
    clearTimeout,
    console: { warn() {}, error() {} },
    // The archive's season strip coalesces scrolls to a frame. Queued rather
    // than run on the spot, because the page holds the handle this returns as
    // its "a frame is already pending" flag — running the callback before the
    // assignment lands would leave that flag set for good and swallow every
    // scroll after the first. `fire` drains the queue.
    requestAnimationFrame: (fn) => frames.push(fn),
    history: { replaceState(_state, _title, url) { replaced.push(url); } },
    scrollTo: (options) => scrolled.push(options),
  };
  context.window = context;
  context.globalThis = context;
  context.window.addEventListener = (type, fn) => {
    (context.pageListeners[type] = context.pageListeners[type] || []).push(fn);
  };
  context.pageListeners = {};
  context.location = {
    hash,
    pathname: '/cpl/archive/',
    get href() { return 'http://x/cpl/'; },
    set href(value) { navigated.push(value); },
  };
  context.window.location = context.location;
  if (catalog) context.CPL_CATALOG = catalog;
  if (archive) context.CPL_ARCHIVE = archive;

  vm.runInNewContext(fs.readFileSync(path.join(CPL, 'shared.js'), 'utf8'), context);
  vm.runInNewContext(fs.readFileSync(file, 'utf8'), context, { filename: file });
  return {
    context,
    document,
    navigated,
    replaced,
    scrolled,
    el: (id) => document.getElementById(id),
    rootStyle: () => document.documentElement.style,
    // Fires what the page attached to window, e.g. the scroll that re-marks the
    // strip's current season, then runs whatever frame that scheduled.
    fire(type, event = {}) {
      (context.pageListeners[type] || []).forEach((fn) => fn(event));
      while (frames.length) frames.shift()();
    },
  };
}

// Descend the element tree collecting whatever `pick` returns for each node.
function collect(root, pick) {
  const out = [];
  const walk = (node) => {
    const value = pick(node);
    if (value !== undefined) out.push(value);
    (node.children || []).forEach(walk);
  };
  walk(root);
  return out;
}

const selectsIn = (root) => collect(root, (node) => (node.tagName === 'SELECT' ? node : undefined));
// Every real option's value, skipping the disabled placeholder.
// The stub does not synthesize a parent's innerHTML from appended children, so
// asserting across a whole section means joining what its children hold.
const htmlOf = (root) => (root.innerHTML || '') + (root.children || []).map(htmlOf).join('');
const optionValues = (select) => [...select.innerHTML.matchAll(/<option value="([^"]+)"/g)].map((m) => m[1]);
const textsIn = (root, className) => collect(
  root,
  (node) => (node.className === className ? node.textContent : undefined),
);

// The numeric order the compiler stamps on each season. Derived here from the
// slug so the fixtures stay readable; the real one comes from the season number.
const SEASON_NUMBER = { spring: 1, summer: 2, fall: 3, winter: 4 };
const season = (slug, label, status, divisions) => {
  const [year, name] = slug.split('-');
  return {
    slug,
    label,
    status,
    order: Number(year) * 10 + (SEASON_NUMBER[name] || 0),
    landingSlug: divisions[0] ? divisions[0].slug : '',
    divisions,
  };
};

const TRAVEL_DIVS = [{ slug: 'aaaa1111', divisionName: '3.5' }, { slug: 'bbbb2222', divisionName: '4.5 Mens' }];
const LOCAL_DIVS = [{ slug: 'cccc3333', divisionName: '3.5 - 4.0', clubName: 'Bounce - Philly' }];

// Both leagues live, on different season names — which is the normal state, since
// Cross Club plays spring and fall and the local league ran a summer season.
const BOTH_LIVE = {
  leagues: [
    {
      key: 'travel',
      label: 'Cross Club League',
      current: '2026-fall',
      seasons: [
        season('2026-fall', 'Fall 2026', 'current', TRAVEL_DIVS),
        season('2026-spring', 'Spring 2026', 'archived', [{ slug: 'dddd4444', divisionName: '4.5' }]),
      ],
    },
    {
      key: 'local',
      label: 'Local Leagues',
      current: '2026-summer',
      seasons: [season('2026-summer', 'Summer 2026', 'current', LOCAL_DIVS)],
    },
  ],
};

const HOME_IDS = [
  'now-select-host', 'now-empty', 'now-season', 'archive-panel', 'archive-summary',
  'archive-list', 'data-freshness', 'player-search', 'player-results', 'finder-hint',
];

function runHome(catalog) {
  return runPage(path.join(CPL, 'home.js'), { catalog, ids: HOME_IDS });
}

// --- The landing page's Now playing box ------------------------------------

test('one picker holds every live division, across both leagues', () => {
  const app = runHome(BOTH_LIVE);
  const select = selectsIn(app.el('now-select-host'))[0];
  assert.ok(select, 'no picker was built');
  const values = optionValues(select);
  assert.deepEqual(values, [
    'travel/2026-fall/?d=aaaa1111',
    'travel/2026-fall/?d=bbbb2222',
    'local/2026-summer/?d=cccc3333',
  ]);
});

// Season is the grouping, not league. Two leagues live on differently-named
// seasons is the normal state, and it is the case that needs the optgroups.
test('optgroups appear per season when more than one is live', () => {
  const app = runHome(BOTH_LIVE);
  const html = selectsIn(app.el('now-select-host'))[0].innerHTML;
  assert.equal((html.match(/<optgroup/g) || []).length, 2);
  assert.ok(html.includes('label="Fall 2026"'));
  assert.ok(html.includes('label="Summer 2026"'));
});

// A single group heading repeats what the panel head already says — the same
// rule the Division selector on every dashboard follows.
test('a lone live season needs no optgroup', () => {
  const catalog = JSON.parse(JSON.stringify(BOTH_LIVE));
  const local = catalog.leagues.find((league) => league.key === 'local');
  local.current = null;
  local.seasons[0].status = 'archived';

  const app = runHome(catalog);
  const select = selectsIn(app.el('now-select-host'))[0];
  assert.ok(!select.innerHTML.includes('<optgroup'), 'grouped a single season under a heading');
  assert.equal(app.el('now-season').textContent, 'Fall 2026 · 2 divisions');
  // And the league that is between seasons contributes nothing rather than
  // appearing as a heading over an empty picker.
  assert.deepEqual(optionValues(select), ['travel/2026-fall/?d=aaaa1111', 'travel/2026-fall/?d=bbbb2222']);
});

test('the panel head counts seasons and divisions when several are live', () => {
  const app = runHome(BOTH_LIVE);
  assert.equal(app.el('now-season').textContent, '2 seasons · 3 divisions');
});

test('both leagues between seasons reads as a lull, not a fault', () => {
  const catalog = JSON.parse(JSON.stringify(BOTH_LIVE));
  catalog.leagues.forEach((league) => {
    league.current = null;
    league.seasons.forEach((entry) => { entry.status = 'archived'; });
  });

  const app = runHome(catalog);
  assert.equal(selectsIn(app.el('now-select-host')).length, 0);
  assert.equal(app.el('now-empty').hidden, false);
  assert.equal(app.el('now-season').textContent, '');
});

test('a travel option is a bare bracket and a local one names its club', () => {
  const app = runHome(BOTH_LIVE);
  const html = selectsIn(app.el('now-select-host'))[0].innerHTML;
  assert.match(html, />Mens 4\.5</);
  assert.match(html, /Bounce - Philly — 3\.5 - 4\.0/);
});

test('choosing a division navigates to it', () => {
  const app = runHome(BOTH_LIVE);
  const select = selectsIn(app.el('now-select-host'))[0];
  select.value = 'travel/2026-fall/?d=bbbb2222';
  select.listeners.change.forEach((fn) => fn());
  assert.deepEqual(app.navigated, ['travel/2026-fall/?d=bbbb2222']);
});

// --- The cross-league Player Finder -----------------------------------------
//
// The finder lazy-loads player-index.js and dupr-ratings.js on first focus or
// keystroke (see cpl/home.js). This stub skips the network fetch those two
// script tags stand for and drops the pre-decoded index straight onto
// PLAYER_INDEX (the same plain-array shape CPLShared.getPlayerIndex() already
// falls through to, per the "legacy plain-array index" case in
// shared.test.js), so what is under test is home.js's own grouping — not the
// pack/unpack round trip, which shared.test.js covers separately.
function runFinder(entries, duprRatings) {
  const app = runHome(BOTH_LIVE);
  app.context.PLAYER_INDEX = entries;
  app.context.DUPR_RATINGS = duprRatings || {};
  // Both script tags "load" successfully with nothing further to do — the data
  // they would have defined is already on the context above.
  app.document.body.appendChild = (node) => {
    if (node && node.onload) node.onload();
    return node;
  };
  return app;
}

// setTimeout/clearTimeout come from Node's real timers (see the context built
// in runPage), so the finder's 120ms debounce is real time to wait out, and
// its continuations past that are still real promise microtasks — the same
// two-step wait other-leagues.test.js's nextTick() uses.
async function search(app, query) {
  const input = app.el('player-search');
  input.value = query;
  (input.listeners.input || []).forEach((fn) => fn());
  await new Promise((resolve) => { setTimeout(resolve, 150); });
  await new Promise((resolve) => { setTimeout(resolve, 0); });
  await new Promise((resolve) => { setTimeout(resolve, 0); });
}

const cardNames = (app) => [...app.el('player-results').innerHTML.matchAll(
  /<div class="player-result-name">([^<]*)/g,
)].map((m) => m[1]);

// The bug this fixes: a re-registration or a corrected roster spelling mints a
// new playerId, so the same real person's two roster rows used to group into
// two separate cards. Both rows carry the same DUPR id here, the one thing
// that survived the rename, so they now belong to one card.
test('two playerIds sharing a DUPR id are one result, named for the more recent entry', async () => {
  const entries = [
    {
      name: 'Joshin Reddy', team: 'Aces', division: '3.5', slug: 'aaaa1111', league: 'travel',
      season: '2026-spring', seasonLabel: 'Spring 2026', archived: true, playerId: 'pid-old', dupr: 'DUPR1',
    },
    {
      name: 'Joshin Darreddy', team: 'Bandits', division: '4.0', slug: 'bbbb2222', league: 'travel',
      season: '2026-fall', seasonLabel: 'Fall 2026', archived: false, playerId: 'pid-new', dupr: 'DUPR1',
    },
  ];
  const app = runFinder(entries);
  await search(app, 'Joshin');
  assert.deepEqual(cardNames(app), ['Joshin Darreddy'], 'the current-season name should win, as one card');
  const html = app.el('player-results').innerHTML;
  assert.match(html, /Aces/, 'the archived row is still listed under the merged card');
  assert.match(html, /Bandits/);
});

// Two different real people can share a display name (or one can be a name
// substring match of the other's, as here) — nothing should merge them just
// because a query happens to match both.
test('the same name with two different DUPR ids stays two results', async () => {
  const entries = [
    {
      name: 'Will Kayal', team: 'Aces', division: '3.5', slug: 'aaaa1111', league: 'travel',
      season: '2026-fall', seasonLabel: 'Fall 2026', archived: false, playerId: 'pid-1', dupr: 'DUPRA',
    },
    {
      name: 'Will Kayal', team: 'Bandits', division: '4.0', slug: 'bbbb2222', league: 'travel',
      season: '2026-fall', seasonLabel: 'Fall 2026', archived: false, playerId: 'pid-2', dupr: 'DUPRB',
    },
  ];
  const app = runFinder(entries);
  await search(app, 'Kayal');
  assert.equal(cardNames(app).length, 2, 'distinct DUPR ids are distinct people, not one merged card');
});

// An entry the DUPR refresh has never reached has no `dupr` field at all —
// grouping has to fall back to playerId exactly as it did before this change,
// not treat every DUPR-less entry as unidentified and merge them together.
test('entries with no DUPR id on file still group by playerId', async () => {
  const entries = [
    {
      name: 'Nora North', team: 'Aces', division: '3.5', slug: 'aaaa1111', league: 'travel',
      season: '2026-fall', seasonLabel: 'Fall 2026', archived: false, playerId: 'pid-nora',
    },
    {
      name: 'Nora North', team: 'Crushers', division: '3.0', slug: 'cccc3333', league: 'local',
      season: '2026-summer', seasonLabel: 'Summer 2026', archived: false, playerId: 'pid-nora',
    },
    {
      name: 'Otto Osgood', team: 'Bandits', division: '4.0', slug: 'bbbb2222', league: 'travel',
      season: '2026-fall', seasonLabel: 'Fall 2026', archived: false, playerId: 'pid-otto',
    },
  ];
  const app = runFinder(entries);
  await search(app, 'N');
  assert.deepEqual(cardNames(app), ['Nora North'], 'the two DUPR-less rows for the same playerId did not merge into one card');
});

test('a person-level DUPR rating shown on the card comes from the most recent entry', async () => {
  const entries = [
    {
      name: 'Ivy Ives', team: 'Aces', division: '3.5', slug: 'aaaa1111', league: 'travel',
      season: '2026-spring', seasonLabel: 'Spring 2026', archived: true, playerId: 'pid-old', dupr: 'DUPR9',
    },
    {
      name: 'Ivy Ives', team: 'Bandits', division: '4.0', slug: 'bbbb2222', league: 'travel',
      season: '2026-fall', seasonLabel: 'Fall 2026', archived: false, playerId: 'pid-new', dupr: 'DUPR9',
    },
  ];
  const app = runFinder(entries, { 'pid-old': { rating: 3.1 }, 'pid-new': { rating: 3.7 } });
  await search(app, 'Ivy');
  const html = app.el('player-results').innerHTML;
  // The literal separator here is a non-breaking space, not U+0020 — \s covers it.
  assert.match(html, /DUPR\s+3\.700/, "the current playerId's rating should be shown");
  assert.ok(!html.includes('3.100'), "the archived playerId's rating was shown instead of the current one's");
});

// --- The archive box on the landing page -----------------------------------

test('the archive box is hidden until a season has finished', () => {
  const catalog = JSON.parse(JSON.stringify(BOTH_LIVE));
  catalog.leagues[0].seasons = catalog.leagues[0].seasons.filter((entry) => entry.status === 'current');
  const app = runHome(catalog);
  // An "Archive" heading over nothing invites someone to wonder what is missing.
  assert.equal(app.el('archive-panel').hidden, true);
});

test('the archive box counts what is behind the link and names the seasons', () => {
  const app = runHome(BOTH_LIVE);
  assert.equal(app.el('archive-panel').hidden, false);
  assert.equal(app.el('archive-summary').textContent, '1 finished season · 1 division');
  assert.deepEqual(
    textsIn(app.el('archive-list'), 'archive-list-season'),
    ['Spring 2026'],
  );
  assert.deepEqual(
    textsIn(app.el('archive-list'), 'archive-list-meta'),
    ['Cross Club League'],
  );
});

test('a season both leagues played is listed once, naming both', () => {
  const catalog = JSON.parse(JSON.stringify(BOTH_LIVE));
  catalog.leagues[1].seasons.push(
    season('2026-spring', 'Spring 2026', 'archived', [{ slug: 'ffff6666', divisionName: '3.0', clubName: 'Flemington' }]),
  );
  const app = runHome(catalog);
  assert.deepEqual(textsIn(app.el('archive-list'), 'archive-list-season'), ['Spring 2026']);
  assert.deepEqual(
    textsIn(app.el('archive-list'), 'archive-list-meta'),
    ['Cross Club League, Local Leagues'],
  );
  assert.equal(app.el('archive-summary').textContent, '1 finished season · 2 divisions');
});

// --- The archive page ------------------------------------------------------

const ARCHIVE_IDS = ['archive-host', 'archive-empty', 'archive-toc'];

const ARCHIVE_ROWS = {
  rows: [
    {
      season: '2026-spring',
      seasonLabel: 'Spring 2026',
      order: 20261,
      league: 'travel',
      slug: 'dddd4444',
      division: '4.5',
      teams: 12,
      matches: 65,
      basis: 'playoffs',
      thirdFromStandings: false,
      places: ['Alpha', 'Bravo', 'Charlie'],
    },
    {
      season: '2026-spring',
      seasonLabel: 'Spring 2026',
      order: 20261,
      league: 'travel',
      slug: 'eeee5555',
      division: '3.5',
      teams: 10,
      matches: 55,
      basis: 'playoffs',
      thirdFromStandings: true,
      places: ['Delta', 'Echo', 'Foxtrot'],
    },
    {
      season: '2025-fall',
      seasonLabel: 'Fall 2025',
      order: 20253,
      league: 'local',
      slug: 'ffff6666',
      division: '3.0',
      clubName: 'Flemington',
      teams: 6,
      matches: 30,
      basis: 'standings',
      thirdFromStandings: true,
      places: ['Golf', 'Hotel'],
    },
  ],
};

// Two divisions of one club, then one of another — what a local season looks
// like once its rows are sorted by club.
const CLUBBED_ROWS = {
  rows: [
    {
      season: '2026-summer',
      seasonLabel: 'Summer 2026',
      order: 20262,
      league: 'local',
      slug: 'aaaa0001',
      division: '3.0',
      clubName: 'Flemington',
      teams: 6,
      matches: 30,
      basis: 'standings',
      thirdFromStandings: true,
      places: ['India', 'Juliett', 'Kilo'],
    },
    {
      season: '2026-summer',
      seasonLabel: 'Summer 2026',
      order: 20262,
      league: 'local',
      slug: 'aaaa0002',
      division: '4.0',
      clubName: 'Flemington',
      teams: 6,
      matches: 30,
      basis: 'standings',
      thirdFromStandings: true,
      places: ['Lima', 'Mike', 'November'],
    },
    {
      season: '2026-summer',
      seasonLabel: 'Summer 2026',
      order: 20262,
      league: 'local',
      slug: 'aaaa0003',
      division: '3.5',
      clubName: 'Bounce - Philly',
      teams: 6,
      matches: 30,
      basis: 'playoffs',
      thirdFromStandings: false,
      places: ['Oscar', 'Papa', 'Quebec'],
    },
  ],
};

function runArchive(archive) {
  const app = runPage(path.join(CPL, 'archive', 'archive.js'), { ids: ARCHIVE_IDS, archive });
  return app;
}

test('the archive groups rows into a table per season, newest first', () => {
  const app = runArchive(ARCHIVE_ROWS);
  const blocks = app.el('archive-host').children;
  assert.equal(blocks.length, 2);
  assert.match(blocks[0].innerHTML, /Spring 2026/);
  assert.match(blocks[0].innerHTML, /2 divisions/);
  assert.match(blocks[1].innerHTML, /Fall 2025/);
  assert.match(blocks[1].innerHTML, /1 division/);
});

// The medals belong to the column headers. Repeating one on every row of a
// nineteen-row table is decoration rather than information.
test('medals head the columns and appear nowhere in the rows', () => {
  const app = runArchive(ARCHIVE_ROWS);
  // One section at a time: the page holds a table per season, so slicing across
  // all of them would read the second season's header as part of the first
  // season's body.
  const html = htmlOf(app.el('archive-host').children[0]);
  const head = html.slice(html.indexOf('<thead>'), html.indexOf('</thead>'));
  const body = html.slice(html.indexOf('<tbody>'));
  ['🥇', '🥈', '🥉'].forEach((medal) => {
    assert.ok(head.includes(medal), 'the header lost ' + medal);
    assert.ok(!body.includes(medal), medal + ' is still being repeated on the rows');
  });
  assert.ok(body.includes('Alpha') && body.includes('Bravo') && body.includes('Charlie'));
});

// Both kinds of row sit in this table at once, and "first place" means two
// different things between them, so each row says which it is.
test('a row states whether playoffs or the regular season decided it', () => {
  const app = runArchive(ARCHIVE_ROWS);
  const html = htmlOf(app.el('archive-host'));
  assert.ok(html.includes('>Playoffs<'), 'no playoff tag');
  assert.ok(html.includes('>Regular season<'), 'no regular-season tag');
});

// Third place with no match behind it is left empty. These brackets have two
// beaten semi-finalists and no third-place match, so naming either one puts a
// team under a bronze medal it did not win.
test('a bronze nobody played for is left blank, and one that was is shown', () => {
  const app = runArchive(ARCHIVE_ROWS);
  const rowsHtml = htmlOf(app.el('archive-host')).split('<tr>');
  const played = rowsHtml.find((chunk) => chunk.includes('Alpha'));
  const unearned = rowsHtml.find((chunk) => chunk.includes('Delta'));
  assert.ok(played.includes('Charlie'), 'a bronze that was won on court went missing');
  assert.ok(!unearned.includes('Foxtrot'), 'a team was shown under a bronze it did not win');
  assert.match(unearned, /arch-none/);
});

// A division too small to fill the podium, or a bracket that stopped early.
test('a place nobody filled is an empty cell', () => {
  const app = runArchive(ARCHIVE_ROWS);
  assert.match(htmlOf(app.el('archive-host').children[1]), /arch-none/);
});

// Four Summer 2026 clubs run more than one division, and repeating the club on
// every row was most of the table's width.
test('a club heads a run of its divisions instead of repeating on each row', () => {
  const app = runArchive(CLUBBED_ROWS);
  const html = htmlOf(app.el('archive-host'));
  assert.equal((html.match(/Flemington/g) || []).length, 1, 'the club is repeated per row');
  assert.ok(
    html.includes('<tr class="arch-group"><th scope="colgroup" colspan="5">Flemington</th></tr>'),
    'no club group row spanning the table',
  );
  // And the division cells hold only their bracket.
  assert.ok(html.includes('>3.0</a>') && html.includes('>4.0</a>'));
});

test('a travel division, having no club, gets no group row', () => {
  const app = runArchive(ARCHIVE_ROWS);
  assert.ok(!htmlOf(app.el('archive-host').children[0]).includes('arch-group'));
});

test('a division links to its own frozen dashboard, two directories up', () => {
  const app = runArchive(ARCHIVE_ROWS);
  const html = htmlOf(app.el('archive-host'));
  assert.match(html, /href="\.\.\/travel\/2026-spring\/\?d=dddd4444"/);
  assert.match(html, /href="\.\.\/local\/2025-fall\/\?d=ffff6666"/);
});

test('a local division names its club beside the bracket', () => {
  const app = runArchive(ARCHIVE_ROWS);
  assert.match(app.el('archive-host').children[1].innerHTML, /Flemington/);
});

test('an archive with nothing in it says so', () => {
  const app = runArchive({ rows: [] });
  assert.equal(app.el('archive-host').children.length, 0);
  assert.equal(app.el('archive-empty').hidden, false);
});

// data.js is a separate file with its own cache entry, so it can be the one
// thing that fails to load. The page has to say so rather than sit blank.
test('a missing archive dataset leaves the page saying so, not empty', () => {
  const app = runArchive(undefined);
  assert.equal(app.el('archive-empty').hidden, false);
});

// --- The season strip ------------------------------------------------------
//
// The same sticky strip of pills the division dashboards carry. This page stacks
// a table per season down one column, so by the fourth or fifth season the ones
// at the bottom are only reachable by scrolling past every division above them.

const chip = (app, id) => (app.el('archive-toc').chips || new Map()).get(id);
// Reading the strip's chips is what builds them, so ask for them before looking
// one up.
const readChips = (app) => app.el('archive-toc').querySelectorAll('a[href^="#"]');

test('every season gets an id and a pill that points at it', () => {
  const app = runArchive(ARCHIVE_ROWS);
  const strip = app.el('archive-toc');
  assert.equal(strip.hidden, false);
  assert.deepEqual(
    app.el('archive-host').children.map((section) => section.id),
    ['season-2026-spring', 'season-2025-fall'],
  );
  assert.match(strip.innerHTML, /href="#season-2026-spring">Spring 2026</);
  assert.match(strip.innerHTML, /href="#season-2025-fall">Fall 2025</);
  // Newest first, the same order as the sections themselves.
  assert.ok(
    strip.innerHTML.indexOf('season-2026-spring') < strip.innerHTML.indexOf('season-2025-fall'),
  );
  // The way back up, which the sections themselves cannot offer.
  assert.match(strip.innerHTML, /class="toc-top"/);
  // Nothing collapses on this page, so there is nothing to collapse all of.
  assert.ok(!strip.innerHTML.includes('toc-bulk'), 'a bulk control with nothing to act on');
});

test('a single archived season gets no strip', () => {
  const oneSeason = { rows: ARCHIVE_ROWS.rows.filter((row) => row.season === '2025-fall') };
  const app = runArchive(oneSeason);
  // The whole page is already on screen; a bar offering to take you to the only
  // thing on it is noise.
  assert.equal(app.el('archive-toc').hidden, true);
  assert.equal(app.el('archive-toc').innerHTML, '');
});

test('an empty archive builds no strip at all', () => {
  const app = runArchive({ rows: [] });
  assert.equal(app.el('archive-toc').innerHTML, '');
});

test('the strip marks the season whose top has passed under it', () => {
  const app = runArchive(ARCHIVE_ROWS);
  const [spring, fall] = app.el('archive-host').children;
  readChips(app);
  const marked = () => ['season-2026-spring', 'season-2025-fall']
    .filter((id) => chip(app, id) && chip(app, id).className === 'toc-current');

  // At the top of the page: both seasons below the strip, so the first one.
  spring.rect = { ...spring.rect, top: 400, bottom: 1000 };
  fall.rect = { ...fall.rect, top: 1000, bottom: 1600 };
  app.fire('scroll');
  assert.deepEqual(marked(), ['season-2026-spring']);
  assert.equal(chip(app, 'season-2026-spring').getAttribute('aria-current'), 'true');

  // Scrolled on until Fall 2025 is under the strip.
  spring.rect = { ...spring.rect, top: -600, bottom: 0 };
  fall.rect = { ...fall.rect, top: 20, bottom: 700 };
  app.fire('scroll');
  assert.deepEqual(marked(), ['season-2025-fall'], 'exactly one season is current');
  assert.equal(chip(app, 'season-2026-spring').getAttribute('aria-current'), undefined);
});

test('the strip publishes its height for the scroll margin to spend', () => {
  const app = runArchive(ARCHIVE_ROWS);
  // The stub's boxes are 40px tall. What matters is that it is published at all:
  // the stylesheet spends it as each season's scroll-margin, so a pill lands its
  // season below the strip rather than behind it.
  assert.equal(app.rootStyle().getPropertyValue('--toc-height'), '40px');
});

test('a pill scrolls to its season and puts it in the URL', () => {
  const app = runArchive(ARCHIVE_ROWS);
  let prevented = false;
  app.el('archive-toc').fire('click', {
    target: { closest: (selector) => (selector === '.toc-top' ? null : { getAttribute: () => '#season-2025-fall' }) },
    preventDefault() { prevented = true; },
  });
  assert.equal(app.el('archive-host').children[1].scrolledIntoView, true);
  assert.deepEqual(app.replaced, ['#season-2025-fall']);
  // The browser's own jump would land the season behind the sticky strip.
  assert.equal(prevented, true, 'the default jump was left to happen as well');
});

test('Top goes back to the heading and takes the fragment out of the URL', () => {
  const app = runArchive(ARCHIVE_ROWS);
  app.el('archive-toc').fire('click', {
    target: { closest: (selector) => (selector === '.toc-top' ? { tagName: 'BUTTON' } : null) },
  });
  // Read field by field: the object comes from the vm realm, so it is
  // structurally equal to this one but not the same kind of object.
  assert.equal(app.scrolled.length, 1);
  assert.equal(app.scrolled[0].top, 0);
  assert.equal(app.scrolled[0].behavior, 'smooth');
  // Otherwise a reload would drop straight back to the season just left.
  assert.deepEqual(app.replaced, ['/cpl/archive/']);
});

test('a season fragment the page was opened with is applied once it has content', () => {
  // The browser cannot do this itself: nothing on this page is in the document
  // when it parses the URL.
  const app = runPage(path.join(CPL, 'archive', 'archive.js'), {
    ids: ARCHIVE_IDS,
    archive: ARCHIVE_ROWS,
    hash: '#season-2025-fall',
  });
  assert.equal(app.el('archive-host').children[1].scrolledIntoView, true);
  // Applied, not re-stated: the fragment is already in the URL.
  assert.deepEqual(app.replaced, []);
});

// --- Link styling ----------------------------------------------------------
//
// The archive's division links once carried a class that set body colour, no
// underline and no hover state, so a whole column of them read as plain text.
// The roles are defined in cpl/styles.css; these check that every link the site
// emits actually claims one of them, and that the claim resolves to a rule.

test('every link class the pages emit is defined in a stylesheet', () => {
  const css = ['styles.css', 'home.css']
    .map((file) => fs.readFileSync(path.join(CPL, file), 'utf8'))
    .join('\n');

  const sources = [
    'index.html', 'home.js', 'archive/index.html', 'archive/archive.js',
    'dupr-audit/index.html',
  ].map((file) => fs.readFileSync(path.join(CPL, file), 'utf8')).join('\n');

  // Anchors carry their class either as markup or as a generated string.
  const classes = new Set();
  for (const [, value] of sources.matchAll(/<a class="([a-z- ]+)"/g)) {
    value.split(/\s+/).filter(Boolean).forEach((name) => classes.add(name));
  }
  for (const [, value] of sources.matchAll(/'<a class="([a-z- ]+)"/g)) {
    value.split(/\s+/).filter(Boolean).forEach((name) => classes.add(name));
  }

  assert.ok(classes.size >= 3, `only found ${[...classes]} — the scan stopped matching`);
  const undefinedClasses = [...classes].filter((name) => !css.includes(`.${name}`));
  assert.deepEqual(undefinedClasses, [], 'link classes with no rule behind them');
});

test('every link class shares one rule, and that rule underlines', () => {
  const css = fs.readFileSync(path.join(CPL, 'styles.css'), 'utf8');
  // One rule covering all of them is the point: the drift this replaced came
  // from each page deciding for itself what a link looked like.
  const block = /\n((?:[.a-z-]+,\n)*[.a-z-]+) \{\n([^}]*text-decoration: underline;[^}]*)\}/.exec(css);
  assert.ok(block, 'no rule sets a link underline');
  const selectors = block[1].split(',\n').map((line) => line.trim());
  ['a', '.app-link', '.pname', '.audit-link'].forEach((selector) => {
    assert.ok(selectors.includes(selector), `${selector} is not in the shared link rule`);
  });
  // Underline says "link"; colour is left to say where it goes. An accent at
  // rest would put both signals on every link and turn the dashboard's team and
  // player columns into walls of blue.
  assert.match(block[2], /color: inherit/, 'the base link rule colours links');
  assert.ok(!/var\(--accent\)/.test(block[2]), 'the base link rule is accenting every link');

  // Hover is where the accent belongs for an internal link.
  const hover = /\n((?:[.a-z-]+:hover,\n)*[.a-z-]+:hover) \{\n([^}]*)\}/.exec(css);
  assert.ok(hover, 'links have no hover state');
  ['a:hover', '.app-link:hover', '.pname:hover', '.audit-link:hover'].forEach((selector) => {
    assert.ok(hover[1].includes(selector), `${selector} has no hover state`);
  });
  assert.match(hover[2], /color: var\(--accent\)/, 'hovering a link does not turn it accent');
});

// Blue is reserved for links that leave the site, so it means something. The
// rule is an attribute selector because internal hrefs here are all relative —
// it cannot be forgotten on a new link, and the one external anchor is emitted
// by shared.js, which is generated.
test('only links that leave the site are accented', () => {
  const css = fs.readFileSync(path.join(CPL, 'styles.css'), 'utf8');
  const external = /a\[href\^="http"\] \{([^}]*)\}/.exec(css);
  assert.ok(external, 'nothing distinguishes an external link');
  assert.match(external[1], /color: var\(--accent\)/);

  // And the site's own links are still relative, or the rule above catches them
  // by mistake.
  const pages = ['index.html', 'archive/index.html', 'archive/archive.js', 'home.js']
    .map((file) => fs.readFileSync(path.join(CPL, file), 'utf8')).join('\n');
  assert.ok(
    !/<a[^>]*href="https:\/\/fishtownpickleball/.test(pages),
    'an internal link is written as an absolute URL and will read as external',
  );
});

// The two things that opt out are not text links: chrome, and a whole-row
// anchor whose affordance is its hover background.
test('the opt-outs are the two documented ones and they carry their own affordance', () => {
  const css = fs.readFileSync(path.join(CPL, 'styles.css'), 'utf8')
    + fs.readFileSync(path.join(CPL, 'home.css'), 'utf8');
  assert.match(css, /\.back-link:hover/, 'back-link has no hover state');
  assert.match(css, /\.player-result-entry:hover/, 'the finder rows have no hover state');
});

test('the archive division links carry a styled link class', () => {
  const app = runArchive(ARCHIVE_ROWS);
  const html = htmlOf(app.el('archive-host'));
  assert.ok(html.includes('<a class="app-link"'), 'division links lost their link styling');
  assert.ok(!html.includes('arch-link'), 'the old unstyled class is back');
});

// The archive page sets each section's innerHTML in one go, so its heading is
// markup rather than a child element — collect() cannot see it.
const seasonHeadings = (app) => app.el('archive-host').children
  .map((section) => (/tier-head">([^<]*)</.exec(section.innerHTML) || [])[1])
  .filter(Boolean);

// --- Season ordering -------------------------------------------------------
//
// The Archive box on the landing page and the sections on /cpl/archive/ list
// the same seasons, and they used to sort them differently: the page took the
// order the compiler emits, which walks league by league, so a local season
// landed after every travel one however recently it was played. They share one
// comparator now, and these hold them to it.

test('the archive page orders seasons newest first, not league by league', () => {
  // Rows arrive travel-first, which is the order the compiler emits them in.
  // Summer 2026 is local and the most recent, so it has to climb to the top.
  const app = runArchive({
    rows: [
      { ...ARCHIVE_ROWS.rows[0] },
      { season: '2025-fall', seasonLabel: 'Fall 2025', order: 20253, league: 'travel', slug: 'a1', division: '3.5', basis: 'standings', thirdFromStandings: true, places: ['A'] },
      { season: '2026-summer', seasonLabel: 'Summer 2026', order: 20262, league: 'local', slug: 'b1', division: '3.0', clubName: 'Flemington', basis: 'standings', thirdFromStandings: true, places: ['B'] },
    ],
  });
  assert.deepEqual(
    seasonHeadings(app),
    ['Summer 2026', 'Spring 2026', 'Fall 2025'],
  );
});

test('the two pages order the same seasons the same way', () => {
  const seasons = [
    { slug: '2025-fall', label: 'Fall 2025', order: 20253 },
    { slug: '2026-summer', label: 'Summer 2026', order: 20262 },
    { slug: '2026-spring', label: 'Spring 2026', order: 20261 },
  ];

  // The landing page's Archive box, via the catalog.
  const catalog = {
    leagues: [
      {
        key: 'travel',
        label: 'Cross Club League',
        current: null,
        seasons: [
          season('2026-spring', 'Spring 2026', 'archived', [{ slug: 'x1', divisionName: '3.5' }]),
          season('2025-fall', 'Fall 2025', 'archived', [{ slug: 'x2', divisionName: '3.5' }]),
        ],
      },
      {
        key: 'local',
        label: 'Local Leagues',
        current: null,
        seasons: [season('2026-summer', 'Summer 2026', 'archived', [{ slug: 'x3', divisionName: '3.0', clubName: 'Flemington' }])],
      },
    ],
  };
  const box = runHome(catalog);
  const boxOrder = textsIn(box.el('archive-list'), 'archive-list-season');

  // The archive page, via its own rows — deliberately shuffled, since the point
  // is that neither page depends on the order it is handed.
  const page = runArchive({
    rows: seasons.map((entry, i) => ({
      season: entry.slug,
      seasonLabel: entry.label,
      order: entry.order,
      league: 'travel',
      slug: `s${i}`,
      division: '3.5',
      basis: 'standings',
      thirdFromStandings: true,
      places: ['A'],
    })),
  });
  const pageOrder = seasonHeadings(page);

  assert.deepEqual(pageOrder, boxOrder, 'the archive page and the Archive box disagree');
  assert.deepEqual(pageOrder, ['Summer 2026', 'Spring 2026', 'Fall 2025']);
});

// Slugs read <year>-<name>, so sorting them as strings puts Summer above Fall
// within a year. The numeric stamp is what prevents that, and it is the trap
// both pages fell into independently.
test('seasons of one year order chronologically, not alphabetically', () => {
  const rows = [
    { season: '2026-fall', seasonLabel: 'Fall 2026', order: 20263, league: 'travel', slug: 'f1', division: '3.5', basis: 'standings', thirdFromStandings: true, places: ['A'] },
    { season: '2026-summer', seasonLabel: 'Summer 2026', order: 20262, league: 'travel', slug: 's1', division: '3.5', basis: 'standings', thirdFromStandings: true, places: ['A'] },
    { season: '2026-spring', seasonLabel: 'Spring 2026', order: 20261, league: 'travel', slug: 'p1', division: '3.5', basis: 'standings', thirdFromStandings: true, places: ['A'] },
  ];
  const app = runArchive({ rows: rows.slice().reverse() });
  assert.deepEqual(
    seasonHeadings(app),
    ['Fall 2026', 'Summer 2026', 'Spring 2026'],
  );
});
