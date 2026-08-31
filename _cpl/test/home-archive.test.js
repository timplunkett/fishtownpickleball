// The two catalog-driven pages: the landing page's "Now playing" tier
// (cpl/home.js) and the season archive (cpl/archive/archive.js).
//
// Both are built entirely from cpl/catalog.js, so the cases worth pinning are
// the ones where the catalog says something the old two-fixed-panels layout
// could not express: a league between seasons, both leagues between seasons, and
// a season two leagues both played.
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
    addEventListener(type, fn) {
      (element.listeners[type] = element.listeners[type] || []).push(fn);
    },
    get firstChild() { return element.children[0] || null; },
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
    createElement: (tag) => makeElement(tag),
    addEventListener() {},
    body: makeElement('body'),
  };
}

function runPage(file, { catalog, ids }) {
  const document = makeDocument(ids);
  const navigated = [];
  const context = {
    document,
    URLSearchParams,
    setTimeout,
    clearTimeout,
    console: { warn() {}, error() {} },
  };
  context.window = context;
  context.globalThis = context;
  context.location = {
    get href() { return 'http://x/cpl/'; },
    set href(value) { navigated.push(value); },
  };
  context.window.location = context.location;
  if (catalog) context.CPL_CATALOG = catalog;

  vm.runInNewContext(fs.readFileSync(path.join(CPL, 'shared.js'), 'utf8'), context);
  vm.runInNewContext(fs.readFileSync(file, 'utf8'), context, { filename: file });
  return { document, navigated, el: (id) => document.getElementById(id) };
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
const textsIn = (root, className) => collect(
  root,
  (node) => (node.className === className ? node.textContent : undefined),
);

const season = (slug, label, status, divisions) => ({
  slug, label, status, landingSlug: divisions[0] ? divisions[0].slug : '', divisions,
});

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
  'now-panels', 'now-empty', 'now-head', 'archive-panel', 'archive-summary',
  'data-freshness', 'player-search', 'player-results', 'finder-hint',
];

function runHome(catalog) {
  return runPage(path.join(CPL, 'home.js'), { catalog, ids: HOME_IDS });
}

// --- The landing page's "Now playing" tier ---------------------------------

test('a panel is built for every league with a season in progress', () => {
  const app = runHome(BOTH_LIVE);
  const panels = app.el('now-panels').children;
  assert.equal(panels.length, 2);
  assert.deepEqual(collect(panels[0], (n) => (n.tagName === 'H2' ? n.textContent : undefined)), ['Cross Club League']);
  // The season is named in the panel, not left implicit: with more than one
  // season in the world, the league name alone does not say which one this is.
  assert.deepEqual(textsIn(panels[0], 'panel-season'), ['Fall 2026']);
  assert.deepEqual(textsIn(panels[1], 'panel-season'), ['Summer 2026']);
});

// The case the old layout could not express. Two hard-coded league panels
// asserted both leagues are always in season; the first time that stopped being
// true it left a heading over an empty picker.
test('a league between seasons is left out of Now rather than shown empty', () => {
  const catalog = JSON.parse(JSON.stringify(BOTH_LIVE));
  const local = catalog.leagues.find((league) => league.key === 'local');
  local.current = null;
  local.seasons[0].status = 'archived';

  const app = runHome(catalog);
  const panels = app.el('now-panels').children;
  assert.equal(panels.length, 1);
  assert.deepEqual(collect(panels[0], (n) => (n.tagName === 'H2' ? n.textContent : undefined)), ['Cross Club League']);
  assert.equal(app.el('now-empty').hidden, true, 'a tier with one live league is not empty');
});

test('both leagues between seasons reads as a lull, not a fault', () => {
  const catalog = JSON.parse(JSON.stringify(BOTH_LIVE));
  catalog.leagues.forEach((league) => {
    league.current = null;
    league.seasons.forEach((entry) => { entry.status = 'archived'; });
  });

  const app = runHome(catalog);
  assert.equal(app.el('now-panels').children.length, 0);
  assert.equal(app.el('now-empty').hidden, false);
  assert.equal(app.el('now-head').hidden, true, 'a "Now playing" heading over nothing');
});

test('the division options carry the path to go to, season included', () => {
  const app = runHome(BOTH_LIVE);
  const select = selectsIn(app.el('now-panels'))[0];
  assert.match(select.innerHTML, /value="travel\/2026-fall\/\?d=aaaa1111"/);
  // Travel divisions get the league's own bracket formatting; a local division
  // is meaningless without its club, since several clubs run a "3.5 - 4.0".
  const localSelect = selectsIn(app.el('now-panels'))[1];
  assert.match(localSelect.innerHTML, /Bounce - Philly — 3\.5 - 4\.0/);
});

test('choosing a division navigates to it', () => {
  const app = runHome(BOTH_LIVE);
  const select = selectsIn(app.el('now-panels'))[0];
  select.value = 'travel/2026-fall/?d=bbbb2222';
  select.listeners.change.forEach((fn) => fn());
  assert.deepEqual(app.navigated, ['travel/2026-fall/?d=bbbb2222']);
});

// --- The archive card on the landing page ----------------------------------

test('the archive card is hidden until a season has finished', () => {
  const catalog = JSON.parse(JSON.stringify(BOTH_LIVE));
  catalog.leagues[0].seasons = catalog.leagues[0].seasons.filter((entry) => entry.status === 'current');
  const app = runHome(catalog);
  // An "Archive" heading over nothing invites someone to wonder what is missing.
  assert.equal(app.el('archive-panel').hidden, true);
});

test('the archive card says what is behind the link', () => {
  const app = runHome(BOTH_LIVE);
  assert.equal(app.el('archive-panel').hidden, false);
  assert.match(app.el('archive-summary').textContent, /One finished season — Spring 2026/);
});

test('more than one archived season is counted rather than listed', () => {
  const catalog = JSON.parse(JSON.stringify(BOTH_LIVE));
  catalog.leagues[0].seasons.push(
    season('2025-fall', 'Fall 2025', 'archived', [{ slug: 'eeee5555', divisionName: '3.5' }]),
  );
  const app = runHome(catalog);
  assert.match(app.el('archive-summary').textContent, /^2 finished seasons/);
});

// --- The archive page ------------------------------------------------------

const ARCHIVE_IDS = ['archive-host', 'archive-empty'];

function runArchive(catalog) {
  return runPage(path.join(CPL, 'archive', 'archive.js'), { catalog, ids: ARCHIVE_IDS });
}

test('the archive lists finished seasons and nothing current', () => {
  const app = runArchive(BOTH_LIVE);
  const blocks = app.el('archive-host').children;
  assert.equal(blocks.length, 1);
  assert.deepEqual(textsIn(blocks[0], 'tier-head'), ['Spring 2026']);
});

// Grouping by season rather than by league is what makes this page read as a
// history: a season is one thing that happened, even when two leagues played it.
test('a season both leagues played is one block with a panel each', () => {
  const catalog = JSON.parse(JSON.stringify(BOTH_LIVE));
  catalog.leagues[1].seasons.push(
    season('2026-spring', 'Spring 2026', 'archived', [{ slug: 'ffff6666', divisionName: '3.0', clubName: 'Flemington' }]),
  );
  const app = runArchive(catalog);
  const blocks = app.el('archive-host').children;
  assert.equal(blocks.length, 1, 'one season split into two blocks');
  assert.equal(selectsIn(blocks[0]).length, 2, 'one picker per league that played it');
  assert.deepEqual(textsIn(blocks[0], 'tier-sub'), ['2 divisions']);
});

test('seasons run newest first', () => {
  const catalog = JSON.parse(JSON.stringify(BOTH_LIVE));
  catalog.leagues[0].seasons.push(
    season('2025-fall', 'Fall 2025', 'archived', [{ slug: 'eeee5555', divisionName: '3.5' }]),
  );
  const app = runArchive(catalog);
  assert.deepEqual(
    app.el('archive-host').children.flatMap((block) => textsIn(block, 'tier-head')),
    ['Spring 2026', 'Fall 2025'],
  );
});

// The page sits one directory inside /cpl/, and the option values are paths
// relative to /cpl/ itself — so they need a ../ that the landing page does not.
test('archive links climb out of /cpl/archive/ before naming a league', () => {
  const app = runArchive(BOTH_LIVE);
  const select = selectsIn(app.el('archive-host'))[0];
  assert.match(select.innerHTML, /value="\.\.\/travel\/2026-spring\/\?d=dddd4444"/);
});

test('an archive with nothing in it says so', () => {
  const catalog = JSON.parse(JSON.stringify(BOTH_LIVE));
  catalog.leagues.forEach((league) => {
    league.seasons = league.seasons.filter((entry) => entry.status === 'current');
  });
  const app = runArchive(catalog);
  assert.equal(app.el('archive-host').children.length, 0);
  assert.equal(app.el('archive-empty').hidden, false);
});

// catalog.js is a separate file with its own cache entry, so it can be the one
// thing that fails to load. Both pages have to say so rather than sit blank.
test('a missing catalog leaves the archive page saying so, not empty', () => {
  const app = runArchive(null);
  assert.equal(app.el('archive-empty').hidden, false);
});
