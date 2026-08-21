'use strict';

(() => {
  const DIVISIONS = Object.freeze([
    { slug: 'd4ef2f74', clubName: 'Ace - Moorestown / Voorhees', divisionName: '3.75 & Over' },
    { slug: 'c9a2c0fe', clubName: 'Ace - Moorestown / Voorhees', divisionName: '3.75 & Under' },
    { slug: 'a40bd7e8', clubName: 'Bounce - Malvern', divisionName: '3.5 - 4.0' },
    { slug: 'b07de80e', clubName: 'Bounce - Malvern', divisionName: '4.0 - 4.5' },
    { slug: '3e9b6a58', clubName: 'Bounce - Philly', divisionName: '3.5 - 4.0' },
    { slug: 'e6a9b403', clubName: 'Dill Dinkers - Chantilly', divisionName: '3.25 - 3.99' },
    { slug: 'fb4a73a2', clubName: 'Dill Dinkers - Hatboro', divisionName: '3.25 - 3.75' },
    { slug: 'edb788e6', clubName: 'Flemington', divisionName: '3.25 - 3.99' },
    { slug: 'b9b8230d', clubName: 'Flemington', divisionName: '3.25 & Under' },
    { slug: 'eaa4c1dc', clubName: 'Flemington', divisionName: '4.0 & Over' },
    { slug: 'c1b3f9c1', clubName: 'Robbinsville Pickle House', divisionName: '3.25 - 3.99' },
    { slug: 'a85172dd', clubName: 'Robbinsville Pickle House', divisionName: '4.0 - 4.99' }
  ]);
  const CONFIG = Object.freeze({
    dashboardPath: '/cpl/local',
    defaultSlug: '3e9b6a58',
    divisionsGlobal: 'LOCAL_DIVISIONS',
    testDatasets: Object.freeze({
      'week1': 'data.test-week1.js',
      'week6': 'data.test-week6.js'
    }),
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
    appendScript('../dupr-format.js', () => appendScript('../app.js'), () => appendScript('../app.js'));
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
