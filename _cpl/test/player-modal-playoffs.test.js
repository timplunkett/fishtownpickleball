// A player's playoff matches in their modal: a section of their own at the top,
// the bracket's rounds on the rating chart after the regular weeks, and their
// playoff games below the regular season's in the game-by-game log. Checked on
// every archived division with a finished playoff match, and required to find
// some: a check that only ever ran on players without playoffs would pass on
// a modal that never shows them.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const { archivedDivisions, compiledData } = require('./helpers/compiled');
const { loadApp } = require('./helpers/app-harness');

function divisionsWithPlayoffs() {
  return archivedDivisions().filter((division) => (
    (compiledData(division).playoffs || []).some((match) => match.complete && (match.games || []).length)
  ));
}

function loadDivisionApp(division) {
  const { context } = loadApp(division.file);
  const detailFile = path.join(path.dirname(path.dirname(division.file)), context.DATA.meta.detailFile);
  vm.runInContext(fs.readFileSync(detailFile, 'utf8'), context, { filename: detailFile });
  context.mergePlayerDetails();
  return context;
}

const count = (html, pattern) => (html.match(pattern) || []).length;

test('a player who played in the playoffs sees them in their modal', () => {
  const divisions = divisionsWithPlayoffs();
  assert.ok(divisions.length, 'no archived division has a finished playoff match');
  let checked = 0;

  for (const division of divisions) {
    const context = loadDivisionApp(division);
    const players = context.DATA.players.filter((player) => (player.playoffLog || []).length);
    assert.ok(players.length, `${division.label}: no player has a playoff match log`);

    for (const player of players) {
      const where = `${division.label}: ${player.name}`;
      const body = context.renderModalBody(player);

      // The playoff section comes first, ahead of everything else in the body.
      const section = body.indexOf('class="mtrend mplayoffs"');
      assert.ok(section >= 0, `${where}: no playoff section`);
      for (const later of ['other-leagues-host', 'Rating by week', 'Game-by-game log']) {
        assert.ok(section < body.indexOf(later), `${where}: the playoff section is not above "${later}"`);
      }
      const sectionHtml = body.slice(section, body.indexOf('other-leagues-host'));
      assert.equal(
        count(sectionHtml, /<tr(?: class="subrow")?>\s*<td class="l">/g),
        player.playoffLog.length,
        `${where}: not one row per playoff match`,
      );
      for (const entry of player.playoffLog) {
        assert.ok(sectionHtml.includes(context.playoffRoundLabel(entry.round)), `${where}: round ${entry.round} is not named`);
      }

      // The rating chart runs on into the playoff rounds the player played.
      const history = player.ratingHistory || [];
      assert.ok(history.some((entry) => entry.playoffRound != null), `${where}: no playoff round in the rating history`);
      assert.equal(history.at(-1).rating, player.rating, `${where}: the history doesn't end on the rating`);
      assert.ok(!body.includes('Wk P'), `${where}: a playoff round is labelled as a week`);

      // Playoff games, in the game log's format, after every regular-season one.
      const log = body.slice(body.indexOf('Game-by-game log'));
      const playoffGames = player.playoffGames || [];
      assert.ok(playoffGames.length, `${where}: has a playoff match but no playoff games`);
      const headings = [...log.matchAll(/class="wkrow"><td colspan="\d+" class="l">([^<•]+) • vs/g)].map((m) => m[1].trim());
      const playoffNames = new Set(playoffGames.map((game) => context.playoffRoundLabel(game.wk)));
      const firstPlayoff = headings.findIndex((heading) => playoffNames.has(heading));
      assert.ok(firstPlayoff >= 0, `${where}: no playoff round heading in the game log`);
      assert.ok(
        headings.slice(firstPlayoff).every((heading) => !/^Week \d+$/.test(heading)),
        `${where}: a regular-season game is listed after a playoff one`,
      );
      assert.ok(log.includes(`+ ${playoffGames.length} playoff`), `${where}: the game count leaves out the playoff games`);
      checked += 1;
    }
  }
  assert.ok(checked > 0, 'no player with a playoff match was checked');
});

test('a player with no playoff match gets no playoff section', () => {
  const [division] = divisionsWithPlayoffs();
  const context = loadDivisionApp(division);
  const player = context.DATA.players.find((candidate) => (
    !(candidate.playoffLog || []).length && (candidate.games || []).length
  ));
  assert.ok(player, `${division.label}: everyone played in the playoffs`);
  const body = context.renderModalBody(player);
  assert.ok(!body.includes('mplayoffs'));
  assert.ok(!/\+ \d+ playoff/.test(body), 'the game log counts playoff games for a player with none');
});
