'use strict';

(() => {
  const DIVISIONS = Object.freeze([
    {"slug":"e27386b3","divisionName":"3.0","asOf":"2026-08-31T17:53:03.161Z"},
    {"slug":"1e12eb3f","divisionName":"3.0 (50+)","asOf":"2026-08-31T17:53:03.304Z"},
    {"slug":"b7ca04e4","divisionName":"3.5","asOf":"2026-08-31T17:53:03.416Z"},
    {"slug":"c43b8608","divisionName":"3.5 (50+)","asOf":"2026-08-31T17:53:03.534Z"},
    {"slug":"a1413f3d","divisionName":"4.0","asOf":"2026-08-31T17:53:03.366Z"},
    {"slug":"2edc44e7","divisionName":"4.0 (50+)","asOf":"2026-08-31T17:53:03.122Z"},
    {"slug":"6619816f","divisionName":"4.5","asOf":"2026-08-31T17:53:03.452Z"},
    {"slug":"ad44e3bd","divisionName":"3.25 Womens","asOf":"2026-08-31T17:53:03.594Z"},
    {"slug":"c118b8e9","divisionName":"3.75 Mens","asOf":"2026-08-31T17:53:03.617Z"},
    {"slug":"cca69ab9","divisionName":"4.5 Mens","asOf":"2026-08-31T17:53:03.573Z"}
  ]);
  const CONFIG = Object.freeze({
    dashboardPath: "/cpl/travel",
    landingSlug: "b7ca04e4",
    divisionsGlobal: "TRAVEL_DIVISIONS",
  });
  if (typeof window.initCplBootstrap !== 'function') {
    throw new Error('bootstrap-runtime.js must load before bootstrap.js');
  }
  window.initCplBootstrap({ divisions: DIVISIONS, config: CONFIG });
})();
