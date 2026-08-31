'use strict';

(() => {
  const PAGE = Object.freeze({
    league: "local",
    season: "2026-summer",
    landingSlug: "3e9b6a58",
  });
  if (typeof window.initCplBootstrap !== 'function') {
    throw new Error('bootstrap-runtime.js must load before bootstrap.js');
  }
  window.initCplBootstrap(PAGE);
})();
