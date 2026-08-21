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
  if (typeof window.initCplBootstrap !== 'function') {
    throw new Error('bootstrap-runtime.js must load before bootstrap.js');
  }
  window.initCplBootstrap({ divisions: DIVISIONS, config: CONFIG });
})();
