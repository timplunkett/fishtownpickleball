'use strict';

const DIVISIONS = Object.freeze([
  { slug: '3e9b6a58', clubName: 'Bounce - Philly',     divisionName: '3.5 - 4.0' },
  { slug: 'a40bd7e8', clubName: 'Bounce - Malvern',    divisionName: '3.5 - 4.0' },
  { slug: 'b07de80e', clubName: 'Bounce - Malvern',    divisionName: '4.0 - 4.5' },
  { slug: 'c9a2c0fe', clubName: 'Ace - Moorestown / Voorhees', divisionName: '3.75 & Under' },
  { slug: 'd4ef2f74', clubName: 'Ace - Moorestown / Voorhees', divisionName: '3.75 & Over' },
  { slug: 'e6a9b403', clubName: 'Dill Dinkers - Chantilly',            divisionName: '3.25 - 3.99' },
  { slug: 'fb4a73a2', clubName: 'Dill Dinkers - Hatboro',              divisionName: '3.25 - 3.75' },
  { slug: 'b9b8230d', clubName: 'Flemington',          divisionName: '3.25 & Under' },
  { slug: 'eaa4c1dc', clubName: 'Flemington',          divisionName: '4.0 & Over' },
  { slug: 'edb788e6', clubName: 'Flemington',          divisionName: '3.25 - 3.99' },
  { slug: 'c1b3f9c1', clubName: 'Robbinsville Pickle House',           divisionName: '3.25 - 3.99' },
  { slug: 'a85172dd', clubName: 'Robbinsville Pickle House',           divisionName: '4.0 - 4.99' },
]);

(() => {
  const TEST_DATASETS = Object.freeze({
    week1: 'data.test-week1.js',
    week6: 'data.test-week6.js',
  });
  const DEFAULT_SLUG = '3e9b6a58';
  const KNOWN_SLUGS = new Set(DIVISIONS.map((d) => d.slug));
  const LOCAL_HOSTS = new Set(['', 'localhost', '127.0.0.1', '::1']);
  const isLocal = LOCAL_HOSTS.has(window.location.hostname);

  const params = new URLSearchParams(window.location.search);
  const requestedDataset = params.get('dataset');
  const requestedDivision = params.get('d') || '';

  const loadScript = (src, onload, onerror) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.onload = onload || null;
    script.onerror = onerror || null;
    document.body.appendChild(script);
  };

  const loadApp = () => loadScript('app.js');

  // Local test dataset takes priority over division selection.
  if (isLocal && requestedDataset && TEST_DATASETS[requestedDataset]) {
    loadScript(TEST_DATASETS[requestedDataset], loadApp, () => loadScript('data.js', loadApp));
    return;
  }

  // Division selection via ?d= query param.
  const slug = KNOWN_SLUGS.has(requestedDivision) ? requestedDivision : DEFAULT_SLUG;
  const dataFile = slug === DEFAULT_SLUG ? 'data.js' : `data-${slug}.js`;
  loadScript(dataFile, loadApp, () => loadScript('data.js', loadApp));
})();
