'use strict';

(() => {
  const PAGE = Object.freeze({
    league: "travel",
    season: "2026-fall",
    landingSlug: "b7ca04e4",
  });
  if (typeof window.initCplBootstrap !== 'function') {
    throw new Error('bootstrap-runtime.js must load before bootstrap.js');
  }
  window.initCplBootstrap(PAGE);
})();
