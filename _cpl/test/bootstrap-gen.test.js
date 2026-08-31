const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const {
  buildBootstrapDivisionsLiteral,
  buildBootstrapSource,
  buildBootstrapRuntimeSource,
} = require('../modules/bootstrap-gen');
const shared = require('../modules/shared');

test('division literals survive hostile characters', () => {
  const literal = buildBootstrapDivisionsLiteral([
    { slug: 'ab12cd34', clubName: `O'Brien's "Club"`, divisionName: 'Line\nBreak & Co' },
  ]);
  const parsed = vm.runInNewContext(`[${literal}]`);
  assert.equal(parsed[0].clubName, `O'Brien's "Club"`);
  assert.equal(parsed[0].divisionName, 'Line\nBreak & Co');
});

// The landing page reports freshness from the bootstrap rather than by pulling a
// data shard, so the timestamp has to survive the literal.
test('a division carries its compile timestamp, and omits it when there is none', () => {
  const parsed = vm.runInNewContext(`[${buildBootstrapDivisionsLiteral([
    { slug: 'ab12cd34', divisionName: '3.5 - 4.0', asOf: '2026-08-31T14:05:00.000Z' },
    { slug: 'ef56ab78', divisionName: '4.0 - 4.5' },
  ])}]`);
  assert.equal(parsed[0].asOf, '2026-08-31T14:05:00.000Z');
  assert.ok(!('asOf' in parsed[1]));
});

test('generated bootstrap source is valid JS and calls the runtime', () => {
  const source = buildBootstrapSource({
    divisionsLiteral: buildBootstrapDivisionsLiteral([
      { slug: 'ab12cd34', divisionName: '3.5 - 4.0' },
    ]),
    dashboardPath: '/cpl/local',
    landingSlug: 'ab12cd34',
    divisionsGlobal: 'LOCAL_DIVISIONS',
  });
  let received = null;
  const context = { window: { initCplBootstrap: (payload) => { received = payload; } } };
  vm.runInNewContext(source, context);
  assert.equal(received.config.landingSlug, 'ab12cd34');
  assert.equal(received.config.divisionsGlobal, 'LOCAL_DIVISIONS');
  assert.equal(received.divisions[0].slug, 'ab12cd34');
});

test('generated runtime source parses and exposes initCplBootstrap', () => {
  const context = {
    window: { location: { hostname: 'example.com', pathname: '/cpl/', search: '' } },
    document: {
      createElement: () => ({}),
      getElementById: () => null,
      body: { appendChild: () => {} },
    },
    URLSearchParams: globalThis.URLSearchParams,
  };
  vm.runInNewContext(buildBootstrapRuntimeSource(), context);
  assert.equal(typeof context.window.initCplBootstrap, 'function');
});

// Runs the generated runtime on a fake DOM and returns the src of every script
// it appended, so we can assert which data file it reached for. Scripts fire
// their onerror when `missing` contains their src, mimicking a 404. Loading is
// promise-chained, so the caller awaits: fake responses settle synchronously,
// but the steps that follow them are microtasks.
//
// `view` is filled in with whatever the runtime wrote into #mainview, which on
// every failing path is the only thing a reader would see.
async function runRuntime({ search, landingSlug, divisions, missing = [], view = {} }) {
  const appended = [];
  const warnings = [];
  const mainview = { innerHTML: '' };
  const context = {
    window: {
      location: { hostname: 'example.com', pathname: '/cpl/local/', search },
      console: { warn: (message) => warnings.push(message) },
      CPLShared: shared,
    },
    document: {
      createElement: () => ({}),
      getElementById: (id) => (id === 'mainview' ? mainview : null),
      body: {
        appendChild: (script) => {
          appended.push(script.src);
          if (missing.includes(script.src)) {
            if (script.onerror) script.onerror();
          } else if (script.onload) {
            script.onload();
          }
        },
      },
    },
    URLSearchParams: globalThis.URLSearchParams,
  };
  vm.runInNewContext(buildBootstrapRuntimeSource(), context);
  context.window.initCplBootstrap({
    divisions,
    config: { dashboardPath: '/cpl/local', landingSlug, divisionsGlobal: 'LOCAL_DIVISIONS' },
  });
  await new Promise((resolve) => setTimeout(resolve, 0));
  view.html = mainview.innerHTML;
  view.warnings = warnings;
  view.duprUnavailable = Boolean(context.window.CPL_DUPR_UNAVAILABLE);
  return appended;
}

// Every dashboard load pulls the division's own DUPR shard alongside its data.
const DUPR = (slug) => `dupr-${slug}.js`;

const DIVISIONS = [{ slug: 'ab12cd34', divisionName: '3.5 - 4.0' }, { slug: 'ef56ab78', divisionName: '4.0 - 4.5' }];

test('every division loads its slug-prefixed data file, landing division included', async () => {
  assert.deepEqual(
    await runRuntime({ search: '?d=ef56ab78', landingSlug: 'ab12cd34', divisions: DIVISIONS }),
    ['data-ef56ab78.js', DUPR('ef56ab78'), '../app.js'],
  );
  assert.deepEqual(
    await runRuntime({ search: '?d=ab12cd34', landingSlug: 'ab12cd34', divisions: DIVISIONS }),
    ['data-ab12cd34.js', DUPR('ab12cd34'), '../app.js'],
  );
});

test('no ?d= loads the landing division', async () => {
  assert.deepEqual(
    await runRuntime({ search: '', landingSlug: 'ef56ab78', divisions: DIVISIONS }),
    ['data-ef56ab78.js', DUPR('ef56ab78'), '../app.js'],
  );
});

test('an unknown ?d= falls straight to the landing division', async () => {
  assert.deepEqual(
    await runRuntime({ search: '?d=nope', landingSlug: 'ab12cd34', divisions: DIVISIONS }),
    ['data-ab12cd34.js', DUPR('ab12cd34'), '../app.js'],
  );
});

// The fallback this replaces served the landing division's standings under a URL
// naming a different one. Nothing on the page said so, because every label the
// dashboard draws comes out of the dataset it was handed — so the club, the
// division and the teams were all internally consistent and all wrong.
test('a known division with no compiled data file says so instead of serving another one', async () => {
  const view = {};
  assert.deepEqual(
    await runRuntime({
      search: '?d=ef56ab78',
      landingSlug: 'ab12cd34',
      divisions: DIVISIONS,
      missing: ['data-ef56ab78.js'],
      view,
    }),
    ['data-ef56ab78.js', DUPR('ef56ab78')],
  );
  assert.ok(!view.html.includes('data-ab12cd34'), 'another division was loaded');
  assert.match(view.html, /isn&#39;t available yet/);
  assert.match(view.html, /href="\.\.\/"/, 'no way back to the division list');
});

test('a missing landing data file does not retry itself, and never starts the app', async () => {
  // app.js reads DATA as it initialises, so starting it without a dataset would
  // throw partway through rendering. Saying nothing loaded is the better failure.
  const view = {};
  assert.deepEqual(
    await runRuntime({
      search: '',
      landingSlug: 'ab12cd34',
      divisions: DIVISIONS,
      missing: ['data-ab12cd34.js'],
      view,
    }),
    ['data-ab12cd34.js', DUPR('ab12cd34')],
  );
  assert.match(view.html, /load-error/);
});

// bootstrap.js and bootstrap-runtime.js are separate cached files, so a browser
// can pair a stale bootstrap.js (no landingSlug) with a fresh runtime.
test('a bootstrap with no landing slug falls through to the first division', async () => {
  assert.deepEqual(
    await runRuntime({ search: '', landingSlug: undefined, divisions: DIVISIONS }),
    ['data-ab12cd34.js', DUPR('ab12cd34'), '../app.js'],
  );
});

test('no divisions at all loads nothing rather than data-undefined.js', async () => {
  const view = {};
  assert.deepEqual(await runRuntime({ search: '', landingSlug: '', divisions: [], view }), []);
  // And says so: this used to be an early return, so the page stayed at its
  // empty scaffolding with nothing in the console either.
  assert.match(view.html, /No divisions are available yet/);
});

// A division compiled before the DUPR refresh has run has no shard of its own.
// The league-wide file covers every player, so the page is still correct.
test('a missing DUPR shard falls back to the league-wide table', async () => {
  assert.deepEqual(
    await runRuntime({
      search: '?d=ef56ab78',
      landingSlug: 'ab12cd34',
      divisions: DIVISIONS,
      missing: [DUPR('ef56ab78')],
    }),
    ['data-ef56ab78.js', DUPR('ef56ab78'), '../dupr-ratings.js', '../app.js'],
  );
});

test('no DUPR table at all still renders the dashboard, but not silently', async () => {
  // Ratings degrade to unrated; the standings and schedule do not depend on
  // them. The flag is what lets app.js say the ratings are missing rather than
  // let a whole division read as though nobody in it has a DUPR.
  const view = {};
  assert.deepEqual(
    await runRuntime({
      search: '?d=ef56ab78',
      landingSlug: 'ab12cd34',
      divisions: DIVISIONS,
      missing: [DUPR('ef56ab78'), '../dupr-ratings.js'],
      view,
    }),
    ['data-ef56ab78.js', DUPR('ef56ab78'), '../dupr-ratings.js', '../app.js'],
  );
  assert.equal(view.duprUnavailable, true);
  assert.equal(view.warnings.length, 1);
});

test('a DUPR shard that resolves through its fallback raises no flag', async () => {
  const view = {};
  await runRuntime({
    search: '?d=ef56ab78',
    landingSlug: 'ab12cd34',
    divisions: DIVISIONS,
    missing: [DUPR('ef56ab78')],
    view,
  });
  assert.equal(view.duprUnavailable, false);
  assert.deepEqual(view.warnings, []);
});
