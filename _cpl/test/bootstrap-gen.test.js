const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const {
  buildBootstrapSource,
  buildBootstrapRuntimeSource,
  buildLeagueRedirectHtml,
  buildLeagueRedirectSource,
} = require('../modules/bootstrap-gen');
const shared = require('../modules/shared');

test('generated bootstrap source is valid JS and names its league and season', () => {
  const source = buildBootstrapSource({
    league: 'local',
    season: '2026-summer',
    landingSlug: 'ab12cd34',
  });
  let received = null;
  const context = { window: { initCplBootstrap: (payload) => { received = payload; } } };
  vm.runInNewContext(source, context);
  assert.deepEqual({ ...received }, {
    league: 'local',
    season: '2026-summer',
    landingSlug: 'ab12cd34',
  });
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

const DIVISIONS = [{ slug: 'ab12cd34', divisionName: '3.5 - 4.0' }, { slug: 'ef56ab78', divisionName: '4.0 - 4.5' }];

// A catalog holding one league with one season of `divisions`. Passing null for
// the catalog is how the tests stand in for catalog.js having failed to load.
function catalogOf(divisions, { landingSlug = '', season = '2026-summer' } = {}) {
  return {
    leagues: [{
      key: 'local',
      label: 'Local Leagues',
      current: season,
      seasons: [{ slug: season, label: 'Summer 2026', status: 'current', landingSlug, divisions }],
    }],
  };
}

// Runs the generated runtime on a fake DOM and returns the src of every script
// it appended, so we can assert which data file it reached for. Scripts fire
// their onerror when `missing` contains their src, mimicking a 404. Loading is
// promise-chained, so the caller awaits: fake responses settle synchronously,
// but the steps that follow them are microtasks.
//
// `view` is filled in with whatever the runtime wrote into #mainview, which on
// every failing path is the only thing a reader would see.
async function runRuntime({
  search, landingSlug, divisions, catalog, missing = [], view = {}, season = '2026-summer',
}) {
  const appended = [];
  const warnings = [];
  const mainview = { innerHTML: '' };
  const context = {
    window: {
      location: { hostname: 'example.com', pathname: '/cpl/local/2026-summer/', search },
      console: { warn: (message) => warnings.push(message) },
      CPLShared: shared,
      CPL_CATALOG: catalog === undefined ? catalogOf(divisions, { landingSlug, season }) : catalog,
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
  context.window.initCplBootstrap({ league: 'local', season, landingSlug });
  await new Promise((resolve) => setTimeout(resolve, 0));
  view.html = mainview.innerHTML;
  view.warnings = warnings;
  view.divisions = context.window.DIVISIONS;
  view.page = context.window.CPL_PAGE;
  view.duprUnavailable = Boolean(context.window.CPL_DUPR_UNAVAILABLE);
  return appended;
}

// Every dashboard load pulls the division's own DUPR shard alongside its data.
// The shared assets are two levels up now that a dashboard lives inside a season
// directory rather than directly under its league.
const DUPR = (slug) => `dupr-${slug}.js`;
const APP = '../../app.js';

test('every division loads its slug-prefixed data file, landing division included', async () => {
  assert.deepEqual(
    await runRuntime({ search: '?d=ef56ab78', landingSlug: 'ab12cd34', divisions: DIVISIONS }),
    ['data-ef56ab78.js', DUPR('ef56ab78'), APP],
  );
  assert.deepEqual(
    await runRuntime({ search: '?d=ab12cd34', landingSlug: 'ab12cd34', divisions: DIVISIONS }),
    ['data-ab12cd34.js', DUPR('ab12cd34'), APP],
  );
});

test('the runtime publishes this page and its season\'s divisions for app.js', async () => {
  const view = {};
  await runRuntime({ search: '', landingSlug: 'ab12cd34', divisions: DIVISIONS, view });
  assert.deepEqual(view.page, { league: 'local', season: '2026-summer', landingSlug: 'ab12cd34' });
  assert.deepEqual(view.divisions.map((div) => div.slug), ['ab12cd34', 'ef56ab78']);
});

test('no ?d= loads the landing division', async () => {
  assert.deepEqual(
    await runRuntime({ search: '', landingSlug: 'ef56ab78', divisions: DIVISIONS }),
    ['data-ef56ab78.js', DUPR('ef56ab78'), APP],
  );
});

test('an unknown ?d= falls straight to the landing division', async () => {
  assert.deepEqual(
    await runRuntime({ search: '?d=nope', landingSlug: 'ab12cd34', divisions: DIVISIONS }),
    ['data-ab12cd34.js', DUPR('ab12cd34'), APP],
  );
});

// A slug belonging to a different season is the case the league's redirect stub
// exists to catch. If one reaches a season directory anyway — a hand-edited URL,
// a stale catalog — the data file it names is not in this directory, so loading
// it would 404 into the "isn't available yet" error. Falling back to the landing
// division shows a real dashboard instead.
test('a ?d= from another season falls back rather than 404ing', async () => {
  assert.deepEqual(
    await runRuntime({ search: '?d=99999999', landingSlug: 'ab12cd34', divisions: DIVISIONS }),
    ['data-ab12cd34.js', DUPR('ab12cd34'), APP],
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
  assert.match(view.html, /href="\.\.\/\.\.\/"/, 'no way back to the division list');
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

// bootstrap.js, bootstrap-runtime.js and catalog.js are three separately cached
// files, so a browser can hold any mix of versions of them.
test('a bootstrap with no landing slug falls through to the catalog\'s', async () => {
  assert.deepEqual(
    await runRuntime({
      search: '',
      landingSlug: undefined,
      divisions: DIVISIONS,
      catalog: catalogOf(DIVISIONS, { landingSlug: 'ef56ab78' }),
    }),
    ['data-ef56ab78.js', DUPR('ef56ab78'), APP],
  );
});

test('with neither landing slug the first division of the season loads', async () => {
  assert.deepEqual(
    await runRuntime({ search: '', landingSlug: undefined, divisions: DIVISIONS }),
    ['data-ab12cd34.js', DUPR('ab12cd34'), APP],
  );
});

// The catalog is the file that carries the division lists now, so a page that
// loses it loses the selectors. It must not lose the dashboard: bootstrap.js
// still names the landing division, and ?d= is still readable from the URL.
test('a missing catalog still renders the requested division', async () => {
  const view = {};
  assert.deepEqual(
    await runRuntime({
      search: '?d=ef56ab78',
      landingSlug: 'ab12cd34',
      divisions: DIVISIONS,
      catalog: null,
      view,
    }),
    ['data-ef56ab78.js', DUPR('ef56ab78'), APP],
  );
  assert.equal(view.divisions.length, 0);
});

test('a missing catalog with no ?d= falls back to the bootstrap\'s landing division', async () => {
  assert.deepEqual(
    await runRuntime({ search: '', landingSlug: 'ab12cd34', divisions: DIVISIONS, catalog: null }),
    ['data-ab12cd34.js', DUPR('ab12cd34'), APP],
  );
});

test('no divisions at all loads nothing rather than data-undefined.js', async () => {
  const view = {};
  assert.deepEqual(
    await runRuntime({ search: '', landingSlug: '', divisions: [], catalog: null, view }),
    [],
  );
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
    ['data-ef56ab78.js', DUPR('ef56ab78'), '../../dupr-ratings.js', APP],
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
      missing: [DUPR('ef56ab78'), '../../dupr-ratings.js'],
      view,
    }),
    ['data-ef56ab78.js', DUPR('ef56ab78'), '../../dupr-ratings.js', APP],
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

// ---------------------------------------------------------------------------
// The redirect stub at /cpl/<league>/
//
// This is what every link shared before seasons existed still points at, and
// what the player finder emits when it cannot tell which season an entry is
// from. Getting it wrong does not break a page — it silently shows a different
// season's standings under a URL naming a division.
// ---------------------------------------------------------------------------

const ARCHIVE_CATALOG = {
  leagues: [{
    key: 'travel',
    label: 'Cross Club League',
    current: '2026-fall',
    seasons: [
      {
        slug: '2026-fall',
        label: 'Fall 2026',
        status: 'current',
        landingSlug: 'ab12cd34',
        divisions: [{ slug: 'ab12cd34', divisionName: '3.5' }, { slug: 'ef56ab78', divisionName: '4.0' }],
      },
      {
        slug: '2026-spring',
        label: 'Spring 2026',
        status: 'archived',
        landingSlug: '11112222',
        divisions: [{ slug: '11112222', divisionName: '3.5' }, { slug: '33334444', divisionName: '4.5' }],
      },
    ],
  }],
};

function runRedirect({ search, catalog = ARCHIVE_CATALOG }) {
  let replaced = null;
  const message = { textContent: '' };
  const context = {
    window: {
      location: { search, replace: (to) => { replaced = to; } },
      CPL_CATALOG: catalog,
    },
    document: { getElementById: (id) => (id === 'redirect-message' ? message : null) },
    URLSearchParams: globalThis.URLSearchParams,
  };
  vm.runInNewContext(buildLeagueRedirectSource({ league: 'travel' }), context);
  return { replaced, message: message.textContent };
}

test('a bare league URL opens the current season', () => {
  assert.equal(runRedirect({ search: '' }).replaced, '2026-fall/');
});

test('a ?d= from the current season keeps its query intact', () => {
  assert.equal(runRedirect({ search: '?d=ef56ab78' }).replaced, '2026-fall/?d=ef56ab78');
});

// The reason the stub reads every season rather than only the current one. These
// are the links shared while an archived season was the live one.
test('a ?d= from an archived season goes to that season, not the current one', () => {
  assert.equal(runRedirect({ search: '?d=33334444' }).replaced, '2026-spring/?d=33334444');
});

test('the finder\'s extra parameters survive the redirect', () => {
  assert.equal(
    runRedirect({ search: '?d=33334444&team=some-team&player=abc' }).replaced,
    '2026-spring/?d=33334444&team=some-team&player=abc',
  );
});

test('an unknown ?d= lands on the current season rather than nowhere', () => {
  assert.equal(runRedirect({ search: '?d=99999999' }).replaced, '2026-fall/?d=99999999');
});

// A league whose every season is archived still has to be reachable; the archive
// is all there is to reach. Seasons are newest first.
test('a league with nothing current opens its newest season', () => {
  const wound = {
    leagues: [{
      key: 'travel',
      label: 'Cross Club League',
      current: null,
      seasons: ARCHIVE_CATALOG.leagues[0].seasons.map((season) => ({ ...season, status: 'archived' })),
    }],
  };
  assert.equal(runRedirect({ search: '', catalog: wound }).replaced, '2026-fall/');
});

test('no catalog redirects nowhere and says so rather than sitting blank', () => {
  const result = runRedirect({ search: '', catalog: null });
  assert.equal(result.replaced, null);
  assert.match(result.message, /Couldn't work out which season/);
});

test('the redirect stub markup is noindex and loads the catalog before the script', () => {
  const html = buildLeagueRedirectHtml({ label: 'Cross Club League' });
  assert.match(html, /<meta name="robots" content="noindex, nofollow">/);
  assert.ok(html.indexOf('catalog.js') < html.indexOf('redirect.js'), 'redirect.js runs before the catalog loads');
  assert.match(html, /id="redirect-message"/);
});
