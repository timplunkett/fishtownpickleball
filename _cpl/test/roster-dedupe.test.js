// Unit coverage for the same-name-and-team roster dedupe
// (selectCanonicalRosterPlayers / collectLineupPlayerIds in modules/compiler.js),
// plus a regression against the real archived division the bug was found in.
// compile-division.test.js covers the behavior through a full compileDivision
// run with a synthetic roster; this file covers the pieces in isolation and
// against real, frozen data.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const vm = require('node:vm');
const {
  collectLineupPlayerIds, selectCanonicalRosterPlayers, compileDivision,
} = require('../modules/compiler');
const { ROOT } = require('./helpers/compiled');

function rosterPlayer(id, first, last, teamName, extra = {}) {
  return {
    playerId: id, firstName: first, lastName: last, gender: 'Male',
    teamName, isSub: false, isCaptain: false, ranking: null,
    wins: 0, losses: 0, gamesPlayed: 0, ...extra,
  };
}

test('selectCanonicalRosterPlayers: one playerId with both a sub row and a rostered row still collapses to one', () => {
  const players = [
    rosterPlayer('p1', 'Sam', 'Sub', 'Aces', { isSub: true, gamesPlayed: 2 }),
    rosterPlayer('p1', 'Sam', 'Sub', 'Aces', { isSub: false, gamesPlayed: 5 }),
  ];
  const kept = selectCanonicalRosterPlayers(players, {}, null);
  assert.equal(kept.length, 1, 'no activePids needed: this was never a multi-playerId group');
  assert.equal(kept[0].isSub, false, 'the rostered row wins, the same precedence as before this fix');
});

test('selectCanonicalRosterPlayers: activePids as a plain Set keeps every active pid', () => {
  const players = [
    rosterPlayer('a', 'Edwin', 'Garcia', 'Aces', { gamesPlayed: 10 }),
    rosterPlayer('b', 'Edwin', 'Garcia', 'Aces', { isSub: true, gamesPlayed: 3 }),
  ];
  const kept = selectCanonicalRosterPlayers(players, {}, null, { activePids: new Set(['a', 'b']) });
  assert.deepEqual(kept.map((p) => p.playerId).sort(), ['a', 'b']);
});

test('selectCanonicalRosterPlayers: activePids as a thunk only runs when a group actually collides', () => {
  let calls = 0;
  const thunk = () => { calls += 1; return new Set(); };

  const noCollision = [
    rosterPlayer('p1', 'Sam', 'Sub', 'Aces', { gamesPlayed: 1 }),
    rosterPlayer('p2', 'Other', 'Player', 'Bandits', { gamesPlayed: 1 }),
  ];
  const kept = selectCanonicalRosterPlayers(noCollision, {}, null, { activePids: thunk });
  assert.equal(kept.length, 2);
  assert.equal(calls, 0, 'a division with no same-name-and-team collision never has to read detail files twice');

  const withCollision = [
    ...noCollision,
    rosterPlayer('p3', 'Sam', 'Sub', 'Aces', { gamesPlayed: 0 }),
  ];
  selectCanonicalRosterPlayers(withCollision, {}, null, { activePids: thunk });
  assert.equal(calls, 1, 'a real collision calls the thunk exactly once');
});

test('selectCanonicalRosterPlayers: reports the collision through onCollision, rows in playerId order', () => {
  const players = [
    rosterPlayer('b-pid', 'Edwin', 'Garcia', 'Aces', { isSub: true, gamesPlayed: 6, dupr: 'G72M0X' }),
    rosterPlayer('a-pid', 'Edwin', 'Garcia', 'Aces', { gamesPlayed: 34, dupr: 'D9P526' }),
  ];
  const collisions = [];
  selectCanonicalRosterPlayers(players, {}, null, {
    activePids: new Set(['a-pid', 'b-pid']),
    onCollision: (collision) => collisions.push(collision),
  });
  assert.equal(collisions.length, 1);
  const [collision] = collisions;
  assert.equal(collision.name, 'Edwin Garcia');
  assert.equal(collision.team, 'Aces');
  assert.deepEqual(collision.rows.map((r) => r.playerId), ['a-pid', 'b-pid'], 'ascending playerId, not file order');
  assert.deepEqual(collision.kept.slice().sort(), ['a-pid', 'b-pid']);
});

test('collectLineupPlayerIds covers lineup slots, stat rows, and playoff details', () => {
  const matchupDetails = [
    {
      matchupId: 'm1',
      details: {
        lineups: { lineups: { $values: [
          { homePlayerId1: 'a', homePlayerId2: 'b', awayPlayerId1: 'c', awayPlayerId2: null },
        ] } },
        matchupPlayerStats: { $values: [{ playerId: 'd' }] },
      },
    },
  ];
  const playoffDetails = [
    {
      matchupId: 'p1',
      details: {
        lineups: { lineups: { $values: [
          { homePlayerId1: 'e', homePlayerId2: null, awayPlayerId1: null, awayPlayerId2: null },
        ] } },
      },
    },
  ];
  const ids = collectLineupPlayerIds([matchupDetails, playoffDetails]);
  assert.deepEqual([...ids].sort(), ['a', 'b', 'c', 'd', 'e']);
});

test('collectLineupPlayerIds tolerates missing or empty detail arrays', () => {
  assert.deepEqual([...collectLineupPlayerIds([])], []);
  assert.deepEqual([...collectLineupPlayerIds([[{ matchupId: 'm', details: null }]])], []);
  assert.deepEqual([...collectLineupPlayerIds()], []);
});

// Regression against the real division this bug was found in: archived, so its
// cached JSON is frozen and this test's expectations won't drift under it.
// local/2026-summer/c1b3f9c1 has two "Edwin Garcia" roster rows on
// Smash-holes! with different playerIds, both of whom actually played.
test('real data: the archived Smash-holes! Edwin Garcia collision resolves to two named players', (t) => {
  const divDataDir = path.join(ROOT, '_cpl', 'data-local', '2026-summer', 'c1b3f9c1');
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'cpl-roster-dedupe-'));
  t.after(() => fs.rmSync(tmp, { recursive: true, force: true }));
  const outPath = path.join(tmp, 'data-c1b3f9c1.js');
  const detailPath = path.join(tmp, 'detail-c1b3f9c1.js');

  compileDivision('c1b3f9c1', divDataDir, outPath, detailPath, {
    clubName: 'Robbinsville Pickle House', divisionName: '3.25 - 3.99', leagueType: 'local',
  });

  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(outPath, 'utf8'), sandbox);
  vm.runInContext(fs.readFileSync(detailPath, 'utf8'), sandbox);
  const data = JSON.parse(JSON.stringify(sandbox.window.DATA));

  const subEdwin = data.players.find((p) => p.playerId === '5b496dbc-7f42-44ca-9dd2-67347090b6c5');
  assert.ok(subEdwin, 'the sub Edwin Garcia keeps his own row instead of being merged away');
  assert.notEqual(subEdwin.name, '', 'and his name is not blank');

  const uuidLike = /^[0-9a-f]{8}-[0-9a-f]{4}-/i;
  assert.equal(uuidLike.test(subEdwin.name), false);

  for (const m of data.matches.filter((match) => match.complete)) {
    for (const g of (m.games || [])) {
      for (const slot of [...g.h, ...g.a]) {
        assert.notEqual(slot, '', `empty name in week ${m.week} vs ${m.away}`);
        assert.equal(uuidLike.test(slot), false, `UUID-shaped name "${slot}" in week ${m.week}`);
      }
    }
    for (const sub of (m.subs || [])) {
      assert.notEqual(sub, '');
      assert.equal(uuidLike.test(sub), false, `UUID-shaped sub name "${sub}"`);
    }
  }

  const names = data.players.map((p) => p.name);
  assert.ok(names.every((name) => name !== '' && !uuidLike.test(name)), 'no player row has a blank or UUID-shaped name');
  assert.equal(new Set(names).size, names.length, 'every display name in this division is unique');
});
