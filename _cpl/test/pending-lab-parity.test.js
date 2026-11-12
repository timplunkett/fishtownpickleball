// A posted lineup must project the same on a team's Pending matchups block as
// it does when the same pairs are loaded into the Lineup Lab. They once
// disagreed (11–12–9 vs 13–12–7) because only the Lab folded in partner
// chemistry; both now go through projectPendingGame. Checked game by game
// against every compiled division's pending matches.
const test = require('node:test');
const assert = require('node:assert/strict');

const { compiledDivisions } = require('./helpers/compiled');
const { loadApp } = require('./helpers/app-harness');

for (const { label, file } of compiledDivisions()) {
  test(`${label}: pending-match projections match the Lineup Lab's`, () => {
    const { context } = loadApp(file);
    const pending = [...(context.DATA.matches || []), ...(context.DATA.playoffs || [])]
      .filter((match) => !match.complete);
    for (const match of pending) {
      for (const game of match.games || []) {
        const pendingProjection = context.projectPendingGame(game.h, game.a);
        const labProjection = context.lineupGameProjection({ a: game.h, b: game.a });
        assert.equal(pendingProjection.marginLabel, labProjection.marginLabel, `${match.home} vs ${match.away}: ${game.h} / ${game.a}`);
        assert.equal(pendingProjection.outcome, labProjection.outcome);
        assert.equal(pendingProjection.chemistryTag, labProjection.chemistryTag);
      }
    }
  });
}
