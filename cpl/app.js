'use strict';

// Sized so the largest divisions (10+ teams) get a distinct color per team —
// with the old 5-color palette the beeswarm legend showed duplicate colors.
// Ordered so adjacent assignments stay high-contrast on the dark background.
const TEAM_COLOR_PALETTE = Object.freeze([
  '#1db2dc', // Blue
  '#e5534b', // Red
  '#19d39a', // Green
  '#e8c66b', // Yellow
  '#b083f0', // Purple
  '#ff9b66', // Orange
  '#7fd6ee', // Light blue
  '#f27fb2', // Pink
  '#9ccc65', // Lime
  '#4f8ff7', // Royal blue
  '#d4a373', // Tan
  '#66d9c8', // Teal
]);
const TEAM_COLORS = Object.freeze(Object.fromEntries(
  [...(Array.isArray(DATA.teams) ? DATA.teams : [])]
    .sort((a, b) => (a?.name ?? '').localeCompare(b?.name ?? ''))
    .map((team, index) => [
      team.name,
      TEAM_COLOR_PALETTE[index % TEAM_COLOR_PALETTE.length],
    ]),
));
const EMPTY_VALUE = '—';
const DEFAULT_SORT = Object.freeze({ key: 'rating', direction: -1 });
// Mens/Womens divisions (the /gender leg of the API) are single-gender: every
// game is same-gender doubles and no opposite-gender player is on a roster, so
// the mixed splits are always 0–0 and the gender filter has one choice.
// 'Male' | 'Female' | null.
const SINGLE_GENDER = DATA.meta.singleGender || null;
const COLUMNS = Object.freeze([
  { key: 'name', label: 'Player', align: 'left' },
  { key: 'team', label: 'Team', align: 'left' },
  { key: 'rating', label: 'Rating', align: 'right' },
  { key: 'conf', label: 'Conf', align: 'right' },
  { key: 'soo', label: 'Opp <br>Str', align: 'right' },
  { key: 'sop', label: 'Partner <br>Str', align: 'right' },
  { key: 'leagueRank', label: 'Lg <br>Rank', align: 'right' },
  { key: 'dupr', label: 'DUPR', align: 'right' },
  { key: 'matches', label: 'M', align: 'right' },
  { key: 'gamesPlayed', label: 'GP', align: 'right' },
  { key: 'wl', label: 'W–L', align: 'right' },
  { key: 'winPct', label: 'Win%', align: 'right' },
  { key: 'diff', label: '+/–', align: 'right' },
  { key: 'mixed', label: 'Mixed', align: 'right' },
  { key: 'gender', label: 'Gendr', align: 'right' },
  { key: 'clutch', label: 'Clutch', align: 'right' },
  // Mixed is always 0–0 in a single-gender division and Gendr just repeats W–L.
].filter(({ key }) => !(SINGLE_GENDER && (key === 'mixed' || key === 'gender'))));
const GAME_TYPE_LABELS = Object.freeze({
  mixed: ['MIX', 't-mixed'],
  female: ['W', 't-female'],
  male: ['M', 't-male'],
});
// A single-gender division plays one game type, so the Type pill says the same
// thing on every row: the header cell, the body cell and the week-row colspan
// all shrink by one there.
const GAME_TYPE_HEADER = SINGLE_GENDER ? '' : '<th class="l">Type</th>';
const GAME_LOG_COLSPAN = SINGLE_GENDER ? 5 : 6;
function renderGameTypeCell(gameType) {
  if (SINGLE_GENDER) return '';
  const [label, className] = GAME_TYPE_LABELS[gameType] || ['', ''];
  return `<td class="l"><span class="pill ${className}">${label}</span></td>`;
}
const RESULT_CLASS = Object.freeze({
  win: 'res-W',
  slightWin: 'res-slight-W',
  loss: 'res-L',
  slightLoss: 'res-slight-L',
  neutral: 'mut',
});
// Shared client utilities (cpl/shared.js loads before this file).
const {
  escapeHtml, slugify, formatDuprRating, getPlayerIndex, buildDuprRatingIndex, buildTeamAbbreviations,
  displayPodGroups, loadErrorHtml, formatDataAge,
} = window.CPLShared;

// Remembered view preferences: which sections you left collapsed, and which of
// the two standings / head-to-head views you read in. Everything here is a
// presentational choice you made about this page — no identifier, no personal
// data, nothing shared with any other origin or sent anywhere — so it is
// functional storage rather than tracking, and needs no consent banner under
// GDPR or the ePrivacy directive. localStorage rather than a cookie for the same
// reason: it never travels with a request.
//
// One key for the whole origin, deliberately not per division: a reader who
// collapses Top Duos means it for the league, not for one division's page.
const PREFS_STORAGE_KEY = 'cpl.ui.v1';

function readPrefs() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(PREFS_STORAGE_KEY) || 'null');
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
  } catch {
    // Private browsing, storage disabled by policy, or a value some older
    // version wrote that no longer parses. The page works without it.
    return {};
  }
}

let prefs = readPrefs();

function writePrefs(patch) {
  prefs = { ...prefs, ...patch };
  try {
    window.localStorage.setItem(PREFS_STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    // Quota or a blocked store. The choice still applies for this visit; it
    // just won't survive it.
  }
}

function collapsedSectionIds() {
  return Array.isArray(prefs.collapsed) ? prefs.collapsed : [];
}

// Hand-written abbreviations, for the cases the algorithm gets right but reads
// badly. `label` is the header form, `code` the cell chip; either may be given
// alone. An override is applied before uniqueness is resolved, so the rest of
// the division moves around it. Keep this near-empty: an entry here is a claim
// that this team is a special case, and every entry is one more thing to keep in
// step with the league's own naming.
const TEAM_ABBR_OVERRIDES = Object.freeze({});

const elements = {
  body: getRequiredElement('body'),
  captain: getRequiredElement('captain'),
  divisionSelect: getRequiredElement('division-select'),
  duoBody: getRequiredElement('duobody'),
  footer: getRequiredElement('foot'),
  gender: getRequiredElement('gender'),
  gridHost: getRequiredElement('grid-host'),
  gridViewToggle: getRequiredElement('grid-view'),
  head: getRequiredElement('head'),
  kicker: getRequiredElement('kicker'),
  mainView: getRequiredElement('mainview'),
  minGames: getRequiredElement('minq'),
  modalBody: getRequiredElement('mbody'),
  modalClose: getRequiredElement('mx'),
  modalHead: getRequiredElement('mhead'),
  overlay: getRequiredElement('overlay'),
  playerCount: getRequiredElement('plabel'),
  playoffsHost: getRequiredElement('playoffs-host'),
  playoffsSection: getRequiredElement('playoffs'),
  pod: getRequiredElement('pod'),
  search: getRequiredElement('search'),
  sectionToc: getRequiredElement('section-toc'),
  subhead: getRequiredElement('sub'),
  standingsView: getRequiredElement('standings-view'),
  swarmHost: getRequiredElement('swarm-host'),
  team: getRequiredElement('team'),
  teams: getRequiredElement('teams'),
  teamView: getRequiredElement('teamview'),
  title: getRequiredElement('title'),
};

// Scoped to the division rather than to each pod's grid. A pod-scoped pass would
// be a little shorter, but every pod of a division renders on this one page, and
// a team reading "HAMI" in one section and "KING" in the next is worse than a
// character or two of width.
//
// Built over the schedule as well as the standings, because the two don't always
// agree: 3.25 Womens has 13 matches against a team with no row in DATA.teams
// (Pickleball Kingdom Hillsborough, which the league dropped from the division
// without dropping its fixtures). The matrix never showed such a team — it only
// ever drew pairs of rostered teams — but the by-week grid names each opponent
// inside the cell, so an opponent missing here falls back to its full name and
// takes the whole column with it.
const TEAM_ABBR = Object.freeze(buildTeamAbbreviations(
  [...new Set([
    ...(Array.isArray(DATA.teams) ? DATA.teams : []).map((team) => team.name),
    ...(DATA.matches || []).flatMap((match) => [match.home, match.away]),
  ])].filter(Boolean),
  TEAM_ABBR_OVERRIDES,
));

// Teams with a row of their own. An opponent outside this set still gets a code
// and a key entry, but no row and no link — there's no team page to open.
const ROSTERED_TEAMS = new Set((Array.isArray(DATA.teams) ? DATA.teams : []).map((team) => team.name));

// Build a name → rating lookup from DATA (the division's data-<slug>.js loads
// before app.js).
// Game logs reference players by display name, so expectation math stays
// name-keyed; identity-sensitive lookups (routes, ranks, modals) use playerId.
const DUPR_RATINGS = window.DUPR_RATINGS || {};
const playerRatingByName = Object.fromEntries(
  DATA.players
    .filter((p) => p.rating != null)
    .map((p) => [p.name, p.rating]),
);

// DUPR converted onto the rating's points/game scale, for players with nothing
// earned in this division yet. The roster is rebuilt from the players array
// plus extraPlayerIds, which carries only the names with no player row of their
// own — subs, who don't appear in DATA.players but do appear in lineups.
const duprRatingByName = buildDuprRatingIndex(
  {
    ...Object.fromEntries(DATA.players.filter((p) => p.playerId).map((p) => [p.name, p.playerId])),
    ...(DATA.extraPlayerIds || {}),
  },
  DUPR_RATINGS,
);

// The rating to use for one player, preferring what they've earned in this
// division. A player with no league games yet falls back to their DUPR, so a
// lineup of newcomers still projects instead of showing a dash — at the cost of
// resting on an outside number, which `estimated` flags for the UI.
function resolvePlayerRating(name) {
  const rating = playerRatingByName[name];
  if (rating != null) return { rating, estimated: false };
  const derived = duprRatingByName[name];
  if (derived != null) return { rating: derived, estimated: true };
  return null;
}
const playersById = new Map(
  DATA.players
    .filter((player) => player.playerId)
    .map((player) => [player.playerId, player]),
);
const currentRatingRankByPid = new Map(
  DATA.players
    .filter((player) => player.rating != null)
    .slice()
    .sort((playerA, playerB) => (
      (playerB.rating - playerA.rating) ||
      (playerB.confidence - playerA.confidence) ||
      (playerB.ratingGames - playerA.ratingGames) ||
      playerA.name.localeCompare(playerB.name)
    ))
    .map((player, index) => [player.playerId, index + 1]),
);

function isActivationKey(event) {
  return event.key === 'Enter' || event.key === ' ';
}

// Team cards, player names and the "← All standings" link are real anchors with
// real hrefs, routed in-page on a plain click. A modified click is the browser's
// — open in a new tab, a new window, save — and preventing its default is how
// "open ← All standings in a new tab" ended up duplicating the tab it was on.
// (Middle-click fires auxclick, not click, so it was never affected.)
function isPlainClick(event) {
  return event.button === 0 &&
    !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;
}

// The fragment the page is currently showing, carried across in-page route
// changes so opening and closing a player modal doesn't lose the match block a
// team page was deep-linked to.
function currentFragment() {
  const raw = window.location.hash.slice(1);
  if (!raw) return '';
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
}

// href for a team page that preserves the current division selection, so team
// cards and grid cells are real links (middle-click / open-in-new-tab work).
// `fragment` deep-links into the page: a head-to-head cell knows which match it
// is about, and lands on that match's block rather than at the top of the team.
function teamHref(teamName, fragment = '') {
  const url = new URL(window.location.href);
  url.searchParams.set('team', slugify(teamName));
  url.searchParams.delete('player');
  url.hash = fragment ? `#${fragment}` : '';
  return `${url.pathname}${url.search}${url.hash}`;
}

// href for the division's main standings, with any team/player selection
// dropped. The "← All standings" link used to be href="#", which read as "this
// page" — so opening it in a new tab reproduced the team page it was trying to
// leave. It needs a real destination, not just a click handler.
function standingsHref() {
  const url = new URL(window.location.href);
  url.searchParams.delete('team');
  url.searchParams.delete('player');
  url.hash = '';
  return `${url.pathname}${url.search}`;
}

function playerHref(player) {
  const url = new URL(window.location.href);
  url.searchParams.set('player', routeKeyForPlayer(player));
  url.hash = '';
  return `${url.pathname}${url.search}`;
}

// The stable key a player is addressed by in URLs and data- attributes:
// playerId when known, slugified name as the legacy fallback.
function routeKeyForPlayer(player) {
  return player.playerId || slugify(player.name);
}

// Resolve a ?player= value: playerId first, then legacy name-slug links.
function findPlayerByRouteParam(param) {
  if (!param) return null;
  return playersById.get(param) ||
    DATA.players.find((candidate) => slugify(candidate.name) === param) ||
    null;
}
const ratingHistoryWeeks = Array.isArray(DATA.meta.ratingHistoryWeeks) && DATA.meta.ratingHistoryWeeks.length
  ? DATA.meta.ratingHistoryWeeks
  : (() => {
      const match = String(DATA.meta.weeks || '').match(/(\d+)(?!.*\d)/);
      return match ? [Number(match[1])] : [];
    })();

let sortKey = DEFAULT_SORT.key;
let sortDirection = DEFAULT_SORT.direction;
let rosterSortKey = 'rating';
let rosterSortDirection = -1;
let routeSetByApp = false;
// 'table' (one division-wide ranking) or 'cards' (pod-grouped). The table is the
// default: it answers "where does everyone stand" in one glance and one screen,
// where the cards make you scroll past a pod to compare across pods. Cards are
// still the league's own framing and stay a click away. Either way the choice is
// remembered: a reader who prefers one prefers it on the next division too, and
// re-picking it on every page was the friction that outweighed the clean start.
let standingsView = prefs.standingsView === 'cards' ? 'cards' : 'table';

function getRequiredElement(id) {
  const element = document.getElementById(id);

  if (!element) {
    throw new Error(`Missing required element: #${id}`);
  }

  return element;
}

function getCurrentDivision() {
  const currentSlug = DATA.meta.divisionSlug;
  if (currentSlug) {
    const matchedDivision = DIVISIONS.find((division) => division.slug === currentSlug);
    if (matchedDivision) {
      return matchedDivision;
    }
  }

  return DIVISIONS[0] || null;
}

function isMissing(value) {
  return value === null || value === undefined;
}

function teamLabel(teamName) {
  return (TEAM_ABBR[teamName] && TEAM_ABBR[teamName].label) || teamName;
}

function teamCode(teamName) {
  return (TEAM_ABBR[teamName] && TEAM_ABBR[teamName].code) || teamName;
}

function getTeamColor(teamName) {
  return TEAM_COLORS[teamName] ?? 'var(--accent)';
}

function parseLegacyHashRoute(hashValue) {
  const hash = hashValue || '';
  const teamPlayerMatch = hash.match(/^#team\/([^/]+)\/player\/(.+)$/);
  if (teamPlayerMatch) {
    return {
      team: decodeURIComponent(teamPlayerMatch[1]),
      player: decodeURIComponent(teamPlayerMatch[2]),
    };
  }

  const teamMatch = hash.match(/^#team\/(.+)$/);
  if (teamMatch) {
    return {
      team: decodeURIComponent(teamMatch[1]),
      player: '',
    };
  }

  const playerMatch = hash.match(/^#player\/(.+)$/);
  if (playerMatch) {
    return {
      team: '',
      player: decodeURIComponent(playerMatch[1]),
    };
  }

  return { team: '', player: '' };
}

function getRouteFromLocation() {
  const url = new URL(window.location.href);
  const team = url.searchParams.get('team') || '';
  const player = url.searchParams.get('player') || '';
  if (team || player) {
    return { team, player };
  }
  return parseLegacyHashRoute(url.hash);
}

function setRouteInUrl(route, { replace = false } = {}) {
  const url = new URL(window.location.href);
  if (route.team) {
    url.searchParams.set('team', route.team);
  } else {
    url.searchParams.delete('team');
  }
  if (route.player) {
    url.searchParams.set('player', route.player);
  } else {
    url.searchParams.delete('player');
  }
  url.hash = route.hash ? `#${route.hash}` : '';
  const nextUrl = url.toString();
  const currentUrl = window.location.href;
  if (nextUrl === currentUrl) {
    handleRoute();
    return;
  }
  if (replace) {
    history.replaceState(null, '', nextUrl);
  } else {
    history.pushState(null, '', nextUrl);
  }
  handleRoute();
}

function migrateLegacyHashRoute() {
  const url = new URL(window.location.href);
  if (!url.hash) return;
  if (url.searchParams.get('team') || url.searchParams.get('player')) return;
  const legacyRoute = parseLegacyHashRoute(url.hash);
  if (!legacyRoute.team && !legacyRoute.player) return;
  if (legacyRoute.team) {
    url.searchParams.set('team', legacyRoute.team);
  }
  if (legacyRoute.player) {
    url.searchParams.set('player', legacyRoute.player);
  }
  url.hash = '';
  history.replaceState(null, '', url.toString());
}

function formatSignedValue(value, digits) {
  const number = digits === undefined ? String(value) : value.toFixed(digits);
  return `${value >= 0 ? '+' : ''}${number}`;
}

function formatWinPct(wins, losses) {
  const total = wins + losses;
  return total ? ((100 * wins) / total).toFixed(1) : '0.0';
}

function formatRecordWithPct(wins, losses) {
  return `${wins}–${losses} (${formatWinPct(wins, losses)}%)`;
}

function formatDiffSpan(value) {
  // Zero isn't a win, so it doesn't get the green a real positive diff gets —
  // most commonly a team or player who hasn't played yet, which "+0" reads as
  // a favorable result rather than "no data".
  if (value === 0) return `<span class="mut">${EMPTY_VALUE}</span>`;
  const className = value > 0 ? 'pos-diff' : 'neg-diff';
  return `<span class="${className}">${formatSignedValue(value)}</span>`;
}

function getWinLossClass(won) {
  return won ? RESULT_CLASS.win : RESULT_CLASS.loss;
}

function pluralize(count, singular, plural = `${singular}s`) {
  return count === 1 ? singular : plural;
}

// Per-player detail (match log, game log, rating history, partners) ships in a
// separate detail-*.js the compiler writes next to the data file, and is only
// loaded once a player modal opens. A data file without meta.detailFile (a
// stale copy cached mid-deploy) resolves instantly to a summary-only modal.
let playerDetailsPromise = null;

function loadScriptOnce(src) {
  return new Promise((resolve) => {
    if (!src) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.onload = () => resolve();
    script.onerror = () => resolve(); // degrade rather than block the modal
    document.body.appendChild(script);
  });
}

// The cross-league finder index is the largest asset on the site (114 KB
// gzipped) and the only thing on a dashboard page that reads it is the "Also
// plays in" row inside a player modal. renderOtherLeaguesSummary already returns
// nothing when the index is absent, so a modal opened before it arrives simply
// omits that row — which is exactly what the comment here used to claim while
// the code sat inside ensurePlayerDetails' Promise.all and made every first
// modal open wait for it anyway. It is fired off on the side now, and the row is
// filled in on whatever modal is open by the time it lands.
let playerIndexPromise = null;

function loadPlayerIndexScript() {
  if (!playerIndexPromise) {
    playerIndexPromise = (
      window.PLAYER_INDEX_TABLES || window.PLAYER_INDEX_PACKED || window.PLAYER_INDEX
        ? Promise.resolve()
        : loadScriptOnce('../player-index.js')
    ).then(refreshOtherLeaguesRow);
  }
  return playerIndexPromise;
}

function mergePlayerDetails() {
  const details = (window.CPL_DETAILS || {})[DATA.meta.divisionSlug];
  if (!details) {
    return;
  }
  for (const player of DATA.players) {
    const detail = player.playerId ? details[player.playerId] : null;
    if (!detail) continue;
    player.log = detail.log || [];
    player.games = detail.games || [];
    player.ratingHistory = detail.ratingHistory || [];
    player.partners = detail.partners || [];
  }
}

function ensurePlayerDetails() {
  if (!playerDetailsPromise) {
    playerDetailsPromise = loadScriptOnce(DATA.meta.detailFile).then(mergePlayerDetails);
  }
  return playerDetailsPromise;
}

function getPlayerRatingHistory(player) {
  if (Array.isArray(player.ratingHistory) && player.ratingHistory.length) {
    return player.ratingHistory;
  }

  const fallbackWeek = ratingHistoryWeeks[ratingHistoryWeeks.length - 1];
  if (player.rating == null || fallbackWeek == null) {
    return [];
  }

  return [{
    week: fallbackWeek,
    rating: player.rating,
    confidence: player.confidence,
    rank: currentRatingRankByPid.get(player.playerId) ?? null,
    ratingGames: player.ratingGames,
    strengthOfPartners: player.strengthOfPartners,
    strengthOfOpponents: player.strengthOfOpponents,
  }];
}

function getLatestRatingSnapshot(player) {
  const history = getPlayerRatingHistory(player);
  return history.length ? history[history.length - 1] : null;
}

// --- Major sections: collapse state, table of contents, fragment links -------
//
// The dashboard is five or six full-width sections deep, and the ones at the
// bottom (Rating Distribution, Top Duos) were effectively undiscoverable — you
// had to already know they were there to scroll that far. Each section now has
// a stable id, a heading that collapses it, and an entry in a sticky table of
// contents. Collapsing is what makes the whole page reachable without paging
// through the Player Leaderboard.
//
// Sections are read out of the DOM rather than listed here: a new
// <section class="msec"> with an id and a `.sec-name` heading gets a contents
// entry and a collapse toggle by existing.

function getSections() {
  return [...elements.mainView.querySelectorAll('section.msec')];
}

function sectionLabel(section) {
  const name = section.querySelector('.sec-name');
  return (name && name.textContent.trim()) || section.id;
}

function isSectionCollapsed(section) {
  return collapsedSectionIds().includes(section.id);
}

function applySectionState(section) {
  const collapsed = isSectionCollapsed(section);
  const toggle = section.querySelector('.sec-toggle');
  const body = section.querySelector('.msec-body');
  section.classList.toggle('collapsed', collapsed);
  if (toggle) toggle.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
  if (body) body.hidden = collapsed;
}

function setSectionCollapsed(section, collapsed) {
  const ids = new Set(collapsedSectionIds());
  if (collapsed) {
    ids.add(section.id);
  } else {
    ids.delete(section.id);
  }
  writePrefs({ collapsed: [...ids] });
  applySectionState(section);
  renderSectionToc();
  // The bulk button's label changes width, which can change how the strip
  // wraps; and a body that was hidden a moment ago could not be measured for
  // overflow, so its table needs re-measuring now that it is on screen.
  refreshStickyLayout();
}

// The contents strip. A collapsed section still gets an entry — marked as such,
// because a link that silently opens what it points at is friendlier than one
// that vanishes when you put the section away.
function renderSectionToc() {
  const sections = getSections().filter((section) => !section.hidden);
  if (!sections.length) {
    elements.sectionToc.hidden = true;
    elements.sectionToc.innerHTML = '';
    return;
  }
  const links = sections.map((section) => {
    const collapsed = isSectionCollapsed(section);
    const className = collapsed ? ' class="toc-collapsed"' : '';
    const title = collapsed ? ' title="Collapsed — opens when you jump to it"' : '';
    return `<a href="#${section.id}"${className}${title}>${escapeHtml(sectionLabel(section))}</a>`;
  }).join('');
  const anyExpanded = sections.some((section) => !isSectionCollapsed(section));
  const bulkAction = anyExpanded ? 'collapse' : 'expand';
  const bulkLabel = anyExpanded ? 'Collapse all' : 'Expand all';
  // The strip is sticky, so it is also the way back up — the header, the
  // division selector and the summary all live above the first section and have
  // no entry of their own.
  elements.sectionToc.innerHTML =
    '<button type="button" class="toc-top" data-toc-top="1" title="Back to the top of the page">↑ Top</button>' +
    `${links}` +
    `<button type="button" class="toc-bulk" data-bulk="${bulkAction}">${bulkLabel}</button>`;
  elements.sectionToc.hidden = false;
  updateCurrentSection();
}

// Back to the header, and to a URL with no fragment left in it — otherwise a
// reload or a shared link would drop straight back to the section just left.
function scrollToPageTop() {
  const url = new URL(window.location.href);
  if (url.hash) {
    url.hash = '';
    history.replaceState(null, '', url.toString());
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --toc-height carries the strip's measured height to the stylesheet, which uses
// it for scroll-margin and for anything else sticky at the top of the viewport.
// Measured rather than assumed: the strip wraps to two rows on a narrow screen,
// and it isn't on the page at all while a team page is showing.
// The contents strip's height, kept so the scroll handler has it without
// re-measuring. Each section's heading height goes onto the section as a custom
// property instead, because it is the stylesheet that needs that one.
const stickyOffsets = { toc: 0 };

// The gap a fragment link leaves between the strip and the section it lands on.
// Published to the stylesheet, which spends it as scroll-margin, so that this
// one number is also the one the scroll spy allows for below — see
// updateCurrentSection. The stylesheet repeats it as a fallback for the moment
// before this runs.
const SECTION_SCROLL_GAP = 10;

function syncStickyOffset() {
  const visible = !elements.sectionToc.hidden && !elements.mainView.hidden;
  const height = visible
    ? Math.round(elements.sectionToc.getBoundingClientRect().height)
    : 0;
  stickyOffsets.toc = height;
  document.documentElement.style.setProperty('--toc-height', `${height}px`);
  document.documentElement.style.setProperty('--section-scroll-gap', `${SECTION_SCROLL_GAP}px`);
}

// How far down the viewport the sticky layer reaches. The contents strip is all
// of it: section headings used to stick below it too, and on a phone that cost
// four wrapped lines of heading before any content — a fifth of the screen, to
// say something the strip can say by highlighting one chip.
function stickyCeiling() {
  return stickyOffsets.toc;
}

// Which section the reader is in: the last one whose top has passed under the
// strip. Marked in the contents strip, which is now the only thing that says so.
//
// The ceiling has to reach past the scroll gap, not just the strip. Clicking a
// chip parks that section's top SECTION_SCROLL_GAP below the strip — that is what
// the scroll-margin is for — so a ceiling measured at the strip alone left the
// section you had just jumped to sitting ten pixels short of being "reached", and
// the chip stayed unmarked until the reader nudged the page down. The extra 2px
// covers subpixel rounding between the measured strip height and where the
// browser actually settles the scroll.
function updateCurrentSection() {
  const sections = getSections().filter((section) => !section.hidden);
  if (!sections.length) return;
  const ceiling = stickyCeiling() + SECTION_SCROLL_GAP + 2;
  let current = sections[0];
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= ceiling) current = section;
  });

  let currentLink = null;
  elements.sectionToc.querySelectorAll('a[href^="#"]').forEach((link) => {
    const on = link.getAttribute('href') === `#${current.id}`;
    link.classList.toggle('toc-current', on);
    if (on) {
      link.setAttribute('aria-current', 'true');
      currentLink = link;
    } else {
      link.removeAttribute('aria-current');
    }
  });
  keepChipInView(currentLink);
}

// On a phone the strip is one row that scrolls sideways, so the chip it is
// marking can be off the end of it. Nudged into view by scrolling the strip
// itself — never scrollIntoView, which would drag the page as well.
function keepChipInView(link) {
  if (!link) return;
  const strip = elements.sectionToc;
  if (strip.scrollWidth <= strip.clientWidth + 1) return;
  const stripBox = strip.getBoundingClientRect();
  const linkBox = link.getBoundingClientRect();
  if (linkBox.left < stripBox.left + 8) {
    strip.scrollLeft -= (stripBox.left + 8) - linkBox.left;
  } else if (linkBox.right > stripBox.right - 8) {
    strip.scrollLeft += linkBox.right - (stripBox.right - 8);
  }
}

// A table only needs a horizontal scroll container when it is actually wider
// than the page. While it has one, that container — not the viewport — is what
// `position: sticky` inside it resolves against, so a sticky column header can
// only stick to a box that never scrolls vertically, i.e. not at all. Measuring
// which wrappers really overflow and unlatching the rest is what lets their
// headers stick under the contents strip, and it beats guessing a breakpoint:
// whether the Player Leaderboard overflows depends on the window, the font and
// how many columns the division has.
function syncScrollWrappers() {
  // Only the view on screen: a hidden one measures zero and would be filed as
  // fitting, so both views get re-measured as they are shown.
  const host = elements.mainView.hidden ? elements.teamView : elements.mainView;
  host.querySelectorAll('.scroll, .grid-wrap').forEach((wrapper) => {
    // Measured as it stands. scrollWidth reports overflowing content whether or
    // not the wrapper is currently clipping, so the class never has to come off
    // to take a reading — and it must not, because dropping a wrapper's overflow
    // dismantles its scroll container and discards its scrollLeft. A table that
    // is scrolling keeps the class it already has, so a resize, a sort, a
    // collapse or a keystroke in the search box leaves the reader's column
    // alone. The extra pixel absorbs sub-pixel table widths.
    const fits = wrapper.scrollWidth <= wrapper.clientWidth + 1;
    wrapper.classList.toggle('scroll-fits', fits);
  });
}

// --- Mirrored column headers ------------------------------------------------
//
// A wrapper that has to scroll sideways is a scroll container, and a scroll
// container is what `position: sticky` inside it resolves against — so its own
// column header can never stick to the viewport, whatever offset it is given.
// The alternative was to cap the wrapper's height so it scrolled vertically too
// and the header had something to stick to, which works and is horrible: a box
// scrolling in two directions inside a page scrolling in one.
//
// So the header is mirrored instead. A fixed copy is drawn at the sticky
// ceiling while the real one is above it, with the real column widths copied
// cell by cell and its scrollLeft slaved to the wrapper's. The page keeps one
// scrollbar and the table keeps its full height.
//
// Only .scroll wrappers, which hold one table each. The head-to-head grid can
// render several tables into one wrapper and carries a left-sticking row band of
// its own; mirroring that is a bigger job than the header is worth, so a grid
// too wide to fit keeps its header in flow, as it always did.
const mirroredHeaders = [];
let mirrorHost = null;
let scrollFrame = 0;

function getMirrorHost() {
  if (!mirrorHost) {
    mirrorHost = document.createElement('div');
    mirrorHost.className = 'float-heads';
    document.body.appendChild(mirrorHost);
  }
  return mirrorHost;
}

function clearMirroredHeaders() {
  mirroredHeaders.forEach((mirror) => {
    mirror.wrapper.removeEventListener('scroll', onScrollFrame);
    mirror.box.remove();
  });
  mirroredHeaders.length = 0;
}

// Replays a click on the mirror onto the real header cell in the same column, so
// whatever delegated handler owns that table — sorting the leaderboard, sorting
// a roster — sees the click it expects. The mirror is a copy, not a control.
function forwardMirrorClick(mirror, event) {
  const cell = event.target.closest('th');
  if (!cell) return;
  const index = [...mirror.row.children].indexOf(cell);
  const original = mirror.sourceRow.children[index];
  if (original) original.click();
}

// Every table that needs a mirror: one per latched wrapper, except the
// head-to-head grid, where a wrapper holds a table per pod section and each
// needs its own. Keying on tables rather than wrappers is what lets the grid in
// — two tables in one wrapper can never both be crossing the ceiling, so at
// most one of their mirrors is ever showing.
function mirrorTargets() {
  const host = elements.mainView.hidden ? elements.teamView : elements.mainView;
  return [...host.querySelectorAll('.scroll:not(.scroll-fits), .grid-wrap:not(.scroll-fits)')]
    .flatMap((wrapper) => [...wrapper.querySelectorAll('table')]
      .map((table) => ({ wrapper, table })));
}

function buildMirroredHeader({ wrapper, table }) {
  const sourceRow = table.querySelector('thead tr');
  if (!sourceRow || !sourceRow.children.length) return;

  const box = document.createElement('div');
  box.className = 'float-head';
  box.hidden = true;
  // A copy, not a second header: a screen reader should walk the real one once,
  // not two identical column-header rows. tabindex="-1" below keeps the copy out
  // of the tab order; this keeps it out of the accessibility tree.
  box.setAttribute('aria-hidden', 'true');
  // The grid's header cells are styled through `.grid-wrap th` descendant
  // selectors — padding, border spacing, the row band's sticky left, and a
  // phone's narrower version of all three. Reproducing those for the mirror
  // would be a second copy to keep in step, so the mirror gets a `.grid-wrap` of
  // its own to sit inside instead. On an inner element rather than on the box:
  // that class also carries `overflow: visible`, and the box's own overflow is
  // what both its scrollLeft and the sticky row band depend on.
  let mount = box;
  if (wrapper.classList.contains('grid-wrap')) {
    const inner = document.createElement('div');
    inner.className = 'grid-wrap';
    box.appendChild(inner);
    mount = inner;
  }

  const mirrorTable = document.createElement('table');
  // The same classes, so the same CSS reaches the copied cells.
  mirrorTable.className = table.className;
  const head = document.createElement('thead');
  const row = sourceRow.cloneNode(true);
  // No duplicate ids, and no second set of tab stops: a keyboard user reaches
  // the real header, which is the one that owns the behaviour.
  row.removeAttribute('id');
  row.querySelectorAll('[id]').forEach((node) => node.removeAttribute('id'));
  row.querySelectorAll('[tabindex]').forEach((node) => node.setAttribute('tabindex', '-1'));
  head.appendChild(row);
  mirrorTable.appendChild(head);
  mount.appendChild(mirrorTable);
  getMirrorHost().appendChild(box);

  const mirror = { wrapper, table, sourceRow, box, mirrorTable, row, syncing: false };
  box.addEventListener('click', (event) => forwardMirrorClick(mirror, event));
  wrapper.addEventListener('scroll', onScrollFrame, { passive: true });
  // The mirror scrolls the table, not just the other way round. Without this the
  // only handle on a table's horizontal scroll is the scrollbar at the very
  // bottom of it — a thousand pixels below the columns you are trying to reach —
  // so the header you are looking at is made the handle. The guard is against
  // the two nudging each other back and forth.
  box.addEventListener('scroll', () => {
    if (mirror.syncing) return;
    mirror.syncing = true;
    wrapper.scrollLeft = box.scrollLeft;
    mirror.syncing = false;
  }, { passive: true });
  mirroredHeaders.push(mirror);
}

// The signature of what is currently mirrored: which wrappers, and the markup of
// each header row. A filter or a re-sort replaces the table under the wrapper, so
// the mirror has to be rebuilt when the header's own markup changes — a sort
// moves the `sorted` class. Typing in the search box does not touch it, and
// `render` runs on every keystroke, so the difference is worth checking: a
// rebuild clones and re-measures, and this only re-measures.
function mirrorSignature(targets) {
  return targets.map(({ wrapper, table }, index) => {
    const sourceRow = table.querySelector('thead tr');
    return `${wrapper.id}/${index} ${sourceRow ? sourceRow.innerHTML : ''}`;
  }).join('|');
}

let mirroredSignature = null;

function rebuildMirroredHeaders() {
  const targets = mirrorTargets();
  const signature = mirrorSignature(targets);
  if (signature === mirroredSignature && mirroredHeaders.length === targets.length) {
    measureMirroredHeaders();
    return;
  }
  clearMirroredHeaders();
  targets.forEach(buildMirroredHeader);
  mirroredSignature = signature;
  measureMirroredHeaders();
}

// Widths and the box's own geometry, which change with a render or a resize but
// not with a scroll. Kept apart from placement so a scroll frame does no more
// layout reading than it has to.
function measureMirroredHeaders() {
  mirroredHeaders.forEach((mirror) => {
    const { wrapper, sourceRow, box, mirrorTable, row } = mirror;
    const wrapperRect = wrapper.getBoundingClientRect();
    // ceil, not round: the header's bottom border lives inside the row's height,
    // and the box clips, so half a pixel short of it shaves the border off.
    const headHeight = Math.ceil(sourceRow.getBoundingClientRect().height);
    mirror.headHeight = headHeight;
    // The wrapper's content box, not its border box. The wrapper is a .panel with
    // a 1px border, so the table starts a pixel inside the rect — mirroring the
    // border box puts every column a pixel left of the real one and lets the
    // mirror overhang the panel edge.
    box.style.left = `${Math.round(wrapperRect.left + wrapper.clientLeft)}px`;
    box.style.width = `${wrapper.clientWidth}px`;
    // No height: the box wraps the mirror table, which reproduces the real
    // table's top edge — including the border-spacing above and below the header
    // row that the grid has and the other tables don't. Pinning the box to the
    // header row's own height instead clipped the grid's cells against that
    // spacing and let a strip of the rows beneath show through above them.

    // Every source width read before any mirror width is written. Interleaving
    // them makes each read flush the layout the previous write invalidated —
    // sixteen forced layouts on the leaderboard rather than one.
    const widths = [...sourceRow.children].map((cell) => cell.getBoundingClientRect().width);
    const tableWidth = mirror.table.getBoundingClientRect().width;
    [...row.children].forEach((cell, index) => {
      if (index >= widths.length) return;
      const width = `${widths[index]}px`;
      cell.style.width = width;
      cell.style.minWidth = width;
      cell.style.maxWidth = width;
    });
    // The real table's own width, which under table-layout: fixed leaves the
    // browser to account for whatever sits between the columns. Not the sum of
    // them: the grid is border-collapse: separate with border-spacing, so its
    // columns fall short of the table by every gap between them, and the
    // difference would be redistributed across the columns as misalignment. An
    // explicit width is also what beats the `table { width: 100% }` that would
    // otherwise squeeze the mirror into the width of its box.
    mirrorTable.style.width = `${tableWidth}px`;
  });
  placeMirroredHeaders();
}

// Shown only while the real header has passed above the ceiling and the table
// has not yet scrolled clear of it — outside that window there is nothing to
// mirror and a floating bar would be a lie.
function placeMirroredHeaders() {
  mirroredHeaders.forEach((mirror) => {
    const { wrapper, table, box } = mirror;
    const rect = table.getBoundingClientRect();
    const ceiling = stickyCeiling();
    const headHeight = mirror.headHeight || 0;
    const show = rect.top < ceiling && rect.bottom > ceiling + headHeight;
    box.hidden = !show;
    if (!show) return;
    box.style.top = `${ceiling}px`;
    // Not while the mirror is the one being dragged — it is already where the
    // reader put it, and writing back mid-gesture fights them for it.
    if (!mirror.syncing) box.scrollLeft = wrapper.scrollLeft;
  });
}

// Everything that has to answer to a scroll, in one frame: which section the
// strip should be marking, and where the mirrored headers sit. Coalesced,
// because a scroll fires far faster than a frame.
function onScrollFrame() {
  if (scrollFrame) return;
  scrollFrame = window.requestAnimationFrame(() => {
    scrollFrame = 0;
    updateCurrentSection();
    placeMirroredHeaders();
  });
}

// Everything the sticky layers measure, in one call. Cheap, and called after
// anything that changes what is on the page or how wide it is — the two view
// toggles, a filter, a collapse, a route change, a window resize.
function refreshStickyLayout() {
  syncStickyOffset();
  syncScrollWrappers();
  rebuildMirroredHeaders();
}

function applyAllSectionStates() {
  getSections().forEach(applySectionState);
  renderSectionToc();
  refreshStickyLayout();
}

function handleSectionToggleClick(event) {
  const toggle = event.target.closest('.sec-toggle');
  if (!toggle) return;
  const section = toggle.closest('section.msec');
  if (!section) return;
  setSectionCollapsed(section, !isSectionCollapsed(section));
}

function handleTocClick(event) {
  if (event.target.closest('.toc-top')) {
    scrollToPageTop();
    return;
  }
  const button = event.target.closest('.toc-bulk');
  if (!button) return;
  const collapse = button.dataset.bulk === 'collapse';
  const ids = collapse ? getSections().filter((s) => !s.hidden).map((s) => s.id) : [];
  writePrefs({ collapsed: ids });
  applyAllSectionStates();
}

// A fragment link has to open whatever it points into before anything can
// scroll to it: a collapsed section body and a closed <details> are both
// display:none and have no position on the page. Applies to the contents strip,
// to "how the Rating works ↑" (which sits in a section of its own and points
// into the Player Leaderboard), and to a head-to-head cell landing on a match
// block inside a team page.
function revealFragmentTarget(id) {
  const target = id ? document.getElementById(id) : null;
  if (!target) return null;
  // Both views keep their markup while hidden, so getElementById still finds a
  // match block on a team page you have already left. It has no position to
  // scroll to and no business being marked as where you arrived.
  const owningView = target.closest('#mainview, #teamview');
  if (owningView && owningView.hidden) return null;
  const section = target.closest('section.msec');
  if (section) {
    // Sections only exist on the main view, so a #section fragment that arrives
    // on a team-page URL points at something not on screen. Refusing it matters
    // more than it looks: expanding a section is a write to the stored
    // preferences, and a stale fragment must not quietly undo the reader's
    // collapse choice for a section they can't even see.
    if (section.hidden || elements.mainView.hidden) return null;
    if (isSectionCollapsed(section)) setSectionCollapsed(section, false);
  }
  let details = target.tagName === 'DETAILS' ? target : target.closest('details');
  while (details) {
    details.open = true;
    details = details.parentElement ? details.parentElement.closest('details') : null;
  }
  // A match block's own game-by-game, one level down rather than up. Arriving
  // from a head-to-head cell you already read the score off the cell — the
  // games are what you came for, so the block opens as well as scrolls.
  if (target.classList.contains('wk-block')) {
    const gameLog = target.querySelector('details');
    if (gameLog) gameLog.open = true;
  }
  return target;
}

function navigateToFragment(id, { updateHash = true, smooth = true } = {}) {
  const target = revealFragmentTarget(id);
  if (!target) return false;
  if (updateHash) {
    const url = new URL(window.location.href);
    url.hash = `#${id}`;
    // replaceState, not pushState: jumping around the contents of one page
    // shouldn't fill the back button with stops on the way.
    history.replaceState(null, '', url.toString());
  }
  target.scrollIntoView({ block: 'start', behavior: smooth ? 'smooth' : 'auto' });
  // A section heading is its own landmark; a match block deep inside a team page
  // needs saying which one of a dozen identical-looking blocks you arrived at.
  if (!target.classList.contains('msec')) {
    target.classList.add('fragment-flash');
    window.setTimeout(() => target.classList.remove('fragment-flash'), 1800);
  }
  return true;
}

function handleFragmentLinkClick(event) {
  if (!isPlainClick(event)) return;
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;
  const raw = link.getAttribute('href').slice(1);
  if (!raw) return;
  let id = raw;
  try {
    id = decodeURIComponent(raw);
  } catch {
    // A literal '%' in a fragment is not an escape sequence — use it as written.
  }
  if (navigateToFragment(id)) event.preventDefault();
}

// The fragment a page was opened with, applied once its content exists. The
// browser can't do this itself: nothing on a dashboard page is in the document
// when it parses the URL.
function applyLocationFragment({ smooth = false } = {}) {
  const raw = window.location.hash.slice(1);
  if (!raw) return;
  let id = raw;
  try {
    id = decodeURIComponent(raw);
  } catch {
    // See handleFragmentLinkClick.
  }
  navigateToFragment(id, { updateHash: false, smooth });
}

// Both leagues' division lists are loaded on both dashboards (see the script
// tags in index.html), keyed by the global each bootstrap exposes.
const LEAGUE_GROUP_LABELS = Object.freeze({
  TRAVEL_DIVISIONS: 'Cross Club League',
  LOCAL_DIVISIONS: 'Local Leagues',
});

function currentLeagueDir() {
  return DATA.meta.leagueType === 'travel' ? 'travel' : 'local';
}

function leagueDirOf(dashboardPath) {
  return String(dashboardPath || '').split('/').filter(Boolean).pop() || '';
}

// One group per league, in the order the bootstraps registered. Falls back to
// this league alone if the other bootstrap didn't load — a browser holding a
// stale bootstrap-runtime.js that predates the registry still gets a working
// selector, just without the cross-league half.
function divisionSelectorGroups() {
  const registered = Array.isArray(window.CPL_LEAGUES) ? window.CPL_LEAGUES : [];
  const groups = registered
    .filter((league) => Array.isArray(league.divisions) && league.divisions.length)
    .map((league) => ({
      label: LEAGUE_GROUP_LABELS[league.key] || league.key,
      leagueDir: leagueDirOf(league.dashboardPath),
      divisions: league.divisions,
    }))
    .filter((group) => group.leagueDir);
  if (groups.some((group) => group.leagueDir === currentLeagueDir())) return groups;
  return [{
    label: LEAGUE_GROUP_LABELS[`${currentLeagueDir().toUpperCase()}_DIVISIONS`] || 'Divisions',
    leagueDir: currentLeagueDir(),
    divisions: DIVISIONS,
  }];
}

function renderDivisionSelector() {
  const currentSlug = getCurrentDivision()?.slug || '';
  const currentDir = currentLeagueDir();
  const groups = divisionSelectorGroups();

  // A single group needs no heading — grouping two divisions of one league under
  // one label is noise. Two leagues is the case the grouping exists for: it's
  // what makes a Travel → Local switch possible without going back to /cpl.
  const renderOptions = (group) => group.divisions.map((div) => {
    const label = !div.clubName ? div.divisionName : `${div.clubName} — ${div.divisionName}`;
    const selected = group.leagueDir === currentDir && div.slug === currentSlug ? ' selected' : '';
    return `<option value="${group.leagueDir}:${div.slug}"${selected}>${escapeHtml(label)}</option>`;
  }).join('');

  elements.divisionSelect.innerHTML = groups.length > 1
    ? groups.map((group) => (
        `<optgroup label="${escapeHtml(group.label)}">${renderOptions(group)}</optgroup>`
      )).join('')
    : renderOptions(groups[0]);

  elements.divisionSelect.addEventListener('change', () => {
    const [leagueDir, slug] = elements.divisionSelect.value.split(':');
    if (!slug) return;
    // Rewrite the pathname in place rather than resolving a relative URL: the
    // scheme, host and file name all have to survive, so that this works from a
    // file:// preview of index.html as well as from the served directory.
    const url = new URL(window.location.href);
    const fileName = (/[^/]+\.html?$/i.exec(url.pathname) || [''])[0];
    let dir = fileName ? url.pathname.slice(0, -fileName.length) : url.pathname;
    if (!dir.endsWith('/')) dir += '/';
    // The two dashboards are siblings, so crossing leagues swaps one segment.
    if (leagueDir !== currentDir) dir = dir.replace(/[^/]+\/$/, `${leagueDir}/`);
    url.pathname = `${dir}${fileName}`;
    // A division switch is a switch to that division, not to whichever team of
    // it happens to share a name with the team you were looking at, so ?team=
    // and ?player= go. Carrying them opened a same-named team in the new
    // division — a duplicate of the tab you were already on — or, with no match,
    // left a dead ?team= trailing the URL. ?d= is the only parameter that
    // survives, and it is the one being changed.
    url.search = '';
    url.searchParams.set('d', slug);
    url.hash = '';
    window.location.href = url.toString();
  });
}

function renderHeader() {
  const currentDivision = getCurrentDivision();
  const isTravel = DATA.meta.leagueType === 'travel';
  const clubName = DATA.meta.clubName || currentDivision?.clubName || '';
  const divisionName = DATA.meta.divisionName || currentDivision?.divisionName || '';
  const titlePrefix = divisionName ? `${divisionName} ` : '';
  const typicalDay = DATA.meta.typicalDay || null;
  if (isTravel) {
    const regionName = DATA.meta.regionName || 'Philadelphia';
    elements.kicker.textContent = typicalDay
      ? `Cross Club League • ${regionName} • ${typicalDay}`
      : `Cross Club League • ${regionName}`;
  } else {
    if (!clubName) {
      throw new Error('Missing clubName for current CPL dataset.');
    }
    elements.kicker.textContent = typicalDay ? `${clubName} • ${typicalDay}` : clubName;
  }
  elements.title.textContent = `${titlePrefix}Standings & Player Stats`;

  // One HTML file serves every division in its league, so the <title> in it can
  // only ever be right for one of them — it read "Bounce Pickleball" on
  // Flemington, Robbinsville and Chantilly alike, in the tab and in every share
  // preview. The division is only known once its dataset has loaded, so this is
  // the earliest the real name can be set.
  const titleSubject = isTravel
    ? ['Cross Club League', divisionName].filter(Boolean).join(' ')
    : [clubName, divisionName].filter(Boolean).join(' ');
  document.title = titleSubject ? `${titleSubject} Standings` : 'League Standings';
}

function renderSummary() {
  const currentSlug = DATA.meta.divisionSlug || getCurrentDivision()?.slug || '';
  const isTravel = DATA.meta.leagueType === 'travel';
  const leagueLabel = isTravel ? 'Cross Club League API' : 'Local League API';
  // Provisional results count toward everything on the page; the note says how
  // many of the totals rest on results the league hasn't confirmed yet.
  const provisionalCount = DATA.meta.provisionalMatches || 0;
  const provisionalNote = provisionalCount
    ? ` (${provisionalCount} provisional)`
    : '';
  // No fallback here printed the literal "as of undefined" to readers whenever a
  // shard predated meta.asOf. formatDataAge owns every degenerate case, including
  // the date-only stamps older shards carry.
  const age = formatDataAge(DATA.meta.asOf);
  elements.subhead.innerHTML =
    escapeHtml(`${DATA.meta.matchesPlayed} matches played${provisionalNote} (Weeks ${DATA.meta.weeks}) • ` +
      `${DATA.meta.totalPlayers} players • `) +
    `<span class="asof"${age.title ? ` title="${escapeHtml(age.title)}"` : ''}>${escapeHtml(age.text)}</span>`;
  elements.footer.textContent =
    // "Live from" invited the reading that this page reflects the league right
    // now. It is a static snapshot the bot recompiles every six hours.
    `Compiled from the ${leagueLabel} • division ${currentSlug} • Weeks ${DATA.meta.weeks}, ` +
    `${DATA.meta.matchesPlayed} completed matches${provisionalNote}. ` +
    (provisionalCount
      ? `Provisional matches are ones the league has not officially closed out, ` +
        `scored from posted lineups; they count toward standings, records and ` +
        `ratings, and are labelled wherever they appear. `
      : '') +
    `"PF/PA" are the league's recorded ` +
    `points for/against; +/- is their difference. Win% = game wins ÷ games played. ` +
    `Rating is a ridge-regularized adjusted plus-minus: each player's net points per ` +
    `game above an average player, controlling for partner and opponent strength. The ` +
    `"Conf" column shows how much of each rating is backed by real game evidence ` +
    `(0–100%) — early-season ratings are low-confidence and will shift as more ` +
    `games are played.`;

  // The bootstrap sets this when neither the division's DUPR shard nor the
  // league-wide table loaded. Without a note, an entire division reads as though
  // nobody in it has a DUPR rating — a wrong claim about real people, made by an
  // empty column.
  if (window.CPL_DUPR_UNAVAILABLE) {
    elements.footer.textContent += ' The DUPR table did not load on this visit, ' +
      'so the DUPR column is blank for everyone — reload to try again.';
  }
}

// The label for a schedule section — the set of teams that actually play each
// other, which is what the head-to-head grids are split by. A section borrows the
// league's pod names, joined when it spans more than one, and stays numbered when
// the league published none.
function podLabel(pod) {
  const names = DATA.meta && DATA.meta.podNames;
  const name = names && names[pod - 1];
  return name || `Pod ${pod}`;
}

// The league's own pod for a team ("Southeast"), shown as a tag. Suppressed when
// the heading the card sits under already names it, so the label isn't rendered
// twice.
function reportedPodTag(team, groupLabel) {
  const reported = team && team.reportedPod;
  if (!reported || reported === groupLabel) return '';
  return `<span class="tag pod-tag">${escapeHtml(reported)}</span>`;
}

// A schedule row against a team from another pod otherwise reads like any other
// week, so it names the opponent's pod. Only reported pods compare cleanly —
// schedule sections can span several of them, which is the cross-pod case itself.
function crossPodTag(teamName, opponentName) {
  const teams = DATA.teams || [];
  const ours = teams.find((team) => team.name === teamName);
  const theirs = teams.find((team) => team.name === opponentName);
  const ourPod = ours && ours.reportedPod;
  const theirPod = theirs && theirs.reportedPod;
  if (!ourPod || !theirPod || ourPod === theirPod) return '';
  return ` • <span class="tag cross-pod-tag">Pod: ${escapeHtml(theirPod)}</span>`;
}

function teamCard(team, rank, groupLabel) {
  return `
        <a class="tcard" href="${escapeHtml(teamHref(team.name))}" data-team="${slugify(team.name)}" style="border-top:3px solid ${getTeamColor(team.name)}">
          <div class="seed">#${rank}</div>
          <h3>${escapeHtml(team.name)}${reportedPodTag(team, groupLabel)}</h3>
          <div class="rec">${team.w}–${team.l} <small>match${pluralize(team.w + team.l, '', 'es')}</small></div>
          <div class="pts">Games <b class="txt-strong">${formatRecordWithPct(team.gw, team.gl)}</b></div>
          <div class="pts">PF ${team.pf} • PA ${team.pa} • <span class="d">${formatDiffSpan(team.diff)}</span></div>
          <div class="go">View team →</div>
        </a>
      `;
}

// The groups the cards are split into, and the groups a team is ranked within
// wherever the page states a rank. The rule lives in shared.js, because the
// pipeline ranks by it too — see displayPodGroups there for why the cards go by
// the league's pods while the head-to-head grids keep the schedule sections.
function cardPodGroups() {
  return displayPodGroups(DATA.teams, DATA.meta || {});
}

// The group a single team's card sits in, for the pages that state its rank
// within it. Falls back to the whole division for a team the grouping missed.
function podGroupOf(team) {
  const groups = cardPodGroups();
  return groups.find((group) => group.teams.some((candidate) => candidate.name === team.name))
    || { label: null, teams: DATA.teams };
}

function renderTeamCards() {
  const groups = cardPodGroups();
  // An undivided division has nothing to head, so the cards go in one grid and
  // are seeded across the whole division. Otherwise each group gets a heading
  // and is seeded within itself — DATA.teams already arrives in ranked order,
  // so filtering preserves it.
  if (groups.length === 1 && !groups[0].label) {
    elements.teams.innerHTML = groups[0].teams
      .map((team, index) => teamCard(team, index + 1, null))
      .join('');
    return;
  }
  elements.teams.innerHTML = groups
    .map(({ label, teams }) => {
      const cards = teams.map((team, index) => teamCard(team, index + 1, label)).join('');
      return `<div class="pod-section"><h3 class="pod-heading">${escapeHtml(label)}</h3><div class="tgrid">${cards}</div></div>`;
    })
    .join('');
}

// The Pod cell in the standings table. The cards group by the league's own pods
// and carry the pod name as their heading; this view is one flat division-wide
// ranking with no groups in it, so the same fact has to travel in a column. A
// schedule-section label describes nothing on screen here — and where a section
// spans several pods it reads as a combination like "Northeast / Southeast /
// Southwest", the least useful string available for a sortable column. So the
// league's own pod is the answer in both views; the section label only stands in
// where the league reported none.
function teamPodCell(team, podCount) {
  if (team.reportedPod) return escapeHtml(team.reportedPod);
  return podCount > 1 ? escapeHtml(podLabel(team.pod)) : '';
}

// The card view seeds within a pod, which is what the schedule and playoffs run
// on but leaves the division leader unstated. This view drops the pod grouping
// and ranks every team against every other, keeping the pod as a column so the
// two readings stay reconcilable. DATA.teams already arrives in division order.
function renderTeamTable() {
  const podCount = DATA.meta && DATA.meta.podCount > 1 ? DATA.meta.podCount : 1;
  const podCells = DATA.teams.map((team) => teamPodCell(team, podCount));
  // A column every team answers the same way sorts nothing and explains nothing.
  const showPod = new Set(podCells.filter(Boolean)).size > 1;
  const podHead = showPod ? '<th scope="col" class="l">Pod</th>' : '';
  const rows = DATA.teams
    .map((team, index) => {
      const podCell = showPod ? `<td class="l trow-pod">${podCells[index]}</td>` : '';
      return `
        <tr class="trow" data-team="${slugify(team.name)}">
          <td class="l trow-seed">${index + 1}</td>
          <td class="l trow-name">
            <span class="teamdot" style="background:${getTeamColor(team.name)}"></span><a class="pname" href="${escapeHtml(teamHref(team.name))}">${escapeHtml(team.name)}</a>
          </td>
          ${podCell}
          <td class="txt-strong">${team.w}–${team.l}</td>
          <td>${formatRecordWithPct(team.gw, team.gl)}</td>
          <td>${team.pf}</td>
          <td>${team.pa}</td>
          <td>${formatDiffSpan(team.diff)}</td>
        </tr>
      `;
    })
    .join('');
  elements.teams.innerHTML = `
    <div class="panel scroll stable-wrap">
      <table class="stable">
        <thead><tr>
          <th scope="col" class="l">#</th>
          <th scope="col" class="l">Team</th>
          ${podHead}
          <th scope="col">Matches</th>
          <th scope="col">Games</th>
          <th scope="col">PF</th>
          <th scope="col">PA</th>
          <th scope="col">+/−</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function renderTeams() {
  elements.teams.classList.toggle('teams-table', standingsView === 'table');
  if (standingsView === 'table') {
    renderTeamTable();
  } else {
    renderTeamCards();
  }
  // Cards and table are different widths, and only the table has a header to
  // stick.
  refreshStickyLayout();
}

function renderStandingsViewToggle() {
  elements.standingsView.querySelectorAll('button[data-view]').forEach((button) => {
    const on = button.dataset.view === standingsView;
    button.classList.toggle('on', on);
    button.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
}

function handleStandingsViewClick(event) {
  const button = event.target.closest('button[data-view]');
  if (!button || button.dataset.view === standingsView) return;
  standingsView = button.dataset.view;
  writePrefs({ standingsView });
  renderStandingsViewToggle();
  renderTeams();
}

function renderTeamFilterOptions() {
  elements.team.innerHTML = [
    '<option value="">All teams</option>',
    ...DATA.teams.map(
      (team) => `<option value="${escapeHtml(team.name)}">${escapeHtml(team.name)}</option>`,
    ),
  ].join('');
}

function renderPodFilterOptions() {
  const podCount = DATA.meta && DATA.meta.podCount > 1 ? DATA.meta.podCount : 1;
  const reported = (DATA.meta && DATA.meta.reportedPods) || null;
  // Filter on the league's own pods when it names them: that's the finer and more
  // meaningful grouping, even where it cuts across the schedule sections. Divisions
  // without reported pods fall back to filtering by section.
  const options = reported && reported.length > 1
    ? reported.map((name) => ({ value: name, label: name }))
    : Array.from({ length: podCount }, (_, i) => ({ value: String(i + 1), label: podLabel(i + 1) }));

  if (options.length <= 1) {
    elements.pod.hidden = true;
    return;
  }
  elements.pod.dataset.mode = reported && reported.length > 1 ? 'reported' : 'section';
  elements.pod.innerHTML = [
    '<option value="">All pods</option>',
    ...options.map(({ value, label }) => `<option value="${escapeHtml(value)}">${escapeHtml(label)}</option>`),
  ].join('');
  elements.pod.hidden = false;
}

function renderTableHead() {
  elements.head.innerHTML = COLUMNS.map(({ key, label, align }) => {
    const classes = [];

    if (align === 'left') {
      classes.push('l');
    }

    if (key === sortKey) {
      classes.push('sorted');
    }

    const classAttribute = classes.length > 0 ? ` class="${classes.join(' ')}"` : '';
    const ariaSort = key === sortKey ? (sortDirection === -1 ? 'descending' : 'ascending') : 'none';
    return `<th scope="col" data-k="${key}" tabindex="0" aria-sort="${ariaSort}"${classAttribute}>${label}</th>`;
  }).join('');
}

function getSortValue(player, key) {
  switch (key) {
    case 'rating':
      return isMissing(player.rating) ? Number.NEGATIVE_INFINITY : player.rating;
    case 'conf':
      return player.confidence;
    case 'soo':
      return isMissing(player.strengthOfOpponents)
        ? Number.NEGATIVE_INFINITY
        : player.strengthOfOpponents;
    case 'sop':
      return isMissing(player.strengthOfPartners)
        ? Number.NEGATIVE_INFINITY
        : player.strengthOfPartners;
    case 'wl':
      return player.wins * 1000 - player.losses;
    case 'mixed':
      return player.mixedWins;
    case 'gender':
      return player.genderWins;
    case 'clutch':
      return player.clutchWins;
    case 'dupr':
      return isMissing(DUPR_RATINGS[player.playerId]?.rating) ? Number.NEGATIVE_INFINITY : DUPR_RATINGS[player.playerId].rating;
    default:
      return player[key];
  }
}

function renderPlayerName(player) {
  const captainTag = player.isCaptain ? ' <sup class="captain-tag" title="Team captain">C</sup>' : '';
  const subTag = player.outsideSub ? ' <span class="sub-tag" title="Outside sub — not a rostered team member">sub</span>' : '';
  return `<a class="pname" href="${escapeHtml(playerHref(player))}" data-player="${escapeHtml(routeKeyForPlayer(player))}">${escapeHtml(player.name)}</a>${captainTag}${subTag}`;
}

function renderTeamCell(teamName) {
  return `
    <span class="teamdot" style="background:${getTeamColor(teamName)}"></span>${escapeHtml(teamName)}
  `;
}

function renderRatingCell(player) {
  if (isMissing(player.rating)) {
    return EMPTY_VALUE;
  }

  const className = player.rating >= 0 ? 'pos-diff' : 'neg-diff';
  return `
    <span class="rating ${className}" title="${player.ratingGames} games">
      ${formatSignedValue(player.rating, 1)}
    </span>
  `;
}

function renderConfidenceCell(player) {
  if (isMissing(player.rating)) {
    return EMPTY_VALUE;
  }

  const matchLabel = pluralize(player.matches, 'match');
  const title =
    `${player.confidence}% confidence — share of this rating driven by real game evidence ` +
    `(${player.matches} ${matchLabel}, ${player.ratingGames} games) vs. the average-player prior`;

  return `
    <span class="confwrap" title="${escapeHtml(title)}">
      <span class="confbar"><i style="width:${player.confidence}%"></i></span>
      <span class="confnum">${player.confidence}%</span>
    </span>
  `;
}

function renderStrengthCell(player, key) {
  const value = key === 'soo' ? player.strengthOfOpponents : player.strengthOfPartners;

  if (isMissing(value)) {
    return EMPTY_VALUE;
  }

  const counterpart = key === 'soo' ? 'opponents faced' : 'partners played with';
  const tooltip =
    `Average rating of ${counterpart}, on the same points/game scale. ` +
    'Above 0 = stronger than league average.';

  return `<span class="sos" title="${escapeHtml(tooltip)}">${formatSignedValue(value, 1)}</span>`;
}

function renderCell(player, key) {
  switch (key) {
    case 'name':
      return renderPlayerName(player);
    case 'team':
      return renderTeamCell(player.team);
    case 'wl':
      return `<b>${player.wins}</b>–${player.losses}`;
    case 'diff':
      return formatDiffSpan(player.diff);
    case 'pointsWon':
      return `<span class="pf">${player.pointsWon}</span>`;
    case 'mixed':
      return `${player.mixedWins}–${player.mixedLosses}`;
    case 'gender':
      return `${player.genderWins}–${player.genderLosses}`;
    case 'clutch':
      return `${player.clutchWins}–${player.clutchLosses}`;
    case 'rating':
      return renderRatingCell(player);
    case 'conf':
      return renderConfidenceCell(player);
    case 'soo':
    case 'sop':
      return renderStrengthCell(player, key);
    case 'leagueRank':
      return isMissing(player.leagueRank)
        ? EMPTY_VALUE
        : `<span class="lgrank">#${player.leagueRank}</span>`;
    case 'dupr':
      if (isMissing(DUPR_RATINGS[player.playerId]?.rating)) return EMPTY_VALUE;
      return formatDuprRating(DUPR_RATINGS[player.playerId]);
    case 'winPct':
    case 'ppg':
      return player[key].toFixed(1);
    default:
      return escapeHtml(player[key]);
  }
}

function getFilteredPlayers() {
  const query = elements.search.value.trim().toLowerCase();
  const teamFilter = elements.team.value;
  const podFilter = elements.pod.value;
  const podFilterMode = elements.pod.dataset.mode;
  const genderFilter = elements.gender.value;
  const matchFilter = Number(elements.minGames.value);
  const captainFilter = elements.captain.value;

  return DATA.players.filter(
    (player) =>
      (!query || player.name.toLowerCase().includes(query)) &&
      (!teamFilter || player.team === teamFilter) &&
      (!podFilter || (() => {
        const t = DATA.teams.find((tm) => tm.name === player.team);
        if (!t) return false;
        return podFilterMode === 'reported' ? t.reportedPod === podFilter : t.pod === Number(podFilter);
      })()) &&
      (!genderFilter || player.gender === genderFilter) &&
      (!captainFilter || player.isCaptain) &&
      (matchFilter === 0 || (matchFilter === 1 ? player.matches === 1 : player.matches >= matchFilter)),
  );
}

function comparePlayers(playerA, playerB, key = sortKey, direction = sortDirection) {
  const valueA = getSortValue(playerA, key);
  const valueB = getSortValue(playerB, key);
  const winDiff = playerB.winPct - playerA.winPct;

  if (valueA === 'NR' && valueB === 'NR') return winDiff;
  if (valueA === 'NR') return 1;
  if (valueB === 'NR') return -1;

  const diff = (valueA - valueB);
  return (diff !== 0 ? diff : winDiff) * direction;
}


function renderRows(rows) {
  elements.body.innerHTML = rows
    .map((player, index) => {
      const rankClass =
        sortKey === 'winPct' && sortDirection === -1 && index < 3 ? ` g${index + 1}` : '';
      const rankMarkup = `<span class="pos${rankClass}">${index + 1}</span>`;

      const cells = COLUMNS.map(({ key, align }, columnIndex) => {
        const classAttribute = align === 'left' ? ' class="l"' : '';
        const prefix = columnIndex === 0 ? rankMarkup : '';
        return `<td${classAttribute}>${prefix}${renderCell(player, key)}</td>`;
      }).join('');

      return `<tr>${cells}</tr>`;
    })
    .join('');

  elements.playerCount.textContent = `${rows.length} shown`;
}

function updateSortedHeader() {
  elements.head.querySelectorAll('th').forEach((headerCell) => {
    const sorted = headerCell.dataset.k === sortKey;
    headerCell.classList.toggle('sorted', sorted);
    headerCell.setAttribute('aria-sort', sorted ? (sortDirection === -1 ? 'descending' : 'ascending') : 'none');
  });
}

function render() {
  const rows = getFilteredPlayers().sort(comparePlayers);
  updateSortedHeader();
  renderRows(rows);
  // A filter can change the widest cell in a column, and so whether the
  // leaderboard still fits the page.
  refreshStickyLayout();
}

function describeStrength(value, strongLabel, weakLabel) {
  if (value >= 1) {
    return strongLabel;
  }

  if (value <= -1) {
    return weakLabel;
  }

  return 'average';
}

function sosNarrative(player) {
  if (isMissing(player.rating)) {
    return '';
  }

  const opponentWord = describeStrength(player.strengthOfOpponents, 'tough', 'weak');
  const partnerWord = describeStrength(player.strengthOfPartners, 'strong', 'weak');
  let tail = '';

  if (player.winPct >= 80 && player.strengthOfOpponents <= -0.5 && player.strengthOfPartners >= 0.5) {
    tail = ' Their record is helped by favorable conditions.';
  } else if (player.winPct < 50 && player.strengthOfOpponents >= 0.5) {
    tail = ' Their record is dragged down by a hard schedule.';
  } else if (player.strengthOfPartners <= -0.5 && player.rating >= 0.5) {
    tail = ' Strong showing given below-average partners.';
  }

  return `Rated <b>${formatSignedValue(player.rating)}</b> pts/game vs. an average player ` +
    `(${player.confidence}% confidence), facing <b>${opponentWord}</b> opponents ` +
    `(${formatSignedValue(player.strengthOfOpponents, 1)}) alongside <b>${partnerWord}</b> ` +
    `partners (${formatSignedValue(player.strengthOfPartners, 1)}).${tail}`;
}

function renderPartnerChip(partner, className) {
  return `
    <span class="pchip" data-player="${escapeHtml(partner.pid || partner.name)}" tabindex="0" role="button" aria-label="Open ${escapeHtml(partner.name)}'s player detail">
      <b>${escapeHtml(partner.name)}</b>
      <span class="${className}">${formatSignedValue(partner.synergy, 1)}</span>
      <span class="mut">(${partner.n}g)</span>
    </span>
  `;
}

function renderPartnersLine(player) {
  const partners = player.partners || [];

  if (partners.length === 0) {
    return '';
  }

  const best = partners[0];
  const worst = partners[partners.length - 1];
  let markup = `<div class="mh-partners"><span class="pl">Chemistry</span> best ${renderPartnerChip(best, 'pos-diff')}`;

  if (partners.length > 1 && worst !== best) {
    markup += ` &nbsp;•&nbsp; toughest fit ${renderPartnerChip(worst, 'neg-diff')}`;
  }

  return `${markup}</div>`;
}

function renderModalHeader(player) {
  const genderLabel = player.gender === 'Male' ? 'Men' : 'Women';
  const ratingClass = player.rating >= 0 ? 'pos-diff' : 'neg-diff';
  const diffClass = player.diff >= 0 ? 'pos-diff' : 'neg-diff';
  const narrative = !isMissing(player.rating) ? `<p class="mh-narr">${sosNarrative(player)}</p>` : '';
  const partnersLine = renderPartnersLine(player);
  const latestRatingSnapshot = getLatestRatingSnapshot(player);
  const divisionRankStat = latestRatingSnapshot?.rank == null
    ? ''
    : `<div class="mh-stat"><div class="n">#${latestRatingSnapshot.rank}</div><div class="l">DIV RANK</div></div>`;
  const leagueRankStat = isMissing(player.leagueRank)
    ? ''
    : `<div class="mh-stat"><div class="n">#${player.leagueRank}</div><div class="l">LG RANK</div></div>`;
  const duprStat = isMissing(DUPR_RATINGS[player.playerId]?.rating)
    ? ''
    : `<div class="mh-stat"><div class="n">${formatDuprRating(DUPR_RATINGS[player.playerId])}</div><div class="l">DUPR</div></div>`;
  const captainTag = player.isCaptain ? ' <sup class="captain-tag" title="Team captain">C</sup>' : '';

  return `
    <div class="mh-name">${escapeHtml(player.name)}${captainTag}</div>
    <div class="mh-sub">
      <span class="teamdot" style="background:${getTeamColor(player.team)}"></span>
      ${escapeHtml(player.team)} • ${genderLabel} • season totals
    </div>
    <div class="mh-stats">
      <div class="mh-stat"><div class="n ${ratingClass}">${isMissing(player.rating) ? EMPTY_VALUE : formatSignedValue(player.rating)}</div><div class="l">RATING</div></div>
      <div class="mh-stat"><div class="n">${isMissing(player.rating) ? EMPTY_VALUE : `${player.confidence}%`}</div><div class="l">CONFIDENCE</div></div>
      <div class="mh-stat"><div class="n">${isMissing(player.strengthOfOpponents) ? EMPTY_VALUE : formatSignedValue(player.strengthOfOpponents)}</div><div class="l">OPP STR</div></div>
      <div class="mh-stat"><div class="n">${isMissing(player.strengthOfPartners) ? EMPTY_VALUE : formatSignedValue(player.strengthOfPartners)}</div><div class="l">PARTNER STR</div></div>
      <div class="mh-stat"><div class="n">${player.wins}–${player.losses}</div><div class="l">RECORD</div></div>
      <div class="mh-stat"><div class="n">${player.winPct.toFixed(0)}%</div><div class="l">WIN RATE</div></div>
      <div class="mh-stat"><div class="n">${player.pointsWon}</div><div class="l">POINTS FOR</div></div>
      <div class="mh-stat"><div class="n ${diffClass}">${formatSignedValue(player.diff)}</div><div class="l">DIFF</div></div>
      <div class="mh-stat"><div class="n">${player.matches}</div><div class="l">MATCH${pluralize(player.matches, '', 'ES')}</div></div>
      ${divisionRankStat}
      ${leagueRankStat}
      ${duprStat}
    </div>
    ${narrative}
    ${partnersLine}
  `;
}

function renderRatingTrendChart(player, history) {
  const weeks = ratingHistoryWeeks.length ? ratingHistoryWeeks : history.map((snapshot) => snapshot.week);
  if (!weeks.length) {
    return '';
  }

  const ratings = history.map((snapshot) => snapshot.rating).filter((rating) => rating != null);
  if (!ratings.length) {
    return '';
  }

  let domainMin = Math.min(...ratings, 0);
  let domainMax = Math.max(...ratings, 0);
  if (domainMin === domainMax) {
    domainMin -= 1;
    domainMax += 1;
  } else {
    const pad = Math.max(0.5, (domainMax - domainMin) * 0.2);
    domainMin -= pad;
    domainMax += pad;
  }

  const W = 640;
  const H = 180;
  const left = 46;
  const right = 12;
  const top = 14;
  const bottom = 34;
  const firstWeek = weeks[0];
  const lastWeek = weeks[weeks.length - 1];
  const xScale = (week) => {
    if (firstWeek === lastWeek) {
      return (left + (W - right)) / 2;
    }
    return left + ((week - firstWeek) / (lastWeek - firstWeek)) * (W - left - right);
  };
  const yScale = (rating) => top + ((domainMax - rating) / (domainMax - domainMin)) * (H - top - bottom);
  const yTicks = Array.from({ length: 5 }, (_, index) => {
    if (index === 4) {
      return domainMax;
    }
    return domainMin + ((domainMax - domainMin) * index) / 4;
  });
  const historyByWeek = new Map(history.map((snapshot) => [snapshot.week, snapshot]));
  const segments = [];
  let currentSegment = [];

  for (const week of weeks) {
    const snapshot = historyByWeek.get(week);
    if (!snapshot) {
      if (currentSegment.length) {
        segments.push(currentSegment.join(' '));
        currentSegment = [];
      }
      continue;
    }
    currentSegment.push(`${xScale(week).toFixed(1)},${yScale(snapshot.rating).toFixed(1)}`);
  }
  if (currentSegment.length) {
    segments.push(currentSegment.join(' '));
  }

  const lineMarkup = segments
    .map((points) => `<polyline fill="none" stroke="${getTeamColor(player.team)}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" points="${points}"/>`)
    .join('');
  const dotMarkup = history
    .map((snapshot, index) => {
      const cx = xScale(snapshot.week).toFixed(1);
      const cy = yScale(snapshot.rating).toFixed(1);
      const radius = index === history.length - 1 ? 5 : 4;
      const rankLabel = snapshot.rank == null ? '' : ` • #${snapshot.rank}`;
      return `
        <circle cx="${cx}" cy="${cy}" r="${radius}" fill="${getTeamColor(player.team)}" stroke="rgb(0 0 0 / 30%)" stroke-width="1.2">
          <title>Week ${snapshot.week}: ${formatSignedValue(snapshot.rating, 1)}${rankLabel} • ${snapshot.confidence}% confidence</title>
        </circle>
      `;
    })
    .join('');
  const tickMarkup = weeks
    .map((week) => {
      const x = xScale(week).toFixed(1);
      return `
        <line x1="${x}" y1="${top}" x2="${x}" y2="${H - bottom}" stroke="var(--line)" stroke-dasharray="2 4" opacity="0.45"/>
        <text x="${x}" y="${H - 11}" text-anchor="middle" font-size="11" fill="var(--mut)">W${week}</text>
      `;
    })
    .join('');
  const yAxisMarkup = yTicks
    .map((tick) => {
      const y = yScale(tick).toFixed(1);
      const isZero = Math.abs(tick) < 0.05;
      return `
        <line x1="${left}" y1="${y}" x2="${W - right}" y2="${y}" stroke="var(--line)" stroke-width="${isZero ? 1.3 : 1}"${isZero ? '' : ' stroke-dasharray="2 4"'} opacity="${isZero ? 0.8 : 0.35}"/>
        <text x="${left - 8}" y="${(Number(y) + 3.5).toFixed(1)}" text-anchor="end" font-size="10.5" fill="var(--mut)">${formatSignedValue(Math.round(tick * 10) / 10, 1)}</text>
      `;
    })
    .join('');
  const lastSnapshot = history[history.length - 1];
  const lastX = xScale(lastSnapshot.week).toFixed(1);
  const lastY = yScale(lastSnapshot.rating).toFixed(1);
  const labelYOffset = Number(lastY) > ((H - bottom + top) / 2) ? -10 : 16;
  const currentLabel = `
    <text x="${lastX}" y="${(Number(lastY) + labelYOffset).toFixed(1)}" text-anchor="middle" font-size="11" font-weight="700" fill="${getTeamColor(player.team)}">
      ${formatSignedValue(lastSnapshot.rating, 1)}
    </text>
  `;

  return `
    <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Player rating by week">
      ${yAxisMarkup}
      <line x1="${left}" y1="${top}" x2="${left}" y2="${H - bottom}" stroke="var(--line)" stroke-width="1.1"/>
      ${tickMarkup}
      ${lineMarkup}
      ${dotMarkup}
      ${currentLabel}
    </svg>
  `;
}

function renderRatingHistorySection(player) {
  const history = getPlayerRatingHistory(player);
  if (!history.length) {
    return '';
  }

  const firstSnapshot = history[0];
  const latestSnapshot = history[history.length - 1];
  const change = latestSnapshot.rating - firstSnapshot.rating;
  const changeClass = change >= 0 ? 'pos-diff' : 'neg-diff';
  const currentRank = latestSnapshot.rank == null ? EMPTY_VALUE : `#${latestSnapshot.rank}`;
  const trendSummary = history.length > 1
    ? `Change since Wk ${firstSnapshot.week}`
    : 'Current snapshot';
  const rows = history
    .map((snapshot, index) => {
      const previousSnapshot = index > 0 ? history[index - 1] : null;
      const diff = previousSnapshot == null ? null : snapshot.rating - previousSnapshot.rating;
      const roundedDiff = diff == null ? null : Math.round(diff * 10) / 10;
      const rankCell = snapshot.rank == null ? EMPTY_VALUE : `#${snapshot.rank}`;
      return `
        <div class="rhist-row">
          <div class="wk">Wk ${snapshot.week}</div>
          <div class="val ${snapshot.rating >= 0 ? 'pos-diff' : 'neg-diff'}">${formatSignedValue(snapshot.rating, 1)}</div>
          <div class="df ${roundedDiff == null || roundedDiff === 0 ? 'mut' : roundedDiff > 0 ? 'pos-diff' : 'neg-diff'}">${roundedDiff == null || roundedDiff === 0 ? EMPTY_VALUE : formatSignedValue(roundedDiff, 1)}</div>
          <div class="rk">${rankCell}</div>
          <div class="cf">${snapshot.confidence}%</div>
        </div>
      `;
    })
    .join('');

  return `
    <section class="mtrend">
      <div class="gtitle">Rating by week <span>cumulative through each week • rank = among rated players in this division</span></div>
      <div class="mtrend-chart">${renderRatingTrendChart(player, history)}</div>
      <div class="mtrend-summary">
        <div><span class="lab">Current</span><b class="${latestSnapshot.rating >= 0 ? 'pos-diff' : 'neg-diff'}">${formatSignedValue(latestSnapshot.rating, 1)}</b></div>
        <div><span class="lab">Rank</span><b>${currentRank}</b></div>
        <div><span class="lab">${trendSummary}</span><b class="${changeClass}">${formatSignedValue(change, 1)}</b></div>
      </div>
      <div class="rhist-head">
        <span>Week</span>
        <span>Rating</span>
        <span>Diff</span>
        <span>Rank</span>
        <span>Conf</span>
      </div>
      <div class="rhist">${rows}</div>
    </section>
  `;
}

function renderMatchLogRows(player) {
  return (player.log || [])
    .map(
      (game) => `
        <tr${game.sub ? ' class="subrow"' : ''}>
          <td class="l">Wk ${game.week}${game.sub ? ` <span class="sub-tag" title="Intra-league sub — not counted in match totals">sub</span>` : ''}</td>
          <td class="l"><span class="teamdot" style="background:${getTeamColor(game.opp)}"></span>${game.homeAway === 'H' ? 'vs' : '@'} ${escapeHtml(game.opp)}${game.sub && game.subFor ? ` <span class="mut">(for ${escapeHtml(game.subFor)})</span>` : ''}</td>
          <td><b>${game.w}</b>–${game.l}</td>
          <td>${game.pf}–${game.pa}</td>
          ${SINGLE_GENDER ? '' : `<td>${game.mx[0]}–${game.mx[1]}</td><td>${game.gn[0]}–${game.gn[1]}</td>`}
          <td>${game.cl[0]}–${game.cl[1]}</td>
          <td class="res-${game.teamRes}">${game.teamRes} ${game.teamGW}–${game.teamGL}</td>
        </tr>
      `,
    )
    .join('');
}

// The expected scoring margin for pair [nameA, nameB] vs [nameC, nameD] as
// `{ margin, estimated }`: margin is positive when [A,B] are favoured and null
// when any of the four has neither a league rating nor a DUPR to stand in for
// one; estimated is true when at least one slot leaned on DUPR.
const NO_EXPECTATION = Object.freeze({ margin: null, estimated: false });

function computeExpectedOutcome(nameA, nameB, nameC, nameD) {
  const ours = [nameA, nameB].map(resolvePlayerRating);
  const theirs = [nameC, nameD].map(resolvePlayerRating);
  const all = [...ours, ...theirs];
  if (all.some((entry) => entry === null)) return NO_EXPECTATION;
  const sum = (pair) => pair.reduce((total, entry) => total + entry.rating, 0);
  return {
    margin: Math.round((sum(ours) - sum(theirs)) * 10) / 10,
    estimated: all.some((entry) => entry.estimated),
  };
}

// A small pill marking a projection that rests on a DUPR stand-in rather than
// on games played in this division.
function renderEstimateTag(estimated) {
  if (!estimated) return '';
  return ' <span class="exp-tag exp-dupr" title="Estimated from DUPR — at least one player has no rating from this division yet">DUPR</span>';
}

// Returns a small HTML pill showing whether the result matched the expectation.
// `expectedMargin` is the margin from computeExpectedOutcome (positive = this
// pair favoured). `won` is whether this pair won the game.
function renderExpectationTag(expectedMargin, won) {
  if (expectedMargin === null) return '';
  const absMargin = Math.abs(expectedMargin);
  if (absMargin < 1.0) return '';
  const favoured = expectedMargin > 0;
  const diff = absMargin.toFixed(1);
  if ((favoured && won) || (!favoured && !won)) {
    return ' <span class="exp-tag exp-met" title="Result matched the rating-based expectation">exp</span>';
  }
  if (!favoured && won) {
    return ` <span class="exp-tag exp-upset" title="Upset win — overcame a ${diff} pt/game pair-rating deficit">↑</span>`;
  }
  return ` <span class="exp-tag exp-drop" title="Upset loss — despite a ${diff} pt/game pair-rating advantage">↓</span>`;
}

// Takes an expectation from computeExpectedOutcome and describes it for the
// projection columns. Labels come back clean; `estimateTag` is the pill marking
// a DUPR stand-in, left to the caller to place. Callers rendering a table where
// every row is estimated say so once above it instead, rather than repeating an
// identical pill down the column.
function describeProjectedOutcome(expectation) {
  const { margin, estimated } = expectation || NO_EXPECTATION;
  if (margin === null) {
    return {
      outcome: 'unrated',
      resultClass: RESULT_CLASS.neutral,
      estimated: false,
      estimateTag: '',
      marginLabel: EMPTY_VALUE,
      resultLabel: '—',
      displayLabel: '—',
    };
  }
  const marginLabel = formatSignedValue(margin, 1);
  const describe = (outcome, resultClass, label) => ({
    outcome,
    resultClass,
    estimated,
    estimateTag: renderEstimateTag(estimated),
    marginLabel,
    resultLabel: label,
    displayLabel: `${label} (${marginLabel})`,
  });
  if (Math.abs(margin) < 1.0) return describe('tie', RESULT_CLASS.neutral, 'Even');
  if (margin > 2.5) return describe('win', RESULT_CLASS.win, 'Proj W');
  if (margin > 0) return describe('win', RESULT_CLASS.slightWin, 'Slight W');
  if (margin < -2.5) return describe('loss', RESULT_CLASS.loss, 'Proj L');
  return describe('loss', RESULT_CLASS.slightLoss, 'Slight L');
}

// A lineup slot the league hasn't filled in yet. In the days before a match one
// team routinely submits before the other, and a single slot can sit open
// inside an otherwise-set pair, so the slot is rendered rather than the whole
// game hidden — the pairs that are settled are the useful part.
const TBD_SLOT = '<span class="tbd-slot" title="Not posted yet">TBD</span>';

function renderPendingPair(names) {
  return (names || []).map((name) => (name ? escapeHtml(name) : TBD_SLOT)).join(' / ');
}

function isPairPosted(names) {
  return (names || []).length > 0 && names.every(Boolean);
}

// A game with an open slot can't be projected, but that is a different thing
// from four named players who have no rating between them. It gets its own
// outcome so summarizeProjections can say "waiting on a lineup" rather than
// "missing ratings", which would blame the model for the league's paperwork.
const INCOMPLETE_PROJECTION = Object.freeze({
  outcome: 'incomplete',
  resultClass: RESULT_CLASS.neutral,
  estimated: false,
  estimateTag: '',
  marginLabel: EMPTY_VALUE,
  resultLabel: EMPTY_VALUE,
  displayLabel: EMPTY_VALUE,
});

function projectPendingGame(ourPlayers, theirPlayers) {
  if (!isPairPosted(ourPlayers) || !isPairPosted(theirPlayers)) return INCOMPLETE_PROJECTION;
  return describeProjectedOutcome(
    computeExpectedOutcome(ourPlayers[0], ourPlayers[1], theirPlayers[0], theirPlayers[1]),
  );
}

// How far along each side's submission is, across a scheduled match's whole
// lineup. `usLabel`/`themLabel` are the team names, so the note reads the same
// from either team's page. Only the side that is behind gets named: saying a
// team has posted 32 of 32 spends a clause on the absence of news, and what a
// reader wants off this line is who they are waiting on. The count is the
// shortfall for the same reason — "17/32 posted" and "15 still to come" are one
// fact, and stating both is what made this line hard to scan.
function summarizeLineupPosting(entries, usLabel, themLabel) {
  const total = entries.length;
  let usPosted = 0, themPosted = 0;
  for (const { usPlayers, themPlayers } of entries) {
    if (isPairPosted(usPlayers)) usPosted++;
    if (isPairPosted(themPlayers)) themPosted++;
  }
  const complete = total > 0 && usPosted === total && themPosted === total;
  const behind = [[usLabel, total - usPosted], [themLabel, total - themPosted]]
    .filter(([, missing]) => missing > 0);
  const describe = ([label, missing]) => (
    `<b>${escapeHtml(label)}</b> ${missing === total ? 'for the whole lineup' : `for ${missing} of ${total}`}`
  );
  return {
    total,
    complete,
    note: complete ? '' : `Waiting on ${behind.map(describe).join(' and ')}`,
  };
}

// The second line under a pending match's headline: who the lineup is still
// waiting on, then whatever qualifies the projection. Set smaller and dimmer so
// the eye takes the projection first and reads the conditions on it only if it
// wants them — inline they compete with the number they are qualifying.
function renderPendingSubline(posting, tally) {
  const parts = [posting.note, ...tally.caveats].filter(Boolean);
  if (!parts.length) return '';
  return `<div class="match-subline">${parts.join(' • ')}</div>`;
}

// Returns an inline HTML fragment summarising expected and upset outcomes for
// rated games, e.g. "• exp W 2  exp L 1  ups W 1  ups L 1". Returns '' when
// there are no rated games to report.
function renderUpsetSummary(expectedWins, expectedLosses, upsetWins, upsetLosses) {
  if (!expectedWins && !expectedLosses && !upsetWins && !upsetLosses) return '';
  const parts = [];
  if (expectedWins) {
    parts.push(`<span class="exp-tag exp-upset" title="Expected wins (rating-based favorite won)">${expectedWins} exp W</span>`);
  }
  if (expectedLosses) {
    parts.push(`<span class="exp-tag exp-drop" title="Expected losses (rating-based underdog lost)">${expectedLosses} exp L</span>`);
  }
  if (upsetWins) {
    parts.push(`<span class="exp-tag exp-upset" title="Upset wins (won despite a pair-rating deficit)">${upsetWins} ups W</span>`);
  }
  if (upsetLosses) {
    parts.push(`<span class="exp-tag exp-drop" title="Upset losses (lost despite a pair-rating advantage)">${upsetLosses} ups L</span>`);
  }
  return ` • ${parts.join('&ensp;')}`;
}

// Rolls a pending match's per-game projections into the one-line summary above
// the table, and decides how the DUPR estimate is disclosed. When every
// projection rests on DUPR — the whole of week 1, before anyone has a league
// rating — repeating the pill on each row says nothing that one note above the
// table doesn't; the pill is reserved for the mixed case, where it marks which
// rows in particular are standing on an outside number.
function summarizeProjections(projections) {
  let wins = 0, losses = 0, ties = 0, unrated = 0, incomplete = 0, estimated = 0;
  for (const projection of projections) {
    if (projection.outcome === 'win') wins++;
    if (projection.outcome === 'loss') losses++;
    if (projection.outcome === 'tie') ties++;
    if (projection.outcome === 'unrated') unrated++;
    if (projection.outcome === 'incomplete') incomplete++;
    if (projection.estimated) estimated++;
  }
  const projected = projections.length - unrated - incomplete;
  const allEstimated = projected > 0 && estimated === projected;
  // Everything qualifying the headline number comes back separately, for the
  // caller to set below it rather than in the same chain of bullets. Strung
  // inline they read as equals of the projection, and half a dozen equals in a
  // row is a line nobody finishes.
  const caveats = [];
  if (allEstimated) {
    caveats.push('<span title="No player in this match has a rating from league play yet, so every projection is converted from DUPR">projected from DUPR</span>');
  } else if (estimated) {
    caveats.push(`${estimated} ${pluralize(estimated, 'game', 'games')} projected from DUPR`);
  }
  if (unrated) caveats.push(`${unrated} ${pluralize(unrated, 'lineup', 'lineups')} missing ratings`);
  // With no side fully posted there is nothing to project, and "Projected games
  // 0–0" would read as a forecast rather than as an absence of one. The count of
  // games waiting is the posting note's job, so the headline just steps aside.
  if (!projected) {
    return {
      summary: '<span class="mut">No games can be projected yet</span>',
      caveats,
      rowTag: () => '',
    };
  }
  // Whenever the record covers only part of the match — lineups still open,
  // ratings missing, or both — it says so, so a 3–7–3 that omits nineteen games
  // can't be read as the whole night. The three numbers on these two lines add
  // up to the game count, which is what makes them checkable against each other.
  const scope = projected < projections.length
    ? ` <span class="mut">from ${projected} of ${projections.length} games</span>`
    : '';
  return {
    summary: `Projected games <b>${wins}–${losses}${ties ? `–${ties}` : ''}</b>${scope}`,
    caveats,
    rowTag: (projection) => (allEstimated ? '' : projection.estimateTag),
  };
}

function getProjectedPlayerGames(player) {
  const projectedGames = [];
  for (const match of DATA.matches || []) {
    if (match.complete || !(match.games || []).length) continue;
    for (const game of match.games || []) {
      const playerOnHomeSide = game.h?.includes(player.name);
      const playerOnAwaySide = game.a?.includes(player.name);
      if (!playerOnHomeSide && !playerOnAwaySide) continue;
      const usPlayers = playerOnHomeSide ? game.h : game.a;
      const themPlayers = playerOnHomeSide ? game.a : game.h;
      const partner = usPlayers[0] === player.name ? usPlayers[1] : usPlayers[0];
      projectedGames.push({
        wk: match.week,
        opp: playerOnHomeSide ? match.away : match.home,
        t: game.t,
        with: partner || '',
        vs: [themPlayers[0] || '', themPlayers[1] || ''],
        projection: projectPendingGame(usPlayers, themPlayers),
      });
    }
  }
  projectedGames.sort((a, b) => a.wk - b.wk);

  const playoffProjected = [];
  for (const match of DATA.playoffs || []) {
    if (match.complete || !(match.games || []).length) continue;
    for (const game of match.games || []) {
      const playerOnHomeSide = game.h?.includes(player.name);
      const playerOnAwaySide = game.a?.includes(player.name);
      if (!playerOnHomeSide && !playerOnAwaySide) continue;
      const usPlayers = playerOnHomeSide ? game.h : game.a;
      const themPlayers = playerOnHomeSide ? game.a : game.h;
      const partner = usPlayers[0] === player.name ? usPlayers[1] : usPlayers[0];
      playoffProjected.push({
        wk: match.round || 1,
        opp: playerOnHomeSide ? match.away : match.home,
        t: game.t,
        with: partner || '',
        vs: [themPlayers[0] || '', themPlayers[1] || ''],
        projection: projectPendingGame(usPlayers, themPlayers),
        isPlayoff: true,
      });
    }
  }
  playoffProjected.sort((a, b) => a.wk - b.wk);

  return [...projectedGames, ...playoffProjected];
}

function renderGameLogRows(player, projectedGames = []) {
  let gameLog = '';
  let lastWeek = null;

  for (const game of player.games || []) {
    if (game.wk !== lastWeek) {
      lastWeek = game.wk;
      const subNote = game.sub && game.subFor
        ? ` <span class="mut">(sub for ${escapeHtml(game.subFor)})</span>`
        : '';
      gameLog += `
        <tr class="wkrow"><td colspan="${GAME_LOG_COLSPAN}" class="l">Week ${game.wk} • vs ${escapeHtml(game.opp)}${subNote}</td></tr>
      `;
    }

    const resultClass = getWinLossClass(game.w);
    const forfeitTag = game.ff ? ' <span class="ff-tag">F</span>' : '';
    const partnerCell = game.ff
      ? '<span class="ff-tag" title="Forfeit / walkover — not counted in the rating">forfeit</span>'
      : escapeHtml(game.with);
    const opponentCell = game.ff ? '' : `${escapeHtml(game.vs[0])} / ${escapeHtml(game.vs[1])}`;
    const expectation = game.ff
      ? NO_EXPECTATION
      : computeExpectedOutcome(player.name, game.with, game.vs[0], game.vs[1]);
    const expectTag = renderExpectationTag(expectation.margin, game.w === 1);
    const projection = describeProjectedOutcome(expectation);
    gameLog += `
      <tr${game.ff ? ' class="ffrow"' : (game.sub ? ' class="subrow"' : '')}>
        ${renderGameTypeCell(game.t)}
        <td class="l">${partnerCell}</td>
        <td class="l">${opponentCell}</td>
        <td class="${resultClass}">${game.f}–${game.a}</td>
        <td class="${resultClass} l">${game.w ? 'W' : 'L'}${forfeitTag}${expectTag}</td>
        <td class="${projection.resultClass}">${projection.displayLabel}${projection.estimateTag}</td>
      </tr>
    `;
  }

  let lastIsPlayoff = false;
  for (const game of projectedGames) {
    if (game.wk !== lastWeek || (game.isPlayoff || false) !== lastIsPlayoff) {
      lastWeek = game.wk;
      lastIsPlayoff = game.isPlayoff || false;
      const weekLabel = game.isPlayoff ? `Playoffs` : `Week ${game.wk}`;
      gameLog += `
        <tr class="wkrow wkrow-projected">
          <td colspan="${GAME_LOG_COLSPAN}" class="l"><span class="mut">(projected)</span> ${weekLabel} • vs ${escapeHtml(game.opp)}</td>
        </tr>
      `;
    }

    const { projection } = game;
    gameLog += `
      <tr${projection.outcome === 'incomplete' ? ' class="tbdrow"' : ''}>
        ${renderGameTypeCell(game.t)}
        <td class="l">${game.with ? escapeHtml(game.with) : TBD_SLOT}</td>
        <td class="l">${renderPendingPair(game.vs)}</td>
        <td class="mut">${EMPTY_VALUE}</td>
        <td class="mut">Pending</td>
        <td class="${projection.resultClass}">${projection.displayLabel}${projection.estimateTag}</td>
      </tr>
    `;
  }

  return gameLog;
}

function renderOtherLeaguesSummary(player) {
  const index = getPlayerIndex();
  if (!Array.isArray(index) || !index.length) return '';

  const currentSlug = DATA.meta.divisionSlug || '';
  const currentLeague = DATA.meta.leagueType || '';

  // Match by playerId when available, fall back to exact name match.
  const others = index.filter((entry) => {
    const sameSlug = entry.slug === currentSlug && entry.league === currentLeague;
    if (sameSlug) return false;
    if (player.playerId && entry.playerId) {
      return entry.playerId === player.playerId;
    }
    return entry.name === player.name;
  });

  if (!others.length) return '';

  const rootPath = '../';
  const rows = others.map((entry) => {
    const badgeClass = entry.league === 'travel' ? 'travel' : 'local';
    const badgeLabel = entry.league === 'travel' ? 'CPL' : 'Local';
    const locationParts = [];
    if (entry.club) locationParts.push(escapeHtml(entry.club));
    locationParts.push(escapeHtml(entry.division));
    const locationText = locationParts.join(' — ');
    const href = `${rootPath}${entry.league}/?d=${encodeURIComponent(entry.slug)}&team=${encodeURIComponent(slugify(entry.team))}&player=${encodeURIComponent(entry.playerId || slugify(player.name))}`;
    return `<a class="other-league-entry" href="${escapeHtml(href)}">` +
      `<span class="league-badge ${badgeClass}">${badgeLabel}</span>` +
      `<span class="other-league-location">${locationText}</span>` +
      `<span class="other-league-team">\u00b7 ${escapeHtml(entry.team)}</span>` +
      `</a>`;
  }).join('');

  return `<div class="other-leagues"><span class="other-leagues-label">Also plays in</span>${rows}</div>`;
}

// The player whose modal is on screen. Two things read it: the late-arriving
// finder index, which fills in one row without rebuilding the modal, and the
// detail shard, which must not paint into a modal the reader has since replaced
// by tapping a second name.
let openModalPlayer = null;

function refreshOtherLeaguesRow() {
  if (!openModalPlayer || elements.overlay.hidden) return;
  const host = elements.modalBody.querySelector('.other-leagues-host');
  if (host) host.innerHTML = renderOtherLeaguesSummary(openModalPlayer);
}

// Shown for the second or three a phone spends fetching the detail shard. The
// shapes match what replaces them, so the modal settles rather than jumps.
const MODAL_SKELETON = `
  <div class="mskel" aria-hidden="true">
    <div class="mskel-line" style="width:38%"></div>
    <div class="mskel-block"></div>
    <div class="mskel-line" style="width:60%"></div>
    <div class="mskel-line" style="width:52%"></div>
    <div class="mskel-line" style="width:56%"></div>
  </div>
  <p class="mskel-note">Loading match history…</p>
`;

function renderModalBody(player) {
  const projectedGames = getProjectedPlayerGames(player);
  const matchRows = renderMatchLogRows(player);
  const gameRows = renderGameLogRows(player, projectedGames);
  const gameCount = (player.games || []).length;
  const projectedCount = projectedGames.length;
  const ratingHistorySection = renderRatingHistorySection(player);

  let expectedWins = 0, expectedLosses = 0, upsetWins = 0, upsetLosses = 0;
  for (const game of player.games || []) {
    if (game.ff) continue;
    const em = computeExpectedOutcome(player.name, game.with, game.vs[0], game.vs[1]).margin;
    if (em === null || Math.abs(em) < 1.0) continue;
    if (em < 0 && game.w === 1) {
      upsetWins++;
    } else if (em > 0 && game.w === 0) {
      upsetLosses++;
    } else if (game.w === 1) {
      expectedWins++;
    } else {
      expectedLosses++;
    }
  }
  const upsetLine = renderUpsetSummary(expectedWins, expectedLosses, upsetWins, upsetLosses);
  const otherLeaguesSummary = renderOtherLeaguesSummary(player);

  return `
    <div class="other-leagues-host">${otherLeaguesSummary}</div>
    ${ratingHistorySection}
    <table class="mlog">
      <thead>
        <tr>
          <th class="l">Week</th>
          <th class="l">Opponent</th>
          <th>Ind. W–L</th>
          <th>Pts F–A</th>
          ${SINGLE_GENDER ? '' : '<th>Mixed</th><th>Same-gen</th>'}
          <th>Clutch</th>
          <th>Team result</th>
        </tr>
      </thead>
      <tbody>${matchRows}</tbody>
    </table>
    <div class="gtitle">Game-by-game log <span>${gameCount} games${projectedCount ? ` + ${projectedCount} projected` : ''}${upsetLine}</span></div>
    <table class="mlog glog">
      <thead>
        <tr>
          ${GAME_TYPE_HEADER}
          <th class="l">Partner</th>
          <th class="l">Opponents</th>
          <th>Score</th>
          <th class="l">Result</th>
          <th>Projection</th>
        </tr>
      </thead>
      <tbody>${gameRows}</tbody>
    </table>
    <p class="mnote">The rating chart is cumulative through each week, so each point shows what the model would have said at that moment in the season; rank is the player&#39;s place among rated players in this division for that snapshot. Top table = per-week match summary (league-recorded splits). Bottom = every individual game with partner, opponents and the actual final score, plus pending lineup projections when posted — a <b>TBD</b> slot is a lineup spot the team has not submitted yet, and a game with one still open cannot be projected.${SINGLE_GENDER ? '' : 'Type: <b>MIX</b> mixed • <b>W</b> women&#39;s • <b>M</b> men&#39;s. '}An <b>F</b> tag marks a forfeit/walkover (1–0) — it counts in the win/loss record but is excluded from the Rating. <b>sub</b> rows are intra-league sub appearances for another team and are not counted in the match total. Projection is rating-based and uses expected pair-rating margin (pts/game): <b>Proj W/L</b> = clear favorite/underdog (&gt;2.5 pt margin); <b>Slight W/L</b> = mild edge (1.0–2.5 pt margin); <b>Even</b> = too close to call (&lt;1.0 pt margin). For completed games the Result column shows: <b>exp</b> = result met expectations when there is a rating-based favorite; <b>↑</b> = upset win (overcame a pair-rating deficit of ≥1.0 pt); <b>↓</b> = upset loss (pair had a rating advantage of ≥1.0 pt). Tags appear only when all four players have a rating and the matchup is not rated Even.</p>
  `;
}

let lastFocusedElement = null;

function showModal() {
  lastFocusedElement = document.activeElement;
  elements.overlay.hidden = false;
  elements.modalClose.focus();
}

function hideModal() {
  if (elements.overlay.hidden) {
    return;
  }
  elements.overlay.hidden = true;
  openModalPlayer = null;
  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
  }
  lastFocusedElement = null;
}

// Keep Tab cycling inside the open modal.
function handleModalKeydown(event) {
  if (event.key !== 'Tab' || elements.overlay.hidden) {
    return;
  }
  const focusables = elements.overlay.querySelectorAll(
    'button, a[href], input, select, summary, [tabindex="0"]',
  );
  if (!focusables.length) {
    return;
  }
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function showPlayerModal(player) {
  if (!player) {
    return;
  }

  // Opens now rather than when the data lands. The detail shard is 55–101 KB
  // gzipped: on a phone that is one to three seconds in which a tapped name did
  // nothing visible at all, which reads as a dead link and gets tapped again.
  // The header is drawn from the summary the page already has — everything in it
  // but the chemistry line is in DATA.players — so only the body is a skeleton.
  openModalPlayer = player;
  elements.modalHead.innerHTML = renderModalHeader(player);
  elements.modalBody.innerHTML = MODAL_SKELETON;
  showModal();

  loadPlayerIndexScript();
  ensurePlayerDetails().then(() => {
    // A second name tapped while this was in flight owns the modal now.
    if (openModalPlayer !== player) return;
    elements.modalHead.innerHTML = renderModalHeader(player);
    elements.modalBody.innerHTML = renderModalBody(player);
  });
}

// `key` is a route key: playerId, a slugified name (legacy), or a display
// name coming from name-only contexts like duo rows.
function openPlayer(key) {
  routeSetByApp = true;
  const currentRoute = getRouteFromLocation();
  const player = findPlayerByRouteParam(key) ||
    DATA.players.find((candidate) => candidate.name === key);
  setRouteInUrl({
    team: currentRoute.team || '',
    player: player ? routeKeyForPlayer(player) : slugify(key),
    hash: currentFragment(),
  });
}

function closeModal() {
  const route = getRouteFromLocation();
  if (route.player) {
    if (routeSetByApp) {
      routeSetByApp = false;
      history.back();
      return;
    }
    setRouteInUrl({ team: route.team || '', player: '', hash: currentFragment() }, { replace: true });
    return;
  }

  hideModal();
}

function handleColumnSort(event) {
  const headerCell = event.target.closest('th');

  if (!headerCell) {
    return;
  }

  const nextSortKey = headerCell.dataset.k;

  if (!nextSortKey) {
    return;
  }

  if (nextSortKey === sortKey) {
    sortDirection *= -1;
  } else {
    sortKey = nextSortKey;
    sortDirection = nextSortKey === 'leagueRank' ? 1 : -1;
  }

  render();
}

function handlePlayerClick(event) {
  if (!isPlainClick(event)) return;
  const nameElement = event.target.closest('.pname');

  if (nameElement?.dataset.player) {
    event.preventDefault(); // real href for new-tab clicks; SPA routing for plain ones
    openPlayer(nameElement.dataset.player);
  }
}

function handleOverlayClick(event) {
  if (event.target === elements.overlay) {
    closeModal();
  }
}

function handleEscapeKey(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

function getFilteredDuos() {
  const query = elements.search.value.trim().toLowerCase();
  const teamFilter = elements.team.value;

  return (DATA.duos || []).filter(
    (duo) =>
      (!teamFilter || duo.team === teamFilter) &&
      (!query ||
        duo.a.toLowerCase().includes(query) ||
        duo.b.toLowerCase().includes(query)),
  );
}

function renderDuos() {
  const duos = getFilteredDuos();
  const rows = duos
    .map((duo, index) => {
      const synergyClass = duo.synergy >= 0 ? 'pos-diff' : 'neg-diff';
      const rankClass = index < 3 ? ` g${index + 1}` : '';
      return `
        <tr class="duorow" data-player="${escapeHtml(duo.aId || duo.a)}" tabindex="0" role="button" aria-label="Open ${escapeHtml(duo.a)}'s player detail">
          <td class="l"><span class="pos${rankClass}">${index + 1}</span></td>
          <td class="l">${escapeHtml(duo.a)} <span class="amp">&amp;</span> ${escapeHtml(duo.b)}</td>
          <td class="l"><span class="teamdot" style="background:${getTeamColor(duo.team)}"></span>${escapeHtml(duo.team ?? '')}</td>
          <td>${duo.n}</td>
          <td><b>${duo.w}</b>–${duo.l}</td>
          <td><span class="rating ${synergyClass}">${formatSignedValue(duo.synergy, 1)}</span></td>
          <td>${formatSignedValue(duo.avgActual, 1)}</td>
          <td class="mut">${formatSignedValue(duo.avgExpected, 1)}</td>
        </tr>
      `;
    })
    .join('');

  const emptyMessage =
    elements.team.value || elements.search.value.trim()
      ? 'No duos with 3+ games together match the current filter.'
      : 'Not enough shared games yet — duos appear once a pair has played 3+ games together.';

  elements.duoBody.innerHTML =
    rows || `<tr><td colspan="8" class="l mut" style="padding:16px">${emptyMessage}</td></tr>`;
  refreshStickyLayout();
}

function formatMatchDate(iso) {
  if (!iso) {
    return '';
  }

  const date = new Date(iso);

  if (Number.isNaN(date.getTime())) {
    return iso;
  }

  const day = date.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
  const time = date.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });
  return `${day} · ${time}`;
}

// Compact date (e.g. "Jul 15") for the grid's next-matchup markers.
function formatShortDate(iso) {
  if (!iso) {
    return '';
  }

  const date = new Date(iso);

  if (Number.isNaN(date.getTime())) {
    return '';
  }

  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

// The id a match's block carries on either team's page. Built from the fixture
// rather than from whose page it is, so one fragment works from both sides — a
// head-to-head cell links to the opponent's page and needs the id to mean the
// same thing there. `kind` keeps a playoff round 2 apart from week 2.
function matchBlockId(match, kind = 'match') {
  return `${kind}-w${match.week}-${slugify(match.home)}-vs-${slugify(match.away)}`;
}

function renderTeamMatchBlock(match, teamName, { kind = 'match' } = {}) {
  const homeSide = match.home === teamName;
  const usPoints = homeSide ? match.homePoints : match.awayPoints;
  const themPoints = homeSide ? match.awayPoints : match.homePoints;
  const usGames = homeSide ? match.homeGW : match.awayGW;
  const themGames = homeSide ? match.awayGW : match.homeGW;
  const opponent = homeSide ? match.away : match.home;
  const provisionalLabel = match.provisional ? ' <span class="mut">(provisional)</span>' : '';
  const won = homeSide === (match.result === 'home');

  let expectedWins = 0, expectedLosses = 0, upsetWins = 0, upsetLosses = 0;
  const matchSubs = new Set(match.subs || []);
  const formatSubAwarePlayers = (names) => names
    .map((n) => n + (matchSubs.has(n) ? ' <span class="sub-tag" title="Intra-league sub">sub</span>' : ''))
    .join(' &amp; ');
  const gameRows = (match.games || [])
    .map((game) => {
      const usPlayers = homeSide ? game.h : game.a;
      const themPlayers = homeSide ? game.a : game.h;
      const usScore = homeSide ? game.hs : game.as;
      const themScore = homeSide ? game.as : game.hs;
      const win = usScore > themScore;
      const resultClass = getWinLossClass(win);
      const expectation = game.ff
        ? NO_EXPECTATION
        : computeExpectedOutcome(usPlayers[0], usPlayers[1], themPlayers[0], themPlayers[1]);
      const expectedMargin = expectation.margin;
      const projection = describeProjectedOutcome(expectation);
      if (expectedMargin !== null && Math.abs(expectedMargin) >= 1.0) {
        if (expectedMargin < 0 && win) {
          upsetWins++;
        } else if (expectedMargin > 0 && !win) {
          upsetLosses++;
        } else if (win) {
          expectedWins++;
        } else {
          expectedLosses++;
        }
      }
      const expectTag = renderExpectationTag(expectedMargin, win);
      return `
        <tr${game.ff ? ' class="ffrow"' : ''}>
          ${renderGameTypeCell(game.t)}
          <td class="l">${game.ff ? '<span class="ff-tag">forfeit</span>' : formatSubAwarePlayers(usPlayers)}</td>
          <td class="l">${game.ff ? '' : escapeHtml(themPlayers.join(' / '))}</td>
          <td class="${resultClass}">${usScore}–${themScore}</td>
          <td class="${resultClass} l">${win ? 'W' : 'L'}${game.ff ? ' <span class="ff-tag">F</span>' : ''}${expectTag}</td>
          <td class="${projection.resultClass}">${projection.displayLabel}${projection.estimateTag}</td>
        </tr>
      `;
    })
    .join('');

  const upsetLine = renderUpsetSummary(expectedWins, expectedLosses, upsetWins, upsetLosses);

  return `
    <div class="wk-block" id="${matchBlockId(match, kind)}">
      <div class="wk-head">
        <span>Week ${match.week} • ${homeSide ? 'vs' : '@'} ${escapeHtml(opponent)}${crossPodTag(teamName, opponent)}</span>
        <span class="${getWinLossClass(won)}">${won ? 'WON' : 'LOST'} ${usGames}–${themGames}${provisionalLabel}</span>
      </div>
      <div class="match-summary">Match points <b>${usPoints}–${themPoints}</b> • Games <b>${usGames}–${themGames}</b>${match.provisional ? ' • <span class="mut">Unverified</span>' : ''}${upsetLine}</div>
      <details>
        <summary>Game-by-game (${(match.games || []).length})</summary>
        <table class="mlog glog">
          <thead><tr>${GAME_TYPE_HEADER}<th class="l">Our pair</th><th class="l">Opponents</th><th>Score</th><th class="l">Result</th><th>Projection</th></tr></thead>
          <tbody>${gameRows}</tbody>
        </table>
      </details>
    </div>
  `;
}

function renderPendingTeamMatchBlock(match, teamName, { kind = 'match' } = {}) {
  const homeSide = match.home === teamName;
  const opponent = homeSide ? match.away : match.home;
  const scheduledTime = formatMatchDate(match.time);
  const gameCount = (match.games || []).length;
  const blockId = matchBlockId(match, kind);

  if (!gameCount) {
    return `
      <div class="wk-block pending-match" id="${blockId}">
        <div class="wk-head">
          <span>Week ${match.week} • ${homeSide ? 'vs' : '@'} ${escapeHtml(opponent)}${crossPodTag(teamName, opponent)}</span>
          <span class="mut">${scheduledTime || 'TBD'}</span>
        </div>
        <div class="match-summary">Lineups have not been posted yet.</div>
      </div>
    `;
  }

  const projections = (match.games || []).map((game) => {
    const usPlayers = homeSide ? game.h : game.a;
    const themPlayers = homeSide ? game.a : game.h;
    return {
      game,
      usPlayers,
      themPlayers,
      projection: projectPendingGame(usPlayers, themPlayers),
    };
  });
  const tally = summarizeProjections(projections.map((entry) => entry.projection));
  const posting = summarizeLineupPosting(projections, teamName, opponent);

  const gameRows = projections.map(({ game, usPlayers, themPlayers, projection }) => {
    const resultClass = projection.outcome === 'win' || projection.outcome === 'loss' || projection.outcome === 'tie'
      ? projection.resultClass
      : '';
    return `
      <tr${projection.outcome === 'incomplete' ? ' class="tbdrow"' : ''}>
        ${renderGameTypeCell(game.t)}
        <td class="l">${renderPendingPair(usPlayers)}</td>
        <td class="l">${renderPendingPair(themPlayers)}</td>
        <td class="${resultClass}">${projection.marginLabel}</td>
        <td class="${resultClass}">${projection.resultLabel}${tally.rowTag(projection)}</td>
      </tr>
    `;
  }).join('');

  return `
    <div class="wk-block pending-match" id="${blockId}">
      <div class="wk-head">
        <span>Week ${match.week} • ${homeSide ? 'vs' : '@'} ${escapeHtml(opponent)}</span>
        <span class="mut">${scheduledTime || 'TBD'}</span>
      </div>
      <div class="match-summary">${tally.summary}</div>
      ${renderPendingSubline(posting, tally)}
      <details>
        <summary>${posting.complete ? 'Projected game-by-game' : 'Lineup so far'} (${gameCount})</summary>
        <table class="mlog glog">
          <thead><tr>${GAME_TYPE_HEADER}<th class="l">Our pair</th><th class="l">Opponents</th><th>Exp margin</th><th>Projection</th></tr></thead>
          <tbody>${gameRows}</tbody>
        </table>
      </details>
    </div>
  `;
}

function renderPlayoffs() {
  const playoffs = DATA.playoffs || [];
  const hasPlayoffs = DATA.meta && DATA.meta.hasPlayoffs;

  if (!hasPlayoffs || !playoffs.length) {
    // The whole section goes, heading and all, so it stays out of the table of
    // contents in the divisions that have no bracket.
    elements.playoffsSection.hidden = true;
    return;
  }

  // Group by round (weekNumber stored as 'round' in the compiled data).
  const byRound = new Map();
  for (const m of playoffs) {
    const r = m.round || 1;
    if (!byRound.has(r)) byRound.set(r, []);
    byRound.get(r).push(m);
  }
  const rounds = [...byRound.keys()].sort((a, b) => a - b);

  const renderPlayoffMatch = (m) => {
    const complete = m.complete;
    const homeSeedLabel = m.homeSeed != null ? `<span class="pseed">#${m.homeSeed}</span> ` : '';
    const awaySeedLabel = m.awaySeed != null ? `<span class="pseed">#${m.awaySeed}</span> ` : '';
    const scheduledTime = formatMatchDate(m.time);

    if (!complete) {
      const gameCount = (m.games || []).length;
      if (!gameCount) {
        return `
          <div class="wk-block pending-match">
            <div class="wk-head">
              <span>${homeSeedLabel}${escapeHtml(m.home)} vs ${awaySeedLabel}${escapeHtml(m.away)}</span>
              <span class="mut">${scheduledTime || 'TBD'}</span>
            </div>
            <div class="match-summary">Lineups have not been posted yet.</div>
          </div>`;
      }
      const projections = (m.games || []).map((game) => ({
        game,
        usPlayers: game.h,
        themPlayers: game.a,
        projection: projectPendingGame(game.h, game.a),
      }));
      const tally = summarizeProjections(projections.map((entry) => entry.projection));
      const posting = summarizeLineupPosting(projections, m.home, m.away);
      const gameRows = projections.map(({ game, projection }) => {
        const resultClass = projection.outcome === 'win' || projection.outcome === 'loss' || projection.outcome === 'tie'
          ? projection.resultClass
          : '';
        return `
          <tr${projection.outcome === 'incomplete' ? ' class="tbdrow"' : ''}>
            ${renderGameTypeCell(game.t)}
            <td class="l">${renderPendingPair(game.h)}</td>
            <td class="l">${renderPendingPair(game.a)}</td>
            <td class="${resultClass}">${projection.marginLabel}</td>
            <td class="${resultClass}">${projection.resultLabel}${tally.rowTag(projection)}</td>
          </tr>`;
      }).join('');
      return `
        <div class="wk-block pending-match">
          <div class="wk-head">
            <span>${homeSeedLabel}${escapeHtml(m.home)} vs ${awaySeedLabel}${escapeHtml(m.away)}</span>
            <span class="mut">${scheduledTime || 'TBD'}</span>
          </div>
          <div class="match-summary">${tally.summary}</div>
          ${renderPendingSubline(posting, tally)}
          <details>
            <summary>${posting.complete ? 'Projected game-by-game' : 'Lineup so far'} (${gameCount})</summary>
            <table class="mlog glog">
              <thead><tr>${GAME_TYPE_HEADER}<th class="l">${escapeHtml(m.home)}</th><th class="l">${escapeHtml(m.away)}</th><th>Exp margin</th><th>Projection</th></tr></thead>
              <tbody>${gameRows}</tbody>
            </table>
          </details>
        </div>`;
    }

    const homeWon = m.result === 'home';
    const winnerClass = getWinLossClass(true);
    const loserClass = getWinLossClass(false);
    const gameRows = (m.games || []).map((game) => {
      const homeWin = game.hs > game.as;
      return `
        <tr${game.ff ? ' class="ffrow"' : ''}>
          ${renderGameTypeCell(game.t)}
          <td class="l">${game.ff ? '<span class="ff-tag">forfeit</span>' : escapeHtml(game.h.join(' / '))}</td>
          <td class="l">${game.ff ? '' : escapeHtml(game.a.join(' / '))}</td>
          <td class="${homeWin ? winnerClass : loserClass}">${game.hs}–${game.as}</td>
          <td class="${homeWin ? winnerClass : loserClass} l">${homeWin ? 'Home W' : 'Away W'}${game.ff ? ' <span class="ff-tag">F</span>' : ''}</td>
        </tr>`;
    }).join('');

    return `
      <div class="wk-block">
        <div class="wk-head">
          <span>${homeSeedLabel}<b class="${homeWon ? winnerClass : ''}">${escapeHtml(m.home)}</b> vs ${awaySeedLabel}<b class="${homeWon ? '' : winnerClass}">${escapeHtml(m.away)}</b></span>
          <span class="${homeWon ? winnerClass : loserClass}">${homeWon ? escapeHtml(m.home) : escapeHtml(m.away)} WON ${homeWon ? m.homeGW : m.awayGW}–${homeWon ? m.awayGW : m.homeGW}${m.provisional ? ' <span class="mut">(provisional)</span>' : ''}</span>
        </div>
        <div class="match-summary">Match points <b>${m.homePoints}–${m.awayPoints}</b> • Games <b>${m.homeGW}–${m.awayGW}</b>${m.provisional ? ' • <span class="mut">Unverified</span>' : ''}</div>
        <details>
          <summary>Game-by-game (${(m.games || []).length})</summary>
          <table class="mlog glog">
            <thead><tr>${GAME_TYPE_HEADER}<th class="l">${escapeHtml(m.home)}</th><th class="l">${escapeHtml(m.away)}</th><th>Score</th><th class="l">Result</th></tr></thead>
            <tbody>${gameRows}</tbody>
          </table>
        </details>
      </div>`;
  };

  const roundLabels = rounds.length === 1
    ? ['Playoffs']
    : rounds.map((r, i) => {
        if (i === rounds.length - 1) return 'Championship';
        if (i === rounds.length - 2) return 'Semifinals';
        return `Round ${r}`;
      });

  const sectionsHtml = rounds.map((r, i) => {
    const matchesHtml = byRound.get(r).map(renderPlayoffMatch).join('');
    return `
      <div class="playoff-round">
        <h3 class="playoff-round-label">${roundLabels[i]}</h3>
        ${matchesHtml}
      </div>`;
  }).join('');

  // The heading lives in index.html with the other section headings, so it gets
  // the same collapse toggle and contents entry.
  elements.playoffsHost.innerHTML = `<div class="playoff-bracket">${sectionsHtml}</div>`;
  elements.playoffsSection.hidden = false;
}

function renderTeamPage(team, { scroll = true } = {}) {
  const color = getTeamColor(team.name);
  // The card you clicked to get here is seeded within its pod, so this page says
  // the same number: a rank that changed on the way through would read as a bug.
  const group = podGroupOf(team);
  const rankTeams = group.teams;
  const rank = rankTeams.findIndex((candidate) => candidate.name === team.name) + 1;
  const rankLabel = group.label
    ? `#${rank} in ${escapeHtml(group.label)}`
    : `#${rank} in standings`;
  // A pod rank alone leaves the division leader unstated: three teams can all be
  // "#1 in <pod>", and a team can top its pod while sitting mid-table overall. So
  // where there is a pod at all, the division-wide rank leads and the pod rank
  // follows. An undivided division's rank is already the overall one.
  const overallLabel = group.label
    ? `#${DATA.teams.findIndex((candidate) => candidate.name === team.name) + 1} overall`
    : '';
  // powerRank is compiled within this same group, over the teams that have a power
  // rating at all — a team with no rated games isn't in the ranking, so counting it
  // in the denominator would make the last-placed team "#5 of 6".
  const powerRanked = rankTeams.filter((candidate) => !isMissing(candidate.power)).length;
  // The rank label names the group, which is the league's pod wherever it publishes
  // one — so a separate "Pod Southwest" beside "#2 in Southwest" says it twice. It
  // still earns its place where the group is something else: a schedule section
  // spanning several pods, or an undivided division with no group at all.
  const podMeta = team.reportedPod && team.reportedPod !== group.label
    ? `<span>Pod <b>${escapeHtml(team.reportedPod)}</b></span>`
    : '';
  const roster = DATA.players
    .filter((player) => player.team === team.name);
  const duos = DATA.duos.filter((duo) => duo.team === team.name);
  const history = DATA.matches
    .filter((match) => match.complete && (match.home === team.name || match.away === team.name))
    .sort((a, b) => a.week - b.week);
  const upcoming = DATA.matches
    .filter((match) => !match.complete && (match.home === team.name || match.away === team.name))
    .sort((a, b) => a.week - b.week);
  const playoffMatches = (DATA.playoffs || [])
    .filter((match) => match.home === team.name || match.away === team.name)
    .sort((a, b) => (a.round || 1) - (b.round || 1))
    .map((m) => ({ ...m, week: m.round }));
  const powerClass = isMissing(team.power) ? '' : (team.power >= 0 ? 'pos-diff' : 'neg-diff');

  const rosterColumns = [
    { key: 'name', label: 'Player', align: 'left' },
    { key: 'rating', label: 'Rating' },
    { key: 'dupr', label: 'DUPR' },
    { key: 'conf', label: 'Conf' },
    { key: 'soo', label: 'Opp Str' },
    { key: 'sop', label: 'Partner Str' },
    { key: 'wl', label: 'W–L' },
    { key: 'winPct', label: 'Win%' },
    { key: 'gamesPlayed', label: 'GP' },
  ];

  const sortedRoster = roster.slice().sort((a, b) => comparePlayers(a, b, rosterSortKey, rosterSortDirection));

  const rosterHeaderCells = rosterColumns.map(({ key, label, align }) => {
    const classes = [];
    if (align === 'left') classes.push('l');
    if (key === rosterSortKey) classes.push('sorted');
    const classAttr = classes.length ? ` class="${classes.join(' ')}"` : '';
    const ariaSort = key === rosterSortKey ? (rosterSortDirection === -1 ? 'descending' : 'ascending') : 'none';
    return `<th scope="col" data-rk="${key}" tabindex="0" aria-sort="${ariaSort}"${classAttr}>${label}</th>`;
  }).join('');

  const rosterRows = sortedRoster
    .map((player) => `
      <tr>
        <td class="l">${renderCell(player, 'name')}</td>
        <td>${renderCell(player, 'rating')}</td>
        <td>${renderCell(player, 'dupr')}</td>
        <td>${renderCell(player, 'conf')}</td>
        <td>${renderCell(player, 'soo')}</td>
        <td>${renderCell(player, 'sop')}</td>
        <td>${renderCell(player, 'wl')}</td>
        <td>${player.winPct.toFixed(0)}%</td>
        <td>${player.gamesPlayed}</td>
      </tr>
    `)
    .join('');

  const formatCard = (label, record) => {
    const [wins, losses] = record;
    return `<div class="fmt-card"><div class="l">${label}</div><div class="v">${formatRecordWithPct(wins, losses)}</div><div class="p">${formatWinPct(wins, losses)}% game wins</div></div>`;
  };

  const duosMarkup = duos.length
    ? `<div class="duolist">${duos
        .map((duo) => `
          <div class="d">
            <span><b>${escapeHtml(duo.a)}</b> &amp; <b>${escapeHtml(duo.b)}</b> <span class="mut">(${duo.w}–${duo.l}, ${duo.n}g)</span></span>
            <span class="${duo.synergy >= 0 ? 'pos-diff' : 'neg-diff'}">${formatSignedValue(duo.synergy, 1)}</span>
          </div>
        `)
        .join('')}</div>`
    : '<div class="mut" style="font-size:13px">No duos with 3+ games together yet.</div>';

  const upcomingMarkup = upcoming.length
    ? upcoming.map((match) => renderPendingTeamMatchBlock(match, team.name)).join('')
    : '<div class="mut" style="font-size:13px;padding:4px 0">No upcoming matches scheduled.</div>';

  const historyMarkup = history.length
    ? history.map((match) => renderTeamMatchBlock(match, team.name)).join('')
    : '<div class="mut" style="font-size:13px">No completed matches yet.</div>';

  const playoffMarkup = playoffMatches.length
    ? playoffMatches.map((match) =>
        match.complete
          ? renderTeamMatchBlock(match, team.name, { kind: 'playoff' })
          : renderPendingTeamMatchBlock(match, team.name, { kind: 'playoff' })
      ).join('')
    : null;

  elements.teamView.innerHTML = `
    <a class="backlink" href="${standingsHref()}">← All standings</a>
    <div class="team-hero" style="border-top:3px solid ${color};padding-top:12px">
      <h2><span class="teamdot" style="background:${color};width:12px;height:12px"></span> ${escapeHtml(team.name)}</h2>
      <div class="team-meta">
        ${overallLabel ? `<span><b>${overallLabel}</b></span>` : ''}
        <span><b>${rankLabel}</b></span>
        ${podMeta}
        <span>Record <b>${team.w}–${team.l}</b></span>
        <span>Games <b>${formatRecordWithPct(team.gw, team.gl)}</b></span>
        <span>PF <b>${team.pf}</b> · PA <b>${team.pa}</b> · ${formatDiffSpan(team.diff)}</span>
        <span>Power <b class="${powerClass}">${isMissing(team.power) ? EMPTY_VALUE : formatSignedValue(team.power)}</b> <span class="mut">(#${team.powerRank} of ${powerRanked})</span></span>
      </div>
    </div>
    <div class="team-section">
      <h3>Game-type splits <span class="tag">team game record by format</span></h3>
      <div class="fmt-cards">${
        SINGLE_GENDER === 'Male' ? formatCard("Men's", team.fmt.male)
        : SINGLE_GENDER === 'Female' ? formatCard("Women's", team.fmt.female)
        : `${formatCard('Mixed', team.fmt.mixed)}${formatCard("Men's", team.fmt.male)}${formatCard("Women's", team.fmt.female)}`
      }</div>
    </div>
    <div class="team-section">
      <h3>Roster <span class="tag">${roster.length ? `${roster.length} players • click a name for detail` : 'not published'}</span></h3>
      ${roster.length
        ? `<div class="panel scroll"><table id="roster-table"><thead><tr>
        ${rosterHeaderCells}
      </tr></thead><tbody>${rosterRows}</tbody></table></div>`
        : '<div class="mut" style="font-size:13px">The league has not published a roster for this team.</div>'}
    </div>
    <div class="team-section">
      <h3>Best duos <span class="tag">chemistry on this roster (3+ games)</span></h3>
      ${duosMarkup}
    </div>
    <div class="team-section">
      <h3>Match history <span class="tag">by week</span></h3>
      ${historyMarkup}
    </div>
    <div class="team-section">
      <h3>Pending matchups <span class="tag">scheduled + projected game lines when available</span></h3>
      ${upcomingMarkup}
    </div>
    ${playoffMarkup ? `
    <div class="team-section">
      <h3>Playoffs <span class="tag">knockout bracket</span></h3>
      ${playoffMarkup}
    </div>` : ''}
  `;
  elements.mainView.hidden = true;
  elements.teamView.hidden = false;
  elements.subhead.textContent = `${team.name} — team page`;
  // No contents strip on a team page, so nothing has to clear one — but the
  // roster table still needs measuring for overflow now that it is visible.
  refreshStickyLayout();

  const rosterHead = document.getElementById('roster-table')?.querySelector('thead');
  const handleRosterSort = (event) => {
    if (event.type === 'keydown' && !isActivationKey(event)) return;
    const th = event.target.closest('th[data-rk]');
    if (!th) return;
    if (event.type === 'keydown') event.preventDefault();
    const key = th.dataset.rk;
    if (key === rosterSortKey) {
      rosterSortDirection *= -1;
    } else {
      rosterSortKey = key;
      rosterSortDirection = key === 'name' ? 1 : -1;
    }
    renderTeamPage(team, { scroll: false });
  };
  rosterHead?.addEventListener('click', handleRosterSort);
  rosterHead?.addEventListener('keydown', handleRosterSort);

  if (scroll) {
    window.scrollTo(0, 0);
    // A head-to-head cell arrives with the match it was about in the fragment.
    // Only on a fresh navigation: a roster re-sort re-renders with scroll:false
    // and must leave the reader where they were.
    applyLocationFragment();
  }
}

function showMainView() {
  elements.teamView.hidden = true;
  elements.mainView.hidden = false;
  renderSummary();
  refreshStickyLayout();
  window.scrollTo(0, 0);
  // Back to the top by default, but not over a fragment: closing a player modal
  // that was opened from Top Duos returns here with #top-duos still in the URL,
  // and the reader's place is the whole reason it was carried across.
  applyLocationFragment();
}

function handleRoute() {
  const route = getRouteFromLocation();

  hideModal();

  if (route.team) {
    const teamSlug = route.team;
    const team = DATA.teams.find((candidate) => slugify(candidate.name) === teamSlug);
    const player = findPlayerByRouteParam(route.player);

    if (team) {
      rosterSortKey = 'rating';
      rosterSortDirection = -1;
      renderTeamPage(team);
      if (player) {
        showPlayerModal(player);
      }
      return;
    }
  }

  if (route.player) {
    const player = findPlayerByRouteParam(route.player);

    if (player) {
      showPlayerModal(player);
      return;
    }
  }

  showMainView();
}

function handleTeamCardClick(event) {
  // Cards and table rows both carry the slug, so one handler routes either view.
  if (!isPlainClick(event)) return;
  const card = event.target.closest('[data-team]');

  if (card?.dataset.team) {
    event.preventDefault(); // real href for new-tab clicks; SPA routing for plain ones
    routeSetByApp = true;
    setRouteInUrl({ team: card.dataset.team, player: '' });
  }
}

function handleDuoClick(event) {
  const row = event.target.closest('.duorow');

  if (row?.dataset.player) {
    openPlayer(row.dataset.player);
  }
}

function handlePartnerChipClick(event) {
  const chip = event.target.closest('.pchip');

  if (chip?.dataset.player) {
    openPlayer(chip.dataset.player);
  }
}

// Every grid rendered on this page, in the order the sections appear. One entry
// per schedule section, or a single entry for the whole division when it has no
// sections.
//
// These are the schedule sections, not the league's pods the cards group by (see
// cardPodGroups). A matrix has to contain every matchup it displays, and only the
// sections guarantee that: teams play across the league's pods, so a per-pod
// matrix would drop the cross-pod results with nowhere to put them. A section
// spanning several pods is headed by all of them — "Northeast / Southeast /
// Southwest" — which is honest about what the table covers.
//
// Only the matrix needs this. Its columns are the opponents, so a division-wide
// matrix would be mostly hatching for pairs that never meet — splitting it per
// section is what keeps it readable. The by-week grid's columns are the weeks, the
// same set for every section, so splitting it only repeats one header row and stops
// the reader comparing a week across the division; see renderResultsGrid.
function gridSections() {
  const podCount = DATA.meta && DATA.meta.podCount > 1 ? DATA.meta.podCount : 1;
  if (podCount <= 1) {
    return [{ heading: '', teams: DATA.teams.map((team) => team.name) }];
  }
  return Array.from({ length: podCount }, (_, index) => ({
    heading: podLabel(index + 1),
    teams: DATA.teams.filter((team) => team.pod === index + 1).map((team) => team.name),
  })).filter((section) => section.teams.length);
}

// The matrix is one column per opponent, so its width is the pod size and its
// area is the pod size squared — but a team meets only 7 or 8 opponents whatever
// the pod size, so past a certain point most of that area is the hatching for
// pairs that never meet. In the 21-team section of 3.5 (50+) it is 63% of the
// cells. The by-week grid is one column per week instead, which is a constant,
// and nearly every cell holds a match.
//
// By week is the default everywhere, not only where the matrix has outgrown the
// page. Sizing the default to the pod meant the same section changed shape when
// a team joined it, and one reading for the whole league is worth more than the
// couple of columns a small pod saves. The matrix stays a click away.
const DEFAULT_GRID_VIEW = 'weeks';
let gridView = prefs.gridView === 'matrix' ? 'matrix' : DEFAULT_GRID_VIEW;

function renderResultsGrid() {
  const allTeams = DATA.teams.map((team) => team.name);
  const results = {};
  allTeams.forEach((row) => { results[row] = {}; allTeams.forEach((col) => { results[row][col] = []; }); });
  (DATA.matches || []).filter((match) => match.complete).forEach((match) => {
    if (!results[match.home] || !results[match.away]) return;
    const homeWon = match.result === 'home';
    const matchId = matchBlockId(match);
    results[match.home][match.away].push({ gf: match.homeGW, ga: match.awayGW, win: homeWon, pd: match.homePoints - match.awayPoints, week: match.week, provisional: !!match.provisional, matchId });
    results[match.away][match.home].push({ gf: match.awayGW, ga: match.homeGW, win: !homeWon, pd: match.awayPoints - match.homePoints, week: match.week, provisional: !!match.provisional, matchId });
  });

  // All pairs that appear anywhere in the schedule (played or upcoming).
  const scheduledPairs = new Set();
  (DATA.matches || []).forEach((match) => {
    scheduledPairs.add(`${match.home}||${match.away}`);
    scheduledPairs.add(`${match.away}||${match.home}`);
  });

  // Each team's next scheduled opponent, marked in that team's row.
  const upcoming = {};
  (DATA.matches || []).filter((match) => !match.complete).forEach((match) => {
    [[match.home, match.away], [match.away, match.home]].forEach(([team, opponent]) => {
      if (!upcoming[team] || match.week < upcoming[team].week) {
        upcoming[team] = { opponent, week: match.week, time: match.time, matchId: matchBlockId(match) };
      }
    });
  });

  const entryHtml = (entry) => `
    <div class="entry ${entry.win ? 'win' : 'loss'}">
      <div class="wk">Wk ${entry.week}${entry.provisional ? ' · Provisional' : ''}</div>
      <div class="res">${entry.win ? 'W' : 'L'}</div>
      <div class="sc">${entry.gf}–${entry.ga}<span class="gword"> games</span></div>
      <div class="pd ${entry.pd >= 0 ? 'pos-diff' : 'neg-diff'}">${formatSignedValue(entry.pd)}</div>
    </div>`;

  const nextHtml = (info) => `
    <div class="entry next">
      <div class="wk">Wk ${info.week}</div>
      <div class="res">NEXT</div>
      <div class="sc">${escapeHtml(formatShortDate(info.time))}</div>
    </div>`;

  // Every match a team plays, keyed by team then week. A week can hold two: pods
  // that run a Saturday and a Sunday fixture both count as the same week.
  const byTeamWeek = {};
  allTeams.forEach((team) => { byTeamWeek[team] = {}; });
  (DATA.matches || []).forEach((match) => {
    [[match.home, match.away, true], [match.away, match.home, false]].forEach(([team, opponent, home]) => {
      if (!byTeamWeek[team]) return;
      if (!byTeamWeek[team][match.week]) byTeamWeek[team][match.week] = [];
      const played = !!match.complete;
      byTeamWeek[team][match.week].push({
        opponent,
        played,
        win: played ? (match.result === 'home') === home : null,
        gf: home ? match.homeGW : match.awayGW,
        ga: home ? match.awayGW : match.homeGW,
        pd: home ? match.homePoints - match.awayPoints : match.awayPoints - match.homePoints,
        time: match.time,
        provisional: !!match.provisional,
        matchId: matchBlockId(match),
      });
    });
  });

  // Only rostered teams have a page to open. A cell that stands for exactly one
  // fixture also carries that match's block id, so the click lands on the
  // matchup itself — inside Match history or Pending matchups — rather than at
  // the top of a team page the reader then has to scan for it.
  const teamLink = (name, fragment = '') => (ROSTERED_TEAMS.has(name)
    ? `data-team="${slugify(name)}"${fragment ? ` data-fragment="${escapeHtml(fragment)}"` : ''}`
      + ` tabindex="0" role="link" aria-label="Open ${escapeHtml(name)} team page${fragment ? ' at this matchup' : ''}"`
    : '');

  // Row headers carry the abbreviation, not the full name. The row-header column
  // is `white-space: nowrap`, so a full name set its width for the whole table —
  // "Pickleball Kingdom Tinton Falls" alone made 3.25 Womens scroll. The full
  // name stays in the title, and the key below the grid spells every one out.
  const rowHeader = (name) => (
    `<th class="row" ${teamLink(name)} title="${escapeHtml(name)}"><span class="gdot" style="background:${getTeamColor(name)}"></span><span class="abbr">${escapeHtml(teamLabel(name))}</span></th>`
  );

  // Every code the section actually shows, spelled out. Built from what was
  // rendered rather than from the team list, so an opponent with no row of its
  // own is still decodable.
  const keyHtml = (names) => {
    const items = [...new Set(names)]
      .sort((a, b) => teamCode(a).localeCompare(teamCode(b)))
      .map((name) => `<span class="gkey-item"><b>${escapeHtml(teamCode(name))}</b> ${escapeHtml(name)}</span>`)
      .join('');
    return `<div class="grid-key">${items}</div>`;
  };

  // The earliest unplayed match for each team, so NEXT marks the one match it
  // actually means. Every later fixture is dated but unlabelled — in this view
  // the week column already puts them in order.
  const nextUnplayed = {};
  allTeams.forEach((team) => {
    const pending = Object.keys(byTeamWeek[team] || {})
      .map(Number)
      .sort((a, b) => a - b)
      .flatMap((week) => byTeamWeek[team][week].filter((entry) => !entry.played));
    if (pending.length) nextUnplayed[team] = pending[0];
  });

  const weekEntryHtml = (entry, team) => {
    const opponent = escapeHtml(entry.opponent);
    const code = escapeHtml(teamCode(entry.opponent));
    const provisional = entry.provisional ? ' · P' : '';
    if (!entry.played) {
      const imminent = nextUnplayed[team] === entry;
      return `
        <div class="entry next">
          <div class="wk opp" title="${opponent}">${code}</div>
          ${imminent ? '<div class="res">NEXT</div>' : ''}
          <div class="sc">${escapeHtml(formatShortDate(entry.time))}</div>
        </div>`;
    }
    return `
      <div class="entry ${entry.win ? 'win' : 'loss'}">
        <div class="wk opp" title="${opponent}${entry.provisional ? ' · provisional result' : ''}">${code}${provisional}</div>
        <div class="res">${entry.win ? 'W' : 'L'}</div>
        <div class="sc">${entry.gf}–${entry.ga}<span class="gword"> games</span></div>
        <div class="pd ${entry.pd >= 0 ? 'pos-diff' : 'neg-diff'}">${formatSignedValue(entry.pd)}</div>
      </div>`;
  };

  // Rows are teams and columns are weeks, so the width is the length of the
  // season however many teams share the grid. The opponent moves inside the
  // cell, which is what the four-character code is for.
  const renderWeeksForTeams = (teams) => {
    const weeks = Array.from(new Set(
      teams.flatMap((team) => Object.keys(byTeamWeek[team] || {}).map(Number)),
    )).sort((a, b) => a - b);

    if (!weeks.length) return '';

    const headRow = `<tr><th class="row"></th>${weeks
      .map((week) => `<th class="col" scope="col">Wk ${week}</th>`)
      .join('')}</tr>`;

    const bodyRows = teams
      .map((team) => {
        const cells = weeks
          .map((week) => {
            const entries = (byTeamWeek[team][week] || []).slice()
              .sort((a, b) => String(a.time || '').localeCompare(String(b.time || '')));
            if (!entries.length) return '<td class="bye"></td>';

            const played = entries.filter((entry) => entry.played);
            let className;
            if (!played.length) {
              className = 'upcoming';
            } else {
              const wins = played.filter((entry) => entry.win).length;
              const losses = played.length - wins;
              if (wins > losses) className = 'win';
              else if (losses > wins) className = 'loss';
              else className = 'split';
            }
            if (entries.length > 1) className += '-multi';

            // The cell opens this row's own team at this match, not the
            // opponent: the reader is following one team across the season, and
            // wants that team's side of the fixture. The matrix does the same
            // with its row. Two matches in a week share a cell and have no one
            // block to point at, and `played` comes off with the link, since it
            // is what makes a cell look clickable.
            const link = entries.length === 1 ? teamLink(team, entries[0].matchId) : '';
            const cellClass = link ? `played ${className}` : className;
            const inner = entries.map((entry) => weekEntryHtml(entry, team)).join('');
            return `<td class="${cellClass}" ${link}>${inner}</td>`;
          })
          .join('');
        return `<tr>${rowHeader(team)}${cells}</tr>`;
      })
      .join('');

    // Opponents as well as rows: a team can face someone with no row here, from
    // another section or dropped from the division mid-season.
    const shown = teams.concat(teams.flatMap((team) => weeks.flatMap(
      (week) => (byTeamWeek[team][week] || []).map((entry) => entry.opponent),
    )));

    // The wrapper holds the table and nothing else. The key has to sit outside
    // it: it is how you read the codes in the cells, and inside the scroller it
    // slid away exactly when you scrolled far enough to need it.
    return `<div class="grid-wrap"><table class="gweeks"><thead>${headRow}</thead><tbody>${bodyRows}</tbody></table></div>${keyHtml(shown)}`;
  };

  const renderMatrixForTeams = (teams) => {
    const headRow = `<tr><th class="row"></th>${teams
      .map((col) => `<th class="col" scope="col"><span class="gdot" style="background:${getTeamColor(col)}"></span>${escapeHtml(teamLabel(col))}</th>`)
      .join('')}</tr>`;

    const bodyRows = teams
      .map((row) => {
        const cells = teams
          .map((col) => {
            if (row === col) {
              return '<td class="self"></td>';
            }
            const list = results[row][col].sort((a, b) => a.week - b.week);
            const next = upcoming[row] && upcoming[row].opponent === col ? upcoming[row] : null;
            if (list.length === 0 && !next) {
              return scheduledPairs.has(`${row}||${col}`) ? '<td class="empty">—</td>' : '<td class="non-opp"></td>';
            }
            const total = list.length + (next ? 1 : 0);
            let className;
            if (list.length === 0) {
              className = 'upcoming';
            } else {
              const wins = list.filter((e) => e.win).length;
              const losses = list.length - wins;
              if (wins > losses) {
                className = 'win';
              } else if (losses > wins) {
                className = 'loss';
              } else {
                className = 'split';
              }
            }
            if (total > 1) {
              className += '-multi';
            }
            const inner = list.map(entryHtml).join('') + (next ? nextHtml(next) : '');
            // Home and away stacked in one cell are two fixtures with no single
            // block to point at; one meeting, played or upcoming, has one.
            let fragment = '';
            if (list.length === 1 && !next) {
              fragment = list[0].matchId;
            } else if (!list.length && next) {
              fragment = next.matchId;
            }
            return `<td class="played ${className}" ${teamLink(row, fragment)}>${inner}</td>`;
          })
          .join('');
        return `<tr>${rowHeader(row)}${cells}</tr>`;
      })
      .join('');

    // The matrix needs the key too now. Its column headers were decodable only
    // because the row headers spelled the same teams out in the same order, and
    // they no longer do.
    return `<div class="grid-wrap"><table class="gmatrix"><thead>${headRow}</thead><tbody>${bodyRows}</tbody></table></div>${keyHtml(teams)}`;
  };

  const matrixCap = `<div class="grid-cap">Read across a row: how that team fared against each opponent — <b>week</b>, <b>game wins–losses</b>, and <b>net point differential</b>. Green = won the match, red = lost; each entry is colored individually when teams split their two meetings. Matches are decided by games won, so a team can win the match yet be negative on points. A grey <b>NEXT</b> box marks that team's next scheduled matchup. Blank = not yet played; hatched = not scheduled to meet. Cells stack both meetings once teams play home and away.</div>`;

  const weeksCap = `<div class="grid-cap">Read across a row: that team's season week by week — <b>opponent</b>, <b>game wins–losses</b>, and <b>net point differential</b>. Green = won the match, red = lost. Matches are decided by games won, so a team can win the match yet be negative on points. A grey <b>NEXT</b> box marks a scheduled matchup. Blank = no match that week. Opponents are shown by the code in the key below the grid; a cell holds two entries where a pod plays twice in one week. Rows are in standings order, and reading down a column shows how the whole division fared that week. Click a cell for that opponent's page, or a team name for its own.</div>`;

  const renderForTeams = gridView === 'weeks' ? renderWeeksForTeams : renderMatrixForTeams;
  const cap = gridView === 'weeks' ? weeksCap : matrixCap;
  // By week is one table for the division: its columns are the weeks, which every
  // pod shares, so reading down a column across the whole division is something
  // the pod split took away for nothing. The matrix keeps the split — its columns
  // are the opponents, and division-wide that is mostly cells for pairs who never
  // meet. Row order is the standings order either way.
  const sections = gridView === 'weeks'
    ? [{ heading: '', teams: allTeams }]
    : gridSections();

  if (sections.length === 1 && !sections[0].heading) {
    elements.gridHost.innerHTML = `${renderForTeams(sections[0].teams)}${cap}`;
  } else {
    elements.gridHost.innerHTML = sections
      .map(({ heading, teams }) => (
        `<div class="grid-pod-section"><h3 class="pod-heading">${escapeHtml(heading)}</h3>${renderForTeams(teams)}</div>`
      ))
      .join('') + cap;
  }
  // By week is one column per week; the matrix is one per opponent. Which of
  // them overflows the page is the whole question here.
  refreshStickyLayout();
}

function renderGridViewToggle() {
  elements.gridViewToggle.querySelectorAll('button[data-gridview]').forEach((button) => {
    const on = button.dataset.gridview === gridView;
    button.classList.toggle('on', on);
    button.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
}

function handleGridViewClick(event) {
  const button = event.target.closest('button[data-gridview]');
  if (!button || button.dataset.gridview === gridView) return;
  gridView = button.dataset.gridview;
  writePrefs({ gridView });
  renderGridViewToggle();
  renderResultsGrid();
}

function computeSwarmLayout(players, geometry) {
  const { xScale, cy, top, bottom, radius } = geometry;
  const minDist = 2 * radius + 1; // required center-to-center distance between dots
  const nodes = players
    .slice()
    .sort((a, b) => a.rating - b.rating)
    .map((player) => ({ player, x: xScale(player.rating), y: cy }));
  const placed = [];
  const overlaps = (x, y) => placed.some((other) => {
    const dx = other.x - x;
    const dy = other.y - y;
    return dx * dx + dy * dy < minDist * minDist;
  });
  nodes.forEach((node) => {
    // Scan outward from the centre line in 1px steps for the closest free slot.
    let best = cy;
    for (let offset = 0; offset <= (bottom - top) / 2; offset += 1) {
      const candidates = offset === 0 ? [cy] : [cy - offset, cy + offset];
      const slot = candidates.find((y) => y >= top + radius && y <= bottom - radius && !overlaps(node.x, y));
      if (slot !== undefined) {
        best = slot;
        break;
      }
    }
    node.y = best;
    placed.push(node);
  });
  return placed;
}

function renderBeeswarm() {
  const players = DATA.players.filter((player) => player.rating != null);
  const W = 720, H = 250, left = 34, right = 34, top = 14, bottom = 40;
  const cy = (top + (H - bottom)) / 2;
  const domainMin = -5, domainMax = 5;
  const xScale = (value) => left + ((value - domainMin) / (domainMax - domainMin)) * (W - left - right);
  const radius = 5.4;
  const placed = computeSwarmLayout(players, { xScale, cy, top, bottom: H - bottom, radius });

  let gridlines = '';
  for (let tick = -4; tick <= 4; tick += 1) {
    const x = xScale(tick);
    const zero = tick === 0;
    gridlines += `<line x1="${x}" y1="${top}" x2="${x}" y2="${H - bottom}" stroke="var(--line)" stroke-width="${zero ? 1.4 : 1}"${zero ? '' : ' stroke-dasharray="2 4"'} opacity="${zero ? 0.9 : 0.5}"/>`;
    gridlines += `<text x="${x}" y="${H - bottom + 18}" text-anchor="middle" font-size="11" fill="var(--mut)">${tick > 0 ? '+' : ''}${tick}</text>`;
  }
  const avgLabel = `<text x="${xScale(0)}" y="${H - bottom + 33}" text-anchor="middle" font-size="10.5" fill="var(--mut)">league average</text>`;
  const axisLabel = `<text x="${W - right}" y="${top - 3}" text-anchor="end" font-size="10.5" fill="var(--mut)">Rating (net points / game)</text>`;

  const dots = placed
    .map((node) => {
      const { player } = node;
      const opacity = (0.5 + 0.5 * (player.confidence / 100)).toFixed(2);
      return `<circle class="swarm-dot" data-player="${escapeHtml(routeKeyForPlayer(player))}" tabindex="0" role="button" aria-label="Open ${escapeHtml(player.name)}'s player detail" cx="${node.x.toFixed(1)}" cy="${node.y.toFixed(1)}" r="${radius}" fill="${getTeamColor(player.team)}" stroke="rgb(0 0 0 / 25%)" stroke-width="0.5" opacity="${opacity}"/>`;
    })
    .join('');

  const legend = DATA.teams
    .map((team) => `<span><i style="background:${getTeamColor(team.name)}"></i>${escapeHtml(team.name)}</span>`)
    .join('');

  elements.swarmHost.innerHTML = `
    <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Distribution of player ratings, one dot per player, colored by team">
      ${gridlines}${avgLabel}${axisLabel}${dots}
    </svg>
    <div class="swarm-legend">${legend}</div>
    <div class="swarm-tip" id="swarm-tip"></div>`;
}

function handleGridClick(event) {
  // Body cells in both views, plus the by-week row headers, which are the only
  // way to reach the team a row is about once its cells point at its opponents.
  const cell = event.target.closest('td.played, th.row[data-team]');
  if (cell?.dataset.team) {
    routeSetByApp = true;
    setRouteInUrl({ team: cell.dataset.team, player: '', hash: cell.dataset.fragment || '' });
  }
}

function handleSwarmClick(event) {
  const dot = event.target.closest('.swarm-dot');
  if (dot?.dataset.player) {
    openPlayer(dot.dataset.player);
  }
}

function handleSwarmOver(event) {
  const dot = event.target.closest('.swarm-dot');
  const tip = document.getElementById('swarm-tip');
  if (!dot || !tip) {
    return;
  }
  const player = findPlayerByRouteParam(dot.dataset.player);
  if (!player) {
    return;
  }
  const ratingColor = player.rating >= 0 ? 'var(--win)' : 'var(--loss)';
  tip.innerHTML =
    `<b>${escapeHtml(player.name)}</b><br>` +
    `<span style="color:${ratingColor};font-weight:700">${formatSignedValue(player.rating, 1)}</span> pts/game · ${player.confidence}% conf<br>` +
    `<span style="color:var(--mut)">${escapeHtml(player.team)}</span>`;
  const host = elements.swarmHost.getBoundingClientRect();
  const rect = dot.getBoundingClientRect();
  tip.style.left = `${rect.left - host.left + rect.width / 2}px`;
  tip.style.top = `${rect.top - host.top - tip.offsetHeight - 8}px`;
  tip.style.opacity = '1';
}

function handleSwarmOut(event) {
  if (event.target.closest('.swarm-dot')) {
    const tip = document.getElementById('swarm-tip');
    if (tip) {
      tip.style.opacity = '0';
    }
  }
}

function initialize() {
  migrateLegacyHashRoute();
  renderHeader();
  renderDivisionSelector();
  renderSummary();
  renderStandingsViewToggle();
  renderTeams();
  renderPlayoffs();
  renderGridViewToggle();
  renderResultsGrid();
  renderTeamFilterOptions();
  renderPodFilterOptions();
  // One gender in the division means the filter can only ever be a no-op.
  elements.gender.hidden = Boolean(SINGLE_GENDER);
  renderTableHead();
  renderDuos();
  renderBeeswarm();
  // After renderPlayoffs, so the contents strip knows whether this division has
  // a bracket section to list.
  applyAllSectionStates();

  elements.head.addEventListener('click', handleColumnSort);
  elements.mainView.addEventListener('click', handleSectionToggleClick);
  elements.sectionToc.addEventListener('click', handleTocClick);
  document.addEventListener('click', handleFragmentLinkClick);
  document.addEventListener('click', handlePlayerClick);
  elements.teams.addEventListener('click', handleTeamCardClick);
  elements.standingsView.addEventListener('click', handleStandingsViewClick);
  elements.teamView.addEventListener('click', (event) => {
    if (!isPlainClick(event)) return;
    if (event.target.closest('.backlink')) {
      event.preventDefault();
      routeSetByApp = true;
      setRouteInUrl({ team: '', player: '' });
    }
  });
  elements.gridHost.addEventListener('click', handleGridClick);
  elements.gridViewToggle.addEventListener('click', handleGridViewClick);
  elements.duoBody.addEventListener('click', handleDuoClick);
  elements.swarmHost.addEventListener('click', handleSwarmClick);
  elements.swarmHost.addEventListener('mouseover', handleSwarmOver);
  elements.swarmHost.addEventListener('mouseout', handleSwarmOut);
  elements.modalHead.addEventListener('click', handlePartnerChipClick);
  elements.modalClose.addEventListener('click', closeModal);
  elements.overlay.addEventListener('click', handleOverlayClick);
  elements.overlay.addEventListener('keydown', handleModalKeydown);
  document.addEventListener('keydown', handleEscapeKey);

  // Keyboard activation for the click-driven interactive elements.
  const activateOnKeydown = (handler) => (event) => {
    if (!isActivationKey(event)) return;
    if (!event.target.closest('[tabindex]')) return;
    event.preventDefault();
    handler(event);
  };
  // "How the Rating works" needs no handler of its own any more: it is an
  // ordinary fragment link, and handleFragmentLinkClick opens the <details> and
  // the collapsed section around it on the way.

  elements.head.addEventListener('keydown', activateOnKeydown(handleColumnSort));
  elements.gridHost.addEventListener('keydown', activateOnKeydown(handleGridClick));
  elements.duoBody.addEventListener('keydown', activateOnKeydown(handleDuoClick));
  elements.swarmHost.addEventListener('keydown', activateOnKeydown(handleSwarmClick));
  elements.modalHead.addEventListener('keydown', activateOnKeydown(handlePartnerChipClick));
  window.addEventListener('popstate', () => {
    routeSetByApp = false;
    handleRoute();
  });

  // The strip wraps at narrow widths, so its height is a function of the
  // viewport. ResizeObserver where it exists; the resize event is the fallback.
  if (typeof window.ResizeObserver === 'function') {
    new window.ResizeObserver(refreshStickyLayout).observe(elements.sectionToc);
  }
  // A resize changes which tables overflow whether or not the strip rewraps, so
  // this listener is not a ResizeObserver fallback — it is needed either way.
  window.addEventListener('resize', refreshStickyLayout);
  // A mirrored header is fixed, so nothing moves it but this.
  window.addEventListener('scroll', onScrollFrame, { passive: true });

  // The Team filter and search box also drive the Top Duos table; gender and
  // min-games apply to the player table only (they don't affect pairs).
  getRequiredElement('team').addEventListener('input', renderDuos);
  getRequiredElement('search').addEventListener('input', renderDuos);
  ['search', 'team', 'pod', 'gender', 'captain', 'minq'].forEach((id) => {
    getRequiredElement(id).addEventListener('input', render);
  });

  render();
  // Applies any fragment the page was opened with: handleRoute lands in either
  // showMainView or renderTeamPage, and both re-apply it once they have content.
  handleRoute();
}

// Nothing here used to have an error state at all: a throw anywhere in
// initialize left whichever sections had already rendered and stopped, and a
// throw in an async path after it left the page looking finished and quietly
// stale. Either way the reader saw half a dashboard and no reason for it.
//
// One banner covers both. It replaces #mainview rather than sitting above it,
// because the sections behind it are the half-built state that caused the
// confusion, and it offers the two things that actually help: reload, or go
// back to a division that works.
let loadErrorShown = false;

function showFatalError(error) {
  window.console.error('CPL dashboard failed:', error);
  // First one wins. A failed render usually throws again on the next event, and
  // redrawing the banner under a reader who is mid-click is its own bug.
  if (loadErrorShown) return;
  loadErrorShown = true;
  const host = document.getElementById('mainview');
  if (!host) return;
  host.innerHTML = loadErrorHtml(
    "Couldn't load these standings. Reload the page, or go back to all divisions.",
    'Go back to all divisions',
    '../',
  );
  const teamView = document.getElementById('teamview');
  if (teamView) teamView.hidden = true;
}

// A rejected promise never reaches the try/catch below, and neither does a throw
// inside a listener registered by it — so both are caught where they surface.
window.addEventListener('error', (event) => showFatalError(event.error || event.message));
window.addEventListener('unhandledrejection', (event) => showFatalError(event.reason));

try {
  initialize();
} catch (error) {
  showFatalError(error);
}
