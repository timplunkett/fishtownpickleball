'use strict';

(() => {
  function parseCplDataScript(scriptText) {
    const source = String(scriptText || '');
    const loadData = new Function(`
      "use strict";
      ${source}
      return (typeof DATA !== "undefined") ? DATA : null;
    `);
    return loadData();
  }

  window.parseCplDataScript = parseCplDataScript;
})();
