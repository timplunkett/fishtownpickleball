// The page's navigation and remembered-preference layer, run through cpl/app.js
// itself on a DOM stub: collapsible section state, the contents strip, the
// head-to-head → team-page deep links, and the query-string hygiene of the
// "← All standings" link and the division selector. None of it is reachable from
// a unit test of the helpers, because all of it is about what initialize()
// leaves in the DOM.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const CPL = path.join(__dirname, '../../cpl');

function makeClassList(element) {
  const names = new Set();
  return {
    add: (name) => names.add(name),
    remove: (name) => names.delete(name),
    contains: (name) => names.has(name),
    toggle: (name, force) => {
      const on = force === undefined ? !names.has(name) : Boolean(force);
      if (on) names.add(name); else names.delete(name);
      return on;
    },
    get length() { return names.size; },
    element,
  };
}

function makeElement(id, tagName = 'DIV') {
  const element = {
    id,
    tagName,
    innerHTML: '',
    textContent: '',
    value: '',
    hidden: false,
    open: false,
    dataset: {},
    attributes: {},
    // Records what app.js sets, so a test can read --toc-height and
    // --section-head-height back off the element.
    style: (() => {
      const props = new Map();
      return {
        props,
        setProperty: (name, value) => props.set(name, String(value)),
        removeProperty: (name) => props.delete(name),
        getPropertyValue: (name) => props.get(name) || '',
      };
    })(),
    parentElement: null,
    className: '',
    children: [],
    scrollLeft: 0,
    clicks: 0,
    listeners: new Map(),
    addEventListener(type, fn) {
      if (!this.listeners.has(type)) this.listeners.set(type, []);
      this.listeners.get(type).push(fn);
    },
    removeEventListener(type, fn) {
      const forType = this.listeners.get(type) || [];
      const at = forType.indexOf(fn);
      if (at !== -1) forType.splice(at, 1);
    },
    // Lets a test drive a listener app.js attached, e.g. dragging the mirror.
    fire(type, event = {}) {
      (this.listeners.get(type) || []).slice().forEach((fn) => fn(event));
    },
    setAttribute(name, value) {
      this.attributes[name] = String(value);
      // id and class are reflected as properties in a real DOM, and app.js
      // reads them both ways.
      if (name === 'id') this.id = String(value);
      if (name === 'class') this.className = String(value);
    },
    getAttribute(name) {
      if (name === 'id') return this.id || null;
      if (name === 'class') return this.className || null;
      return name in this.attributes ? this.attributes[name] : null;
    },
    removeAttribute(name) {
      delete this.attributes[name];
      if (name === 'id') this.id = '';
      if (name === 'class') this.className = '';
    },
    querySelectorAll: () => [],
    querySelector: () => null,
    closest: () => null,
    scrollIntoView() {},
    click() { this.clicks += 1; },
    appendChild(child) {
      this.children.push(child);
      child.parentElement = this;
      return child;
    },
    remove() {
      const siblings = this.parentElement && this.parentElement.children;
      if (siblings) {
        const at = siblings.indexOf(this);
        if (at !== -1) siblings.splice(at, 1);
      }
      this.parentElement = null;
    },
    cloneNode(deep) {
      const copy = makeElement(this.id, this.tagName);
      copy.className = this.className;
      copy.attributes = { ...this.attributes };
      copy.textContent = this.textContent;
      Object.assign(copy.dataset, this.dataset);
      copy.getBoundingClientRect = this.getBoundingClientRect;
      if (deep) this.children.forEach((child) => copy.appendChild(child.cloneNode(true)));
      // The queries app.js runs over a cloned row, to strip ids and tab stops.
      copy.querySelectorAll = (selector) => copy.children.filter((child) => (
        selector === '[id]' ? Boolean(child.id) : 'tabindex' in child.attributes
      ));
      return copy;
    },
    getBoundingClientRect: () => ({
      width: 900, height: 300, top: 0, left: 0, right: 900, bottom: 300,
    }),
  };
  element.classList = makeClassList(element);
  return element;
}

// A table with one header row, standing in for the real thing well enough to be
// measured, cloned and clicked. `rect` is settable so a test can put the table
// above or below the sticky ceiling.
function makeTable(id, columns, { className = 'stable', headHeight = 36 } = {}) {
  const table = makeElement(id, 'TABLE');
  table.className = className;
  table.rect = { width: 1600, height: 800, top: 400, left: 0, right: 1600, bottom: 1200 };
  table.getBoundingClientRect = () => table.rect;

  const row = makeElement(`${id}-head`, 'TR');
  columns.forEach((label, index) => {
    const cell = makeElement(`${id}-th-${index}`, 'TH');
    cell.textContent = label;
    cell.dataset.k = label;
    cell.setAttribute('tabindex', '0');
    const width = 80 + index * 10;
    cell.getBoundingClientRect = () => ({
      width, height: headHeight, top: 0, left: 0, right: width, bottom: headHeight,
    });
    row.appendChild(cell);
  });
  row.getBoundingClientRect = () => ({
    width: 1600, height: headHeight, top: 0, left: 0, right: 1600, bottom: headHeight,
  });

  table.querySelector = (selector) => (selector === 'thead tr' ? row : null);
  table.headRow = row;
  return table;
}

function makeToggle(id, attribute, views) {
  const element = makeElement(id);
  const buttons = views.map((view) => {
    const button = makeElement(`${id}-${view}`, 'BUTTON');
    button.dataset[attribute] = view;
    return button;
  });
  element.querySelectorAll = (selector) => (
    selector.includes(`data-${attribute}`) ? buttons : []
  );
  element.buttons = buttons;
  return element;
}

// A stand-in for one <section class="msec"> from index.html: the heading button
// and the body div app.js reads back off it.
function makeSection(id) {
  const section = makeElement(id, 'SECTION');
  const toggle = makeElement(`${id}-toggle`, 'BUTTON');
  const name = makeElement(`${id}-name`, 'SPAN');
  name.textContent = id.replace(/-/g, ' ');
  const body = makeElement(`${id}-body`);
  const heading = makeElement(`${id}-h2`, 'H2');
  heading.rect = { width: 900, height: 44, top: 0, left: 0, right: 900, bottom: 44 };
  heading.getBoundingClientRect = () => heading.rect;
  section.querySelector = (selector) => {
    if (selector === '.sec-toggle') return toggle;
    if (selector === '.msec-body') return body;
    if (selector === '.sec-name') return name;
    if (selector === 'h2') return heading;
    return null;
  };
  section.toggle = toggle;
  section.body = body;
  section.heading = heading;
  section.closest = (selector) => (selector === 'section.msec' ? section : null);
  toggle.closest = (selector) => (selector === 'section.msec' ? section : null);
  return section;
}

function makeLocalStorage(seed) {
  const store = new Map(Object.entries(seed || {}));
  return {
    getItem: (key) => (store.has(key) ? store.get(key) : null),
    setItem: (key, value) => store.set(key, String(value)),
    removeItem: (key) => store.delete(key),
    store,
  };
}

const DATA_FILE = (() => {
  for (const leg of ['travel', 'local']) {
    const dir = path.join(CPL, leg);
    if (!fs.existsSync(dir)) continue;
    const file = fs.readdirSync(dir).find((name) => /^data-[0-9a-f]+\.js$/.test(name));
    if (file) return { leg, file: path.join(dir, file) };
  }
  return null;
})();

function runApp({
  prefs = null,
  leagues = null,
  search = '',
  hash = '',
  storage = true,
  pathname = null,
  origin = 'http://x',
} = {}) {
  const elements = new Map();
  // While app.js loads, any id it asks for is conjured — it requires two dozen
  // elements this file has no interest in. Once it has loaded, an unknown id
  // returns null like a real document, so a test can ask what happens to a
  // fragment that points at nothing.
  let conjureMissing = true;
  const sections = ['team-standings', 'head-to-head', 'top-duos'].map(makeSection);
  const toggles = {
    'standings-view': makeToggle('standings-view', 'view', ['cards', 'table']),
    'grid-view': makeToggle('grid-view', 'gridview', ['weeks', 'matrix']),
  };

  // Stand-ins for the .scroll / .grid-wrap table wrappers. `contentWidth` is
  // what the table inside measures; app.js compares it against the visible width
  // to decide whether the wrapper needs to scroll horizontally.
  const wrappers = [
    { id: 'wrap-fits', kind: 'scroll', contentWidth: 700 },
    { id: 'wrap-overflows', kind: 'scroll', contentWidth: 1600 },
    // Fits, but only just: within a pixel or two of the content box.
    { id: 'wrap-borderline', kind: 'scroll', contentWidth: 897 },
    // The head-to-head grid: latched, and holding a table per pod section.
    { id: 'wrap-grid', kind: 'grid-wrap', contentWidth: 2400, tables: 2 },
  ].map(({ id, kind, contentWidth, tables = 1 }) => {
    const wrapper = makeElement(id);
    wrapper.kind = kind;
    // The real thing carries this as a class, and app.js reads it off classList
    // to decide whether a mirror needs a .grid-wrap to sit inside.
    wrapper.className = kind;
    wrapper.classList.add(kind);
    wrapper.contentWidth = contentWidth;
    wrapper.tables = Array.from({ length: tables }, (_, index) => makeTable(
      tables > 1 ? `${id}-table-${index}` : `${id}-table`,
      ['', 'Wk 1', 'Wk 2'],
      { className: 'gweeks' },
    ));
    [wrapper.table] = wrapper.tables;
    wrapper.querySelector = (selector) => (selector === 'table' ? wrapper.table : null);
    wrapper.querySelectorAll = (selector) => (selector === 'table' ? wrapper.tables : []);
    wrapper.closest = () => null;
    // A .panel's 1px border: the content box starts a pixel in and is two
    // pixels narrower than the border box the rect reports.
    wrapper.clientLeft = 1;
    Object.defineProperty(wrapper, 'clientWidth', { get: () => 898 });
    wrapper.getBoundingClientRect = () => ({
      width: 900, height: 400, top: 0, left: 40, right: 940, bottom: 400,
    });
    // scrollWidth is the scrollable area: the content width when the content is
    // wider than the box, the box otherwise — which is what a browser reports
    // whether or not the wrapper is currently clipping.
    Object.defineProperty(wrapper, 'scrollWidth', {
      get: () => Math.max(wrapper.clientWidth, wrapper.contentWidth),
    });
    // A browser discards a scroll offset along with the scroll container it
    // belongs to. .scroll-fits is what takes a wrapper's overflow away, so
    // adding it zeroes scrollLeft. Modelling that is the only way a test can see
    // the difference between measuring the wrapper as it stands and stripping
    // its overflow to measure.
    wrapper.scrollLeft = 0;
    const classes = wrapper.classList;
    wrapper.classList = {
      remove: (name) => classes.remove(name),
      contains: (name) => classes.contains(name),
      add: (name) => {
        if (name === 'scroll-fits') wrapper.scrollLeft = 0;
        return classes.add(name);
      },
      toggle: (name, force) => {
        const on = classes.toggle(name, force);
        if (name === 'scroll-fits' && on) wrapper.scrollLeft = 0;
        return on;
      },
    };
    return wrapper;
  });

  const mainView = makeElement('mainview');
  mainView.querySelectorAll = (selector) => {
    if (selector === 'section.msec') return sections;
    if (selector === '.scroll, .grid-wrap') return wrappers;
    if (selector === '.scroll:not(.scroll-fits), .grid-wrap:not(.scroll-fits)') {
      return wrappers.filter((wrapper) => !wrapper.classList.contains('scroll-fits'));
    }
    return [];
  };
  elements.set('mainview', mainView);
  sections.forEach((section) => elements.set(section.id, section));

  // The one element whose listener a test has to fire back.
  const divisionSelect = makeElement('division-select', 'SELECT');
  const divisionListeners = [];
  divisionSelect.addEventListener = (type, fn) => {
    if (type === 'change') divisionListeners.push(fn);
  };
  elements.set('division-select', divisionSelect);

  const document = {
    getElementById(id) {
      if (toggles[id]) return toggles[id];
      if (!elements.has(id)) {
        if (!conjureMissing) return null;
        elements.set(id, makeElement(id));
      }
      return elements.get(id);
    },
    querySelectorAll: () => [],
    querySelector: () => null,
    createElement: (tag) => makeElement(tag, tag.toUpperCase()),
    addEventListener() {},
    documentElement: makeElement('html'),
    body: makeElement('body'),
  };

  const localStorage = makeLocalStorage(
    prefs ? { 'cpl.ui.v1': JSON.stringify(prefs) } : {},
  );
  const replaced = [];
  const navigated = [];
  const scrolled = [];
  // Not `path` — that is node:path at module scope.
  const locationPath = pathname || `/cpl/${DATA_FILE.leg}/`;
  // href is an accessor, because app.js navigates by assigning it — a test reads
  // the destination out of `navigated` instead of following it.
  const location = {
    search,
    hash,
    pathname: locationPath,
    get href() { return `${origin}${locationPath}${search}${hash}`; },
    set href(url) { navigated.push(url); },
  };
  const context = {
    console,
    document,
    // Omitted entirely when the test is about a browser that has no usable
    // store: private browsing and enterprise policy both surface as a throw or
    // an absent accessor, and absent is the harsher of the two.
    ...(storage ? { localStorage } : {}),
    URL,
    URLSearchParams,
    setTimeout,
    clearTimeout,
    requestAnimationFrame: (fn) => fn(),
    location,
    history: {
      replaceState(_state, _title, url) { replaced.push(url); },
      pushState() {},
    },
    navigator: { userAgent: 'node' },
    matchMedia: () => ({ matches: false, addEventListener() {} }),
    scrollTo: (...args) => scrolled.push(args[0]),
    getComputedStyle: () => ({ getPropertyValue: () => '' }),
    innerWidth: 1200,
    innerHeight: 900,
  };
  context.window = context;
  context.globalThis = context;
  context.window.addEventListener = () => {};
  if (leagues) context.CPL_LEAGUES = leagues;

  const load = (file) => vm.runInNewContext(fs.readFileSync(file, 'utf8'), context, { filename: file });
  load(path.join(CPL, 'shared.js'));
  load(DATA_FILE.file);
  context.DATA = context.window.DATA;
  const meta = context.DATA.meta || {};
  context.DIVISIONS = [{ slug: meta.divisionSlug || 'x', divisionName: meta.divisionName || 'Division' }];
  context.window.DIVISIONS = context.DIVISIONS;
  load(path.join(CPL, 'app.js'));
  conjureMissing = false;

  return {
    context,
    sections,
    localStorage,
    replaced,
    el: (id) => document.getElementById(id),
    inject: (id, element) => elements.set(id, element),
    navigated,
    scrolled,
    // The mirrored headers app.js has appended to its host, in document order.
    mirrors: () => {
      const host = document.body.children.find((child) => child.className === 'float-heads');
      return host ? host.children : [];
    },
    wrappers,
    rootStyle: () => document.documentElement.style,
    changeDivision: () => divisionListeners.forEach((fn) => fn()),
    clickTocTop() {
      context.handleTocClick({
        target: { closest: (selector) => (selector === '.toc-top' ? makeElement('top', 'BUTTON') : null) },
      });
    },
    storedPrefs: () => JSON.parse(localStorage.getItem('cpl.ui.v1') || '{}'),
    clickSectionToggle(sectionId) {
      const section = sections.find((candidate) => candidate.id === sectionId);
      context.handleSectionToggleClick({
        target: { closest: (selector) => (selector === '.sec-toggle' ? section.toggle : null) },
      });
    },
    setStandingsView(view) {
      const button = toggles['standings-view'].buttons.find((b) => b.dataset.view === view);
      context.handleStandingsViewClick({ target: { closest: () => button } });
    },
    setGridView(view) {
      const button = toggles['grid-view'].buttons.find((b) => b.dataset.gridview === view);
      context.handleGridViewClick({ target: { closest: () => button } });
    },
  };
}

test('there is a compiled division to render', () => {
  assert.ok(DATA_FILE, 'no data-*.js found under cpl/ — run npm run compile');
});

// --- Match block ids -------------------------------------------------------

test('a match block id is the same from either team', () => {
  const app = runApp();
  const { matchBlockId } = app.context;
  const fixture = { week: 3, home: 'Bounce Philly A', away: 'Ace Moorestown' };
  assert.equal(matchBlockId(fixture), 'match-w3-bounce-philly-a-vs-ace-moorestown');
  // The id names the fixture, not the reader's side of it, so a head-to-head
  // cell can link to the opponent's page and still find the same block.
  assert.equal(matchBlockId(fixture), matchBlockId({ ...fixture }));
});

test('a playoff round does not collide with the week of the same number', () => {
  const { matchBlockId } = runApp().context;
  const fixture = { week: 2, home: 'A', away: 'B' };
  assert.notEqual(matchBlockId(fixture, 'playoff'), matchBlockId(fixture));
  assert.match(matchBlockId(fixture, 'playoff'), /^playoff-w2-/);
});

test('every head-to-head deep link resolves to a block on the team page it opens', () => {
  const app = runApp();
  const { context } = app;
  const { DATA } = context;

  // Both views, since each builds its cells from a different index.
  ['weeks', 'matrix'].forEach((view) => {
    app.setGridView(view);
    const grid = app.el('grid-host').innerHTML;
    const cells = [...grid.matchAll(/data-team="([^"]+)" data-fragment="([^"]+)"/g)];
    assert.ok(cells.length > 0, `${view}: no cell carried a match fragment`);

    // Group the fragments by the team page they point at, so each page renders once.
    const byTeam = new Map();
    cells.forEach(([, teamSlug, fragment]) => {
      if (!byTeam.has(teamSlug)) byTeam.set(teamSlug, new Set());
      byTeam.get(teamSlug).add(fragment);
    });

    byTeam.forEach((fragments, teamSlug) => {
      const { slugify } = context.window.CPLShared;
      const team = DATA.teams.find((candidate) => slugify(candidate.name) === teamSlug);
      assert.ok(team, `${view}: cell links to unknown team ${teamSlug}`);
      context.renderTeamPage(team, { scroll: false });
      const page = app.el('teamview').innerHTML;
      fragments.forEach((fragment) => {
        assert.ok(
          page.includes(`id="${fragment}"`),
          `${view}: ${team.name}'s page has no block ${fragment}`,
        );
      });
    });
  });
});

test('a cell standing for two meetings carries no fragment', () => {
  const app = runApp();
  app.setGridView('weeks');
  const grid = app.el('grid-host').innerHTML;
  // A week cell holding two entries is a `-multi` class; none of those may claim
  // a single match.
  const multiCells = grid.split('<td').filter((cell) => /class="[^"]*-multi/.test(cell));
  multiCells.forEach((cell) => {
    assert.ok(!cell.includes('data-fragment'), `a -multi cell claimed one match: ${cell.slice(0, 120)}`);
  });
});

// --- Remembered preferences ------------------------------------------------

test('with no stored preference the page opens on cards and the by-week grid', () => {
  const app = runApp();
  assert.ok(app.el('teams').innerHTML.includes('class="tcard"'), 'not the card view');
  assert.ok(app.el('grid-host').innerHTML.includes('class="gweeks"'), 'not the by-week grid');
});

test('a stored view preference is applied on load', () => {
  const app = runApp({ prefs: { standingsView: 'table', gridView: 'matrix' } });
  assert.ok(app.el('teams').innerHTML.includes('class="trow"'), 'standings table not restored');
  assert.ok(app.el('grid-host').innerHTML.includes('class="gmatrix"'), 'matrix not restored');
});

test('choosing a view stores it', () => {
  const app = runApp();
  app.setStandingsView('table');
  app.setGridView('matrix');
  assert.deepEqual(app.storedPrefs(), { standingsView: 'table', gridView: 'matrix' });
});

test('a junk stored value falls back to the defaults rather than throwing', () => {
  const app = runApp({ prefs: { standingsView: 'sideways', gridView: 42, collapsed: 'nope' } });
  assert.ok(app.el('teams').innerHTML.includes('class="tcard"'));
  assert.ok(app.el('grid-host').innerHTML.includes('class="gweeks"'));
  assert.equal(app.sections.every((section) => section.body.hidden === false), true);
});

test('a page with no usable localStorage still renders', () => {
  const app = runApp({ storage: false });
  // Object.keys rather than deepEqual: the object comes from the vm realm, so it
  // is structurally empty but not the same {} this file would build.
  assert.equal(Object.keys(app.context.readPrefs()).length, 0);
  app.context.writePrefs({ standingsView: 'table' }); // must not throw
  // And the page itself came up on the defaults rather than blank.
  assert.ok(app.el('teams').innerHTML.includes('class="tcard"'));
  assert.ok(app.el('grid-host').innerHTML.includes('class="gweeks"'));
  assert.ok(app.el('section-toc').innerHTML.includes('href="#top-duos"'));
});

// --- Collapsing and the contents strip -------------------------------------

test('collapsing a section hides its body, marks the toggle, and persists', () => {
  const app = runApp();
  const [standings] = app.sections;

  app.clickSectionToggle('team-standings');
  assert.equal(standings.body.hidden, true);
  assert.equal(standings.classList.contains('collapsed'), true);
  assert.equal(standings.toggle.getAttribute('aria-expanded'), 'false');
  assert.deepEqual(app.storedPrefs().collapsed, ['team-standings']);

  app.clickSectionToggle('team-standings');
  assert.equal(standings.body.hidden, false);
  assert.equal(standings.toggle.getAttribute('aria-expanded'), 'true');
  assert.deepEqual(app.storedPrefs().collapsed, []);
});

test('a stored collapsed section starts collapsed', () => {
  const app = runApp({ prefs: { collapsed: ['top-duos'] } });
  const duos = app.sections.find((section) => section.id === 'top-duos');
  assert.equal(duos.body.hidden, true);
  assert.equal(app.sections.find((s) => s.id === 'head-to-head').body.hidden, false);
});

test('the contents strip lists every visible section and marks the collapsed ones', () => {
  const app = runApp({ prefs: { collapsed: ['head-to-head'] } });
  const toc = app.el('section-toc').innerHTML;
  app.sections.forEach((section) => {
    assert.ok(toc.includes(`href="#${section.id}"`), `no contents entry for ${section.id}`);
  });
  assert.match(toc, /href="#head-to-head" class="toc-collapsed"/);
  assert.ok(toc.includes('Collapse all'), 'no bulk control while a section is open');
});

test('collapse all, then expand all', () => {
  const app = runApp();
  const bulk = (action) => app.context.handleTocClick({
    target: {
      closest: (selector) => (selector === '.toc-bulk' ? { dataset: { bulk: action } } : null),
    },
  });

  bulk('collapse');
  assert.deepEqual(app.storedPrefs().collapsed.sort(), app.sections.map((s) => s.id).sort());
  assert.ok(app.sections.every((section) => section.body.hidden));
  // With everything away the control has to offer the way back.
  assert.ok(app.el('section-toc').innerHTML.includes('Expand all'));

  bulk('expand');
  assert.deepEqual(app.storedPrefs().collapsed, []);
  assert.ok(app.sections.every((section) => !section.body.hidden));
});

test('a hidden section is left out of the contents strip', () => {
  const app = runApp();
  app.sections[1].hidden = true; // as renderPlayoffs does in a division with no bracket
  app.context.renderSectionToc();
  const toc = app.el('section-toc').innerHTML;
  assert.ok(!toc.includes('href="#head-to-head"'));
  assert.ok(toc.includes('href="#top-duos"'));
});

test('jumping to a collapsed section opens it', () => {
  const app = runApp({ prefs: { collapsed: ['top-duos'] } });
  const duos = app.sections.find((section) => section.id === 'top-duos');
  assert.equal(duos.body.hidden, true);
  assert.equal(app.context.navigateToFragment('top-duos'), true);
  assert.equal(duos.body.hidden, false);
  assert.deepEqual(app.storedPrefs().collapsed, []);
});

test('jumping to a fragment that is not on the page reports failure', () => {
  const app = runApp();
  assert.equal(app.context.navigateToFragment('no-such-thing'), false);
});

test('a match block on the team page you have left is not marked', () => {
  const app = runApp();
  const teamView = app.el('teamview');
  const block = makeElement('match-w9-a-vs-b');
  block.classList.add('wk-block');
  block.closest = (selector) => (selector === '#mainview, #teamview' ? teamView : null);
  app.inject('match-w9-a-vs-b', block);

  teamView.hidden = true; // as showMainView leaves it, markup and all
  assert.equal(app.context.navigateToFragment('match-w9-a-vs-b'), false);
  assert.equal(block.classList.contains('fragment-flash'), false);
});

test('landing on a match block opens its game-by-game and marks it', () => {
  const app = runApp();
  const block = makeElement('match-w3-a-vs-b');
  const gameLog = makeElement('game-log', 'DETAILS');
  block.classList.add('wk-block');
  block.querySelector = (selector) => (selector === 'details' ? gameLog : null);
  app.inject('match-w3-a-vs-b', block);

  assert.equal(app.context.navigateToFragment('match-w3-a-vs-b'), true);
  assert.equal(gameLog.open, true, 'game-by-game left closed on the block we landed on');
  assert.equal(block.classList.contains('fragment-flash'), true, 'no marker on the arrival block');
});

// A stale or hand-edited ?team=…#top-duos would otherwise expand a section that
// isn't on screen — and expanding is a write, so it would erase the reader's
// stored collapse choice for a section they never touched.
test('a section fragment is refused while a team page is showing', () => {
  const app = runApp({ prefs: { collapsed: ['top-duos'] } });
  app.el('mainview').hidden = true;
  assert.equal(app.context.navigateToFragment('top-duos'), false);
  assert.deepEqual(app.storedPrefs().collapsed, ['top-duos'], 'stored collapse state was overwritten');
});

test('landing on a section heading does not flash it', () => {
  const app = runApp();
  const [standings] = app.sections;
  standings.classList.add('msec');
  assert.equal(app.context.navigateToFragment('team-standings'), true);
  assert.equal(standings.classList.contains('fragment-flash'), false);
});

// --- Sticky layers ---------------------------------------------------------

test('only a wrapper whose table overflows gets a horizontal scroller', () => {
  const app = runApp();
  const [fits, overflows] = app.wrappers;
  // The class marks what fits, so the enhancement is what gets opted into — a
  // wrapper with no class scrolls, which is what a page with no app.js needs.
  assert.equal(fits.classList.contains('scroll-fits'), true, 'a table that fits was left scrolling');
  assert.equal(overflows.classList.contains('scroll-fits'), false, 'a table wider than the page was unlatched');
});

test('a table that only just fits is not latched, and stays that way', () => {
  const app = runApp();
  const borderline = app.wrappers.find((wrapper) => wrapper.id === 'wrap-borderline');
  assert.equal(borderline.classList.contains('scroll-fits'), true);
  app.context.refreshStickyLayout();
  assert.equal(borderline.classList.contains('scroll-fits'), true, 'lost its exemption on a second pass');
});

// Measuring used to unlatch the wrapper first, which dismantles the scroll
// container and throws its offset away. `render` runs on every keystroke in the
// search box, so that meant a horizontally scrolled leaderboard snapped back to
// its first column as you typed.
test('a scrolled table keeps its place across a re-measure', () => {
  const app = runApp();
  const wrapper = app.wrappers.find((w) => w.id === 'wrap-overflows');
  wrapper.scrollLeft = 640;
  app.context.refreshStickyLayout();
  assert.equal(wrapper.scrollLeft, 640, 'the table was yanked back to its first column');
  assert.equal(wrapper.classList.contains('scroll-fits'), false, 'and lost its scroller');
});

test('a wrapper is re-measured when its content changes width', () => {
  const app = runApp();
  const [fits] = app.wrappers;
  assert.equal(fits.classList.contains('scroll-fits'), true);
  fits.contentWidth = 2000; // e.g. a division with more columns, or a narrower window
  app.context.refreshStickyLayout();
  assert.equal(fits.classList.contains('scroll-fits'), false, 'growth past the page width went unnoticed');
  fits.contentWidth = 500;
  app.context.refreshStickyLayout();
  assert.equal(fits.classList.contains('scroll-fits'), true, 'a wrapper kept scrolling after it stopped needing to');
});

test('the strip and each section heading publish their heights', () => {
  const app = runApp();
  assert.equal(app.rootStyle().getPropertyValue('--toc-height'), '300px');
  app.sections.forEach((section) => {
    assert.equal(
      section.style.getPropertyValue('--section-head-height'),
      '44px',
      `${section.id} did not publish its heading height`,
    );
  });
});

test('a collapsed or hidden section publishes no heading height', () => {
  const app = runApp({ prefs: { collapsed: ['top-duos'] } });
  const duos = app.sections.find((section) => section.id === 'top-duos');
  // Nothing below a collapsed heading, so nothing has to stack under it.
  assert.equal(duos.style.getPropertyValue('--section-head-height'), '0px');

  app.sections[1].hidden = true;
  app.context.refreshStickyLayout();
  assert.equal(app.sections[1].style.getPropertyValue('--section-head-height'), '0px');
});

test('a team page publishes no strip height', () => {
  const app = runApp();
  app.el('mainview').hidden = true;
  app.context.refreshStickyLayout();
  assert.equal(app.rootStyle().getPropertyValue('--toc-height'), '0px');
});

// --- Mirrored column headers -----------------------------------------------

test('only the tables too wide to fit are mirrored', () => {
  const app = runApp();
  const mirrors = app.mirrors();
  // One for the overflowing .scroll wrapper, one for each of the grid's two pod
  // tables. Nothing for the two wrappers that fit — those keep a real sticky
  // header, which is cheaper and needs no mirroring.
  assert.equal(mirrors.length, 3, `expected three mirrors, got ${mirrors.length}`);
  mirrors.forEach((box) => assert.equal(box.className, 'float-head'));
});

test('a grid gets a mirror per pod table, not one for the wrapper', () => {
  const app = runApp();
  const grid = app.wrappers.find((wrapper) => wrapper.id === 'wrap-grid');
  assert.equal(grid.classList.contains('scroll-fits'), false, 'the grid should be scrolling here');
  assert.equal(grid.tables.length, 2);
  // A wrapper holding a table per pod section cannot be served by one mirror:
  // each table has its own header row and its own place on the page.
  assert.equal(app.mirrors().length, 3);
});

test('a mirrored grid header sits inside a .grid-wrap of its own', () => {
  const app = runApp();
  const [plain, grid] = [app.mirrors()[0], app.mirrors()[1]];
  // The grid's cells are styled through `.grid-wrap th` rules, so the mirror
  // needs that class in its ancestry — on an inner element, because the class
  // also carries overflow: visible and the box's own overflow is what its
  // scrollLeft and sticky row band depend on.
  assert.equal(grid.children[0].className, 'grid-wrap');
  assert.equal(grid.children[0].children[0].tagName, 'TABLE');
  // A .scroll table needs none of that, and must not inherit the grid's rules.
  assert.equal(plain.children[0].tagName, 'TABLE');
});

test('only the pod table crossing the ceiling shows its mirror', () => {
  const app = runApp();
  const grid = app.wrappers.find((wrapper) => wrapper.id === 'wrap-grid');
  const [, first, second] = app.mirrors();

  // Reading the first pod: its header is above the ceiling, the second is still
  // far below.
  grid.tables[0].rect = { ...grid.tables[0].rect, top: 100, bottom: 900 };
  grid.tables[1].rect = { ...grid.tables[1].rect, top: 1000, bottom: 1800 };
  app.context.placeMirroredHeaders();
  assert.equal(first.hidden, false, 'the pod being read has no mirror');
  assert.equal(second.hidden, true, 'a pod below the fold is mirroring anyway');

  // Scrolled on into the second.
  grid.tables[0].rect = { ...grid.tables[0].rect, top: -800, bottom: 100 };
  grid.tables[1].rect = { ...grid.tables[1].rect, top: 120, bottom: 920 };
  app.context.placeMirroredHeaders();
  assert.equal(first.hidden, true, 'the pod scrolled past kept its mirror');
  assert.equal(second.hidden, false, 'the pod now being read has none');
});

test('the mirror copies the real column widths cell for cell', () => {
  const app = runApp();
  const [box] = app.mirrors();
  const [mirrorTable] = box.children;
  const [head] = mirrorTable.children;
  const [row] = head.children;
  const source = app.wrappers.find((w) => w.id === 'wrap-overflows').table.headRow;

  assert.equal(row.children.length, source.children.length, 'wrong number of columns');
  row.children.forEach((cell, index) => {
    const expected = `${source.children[index].getBoundingClientRect().width}px`;
    assert.equal(cell.style.props.get('width'), undefined); // set as a style property, not a custom one
    assert.equal(cell.style.width, expected, `column ${index} does not line up`);
  });
});

test('the mirror carries no ids and no tab stops of its own', () => {
  const app = runApp();
  const [box] = app.mirrors();
  const row = box.children[0].children[0].children[0];
  assert.equal(row.id, '');
  row.children.forEach((cell) => {
    assert.equal(cell.id, '', 'a cloned cell kept its id — now duplicated in the document');
    assert.equal(cell.getAttribute('tabindex'), '-1', 'the mirror adds a second set of tab stops');
  });
});

test('the mirror shows only while the real header is above the ceiling', () => {
  const app = runApp();
  const wrapper = app.wrappers.find((w) => w.id === 'wrap-overflows');
  const [box] = app.mirrors();

  // Ceiling here is the strip (300) plus the section heading (44) — but the
  // wrapper stub reports no section, so it is the strip alone.
  const ceiling = app.rootStyle().getPropertyValue('--toc-height');
  assert.equal(ceiling, '300px');

  // Table still below the ceiling: nothing to mirror yet.
  wrapper.table.rect = { ...wrapper.table.rect, top: 500, bottom: 1300 };
  app.context.placeMirroredHeaders();
  assert.equal(box.hidden, true, 'mirrored a header that is still on screen');

  // Scrolled so the header is above the ceiling but the table still spans it.
  wrapper.table.rect = { ...wrapper.table.rect, top: 100, bottom: 900 };
  app.context.placeMirroredHeaders();
  assert.equal(box.hidden, false, 'no mirror while the header is out of view');
  assert.equal(box.style.top, '300px');

  // Scrolled clear of the table entirely: a floating header would be a lie.
  wrapper.table.rect = { ...wrapper.table.rect, top: -900, bottom: 100 };
  app.context.placeMirroredHeaders();
  assert.equal(box.hidden, true, 'mirror outlived the table it belongs to');
});

test('the mirror sits over the wrapper content box, not its border box', () => {
  const app = runApp();
  const [box] = app.mirrors();
  // The wrapper reports left 40 / width 900 with a 1px .panel border, so its
  // content starts at 41 and is 898 wide. Mirroring the border box puts every
  // column a pixel left of the real one and overhangs the panel edge.
  assert.equal(box.style.left, '41px');
  assert.equal(box.style.width, '898px');
});

test('dragging the mirror scrolls the table it mirrors', () => {
  const app = runApp();
  const wrapper = app.wrappers.find((w) => w.id === 'wrap-overflows');
  const [box] = app.mirrors();
  // The wrapper's own scrollbar is at the foot of the table, so the header has
  // to be the handle. This is the listener app.js attached to the mirror.
  box.scrollLeft = 260;
  box.fire('scroll');
  assert.equal(wrapper.scrollLeft, 260, 'the mirror is a picture, not a handle');
});

test('the mirror is a copy, not a second header, for a screen reader', () => {
  const app = runApp();
  const [box] = app.mirrors();
  assert.equal(box.getAttribute('aria-hidden'), 'true');
});

test('a re-render that leaves the header alone does not rebuild the mirror', () => {
  const app = runApp();
  const [before] = app.mirrors();
  // Typing in the search box re-renders the rows but not the header row.
  app.context.refreshStickyLayout();
  assert.equal(app.mirrors()[0], before, 'the mirror was cloned again for nothing');

  // A sort moves the `sorted` class in the header, so that one has to rebuild.
  const source = app.wrappers.find((w) => w.id === 'wrap-overflows').table.headRow;
  source.innerHTML = '<th class="sorted">Player</th>';
  app.context.refreshStickyLayout();
  assert.notEqual(app.mirrors()[0], before, 'the mirror kept a stale header');
});

test('the mirror takes no height of its own', () => {
  const app = runApp();
  const [box] = app.mirrors();
  // It wraps the mirror table, which reproduces the real table's top edge —
  // including the 4px border-spacing above and below the grid's header row.
  // Pinning the box to the header row's height clipped the grid's cells against
  // that spacing and let a strip of the rows beneath show above them.
  assert.equal(box.style.height, undefined, 'the box was given a fixed height again');
});

test('the mirror hangs off the section heading, not off a sum of heights', () => {
  const app = runApp();
  const wrapper = app.wrappers.find((w) => w.id === 'wrap-overflows');
  const [section] = app.sections;
  wrapper.closest = (selector) => (selector === 'section.msec' ? section : null);
  // Where the sticky heading actually ends. Adding the strip height to the
  // heading height instead leaves two rounded numbers to disagree with it, and a
  // hairline of scrolling content shows through the join.
  section.heading.rect = { ...section.heading.rect, bottom: 344.6 };
  wrapper.table.rect = { ...wrapper.table.rect, top: 100, bottom: 900 };
  app.context.placeMirroredHeaders();
  assert.equal(app.mirrors()[0].style.top, '345px');
});

test('the mirror tracks the wrapper sideways', () => {
  const app = runApp();
  const wrapper = app.wrappers.find((w) => w.id === 'wrap-overflows');
  const [box] = app.mirrors();
  wrapper.table.rect = { ...wrapper.table.rect, top: 100, bottom: 900 };
  wrapper.scrollLeft = 420;
  app.context.placeMirroredHeaders();
  assert.equal(box.scrollLeft, 420, 'the mirror drifted out of step with the columns');
});

test('a click on the mirror sorts by the real column', () => {
  const app = runApp();
  const wrapper = app.wrappers.find((w) => w.id === 'wrap-overflows');
  const [box] = app.mirrors();
  const row = box.children[0].children[0].children[0];
  const source = wrapper.table.headRow;

  // Third column, so an off-by-one in the index lookup is visible.
  app.context.forwardMirrorClick(
    { row, sourceRow: source },
    { target: { closest: (selector) => (selector === 'th' ? row.children[2] : null) } },
  );
  assert.equal(source.children[2].clicks, 1, 'the real header cell was not clicked');
  assert.equal(source.children[0].clicks, 0, 'the wrong column was sorted');
});

test('rebuilding replaces the mirrors rather than stacking more', () => {
  const app = runApp();
  assert.equal(app.mirrors().length, 3);
  app.context.refreshStickyLayout();
  app.context.refreshStickyLayout();
  assert.equal(app.mirrors().length, 3, 'mirrors accumulated across renders');
});

test('a wrapper that stops overflowing loses its mirror', () => {
  const app = runApp();
  const wrapper = app.wrappers.find((w) => w.id === 'wrap-overflows');
  assert.equal(app.mirrors().length, 3);
  wrapper.contentWidth = 600; // e.g. a filter narrowed the widest cell
  app.context.refreshStickyLayout();
  // The grid's two survive; the table that now fits goes back to a real sticky
  // header.
  assert.equal(app.mirrors().length, 2, 'a table that now fits kept a floating header');
});

// --- Back to top -----------------------------------------------------------

test('Back to top scrolls up and clears the fragment', () => {
  const app = runApp({ hash: '#top-duos' });
  app.clickTocTop();
  // Field by field: the object comes from the vm realm, so deepEqual on it
  // fails the prototype check even when the contents match.
  const last = app.scrolled[app.scrolled.length - 1];
  assert.equal(last.top, 0);
  assert.equal(last.behavior, 'smooth');
  // Otherwise a reload, or the link the reader copies, drops straight back into
  // the section they just left.
  const lastUrl = app.replaced[app.replaced.length - 1];
  assert.ok(lastUrl && !lastUrl.includes('#'), `fragment survived Back to top: ${lastUrl}`);
});

test('the contents strip offers Top', () => {
  const app = runApp();
  assert.ok(app.el('section-toc').innerHTML.includes('class="toc-top"'));
});

// --- Query-string hygiene --------------------------------------------------

test('a team href keeps the division and can carry a match fragment', () => {
  const app = runApp({ search: '?d=abc123' });
  const href = app.context.teamHref('Bounce Philly A', 'match-w3-a-vs-b');
  assert.ok(href.includes('d=abc123'));
  assert.ok(href.includes('team=bounce-philly-a'));
  assert.ok(href.endsWith('#match-w3-a-vs-b'));
});
