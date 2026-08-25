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
    defaultSlug: 'ab12cd34',
    divisionsGlobal: 'LOCAL_DIVISIONS',
    testDatasets: { week1: '../../_cpl/fixtures/data.test-week1.js' },
  });
  let received = null;
  const context = { window: { initCplBootstrap: (payload) => { received = payload; } } };
  vm.runInNewContext(source, context);
  assert.equal(received.config.defaultSlug, 'ab12cd34');
  assert.equal(received.config.divisionsGlobal, 'LOCAL_DIVISIONS');
  assert.equal(received.divisions[0].slug, 'ab12cd34');
  assert.equal(received.config.testDatasets.week1, '../../_cpl/fixtures/data.test-week1.js');
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
