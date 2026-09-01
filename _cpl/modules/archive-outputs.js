// cpl/archive/data.js — one row per archived division, with who finished on the
// podium.
//
// Kept out of cpl/catalog.js on purpose. The catalog loads on every page of the
// site and needs to stay small; podium rows are read by exactly one page and
// grow with every season that finishes. Same split, and same reasoning, as
// cpl/dupr-audit/data.js.
//
// Built by reading the compiled data shards rather than the cached API JSON,
// because standings are a computed thing: the shard is where the win/loss
// ordering and the resolved playoff bracket already exist, and recomputing them
// here would be a second implementation to keep in step with the first.

const fs = require('fs');
const path = require('path');
const vm = require('node:vm');
const { expandJson } = require('./json-utils');

// Reads a compiled data-<slug>.js back into its DATA object. The shard is a
// plain assignment to window.DATA, so a bare context is enough.
function readCompiledData(filePath) {
  if (!fs.existsSync(filePath)) return null;
  const context = { window: {} };
  context.globalThis = context;
  try {
    vm.runInNewContext(fs.readFileSync(filePath, 'utf8'), context, { filename: filePath });
  } catch {
    return null;
  }
  return context.window.DATA || null;
}

// Who won a completed matchup. `result` is 'home' or 'away'.
function winnerOf(match) {
  if (!match || !match.complete) return null;
  return match.result === 'home' ? match.home : match.away;
}

function loserOf(match) {
  if (!match || !match.complete) return null;
  return match.result === 'home' ? match.away : match.home;
}

// The seeds a playoff match was contested between, as a sorted pair.
//
// These are seeds *within the round*, not within the division — a final between
// the two halves of a bracket is published as 1 v 1, because each side won its
// own half. So they identify a match's place in its round and nothing more,
// which is all that is needed below.
function seedPair(match) {
  const home = Number(match.homeSeed);
  const away = Number(match.awaySeed);
  if (!Number.isFinite(home) || !Number.isFinite(away)) return null;
  return [home, away].sort((a, b) => a - b);
}

const isPair = (pair, low, high) => !!pair && pair[0] === low && pair[1] === high;

// The podium, and — just as important — what decided it.
//
// The last round of one of these brackets takes one of two shapes, and the
// upstream round numbering does not distinguish them:
//
//   1v2 alone           — a final for gold and silver, no bronze match
//   1v2 together with 3v4 — the medal round: 1v2 for gold/silver, 3v4 for bronze
//
// The second shape is easy to misread as a pair of semi-finals waiting on a
// final that never appears, which is exactly what it was read as before: every
// local division that played its medal round was reported as undecided, and its
// champion — who had won — was left off the page entirely. There is no round
// after it, and the seeds give it away.
//
// Where no bronze match was played, third place has no result behind it: two
// beaten semi-finalists and nothing between them. The better seed of the two is
// used, which is a tiebreak rather than a fact — hence `thirdFromStandings`, so
// the page can say so.
function podiumOf(data) {
  const teams = Array.isArray(data.teams) ? data.teams : [];
  const standings = teams.map((team) => team.name);
  const rank = (name) => {
    const at = standings.indexOf(name);
    return at === -1 ? Number.MAX_SAFE_INTEGER : at;
  };

  const fromStandings = () => ({
    basis: 'standings',
    places: standings.slice(0, 3),
    thirdFromStandings: true,
  });

  const playoffs = Array.isArray(data.playoffs) ? data.playoffs : [];
  if (!playoffs.length) return fromStandings();

  const rounds = [...new Set(playoffs.map((match) => match.round))].sort((a, b) => a - b);
  const lastRound = rounds[rounds.length - 1];
  const finals = playoffs.filter((match) => match.round === lastRound);

  // One match left in the last round is the final, whatever its seeds read as.
  // Two matches pairing 1v2 with 3v4 is the medal round: the first is the
  // final, the second plays off for bronze. Anything else is a bracket this
  // code does not recognise, and the standings are the honest answer for it.
  let goldMatch = null;
  let bronzeMatch = null;
  if (finals.length === 1) {
    [goldMatch] = finals;
  } else if (finals.length === 2) {
    goldMatch = finals.find((match) => isPair(seedPair(match), 1, 2)) || null;
    bronzeMatch = finals.find((match) => isPair(seedPair(match), 3, 4)) || null;
    if (!goldMatch || !bronzeMatch) return fromStandings();
  } else {
    return fromStandings();
  }

  // A final nobody has played leaves the season undecided, whatever the
  // standings say about who led it — so the table falls back to the regular
  // season and labels itself as such rather than crowning the top seed.
  if (!goldMatch || !goldMatch.complete) return fromStandings();

  const champion = winnerOf(goldMatch);
  const runnerUp = loserOf(goldMatch);

  // Bronze, in order of preference: won on the court, else the better-seeded of
  // the two beaten semi-finalists, else the standings.
  let third = bronzeMatch && bronzeMatch.complete ? winnerOf(bronzeMatch) : null;
  const playedFor = !!third;
  if (!third) {
    const semiLosers = playoffs
      .filter((match) => match.round === lastRound - 1)
      .map(loserOf)
      .filter(Boolean)
      .sort((a, b) => rank(a) - rank(b));
    third = semiLosers[0]
      || standings.find((name) => name !== champion && name !== runnerUp)
      || null;
  }

  return {
    basis: 'playoffs',
    places: [champion, runnerUp, third].filter(Boolean),
    thirdFromStandings: !playedFor,
  };
}

// One row per division of every archived season, newest season first, in the
// catalog's own division order within each.
function buildArchiveRows(rootDir, { eachLeagueSeason, seasonOutDir, sortDivisionsForLeague }) {
  const rows = [];
  for (const { league, season, divisions } of eachLeagueSeason()) {
    if (season.status === 'current') continue;
    const outDir = seasonOutDir(rootDir, league, season.slug);
    for (const division of sortDivisionsForLeague(league, divisions)) {
      const data = readCompiledData(path.join(outDir, `data-${division.slug}.js`));
      if (!data) continue;
      const podium = podiumOf(data);
      rows.push({
        season: season.slug,
        seasonLabel: season.label,
        // The same numeric stamp the catalog carries (year and season number),
        // so the archive page can order seasons the way the landing page's
        // Archive box does. Without it the page fell back to the order these
        // rows happen to be emitted in — league by league — which put a local
        // season after every travel one however recently it was played.
        order: season.seasonYear * 10 + season.seasonNumber,
        league,
        slug: division.slug,
        division: division.divisionName,
        ...(division.clubName ? { clubName: division.clubName } : {}),
        teams: Array.isArray(data.teams) ? data.teams.length : 0,
        matches: (data.meta && data.meta.matchesPlayed) || 0,
        basis: podium.basis,
        thirdFromStandings: podium.thirdFromStandings,
        places: podium.places,
      });
    }
  }
  return rows;
}

function writeArchiveData(rootDir, helpers) {
  const rows = buildArchiveRows(rootDir, helpers);
  const outDir = path.join(rootDir, 'cpl', 'archive');
  fs.mkdirSync(outDir, { recursive: true });
  // levels=2: one row per line, so a season being archived shows up as the
  // handful of added lines it actually is.
  fs.writeFileSync(
    path.join(outDir, 'data.js'),
    `window.CPL_ARCHIVE = ${expandJson({ rows }, 2)};\n`,
  );
  console.log(`✓ archive/data.js written (${rows.length} archived division rows).`);
  return rows;
}

module.exports = { buildArchiveRows, podiumOf, readCompiledData, writeArchiveData };
