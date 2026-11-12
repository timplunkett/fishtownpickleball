// Locating compiled output and cached input from a test.
//
// Both live one directory deeper than they used to: cpl/<league>/<season>/ and
// _cpl/data-<league>/<season>/. Several suites render every compiled division to
// check markup that only shows up on real data, and each of them was walking the
// directories itself — so each of them broke on the day seasons arrived, and
// would break again the next time the layout moves. One helper instead.
//
// Tests that read what a division *contains* should use archivedDivisions() /
// playedDivisions() / archivedCachedDivisions(), never the current or an
// upcoming season: those change on every data refresh, so a test reading them
// can start failing, or quietly stop checking anything, with no code change.
// Archived seasons are never fetched again (README "Seasons"), so their input
// only changes when the code compiling it does. compiledDivisions() and
// cachedDivisions() still list every season, for checks about the layout on
// disk rather than about the data.

const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const { readLeagueSeasons } = require('../../modules/catalog');

const ROOT = path.join(__dirname, '../../..');
const CPL = path.join(ROOT, 'cpl');
const LEAGUES = ['travel', 'local'];

// 'archived' | 'current' | 'upcoming', as the pipeline itself classifies
// seasons (seasons.js plus _cpl/seasons.config.json), keyed league/season.
const statusBySeason = new Map(LEAGUES.flatMap((league) => (
  readLeagueSeasons(league).map((season) => [`${league}/${season.slug}`, season.status])
)));
const seasonStatus = (league, season) => statusBySeason.get(`${league}/${season}`) || 'unknown';

function directoriesIn(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

// Every compiled division dataset, as { label, file, league, season, status, slug }.
// `label` is what a failing assertion prints, so it names the season too — a
// division slug alone no longer says which dashboard it came from.
//
// `compiled/` sits beside every league directory too — the per-league
// redirect.js, not a season — so it's filtered out here the same way a
// season with no data files would be.
function compiledDivisions() {
  return LEAGUES.flatMap((league) => (
    directoriesIn(path.join(CPL, league))
      .filter((season) => season !== 'compiled')
      .flatMap((season) => {
        const dir = path.join(CPL, league, season, 'compiled');
        if (!fs.existsSync(dir)) return [];
        return fs.readdirSync(dir)
          .filter((file) => /^data-[0-9a-f]+\.js$/.test(file))
          .sort()
          .map((file) => ({
            label: `${league}/${season}/${file}`,
            file: path.join(dir, file),
            league,
            season,
            status: seasonStatus(league, season),
            slug: /^data-([0-9a-f]+)\.js$/.exec(file)[1],
          }));
      })
  ));
}

// A compiled division's DATA, read in a bare sandbox (no app.js). Cached per
// file: several suites scan every division to pick one to render.
const dataByFile = new Map();
function compiledData(division) {
  if (!dataByFile.has(division.file)) {
    const context = { window: { CPL_DATASETS: {} } };
    context.globalThis = context;
    vm.runInNewContext(fs.readFileSync(division.file, 'utf8'), context, { filename: division.file });
    dataByFile.set(division.file, context.window.DATA);
  }
  return dataByFile.get(division.file);
}

// Every compiled division of an archived season.
function archivedDivisions() {
  return compiledDivisions().filter((division) => division.status === 'archived');
}

// Archived divisions that were actually played: teams, and at least one
// finished match with games. Use this, not compiledDivisions()[0], when a test
// needs *a* real division rather than *every* division: the first one in sort
// order changes whenever a season is added, archived or pruned.
function playedDivisions() {
  return archivedDivisions().filter((division) => {
    const data = compiledData(division);
    return data && (data.teams || []).length > 0
      && (data.matches || []).some((match) => match.complete && (match.games || []).length);
  });
}

// The compiled dataset for one division slug, whichever season holds it.
function compiledDivision(slug) {
  return compiledDivisions().find((division) => division.slug === slug) || null;
}

// Every cached division directory, as { league, season, status, slug, dir } — the raw
// API JSON the compiler reads, rather than what it wrote.
function cachedDivisions() {
  return LEAGUES.flatMap((league) => {
    const leagueDir = path.join(ROOT, '_cpl', `data-${league}`);
    return directoriesIn(leagueDir).flatMap((season) => (
      directoriesIn(path.join(leagueDir, season)).map((slug) => ({
        league,
        season,
        status: seasonStatus(league, season),
        slug,
        dir: path.join(leagueDir, season, slug),
      }))
    ));
  });
}

// Every cached division directory of an archived season.
function archivedCachedDivisions() {
  return cachedDivisions().filter((division) => division.status === 'archived');
}

module.exports = {
  CPL,
  LEAGUES,
  ROOT,
  archivedCachedDivisions,
  archivedDivisions,
  cachedDivisions,
  compiledData,
  compiledDivision,
  compiledDivisions,
  playedDivisions,
  seasonStatus,
};
