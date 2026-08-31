'use strict';

(() => {
  const DIVISIONS = Object.freeze([
    {"slug":"d4ef2f74","clubName":"Ace - Moorestown / Voorhees","divisionName":"3.75 & Over","asOf":"2026-08-31T17:53:58.342Z"},
    {"slug":"c9a2c0fe","clubName":"Ace - Moorestown / Voorhees","divisionName":"3.75 & Under","asOf":"2026-08-31T17:53:58.297Z"},
    {"slug":"a40bd7e8","clubName":"Bounce - Malvern","divisionName":"3.5 - 4.0","asOf":"2026-08-31T17:53:58.390Z"},
    {"slug":"b07de80e","clubName":"Bounce - Malvern","divisionName":"4.0 - 4.5","asOf":"2026-08-31T17:53:58.443Z"},
    {"slug":"3e9b6a58","clubName":"Bounce - Philly","divisionName":"3.5 - 4.0","asOf":"2026-08-31T17:53:58.507Z"},
    {"slug":"e6a9b403","clubName":"Dill Dinkers - Chantilly","divisionName":"3.25 - 3.99","asOf":"2026-08-31T17:53:58.539Z"},
    {"slug":"fb4a73a2","clubName":"Dill Dinkers - Hatboro","divisionName":"3.25 - 3.75","asOf":"2026-08-31T17:53:58.567Z"},
    {"slug":"edb788e6","clubName":"Flemington","divisionName":"3.25 - 3.99","asOf":"2026-08-31T17:53:58.673Z"},
    {"slug":"b9b8230d","clubName":"Flemington","divisionName":"3.25 & Under","asOf":"2026-08-31T17:53:58.597Z"},
    {"slug":"eaa4c1dc","clubName":"Flemington","divisionName":"4.0 & Over","asOf":"2026-08-31T17:53:58.631Z"},
    {"slug":"c1b3f9c1","clubName":"Robbinsville Pickle House","divisionName":"3.25 - 3.99","asOf":"2026-08-31T17:53:58.714Z"},
    {"slug":"a85172dd","clubName":"Robbinsville Pickle House","divisionName":"4.0 - 4.99","asOf":"2026-08-31T17:53:58.751Z"}
  ]);
  const CONFIG = Object.freeze({
    dashboardPath: "/cpl/local",
    landingSlug: "3e9b6a58",
    divisionsGlobal: "LOCAL_DIVISIONS",
  });
  if (typeof window.initCplBootstrap !== 'function') {
    throw new Error('bootstrap-runtime.js must load before bootstrap.js');
  }
  window.initCplBootstrap({ divisions: DIVISIONS, config: CONFIG });
})();
