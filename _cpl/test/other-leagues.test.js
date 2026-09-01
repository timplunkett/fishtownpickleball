// The "Also plays in" row on a player modal — the one place a dashboard reads
// the cross-league finder index (cpl/player-index.js) and the one place it
// links across a league's own redirect stub. Both are reached through a
// relative path hand-written in cpl/app.js, and both silently degrade to a
// missing row rather than an error when the path is wrong: loadScriptOnce's
// onerror resolves same as onload (see app.js), and renderOtherLeaguesSummary
// returns '' when the index never arrives. A dashboard moving a directory
// deeper — which is exactly what seasons did, landing pages at
// cpl/<league>/<season>/ instead of cpl/<league>/ — breaks both without
// throwing anywhere, which is how the row went missing with nothing in CI
// noticing. See helpers/compiled.js's own note on this class of bug.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const { CPL, compiledDivisions } = require('./helpers/compiled');

const APP_SOURCE = fs.readFileSync(path.join(CPL, 'app.js'), 'utf8');

// --- Static check: the hand-written relative paths actually reach something -

// Pulled out of the source rather than hard-coded here, so this test is
// checking what the app actually does, not repeating an assumption of its own.
const PLAYER_INDEX_PATH = (
  APP_SOURCE.match(/loadScriptOnce\('([^']+player-index\.js)'\)/) || []
)[1];
const ROOT_PATH = (APP_SOURCE.match(/const rootPath = '([^']+)';/) || [])[1];

test('loadPlayerIndexScript points at a real player-index.js from every compiled division', () => {
  assert.ok(PLAYER_INDEX_PATH, 'could not find the player-index.js path in app.js — did loadPlayerIndexScript change?');
  compiledDivisions().forEach((division) => {
    const divisionDir = path.dirname(division.file);
    const resolved = path.resolve(divisionDir, PLAYER_INDEX_PATH);
    assert.ok(
      fs.existsSync(resolved),
      `${division.label}: '${PLAYER_INDEX_PATH}' resolves to ${resolved}, which does not exist — ` +
        'a dashboard here would 404 loading the finder index and silently lose the "Also plays in" row',
    );
  });
});

test('renderOtherLeaguesSummary\'s rootPath reaches both leagues\' redirect stubs from every compiled division', () => {
  assert.ok(ROOT_PATH, 'could not find the rootPath constant in app.js — did renderOtherLeaguesSummary change?');
  compiledDivisions().forEach((division) => {
    const divisionDir = path.dirname(division.file);
    ['local', 'travel'].forEach((league) => {
      const resolved = path.resolve(divisionDir, ROOT_PATH, league, 'index.html');
      assert.ok(
        fs.existsSync(resolved),
        `${division.label}: a finder link into ${league} resolves to ${resolved}, which has no redirect stub`,
      );
    });
  });
});

// --- Behavioral check: a real cross-division player actually sees the row ---

// Finds a real playerId that shows up under more than one (league, slug) in the
// compiled finder index, where at least one of those divisions is one this
// checkout has compiled data for — so a modal can actually be opened on it.
// Not hard-coded: the roster changes every refetch, and a name baked into this
// file would eventually point at nobody.
function findCrossDivisionPlayer() {
  const context = { console };
  context.window = context;
  context.globalThis = context;
  vm.runInNewContext(fs.readFileSync(path.join(CPL, 'shared.js'), 'utf8'), context);
  const playerIndexFile = path.join(CPL, 'player-index.js');
  if (!fs.existsSync(playerIndexFile)) return null;
  vm.runInNewContext(fs.readFileSync(playerIndexFile, 'utf8'), context);
  const index = context.CPLShared.getPlayerIndex();

  const byKey = new Map(compiledDivisions().map((d) => [`${d.league}/${d.slug}`, d]));
  const entriesByPlayerId = new Map();
  index.forEach((entry) => {
    if (!entry.playerId) return;
    if (!entriesByPlayerId.has(entry.playerId)) entriesByPlayerId.set(entry.playerId, []);
    entriesByPlayerId.get(entry.playerId).push(entry);
  });

  for (const [playerId, entries] of entriesByPlayerId) {
    const distinctDivisions = new Set(entries.map((e) => `${e.league}/${e.slug}`));
    if (distinctDivisions.size < 2) continue;
    const home = entries.map((e) => byKey.get(`${e.league}/${e.slug}`)).find(Boolean);
    if (home) return { playerId, division: home };
  }
  return null;
}

function makeElement(id) {
  const element = {
    id,
    tagName: 'DIV',
    innerHTML: '',
    textContent: '',
    value: '',
    checked: false,
    hidden: false,
    open: false,
    dataset: {},
    classList: { toggle() {}, add() {}, remove() {}, contains: () => false },
    style: { setProperty() {}, removeProperty() {}, getPropertyValue: () => '' },
    addEventListener() {},
    setAttribute() {},
    removeAttribute() {},
    querySelectorAll: () => [],
    querySelector: () => null,
    closest: () => null,
    appendChild(child) { return child; },
    focus() {},
    getBoundingClientRect: () => ({
      width: 900, height: 300, top: 0, left: 0, right: 900, bottom: 300,
    }),
  };
  return element;
}

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

// Renders one compiled division's dashboard in a vm sandbox, resolving every
// script tag app.js appends (the detail shard, the finder index) against that
// division's real directory on disk — the same relative-URL resolution a
// browser does against the page it is loaded from. A path that would 404 in
// production 404s here too (the file just isn't found at the resolved
// location), rather than being quietly handed the right file anyway.
function runApp(division) {
  const divisionDir = path.dirname(division.file);
  const elements = new Map();
  const toggles = {
    'standings-view': makeToggle('standings-view', 'view', ['cards', 'table']),
    'grid-view': makeToggle('grid-view', 'gridview', ['weeks', 'matrix']),
  };

  const body = makeElement('body');
  body.appendChild = (node) => {
    if (node && node.tagName === 'SCRIPT' && node.src) {
      const resolved = path.resolve(divisionDir, node.src);
      if (fs.existsSync(resolved)) {
        vm.runInNewContext(fs.readFileSync(resolved, 'utf8'), context, { filename: resolved });
        if (node.onload) node.onload();
      } else if (node.onerror) {
        node.onerror();
      }
    }
    return node;
  };

  const document = {
    activeElement: null,
    getElementById(id) {
      if (toggles[id]) return toggles[id];
      if (!elements.has(id)) elements.set(id, makeElement(id));
      return elements.get(id);
    },
    querySelectorAll: () => [],
    querySelector: () => null,
    createElement: (tag) => {
      const element = makeElement(tag);
      element.tagName = tag.toUpperCase();
      return element;
    },
    addEventListener() {},
    documentElement: makeElement('html'),
    body,
  };

  const context = {
    console,
    document,
    URL,
    URLSearchParams,
    setTimeout,
    clearTimeout,
    requestAnimationFrame: (fn) => fn(),
    location: {
      search: '', hash: '', pathname: `/cpl/${division.league}/${division.season}/`,
      href: `http://x/cpl/${division.league}/${division.season}/`,
    },
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
  load(division.file);
  context.DATA = context.window.DATA;
  const meta = context.DATA.meta || {};
  context.DIVISIONS = [{
    slug: meta.divisionSlug || 'x', name: meta.divisionName || 'Division', dataFile: path.basename(division.file),
  }];
  context.window.DIVISIONS = context.DIVISIONS;
  load(path.join(CPL, 'app.js'));

  return {
    context,
    el: (id) => document.getElementById(id),
  };
}

function nextTick() {
  return new Promise((resolve) => { setTimeout(resolve, 0); });
}

test('a player who plays in more than one division sees the others in their modal', async () => {
  const found = findCrossDivisionPlayer();
  assert.ok(found, 'no player in the compiled finder index appears in more than one division to test against');
  const { playerId, division } = found;

  const app = runApp(division);
  const player = app.context.DATA.players.find((candidate) => candidate.playerId === playerId);
  assert.ok(player, `${playerId} was not found among ${division.label}'s players`);

  app.context.showPlayerModal(player);
  // loadScriptOnce resolves synchronously against the stub above, but its
  // continuations are still real promise microtasks, so give them a turn.
  await nextTick();
  await nextTick();

  const finderLoaded = Boolean(
    app.context.window.PLAYER_INDEX_TABLES
    || app.context.window.PLAYER_INDEX_PACKED
    || app.context.window.PLAYER_INDEX,
  );
  assert.ok(finderLoaded, "player-index.js never loaded — loadPlayerIndexScript's path did not resolve");

  const modalBody = app.el('mbody').innerHTML;
  assert.ok(
    modalBody.includes('Also plays in'),
    'the "Also plays in" row never reached the modal even though the finder index loaded',
  );
  assert.match(
    modalBody,
    /href="\.\.\/\.\.\/(local|travel)\/\?d=/,
    'the row rendered with no working link into the other division',
  );
});
