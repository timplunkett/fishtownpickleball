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
    // A rostered sub with no games yet but a posted lineup slot in the
    // pending week-2 matchup below (pendingDetail): seeded blank like any
    // other unplayed roster row, flagged as a sub. A sub with no matchup
    // appearance anywhere — played or pending — gets no row at all (see the
    // Echoes fixture further down). Placeholder-team entries never become
    // roster members regardless.
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
        { homePlayerId1: null, homePlayerId2: null, awayPlayerId1: null, awayPlayerId2: null, homeScore: null, awayScore: null, matchType: 'mixed', matchupId: 'm2' },
        { homePlayerId1: 'c1', homePlayerId2: null, awayPlayerId1: 'd1', awayPlayerId2: 's1', homeScore: null, awayScore: null, matchType: 'male', matchupId: 'm2' },
        { homePlayerId1: null, homePlayerId2: null, awayPlayerId1: 'd1', awayPlayerId2: 's1', homeScore: null, awayScore: null, matchType: 'female', matchupId: 'm2' },
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
        ...(opts.extraWeek1Games || []),
      ] } },
    },
  }, pendingDetail];

  fs.writeFileSync(path.join(dir, 'matchups.json'), JSON.stringify({
    $values: opts.noSchedule ? [] : [...matchups, ...(opts.extraMatchups || [])],
  }));
  // The league's own team list (/teams). Optional, like the real cache: a
  // division fetched before pods were added has none.
  if (opts.teamList) {
    fs.writeFileSync(path.join(dir, 'teams.json'), JSON.stringify({
      $values: opts.teamList.map((teamName) => ({ teamId: `id-${teamName}`, teamName, pod: 'TBD' })),
    }));
  }
  // Callers may append extra roster rows, and reorder the list to stand in for
  // the API handing us the same roster in a different (rank-driven) order.
  const rows = [...players, ...(opts.extraPlayers || [])];
  fs.writeFileSync(path.join(dir, 'players.json'), JSON.stringify({ $values: opts.orderPlayers ? opts.orderPlayers(rows) : rows }));
  fs.writeFileSync(path.join(dir, 'matchupDetails.json'), JSON.stringify(opts.noSchedule ? [] : [...matchupDetails, ...(opts.extraMatchupDetails || [])]));
  fs.writeFileSync(path.join(dir, 'playoffMatchups.json'), JSON.stringify({ $values: opts.playoffMatchups || [] }));
  fs.writeFileSync(path.join(dir, 'playoffMatchupDetails.json'), JSON.stringify(opts.playoffMatchupDetails || []));
}

function compileToObjects(t, opts = {}) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'cpl-compile-'));
  t.after(() => fs.rmSync(tmp, { recursive: true, force: true }));
  const dataDir = path.join(tmp, 'division');
  writeDivision(dataDir, opts);
  const outPath = path.join(tmp, 'data-testslug.js');
  const detailPath = path.join(tmp, 'detail-testslug.js');
  const result = compileDivision('testslug', dataDir, outPath, detailPath, {
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
    ratingByPid: result.ratingByPid,
    gamesByPid: result.gamesByPid,
    playoffGamesByPid: result.playoffGamesByPid,
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
  // Sam Sub is rostered as a sub on Dinkers with no games played yet, and now
  // gets seeded alongside its starters rather than being left off entirely.
  assert.deepEqual(rosterOf('Dinkers').map((p) => p.name).sort(), ['Dan Delta', 'Sam Sub']);
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

// buildPlayerIndex reads this back to put a Rating on the cross-league finder
// entry for this division — see the note on it in modules/compiler.js. It has
// to agree with what actually got written to data-testslug.js, not with a
// second computation of its own.
test('the returned ratingByPid matches what was written to the data file, unrated players excluded', (t) => {
  const { data, ratingByPid } = compileToObjects(t);
  const rated = data.players.filter((p) => p.rating != null);
  assert.ok(rated.length > 0, 'expected at least one rated player in this fixture');
  rated.forEach((p) => {
    assert.equal(ratingByPid.get(p.playerId), p.rating, `${p.name}'s rating disagrees with data.players`);
  });

  // Cal Charlie's team hasn't played (see the previous test): rating: null in
  // the data file, and no entry at all here — a finder row for him should show
  // no Rating rather than a false 0.0.
  const unrated = data.players.filter((p) => p.rating == null);
  assert.ok(unrated.length > 0, 'expected at least one unrated player in this fixture');
  unrated.forEach((p) => {
    assert.equal(ratingByPid.has(p.playerId), false, `${p.name} has no rating but got a map entry anyway`);
  });
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
  // One captain has posted a partial lineup naming Eve; Eli has never been
  // named anywhere — not this lineup, not any other matchup in the division.
  const fixtureDetail = {
    matchupId: 'm3',
    details: {
      matchup: { endResult: null },
      matchupPlayerStats: { $values: [] },
      lineups: { lineups: { $values: [
        { homePlayerId1: 'a1', homePlayerId2: 'a2', awayPlayerId1: 'e1', awayPlayerId2: null, homeScore: null, awayScore: null, matchType: 'male', matchupId: 'm3' },
      ] } },
    },
  };

  ['preSeason', 'inSeason'].forEach((phase) => {
    const { data } = compileToObjects(t, {
      preSeason: phase === 'preSeason',
      extraPlayers: allSubRoster,
      extraMatchups: [fixture],
      extraMatchupDetails: [fixtureDetail],
    });
    const names = data.teams.map((team) => team.name);
    assert.ok(names.includes('Echoes'), `${phase}: Echoes is scheduled but missing from teams`);
    // Every row on this roster is a sub (the league's own "unconfirmed
    // roster" state). Eve was actually named in a posted lineup slot for the
    // scheduled-but-unscored matchup, so she gets seeded with blank stats;
    // Eli was never named in any matchup, played or pending, so he gets no
    // roster row at all — a team that fields real matches should show the
    // subs who've actually turned up, not its whole unconfirmed sub pool.
    const echoesRoster = data.players.filter((p) => p.team === 'Echoes');
    assert.deepEqual(echoesRoster.map((p) => p.name), ['Eve Echo'], `${phase}: only the sub named in a posted lineup became a roster row`);
    assert.ok(echoesRoster.every((p) => p.outsideSub === true), `${phase}: unconfirmed subs should still carry the sub badge`);
    assert.equal(data.players.some((p) => p.name === 'Eli Evans'), false, `${phase}: a sub with zero matchup appearances anywhere stays off the roster`);
    // And every team named in the schedule has a row.
    const scheduled = new Set(data.matches.flatMap((m) => [m.home, m.away]));
    scheduled.forEach((name) => {
      assert.ok(names.includes(name), `${phase}: ${name} plays but has no row`);
    });
  });
});

test('rostered subs appear on the roster; placeholder teams are still excluded', (t) => {
  const { data } = compileToObjects(t);
  const sam = data.players.find((p) => p.name === 'Sam Sub');
  assert.ok(sam, 'a rostered sub with no games yet still gets a roster row');
  assert.equal(sam.team, 'Dinkers');
  assert.equal(sam.gamesPlayed, 0);
  assert.equal(sam.outsideSub, true, 'flagged the same way a sub who has actually played would be');
  assert.equal(data.players.some((p) => p.name === 'Pat Placeholder'), false, 'a placeholder team is not a real roster');
  assert.equal(data.teams.some((team) => team.name === 'Open Play'), false);
});

test('before any schedule is posted, the league team list stands in for it', (t) => {
  // Rosters go up weeks before fixtures (2026 Winter travel): matchups.json is
  // empty, so no team "has matchups". The division must still list its teams
  // and rostered players, as the Player Finder already does from players.json.
  const { data } = compileToObjects(t, {
    noSchedule: true,
    teamList: ['Aces', 'Bandits', 'Crushers', 'Dinkers'],
  });
  assert.deepEqual(data.teams.map((team) => team.name), ['Aces', 'Bandits', 'Crushers', 'Dinkers']);
  assert.deepEqual(
    data.players.map((p) => `${p.name}/${p.team}`),
    ['Abe Anders/Aces', 'Ann Alpha/Aces', 'Bea Bravo/Bandits', 'Ben Boone/Bandits', 'Cal Charlie/Crushers', 'Cat Cortez/Crushers', 'Dan Delta/Dinkers'],
  );
  assert.equal(data.matches.length, 0);
  // With no fixtures there is nothing to split the division on.
  assert.deepEqual([...new Set(data.teams.map((team) => team.pod))], [1]);
  // Nobody has played or been named in a lineup, so the sub stays off the
  // roster, and a team the league does not list is still not a team.
  assert.equal(data.players.some((p) => p.name === 'Sam Sub'), false);
  assert.equal(data.players.some((p) => p.name === 'Pat Placeholder'), false);
});

test('a team on the league list but in no posted fixture is still excluded once a schedule exists', (t) => {
  const { data } = compileToObjects(t, {
    teamList: ['Aces', 'Bandits', 'Crushers', 'Dinkers', 'Open Play'],
  });
  assert.equal(data.teams.some((team) => team.name === 'Open Play'), false);
  assert.equal(data.players.some((p) => p.name === 'Pat Placeholder'), false);
});

test('detail entries exist for players with history and are omitted otherwise', (t) => {
  const { data, details, gamesByPid } = compileToObjects(t);
  assert.ok(details.a1, 'a player who played has a detail entry');
  assert.equal(details.a1.log.length, 1);
  // Ann Alpha's name is unambiguous, so the browser can rebuild her game log
  // from DATA.matches itself (CPLShared.derivePlayerGames) — the compiled
  // detail no longer has to carry it. gamesByPid is the ground truth this was
  // checked against: it is returned regardless of what got emitted.
  assert.equal(details.a1.games, undefined);
  assert.equal(gamesByPid.get('a1').length, 2);
  assert.equal(details.c1, undefined, 'an unplayed player has no detail entry');
  // Summary records never carry the detail arrays.
  for (const player of data.players) {
    assert.equal(player.log, undefined);
    assert.equal(player.games, undefined);
  }
  // compileDivision always writes into a compiled/ subdirectory in
  // production, so the meta field it stores always carries that prefix
  // regardless of where this test's own tmp fixture happens to put the file.
  assert.equal(data.meta.detailFile, 'compiled/detail-testslug.js');
});

// Posted lineups for an unplayed matchup drive the projections on a team's
// upcoming schedule. Without them the UI can only say "Lineups have not been
// posted yet", so they have to survive compilation whether or not the division
// has any completed matches yet. In the days before a match one team routinely
// submits before the other, and a slot can sit open inside an otherwise-set
// pair, so a half-filled row survives too with "" for what isn't posted — the
// dashboard shows those slots as TBD. So does a row nobody's in yet: a game's
// place in the list is its court and round, so a blank one in the middle stays
// where it is rather than moving every game after it up a place.
const assertPostedLineups = (data) => {
  const upcoming = data.matches.find((m) => m.week === 2);
  assert.equal(upcoming.complete, false);
  assert.equal(upcoming.games.length, 4, 'every game keeps its place, the blank one included');
  // Sam Sub is rostered as a sub on Dinkers (the away team here), so every
  // game he's posted in carries an `aSub` flag alongside his name — the only
  // signal available pre-score, since the league hasn't published
  // matchupPlayerStats for this matchup yet.
  assert.deepEqual(upcoming.games, [
    { t: 'male', h: ['Cal Charlie', 'Cat Cortez'], a: ['Dan Delta', 'Sam Sub'], aSub: [0, 1] },
    { t: 'mixed', h: ['', ''], a: ['', ''] },
    { t: 'male', h: ['Cal Charlie', ''], a: ['Dan Delta', 'Sam Sub'], aSub: [0, 1] },
    { t: 'female', h: ['', ''], a: ['Dan Delta', 'Sam Sub'], aSub: [0, 1] },
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
// DATA.players; extraPlayerIds exists to cover the ones that don't. Rostered
// subs now get a player row like anyone else (see the roster-seeding tests
// above), so the case this still covers is a roster row that never gets a
// player row at all — a placeholder-team entry, like Pat Placeholder here.
test('extraPlayerIds carries the roster names that have no player row', (t) => {
  const { data } = compileToObjects(t);
  assert.equal(data.extraPlayerIds['Pat Placeholder'], 'p1');
  assert.equal(data.players.some((p) => p.name === 'Pat Placeholder'), false, 'and that is the only place he appears');
  // Sam Sub, by contrast, now has his own player row (a rostered sub with no
  // games yet), so he's no longer one of the "extra" names.
  assert.equal('Sam Sub' in data.extraPlayerIds, false);
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
    // Dinkers' roster is its one starter plus Sam Sub, the rostered sub with
    // no games yet — Cal's extra row on Dinkers never displaces either.
    assert.deepEqual(data.players.filter((p) => p.team === 'Dinkers').map((p) => p.name).sort(), ['Dan Delta', 'Sam Sub']);
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

// Regression for a standings bug reported 2026-09-11: two undefeated teams
// with a different number of match wins (2-0 vs 1-0) both got ratio(w,l) === 1
// (losses is 0 for both), so a tie on match record fell straight through to
// the game-record tiebreaker — letting a team with fewer match wins but a
// cleaner individual-game sweep outrank a team with strictly more match wins.
test('a team with more match wins outranks one with fewer, even if its game record is worse', (t) => {
  const aces2ndWin = {
    matchupId: 'm4', weekNumber: 4, homeTeamId: TEAMS.A, awayTeamId: 'team-osprey',
    homeName: 'Aces', awayName: 'Ospreys', homePoints: 20, awayPoints: 18,
    endResult: 'home', scheduledTime: '2026-08-31T19:00:00',
  };
  const foxesWin = {
    matchupId: 'm5', weekNumber: 4, homeTeamId: 'team-fox', awayTeamId: 'team-gull',
    homeName: 'Foxes', awayName: 'Gulls', homePoints: 22, awayPoints: 10,
    endResult: 'home', scheduledTime: '2026-08-31T19:00:00',
  };
  const aces2ndWinDetail = {
    matchupId: 'm4',
    details: {
      matchup: { endResult: 'home' },
      matchupPlayerStats: { $values: [
        matchupPlayer('a1', TEAMS.A, { gamesPlayed: 2, wins: 1, losses: 1, pointsWon: 20, totalPointsAgainst: 18 }),
        matchupPlayer('a2', TEAMS.A, { gamesPlayed: 2, wins: 1, losses: 1, pointsWon: 20, totalPointsAgainst: 18 }),
        matchupPlayer('o1', 'team-osprey', { gamesPlayed: 2, wins: 1, losses: 1, pointsWon: 18, totalPointsAgainst: 20 }),
        matchupPlayer('o2', 'team-osprey', { gamesPlayed: 2, wins: 1, losses: 1, pointsWon: 18, totalPointsAgainst: 20 }),
      ] },
      // Aces win the match (endResult: 'home') but split the individual games
      // 1-1, dragging their game record down to 3-1 (0.75) across both matches.
      lineups: { lineups: { $values: [
        { homePlayerId1: 'a1', homePlayerId2: 'a2', awayPlayerId1: 'o1', awayPlayerId2: 'o2', homeScore: 11, awayScore: 9, matchType: 'male', matchupId: 'm4' },
        { homePlayerId1: 'a1', homePlayerId2: 'a2', awayPlayerId1: 'o1', awayPlayerId2: 'o2', homeScore: 9, awayScore: 11, matchType: 'male', matchupId: 'm4' },
      ] } },
    },
  };
  const foxesWinDetail = {
    matchupId: 'm5',
    details: {
      matchup: { endResult: 'home' },
      matchupPlayerStats: { $values: [
        matchupPlayer('f1', 'team-fox', { gamesPlayed: 2, wins: 2, losses: 0, pointsWon: 22, totalPointsAgainst: 10 }),
        matchupPlayer('f2', 'team-fox', { gamesPlayed: 2, wins: 2, losses: 0, pointsWon: 22, totalPointsAgainst: 10 }),
        matchupPlayer('g1', 'team-gull', { gamesPlayed: 2, wins: 0, losses: 2, pointsWon: 10, totalPointsAgainst: 22 }),
        matchupPlayer('g2', 'team-gull', { gamesPlayed: 2, wins: 0, losses: 2, pointsWon: 10, totalPointsAgainst: 22 }),
      ] },
      // Foxes sweep both individual games: a perfect 2-0 game record, but from
      // a single match win — one fewer match win than Aces end up with.
      lineups: { lineups: { $values: [
        { homePlayerId1: 'f1', homePlayerId2: 'f2', awayPlayerId1: 'g1', awayPlayerId2: 'g2', homeScore: 11, awayScore: 5, matchType: 'male', matchupId: 'm5' },
        { homePlayerId1: 'f1', homePlayerId2: 'f2', awayPlayerId1: 'g1', awayPlayerId2: 'g2', homeScore: 11, awayScore: 5, matchType: 'male', matchupId: 'm5' },
      ] } },
    },
  };

  const { data } = compileToObjects(t, {
    extraMatchups: [aces2ndWin, foxesWin],
    extraMatchupDetails: [aces2ndWinDetail, foxesWinDetail],
    extraPlayers: [
      rosterPlayer('o1', 'Ollie', 'Osprey', 'team-osprey', 'Ospreys'),
      rosterPlayer('o2', 'Ona', 'Osprey', 'team-osprey', 'Ospreys'),
      rosterPlayer('f1', 'Finn', 'Fox', 'team-fox', 'Foxes'),
      rosterPlayer('f2', 'Fay', 'Fox', 'team-fox', 'Foxes'),
      rosterPlayer('g1', 'Gus', 'Gull', 'team-gull', 'Gulls'),
      rosterPlayer('g2', 'Gia', 'Gull', 'team-gull', 'Gulls'),
    ],
  });

  const aces = data.teams.find((team) => team.name === 'Aces');
  const foxes = data.teams.find((team) => team.name === 'Foxes');
  assert.equal(aces.w, 2, 'Aces are 2-0 across both matches');
  assert.equal(aces.l, 0);
  assert.equal(foxes.w, 1, 'Foxes are only 1-0');
  assert.equal(foxes.l, 0);
  assert.ok(aces.gw / (aces.gw + aces.gl) < foxes.gw / (foxes.gw + foxes.gl),
    'Aces have the worse game record of the two, by construction');

  const rank = (name) => data.teams.findIndex((team) => team.name === name);
  assert.ok(rank('Aces') < rank('Foxes'),
    `Aces (2-0) should outrank Foxes (1-0) in standings order, got ranks ${rank('Aces')} and ${rank('Foxes')}`);
});

// --- Same-name-and-team roster collisions -----------------------------------
// b0155ca (PR #46) rostered two "Steven Fernandez" rows on one team before the
// season started, each 0 GP with a different DUPR code — two placeholder rows
// for what turned out to be one bracket slot. Neither ever appears in a game,
// so this still collapses to a single row via the existing precedence, same
// as every version of the dedupe before this fix.
test('two pre-season rostered rows sharing a name collapse to one, by the existing precedence (b0155ca)', (t) => {
  const extraPlayers = [
    rosterPlayer('sf1', 'Steven', 'Fernandez', TEAMS.A, 'Aces', { dupr: '03101043', ranking: 50 }),
    rosterPlayer('sf2', 'Steven', 'Fernandez', TEAMS.A, 'Aces', { dupr: '125ae44c', ranking: 5 }),
  ];
  for (const data of bothOrders(t, { preSeason: true, extraPlayers })) {
    assert.equal(data.matches.every((m) => !m.complete), true, 'no match has been played');
    const rows = data.players.filter((p) => p.name === 'Steven Fernandez');
    assert.equal(rows.length, 1, 'two inactive duplicates still collapse to one row');
    assert.equal(rows[0].playerId, 'sf2', 'the existing precedence (here: the better league rank) decides the tie-break');
  }
});

// The bug this plan fixes: two different playerIds share a name and a team,
// and *both* have actually played. Dropping either one would erase a real
// person's games, so both keep a row — the second with a disambiguating
// suffix so every name-keyed join downstream (the match card, m.subs,
// Lineup Lab) still resolves to exactly one person.
function addEdwinGarciaMatchup(opts) {
  const matchup = {
    matchupId: 'm-eg', weekNumber: 5, homeTeamId: TEAMS.A, awayTeamId: 'team-opp',
    homeName: 'Aces', awayName: 'Opponents', homePoints: 11, awayPoints: 5,
    endResult: 'home', scheduledTime: '2026-09-01T19:00:00',
  };
  const detail = {
    matchupId: 'm-eg',
    details: {
      matchup: { endResult: 'home' },
      matchupPlayerStats: { $values: [
        matchupPlayer('eg1', TEAMS.A, { gamesPlayed: 1, wins: 1, losses: 0, pointsWon: 11, totalPointsAgainst: 5 }),
        matchupPlayer('eg2', TEAMS.A, { gamesPlayed: 1, wins: 1, losses: 0, pointsWon: 11, totalPointsAgainst: 5, isSub: true }),
        matchupPlayer('op1', 'team-opp', { gamesPlayed: 1, wins: 0, losses: 1, pointsWon: 5, totalPointsAgainst: 11 }),
        matchupPlayer('op2', 'team-opp', { gamesPlayed: 1, wins: 0, losses: 1, pointsWon: 5, totalPointsAgainst: 11 }),
      ] },
      lineups: { lineups: { $values: [
        { homePlayerId1: 'eg1', homePlayerId2: 'eg2', awayPlayerId1: 'op1', awayPlayerId2: 'op2', homeScore: 11, awayScore: 5, matchType: 'male', matchupId: 'm-eg' },
      ] } },
    },
  };
  return {
    ...opts,
    extraPlayers: [
      ...(opts.extraPlayers || []),
      rosterPlayer('eg1', 'Edwin', 'Garcia', TEAMS.A, 'Aces', { ranking: 9 }),
      rosterPlayer('eg2', 'Edwin', 'Garcia', TEAMS.A, 'Aces', { isSub: true, ranking: 27 }),
      rosterPlayer('op1', 'Oscar', 'Pike', 'team-opp', 'Opponents'),
      rosterPlayer('op2', 'Opal', 'Pike', 'team-opp', 'Opponents'),
    ],
    extraMatchups: [...(opts.extraMatchups || []), matchup],
    extraMatchupDetails: [...(opts.extraMatchupDetails || []), detail],
  };
}

const UUID_LIKE = /^[0-9a-f]{8}-[0-9a-f]{4}-/i;

test('two active players sharing a name and team both keep a row (Edwin Garcia case)', (t) => {
  for (const data of bothOrders(t, addEdwinGarciaMatchup({}))) {
    const rostered = data.players.find((p) => p.playerId === 'eg1');
    const sub = data.players.find((p) => p.playerId === 'eg2');
    assert.ok(rostered && sub, 'both playerIds keep their own row');
    assert.equal(rostered.name, 'Edwin Garcia');
    assert.equal(sub.name, 'Edwin Garcia (2)');
    assert.equal(data.players.filter((p) => p.name === 'Edwin Garcia').length, 1);
    assert.equal(data.players.filter((p) => p.name === 'Edwin Garcia (2)').length, 1);

    const card = data.matches.find((m) => m.week === 5);
    assert.deepEqual(card.games[0].h, ['Edwin Garcia', 'Edwin Garcia (2)']);
    assert.deepEqual(card.subs, ['Edwin Garcia (2)']);

    assert.ok(data.availableSubs.some((s) => s.playerId === 'eg2'), 'the sub shows up for Lineup Lab');

    // No join for a *completed* match fell back to an empty string or a bare
    // UUID. (A pending match's "" is the deliberate TBD marker for a lineup
    // slot nobody has posted yet — see assertPostedLineups above — so this
    // only checks matches the league has actually scored.)
    for (const m of data.matches.filter((match) => match.complete)) {
      for (const g of (m.games || [])) {
        for (const slot of [...g.h, ...g.a]) {
          assert.notEqual(slot, '', `empty name in week ${m.week} vs ${m.away}`);
          assert.equal(UUID_LIKE.test(slot), false, `UUID-shaped name "${slot}" in week ${m.week}`);
        }
      }
      for (const sub of (m.subs || [])) {
        assert.notEqual(sub, '');
        assert.equal(UUID_LIKE.test(sub), false, `UUID-shaped sub name "${sub}"`);
      }
    }
  }
});

// An outside sub the league never rosters at all gets no players.json row, so
// nameById has nothing for their pid and they read as "" wherever a lineup
// names them (m.games) — and, because subNamesByMatchupId falls back to the
// bare pid when the name is blank, m.subs carries that pid instead of a name
// for them too. CPLShared.derivePlayerGames only ever matches `m.subs` by
// name, so it can't recognize this sub as a sub at all: their own game log
// can't be derived (their name is empty, so derivePlayerGames' identity rule
// excludes it outright), and everyone who played with or against them gets a
// wrong withSub/vsSub if their log were derived instead of compiled. All of
// them keep a compiled `games` as a fallback. This is the
// local/2026-summer blank-name-sub case (see the plan this implements).
function addOutsideSubMatchup(opts) {
  const matchup = {
    matchupId: 'm-os', weekNumber: 8, homeTeamId: 'team-hawks', awayTeamId: 'team-owls',
    homeName: 'Hawks', awayName: 'Owls', homePoints: 11, awayPoints: 5,
    endResult: 'home', scheduledTime: '2026-09-22T19:00:00',
  };
  const detail = {
    matchupId: 'm-os',
    details: {
      matchup: { endResult: 'home' },
      matchupPlayerStats: { $values: [
        matchupPlayer('hk1', 'team-hawks', { gamesPlayed: 1, wins: 1, losses: 0, pointsWon: 11, totalPointsAgainst: 5 }),
        matchupPlayer('osub1', 'team-hawks', { gamesPlayed: 1, wins: 1, losses: 0, pointsWon: 11, totalPointsAgainst: 5, isSub: true }),
        matchupPlayer('ow1', 'team-owls', { gamesPlayed: 1, wins: 0, losses: 1, pointsWon: 5, totalPointsAgainst: 11 }),
        matchupPlayer('ow2', 'team-owls', { gamesPlayed: 1, wins: 0, losses: 1, pointsWon: 5, totalPointsAgainst: 11 }),
      ] },
      lineups: { lineups: { $values: [
        { homePlayerId1: 'hk1', homePlayerId2: 'osub1', awayPlayerId1: 'ow1', awayPlayerId2: 'ow2', homeScore: 11, awayScore: 5, matchType: 'male', matchupId: 'm-os' },
      ] } },
    },
  };
  return {
    ...opts,
    extraPlayers: [
      ...(opts.extraPlayers || []),
      rosterPlayer('hk1', 'Hank', 'Hawk', 'team-hawks', 'Hawks'),
      rosterPlayer('ow1', 'Olive', 'Owl', 'team-owls', 'Owls'),
      rosterPlayer('ow2', 'Otto', 'Owl', 'team-owls', 'Owls'),
      // osub1 is deliberately absent: an outside sub the league never
      // rostered gets no players.json row at all.
    ],
    extraMatchups: [...(opts.extraMatchups || []), matchup],
    extraMatchupDetails: [...(opts.extraMatchupDetails || []), detail],
  };
}

test('a blank-named outside sub, and everyone who played with or against them, keep a compiled game log', (t) => {
  const { details, gamesByPid } = compileToObjects(t, addOutsideSubMatchup({}));

  for (const pid of ['hk1', 'osub1', 'ow1', 'ow2']) {
    assert.ok(details[pid], `${pid} has a detail entry`);
    assert.ok(Array.isArray(details[pid].games) && details[pid].games.length > 0,
      `${pid} keeps a compiled game log because derivePlayerGames can't reproduce it`);
    assert.deepEqual(details[pid].games, gamesByPid.get(pid),
      `the kept games match the ground truth compileDivision returns for ${pid}`);
  }
  // The blank name itself never leaks into the kept detail.
  assert.equal(details.hk1.games[0].with, '');
  assert.equal(details.osub1.games[0].with, 'Hank Hawk');
});

// An active player and an inactive same-name-and-team duplicate: this is the
// pre-fix behavior b0155ca relied on, and it must still hold — only the
// playerId that actually appears in a game gets a row, and every other join
// keyed off that name (extraPlayerIds here) is unaffected by the duplicate
// ever having existed.
test('an active player and an inactive same-name duplicate: only the active one survives (Scott Nissenbaum case)', (t) => {
  const activeMatchup = {
    matchupId: 'm-nn', weekNumber: 6, homeTeamId: TEAMS.A, awayTeamId: 'team-opp2',
    homeName: 'Aces', awayName: 'Rivals', homePoints: 11, awayPoints: 5,
    endResult: 'home', scheduledTime: '2026-09-08T19:00:00',
  };
  const activeDetail = {
    matchupId: 'm-nn',
    details: {
      matchup: { endResult: 'home' },
      matchupPlayerStats: { $values: [
        matchupPlayer('nn1', TEAMS.A, { gamesPlayed: 1, wins: 1, losses: 0, pointsWon: 11, totalPointsAgainst: 5 }),
        matchupPlayer('a2', TEAMS.A, { gamesPlayed: 1, wins: 1, losses: 0, pointsWon: 11, totalPointsAgainst: 5 }),
        matchupPlayer('r1', 'team-opp2', { gamesPlayed: 1, wins: 0, losses: 1, pointsWon: 5, totalPointsAgainst: 11 }),
        matchupPlayer('r2', 'team-opp2', { gamesPlayed: 1, wins: 0, losses: 1, pointsWon: 5, totalPointsAgainst: 11 }),
      ] },
      lineups: { lineups: { $values: [
        { homePlayerId1: 'nn1', homePlayerId2: 'a2', awayPlayerId1: 'r1', awayPlayerId2: 'r2', homeScore: 11, awayScore: 5, matchType: 'male', matchupId: 'm-nn' },
      ] } },
    },
  };
  const base = {
    extraPlayers: [
      rosterPlayer('nn1', 'Nora', 'Nissenbaum', TEAMS.A, 'Aces', { ranking: 15 }),
      rosterPlayer('r1', 'Rae', 'Rival', 'team-opp2', 'Rivals'),
      rosterPlayer('r2', 'Remy', 'Rival', 'team-opp2', 'Rivals'),
    ],
    extraMatchups: [activeMatchup],
    extraMatchupDetails: [activeDetail],
  };
  const withDuplicate = {
    ...base,
    extraPlayers: [
      ...base.extraPlayers,
      rosterPlayer('nn2', 'Nora', 'Nissenbaum', TEAMS.A, 'Aces', { ranking: 2, gamesPlayed: 0 }),
    ],
  };

  const baseline = compileToObjects(t, base).data;
  for (const data of bothOrders(t, withDuplicate)) {
    const noras = data.players.filter((p) => p.name === 'Nora Nissenbaum');
    assert.equal(noras.length, 1, 'the inactive duplicate does not get its own row');
    assert.equal(noras[0].playerId, 'nn1', 'the active pid is the one kept');
    assert.deepEqual(data.extraPlayerIds, baseline.extraPlayerIds,
      'extraPlayerIds (and so playerIdsByName underneath it) is unaffected by the inactive duplicate');
  }
});

test('a same-name-and-team collision prints exactly one warning line, naming both pids', (t) => {
  const warn = t.mock.method(console, 'warn', () => {});
  compileToObjects(t, addEdwinGarciaMatchup({}));
  const lines = warn.mock.calls.map((c) => c.arguments[0]).filter((msg) => typeof msg === 'string' && msg.includes('Edwin Garcia'));
  assert.equal(lines.length, 1, 'exactly one warning for this collision');
  assert.match(lines[0], /^⚠️ /);
  assert.match(lines[0], /eg1/);
  assert.match(lines[0], /eg2/);
  assert.match(lines[0], /kept both/);
});

test('a provisional match lists its unscored game, flagged, and no stat counts it', (t) => {
  const lineup = (homeScore, awayScore) => ({
    homePlayerId1: 'a1', homePlayerId2: 'a2', awayPlayerId1: 'b1', awayPlayerId2: 'b2',
    homeScore, awayScore, matchType: 'male', matchupId: 'm-prov',
  });
  const { data, gamesByPid } = compileToObjects(t, {
    extraMatchups: [{
      matchupId: 'm-prov', weekNumber: 3, homeTeamId: TEAMS.A, awayTeamId: TEAMS.B,
      homeName: 'Aces', awayName: 'Bandits', homePoints: 0, awayPoints: 0,
      endResult: null, scheduledTime: '2026-08-24T19:00:00',
    }],
    extraMatchupDetails: [{
      matchupId: 'm-prov',
      details: {
        matchup: { endResult: null },
        matchupPlayerStats: { $values: [] },
        // 3-0 with one game left blank: nothing left can overturn it.
        lineups: { lineups: { $values: [lineup(11, 4), lineup(11, 6), lineup(11, 9), lineup(null, null)] } },
      },
    }],
  });

  const match = data.matches.find(m => m.week === 3);
  assert.equal(match.result, 'home');
  assert.equal(match.provisional, true);
  assert.deepEqual([match.homeGW, match.awayGW], [3, 0], 'the blank game is nobody\'s game win');
  assert.deepEqual([match.homePoints, match.awayPoints], [33, 19]);
  assert.equal(match.games.length, 4, 'the blank game is still listed');
  assert.deepEqual(match.games[3], {
    t: 'male', ns: 1, hs: null, as: null, h: ['Ann Alpha', 'Abe Anders'], a: ['Bea Bravo', 'Ben Boone'],
  });
  // a1 played two games in week 1 and three scored ones here.
  assert.equal(gamesByPid.get('a1').length, 5);
});

// A confirmed match can carry games the league never played: blank, or at
// 0–0, once the night was already decided (four 2026-fall travel matches have
// them, one a 12–12 settled on points with eight 0–0 games). The league's own
// player rows count a 0–0 game for nobody, so neither does anything here: not
// the match's game record, the standings, the format splits, or a player's
// game log. Both still show in the match's game list, flagged `ns`.
test('a confirmed match\'s unplayed games count for neither side', (t) => {
  const unplayed = (homeScore, awayScore) => ({
    homePlayerId1: 'a1', homePlayerId2: 'a2', awayPlayerId1: 'b1', awayPlayerId2: 'b2',
    homeScore, awayScore, matchType: 'male', matchupId: 'm1',
  });
  const { data, gamesByPid } = compileToObjects(t, { extraWeek1Games: [unplayed(0, 0), unplayed(null, null)] });
  const match = data.matches.find((m) => m.week === 1);
  assert.deepEqual([match.homeGW, match.awayGW], [2, 0]);
  assert.deepEqual(match.games.map((g) => g.ns || 0), [0, 0, 1, 1]);
  const team = (name) => data.teams.find((candidate) => candidate.name === name);
  assert.deepEqual([team('Aces').gw, team('Aces').gl, team('Bandits').gw, team('Bandits').gl], [2, 0, 0, 2]);
  assert.deepEqual(team('Bandits').fmt.male, [0, 2]);
  assert.equal(gamesByPid.get('b1').length, 2, 'no phantom loss in the game log');
});

// A playoff match between Aces and Bandits: two games, then a tiebreak round
// the match didn't need, recorded 0–0. Xia Xu is rostered as a sub and plays
// only in the playoffs. A regular match here is two games long (the modal
// lineup count; see regularMatchLength), so the third game is the tiebreak.
function playoffFixture() {
  const g = (h1, h2, a1, a2, homeScore, awayScore) => ({
    homePlayerId1: h1, homePlayerId2: h2, awayPlayerId1: a1, awayPlayerId2: a2,
    homeScore, awayScore, matchType: 'male', matchupId: 'p1',
  });
  return {
    extraPlayers: [rosterPlayer('x1', 'Xia', 'Xu', TEAMS.B, 'Bandits', { isSub: true })],
    playoffMatchups: [{
      matchupId: 'p1', weekNumber: 1, homeTeamId: TEAMS.A, awayTeamId: TEAMS.B,
      homeName: 'Aces', awayName: 'Bandits', homePoints: 22, awayPoints: 15,
      endResult: 'home', scheduledTime: '2026-09-20T10:00:00', playoffGame: 1,
      homePodRanking: 1, awayPodRanking: 2,
    }],
    playoffMatchupDetails: [{
      matchupId: 'p1',
      details: {
        matchup: { endResult: 'home' },
        matchupPlayerStats: { $values: [
          matchupPlayer('a1', TEAMS.A, { gamesPlayed: 2, wins: 2, losses: 0, pointsWon: 22, totalPointsAgainst: 15, genderWins: 2 }),
          matchupPlayer('a2', TEAMS.A, { gamesPlayed: 2, wins: 2, losses: 0, pointsWon: 22, totalPointsAgainst: 15, genderWins: 2 }),
          matchupPlayer('b1', TEAMS.B, { gamesPlayed: 1, wins: 0, losses: 1, pointsWon: 9, totalPointsAgainst: 11, genderLosses: 1 }),
          matchupPlayer('b2', TEAMS.B, { gamesPlayed: 1, wins: 0, losses: 1, pointsWon: 6, totalPointsAgainst: 11, genderLosses: 1 }),
          matchupPlayer('x1', TEAMS.B, { isSub: true, gamesPlayed: 2, wins: 0, losses: 2, pointsWon: 15, totalPointsAgainst: 22, genderLosses: 2 }),
        ] },
        lineups: { lineups: { $values: [
          g('a1', 'a2', 'b1', 'x1', 11, 9),
          g('a1', 'a2', 'b2', 'x1', 11, 6),
          g('a1', 'a2', 'b1', 'b2', 0, 0),
        ] } },
      },
    }],
  };
}

test('playoff games count toward the rating, and nothing else regular-season', (t) => {
  const without = compileToObjects(t, { extraPlayers: playoffFixture().extraPlayers });
  const { data, details } = compileToObjects(t, playoffFixture());
  const ann = data.players.find((p) => p.name === 'Ann Alpha');
  const annBefore = without.data.players.find((p) => p.name === 'Ann Alpha');

  // Two regular games and two playoff games; the unneeded 0–0 tiebreak is
  // nobody's game, or it would have been read as an even one.
  assert.equal(annBefore.ratingGames, 2);
  assert.equal(ann.ratingGames, 4);
  assert.ok(ann.rating > annBefore.rating, 'two more wins raise the rating');

  // Every regular-season total and the standings are left alone.
  for (const key of ['matches', 'gamesPlayed', 'wins', 'losses', 'pointsWon', 'winPct', 'diff']) {
    assert.equal(ann[key], annBefore[key], `Ann's ${key} changed`);
  }
  const record = (teams) => teams.map(({ name, w, l, gw, gl, pf, pa }) => ({ name, w, l, gw, gl, pf, pa }));
  assert.deepEqual(record(data.teams), record(without.data.teams));

  // The rating history carries on into the bracket, under the round's label.
  assert.deepEqual(data.meta.ratingHistoryWeeks.at(-1), { playoffRound: 1, label: 'P1', seq: 1 });
  const lastSnapshot = details.a1.ratingHistory.at(-1);
  assert.equal(lastSnapshot.label, 'P1');
  assert.equal(lastSnapshot.rating, ann.rating);
  assert.equal(lastSnapshot.ratingGames, 4);
});

test('a player\'s playoff matches get a match log and a game log of their own', (t) => {
  const { data, details, playoffGamesByPid } = compileToObjects(t, playoffFixture());

  assert.deepEqual(details.a1.playoffLog, [{
    round: 1, opp: 'Bandits', homeAway: 'H', w: 2, l: 0, gp: 2, pf: 22, pa: 15,
    mx: [0, 0], gn: [2, 0], cl: [0, 0], teamRes: 'W', teamGW: 2, teamGL: 0, sub: 0, subFor: null,
  }]);
  assert.equal(details.c1, undefined, 'a player with nothing to show ships no detail');
  assert.equal(details.b1.playoffLog[0].teamRes, 'L');

  // The game log is derived in the browser from DATA.playoffs, which now names
  // the match's subs, so nobody here needs the compiled fallback.
  assert.deepEqual(data.playoffs[0].subs, ['Xia Xu']);
  assert.equal(details.a1.playoffGames, undefined);
  assert.deepEqual(playoffGamesByPid.get('a1').map((g) => [g.wk, g.opp, g.with, g.vs, g.f, g.a, g.w, g.tb]), [
    [1, 'Bandits', 'Abe Anders', ['Bea Bravo', 'Xia Xu'], 11, 9, 1, undefined],
    [1, 'Bandits', 'Abe Anders', ['Ben Boone', 'Xia Xu'], 11, 6, 1, undefined],
  ]);
  assert.deepEqual(playoffGamesByPid.get('a1')[0].vsSub, [0, 1]);

  // A sub who played only in the playoffs gets a row: no regular-season
  // games, but a rating and the playoff logs.
  const xia = data.players.find((p) => p.name === 'Xia Xu');
  assert.ok(xia, 'the playoff-only sub has no player row');
  assert.equal(xia.team, 'Bandits');
  assert.equal(xia.gamesPlayed, 0);
  assert.equal(xia.ratingGames, 2);
  assert.ok(xia.rating < 0);
  assert.equal(details.x1.playoffLog[0].sub, 1);
  assert.equal(playoffGamesByPid.get('x1').length, 2);
  assert.ok(playoffGamesByPid.get('x1').every((g) => g.sub === 1 && g.subFor === 'Bandits'));
});

test('a playoff tiebreak game that was played counts, flagged', (t) => {
  const fixture = playoffFixture();
  const games = fixture.playoffMatchupDetails[0].details.lineups.lineups.$values;
  // 1–1 after the regular games, settled by the tiebreak.
  games[1] = { ...games[1], homeScore: 6, awayScore: 11 };
  games[2] = { ...games[2], homeScore: 11, awayScore: 4 };
  const { data, details, playoffGamesByPid } = compileToObjects(t, fixture);
  assert.equal(data.players.find((p) => p.name === 'Ann Alpha').ratingGames, 5);
  const annGames = playoffGamesByPid.get('a1');
  assert.deepEqual(annGames.map((g) => g.tb), [undefined, undefined, 1]);
  assert.equal(details.a1.playoffGames, undefined, 'the browser derives the tb flag too');
});
