'use strict';

(() => {
  const LOCAL_HOSTS = new Set(['', 'localhost', '127.0.0.1', '::1']);

  function appendScript(src, onload, onerror) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.onload = onload || null;
    script.onerror = onerror || null;
    document.body.appendChild(script);
  }

  function isLocalHost() {
    return LOCAL_HOSTS.has(window.location.hostname);
  }

  function getQueryParam(name) {
    return new URLSearchParams(window.location.search).get(name) || '';
  }

  function loadApp() {
    const loadAppScript = () => appendScript('../app.js');
    appendScript('../dupr-format.js', loadAppScript, loadAppScript);
  }

  function loadDataWithFallback(src) {
    appendScript(src, loadApp, () => appendScript('data.js', loadApp));
  }

  function resolveDatasetFile(config) {
    const requestedDataset = getQueryParam('dataset');
    if (!requestedDataset || !isLocalHost()) return '';
    return config.testDatasets[requestedDataset] || '';
  }

  function resolveDivisionDataFile(divisions, config) {
    const requestedDivision = getQueryParam('d');
    const knownSlugs = new Set(divisions.map((division) => division.slug));
    const slug = knownSlugs.has(requestedDivision) ? requestedDivision : config.defaultSlug;
    if (!slug) return '';
    return slug === config.defaultSlug ? 'data.js' : `data-${slug}.js`;
  }

  window.initCplBootstrap = function initCplBootstrap({ divisions, config }) {
    window[config.divisionsGlobal] = divisions;

    // This bootstrap also runs on /cpl/, where data/app relative paths are different.
    if (!window.location.pathname.includes(config.dashboardPath)) return;

    window.DIVISIONS = divisions;

    const datasetFile = resolveDatasetFile(config);
    if (datasetFile) {
      loadDataWithFallback(datasetFile);
      return;
    }

    const dataFile = resolveDivisionDataFile(divisions, config);
    if (!dataFile) return;
    loadDataWithFallback(dataFile);
  };
})();
