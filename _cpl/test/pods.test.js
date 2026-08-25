const test = require('node:test');
const assert = require('node:assert/strict');
const {
  inferPodsFromSchedule,
  podsFromApi,
  collapsePodVariants,
  assignPods,
} = require('../modules/pods');

const teamArr = (names) => names.map((name) => ({ name }));
const matchup = (homeName, awayName) => ({ homeName, awayName });

test('inferPodsFromSchedule finds one pod in a fully connected schedule', () => {
  const teams = teamArr(['A', 'B', 'C']);
  const sections = inferPodsFromSchedule(teams, [matchup('A', 'B'), matchup('B', 'C')]);
  assert.equal(sections.podCount, 1);
  assert.equal(sections.byTeam.get('A'), 1);
  assert.equal(sections.byTeam.get('C'), 1);
});

test('inferPodsFromSchedule separates disjoint schedule groups', () => {
  const teams = teamArr(['A', 'B', 'C', 'D']);
  const sections = inferPodsFromSchedule(teams, [matchup('A', 'B'), matchup('C', 'D')]);
  assert.equal(sections.podCount, 2);
  assert.equal(sections.byTeam.get('A'), sections.byTeam.get('B'));
  assert.equal(sections.byTeam.get('C'), sections.byTeam.get('D'));
  assert.notEqual(sections.byTeam.get('A'), sections.byTeam.get('C'));
});

test('podsFromApi rejects placeholder pod names', () => {
  const teams = teamArr(['A', 'B']);
  assert.equal(podsFromApi(teams, new Map([['A', 'Overall'], ['B', 'Overall']])), null);
  assert.equal(podsFromApi(teams, new Map([['A', 'TBD'], ['B', 'TBD']])), null);
  assert.equal(podsFromApi(teams, new Map([['A', 'North']])), null); // B missing
});

test('podsFromApi numbers pods alphabetically by name', () => {
  const teams = teamArr(['A', 'B']);
  const reported = podsFromApi(teams, new Map([['A', 'South'], ['B', 'North']]));
  assert.deepEqual(reported.podNames, ['North', 'South']);
  assert.equal(reported.byTeam.get('B'), 1);
  assert.equal(reported.byTeam.get('A'), 2);
});

test('collapsePodVariants merges lettered halves that share one section', () => {
  const teams = [
    { name: 'A', pod: 1, reportedPod: 'Northeast A' },
    { name: 'B', pod: 1, reportedPod: 'Northeast B' },
  ];
  const collapsed = collapsePodVariants(teams, { podNames: ['Northeast A', 'Northeast B'] });
  assert.equal(collapsed.get('Northeast A'), 'Northeast');
  assert.equal(collapsed.get('Northeast B'), 'Northeast');
});

test('assignPods labels sections from aligned reported pods', () => {
  const teams = teamArr(['A', 'B', 'C', 'D']);
  const matchups = [matchup('A', 'B'), matchup('C', 'D')];
  const podNameByTeam = new Map([['A', 'North'], ['B', 'North'], ['C', 'South'], ['D', 'South']]);
  const meta = assignPods(teams, matchups, podNameByTeam);
  assert.equal(meta.podCount, 2);
  assert.deepEqual(meta.podNames, ['North', 'South']);
  assert.equal(meta.podSource, 'api');
  assert.equal(meta.podMismatch, undefined);
  assert.equal(teams.find((t) => t.name === 'A').podName, 'North');
});

test('assignPods keeps schedule sections and records mismatch on cross-pod play', () => {
  const teams = teamArr(['A', 'B', 'C', 'D']);
  // Everyone plays everyone: one schedule section, but two reported pods.
  const matchups = [matchup('A', 'B'), matchup('C', 'D'), matchup('A', 'C'), matchup('B', 'D')];
  const podNameByTeam = new Map([['A', 'North'], ['B', 'North'], ['C', 'South'], ['D', 'South']]);
  const meta = assignPods(teams, matchups, podNameByTeam);
  assert.equal(meta.podCount, 1); // sections stay schedule-based
  assert.ok(meta.podMismatch, 'cross-pod matchups are recorded');
  assert.equal(meta.podMismatch.crossPodMatchups, 2);
  assert.equal(meta.podMismatch.totalMatchups, 4);
});
