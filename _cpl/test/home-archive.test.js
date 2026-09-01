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

function runPage(file, { catalog, ids, archive }) {
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
  if (archive) context.CPL_ARCHIVE = archive;

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

const ARCHIVE_IDS = ['archive-host', 'archive-empty'];

const ARCHIVE_ROWS = {
  rows: [
    {
      season: '2026-spring',
      seasonLabel: 'Spring 2026',
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

test('each link role carries a colour and a hover state', () => {
  const css = fs.readFileSync(path.join(CPL, 'styles.css'), 'utf8');
  // A role with no hover state is the bug this is guarding: it looks like text
  // and stays looking like text under the cursor.
  ['app-link', 'data-link', 'back-link'].forEach((role) => {
    assert.ok(css.includes(`.${role} {`) || css.includes(`.${role},`), `${role} has no rule`);
    assert.ok(css.includes(`.${role}:hover`), `${role} has no hover state`);
  });
});

test('the archive division links claim the noticeable role, not the dense-table one', () => {
  const app = runArchive(ARCHIVE_ROWS);
  const html = htmlOf(app.el('archive-host'));
  assert.ok(html.includes('<a class="app-link"'), 'division links lost their link styling');
  assert.ok(!html.includes('arch-link'), 'the old unstyled class is back');
});
