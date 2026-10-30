// A player opened from the Lineup Lab opens over the lab rather than sending
// the reader back to the standings: ?player= rides alongside ?lineup=1, and
// opening or closing the modal leaves the lab's render (and so its scroll
// position and focus) alone. Rendered through cpl/app.js against the largest
// compiled division.
const test = require('node:test');
const assert = require('node:assert/strict');

const { compiledDivisions } = require('./helpers/compiled');
const { loadApp } = require('./helpers/app-harness');

const [{ file }] = compiledDivisions()
  .map((division) => ({ ...division, ...loadApp(division.file) }))
  .sort((a, b) => b.context.DATA.players.length - a.context.DATA.players.length);

function go(context, search) {
  context.location.search = search;
  context.location.href = `http://x/cpl/travel/${search}`;
  context.handleRoute();
}

test('a player opened from the Lineup Lab opens over the lab, without re-rendering it', () => {
  const { context, document } = loadApp(file);
  const lineupView = document.getElementById('lineupview');
  const overlay = document.getElementById('overlay');
  const team = context.DATA.teams[0];
  const teamSlug = context.CPLShared.slugify(team.name);

  go(context, `?lineup=1&team=${teamSlug}`);
  assert.equal(lineupView.hidden, false);
  assert.equal(overlay.hidden, true);

  // Roster names in the lab are player links that keep ?lineup=1.
  const player = context.DATA.players.find((candidate) => candidate.team === team.name && candidate.playerId);
  const link = lineupView.innerHTML.match(new RegExp(`<a class="pname" href="([^"]+)" data-player="${player.playerId}"`));
  assert.ok(link, 'roster name is a .pname link');
  assert.match(link[1], /lineup=1/);

  lineupView.innerHTML = 'SENTINEL';
  go(context, `?lineup=1&team=${teamSlug}&player=${player.playerId}`);
  assert.equal(overlay.hidden, false, 'modal is open');
  assert.match(document.getElementById('mhead').innerHTML, new RegExp(player.name));
  assert.equal(lineupView.hidden, false, 'lab stays up behind the modal');
  assert.equal(lineupView.innerHTML, 'SENTINEL', 'opening the modal does not re-render the lab');

  go(context, `?lineup=1&team=${teamSlug}`);
  assert.equal(overlay.hidden, true, 'modal is closed');
  assert.equal(lineupView.innerHTML, 'SENTINEL', 'closing the modal does not re-render the lab');
});

test('a shared link to a player over the Lineup Lab renders the lab, then the modal', () => {
  const { context, document } = loadApp(file);
  const player = context.DATA.players.find((candidate) => candidate.playerId);
  go(context, `?lineup=1&player=${player.playerId}`);
  assert.equal(document.getElementById('lineupview').hidden, false);
  assert.match(document.getElementById('lineupview').innerHTML, /Lineup Lab/);
  assert.equal(document.getElementById('overlay').hidden, false);
});
