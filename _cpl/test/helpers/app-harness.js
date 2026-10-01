// Runs cpl/app.js against a compiled division on a DOM stub thin enough for
// node:test. Shared by the suites that check what the dashboard renders, so a
// new id app.js requires is stubbed in one place rather than in each of them.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const { CPL } = require('./compiled');

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

// `missing` lists ids getElementById should not find — the shape of a cached
// index.html from before app.js learned about them.
function loadApp(dataFile, { mutate, missing = [] } = {}) {
  const elements = new Map();
  const toggles = {
    'standings-view': makeToggle('standings-view', 'view', ['cards', 'table']),
    'grid-view': makeToggle('grid-view', 'gridview', ['weeks', 'matrix']),
  };

  const document = {
    getElementById(id) {
      if (missing.includes(id)) return null;
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

  load(path.join(CPL, 'compiled', 'shared.js'));
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

  return { context, document, toggles };
}

module.exports = { loadApp, makeElement };
