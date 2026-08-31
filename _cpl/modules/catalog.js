// The site catalog: every league, every season of it, and every division of
// each season, in one small generated file (cpl/catalog.js).
//
// This replaces the pair of per-league bootstrap.js division lists that each
// dashboard used to load. Those worked when a league was one flat list, but a
// season dimension turns "load the other league's list too" into "load the
// other league's list, for this season, plus my own league's other seasons" —
// three files and growing, each of which has to be discovered before it can be
// loaded. One catalog answers all of it and is smaller than the two files it
// replaces, because a division entry here is four fields.
//
// It is built by reading the cache, not by remembering what this run compiled,
// so a single-division or single-league compile still writes a complete catalog.

const fs = require('fs');
const path = require('path');
const { getLandingSlug, getLeagueDataConfig, sortDivisionsForLeague } = require('./division-utils');
const { expandJson } = require('./json-utils');
const { resolveLeagueSeasons } = require('./seasons');

// Travel first: it heads the menus, and it is the league most people arrive for.
const LEAGUES = Object.freeze(['travel', 'local']);

const LEAGUE_LABELS = Object.freeze({
  travel: 'Cross Club League',
  local: 'Local Leagues',
});

function readJsonOr(filePath, fallback) {
  if (!fs.existsSync(filePath)) return fallback;
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return fallback;
  }
}

function leagueDataDir(league) {
  const { dataSubdir } = getLeagueDataConfig(league);
  return path.join(__dirname, '..', dataSubdir);
}

// A league's seasons, newest first, already classified current/archived by the
// rule in seasons.js and the overrides in seasons.config.json.
function readLeagueSeasons(league) {
  const { seasonsFile } = getLeagueDataConfig(league);
  const raw = readJsonOr(path.join(leagueDataDir(league), seasonsFile), []);
  return resolveLeagueSeasons(league, Array.isArray(raw) ? raw : []);
}

function readSeasonDivisions(league, seasonSlug) {
  const { divisionsFile } = getLeagueDataConfig(league);
  const raw = readJsonOr(path.join(leagueDataDir(league), seasonSlug, divisionsFile), []);
  return Array.isArray(raw) ? raw : [];
}

// Every (league, season, divisions) group the cache holds, for the callers that
// have to walk all of them: the player index, the DUPR shards and the catalog
// itself. A season listed in seasons.json with no divisions.json on disk is
// skipped rather than emitted empty — that is what a season looks like between
// being discovered and being fetched.
function eachLeagueSeason(leagues = LEAGUES) {
  const out = [];
  for (const league of leagues) {
    for (const season of readLeagueSeasons(league)) {
      const divisions = readSeasonDivisions(league, season.slug);
      if (!divisions.length) continue;
      out.push({ league, season, divisions });
    }
  }
  return out;
}

// Where a division's compiled output lives, and where its cached input does.
function seasonOutDir(rootDir, league, seasonSlug) {
  return path.join(rootDir, 'cpl', league, seasonSlug);
}

function seasonCacheDir(league, seasonSlug) {
  return path.join(leagueDataDir(league), seasonSlug);
}

// The compile stamp for a division this run did not recompile, recovered from
// its data file so the catalog can report a per-division freshness even after a
// single-division or single-league build. writeDataScript emits the value as a
// literal assignment on its own line, so a regex reads it back — parsing a
// multi-megabyte data file to recover one string would not be worth it.
function readCompiledAsOf(outDir, slug) {
  const dataPath = path.join(outDir, `data-${slug}.js`);
  if (!fs.existsSync(dataPath)) return '';
  const match = /^\s*DATA\.meta\.asOf = ("(?:[^"\\]|\\.)*");/m.exec(fs.readFileSync(dataPath, 'utf8'));
  return match ? JSON.parse(match[1]) : '';
}

function buildCatalog(rootDir, { asOfBySlug = new Map() } = {}) {
  const leagues = LEAGUES.map((league) => {
    const seasons = readLeagueSeasons(league).map((season) => {
      const divisions = sortDivisionsForLeague(league, readSeasonDivisions(league, season.slug));
      const outDir = seasonOutDir(rootDir, league, season.slug);
      return {
        slug: season.slug,
        label: season.label,
        status: season.status,
        landingSlug: getLandingSlug(league, divisions),
        divisions: divisions.map((div) => ({
          slug: div.slug,
          divisionName: div.divisionName,
          ...(div.clubName ? { clubName: div.clubName } : {}),
          ...(() => {
            const asOf = asOfBySlug.get(`${league}/${season.slug}/${div.slug}`)
              || readCompiledAsOf(outDir, div.slug);
            return asOf ? { asOf } : {};
          })(),
        })),
      };
    }).filter((season) => season.divisions.length);

    const current = seasons.find((season) => season.status === 'current');
    return {
      key: league,
      label: LEAGUE_LABELS[league] || league,
      // Null when every season of this league is archived — a league that has
      // wound down. The redirect stub lands on the newest season instead.
      current: current ? current.slug : null,
      seasons,
    };
  }).filter((league) => league.seasons.length);

  return { leagues };
}

function writeCatalog(rootDir, options) {
  const catalog = buildCatalog(rootDir, options);
  const outPath = path.join(rootDir, 'cpl', 'catalog.js');
  // levels=6 is what it takes to reach one division per line: catalog → leagues
  // → league → seasons → season → divisions → entry. A refresh changes one
  // division's asOf, and that should be one changed line rather than a
  // rewritten file.
  fs.writeFileSync(outPath, `window.CPL_CATALOG = ${expandJson(catalog, 6)};\n`);
  const seasonCount = catalog.leagues.reduce((sum, league) => sum + league.seasons.length, 0);
  const divisionCount = catalog.leagues.reduce(
    (sum, league) => sum + league.seasons.reduce((n, season) => n + season.divisions.length, 0),
    0,
  );
  console.log(`✓ catalog.js written (${catalog.leagues.length} leagues, ${seasonCount} seasons, ${divisionCount} divisions).`);
  return catalog;
}

module.exports = {
  LEAGUES,
  LEAGUE_LABELS,
  buildCatalog,
  eachLeagueSeason,
  readCompiledAsOf,
  readLeagueSeasons,
  readSeasonDivisions,
  seasonCacheDir,
  seasonOutDir,
  writeCatalog,
};
