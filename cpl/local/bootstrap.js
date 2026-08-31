'use strict';

(() => {
  const DIVISIONS = Object.freeze([
    {"slug":"d4ef2f74","clubName":"Ace - Moorestown / Voorhees","divisionName":"3.75 & Over","asOf":"2026-08-31T17:53:02.612Z"},
    {"slug":"c9a2c0fe","clubName":"Ace - Moorestown / Voorhees","divisionName":"3.75 & Under","asOf":"2026-08-31T17:53:02.567Z"},
    {"slug":"a40bd7e8","clubName":"Bounce - Malvern","divisionName":"3.5 - 4.0","asOf":"2026-08-31T17:53:02.666Z"},
    {"slug":"b07de80e","clubName":"Bounce - Malvern","divisionName":"4.0 - 4.5","asOf":"2026-08-31T17:53:02.720Z"},
    {"slug":"3e9b6a58","clubName":"Bounce - Philly","divisionName":"3.5 - 4.0","asOf":"2026-08-31T17:53:02.789Z"},
    {"slug":"e6a9b403","clubName":"Dill Dinkers - Chantilly","divisionName":"3.25 - 3.99","asOf":"2026-08-31T17:53:02.828Z"},
    {"slug":"fb4a73a2","clubName":"Dill Dinkers - Hatboro","divisionName":"3.25 - 3.75","asOf":"2026-08-31T17:53:02.860Z"},
    {"slug":"edb788e6","clubName":"Flemington","divisionName":"3.25 - 3.99","asOf":"2026-08-31T17:53:02.974Z"},
    {"slug":"b9b8230d","clubName":"Flemington","divisionName":"3.25 & Under","asOf":"2026-08-31T17:53:02.894Z"},
    {"slug":"eaa4c1dc","clubName":"Flemington","divisionName":"4.0 & Over","asOf":"2026-08-31T17:53:02.928Z"},
    {"slug":"c1b3f9c1","clubName":"Robbinsville Pickle House","divisionName":"3.25 - 3.99","asOf":"2026-08-31T17:53:03.024Z"},
    {"slug":"a85172dd","clubName":"Robbinsville Pickle House","divisionName":"4.0 - 4.99","asOf":"2026-08-31T17:53:03.072Z"}
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
