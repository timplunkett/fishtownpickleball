const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const {
  buildBootstrapDivisionsLiteral,
  buildBootstrapSource,
  buildBootstrapRuntimeSource,
} = require('../modules/bootstrap-gen');

test('division literals survive hostile characters', () => {
  const literal = buildBootstrapDivisionsLiteral([
    { slug: 'ab12cd34', clubName: `O'Brien's "Club"`, divisionName: 'Line\nBreak & Co' },
  ]);
  const parsed = vm.runInNewContext(`[${literal}]`);
  assert.equal(parsed[0].clubName, `O'Brien's "Club"`);
  assert.equal(parsed[0].divisionName, 'Line\nBreak & Co');
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
    document: { createElement: () => ({}), body: { appendChild: () => {} } },
    URLSearchParams: globalThis.URLSearchParams,
  };
  vm.runInNewContext(buildBootstrapRuntimeSource(), context);
  assert.equal(typeof context.window.initCplBootstrap, 'function');
});

// Runs the generated runtime on a fake DOM and returns the src of every script
// it appended, so we can assert which data file it reached for. Scripts fire
// their onerror when `missing` contains their src, mimicking a 404.
function runRuntime({ search, landingSlug, divisions, missing = [] }) {
  const appended = [];
  const context = {
    window: { location: { hostname: 'example.com', pathname: '/cpl/local/', search } },
    document: {
      createElement: () => ({}),
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
  return appended;
}

const DIVISIONS = [{ slug: 'ab12cd34', divisionName: '3.5 - 4.0' }, { slug: 'ef56ab78', divisionName: '4.0 - 4.5' }];

test('every division loads its slug-prefixed data file, landing division included', () => {
  assert.deepEqual(
    runRuntime({ search: '?d=ef56ab78', landingSlug: 'ab12cd34', divisions: DIVISIONS }),
    ['data-ef56ab78.js', '../app.js'],
  );
  assert.deepEqual(
    runRuntime({ search: '?d=ab12cd34', landingSlug: 'ab12cd34', divisions: DIVISIONS }),
    ['data-ab12cd34.js', '../app.js'],
  );
});

test('no ?d= loads the landing division', () => {
  assert.deepEqual(
    runRuntime({ search: '', landingSlug: 'ef56ab78', divisions: DIVISIONS }),
    ['data-ef56ab78.js', '../app.js'],
  );
});

test('an unknown ?d= falls straight to the landing division', () => {
  assert.deepEqual(
    runRuntime({ search: '?d=nope', landingSlug: 'ab12cd34', divisions: DIVISIONS }),
    ['data-ab12cd34.js', '../app.js'],
  );
});

test('a known division with no compiled data file falls back to the landing division', () => {
  assert.deepEqual(
    runRuntime({
      search: '?d=ef56ab78',
      landingSlug: 'ab12cd34',
      divisions: DIVISIONS,
      missing: ['data-ef56ab78.js'],
    }),
    ['data-ef56ab78.js', 'data-ab12cd34.js', '../app.js'],
  );
});

test('a missing landing data file does not retry itself', () => {
  assert.deepEqual(
    runRuntime({
      search: '',
      landingSlug: 'ab12cd34',
      divisions: DIVISIONS,
      missing: ['data-ab12cd34.js'],
    }),
    ['data-ab12cd34.js'],
  );
});

// bootstrap.js and bootstrap-runtime.js are separate cached files, so a browser
// can pair a stale bootstrap.js (no landingSlug) with a fresh runtime.
test('a bootstrap with no landing slug falls through to the first division', () => {
  assert.deepEqual(
    runRuntime({ search: '', landingSlug: undefined, divisions: DIVISIONS }),
    ['data-ab12cd34.js', '../app.js'],
  );
});

test('no divisions at all loads nothing rather than data-undefined.js', () => {
  assert.deepEqual(runRuntime({ search: '', landingSlug: '', divisions: [] }), []);
});
