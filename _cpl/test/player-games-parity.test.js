// Confirms the two halves of the "stop shipping games" change still agree:
// cpl/app.js's mergePlayerDetails — CPLShared.derivePlayerGames plus the
// compiler's own fallback for names it can't resolve — has to reproduce
// exactly the `games` compileDivision itself computed for every player, in
// every order. Compiling straight from the cached API JSON in _cpl/data-*/,
// rather than reading what's already in cpl/<league>/<season>/compiled/,
// so this exercises the same derivation the next refresh will ship, not
// whatever happened to be compiled last.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const vm = require('node:vm');

const { compileDivision } = require('../modules/compiler');
const { cachedDivisions } = require('./helpers/compiled');
const { loadApp } = require('./helpers/app-harness');

// travel/2026-spring (largest division), travel/2025-fall (the old
// per-matchup id2name naming bug this change also fixes) and
// local/2026-summer (the blank-name outside-sub fallback). Compiling every
// cached division takes about 6s per 7 large travel divisions, so this stays
// small by default; CPL_PARITY_ALL=1 sweeps every cached division instead —
// useful after a data refresh, not needed on every run, since compileDivision
// already runs its own fallback check on every division on every --full
// compile.
const DEFAULT_SLUGS = new Set(['3bb6ae9d', '2c4f7612', 'c1b3f9c1']);

function divisionsToCheck() {
  const all = cachedDivisions();
  if (process.env.CPL_PARITY_ALL === '1') return all;
  return all.filter((division) => DEFAULT_SLUGS.has(division.slug));
}

// Every name that is empty, or shared by more than one player row — exactly
// what CPLShared.derivePlayerGames' own identity rule excludes. Used below to
// check that a fallback player has an actual reason, rather than the test
// just trusting the compiler's own say-so.
function namesWithNoSingleOwner(players) {
  const counts = new Map();
  for (const p of players) {
    const name = p.name || '';
    counts.set(name, (counts.get(name) || 0) + 1);
  }
  const bad = new Set();
  for (const [name, count] of counts) {
    if (!name || count > 1) bad.add(name);
  }
  return bad;
}

test('derivePlayerGames, via mergePlayerDetails, reproduces compileDivision\'s own game log for every player', (t) => {
  const divisions = divisionsToCheck();
  assert.ok(divisions.length, 'no cached divisions found under _cpl/data-*/ — did the fetcher ever run?');
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'cpl-games-parity-'));
  t.after(() => fs.rmSync(tmp, { recursive: true, force: true }));

  let playersChecked = 0;
  let fallbackPlayersChecked = 0;

  for (const division of divisions) {
    const label = `${division.league}/${division.season}/${division.slug}`;
    const outPath = path.join(tmp, `data-${division.slug}.js`);
    const detailPath = path.join(tmp, `detail-${division.slug}.js`);
    const { gamesByPid } = compileDivision(division.slug, division.dir, outPath, detailPath, {
      // renderHeader requires a clubName for a local division; travel never
      // reads it. Neither affects the game log this test checks.
      clubName: division.league === 'local' ? 'Test Club' : '',
      divisionName: division.slug,
      leagueType: division.league,
    });

    const { context } = loadApp(outPath);
    // detail-*.js is normally fetched lazily, the first time a player modal
    // opens (ensurePlayerDetails in app.js) — loadApp doesn't load it, so it's
    // loaded here the same way, then mergePlayerDetails is run directly,
    // exactly as ensurePlayerDetails would once the script arrived.
    vm.runInContext(fs.readFileSync(detailPath, 'utf8'), context, { filename: detailPath });
    context.mergePlayerDetails();

    // context.DATA.players lives in the vm sandbox's own realm — its arrays
    // and objects have a different Object/Array prototype than this process's,
    // which makes assert.deepEqual report a mismatch on every single property
    // regardless of content (it treats cross-realm objects as unequal). Round-
    // tripping through JSON, the same way compile-division.test.js's own
    // compileToObjects does, produces plain objects in this realm to compare
    // gamesByPid (already native to this realm) against.
    const players = JSON.parse(JSON.stringify(context.DATA.players));
    const details = (context.window.CPL_DETAILS || {})[context.DATA.meta.divisionSlug] || {};
    const badNames = namesWithNoSingleOwner(players);

    for (const player of players) {
      if (!player.playerId) continue;
      playersChecked += 1;
      const truth = gamesByPid.get(player.playerId) || [];
      assert.deepEqual(
        player.games,
        truth,
        `${label}: ${player.name} (${player.playerId})'s merged game log does not match compileDivision's own`,
      );

      const keptFallback = Array.isArray((details[player.playerId] || {}).games);
      if (!keptFallback) continue;
      fallbackPlayersChecked += 1;

      // A fallback is only legitimate because of derivePlayerGames' identity
      // rule: either this player's own name has no single owner, or one of
      // their games names a partner/opponent whose name doesn't either (which
      // is also what makes that game's sub/withSub/vsSub unrecoverable from
      // names alone — see the compiler's comment above the fallback). An
      // unexplained fallback would mean the derivation and the compiler have
      // silently drifted apart for some other reason.
      const ownNameBad = badNames.has(player.name || '');
      const gameNameBad = truth.some((g) => (
        badNames.has(g.with) || badNames.has(g.vs[0]) || badNames.has(g.vs[1])
      ));
      assert.ok(
        ownNameBad || gameNameBad,
        `${label}: ${player.name} (${player.playerId}) keeps a compiled game log with no empty/duplicate name nearby to explain it`,
      );
    }
  }

  assert.ok(playersChecked > 0, 'no players were checked at all');
  if (fallbackPlayersChecked) {
    console.log(`  (${fallbackPlayersChecked} of ${playersChecked} checked players kept a compiled fallback game log)`);
  }
});
