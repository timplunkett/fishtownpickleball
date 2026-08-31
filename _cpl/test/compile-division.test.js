const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const vm = require('node:vm');
const { compileDivision } = require('../modules/compiler');

// Two teams play in week 1; two more are scheduled but haven't played yet.
const TEAMS = { A: 'team-a', B: 'team-b', C: 'team-c', D: 'team-d' };

function rosterPlayer(id, first, last, teamId, teamName, extra = {}) {
  return {
    playerId: id, firstName: first, lastName: last, gender: 'Male',
    teamId, teamName, isSub: false, isCaptain: false, ranking: null,
    wins: 0, losses: 0, gamesPlayed: 0, ...extra,
  };
}

function matchupPlayer(id, teamId, stats) {
  return {
    playerId: id, teamId, isSub: false,
    gamesPlayed: 0, wins: 0, losses: 0, pointsWon: 0, totalPointsAgainst: 0,
    clutchWins: 0, clutchLosses: 0, mixedWins: 0, mixedLosses: 0,
    genderWins: 0, genderLosses: 0, ranking: null, ...stats,
  };
}

function writeDivision(dir, opts = {}) {
  fs.mkdirSync(dir, { recursive: true });

  const matchups = [
    {
      matchupId: 'm1', weekNumber: 1, homeTeamId: TEAMS.A, awayTeamId: TEAMS.B,
      homeName: 'Aces', awayName: 'Bandits',
      homePoints: opts.preSeason ? 0 : 22, awayPoints: opts.preSeason ? 0 : 16,
      endResult: opts.preSeason ? null : 'home', scheduledTime: '2026-08-10T19:00:00',
    },
    {
      matchupId: 'm2', weekNumber: 2, homeTeamId: TEAMS.C, awayTeamId: TEAMS.D,
      homeName: 'Crushers', awayName: 'Dinkers', homePoints: 0, awayPoints: 0,
      endResult: null, scheduledTime: '2026-08-17T19:00:00',
    },
  ];

  const players = [
    rosterPlayer('a1', 'Ann', 'Alpha', TEAMS.A, 'Aces', { isCaptain: true }),
    rosterPlayer('a2', 'Abe', 'Anders', TEAMS.A, 'Aces'),
    rosterPlayer('b1', 'Bea', 'Bravo', TEAMS.B, 'Bandits'),
    rosterPlayer('b2', 'Ben', 'Boone', TEAMS.B, 'Bandits'),
    rosterPlayer('c1', 'Cal', 'Charlie', TEAMS.C, 'Crushers'),
    rosterPlayer('c2', 'Cat', 'Cortez', TEAMS.C, 'Crushers', { isCaptain: true }),
    rosterPlayer('d1', 'Dan', 'Delta', TEAMS.D, 'Dinkers'),
    // Sub and placeholder-team entries must never become roster members.
    rosterPlayer('s1', 'Sam', 'Sub', TEAMS.D, 'Dinkers', { isSub: true }),
    rosterPlayer('p1', 'Pat', 'Placeholder', 'team-open', 'Open Play'),
  ];

  // Week 2 hasn't been played, but both captains have posted their lineups —
  // one complete game, and one still missing a partner.
  const pendingDetail = {
    matchupId: 'm2',
    details: {
      matchup: { endResult: null },
      matchupPlayerStats: { $values: [] },
      lineups: { lineups: { $values: [
        { homePlayerId1: 'c1', homePlayerId2: 'c2', awayPlayerId1: 'd1', awayPlayerId2: 's1', homeScore: null, awayScore: null, matchType: 'male', matchupId: 'm2' },
        { homePlayerId1: 'c1', homePlayerId2: null, awayPlayerId1: 'd1', awayPlayerId2: 's1', homeScore: null, awayScore: null, matchType: 'male', matchupId: 'm2' },
        { homePlayerId1: null, homePlayerId2: null, awayPlayerId1: 'd1', awayPlayerId2: 's1', homeScore: null, awayScore: null, matchType: 'female', matchupId: 'm2' },
        { homePlayerId1: null, homePlayerId2: null, awayPlayerId1: null, awayPlayerId2: null, homeScore: null, awayScore: null, matchType: 'mixed', matchupId: 'm2' },
      ] } },
    },
  };

  const matchupDetails = [{
    matchupId: 'm1',
    details: {
      matchup: { endResult: opts.preSeason ? null : 'home' },
      matchupPlayerStats: { $values: [
        matchupPlayer('a1', TEAMS.A, { gamesPlayed: 2, wins: 2, losses: 0, pointsWon: 22, totalPointsAgainst: 16 }),
        matchupPlayer('a2', TEAMS.A, { gamesPlayed: 2, wins: 2, losses: 0, pointsWon: 22, totalPointsAgainst: 16 }),
        matchupPlayer('b1', TEAMS.B, { gamesPlayed: 2, wins: 0, losses: 2, pointsWon: 16, totalPointsAgainst: 22 }),
        matchupPlayer('b2', TEAMS.B, { gamesPlayed: 2, wins: 0, losses: 2, pointsWon: 16, totalPointsAgainst: 22 }),
        ...(opts.extraMatchupStats || []),
      ] },
      lineups: { lineups: { $values: [
        { homePlayerId1: 'a1', homePlayerId2: 'a2', awayPlayerId1: 'b1', awayPlayerId2: 'b2', homeScore: opts.preSeason ? null : 11, awayScore: opts.preSeason ? null : 8, matchType: 'male', matchupId: 'm1' },
        { homePlayerId1: 'a1', homePlayerId2: 'a2', awayPlayerId1: 'b1', awayPlayerId2: 'b2', homeScore: opts.preSeason ? null : 11, awayScore: opts.preSeason ? null : 8, matchType: 'male', matchupId: 'm1' },
      ] } },
    },
  }, pendingDetail];

  fs.writeFileSync(path.join(dir, 'matchups.json'), JSON.stringify({
    $values: [...matchups, ...(opts.extraMatchups || [])],
  }));
  // Callers may append extra roster rows, and reorder the list to stand in for
  // the API handing us the same roster in a different (rank-driven) order.
  const rows = [...players, ...(opts.extraPlayers || [])];
  fs.writeFileSync(path.join(dir, 'players.json'), JSON.stringify({ $values: opts.orderPlayers ? opts.orderPlayers(rows) : rows }));
  fs.writeFileSync(path.join(dir, 'matchupDetails.json'), JSON.stringify(matchupDetails));
  fs.writeFileSync(path.join(dir, 'playoffMatchups.json'), JSON.stringify({ $values: [] }));
  fs.writeFileSync(path.join(dir, 'playoffMatchupDetails.json'), JSON.stringify([]));
}

function compileToObjects(t, opts = {}) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'cpl-compile-'));
  t.after(() => fs.rmSync(tmp, { recursive: true, force: true }));
  const dataDir = path.join(tmp, 'division');
  writeDivision(dataDir, opts);
  const outPath = path.join(tmp, 'data-testslug.js');
  const detailPath = path.join(tmp, 'detail-testslug.js');
  compileDivision('testslug', dataDir, outPath, detailPath, {
    clubName: 'Test Club', divisionName: '3.5 - 4.0', leagueType: 'local',
  });

  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(outPath, 'utf8'), sandbox);
  vm.runInContext(fs.readFileSync(detailPath, 'utf8'), sandbox);
  // Round-trip out of the vm realm so assertions compare native objects.
  return {
    data: JSON.parse(JSON.stringify(sandbox.window.DATA)),
    details: JSON.parse(JSON.stringify(sandbox.window.CPL_DETAILS.testslug)),
  };
}

test('teams whose first match has not been played still get a roster', (t) => {
  const { data } = compileToObjects(t);
  const rosterOf = (team) => data.players.filter((p) => p.team === team);

  assert.equal(data.teams.length, 4, 'all four scheduled teams appear');
  for (const team of ['Aces', 'Bandits', 'Crushers', 'Dinkers']) {
    assert.ok(rosterOf(team).length > 0, `${team} has a roster`);
  }
  assert.deepEqual(rosterOf('Crushers').map((p) => p.name).sort(), ['Cal Charlie', 'Cat Cortez']);
  assert.deepEqual(rosterOf('Dinkers').map((p) => p.name), ['Dan Delta']);
});

test('unplayed rostered players are zeroed and unrated', (t) => {
  const { data } = compileToObjects(t);
  const cal = data.players.find((p) => p.name === 'Cal Charlie');
  assert.equal(cal.matches, 0);
  assert.equal(cal.gamesPlayed, 0);
  assert.equal(cal.wins, 0);
  assert.equal(cal.winPct, 0);
  assert.equal(cal.rating, null);
  assert.equal(cal.ratingGames, 0);
  assert.equal(cal.confidence, 0);
  assert.equal(cal.outsideSub, false);
  assert.equal(cal.playerId, 'c1');
  // Captaincy still comes from the roster for unplayed teams.
  assert.equal(data.players.find((p) => p.name === 'Cat Cortez').isCaptain, true);
});

test('seeding does not disturb the stats of players who played', (t) => {
  const { data } = compileToObjects(t);
  const ann = data.players.find((p) => p.name === 'Ann Alpha');
  assert.equal(ann.matches, 1);
  assert.equal(ann.gamesPlayed, 2);
  assert.equal(ann.wins, 2);
  assert.equal(ann.losses, 0);
  assert.equal(ann.pointsWon, 22);
  assert.equal(ann.winPct, 100);
  assert.ok(ann.rating > 0, 'winner is rated above average');
  assert.equal(ann.isCaptain, true);

  const bea = data.players.find((p) => p.name === 'Bea Bravo');
  assert.equal(bea.wins, 0);
  assert.ok(bea.rating < 0, 'loser is rated below average');

  // Standings are unaffected by roster seeding.
  const aces = data.teams.find((team) => team.name === 'Aces');
  assert.equal(aces.w, 1);
  assert.equal(aces.l, 0);
  assert.equal(aces.gw, 2);
});

// The league marks every roster row isSub until a captain confirms the roster,
// and a team can be scheduled for a full season in that state. Pre-season, this
// used to leave the team out of the standings while its fixtures showed on every
// opponent's page — 3.25 Womens shipped that way on 2026-08-27.
test('a scheduled team with no confirmed roster is still in the division', (t) => {
  const allSubRoster = [
    rosterPlayer('e1', 'Eve', 'Echo', 'team-e', 'Echoes', { isSub: true }),
    rosterPlayer('e2', 'Eli', 'Evans', 'team-e', 'Echoes', { isSub: true }),
  ];
  const fixture = {
    matchupId: 'm3', weekNumber: 3, homeTeamId: TEAMS.A, awayTeamId: 'team-e',
    homeName: 'Aces', awayName: 'Echoes', homePoints: 0, awayPoints: 0,
    endResult: null, scheduledTime: '2026-08-24T19:00:00',
  };

  ['preSeason', 'inSeason'].forEach((phase) => {
    const { data } = compileToObjects(t, {
      preSeason: phase === 'preSeason',
      extraPlayers: allSubRoster,
      extraMatchups: [fixture],
    });
    const names = data.teams.map((team) => team.name);
    assert.ok(names.includes('Echoes'), `${phase}: Echoes is scheduled but missing from teams`);
    // Its subs are still not roster members, so the team has no players.
    assert.equal(data.players.filter((p) => p.team === 'Echoes').length, 0, `${phase}: subs became roster`);
    // And every team named in the schedule has a row.
    const scheduled = new Set(data.matches.flatMap((m) => [m.home, m.away]));
    scheduled.forEach((name) => {
      assert.ok(names.includes(name), `${phase}: ${name} plays but has no row`);
    });
  });
});

test('subs and placeholder teams are excluded from rosters', (t) => {
  const { data } = compileToObjects(t);
  assert.equal(data.players.some((p) => p.name === 'Sam Sub'), false);
  assert.equal(data.players.some((p) => p.name === 'Pat Placeholder'), false);
  assert.equal(data.teams.some((team) => team.name === 'Open Play'), false);
});

test('detail entries exist for players with history and are omitted otherwise', (t) => {
  const { data, details } = compileToObjects(t);
  assert.ok(details.a1, 'a player who played has a detail entry');
  assert.equal(details.a1.log.length, 1);
  assert.equal(details.a1.games.length, 2);
  assert.equal(details.c1, undefined, 'an unplayed player has no detail entry');
  // Summary records never carry the detail arrays.
  for (const player of data.players) {
    assert.equal(player.log, undefined);
    assert.equal(player.games, undefined);
  }
  assert.equal(data.meta.detailFile, 'detail-testslug.js');
});

// Posted lineups for an unplayed matchup drive the projections on a team's
// upcoming schedule. Without them the UI can only say "Lineups have not been
// posted yet", so they have to survive compilation whether or not the division
// has any completed matches yet. In the days before a match one team routinely
// submits before the other, and a slot can sit open inside an otherwise-set
// pair, so a half-filled row survives too with "" for what isn't posted — the
// dashboard shows those slots as TBD. Only a row with nothing in it is dropped.
const assertPostedLineups = (data) => {
  const upcoming = data.matches.find((m) => m.week === 2);
  assert.equal(upcoming.complete, false);
  assert.equal(upcoming.games.length, 3, 'the wholly empty lineup is dropped, the partial ones are kept');
  assert.deepEqual(upcoming.games, [
    { t: 'male', h: ['Cal Charlie', 'Cat Cortez'], a: ['Dan Delta', 'Sam Sub'] },
    { t: 'male', h: ['Cal Charlie', ''], a: ['Dan Delta', 'Sam Sub'] },
    { t: 'female', h: ['', ''], a: ['Dan Delta', 'Sam Sub'] },
  ]);
};

test('posted lineups reach an upcoming match mid-season', (t) => {
  assertPostedLineups(compileToObjects(t).data);
});

test('posted lineups reach an upcoming match before the season starts', (t) => {
  // Every match still unplayed takes the pre-season path, which used to build
  // the schedule from the matchup feed alone and drop the lineups entirely.
  const { data } = compileToObjects(t, { preSeason: true });
  assert.equal(data.matches.every((m) => !m.complete), true, 'no match has been played');
  assertPostedLineups(data);
});

// Lineups name players but don't identify them, so the dashboard joins them to
// the client-side DUPR table by name. Rostered players carry their own id in
// DATA.players; extraPlayerIds exists to cover the ones that don't — subs, who
// appear in lineups but never get a player row.
test('extraPlayerIds carries the roster names that have no player row', (t) => {
  const { data } = compileToObjects(t);
  assert.equal(data.extraPlayerIds['Sam Sub'], 's1');
  assert.equal(data.players.some((p) => p.name === 'Sam Sub'), false, 'and that is the only place the sub appears');
});

test('extraPlayerIds does not repeat players the roster already identifies', (t) => {
  const { data } = compileToObjects(t);
  assert.equal('Cal Charlie' in data.extraPlayerIds, false);
  assert.equal(data.players.find((p) => p.name === 'Cal Charlie').playerId, 'c1', 'because the player row already says so');
});

test('names held by two players are dropped rather than guessed', (t) => {
  // Joining a shared name to whichever row came last would quietly attribute
  // one player's DUPR to another. Better to leave them unrated. Cal Charlie
  // holds a player row, so the collision has to be resolved before the row is
  // written, not just filtered out of extraPlayerIds.
  const extraPlayers = [rosterPlayer('dupe', 'Sam', 'Sub', TEAMS.A, 'Aces', { isSub: true })];
  for (const data of bothOrders(t, { extraPlayers })) {
    assert.equal('Sam Sub' in data.extraPlayerIds, false);
    assert.equal(data.extraPlayerIds['Pat Placeholder'], 'p1', 'unambiguous names are unaffected');
  }
});

// The league API returns players in rank order, so the roster file's row order
// shifts whenever anyone's rank moves. Nothing the compiler reports may depend
// on it. Each case below is compiled twice, with the rows reversed the second
// time, and must give the same answer both ways.
const bothOrders = (t, opts) => [
  compileToObjects(t, opts).data,
  compileToObjects(t, { ...opts, orderPlayers: (rows) => [...rows].reverse() }).data,
];

test('a player rostered on two teams is credited to the one they actually play for', (t) => {
  // Cal Charlie also holds a roster row on Dinkers, but has played his games
  // for Crushers. Row order must not decide which team claims him.
  const extraPlayers = [
    rosterPlayer('c1', 'Cal', 'Charlie', TEAMS.D, 'Dinkers', { ranking: 4, gamesPlayed: 0 }),
  ];
  for (const data of bothOrders(t, { extraPlayers })) {
    const cal = data.players.filter((p) => p.name === 'Cal Charlie');
    assert.equal(cal.length, 1, 'the player is not duplicated across both teams');
    assert.equal(cal[0].team, 'Crushers');
    assert.deepEqual(data.players.filter((p) => p.team === 'Dinkers').map((p) => p.name), ['Dan Delta']);
  }
});

// Someone who subbed for two teams and is rostered on neither: two sub rows,
// each with its own rank. They surface on the dashboard through their matchup
// stats, as an outside sub.
const SUBBED_TWICE = {
  extraPlayers: [
    rosterPlayer('x1', 'Sub', 'Twice', TEAMS.A, 'Aces', { isSub: true, ranking: 31, gamesPlayed: 4 }),
    rosterPlayer('x1', 'Sub', 'Twice', TEAMS.B, 'Bandits', { isSub: true, ranking: 12, gamesPlayed: 9 }),
  ],
  extraMatchupStats: [
    matchupPlayer('x1', TEAMS.A, { gamesPlayed: 2, wins: 1, losses: 1, pointsWon: 20, totalPointsAgainst: 18, isSub: true }),
  ],
};

test('a player who only ever subbed reports their best league rank', (t) => {
  // The better rank wins from either direction. This used to fall out of the
  // API's rank ordering rather than being stated, so it silently changed
  // whenever that order shifted.
  for (const data of bothOrders(t, SUBBED_TWICE)) {
    const subbed = data.players.find((p) => p.playerId === 'x1');
    assert.ok(subbed, 'the outside sub appears on the dashboard');
    assert.equal(subbed.leagueRank, 12);
  }
});

test('a rostered row outranks a sub row for the reported league rank', (t) => {
  // The sub row carries the better number, but the rostered row is the one that
  // represents the player, so its rank is the one reported.
  const extraPlayers = [
    rosterPlayer('y1', 'Ros', 'Tered', TEAMS.A, 'Aces', { ranking: 40 }),
    rosterPlayer('y1', 'Ros', 'Tered', TEAMS.B, 'Bandits', { isSub: true, ranking: 2 }),
  ];
  for (const data of bothOrders(t, { extraPlayers })) {
    const player = data.players.find((p) => p.playerId === 'y1');
    assert.equal(player.team, 'Aces', 'the rostered row still owns the player');
    assert.equal(player.leagueRank, 40, 'the sub row does not supply the rank');
  }
});

test('reversing the roster file changes no reported value', (t) => {
  const [forward, reversed] = bothOrders(t, {
    ...SUBBED_TWICE,
    extraPlayers: [
      ...SUBBED_TWICE.extraPlayers,
      rosterPlayer('c1', 'Cal', 'Charlie', TEAMS.D, 'Dinkers', { ranking: 4, gamesPlayed: 0 }),
      rosterPlayer('y1', 'Ros', 'Tered', TEAMS.A, 'Aces', { ranking: 40 }),
      rosterPlayer('y1', 'Ros', 'Tered', TEAMS.B, 'Bandits', { isSub: true, ranking: 2 }),
    ],
  });
  const byId = (d) => Object.fromEntries(d.players.map((p) => [p.playerId, p]));
  assert.deepEqual(byId(forward), byId(reversed));
  const byTeam = (d) => Object.fromEntries(d.teams.map((x) => [x.name, x]));
  assert.deepEqual(byTeam(forward), byTeam(reversed));
});
