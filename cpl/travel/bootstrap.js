'use strict';

(() => {
  const DIVISIONS = Object.freeze([
    { slug: 'e27386b3', divisionName: '3.0' },
    { slug: '1e12eb3f', divisionName: '3.0 (50+)' },
    { slug: 'b7ca04e4', divisionName: '3.5' },
    { slug: 'c43b8608', divisionName: '3.5 (50+)' },
    { slug: 'a1413f3d', divisionName: '4.0' },
    { slug: '2edc44e7', divisionName: '4.0 (50+)' },
    { slug: '6619816f', divisionName: '4.5' },
    { slug: 'ad44e3bd', divisionName: '3.25 Womens' },
    { slug: 'c118b8e9', divisionName: '3.75 Mens' },
    { slug: 'cca69ab9', divisionName: '4.5 Mens' }
  ]);
  const CONFIG = Object.freeze({
    dashboardPath: '/cpl/travel',
    defaultSlug: 'b7ca04e4',
    divisionsGlobal: 'TRAVEL_DIVISIONS',
    testDatasets: Object.freeze({}),
  });
  const KNOWN_SLUGS = new Set(DIVISIONS.map((division) => division.slug));
  const LOCAL_HOSTS = new Set(['', 'localhost', '127.0.0.1', '::1']);

  function exposeDivisionsForLandingPage() {
    window[CONFIG.divisionsGlobal] = DIVISIONS;
  }

  function isDashboardPage() {
    return window.location.pathname.includes(CONFIG.dashboardPath);
  }

  function isLocalHost() {
    return LOCAL_HOSTS.has(window.location.hostname);
  }

  function appendScript(src, onload, onerror) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.onload = onload || null;
    script.onerror = onerror || null;
    document.body.appendChild(script);
  }

  function loadApp() {
    appendScript('../app.js');
  }

  function loadDataWithFallback(src) {
    appendScript(src, loadApp, () => appendScript('data.js', loadApp));
  }

  function getRequestedDataset() {
    return new URLSearchParams(window.location.search).get('dataset') || '';
  }

  function getRequestedDivision() {
    return new URLSearchParams(window.location.search).get('d') || '';
  }

  function resolveDatasetFile() {
    const requestedDataset = getRequestedDataset();
    if (!requestedDataset || !isLocalHost()) return '';

    return CONFIG.testDatasets[requestedDataset] || '';
  }

  function resolveDivisionDataFile() {
    const requestedDivision = getRequestedDivision();
    const slug = KNOWN_SLUGS.has(requestedDivision) ? requestedDivision : CONFIG.defaultSlug;

    if (!slug) return '';

    return slug === CONFIG.defaultSlug ? 'data.js' : `data-${slug}.js`;
  }

  exposeDivisionsForLandingPage();

  // This file is also loaded by /cpl/, where data/app relative paths are different.
  if (!isDashboardPage()) return;

  window.DIVISIONS = DIVISIONS;

  const datasetFile = resolveDatasetFile();
  if (datasetFile) {
    loadDataWithFallback(datasetFile);
    return;
  }

  const dataFile = resolveDivisionDataFile();
  if (!dataFile) return;

  loadDataWithFallback(dataFile);
})();
