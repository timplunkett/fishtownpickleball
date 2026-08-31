// Generators for the client bootstrap files:
//
//   cpl/<league>/<season>/bootstrap.js — names which league and season a page is
//   cpl/bootstrap-runtime.js           — the shared loader they all call into
//   cpl/<league>/index.html            — the redirect stub in front of a league
//
// The division list used to be baked into a per-league bootstrap.js. It now
// lives in cpl/catalog.js (see modules/catalog.js), because with seasons in play
// a page needs three lists — its own season, the other league's same season,
// and its own league's other seasons — and discovering which files hold them is
// itself a round trip. bootstrap.js is what is left once the lists move out:
// three strings.

function buildBootstrapSource({ league, season, landingSlug }) {
  return `'use strict';

(() => {
  const PAGE = Object.freeze({
    league: ${JSON.stringify(league)},
    season: ${JSON.stringify(season)},
    landingSlug: ${JSON.stringify(landingSlug)},
  });
  if (typeof window.initCplBootstrap !== 'function') {
    throw new Error('bootstrap-runtime.js must load before bootstrap.js');
  }
  window.initCplBootstrap(PAGE);
})();
`;
}

function buildBootstrapRuntimeSource() {
  return `'use strict';

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
    return slug ? \`data-\${slug}.js\` : '';
  }

  // Each division also ships its own slice of the DUPR table, a fraction the
  // size of the league-wide file. The global file stands in when a division was
  // compiled before its shard existed: it holds every player, so the page is
  // correct either way, just heavier. Unlike the dataset that is a real
  // fallback — same players, same ratings — so it stays.
  function duprFileFor(slug) {
    return slug ? \`dupr-\${slug}.js\` : '';
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
`;
}

// The stub at /cpl/<league>/, which is no longer a dashboard but the door to
// every season of one.
//
// GitHub Pages serves static files and cannot redirect, so this is done in the
// browser. It matters that it is done at all: /cpl/travel/?d=<slug> is the URL
// shape every link shared before seasons existed, and every link the player
// finder used to emit. Those slugs are the first eight characters of a division
// UUID and so are unique across all seasons — which is what makes it possible to
// send an old link to the right season rather than guessing.
//
// location.replace, not assign: the stub should not sit in the back button
// between the page you came from and the dashboard you asked for.
function buildLeagueRedirectSource({ league }) {
  return `'use strict';

(() => {
  const LEAGUE = ${JSON.stringify(league)};

  function seasonsOf() {
    const catalog = window.CPL_CATALOG;
    const leagues = (catalog && Array.isArray(catalog.leagues)) ? catalog.leagues : [];
    const entry = leagues.find((league) => league.key === LEAGUE);
    return entry ? entry : null;
  }

  function target() {
    const league = seasonsOf();
    if (!league || !league.seasons.length) return '';
    const search = window.location.search;
    const requested = new URLSearchParams(search).get('d') || '';

    // A ?d= naming a division of any season goes to that season, archived or
    // not. This is the whole point of the stub.
    if (requested) {
      const owner = league.seasons.find(
        (season) => season.divisions.some((division) => division.slug === requested),
      );
      if (owner) return owner.slug + '/' + search;
    }

    // Otherwise the current season, falling back to the newest one when the
    // league has wound down and nothing is current. Seasons are newest first.
    const current = league.seasons.find((season) => season.status === 'current')
      || league.seasons[0];
    return current.slug + '/' + search;
  }

  const to = target();
  if (to) {
    window.location.replace(to);
    return;
  }

  // Nothing to redirect to. Say so rather than leaving a blank page: this is
  // what a league whose catalog failed to load looks like from the outside.
  const host = document.getElementById('redirect-message');
  if (host) {
    host.textContent = "Couldn't work out which season to open. Go back to all leagues.";
  }
})();
`;
}

function buildLeagueRedirectHtml({ label }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${label} — Fishtown Pickleball</title>
<!-- Same reasoning as every other page under /cpl/: it publishes real people's
     names and is deliberately not indexable. A redirect stub has nothing to
     index either way, and noindex here keeps a crawler from following it in. -->
<meta name="robots" content="noindex, nofollow">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="stylesheet" href="../styles.css">
</head>
<body>
<div class="wrap">
  <p class="load-error" id="redirect-message" role="status">Opening the current season…</p>
  <p><a href="../">← All leagues and seasons</a></p>
</div>
<script src="../catalog.js" defer></script>
<script src="redirect.js" defer></script>
</body>
</html>
`;
}

module.exports = {
  buildBootstrapSource,
  buildBootstrapRuntimeSource,
  buildLeagueRedirectHtml,
  buildLeagueRedirectSource,
};
