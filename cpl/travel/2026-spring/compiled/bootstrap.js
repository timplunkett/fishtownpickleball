'use strict';

(() => {
  const PAGE = Object.freeze({
    league: "travel",
    season: "2026-spring",
    landingSlug: "e439985f",
  });
  if (typeof window.initCplBootstrap !== 'function') {
    throw new Error('bootstrap-runtime.js must load before bootstrap.js');
  }
  window.initCplBootstrap(PAGE);
})();
