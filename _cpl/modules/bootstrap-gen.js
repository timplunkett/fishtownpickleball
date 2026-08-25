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

function buildBootstrapDatasetsLiteral(datasets) {
  const entries = Object.entries(datasets).map(([datasetName, fileName]) => (
    `    ${JSON.stringify(datasetName)}: ${JSON.stringify(fileName)}`
  ));

  return entries.length
    ? `{\n${entries.map((entry) => `      ${entry.trimStart()}`).join(',\n')}\n    }`
    : '{}';
}

function buildBootstrapSource({
  divisionsLiteral,
  dashboardPath,
  defaultSlug,
  divisionsGlobal,
  testDatasets,
}) {
  return `'use strict';

(() => {
  const DIVISIONS = Object.freeze([
${divisionsLiteral}
  ]);
  const CONFIG = Object.freeze({
    dashboardPath: ${JSON.stringify(dashboardPath)},
    defaultSlug: ${JSON.stringify(defaultSlug)},
    divisionsGlobal: ${JSON.stringify(divisionsGlobal)},
    testDatasets: Object.freeze(${buildBootstrapDatasetsLiteral(testDatasets)}),
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
    return slug === config.defaultSlug ? 'data.js' : \`data-\${slug}.js\`;
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
`;
}

module.exports = {
  buildBootstrapDivisionsLiteral,
  buildBootstrapDatasetsLiteral,
  buildBootstrapSource,
  buildBootstrapRuntimeSource,
};
