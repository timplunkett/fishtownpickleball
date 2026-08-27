// Renders the head-to-head grid through cpl/app.js itself, against the compiled
// division data, on a DOM stub thin enough to run under node:test. The point is
// the markup: column counts, cell classes, link targets and the abbreviation key
// are the parts that broke when pods grew, and none of them are reachable from a
// unit test of the helpers alone.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const CPL = path.join(__dirname, '../../cpl');

// Element ids app.js requires but this test never inspects.
function makeElement(id) {
  const element = {
    id,
    innerHTML: '',
    textContent: '',
    value: '',
    checked: false,
    hidden: false,
    open: false,
    dataset: {},
    classList: { toggle() {}, add() {}, remove() {}, contains: () => false },
    // Real elements always have these; app.js sets --toc-height through them.
    style: { setProperty() {}, removeProperty() {}, getPropertyValue: () => '' },
    addEventListener() {},
    setAttribute() {},
    removeAttribute() {},
    querySelectorAll: () => [],
    querySelector: () => null,
    closest: () => null,
    appendChild() {},
    getBoundingClientRect: () => ({
      width: 900, height: 300, top: 0, left: 0, right: 900, bottom: 300,
    }),
  };
  return element;
}

// The toggle is the one element whose children app.js reads back.
function makeToggle(id, attribute, views) {
  const element = makeElement(id);
  const buttons = views.map((view) => {
    const button = makeElement(`${id}-${view}`);
    button.dataset[attribute] = view;
    return button;
  });
  element.querySelectorAll = (selector) => (
    selector.includes(`data-${attribute}`) ? buttons : []
  );
  element.buttons = buttons;
  return element;
}

function runApp(dataFile, mutate) {
  const elements = new Map();
  const toggles = {
    'standings-view': makeToggle('standings-view', 'view', ['cards', 'table']),
    'grid-view': makeToggle('grid-view', 'gridview', ['weeks', 'matrix']),
  };

  const document = {
    getElementById(id) {
      if (toggles[id]) return toggles[id];
      if (!elements.has(id)) elements.set(id, makeElement(id));
      return elements.get(id);
    },
    querySelectorAll: () => [],
    querySelector: () => null,
    createElement: (tag) => makeElement(tag),
    addEventListener() {},
    documentElement: makeElement('html'),
    body: makeElement('body'),
  };

  const context = {
    console,
    document,
    URL,
    URLSearchParams,
    setTimeout,
    clearTimeout,
    requestAnimationFrame: (fn) => fn(),
    location: { search: '', hash: '', pathname: '/cpl/travel/', href: 'http://x/cpl/travel/' },
    history: { replaceState() {}, pushState() {} },
    navigator: { userAgent: 'node' },
    matchMedia: () => ({ matches: false, addEventListener() {} }),
    scrollTo() {},
    getComputedStyle: () => ({ getPropertyValue: () => '' }),
    innerWidth: 1200,
    innerHeight: 900,
  };
  context.window = context;
  context.globalThis = context;
  context.window.addEventListener = () => {};

  const load = (file) => vm.runInNewContext(fs.readFileSync(file, 'utf8'), context, { filename: file });

  load(path.join(CPL, 'shared.js'));
  load(dataFile);
  // Lets a test bend the data before app.js reads it, for shapes the compiler no
  // longer emits but a stale cached data-*.js still can.
  if (mutate) mutate(context.window.DATA);
  context.DATA = context.window.DATA;
  // Normally set by bootstrap-runtime.js from the leg's division list.
  const meta = context.DATA.meta || {};
  context.DIVISIONS = [{
    slug: meta.divisionSlug || 'x',
    name: meta.divisionName || 'Division',
    dataFile: path.basename(dataFile),
  }];
  context.window.DIVISIONS = context.DIVISIONS;
  load(path.join(CPL, 'app.js'));

  const gridHost = document.getElementById('grid-host');
  return {
    context,
    gridHost,
    // What initialize() rendered, before any view is chosen. `const` at the top
    // level of a vm script isn't reachable on the context object, so the default
    // is read off the markup rather than off DEFAULT_GRID_VIEW.
    defaultView: gridHost.innerHTML.includes('class="gweeks"') ? 'weeks' : 'matrix',
    gridToggle: toggles['grid-view'],
    setView(view) {
      const button = toggles['grid-view'].buttons.find((b) => b.dataset.gridview === view);
      context.handleGridViewClick({ target: { closest: () => button } });
    },
  };
}

// The abbreviation key is how the codes in the cells are read, so it has to stay
// put while the grid scrolls sideways. It used to sit inside the scroller, which
// slid it away at exactly the point you had scrolled far enough to need it — so
// .grid-wrap wraps the table and nothing else, and the key and the caption are
// siblings of it rather than children.
function assertKeyOutsideScroller(html, label) {
  const wrappers = html.split('<div class="grid-wrap">').slice(1);
  assert.ok(wrappers.length > 0, `${label}: no scroll wrapper at all`);
  wrappers.forEach((chunk) => {
    const inside = chunk.slice(0, chunk.indexOf('</table></div>'));
    assert.ok(!inside.includes('grid-key'), `${label}: the key is inside the scroller`);
    assert.ok(!inside.includes('grid-cap'), `${label}: the caption is inside the scroller`);
  });
  // And each wrapper holds a table directly, so nothing else rides along.
  wrappers.forEach((chunk) => {
    assert.ok(chunk.startsWith('<table'), `${label}: the wrapper holds something other than a table`);
  });
}

function divisionFiles() {
  return ['travel', 'local'].flatMap((leg) => {
    const dir = path.join(CPL, leg);
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir)
      .filter((file) => /^data-[0-9a-f]+\.js$/.test(file))
      .map((file) => ({ label: `${leg}/${file}`, file: path.join(dir, file) }));
  });
}

const countTags = (html, tag) => (html.match(new RegExp(`<${tag}[\\s>]`, 'g')) || []).length;
const rowsOf = (html) => html.split('<tr>').slice(1);

// Header rows open with the same `<th class="row">` corner cell as body rows, so
// counting rows means counting inside the tbodies.
const bodyRowCount = (html) => html
  .split('<tbody>').slice(1)
  .reduce((total, chunk) => total + countTags(chunk.split('</tbody>')[0], 'tr'), 0);

const DIVISIONS = divisionFiles();

test('there are compiled divisions to render', () => {
  assert.ok(DIVISIONS.length > 0);
});

DIVISIONS.forEach(({ label, file }) => {
  test(`${label}: both views render`, () => {
    const app = runApp(file);
    const { DATA } = app.context;

    const podCount = DATA.meta && DATA.meta.podCount > 1 ? DATA.meta.podCount : 1;
    const sizes = podCount <= 1
      ? [DATA.teams.length]
      : Array.from({ length: podCount }, (_, i) => DATA.teams.filter((t) => t.pod === i + 1).length)
        .filter(Boolean);
    const largest = Math.max(...sizes);

    // By week everywhere, whatever the section sizes.
    assert.equal(app.defaultView, 'weeks', `${label}: largest section is ${largest} teams`);

    app.setView('weeks');
    const weeks = app.gridHost.innerHTML;
    assert.ok(weeks.includes('class="gweeks"'), `${label}: no by-week table`);
    assert.ok(weeks.includes('grid-key'), `${label}: no abbreviation key`);
    assert.equal(
      (weeks.match(/<table class="gweeks">/g) || []).length,
      sizes.length,
      `${label}: one by-week table per section`,
    );

    assertKeyOutsideScroller(weeks, `${label}: by-week`);

    app.setView('matrix');
    const matrix = app.gridHost.innerHTML;
    assert.ok(matrix.includes('class="gmatrix"'), `${label}: no matrix table`);
    assert.ok(matrix.includes('grid-key'), `${label}: matrix needs the key too`);
    assertKeyOutsideScroller(matrix, `${label}: matrix`);

    // No row header spells a team out: that is what set the first column's width.
    [['by-week', weeks], ['matrix', matrix]].forEach(([name, html]) => {
      assert.ok(!html.includes('class="full"'), `${label}: ${name} still renders full names in headers`);
      DATA.teams.forEach((team) => {
        if (team.name.length <= 12) return;
        assert.ok(
          !html.includes(`<span class="abbr">${team.name}</span>`),
          `${label}: ${name} row header is the unabbreviated "${team.name}"`,
        );
      });
    });

    // Every code shown in a cell is spelled out in a key on the same page.
    const codes = [...weeks.matchAll(/class="wk opp"[^>]*>([A-Z0-9]+)/g)].map(([, code]) => code);
    const keyed = new Set([...weeks.matchAll(/gkey-item"><b>([^<]+)</g)].map(([, code]) => code));
    [...new Set(codes)].forEach((code) => {
      assert.ok(keyed.has(code), `${label}: cell code ${code} is missing from the key`);
    });

    // One body row per team in every section, in both views.
    [['by-week', weeks], ['matrix', matrix]].forEach(([name, html]) => {
      assert.equal(
        bodyRowCount(html),
        sizes.reduce((a, b) => a + b, 0),
        `${label}: ${name} row count`,
      );
    });
  });
});

// The division whose single 21-team pod is what made the matrix unusable.
const WIDEST = DIVISIONS.find(({ file }) => file.endsWith('data-c43b8608.js'));

test('the 21-team section is far narrower by week than as a matrix', () => {
  assert.ok(WIDEST, 'expected the 3.5 (50+) division to be compiled');
  const app = runApp(WIDEST.file);
  const teamCount = app.context.DATA.teams.length;
  assert.equal(teamCount, 21);

  app.setView('matrix');
  const matrixHead = rowsOf(app.gridHost.innerHTML)[0];
  const matrixColumns = countTags(matrixHead, 'th') - 1;

  app.setView('weeks');
  const weeksHtml = app.gridHost.innerHTML;
  const weeksColumns = countTags(rowsOf(weeksHtml)[0], 'th') - 1;

  assert.equal(matrixColumns, teamCount, 'matrix is one column per team');
  assert.ok(
    weeksColumns < matrixColumns / 1.5,
    `by-week should be much narrower: ${weeksColumns} vs ${matrixColumns} columns`,
  );

  // Nearly every by-week cell carries a match, where the matrix is mostly the
  // hatching for pairs that never meet.
  const weekCells = countTags(weeksHtml, 'td');
  const byes = (weeksHtml.match(/class="bye"/g) || []).length;
  assert.ok(
    byes / weekCells < 0.25,
    `by-week grid should be dense: ${byes}/${weekCells} cells empty`,
  );
});

test('by-week cells link to the opponent and row headers to the team', () => {
  const app = runApp(WIDEST.file);
  app.setView('weeks');
  const html = app.gridHost.innerHTML;

  // Montville Rocks beat Montville Dragons in week 1: the row is Rocks, and that
  // cell should route to Dragons.
  const rocksRow = rowsOf(html).find((row) => row.includes('title="Montville Rocks"'));
  assert.ok(rocksRow, 'expected a Montville Rocks row');
  assert.ok(
    rocksRow.startsWith('<th class="row" data-team="montville-rocks"'),
    'row header should link to its own team',
  );
  assert.match(rocksRow, /<span class="abbr">M·Rocks<\/span>/);
  const firstCell = rocksRow.slice(rocksRow.indexOf('<td'));
  assert.match(firstCell, /data-team="montville-dragons"/);
  assert.match(firstCell, /class="wk opp" title="Montville Dragons">DRAG</);
  assert.match(firstCell, /<div class="res">W<\/div>/);

  // The key covers every team in the section, and the codes in it are the codes
  // used in the cells.
  const keyCodes = [...html.matchAll(/gkey-item"><b>([^<]+)<\/b> ([^<]+)</g)];
  assert.equal(keyCodes.length, 21);
  assert.ok(keyCodes.some(([, code, name]) => code === 'DRAG' && name === 'Montville Dragons'));
});

test('NEXT marks one fixture per team, not every future one', () => {
  const app = runApp(WIDEST.file);
  app.setView('weeks');
  const html = app.gridHost.innerHTML;

  rowsOf(html).slice(1).forEach((row) => {
    const team = (row.match(/^<th class="row"[^>]*title="([^"]+)"/) || [])[1];
    if (!team) return;
    const nexts = (row.match(/<div class="res">NEXT<\/div>/g) || []).length;
    const pending = (row.match(/class="entry next"/g) || []).length;
    assert.equal(nexts, pending ? 1 : 0, `${team}: ${nexts} NEXT boxes across ${pending} fixtures`);
  });

  // Later fixtures still carry the opponent and the date.
  const rocks = rowsOf(html).find((row) => row.includes('title="Montville Rocks"'));
  const later = rocks.split('</td>').filter((cell) => cell.includes('entry next') && !cell.includes('NEXT'));
  assert.ok(later.length > 1, 'expected several unlabelled future fixtures');
  later.forEach((cell) => {
    assert.match(cell, /class="wk opp" title="/);
    assert.match(cell, /<div class="sc">[A-Z][a-z]{2} \d+<\/div>/);
  });
});

// The compiler now guarantees every scheduled team a row, so this shape should
// not reach the client — see the pre-season branch in compiler.js and
// "a scheduled team with no confirmed roster is still in the division". It is
// still worth holding the client to it: data-*.js files are cached in browsers
// across deploys, so a page can be handed a division compiled before that fix,
// and the failure was ugly — the by-week grid names each opponent inside the
// cell, and an opponent the abbreviator never saw arrived as its full
// 31-character name and took the column with it.
test('an opponent with no row of its own is still abbreviated', () => {
  const division = DIVISIONS.find(({ file }) => file.endsWith('data-ad44e3bd.js'));
  assert.ok(division, 'expected the 3.25 Womens division to be compiled');
  const stray = 'Pickleball Kingdom Hillsborough';

  // Reproduce what the old compiler emitted: fixtures kept, row dropped.
  const app = runApp(division.file, (DATA) => {
    const before = DATA.teams.length;
    DATA.teams = DATA.teams.filter((team) => team.name !== stray);
    assert.equal(DATA.teams.length, before - 1, `${stray} is not in this division any more`);
  });

  assert.ok(
    (app.context.DATA.matches || []).some((m) => m.home === stray || m.away === stray),
    'fixture assumes this team still has fixtures',
  );

  app.setView('weeks');
  const html = app.gridHost.innerHTML;

  assert.ok(!html.includes(`>${stray}<`), 'the full name should not appear as cell text');
  assert.ok(html.includes(`title="${stray}"`), 'the full name should survive in a title');
  assert.match(html, new RegExp(`gkey-item"><b>[A-Z]+</b> ${stray}<`), 'and in the key');

  const code = app.context.teamCode(stray);
  assert.ok(code.length <= 8 && code !== stray, `expected a short code, got "${code}"`);
  assert.match(html, new RegExp(`class="wk opp" title="${stray}">${code}<`));

  // No row, and no link either: there is no team page to open, so the cell must
  // not carry `played` and look clickable.
  assert.ok(!html.includes('data-team="pickleball-kingdom-hillsborough"'), 'should not link');
  assert.ok(
    !rowsOf(html).some((row) => row.includes(`title="${stray}"><span class="gdot"`)),
    'should have no row of its own',
  );
  const cells = html.split('</td>').filter((cell) => cell.includes(`title="${stray}"`));
  assert.ok(cells.length > 0, 'expected cells naming it as an opponent');
  cells.forEach((cell) => {
    const open = cell.slice(cell.indexOf('<td'));
    assert.ok(!open.startsWith('<td class="played'), `unclickable cell marked played: ${open.slice(0, 60)}`);
  });
});

test('a week holding two matches is not a link', () => {
  // Picklr Newtown plays twice in week 10 of 3.5 (50+).
  const app = runApp(WIDEST.file);
  app.setView('weeks');
  const row = rowsOf(app.gridHost.innerHTML).find((r) => r.includes('title="Picklr Newtown"'));
  assert.ok(row, 'expected a Picklr Newtown row');
  const doubled = row.match(/<td class="[^"]*upcoming-multi[^"]*"[^>]*>/g) || [];
  assert.equal(doubled.length, 1, 'expected exactly one doubled week');
  assert.ok(!doubled[0].includes('data-team='), 'a doubled cell has no single opponent to point at');
  assert.ok(!doubled[0].includes('played'), 'a doubled cell is not clickable');
});
