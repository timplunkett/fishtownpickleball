'use strict';

(() => {
  function appendScript(src, onload, onerror) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.onload = onload || null;
    script.onerror = onerror || null;
    document.body.appendChild(script);
  }

  function getQueryParam(name) {
    return new URLSearchParams(window.location.search).get(name) || '';
  }

  function loadScript(src) {
    return new Promise((resolve) => {
      appendScript(src, () => resolve(true), () => resolve(false));
    });
  }

  // Resolves once src has loaded, or once fallbackSrc has been tried in its
  // place. Resolving on failure too is deliberate: a missing file degrades one
  // part of the page and must not strand the rest of the chain.
  function loadWithFallback(src, fallbackSrc) {
    return loadScript(src).then((loaded) => {
      if (loaded || !fallbackSrc || fallbackSrc === src) return loaded;
      return loadScript(fallbackSrc);
    });
  }

  // The only thing this file can say to a reader, since app.js is what renders
  // everything else and the failures below are exactly the ones where it never
  // runs. Without it the page stayed at its empty scaffolding with a clean
  // console — indistinguishable, from the outside, from a page still loading.
  function showLoadError(message) {
    const host = document.getElementById('mainview');
    if (!host) return;
    const shared = window.CPLShared;
    host.innerHTML = shared && shared.loadErrorHtml
      ? shared.loadErrorHtml(message, 'Go back to all divisions', '../')
      : '<div class="load-error" role="alert"><p class="load-error-msg"></p>' +
        '<p class="load-error-action"><a href="../">Go back to all divisions</a></p></div>';
    if (!(shared && shared.loadErrorHtml)) {
      // shared.js is a separate cached file and may be the thing that failed;
      // textContent keeps the message out of the markup either way.
      host.querySelector('.load-error-msg').textContent = message;
    }
  }

  // Every division's data lives at data-<slug>.js.
  //
  // A 404 here used to fall back to the landing division's file, which rendered
  // another division's standings under a URL naming this one — confidently wrong
  // data, and worse than saying nothing. A division listed in bootstrap.js but
  // not yet compiled now says so.
  function dataFileFor(slug) {
    return slug ? `data-${slug}.js` : '';
  }

  // Each division also ships its own slice of the DUPR table, a fraction the
  // size of the league-wide file. The global file stands in when a division was
  // compiled before its shard existed: it holds every player, so the page is
  // correct either way, just heavier. Unlike the dataset that is a real
  // fallback — same players, same ratings — so it stays.
  function duprFileFor(slug) {
    return slug ? `dupr-${slug}.js` : '';
  }

  // app.js reads both the dataset and the DUPR table as it initialises, so it
  // goes last. The two it depends on don't depend on each other, so they load
  // together rather than one after the other.
  //
  // No dataset means no dashboard: app.js is not loaded at all, because it
  // reads DATA on the way up and would throw partway through rendering. A
  // missing DUPR table is survivable — those columns read as unrated — so it
  // does not hold the app back, but it is flagged rather than swallowed so the
  // page can admit the ratings are missing instead of implying nobody has one.
  function loadDashboard(slug) {
    Promise.all([
      loadScript(dataFileFor(slug)),
      loadWithFallback(duprFileFor(slug), '../dupr-ratings.js'),
    ]).then((loaded) => {
      if (!loaded[1]) {
        window.CPL_DUPR_UNAVAILABLE = true;
        window.console.warn('CPL: no DUPR table loaded — rating columns will read as unrated.');
      }
      if (loaded[0]) {
        loadScript('../app.js');
        return;
      }
      showLoadError("This division isn't available yet.");
    });
  }

  // No ?d= (or an unknown one) lands on config.landingSlug. That slug is baked
  // into bootstrap.js, which is cached separately from this file — so if a
  // browser pairs a stale bootstrap.js with this runtime and landingSlug is
  // missing, fall through to the first division rather than rendering nothing.
  function landingSlug(divisions, config) {
    return config.landingSlug || (divisions[0] ? divisions[0].slug : '');
  }

  function resolveDivisionSlug(divisions, config) {
    const requestedDivision = getQueryParam('d');
    const knownSlugs = new Set(divisions.map((division) => division.slug));
    return knownSlugs.has(requestedDivision) ? requestedDivision : landingSlug(divisions, config);
  }

  window.initCplBootstrap = function initCplBootstrap({ divisions, config }) {
    window[config.divisionsGlobal] = divisions;

    // Every league that has loaded, in script order. Both dashboards load both
    // bootstraps so the Division selector can list Cross Club and Local
    // divisions together — this is how app.js finds the league it is not on,
    // and the path to reach it. Registered before the dashboardPath check,
    // because the whole point is the league that does not match.
    window.CPL_LEAGUES = window.CPL_LEAGUES || [];
    if (!window.CPL_LEAGUES.some((entry) => entry.key === config.divisionsGlobal)) {
      window.CPL_LEAGUES.push({
        key: config.divisionsGlobal,
        dashboardPath: config.dashboardPath,
        divisions,
      });
    }

    // This bootstrap also runs on /cpl/, where data/app relative paths are different.
    if (!window.location.pathname.includes(config.dashboardPath)) return;

    window.DIVISIONS = divisions;

    const slug = resolveDivisionSlug(divisions, config);
    // No divisions at all, and no landing slug to fall through to: there is
    // nothing to load and nothing app.js could render. Returning quietly left a
    // permanently blank page behind a clean console.
    if (!slug) {
      showLoadError('No divisions are available yet.');
      return;
    }
    loadDashboard(slug);
  };
})();
