// cpl/playoffs/compiled/data.js — the playoff picture of every division in a
// season still being played: how far each one has got, its bracket as far as it
// can honestly be drawn, and who is still alive.
//
// Kept out of cpl/compiled/catalog.js for the same reason the archive's podium
// rows are: one page reads it, and the catalog loads everywhere. Built from the
// compiled data shards rather than the cached API JSON, because the shard is
// where standings order and provisional results have already been settled —
// working them out again here would be a second implementation to keep in step.
//
// Current seasons only. A finished season's outcome lives on /cpl/archive/, and
// an upcoming one has no bracket to show.

const fs = require('fs');
const path = require('path');
const { expandJson } = require('./json-utils');
const { readCompiledData } = require('./archive-outputs');
const { displayPodGroups } = require('./shared');

// A bye is published as a match against a team called "Bye" with no seed.
const isByeName = (name) => name == null || String(name).trim() === '' || /^bye$/i.test(String(name).trim());

function seedPair(match) {
  const home = Number(match.homeSeed);
  const away = Number(match.awaySeed);
  if (match.homeSeed == null || match.awaySeed == null) return null;
  if (!Number.isFinite(home) || !Number.isFinite(away)) return null;
  return [home, away].sort((a, b) => a - b);
}

const isPair = (pair, low, high) => !!pair && pair[0] === low && pair[1] === high;

// A playoff round's name, from how many matches it holds. The same rule as
// playoffRoundLabel in cpl/app.js, so the dashboard's bracket and this page
// name a round the same way (playoff-overview.test.js holds them together):
// one match is the Championship, two the Semifinals, up to four the
// Quarterfinals, then the Round of 16, 32, …. A bye counts as a match, so a
// round with byes still counts out to its full size.
function roundName(matchCount) {
  if (matchCount <= 1) return 'Championship';
  if (matchCount === 2) return 'Semifinals';
  if (matchCount <= 4) return 'Quarterfinals';
  return `Round of ${2 ** Math.ceil(Math.log2(matchCount * 2))}`;
}

// --- Matches as bracket slots ------------------------------------------------

function slotOf(match) {
  const homeBye = isByeName(match.home);
  const awayBye = isByeName(match.away);
  const slot = {};
  if (homeBye || awayBye) {
    // A bye always reads with the team on top, whichever side upstream put it.
    const team = homeBye ? match.away : match.home;
    const seed = homeBye ? match.awaySeed : match.homeSeed;
    slot.home = isByeName(team) ? null : team;
    slot.away = null;
    if (seed != null) slot.homeSeed = seed;
    slot.bye = true;
    return slot;
  }
  slot.home = match.home;
  slot.away = match.away;
  if (match.homeSeed != null) slot.homeSeed = match.homeSeed;
  if (match.awaySeed != null) slot.awaySeed = match.awaySeed;
  if (match.time) slot.time = match.time;
  if (match.complete) {
    slot.result = match.result;
    if (match.homeGW != null) slot.homeGW = match.homeGW;
    if (match.awayGW != null) slot.awayGW = match.awayGW;
    if (match.homePoints != null) slot.homePoints = match.homePoints;
    if (match.awayPoints != null) slot.awayPoints = match.awayPoints;
  }
  if (match.provisional) slot.provisional = true;
  return slot;
}

// The game number of a match, kept on the working copy of its slot only.
function withGame(slot, match) {
  if (match.game != null) slot.game = match.game;
  return slot;
}

// Who goes through. A bye's team goes through without playing; a projected
// slot has not been played by definition.
function winnerOf(slot) {
  if (slot.projected) return null;
  if (slot.bye) return slot.home || null;
  if (!slot.result) return null;
  return slot.result === 'home' ? slot.home : slot.away;
}

function loserOf(slot) {
  if (slot.projected || slot.bye || !slot.result) return null;
  return slot.result === 'home' ? slot.away : slot.home;
}

const participants = (slot) => [slot.home, slot.away].filter((team) => team != null);

// --- The medal round ---------------------------------------------------------
//
// Two matches seeded 1v2 and 3v4 as the last round are the final and the bronze
// match (README "Working out who won"). One more check than podiumOf makes,
// because this page reads brackets that are still being played: seeds are
// within the round, so a pair of semi-finals can also read 1v2 and 3v4. What
// tells them apart is who is in the 3v4. In a semi-final it is two of the
// previous round's winners; in a bronze match it is two of its losers.
function splitMedalRound(rounds) {
  const last = rounds[rounds.length - 1];
  if (!last || last.length !== 2) return null;
  const gold = last.find((match) => isPair(seedPair(match), 1, 2));
  const bronze = last.find((match) => isPair(seedPair(match), 3, 4));
  if (!gold || !bronze) return null;
  const previous = rounds[rounds.length - 2];
  if (previous) {
    const winners = new Set(previous.map((match) => winnerOf(slotOf(match))).filter(Boolean));
    if (winners.has(bronze.home) || winners.has(bronze.away)) return null;
  }
  return { gold, bronze };
}

// --- Linking posted rounds ---------------------------------------------------
//
// Upstream says nothing about which match feeds which: a round is a flat list,
// in whatever order it arrives. What does connect them is the teams — each
// match in a round is between the survivors of two matches of the round
// before. Every match of the next round has to find both its feeders, and
// every match of this round has to feed exactly one, or the rounds do not form
// a bracket this code understands and the page lists them as plain rounds.
function linkRounds(previous, next) {
  const used = new Array(previous.length).fill(false);
  const links = [];
  for (const slot of next) {
    if (slot.bye || slot.home == null || slot.away == null) return null;
    const from = [slot.home, slot.away].map((team) => (
      previous.findIndex((feeder) => participants(feeder).includes(team))
    ));
    if (from.some((index) => index < 0) || from[0] === from[1] || from.some((index) => used[index])) return null;
    from.forEach((index) => { used[index] = true; });
    links.push(from);
  }
  return used.every(Boolean) ? links : null;
}

// --- Drawing rounds nobody has posted yet ----------------------------------
//
// The league posts a bracket a round at a time, so most of the season the
// next round does not exist upstream yet. It can still be drawn when the pods
// say unambiguously which matches meet — and only then. Each match is
// characterised by the pods of every team that has fed it:
//
//  - Matches whose pods are the same set pair off when there are exactly two
//    of them. A 4.5 bracket with a North and a South half reads this way, and
//    so does every round after the first in a four-pod bracket.
//  - Otherwise a first round pairs by the usual crossover — A1 v B4 meets
//    B2 v A3, and A1's bye meets B2 v A3 — which reads as: the match holding a
//    top seed (or a bye) meets the one match whose lower-seeded team is from
//    that top seed's pod and whose higher seed is not. Spring 2026 drew every
//    travel bracket this way.
//
// In a first round, each pair must also be one top match and one other: two
// byes meeting each other is not a bracket anyone draws, and is what the pods
// alone would propose for a division that seeds across them.
//
// Anything else returns null, and the page says the draw is not out yet
// instead of guessing. A wrong bracket here is worse than none: it tells a
// team who it plays next. Every archived bracket, cut back a round at a time,
// is redrawn exactly or not at all (playoff-overview.test.js).
function pairForNextRound(slots, { firstRound, podOf }) {
  if (slots.length === 2) return [[0, 1]];
  if (slots.length < 2 || slots.length % 2) return null;

  const all = slots.map((_, index) => index);
  const pairs = pairByRegion(slots, all, { firstRound, podOf })
    || (firstRound ? pairByCrossover(slots, all, podOf) : null);
  if (!pairs) return null;
  // In the order the earlier match of each pair appears, so the drawing is
  // stable from one compile to the next.
  return pairs
    .map((pair) => pair.slice().sort((a, b) => a - b))
    .sort((a, b) => a[0] - b[0]);
}

// In a round with byes the bye-holders are the top matches; without, the
// matches holding a 1 seed are.
function topTest(slots) {
  const hasByes = slots.some((slot) => slot.bye);
  return (slot) => (hasByes
    ? !!slot.bye
    : Math.min(slot.homeSeed ?? Infinity, slot.awaySeed ?? Infinity) === 1);
}

function pairByRegion(slots, members, { firstRound, podOf }) {
  const regionOf = (slot) => [...new Set(slot.teams.map(podOf))].sort().join('|');
  const isTop = topTest(slots);
  const groups = new Map();
  members.forEach((index) => {
    const region = regionOf(slots[index]);
    if (!groups.has(region)) groups.set(region, []);
    groups.get(region).push(index);
  });
  const pairs = [];
  for (const group of groups.values()) {
    if (group.length % 2) return null;
    if (group.length === 2) {
      if (firstRound && isTop(slots[group[0]]) === isTop(slots[group[1]])) return null;
      pairs.push(group);
      continue;
    }
    if (!firstRound) return null;
    const crossed = pairByCrossover(slots, group, podOf);
    if (!crossed) return null;
    pairs.push(...crossed);
  }
  return pairs;
}

function pairByCrossover(slots, members, podOf) {
  const isTop = topTest(slots);
  const topTeam = (slot) => {
    if (slot.bye) return slot.home;
    return (slot.homeSeed ?? Infinity) <= (slot.awaySeed ?? Infinity) ? slot.home : slot.away;
  };
  // Does this match send its winner on to meet `pod`'s top seed? Its lower
  // seed is from that pod and its higher seed is not. Two teams on the same
  // seed (a 2v2) have no higher one, so either way round will do.
  const feedsPod = (slot, pod) => {
    if (slot.bye) return false;
    const homePod = podOf(slot.home);
    const awayPod = podOf(slot.away);
    if (slot.homeSeed != null && slot.homeSeed === slot.awaySeed) {
      return (homePod === pod) !== (awayPod === pod);
    }
    const higher = topTeam(slot) === slot.home ? homePod : awayPod;
    const lower = topTeam(slot) === slot.home ? awayPod : homePod;
    return lower === pod && higher !== pod;
  };
  const tops = members.filter((index) => isTop(slots[index]));
  const others = members.filter((index) => !isTop(slots[index]));
  if (!tops.length || tops.length !== others.length) return null;
  const taken = new Set();
  const pairs = [];
  for (const top of tops) {
    const pod = podOf(topTeam(slots[top]));
    if (!pod) return null;
    const candidates = others.filter((other) => feedsPod(slots[other], pod));
    if (candidates.length !== 1 || taken.has(candidates[0])) return null;
    taken.add(candidates[0]);
    pairs.push([top, candidates[0]]);
  }
  return pairs;
}

// --- Drawing the bracket from the league's game numbers -----------------------
//
// Each playoff match also carries `game`, its slot within its round: games
// 2k-1 and 2k of one round feed game k of the next, which is how the league's
// own bracket is drawn. Every archived travel bracket follows it. With game
// numbers the whole bracket can be drawn from the first round, whatever the
// pods are, and a round posted only in part keeps its posted matches.
//
// The numbers are still checked against the teams: a later match has to be
// between the survivors of the two games that feed it. A first round that is
// not games 1..n for a power-of-two n, or any match that does not fit, and the
// numbers are not trusted at all — the pods and teams take over as before.
function bracketByGame(posted) {
  const numbered = (slot) => Number.isInteger(slot.game) && slot.game >= 1;
  if (!posted.every((round) => round.slots.every(numbered))) return null;

  const placeByGame = (slots, width, isFinal) => {
    const byGame = new Map();
    for (const slot of slots) {
      // A lone final keeps whatever number it had before the bronze match was
      // split off it.
      const game = isFinal && slots.length === 1 ? 1 : slot.game;
      if (game > width || byGame.has(game)) return null;
      byGame.set(game, slot);
    }
    return byGame;
  };

  const first = posted[0].slots;
  const size = first.length;
  if (size & (size - 1)) return null;
  const firstByGame = placeByGame(first, size, size === 1);
  if (!firstByGame || firstByGame.size !== size) return null;
  const rounds = [{ number: posted[0].number, slots: Array.from({ length: size }, (_, i) => firstByGame.get(i + 1)) }];

  for (let width = size / 2, level = 1; width >= 1; width /= 2, level += 1) {
    const previous = rounds[level - 1].slots;
    const round = posted[level];
    const byGame = round ? placeByGame(round.slots, width, width === 1) : new Map();
    if (!byGame) return null;
    const slots = [];
    for (let k = 1; k <= width; k += 1) {
      const from = [2 * k - 2, 2 * k - 1];
      const [a, b] = from.map((index) => previous[index]);
      let slot = byGame.get(k);
      if (slot) {
        const fits = !slot.bye && slot.home != null && slot.away != null && (
          (a.teams.includes(slot.home) && b.teams.includes(slot.away))
          || (b.teams.includes(slot.home) && a.teams.includes(slot.away))
        );
        if (!fits) return null;
      } else {
        slot = { home: winnerOf(a), away: winnerOf(b), projected: true };
      }
      slot.from = from;
      slot.teams = [...new Set([...a.teams, ...b.teams])];
      slots.push(slot);
    }
    rounds.push({ number: round ? round.number : null, ...(round ? {} : { projected: true }), slots });
  }
  // More posted rounds than the first round leaves room for.
  if (posted.length > rounds.length) return null;
  return rounds;
}

// --- One division's bracket --------------------------------------------------

// The bracket as rounds of slots, each later slot naming the two slots of the
// round before that feed it (`from`). `linked` is false when the posted rounds
// do not chain into a bracket; the rounds are then listed without `from`.
// `drawPending` is true when the bracket stops short of a final because the
// next round has not been posted and cannot be drawn with confidence.
function buildBracket(data) {
  const playoffs = Array.isArray(data.playoffs) ? data.playoffs : [];
  if (!playoffs.length) return null;

  const teamByName = new Map((data.teams || []).map((team) => [team.name, team]));
  const podOf = (name) => {
    const team = teamByName.get(name);
    return (team && (team.reportedPod || team.podName)) || '';
  };

  const numbers = [...new Set(playoffs.map((match) => match.round || 1))].sort((a, b) => a - b);
  const posted = numbers.map((number) => playoffs.filter((match) => (match.round || 1) === number));

  const medal = splitMedalRound(posted);
  if (medal) posted[posted.length - 1] = [medal.gold];

  // Working copies carry `teams`, every team that has fed the slot, for the
  // pairing above. It is stripped before anything is written.
  const working = () => posted.map((matches, index) => ({
    number: numbers[index],
    slots: matches.map((match) => {
      const slot = withGame(slotOf(match), match);
      slot.teams = participants(slot);
      return slot;
    }),
  }));

  const byGame = bracketByGame(working());
  if (byGame) return bracketOut(byGame, numbers, { linked: true, drawPending: false, medal });

  const rounds = working();
  let linked = true;
  for (let index = 1; index < rounds.length; index += 1) {
    const links = linkRounds(rounds[index - 1].slots, rounds[index].slots);
    if (!links) {
      linked = false;
      break;
    }
    rounds[index].slots.forEach((slot, at) => {
      slot.from = links[at];
      slot.teams = [...new Set(links[at].flatMap((feeder) => rounds[index - 1].slots[feeder].teams))];
    });
  }
  if (!linked) rounds.forEach((round) => round.slots.forEach((slot) => { delete slot.from; }));

  let drawPending = false;
  if (linked) {
    for (;;) {
      const last = rounds[rounds.length - 1].slots;
      if (last.length <= 1) break;
      const pairs = pairForNextRound(last, { firstRound: rounds.length === 1, podOf });
      if (!pairs) {
        drawPending = true;
        break;
      }
      rounds.push({
        number: null,
        projected: true,
        slots: pairs.map(([a, b]) => {
          const slot = { home: winnerOf(last[a]), away: winnerOf(last[b]), projected: true, from: [a, b] };
          slot.teams = [...new Set([...last[a].teams, ...last[b].teams])];
          return slot;
        }),
      });
    }
  } else {
    drawPending = rounds[rounds.length - 1].slots.length > 1;
  }

  return bracketOut(rounds, numbers, { linked, drawPending, medal });
}

// The working rounds as written out: working fields stripped, each round named.
function bracketOut(rounds, numbers, { linked, drawPending, medal }) {
  const bronze = medal ? slotOf(medal.bronze) : null;
  const out = rounds.map((round, index) => ({
    label: roundName(round.slots.length),
    ...(round.projected ? { projected: true } : {}),
    slots: round.slots.map((slot) => {
      const clean = { ...slot };
      delete clean.teams;
      delete clean.game;
      if (clean.projected) {
        if (clean.home == null) delete clean.home;
        if (clean.away == null) delete clean.away;
      }
      return clean;
    }),
    // Kept for the parity test with the dashboard's own round names.
    ...(index < numbers.length ? { round: round.number } : {}),
  }));
  return { rounds: out, linked, drawPending, ...(bronze ? { bronze } : {}) };
}

// --- Where a division has got to --------------------------------------------

// The regular season's progress, from DATA.matches. `times` is when the
// unplayed matches are scheduled, each once, oldest first — not just the
// earliest, because "next" depends on when the page is read, and a match that
// was never reported still sits in the list weeks after its date. The page
// picks the first one that has not passed.
function regularSeasonOf(data) {
  const matches = Array.isArray(data.matches) ? data.matches : [];
  const played = matches.filter((match) => match.complete).length;
  const times = [...new Set(matches.filter((match) => !match.complete).map((match) => match.time).filter(Boolean))].sort();
  return { played, total: matches.length, ...(times.length ? { times } : {}) };
}

// A pod ranked the way the league seeds its playoffs: by record against the
// other teams in the pod, not by overall record. Read off every bracket posted
// so far, this reproduces the league's first-round seeds in 49 of 51 pods,
// against 44 for overall win percentage. Every pod where overall record
// disagreed with the seeds is one in-pod record explains (Fall 2026 4.5 South
// seeded the 9–4 Dill Dinkers above the 10–3 Bounce Malvern, which it beat
// twice). The two exceptions are Spring 2026 4.0, whose pods ran 12/3/4/4.
//
// Ties fall to overall win percentage and then the division's own standings
// order. The league's tiebreak beyond in-pod record is not settled by the data.
function rankPod(teams, matches) {
  const names = new Set(teams.map((team) => team.name));
  const inPod = new Map(teams.map((team) => [team.name, { w: 0, l: 0 }]));
  for (const match of matches || []) {
    if (!match.complete || !names.has(match.home) || !names.has(match.away)) continue;
    const winner = match.result === 'home' ? match.home : match.away;
    const loser = match.result === 'home' ? match.away : match.home;
    inPod.get(winner).w += 1;
    inPod.get(loser).l += 1;
  }
  const pct = (w, l) => (w + l ? w / (w + l) : 0);
  return teams
    .map((team, index) => ({ team, index, record: inPod.get(team.name) }))
    .sort((a, b) => (
      pct(b.record.w, b.record.l) - pct(a.record.w, a.record.l)
      || pct(b.team.w || 0, b.team.l || 0) - pct(a.team.w || 0, a.team.l || 0)
      || a.index - b.index
    ))
    .map(({ team, record }) => ({ team, pw: record.w, pl: record.l }));
}

// The top of each pod in that order, for a division whose bracket is not out
// yet. Every pod has sent the same number of teams in every regular division,
// three or four: four pods of 4–6 teams sent three, pods of 7–8 sent four, and
// two-pod divisions sent three at 10 teams and four at 11–16. That is a
// pattern, not a rule that settles a 24-team division, so the page shows four
// (the most any regular pod has sent) and does not draw a cutoff.
const POD_LEADERS_SHOWN = 4;

function podLeadersOf(data) {
  const groups = displayPodGroups(data.teams || [], data.meta || {});
  return groups.map((group) => ({
    label: group.label,
    teams: rankPod(group.teams, data.matches).slice(0, POD_LEADERS_SHOWN).map(({ team, pw, pl }) => ({
      name: team.name, w: team.w, l: team.l, pw, pl,
    })),
  }));
}

function divisionPlayoffs(data) {
  const regular = regularSeasonOf(data);
  const bracket = buildBracket(data);
  if (!bracket) {
    const remaining = regular.total - regular.played;
    return {
      stage: remaining ? 'regular' : 'awaiting',
      regular,
      leaders: podLeadersOf(data),
    };
  }

  const { rounds } = bracket;
  const final = rounds[rounds.length - 1];
  const finalSlot = final.slots.length === 1 && !final.projected ? final.slots[0] : null;
  const champion = finalSlot ? winnerOf(finalSlot) : null;

  // Everyone the bracket has seen, and how far each got.
  const standing = new Map((data.teams || []).map((team, index) => [team.name, { team, index }]));
  const fieldNames = [];
  const seedByName = new Map();
  // The bronze match counts too: in a medal round it is the only place two of
  // the four teams appear.
  const playedSlots = [
    ...rounds.flatMap((round) => round.slots),
    ...(bracket.bronze ? [bracket.bronze] : []),
  ];
  playedSlots.forEach((slot) => {
    if (slot.projected) return;
    [[slot.home, slot.homeSeed], [slot.away, slot.awaySeed]].forEach(([name, seed]) => {
      if (name == null) return;
      if (!fieldNames.includes(name)) fieldNames.push(name);
      if (!seedByName.has(name) && seed != null) seedByName.set(name, seed);
    });
  });
  const outIn = new Map();
  rounds.forEach((round) => round.slots.forEach((slot) => {
    const loser = loserOf(slot);
    if (loser && !outIn.has(loser)) outIn.set(loser, round.label);
  }));
  const bronzeWinner = bracket.bronze ? winnerOf(bracket.bronze) : null;
  const bronzeLoser = bracket.bronze ? loserOf(bracket.bronze) : null;
  if (bronzeLoser && !outIn.has(bronzeLoser)) outIn.set(bronzeLoser, 'Bronze match');

  const field = fieldNames
    .map((name) => {
      const entry = standing.get(name);
      const team = entry ? entry.team : {};
      const row = { name };
      if (seedByName.has(name)) row.seed = seedByName.get(name);
      if (team.w != null) row.w = team.w;
      if (team.l != null) row.l = team.l;
      const pod = team.reportedPod || team.podName;
      if (pod) row.pod = pod;
      if (name === champion) row.status = 'champion';
      else if (outIn.has(name) || name === bronzeWinner) {
        // Winning the bronze match ends a season too, one place short.
        row.status = 'out';
        row.out = outIn.get(name) || 'Bronze match';
        if (finalSlot && name === loserOf(finalSlot)) row.place = 2;
        else if (name === bronzeWinner) row.place = 3;
        else if (name === bronzeLoser) row.place = 4;
      } else row.status = 'alive';
      return { row, rank: entry ? entry.index : Number.MAX_SAFE_INTEGER };
    })
    // Regular-season standings order, which is how DATA.teams arrives.
    .sort((a, b) => a.rank - b.rank || a.row.name.localeCompare(b.row.name))
    .map(({ row }) => row);

  let stage;
  let current;
  if (champion) {
    stage = 'decided';
  } else {
    stage = 'playoffs';
    const at = rounds.findIndex((round) => round.slots.some((slot) => !slot.projected && !slot.bye && !slot.result));
    if (at >= 0) current = rounds[at].label;
    else {
      // Everything posted is played; what is next has not been drawn.
      const nextRound = rounds.find((round) => round.projected);
      current = nextRound ? nextRound.label : null;
    }
  }

  const result = {
    stage,
    ...(current ? { current } : {}),
    regular,
    alive: field.filter((row) => row.status !== 'out').length,
    field,
    ...bracket,
  };
  if (champion) {
    result.podium = [champion, loserOf(finalSlot), bronzeWinner].filter(Boolean);
  }
  return result;
}

// --- The file ---------------------------------------------------------------

function buildPlayoffRows(rootDir, { eachLeagueSeason, seasonCompiledDir, sortDivisionsForLeague }) {
  const rows = [];
  for (const { league, season, divisions } of eachLeagueSeason()) {
    if (season.status !== 'current') continue;
    const compiledDir = seasonCompiledDir(rootDir, league, season.slug);
    for (const division of sortDivisionsForLeague(league, divisions)) {
      const data = readCompiledData(path.join(compiledDir, `data-${division.slug}.js`));
      if (!data) continue;
      rows.push({
        season: season.slug,
        seasonLabel: season.label,
        order: season.seasonYear * 10 + season.seasonNumber,
        league,
        slug: division.slug,
        division: division.divisionName,
        ...(division.clubName ? { clubName: division.clubName } : {}),
        teams: Array.isArray(data.teams) ? data.teams.length : 0,
        asOf: (data.meta && data.meta.asOf) || null,
        ...divisionPlayoffs(data),
      });
    }
  }
  return rows;
}

function writePlayoffData(rootDir, helpers) {
  const divisions = buildPlayoffRows(rootDir, helpers);
  const outDir = path.join(rootDir, 'cpl', 'playoffs', 'compiled');
  fs.mkdirSync(outDir, { recursive: true });
  // levels=3: one line per field of each division, so a refresh that settles
  // one match moves the handful of lines that division's bracket is on.
  fs.writeFileSync(
    path.join(outDir, 'data.js'),
    `window.CPL_PLAYOFFS = ${expandJson({ divisions }, 3)};\n`,
  );
  console.log(`✓ playoffs/data.js written (${divisions.length} current division rows).`);
  return divisions;
}

module.exports = {
  buildBracket,
  buildPlayoffRows,
  divisionPlayoffs,
  pairForNextRound,
  rankPod,
  roundName,
  writePlayoffData,
};
