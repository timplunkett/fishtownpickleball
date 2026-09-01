// Working out who won a finished division.
//
// The upstream round numbering does not distinguish a final from a semi-final,
// so the shape of the last round is what has to be read. Getting this wrong is
// not a rendering bug — it puts the wrong team's name next to a gold medal, or
// leaves a champion who actually won off the page entirely.
const test = require('node:test');
const assert = require('node:assert/strict');
const { podiumOf } = require('../modules/archive-outputs');

// Standings order is the array order of DATA.teams, which is how the compiler
// emits them.
const teams = (...names) => names.map((name) => ({ name }));

const match = (round, home, away, result, { homeSeed, awaySeed } = {}) => ({
  round,
  home,
  away,
  result,
  complete: result != null,
  ...(homeSeed != null ? { homeSeed } : {}),
  ...(awaySeed != null ? { awaySeed } : {}),
});

test('a division that never played a playoff falls back to the standings', () => {
  const podium = podiumOf({ teams: teams('Alpha', 'Bravo', 'Charlie', 'Delta'), playoffs: [] });
  assert.equal(podium.basis, 'standings');
  assert.deepEqual(podium.places, ['Alpha', 'Bravo', 'Charlie']);
  assert.equal(podium.thirdFromStandings, true);
});

test('a division with fewer than three teams fills only the places it has', () => {
  const podium = podiumOf({ teams: teams('Alpha', 'Bravo'), playoffs: [] });
  assert.deepEqual(podium.places, ['Alpha', 'Bravo']);
});

// The shape this was originally read wrong. A last round of two matches pairing
// seeds 1v2 and 3v4 is the medal round, not a pair of semi-finals waiting on a
// final that never comes: the 1v2 plays for gold and silver, the 3v4 for bronze.
// Read as semi-finals, every local division that played one was reported as
// undecided and its champion was left off the page.
test('a last round of 1v2 and 3v4 is the medal round, bronze included', () => {
  const podium = podiumOf({
    teams: teams('Alpha', 'Bravo', 'Charlie', 'Delta'),
    playoffs: [
      match(1, 'Alpha', 'Bravo', 'away', { homeSeed: 1, awaySeed: 2 }),
      match(1, 'Charlie', 'Delta', 'away', { homeSeed: 3, awaySeed: 4 }),
    ],
  });
  assert.equal(podium.basis, 'playoffs');
  // Bravo beat the top seed; Delta won the bronze match.
  assert.deepEqual(podium.places, ['Bravo', 'Alpha', 'Delta']);
  // Third was played for, so it is a result rather than a tiebreak.
  assert.equal(podium.thirdFromStandings, false);
});

test('the medal round is read whatever order its two matches arrive in', () => {
  const podium = podiumOf({
    teams: teams('Alpha', 'Bravo', 'Charlie', 'Delta'),
    playoffs: [
      match(1, 'Charlie', 'Delta', 'home', { homeSeed: 3, awaySeed: 4 }),
      match(1, 'Alpha', 'Bravo', 'home', { homeSeed: 1, awaySeed: 2 }),
    ],
  });
  assert.deepEqual(podium.places, ['Alpha', 'Bravo', 'Charlie']);
});

// Seeds are within the round, not within the division: a final between the two
// halves of a bracket is published as 1 v 1, because each side won its own half.
// So a lone match in the last round is the final regardless of what its seeds
// read as.
test('a single match in the last round is the final, whatever its seeds say', () => {
  const podium = podiumOf({
    teams: teams('Alpha', 'Bravo', 'Charlie', 'Delta'),
    playoffs: [
      match(1, 'Alpha', 'Charlie', 'home', { homeSeed: 1, awaySeed: 4 }),
      match(1, 'Bravo', 'Delta', 'home', { homeSeed: 2, awaySeed: 3 }),
      match(2, 'Alpha', 'Bravo', 'away', { homeSeed: 1, awaySeed: 1 }),
    ],
  });
  assert.equal(podium.basis, 'playoffs');
  assert.equal(podium.places[0], 'Bravo');
  assert.equal(podium.places[1], 'Alpha');
});

// No third-place match means nothing decided third. The better-placed of the two
// beaten semi-finalists is used, and the row says so.
test('third place with no match behind it is the better-placed semi-final loser', () => {
  const podium = podiumOf({
    teams: teams('Alpha', 'Bravo', 'Charlie', 'Delta'),
    playoffs: [
      // Delta finishes last in the standings but beats Charlie into the final.
      match(1, 'Alpha', 'Delta', 'away', { homeSeed: 1, awaySeed: 4 }),
      match(1, 'Bravo', 'Charlie', 'home', { homeSeed: 2, awaySeed: 3 }),
      match(2, 'Delta', 'Bravo', 'home', { homeSeed: 1, awaySeed: 1 }),
    ],
  });
  assert.deepEqual(podium.places, ['Delta', 'Bravo', 'Alpha']);
  assert.equal(podium.thirdFromStandings, true, 'a tiebreak was presented as a result');
});

// A season whose final was never played is not decided, whatever the table says
// about who led it — so it is reported as the regular season rather than
// crowning the top seed as champion.
test('an unplayed final falls back to the standings rather than crowning the leader', () => {
  const podium = podiumOf({
    teams: teams('Alpha', 'Bravo', 'Charlie', 'Delta'),
    playoffs: [
      match(1, 'Alpha', 'Charlie', 'home', { homeSeed: 1, awaySeed: 4 }),
      match(1, 'Bravo', 'Delta', 'home', { homeSeed: 2, awaySeed: 3 }),
      match(2, 'Alpha', 'Bravo', null, { homeSeed: 1, awaySeed: 1 }),
    ],
  });
  assert.equal(podium.basis, 'standings');
  assert.deepEqual(podium.places, ['Alpha', 'Bravo', 'Charlie']);
});

test('a medal round nobody has played yet is not a decided season', () => {
  const podium = podiumOf({
    teams: teams('Alpha', 'Bravo', 'Charlie', 'Delta'),
    playoffs: [
      match(1, 'Alpha', 'Bravo', null, { homeSeed: 1, awaySeed: 2 }),
      match(1, 'Charlie', 'Delta', null, { homeSeed: 3, awaySeed: 4 }),
    ],
  });
  assert.equal(podium.basis, 'standings');
});

// The gold match played, the bronze match not. Everything known is reported and
// third falls back to the tiebreak rather than the whole row being discarded.
test('a played final with an unplayed bronze match still crowns its champion', () => {
  const podium = podiumOf({
    teams: teams('Alpha', 'Bravo', 'Charlie', 'Delta'),
    playoffs: [
      match(1, 'Alpha', 'Bravo', 'home', { homeSeed: 1, awaySeed: 2 }),
      match(1, 'Charlie', 'Delta', null, { homeSeed: 3, awaySeed: 4 }),
    ],
  });
  assert.equal(podium.basis, 'playoffs');
  assert.equal(podium.places[0], 'Alpha');
  assert.equal(podium.places[1], 'Bravo');
  assert.equal(podium.places[2], 'Charlie');
  assert.equal(podium.thirdFromStandings, true);
});

// Three or more matches in the last round is not a bracket this code claims to
// understand, and inventing a champion for it would be worse than saying so.
test('an unrecognized last round falls back to the standings', () => {
  const podium = podiumOf({
    teams: teams('Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot'),
    playoffs: [
      match(1, 'Alpha', 'Bravo', 'home', { homeSeed: 1, awaySeed: 2 }),
      match(1, 'Charlie', 'Delta', 'home', { homeSeed: 3, awaySeed: 4 }),
      match(1, 'Echo', 'Foxtrot', 'home', { homeSeed: 5, awaySeed: 6 }),
    ],
  });
  assert.equal(podium.basis, 'standings');
});

test('two matches that are not 1v2 and 3v4 fall back to the standings', () => {
  const podium = podiumOf({
    teams: teams('Alpha', 'Bravo', 'Charlie', 'Delta'),
    playoffs: [
      match(1, 'Alpha', 'Charlie', 'home', { homeSeed: 1, awaySeed: 4 }),
      match(1, 'Bravo', 'Delta', 'home', { homeSeed: 2, awaySeed: 3 }),
    ],
  });
  assert.equal(podium.basis, 'standings');
});

// Seeds are missing on some older cached brackets; a pair of matches with no
// seeds at all cannot be identified as a medal round.
test('a two-match last round with no seeds falls back to the standings', () => {
  const podium = podiumOf({
    teams: teams('Alpha', 'Bravo', 'Charlie', 'Delta'),
    playoffs: [
      match(1, 'Alpha', 'Bravo', 'home'),
      match(1, 'Charlie', 'Delta', 'home'),
    ],
  });
  assert.equal(podium.basis, 'standings');
});
