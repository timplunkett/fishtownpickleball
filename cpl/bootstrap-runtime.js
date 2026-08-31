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
      ? shared.loadErrorHtml(message, 'Go back to all divisions', '../../')
      : '<div class="load-error" role="alert"><p class="load-error-msg"></p>' +
        '<p class="load-error-action"><a href="../../">Go back to all divisions</a></p></div>';
    if (!(shared && shared.loadErrorHtml)) {
      // shared.js is a separate cached file and may be the thing that failed;
      // textContent keeps the message out of the markup either way.
      host.querySelector('.load-error-msg').textContent = message;
    }
  }

  // Every division's data lives at data-<slug>.js, inside its own season's
  // directory.
  //
  // A 404 here used to fall back to the landing division's file, which rendered
  // another division's standings under a URL naming this one — confidently wrong
  // data, and worse than saying nothing. A division listed in the catalog but
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
      loadWithFallback(duprFileFor(slug), '../../dupr-ratings.js'),
    ]).then((loaded) => {
      if (!loaded[1]) {
        window.CPL_DUPR_UNAVAILABLE = true;
        window.console.warn('CPL: no DUPR table loaded — rating columns will read as unrated.');
      }
      if (loaded[0]) {
        loadScript('../../app.js');
        return;
      }
      showLoadError("This division isn't available yet.");
    });
  }

  // The catalog is a separate cached file, so a browser can pair a fresh
  // bootstrap.js with a stale or missing catalog.js. Everything below treats an
  // absent catalog as "this page still knows its own league, season and landing
  // division" — enough to render the division that was asked for, without the
  // selectors that need the other seasons.
  function catalogSeason(page) {
    const catalog = window.CPL_CATALOG;
    const leagues = (catalog && Array.isArray(catalog.leagues)) ? catalog.leagues : [];
    const league = leagues.find((entry) => entry.key === page.league);
    if (!league) return null;
    return (league.seasons || []).find((season) => season.slug === page.season) || null;
  }

  function landingSlug(page, season) {
    return page.landingSlug
      || (season && season.landingSlug)
      || (season && season.divisions[0] ? season.divisions[0].slug : '');
  }

  // ?d= is honoured only when it names a division of *this* season. A slug from
  // another season is not an error the dashboard can render — its data file is
  // in a different directory — so it falls through to the landing division here,
  // and the redirect stub in front of the league is what sends such a link to
  // the right season in the first place.
  function resolveDivisionSlug(page, season) {
    const requested = getQueryParam('d');
    if (!requested) return landingSlug(page, season);
    const known = season ? season.divisions.some((div) => div.slug === requested) : true;
    return known ? requested : landingSlug(page, season);
  }

  window.initCplBootstrap = function initCplBootstrap(page) {
    // What app.js reads to build its two selectors and to know where it is.
    window.CPL_PAGE = page;

    const season = catalogSeason(page);
    window.DIVISIONS = season ? season.divisions : [];

    const slug = resolveDivisionSlug(page, season);
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
