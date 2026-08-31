// Locating compiled output and cached input from a test.
//
// Both live one directory deeper than they used to: cpl/<league>/<season>/ and
// _cpl/data-<league>/<season>/. Several suites render every compiled division to
// check markup that only shows up on real data, and each of them was walking the
// directories itself — so each of them broke on the day seasons arrived, and
// would break again the next time the layout moves. One helper instead.

const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '../../..');
const CPL = path.join(ROOT, 'cpl');
const LEAGUES = ['travel', 'local'];

function directoriesIn(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

// Every compiled division dataset, as { label, file, league, season, slug }.
// `label` is what a failing assertion prints, so it names the season too — a
// division slug alone no longer says which dashboard it came from.
function compiledDivisions() {
  return LEAGUES.flatMap((league) => (
    directoriesIn(path.join(CPL, league)).flatMap((season) => {
      const dir = path.join(CPL, league, season);
      return fs.readdirSync(dir)
        .filter((file) => /^data-[0-9a-f]+\.js$/.test(file))
        .sort()
        .map((file) => ({
          label: `${league}/${season}/${file}`,
          file: path.join(dir, file),
          league,
          season,
          slug: /^data-([0-9a-f]+)\.js$/.exec(file)[1],
        }));
    })
  ));
}

// The compiled dataset for one division slug, whichever season holds it.
function compiledDivision(slug) {
  return compiledDivisions().find((division) => division.slug === slug) || null;
}

// Every cached division directory, as { league, season, slug, dir } — the raw
// API JSON the compiler reads, rather than what it wrote.
function cachedDivisions() {
  return LEAGUES.flatMap((league) => {
    const leagueDir = path.join(ROOT, '_cpl', `data-${league}`);
    return directoriesIn(leagueDir).flatMap((season) => (
      directoriesIn(path.join(leagueDir, season)).map((slug) => ({
        league,
        season,
        slug,
        dir: path.join(leagueDir, season, slug),
      }))
    ));
  });
}

module.exports = { CPL, LEAGUES, ROOT, cachedDivisions, compiledDivision, compiledDivisions };
