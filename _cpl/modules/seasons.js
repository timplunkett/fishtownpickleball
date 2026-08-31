// Season identity, discovery and the current/archived split.
//
// Every division the API returns carries a (seasonNumber, seasonYear) pair, and
// /seasons lists the pairs a given API leg knows about. A season is the unit
// this site freezes: once a season is archived it is never fetched again, and
// its compiled dashboards are served exactly as they were on the day it froze.

const fs = require('fs');
const path = require('path');

// The API numbers seasons 1–4 within a year. It publishes no names for them,
// only the number, so the mapping lives here — inferred from seasonCreationDate
// on every season the three API legs have returned so far (1 → created in
// January, 2 → June, 3 → July/August).
//
// A number outside this table is not an error: the league can add a winter
// season, or renumber, without asking. It degrades to a slug and label that are
// ugly but unambiguous rather than throwing, because the alternative is a
// pipeline that stops dead the first time upstream invents a season 5.
const SEASON_NAMES = Object.freeze({
  1: 'Spring',
  2: 'Summer',
  3: 'Fall',
  4: 'Winter',
});

function seasonName(seasonNumber) {
  return SEASON_NAMES[seasonNumber] || null;
}

// Directory name, and the middle segment of every dashboard URL:
// /cpl/travel/2026-fall/?d=<slug>. Year first so the directory listing sorts
// chronologically, which is also the order the archive is read in.
function seasonSlug(season) {
  const name = seasonName(season.seasonNumber);
  return name
    ? `${season.seasonYear}-${name.toLowerCase()}`
    : `${season.seasonYear}-s${season.seasonNumber}`;
}

// What a reader sees: "Fall 2026".
function seasonLabel(season) {
  const name = seasonName(season.seasonNumber);
  return name
    ? `${name} ${season.seasonYear}`
    : `Season ${season.seasonNumber} ${season.seasonYear}`;
}

// Chronological: year, then number within the year. Returns <0 when `a` is the
// older season, so a plain .sort() puts the oldest first and .at(-1) is newest.
function compareSeasons(a, b) {
  if (a.seasonYear !== b.seasonYear) return a.seasonYear - b.seasonYear;
  return a.seasonNumber - b.seasonNumber;
}

function parseSeasonSlug(slug) {
  const m = /^(\d{4})-(.+)$/.exec(String(slug || ''));
  if (!m) return null;
  const seasonYear = Number(m[1]);
  const tail = m[2].toLowerCase();
  const numeric = /^s(\d+)$/.exec(tail);
  if (numeric) return { seasonYear, seasonNumber: Number(numeric[1]) };
  const entry = Object.entries(SEASON_NAMES).find(([, name]) => name.toLowerCase() === tail);
  return entry ? { seasonYear, seasonNumber: Number(entry[0]) } : null;
}

const CONFIG_PATH = path.join(__dirname, '..', 'seasons.config.json');

// The manual half of "auto, with a manual override". Absent or malformed reads
// as "no overrides" rather than as a failure: the automatic rule below is a
// complete answer on its own, and a typo in a hand-edited config should not be
// able to stop a scheduled refresh.
function readSeasonConfig(configPath = CONFIG_PATH) {
  if (!fs.existsSync(configPath)) return {};
  try {
    const parsed = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch (err) {
    console.warn(`⚠️ ${path.basename(configPath)} is unreadable (${err.message}); using automatic season selection.`);
    return {};
  }
}

// Decide which season each league is currently playing, and therefore which
// ones are frozen.
//
// The automatic rule is "the newest season upstream lists is the current one",
// which is right almost always and wrong in exactly one window: the league
// creates next season's shell while this season's playoffs are still being
// played, and the current season would freeze with its last results missing.
// That window is what `pin` exists for — set it to a season slug to hold a
// season current past the arrival of its successor. `archive` is the opposite
// lever, for freezing a season early.
//
// Note that `active` on the API's season records is not consulted. Every season
// it has ever returned is active: true, including ones that finished a year ago,
// so it carries no information about what is being played now.
function classifySeasons(seasons, { pin = null, archive = [] } = {}) {
  const archived = new Set(archive || []);
  const sorted = [...seasons].sort(compareSeasons);
  const candidates = sorted.filter((season) => !archived.has(seasonSlug(season)));

  let current = null;
  if (pin) {
    current = sorted.find((season) => seasonSlug(season) === pin) || null;
    if (!current) {
      console.warn(`⚠️ Pinned season "${pin}" is not among the seasons upstream returned; falling back to the newest.`);
    }
  }
  if (!current) current = candidates.length ? candidates[candidates.length - 1] : null;

  const currentSlug = current ? seasonSlug(current) : null;
  return sorted.map((season) => {
    const slug = seasonSlug(season);
    return {
      slug,
      label: seasonLabel(season),
      seasonNumber: season.seasonNumber,
      seasonYear: season.seasonYear,
      status: slug === currentSlug ? 'current' : 'archived',
    };
  });
}

// Every season a league knows about, newest first, as the pipeline and the
// compiler both want them. `seasons` is the raw API records; the config is
// keyed by league.
function resolveLeagueSeasons(league, seasons, config = readSeasonConfig()) {
  const leagueConfig = (config && config[league]) || {};
  return classifySeasons(seasons, {
    pin: leagueConfig.pin || null,
    archive: Array.isArray(leagueConfig.archive) ? leagueConfig.archive : [],
  }).reverse();
}

function currentSeason(resolved) {
  return resolved.find((season) => season.status === 'current') || null;
}

// The one question the fetcher asks: may this season be refreshed at all?
//
// An archived season is frozen against *fetching*, not against compiling.
// Recompiling it from its cached JSON is how its shards stay readable by an
// app.js that has moved on since; refetching it is what would let an upstream
// edit — or an upstream outage — rewrite a season whose results are settled.
function isFetchable(season) {
  return season.status === 'current';
}

module.exports = {
  SEASON_NAMES,
  classifySeasons,
  compareSeasons,
  currentSeason,
  isFetchable,
  parseSeasonSlug,
  readSeasonConfig,
  resolveLeagueSeasons,
  seasonLabel,
  seasonName,
  seasonSlug,
};
