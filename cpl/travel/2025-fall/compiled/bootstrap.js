'use strict';

(() => {
  const PAGE = Object.freeze({
    league: "travel",
    season: "2025-fall",
    landingSlug: "b844c0f9",
  });
  if (typeof window.initCplBootstrap !== 'function') {
    throw new Error('bootstrap-runtime.js must load before bootstrap.js');
  }
  window.initCplBootstrap(PAGE);
})();
