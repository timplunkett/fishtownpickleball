// Generators for the client bootstrap files: cpl/<league>/bootstrap.js (the
// division list baked in at compile time) and cpl/bootstrap-runtime.js (the
// shared loader they both call into).

// Division entries are emitted with JSON.stringify so any characters the API
// sends (quotes, backslashes, even newlines) serialize into valid JS.
function buildBootstrapDivisionsLiteral(divisions) {
  return divisions.map((division) => {
    const entry = {
      slug: division.slug,
      ...(division.clubName ? { clubName: division.clubName } : {}),
      divisionName: division.divisionName,
    };
    return `    ${JSON.stringify(entry)}`;
  }).join(',\n');
}

function buildBootstrapSource({
  divisionsLiteral,
  dashboardPath,
  landingSlug,
  divisionsGlobal,
}) {
  return `'use strict';

(() => {
  const DIVISIONS = Object.freeze([
${divisionsLiteral}
  ]);
  const CONFIG = Object.freeze({
    dashboardPath: ${JSON.stringify(dashboardPath)},
    landingSlug: ${JSON.stringify(landingSlug)},
    divisionsGlobal: ${JSON.stringify(divisionsGlobal)},
  });
  if (typeof window.initCplBootstrap !== 'function') {
    throw new Error('bootstrap-runtime.js must load before bootstrap.js');
  }
  window.initCplBootstrap({ divisions: DIVISIONS, config: CONFIG });
})();
`;
}

function buildBootstrapRuntimeSource() {
  return `'use strict';

(() => {
  function appendScript(src, onload, onerror) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.onload = onload || null;
    script.onerror = onerror || null;
    document.body.appendChild(script);
  }

  function getQueryParam(name) {
    return new URLSearchParams(window.location.search).get(name) || '';
  }

  function loadScript(src) {
    return new Promise((resolve) => {
      appendScript(src, () => resolve(true), () => resolve(false));
    });
  }

  // Resolves once src has loaded, or once fallbackSrc has been tried in its
  // place. Resolving on failure too is deliberate: a missing file degrades one
  // part of the page and must not strand the rest of the chain.
  function loadWithFallback(src, fallbackSrc) {
    return loadScript(src).then((loaded) => {
      if (loaded || !fallbackSrc || fallbackSrc === src) return loaded;
      return loadScript(fallbackSrc);
    });
  }

  // Every division's data lives at data-<slug>.js. If the requested one 404s
  // (listed in bootstrap.js but not yet compiled) fall back to the landing
  // division so the dashboard renders something rather than staying blank.
  function dataFileFor(slug) {
    return slug ? \`data-\${slug}.js\` : '';
  }

  // Each division also ships its own slice of the DUPR table, a fraction the
  // size of the league-wide file. The global file stands in when a division was
  // compiled before its shard existed: it holds every player, so the page is
  // correct either way, just heavier.
  function duprFileFor(slug) {
    return slug ? \`dupr-\${slug}.js\` : '';
  }

  // app.js reads both the dataset and the DUPR table as it initialises, so it
  // goes last. The two it depends on don't depend on each other, so they load
  // together rather than one after the other.
  //
  // No dataset means no dashboard: app.js is not loaded at all, leaving the
  // page empty rather than letting it throw partway through rendering. A
  // missing DUPR table is survivable — those columns just read as unrated — so
  // it does not hold the app back.
  function loadDashboard(slug, fallbackSlug) {
    Promise.all([
      loadWithFallback(dataFileFor(slug), dataFileFor(fallbackSlug)),
      loadWithFallback(duprFileFor(slug), '../dupr-ratings.js'),
    ]).then((loaded) => {
      if (loaded[0]) loadScript('../app.js');
    });
  }

  // No ?d= (or an unknown one) lands on config.landingSlug. That slug is baked
  // into bootstrap.js, which is cached separately from this file — so if a
  // browser pairs a stale bootstrap.js with this runtime and landingSlug is
  // missing, fall through to the first division rather than rendering nothing.
  function landingSlug(divisions, config) {
    return config.landingSlug || (divisions[0] ? divisions[0].slug : '');
  }

  function resolveDivisionSlug(divisions, config) {
    const requestedDivision = getQueryParam('d');
    const knownSlugs = new Set(divisions.map((division) => division.slug));
    return knownSlugs.has(requestedDivision) ? requestedDivision : landingSlug(divisions, config);
  }

  window.initCplBootstrap = function initCplBootstrap({ divisions, config }) {
    window[config.divisionsGlobal] = divisions;

    // Every league that has loaded, in script order. Both dashboards load both
    // bootstraps so the Division selector can list Cross Club and Local
    // divisions together — this is how app.js finds the league it is not on,
    // and the path to reach it. Registered before the dashboardPath check,
    // because the whole point is the league that does not match.
    window.CPL_LEAGUES = window.CPL_LEAGUES || [];
    if (!window.CPL_LEAGUES.some((entry) => entry.key === config.divisionsGlobal)) {
      window.CPL_LEAGUES.push({
        key: config.divisionsGlobal,
        dashboardPath: config.dashboardPath,
        divisions,
      });
    }

    // This bootstrap also runs on /cpl/, where data/app relative paths are different.
    if (!window.location.pathname.includes(config.dashboardPath)) return;

    window.DIVISIONS = divisions;

    const slug = resolveDivisionSlug(divisions, config);
    if (!slug) return;
    loadDashboard(slug, landingSlug(divisions, config));
  };
})();
`;
}

module.exports = {
  buildBootstrapDivisionsLiteral,
  buildBootstrapSource,
  buildBootstrapRuntimeSource,
};
