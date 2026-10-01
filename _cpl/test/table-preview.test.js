// The Player Leaderboard and Top Duos draw their first rows and a "Show all"
// button for the rest — on the largest division they were four-fifths of the
// page's elements. Rendered through cpl/app.js itself, against compiled data.
const test = require('node:test');
const assert = require('node:assert/strict');

const { compiledDivisions } = require('./helpers/compiled');
const { loadApp } = require('./helpers/app-harness');

// Mirrors TABLE_PREVIEW_ROWS / TABLE_PREVIEW_SLACK in cpl/app.js. A top-level
// const in a vm script isn't reachable from the context, so they are restated.
const PREVIEW_ROWS = 100;
const SLACK = 25;

const leaderboardRows = (document) => (document.getElementById('body').innerHTML.match(/<tr>/g) || []).length;
const duoRows = (document) => (document.getElementById('duohost').innerHTML.match(/class="duorow"/g) || []).length;

function clickShowAll(context, document, name) {
  // A real tbody always has .rows; the stub only needs its length.
  const body = document.getElementById('body');
  body.rows = Array.from({ length: leaderboardRows(document) }, () => null);
  context.handleShowAllClick({ target: { closest: () => ({ dataset: { showAll: name } }) } });
}

const loaded = compiledDivisions().map(({ label, file }) => ({ label, file, ...loadApp(file) }));
const byPlayers = loaded.slice().sort((a, b) => b.context.DATA.players.length - a.context.DATA.players.length);
const largest = byPlayers[0];
const small = byPlayers.find((entry) => entry.context.DATA.players.length <= PREVIEW_ROWS + SLACK);

test('the largest division draws a preview of each table, with a button for the rest', () => {
  const { context, document, label } = largest;
  const players = context.DATA.players.length;
  const duos = context.DATA.duos.length;
  assert.ok(players > PREVIEW_ROWS + SLACK, `${label}: fixture is not large enough to preview`);

  assert.equal(leaderboardRows(document), PREVIEW_ROWS);
  assert.equal(document.getElementById('plabel').textContent, `${PREVIEW_ROWS} of ${players} shown`);
  const more = document.getElementById('body-more');
  assert.equal(more.hidden, false);
  assert.match(more.innerHTML, new RegExp(`data-show-all="players">Show all ${players} players<`));

  if (duos > PREVIEW_ROWS + SLACK) {
    assert.equal(duoRows(document), PREVIEW_ROWS);
    assert.match(document.getElementById('duohost-more').innerHTML, new RegExp(`Show all ${duos} duos`));
  }
});

test('Show all draws every row and removes its button', () => {
  const { context, document } = loadApp(largest.file);
  const players = context.DATA.players.length;
  const duos = context.DATA.duos.length;

  clickShowAll(context, document, 'players');
  assert.equal(leaderboardRows(document), players);
  assert.equal(document.getElementById('plabel').textContent, `${players} shown`);
  assert.equal(document.getElementById('body-more').hidden, true);
  assert.equal(document.getElementById('body-more').innerHTML, '');

  clickShowAll(context, document, 'duos');
  assert.equal(duoRows(document), duos);
  assert.equal(document.getElementById('duohost-more').hidden, true);
});

test('a table within the slack of the limit is drawn whole, with no button', { skip: !small }, () => {
  const { context, document, label } = small;
  assert.equal(leaderboardRows(document), context.DATA.players.length, label);
  assert.equal(document.getElementById('body-more').hidden, true, label);
});

// A browser can pair a fresh app.js with a cached index.html that predates the
// button hosts. Hiding rows with no way to reveal them would lose data, so the
// table is drawn whole instead.
test('without the button hosts every row is drawn', () => {
  const { context, document } = loadApp(largest.file, { missing: ['body-more', 'duohost-more'] });
  assert.equal(leaderboardRows(document), context.DATA.players.length);
  assert.equal(duoRows(document), context.DATA.duos.length);
});
