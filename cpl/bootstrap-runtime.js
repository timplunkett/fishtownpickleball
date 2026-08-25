'use strict';

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

  function loadApp() {
    appendScript('../app.js');
  }

  // Every division's data lives at data-<slug>.js. If the requested one 404s
  // (listed in bootstrap.js but not yet compiled) fall back to the landing
  // division so the dashboard renders something rather than staying blank.
  function loadDataWithFallback(src, fallbackSrc) {
    const onError = fallbackSrc && fallbackSrc !== src
      ? () => appendScript(fallbackSrc, loadApp)
      : null;
    appendScript(src, loadApp, onError);
  }

  function dataFileFor(slug) {
    return slug ? `data-${slug}.js` : '';
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

    // This bootstrap also runs on /cpl/, where data/app relative paths are different.
    if (!window.location.pathname.includes(config.dashboardPath)) return;

    window.DIVISIONS = divisions;

    const dataFile = dataFileFor(resolveDivisionSlug(divisions, config));
    if (!dataFile) return;
    loadDataWithFallback(dataFile, dataFileFor(landingSlug(divisions, config)));
  };
})();
