// A posted lineup must project the same on a team's Pending matchups block as
// it does when the same pairs are loaded into the Lineup Lab. They once
// disagreed (11–12–9 vs 13–12–7) because only the Lab folded in partner
// chemistry; both now go through projectPendingGame. Checked game by game
// against every archived division's matches, each turned back into a pending
// one with its posted lineup kept: an archived season has next to no pending
// matches of its own, and a live one's change every refresh.
const test = require('node:test');
const assert = require('node:assert/strict');

const { archivedDivisions } = require('./helpers/compiled');
const { loadApp } = require('./helpers/app-harness');

for (const { label, file } of archivedDivisions()) {
  test(`${label}: pending-match projections match the Lineup Lab's`, () => {
    const { context } = loadApp(file, {
      mutate: (DATA) => {
        [...(DATA.matches || []), ...(DATA.playoffs || [])].forEach((match) => { match.complete = false; });
      },
    });
    const pending = [...(context.DATA.matches || []), ...(context.DATA.playoffs || [])]
      .filter((match) => !match.complete);
    let checked = 0;
    for (const match of pending) {
      for (const game of match.games || []) {
        const pendingProjection = context.projectPendingGame(game.h, game.a);
        const labProjection = context.lineupGameProjection({ a: game.h, b: game.a });
        assert.equal(pendingProjection.marginLabel, labProjection.marginLabel, `${match.home} vs ${match.away}: ${game.h} / ${game.a}`);
        assert.equal(pendingProjection.outcome, labProjection.outcome);
        assert.equal(pendingProjection.chemistryTag, labProjection.chemistryTag);
        checked += 1;
      }
    }
    assert.ok(checked > 0, `${label}: no posted game to project`);
  });
}
