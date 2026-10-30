'use strict';

(() => {
  const PAGE = Object.freeze({
    league: "travel",
    season: "2026-winter",
    landingSlug: "8b1c2590",
  });
  if (typeof window.initCplBootstrap !== 'function') {
    throw new Error('bootstrap-runtime.js must load before bootstrap.js');
  }
  window.initCplBootstrap(PAGE);
})();
