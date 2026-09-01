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
const { compiledDivisions } = require('./helpers/compiled');

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
  // Where the section sits in the viewport; a test moves it to scroll the page.
  section.rect = { width: 900, height: 600, top: 1000, left: 0, right: 900, bottom: 1600 };
  section.getBoundingClientRect = () => section.rect;
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
  const division = compiledDivisions()[0];
  return division ? { leg: division.league, season: division.season, file: division.file } : null;
})();

function runApp({
  prefs = null,
  catalog = null,
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

  // The Season selector and the wrapper renderSeasonSelector shows or hides.
  const seasonSelect = makeElement('season-select', 'SELECT');
  const seasonListeners = [];
  seasonSelect.addEventListener = (type, fn) => {
    if (type === 'change') seasonListeners.push(fn);
  };
  elements.set('season-select', seasonSelect);
  const seasonWrap = makeElement('season-selector-wrap', 'SPAN');
  elements.set('season-selector-wrap', seasonWrap);

  const sectionToc = makeElement('section-toc', 'NAV');
  // The chips app.js writes into the strip. Rebuilt from its innerHTML, because
  // that is what renderSectionToc actually produces.
  sectionToc.querySelectorAll = (selector) => {
    if (selector !== 'a[href^="#"]') return [];
    return [...sectionToc.innerHTML.matchAll(/href="#([^"]+)"/g)].map(([, id]) => {
      if (!sectionToc.chips) sectionToc.chips = new Map();
      if (!sectionToc.chips.has(id)) {
        const chip = makeElement(`chip-${id}`, 'A');
        // setAttribute so the default getAttribute answers for href and for
        // anything else app.js sets on it, such as aria-current.
        chip.setAttribute('href', `#${id}`);
        sectionToc.chips.set(id, chip);
      }
      return sectionToc.chips.get(id);
    });
  };
  elements.set('section-toc', sectionToc);

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
  const locationPath = pathname || `/cpl/${DATA_FILE.leg}/${DATA_FILE.season}/`;
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
  if (catalog) context.CPL_CATALOG = catalog;
  context.CPL_PAGE = { league: DATA_FILE.leg, season: DATA_FILE.season, landingSlug: '' };
  context.window.CPL_PAGE = context.CPL_PAGE;

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
    chip: (id) => (sectionToc.chips ? sectionToc.chips.get(id) : undefined),
    // The mirrored headers app.js has appended to its host, in document order.
    mirrors: () => {
      const host = document.body.children.find((child) => child.className === 'float-heads');
      return host ? host.children : [];
    },
    wrappers,
    rootStyle: () => document.documentElement.style,
    changeDivision: () => divisionListeners.forEach((fn) => fn()),
    changeSeason: () => seasonListeners.forEach((fn) => fn()),
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

test('with no stored preference the page opens on the table and the by-week grid', () => {
  const app = runApp();
  assert.ok(app.el('teams').innerHTML.includes('class="trow"'), 'not the table view');
  assert.ok(app.el('grid-host').innerHTML.includes('class="gweeks"'), 'not the by-week grid');
});

test('a stored view preference is applied on load', () => {
  const app = runApp({ prefs: { standingsView: 'cards', gridView: 'matrix' } });
  assert.ok(app.el('teams').innerHTML.includes('class="tcard"'), 'standings cards not restored');
  assert.ok(app.el('grid-host').innerHTML.includes('class="gmatrix"'), 'matrix not restored');
});

test('choosing a view stores it', () => {
  const app = runApp();
  app.setStandingsView('cards');
  app.setGridView('matrix');
  assert.deepEqual(app.storedPrefs(), { standingsView: 'cards', gridView: 'matrix' });
});

test('a junk stored value falls back to the defaults rather than throwing', () => {
  const app = runApp({ prefs: { standingsView: 'sideways', gridView: 42, collapsed: 'nope' } });
  assert.ok(app.el('teams').innerHTML.includes('class="trow"'));
  assert.ok(app.el('grid-host').innerHTML.includes('class="gweeks"'));
  assert.equal(app.sections.every((section) => section.body.hidden === false), true);
});

test('a page with no usable localStorage still renders', () => {
  const app = runApp({ storage: false });
  // Object.keys rather than deepEqual: the object comes from the vm realm, so it
  // is structurally empty but not the same {} this file would build.
  assert.equal(Object.keys(app.context.readPrefs()).length, 0);
  app.context.writePrefs({ standingsView: 'cards' }); // must not throw
  // And the page itself came up on the defaults rather than blank.
  assert.ok(app.el('teams').innerHTML.includes('class="trow"'));
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

// --- The team page's own sections and strip --------------------------------
//
// A team page is six panels stacked down one column, with Match history in the
// middle of it running to a block per week — so Pending matchups and Playoffs
// sat below a screen or two of scrolling with nothing to say they were there.
// The dashboard's answer applies unchanged: sections that collapse, and a strip
// that lists them.

const TEAM_SECTIONS = [
  ['team-splits', 'Game-type splits'],
  ['team-roster', 'Roster'],
  ['team-duos', 'Best duos'],
  ['team-history', 'Match history'],
  ['team-pending', 'Pending matchups'],
];

function renderFirstTeam(app) {
  app.context.renderTeamPage(app.context.DATA.teams[0], { scroll: false });
  return app.el('teamview').innerHTML;
}

test('a team page builds its panels as sections the strip can read', () => {
  const page = renderFirstTeam(runApp());
  TEAM_SECTIONS.forEach(([id, name]) => {
    assert.ok(
      page.includes(`<section class="msec team-section" id="${id}">`),
      `${id} is not a section the contents strip would find`,
    );
    // What renderSectionToc reads for the chip's label, and what
    // applySectionState hides when the section is collapsed.
    assert.ok(page.includes(`<span class="sec-name">${name}</span>`), `${id} has no name to list`);
    assert.ok(page.includes(`class="msec-body" id="${id}-body"`), `${id} has no collapsible body`);
    assert.ok(
      page.includes(`class="sec-toggle" aria-expanded="true" aria-controls="${id}-body"`),
      `${id}'s heading does not collapse it`,
    );
  });
});

test('the strip sits under the team name and above the first section', () => {
  const page = renderFirstTeam(runApp());
  const strip = page.indexOf('<nav class="section-toc" id="team-section-toc"');
  assert.ok(strip > -1, 'a team page has no contents strip');
  // Below the hero, which is the page's own header and has no entry of its own —
  // the same shape as the dashboard, where the strip follows the <header>.
  assert.ok(page.indexOf('class="team-hero"') < strip, 'the strip is above the team name');
  assert.ok(strip < page.indexOf('id="team-splits"'), 'the strip is below the first section');
});

// A section id that named the team would give every team page its own set, and
// the collapse state is stored by id — so putting Match history away would last
// exactly as long as the reader stayed on one team.
test('the section ids name the kind of panel, not the team', () => {
  const app = runApp();
  const { DATA, renderTeamPage } = app.context;
  if (DATA.teams.length < 2) return;

  const pages = DATA.teams.slice(0, 2).map((team) => {
    renderTeamPage(team, { scroll: false });
    return app.el('teamview').innerHTML;
  });
  TEAM_SECTIONS.forEach(([id]) => {
    pages.forEach((page) => assert.ok(page.includes(`id="${id}"`), `${id} is not on every team page`));
  });
});

// #playoffs is the division's bracket, on the dashboard. Two sections sharing an
// id would have a chip on one page opening a section on the other.
test('no team-page section id collides with a dashboard one', () => {
  const app = runApp();
  const page = renderFirstTeam(app);
  const onTeamPage = [...page.matchAll(/<section class="msec[^"]*" id="([^"]+)"/g)].map(([, id]) => id);
  assert.ok(onTeamPage.length >= TEAM_SECTIONS.length);
  onTeamPage.forEach((id) => {
    assert.ok(id.startsWith('team-'), `${id} does not say which view it belongs to`);
    assert.ok(
      !app.sections.some((section) => section.id === id),
      `${id} is also a section on the dashboard`,
    );
  });
});

// The stored list of collapsed sections spans both views, and "Collapse all"
// used to replace it wholesale — so collapsing everything on a team page would
// have thrown away the reader's choices on the dashboard, and vice versa.
test('collapse all acts on the view it was clicked in and no further', () => {
  const app = runApp({ prefs: { collapsed: ['team-roster', 'team-history'] } });
  const bulk = (action) => app.context.handleTocClick({
    target: {
      closest: (selector) => (selector === '.toc-bulk' ? { dataset: { bulk: action } } : null),
    },
  });

  bulk('collapse');
  const collapsed = app.storedPrefs().collapsed;
  app.sections.forEach((section) => assert.ok(collapsed.includes(section.id)));
  assert.ok(collapsed.includes('team-roster'), 'a team page\'s choice was discarded');
  assert.ok(collapsed.includes('team-history'), 'a team page\'s choice was discarded');

  bulk('expand');
  assert.deepEqual(app.storedPrefs().collapsed.sort(), ['team-history', 'team-roster']);
});

// --- The standings table's Pod column --------------------------------------

test('the standings table names the league\'s own pod, not the scheduling section', () => {
  const app = runApp();
  const { DATA, teamPodCell } = app.context;
  const podCount = DATA.meta && DATA.meta.podCount > 1 ? DATA.meta.podCount : 1;

  const reported = DATA.teams.filter((team) => team.reportedPod);
  if (!reported.length) return; // this division publishes no pods

  reported.forEach((team) => {
    assert.equal(teamPodCell(team, podCount), team.reportedPod);
  });

  // Specifically not the section label, which can be a combination of several
  // pods — "Northeast / Southeast / Southwest" — and describes nothing in a flat
  // ranking with no sections in it.
  const combined = reported.find((team) => app.context.podLabel(team.pod).includes(' / '));
  if (combined) {
    assert.notEqual(teamPodCell(combined, podCount), app.context.podLabel(combined.pod));
  }
});

test('a team with no published pod falls back to the section label', () => {
  const { teamPodCell, podLabel } = runApp().context;
  const team = { pod: 1, reportedPod: null };
  assert.equal(teamPodCell(team, 3), podLabel(1));
  // One section means there is nothing to say.
  assert.equal(teamPodCell(team, 1), '');
});

// --- Cards group by the league's pods, grids by the schedule ---------------

// A division where cross-pod play fuses three of the four pods into one schedule
// section. The section is the right unit for the matrix — it has to hold every
// matchup it shows — but a heading reading "Northeast / Southeast / Southwest"
// over eighteen cards groups by nothing, so the cards go by the league's pods.
// displayPodGroups itself is unit-tested in shared.test.js; these are about what
// the page does with it.
function podFixture() {
  const app = runApp();
  const team = (name, pod, reportedPod) => ({
    name, pod, reportedPod, w: 1, l: 0, gw: 3, gl: 2, pf: 44, pa: 40, diff: 4, power: 1,
  });
  app.context.DATA = {
    teams: [
      team('NW One', 1, 'Northwest'),
      team('NE One', 2, 'Northeast'),
      team('SE One', 2, 'Southeast'),
      team('SW One', 2, 'Southwest'),
      team('NE Two', 2, 'Northeast'),
    ],
    meta: {
      podCount: 2,
      podNames: ['Northwest', 'Northeast / Southeast / Southwest'],
      reportedPods: ['Northeast', 'Northwest', 'Southeast', 'Southwest'],
    },
  };
  return app;
}

const headingsOf = (html) => [...html.matchAll(/<h3 class="pod-heading">([^<]*)<\/h3>/g)].map((m) => m[1]);

test('the cards are headed by the league\'s pods, not the fused section', () => {
  const app = podFixture();
  app.context.renderTeamCards();
  const html = app.el('teams').innerHTML;

  assert.deepEqual(headingsOf(html), ['Northeast', 'Northwest', 'Southeast', 'Southwest']);
  // Seeded within the pod, not across the fused section.
  assert.equal((html.match(/<div class="seed">#1<\/div>/g) || []).length, 4);
  // And the pod is not repeated as a tag on a card already under its heading.
  assert.ok(!html.includes('class="tag pod-tag"'));
});

test('the head-to-head grids keep the joint section, cross-pod matchups and all', () => {
  const { gridSections } = podFixture().context;
  assert.deepEqual([...gridSections().map((section) => section.heading)], [
    'Northwest',
    'Northeast / Southeast / Southwest',
  ]);
});

// What the team page ranks within, so the number on the card and the number on
// the page it links to are the same number.
test('a team is ranked within the pod group its card sits in', () => {
  const { podGroupOf, DATA } = podFixture().context;
  const group = podGroupOf(DATA.teams.find((team) => team.name === 'NE Two'));
  assert.equal(group.label, 'Northeast');
  assert.deepEqual([...group.teams.map((team) => team.name)], ['NE One', 'NE Two']);
});

test('a team outside any pod group still ranks against the division', () => {
  const app = podFixture();
  const group = app.context.podGroupOf({ name: 'Nobody', pod: 9, reportedPod: 'Nowhere' });
  assert.equal(group.label, null);
  assert.equal(group.teams.length, app.context.DATA.teams.length);
});

test('a card that is not under its own pod heading still shows the pod as a tag', () => {
  const { reportedPodTag } = runApp().context;
  const team = { pod: 2, reportedPod: 'Southeast' };
  assert.equal(reportedPodTag(team, 'Southeast'), '');
  assert.ok(reportedPodTag(team, null).includes('Southeast'));
});

// A pod rank alone leaves the division leader unstated — three teams are all
// "#1 in <pod>" — so the hero states both, division-wide first.
test('a team page in a division with pods states the overall rank too', () => {
  const app = runApp();
  const { DATA, renderTeamPage, podGroupOf } = app.context;
  const groups = app.context.cardPodGroups();
  if (groups.length <= 1) return; // undivided: the one rank is already overall

  DATA.teams.forEach((team, index) => {
    renderTeamPage(team, { scroll: false });
    const page = app.el('teamview').innerHTML;
    const group = podGroupOf(team);
    const inGroup = group.teams.findIndex((candidate) => candidate.name === team.name) + 1;

    // The overall rank is the team's place in the division-wide ranking, which is
    // the order DATA.teams already arrives in — the same order the table renders.
    assert.ok(page.includes(`<b>#${index + 1} overall</b>`), `${team.name}: no overall rank`);
    assert.ok(page.includes(`<b>#${inGroup} in ${group.label}</b>`), `${team.name}: no pod rank`);
    assert.ok(
      page.indexOf(' overall</b>') < page.indexOf(`#${inGroup} in ${group.label}`),
      `${team.name}: the pod rank comes before the overall one`,
    );
  });

  // A pod winner mid-table overall is the case that makes both worth stating.
  const podWinners = groups.map((group) => group.teams[0].name);
  assert.ok(podWinners.length > 1, 'expected a pod winner per pod');
});

test('an undivided division states one rank, not the same rank twice', () => {
  const app = runApp();
  const { DATA, renderTeamPage } = app.context;
  DATA.meta.reportedPods = null;
  DATA.meta.podCount = 1;
  renderTeamPage(DATA.teams[0], { scroll: false });
  const page = app.el('teamview').innerHTML;

  assert.ok(page.includes('<b>#1 in standings</b>'));
  assert.ok(!page.includes('overall</b>'), 'the overall rank is what "in standings" already says');
});

// The hero used to carry the pod twice — "#2 in Southwest" and then a separate
// "Pod Southwest" — once the rank started naming the league's pod.
test('a team page names its pod exactly once', () => {
  const app = runApp();
  const { DATA, renderTeamPage } = app.context;

  DATA.teams.forEach((team) => {
    if (!team.reportedPod) return;
    renderTeamPage(team, { scroll: false });
    const page = app.el('teamview').innerHTML;
    const asRank = page.includes(`in ${team.reportedPod}</b>`);
    const asTag = page.includes(`Pod <b>${team.reportedPod}</b>`);
    assert.ok(!(asRank && asTag), `${team.name}: "${team.reportedPod}" is both the rank and a tag`);
    assert.ok(asRank || asTag, `${team.name}: pod "${team.reportedPod}" appears nowhere`);
  });
});

// Where the rank names something other than the pod, the pod is still a fact the
// hero has to state — so the tag is suppressed by redundancy, not deleted.
test('a team page keeps the pod tag where the rank names no pod', () => {
  const app = runApp();
  const { DATA, renderTeamPage } = app.context;
  const team = DATA.teams.find((candidate) => candidate.reportedPod);
  assert.ok(team, 'this division publishes no pods, so there is nothing to state twice');

  // One unlabelled group, so the rank reads "#4 in standings" and names no pod.
  DATA.meta.reportedPods = null;
  DATA.meta.podCount = 1;
  renderTeamPage(team, { scroll: false });
  const page = app.el('teamview').innerHTML;

  assert.ok(page.includes('in standings</b>'), 'rank should name no group at all');
  assert.ok(page.includes(`Pod <b>${team.reportedPod}</b>`), 'the pod itself went unstated');
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

test('the strip publishes its height, and it is the whole sticky layer', () => {
  const app = runApp();
  assert.equal(app.rootStyle().getPropertyValue('--toc-height'), '300px');
  // Section headings do not stick any more, so nothing measures them: on a phone
  // a wrapped heading cost four lines to say what one highlighted chip says.
  app.sections.forEach((section) => {
    assert.equal(section.style.getPropertyValue('--section-head-height'), '');
  });
  assert.equal(app.context.stickyCeiling(), 300);
});

// Both views have a strip now, and they are not the same height: a team page's
// has five entries where the dashboard's has six or seven, so it rewraps at a
// different width. Whichever is on screen is the one every scroll-margin and
// sticky offset on the page is measured from.
test('the height published is the strip belonging to the view on screen', () => {
  const app = runApp();
  assert.equal(app.rootStyle().getPropertyValue('--toc-height'), '300px');

  const teamToc = makeElement('team-section-toc', 'NAV');
  teamToc.getBoundingClientRect = () => ({
    width: 900, height: 44, top: 0, left: 0, right: 900, bottom: 44,
  });
  const teamView = app.el('teamview');
  teamView.querySelector = (selector) => (selector === '.section-toc' ? teamToc : null);
  app.el('mainview').hidden = true;
  app.context.refreshStickyLayout();

  assert.equal(app.rootStyle().getPropertyValue('--toc-height'), '44px');
  assert.equal(app.context.stickyCeiling(), 44);
});

test('a view with no strip on it publishes no height', () => {
  const app = runApp();
  // A team page between renders, and the moment before the first one.
  app.el('mainview').hidden = true;
  app.context.refreshStickyLayout();
  assert.equal(app.rootStyle().getPropertyValue('--toc-height'), '0px');

  // And a strip that is on the page but hidden, which is what a view with no
  // sections in it leaves behind.
  app.el('mainview').hidden = false;
  app.el('section-toc').hidden = true;
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

test('the mirror hangs off the strip, which is the only bar above it', () => {
  const app = runApp();
  const wrapper = app.wrappers.find((w) => w.id === 'wrap-overflows');
  wrapper.table.rect = { ...wrapper.table.rect, top: 100, bottom: 900 };
  app.context.placeMirroredHeaders();
  assert.equal(app.mirrors()[0].style.top, '300px');
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

// --- Which section you are in ----------------------------------------------
//
// The strip says it now, because the section headings no longer stick. On a
// phone a wrapped heading cost four lines to say what one marked chip says.

test('the strip marks the section whose top has passed under it', () => {
  const app = runApp();
  const [standings, h2h, duos] = app.sections;
  const marked = () => app.sections
    .map((section) => section.id)
    .filter((id) => app.chip(id) && app.chip(id).classList.contains('toc-current'));

  // At the top of the page: everything below the strip, so the first section.
  standings.rect = { ...standings.rect, top: 400, bottom: 1000 };
  h2h.rect = { ...h2h.rect, top: 1000, bottom: 1600 };
  duos.rect = { ...duos.rect, top: 1600, bottom: 2200 };
  app.context.updateCurrentSection();
  assert.deepEqual(marked(), ['team-standings']);

  // Scrolled until Head-to-Head is under the strip but Top Duos is not.
  standings.rect = { ...standings.rect, top: -600, bottom: 0 };
  h2h.rect = { ...h2h.rect, top: 100, bottom: 700 };
  duos.rect = { ...duos.rect, top: 700, bottom: 1300 };
  app.context.updateCurrentSection();
  assert.deepEqual(marked(), ['head-to-head'], 'exactly one section is current');
});

// Clicking a chip parks its section at scroll-margin-top below the strip, i.e.
// --toc-height + --section-scroll-gap. If the spy's ceiling stops at the strip,
// the section you just jumped to is a few pixels short of "reached" and the chip
// you clicked stays unmarked until you nudge the page down.
test('a section parked where its chip put it is the one you are in', () => {
  const app = runApp();
  const [standings, h2h, duos] = app.sections;
  const toc = Number(app.rootStyle().getPropertyValue('--toc-height').replace('px', ''));
  const gap = Number(app.rootStyle().getPropertyValue('--section-scroll-gap').replace('px', ''));
  assert.ok(gap > 0, 'the scroll gap was never published to the stylesheet');

  standings.rect = { ...standings.rect, top: -600, bottom: toc + gap };
  h2h.rect = { ...h2h.rect, top: toc + gap, bottom: toc + gap + 600 };
  duos.rect = { ...duos.rect, top: toc + gap + 600, bottom: toc + gap + 1200 };
  app.context.updateCurrentSection();
  assert.equal(app.chip('head-to-head').classList.contains('toc-current'), true);
  assert.equal(app.chip('team-standings').classList.contains('toc-current'), false);
});

test('the current chip is flagged for assistive tech too', () => {
  const app = runApp();
  app.sections[0].rect = { ...app.sections[0].rect, top: 100, bottom: 700 };
  app.context.updateCurrentSection();
  assert.equal(app.chip('team-standings').getAttribute('aria-current'), 'true');
  assert.equal(app.chip('top-duos').getAttribute('aria-current'), null);
});

test('a hidden section is never the one you are in', () => {
  const app = runApp();
  const [standings, h2h] = app.sections;
  h2h.hidden = true; // as renderPlayoffs leaves a division with no bracket
  standings.rect = { ...standings.rect, top: -600, bottom: 0 };
  h2h.rect = { ...h2h.rect, top: 100, bottom: 700 };
  app.context.updateCurrentSection();
  assert.equal(app.chip('head-to-head').classList.contains('toc-current'), false);
});

test('a chip off the end of a scrolling strip is brought into view', () => {
  const app = runApp();
  const strip = app.el('section-toc');
  // A phone's strip: one row, wider than the screen.
  Object.defineProperty(strip, 'clientWidth', { get: () => 360, configurable: true });
  Object.defineProperty(strip, 'scrollWidth', { get: () => 900, configurable: true });
  strip.getBoundingClientRect = () => ({ left: 0, right: 360, top: 0, bottom: 40, width: 360, height: 40 });

  const chip = app.chip('top-duos') || (app.context.updateCurrentSection(), app.chip('top-duos'));
  chip.getBoundingClientRect = () => ({ left: 500, right: 620, top: 0, bottom: 30, width: 120, height: 30 });
  app.sections[2].rect = { ...app.sections[2].rect, top: 100, bottom: 700 };
  app.sections[0].rect = { ...app.sections[0].rect, top: -900, bottom: -600 };
  app.sections[1].rect = { ...app.sections[1].rect, top: -600, bottom: 0 };

  strip.scrollLeft = 0;
  // initialize() already scrolled the page once, so count from here.
  const pageScrolls = app.scrolled.length;
  app.context.updateCurrentSection();
  // Scrolled far enough to bring its right edge inside, and no further — never
  // scrollIntoView, which would drag the page with it.
  assert.equal(strip.scrollLeft, 620 - (360 - 8));
  assert.equal(app.scrolled.length, pageScrolls, 'the page itself must not move');
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

test('the all-standings href drops the team and player it is leaving', () => {
  const app = runApp({ search: '?d=abc123&team=some-team&player=42' });
  const href = app.context.standingsHref();
  assert.ok(href.includes('d=abc123'), 'lost the division');
  assert.ok(!href.includes('team='), 'carried ?team= into the standings link');
  assert.ok(!href.includes('player='), 'carried ?player= into the standings link');
});

test('a team href keeps the division and can carry a match fragment', () => {
  const app = runApp({ search: '?d=abc123' });
  const href = app.context.teamHref('Bounce Philly A', 'match-w3-a-vs-b');
  assert.ok(href.includes('d=abc123'));
  assert.ok(href.includes('team=bounce-philly-a'));
  assert.ok(href.endsWith('#match-w3-a-vs-b'));
});

// --- The season and division selectors ------------------------------------

// A catalog holding both leagues, each with the season this test's dataset came
// from plus an archived one. `season` is DATA_FILE.season so the page under test
// is inside it.
function twoLeagueCatalog(season, archived = '2000-spring') {
  const seasonOf = (slug, status, divisions) => ({
    slug, label: slug, status, landingSlug: divisions[0].slug, divisions,
  });
  return {
    leagues: [
      {
        key: 'travel',
        label: 'Cross Club League',
        current: season,
        seasons: [
          seasonOf(season, 'current', [{ slug: 't1', divisionName: '3.5' }]),
          seasonOf(archived, 'archived', [{ slug: 't0', divisionName: '3.5' }]),
        ],
      },
      {
        key: 'local',
        label: 'Local Leagues',
        current: season,
        seasons: [
          seasonOf(season, 'current', [{ slug: 'l1', clubName: 'Bounce - Philly', divisionName: '3.5 - 4.0' }]),
          seasonOf(archived, 'archived', [{ slug: 'l0', clubName: 'Bounce - Philly', divisionName: '3.5 - 4.0' }]),
        ],
      },
    ],
  };
}

test('both leagues appear as groups when the catalog holds both', () => {
  const app = runApp({ catalog: twoLeagueCatalog(DATA_FILE.season) });
  const html = app.el('division-select').innerHTML;
  assert.equal((html.match(/<optgroup/g) || []).length, 2);
  assert.ok(html.includes('label="Cross Club League"'));
  assert.ok(html.includes('label="Local Leagues"'));
  // Travel heads the menu, matching the order of the panels on /cpl/.
  assert.ok(html.indexOf('Cross Club League') < html.indexOf('Local Leagues'));
  // The value carries the league and the season, so the handler knows which two
  // path segments to rewrite.
  assert.ok(html.includes(`value="travel:${DATA_FILE.season}:t1"`));
  assert.ok(html.includes(`value="local:${DATA_FILE.season}:l1"`));
  // A local option still names its club.
  assert.ok(html.includes('Bounce - Philly — 3.5 - 4.0'));
});

// The Division selector stays inside one season. Crossing seasons is the Season
// selector's job, and listing every division of every season in one menu is what
// this split exists to avoid.
test('the division selector offers only this season', () => {
  const app = runApp({ catalog: twoLeagueCatalog(DATA_FILE.season) });
  const html = app.el('division-select').innerHTML;
  assert.ok(!html.includes(':t0"'), 'an archived season\'s division leaked into the division menu');
  assert.ok(!html.includes(':l0"'), 'an archived season\'s division leaked into the division menu');
});

// Leagues run on their own calendars — travel plays spring and fall, the local
// league ran a summer season — so the other league very often has no season by
// this name. Offering its current season instead, labelled, beats offering
// nothing.
test('a league with no season by this name contributes its current one, named', () => {
  const catalog = twoLeagueCatalog(DATA_FILE.season);
  const other = catalog.leagues.find((league) => league.key !== DATA_FILE.leg);
  other.seasons = other.seasons.filter((season) => season.slug !== DATA_FILE.season);
  other.current = '2000-spring';
  other.seasons[0].status = 'current';
  const app = runApp({ catalog });
  const html = app.el('division-select').innerHTML;
  assert.ok(html.includes(`${other.label} · 2000-spring`), `the borrowed season is unlabelled: ${html}`);
});

function switchDivision(app, value) {
  app.el('division-select').value = value;
  app.changeDivision();
  return app.navigated[app.navigated.length - 1];
}

test('switching division within the league and season keeps the path and drops the team', () => {
  const app = runApp({
    search: '?d=old&team=some-team&player=42',
    catalog: twoLeagueCatalog(DATA_FILE.season),
  });
  const url = switchDivision(app, `${DATA_FILE.leg}:${DATA_FILE.season}:same-league-slug`);
  assert.ok(url.includes(`/cpl/${DATA_FILE.leg}/${DATA_FILE.season}/`), `stayed off its own path: ${url}`);
  assert.ok(url.includes('d=same-league-slug'));
  assert.ok(!url.includes('team='), 'carried ?team= into the new division');
  assert.ok(!url.includes('player='), 'carried ?player= into the new division');
});

test('switching to the other league swaps the league segment and keeps the season', () => {
  const other = DATA_FILE.leg === 'travel' ? 'local' : 'travel';
  const app = runApp({ search: '?d=old&team=some-team', catalog: twoLeagueCatalog(DATA_FILE.season) });
  const url = switchDivision(app, `${other}:${DATA_FILE.season}:x9`);
  assert.ok(url.includes(`/cpl/${other}/${DATA_FILE.season}/`), `did not reach the other league: ${url}`);
  assert.ok(!url.includes(`/cpl/${DATA_FILE.leg}/`), `left the old league in the path: ${url}`);
  assert.ok(url.includes('d=x9'));
  assert.ok(!url.includes('team='));
});

// Both segments move at once, so a league switch cannot land on a season the
// other league does not have — the option's value has already resolved which
// season it is going to.
test('switching to a league on a different season swaps both segments', () => {
  const other = DATA_FILE.leg === 'travel' ? 'local' : 'travel';
  const app = runApp({ catalog: twoLeagueCatalog(DATA_FILE.season) });
  const url = switchDivision(app, `${other}:2000-spring:x9`);
  assert.ok(url.includes(`/cpl/${other}/2000-spring/`), url);
});

// A file:// preview has no directory index, so the file name has to survive both
// the same-league and the cross-league case.
test('a file:// preview keeps index.html when switching', () => {
  const other = DATA_FILE.leg === 'travel' ? 'local' : 'travel';
  const app = runApp({
    pathname: `/Users/t/www/fishtownpickleball/cpl/${DATA_FILE.leg}/${DATA_FILE.season}/index.html`,
    origin: 'file://',
    catalog: twoLeagueCatalog(DATA_FILE.season),
  });
  const same = switchDivision(app, `${DATA_FILE.leg}:${DATA_FILE.season}:s1`);
  assert.ok(same.endsWith(`cpl/${DATA_FILE.leg}/${DATA_FILE.season}/index.html?d=s1`), same);
  const across = switchDivision(app, `${other}:${DATA_FILE.season}:s2`);
  assert.ok(across.endsWith(`cpl/${other}/${DATA_FILE.season}/index.html?d=s2`), across);
});

// --- The season selector ---------------------------------------------------

function switchSeason(app, value) {
  app.el('season-select').value = value;
  app.changeSeason();
  return app.navigated[app.navigated.length - 1];
}

test('a league with one season hides the season selector entirely', () => {
  // A select with a single option is a control that does nothing, and every
  // league starts there.
  const catalog = twoLeagueCatalog(DATA_FILE.season);
  const mine = catalog.leagues.find((league) => league.key === DATA_FILE.leg);
  mine.seasons = mine.seasons.filter((season) => season.slug === DATA_FILE.season);
  const app = runApp({ catalog });
  assert.equal(app.el('season-selector-wrap').hidden, true);
});

test('a league with two seasons shows them, marking the archived one', () => {
  const app = runApp({ catalog: twoLeagueCatalog(DATA_FILE.season) });
  assert.equal(app.el('season-selector-wrap').hidden, false);
  const html = app.el('season-select').innerHTML;
  assert.ok(html.includes('2000-spring (archived)'), `the archived season is unmarked: ${html}`);
  assert.ok(!html.includes(`${DATA_FILE.season} (archived)`), 'the current season was marked archived');
});

test('switching season keeps the division when the target season has it', () => {
  // getCurrentDivision() reads DIVISIONS, which runApp seeds from the compiled
  // dataset rather than from the catalog — so the name to match on is the real
  // division's, read off a throwaway run.
  const currentName = runApp().context.DATA.meta.divisionName;

  const catalog = twoLeagueCatalog(DATA_FILE.season);
  const mine = catalog.leagues.find((league) => league.key === DATA_FILE.leg);
  // The archived season carries a division of the same name under a new slug,
  // which is what a bracket that ran in both seasons looks like.
  mine.seasons[1].divisions = [
    { slug: 'other-bracket', divisionName: 'nothing like it' },
    { slug: 'same-bracket', divisionName: currentName },
  ];
  const app = runApp({ catalog });
  const url = switchSeason(app, '2000-spring');
  assert.ok(url.includes(`/cpl/${DATA_FILE.leg}/2000-spring/`), url);
  assert.ok(url.includes('d=same-bracket'), `did not carry the division across: ${url}`);
});

test('switching to a season without this division lands on that season\'s first', () => {
  // A bracket can be added or dropped between seasons, so there is not always
  // an equivalent to land on.
  const catalog = twoLeagueCatalog(DATA_FILE.season);
  const mine = catalog.leagues.find((league) => league.key === DATA_FILE.leg);
  mine.seasons[1].divisions = [{ slug: 'only-one', divisionName: 'nothing like it' }];
  const app = runApp({ catalog });
  const url = switchSeason(app, '2000-spring');
  assert.ok(url.includes('d=only-one'), url);
});

test('with no catalog the selector falls back to this league alone', () => {
  const app = runApp();
  const html = app.el('division-select').innerHTML;
  assert.ok(!html.includes('<optgroup'), 'grouped a single league under one heading');
  assert.ok(html.includes('<option'));
});
