// What the DUPR bracket audit is allowed to contain.
//
// The audit asks whether a rostered player's DUPR sits inside their division's
// bracket — a question about a roster somebody can still act on. Run against a
// finished season it compares last season's roster to today's ratings and
// reports drift that happened after the season ended as an in-season
// misplacement. So the page is scoped to seasons still being played, and this
// is the check that keeps it that way.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { readLeagueSeasons } = require('../modules/catalog');

const ROOT = path.join(__dirname, '../..');

function readAudit() {
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'cpl/dupr-audit/data.js'), 'utf8'), context);
  return context.window.DUPR_AUDIT;
}

const currentSlugs = () => new Set(
  ['travel', 'local']
    .flatMap((league) => readLeagueSeasons(league))
    .filter((season) => season.status === 'current')
    .map((season) => season.slug),
);

test('every audited division belongs to a season still being played', () => {
  const audit = readAudit();
  const current = currentSlugs();
  const strays = Object.entries(audit.divisions)
    .filter(([, division]) => !current.has(division.season))
    .map(([slug, division]) => `${slug} (${division.season || 'no season'})`);
  assert.deepEqual(strays, [], 'archived seasons leaked into the DUPR audit');
});

test('every audited division names its season', () => {
  const audit = readAudit();
  const unlabelled = Object.entries(audit.divisions)
    .filter(([, division]) => !division.season || !division.seasonLabel)
    .map(([slug]) => slug);
  assert.deepEqual(unlabelled, [], 'the Season column would be blank for these');
});

// Every row points at a division the page can actually describe.
test('every audit row belongs to a division in the table', () => {
  const audit = readAudit();
  const orphans = audit.rows.filter((row) => !audit.divisions[row.slug]).map((row) => row.slug);
  assert.deepEqual([...new Set(orphans)], []);
});

// The dashboards moved into season directories, so a link built without the
// season lands on the league's redirect stub instead of the division — an extra
// hop that works, but only by accident.
test('the audit builds season-scoped dashboard links', () => {
  const page = fs.readFileSync(path.join(ROOT, 'cpl/dupr-audit/index.html'), 'utf8');
  const match = /function divisionUrl\(row\) \{([\s\S]*?)\}/.exec(page);
  assert.ok(match, 'divisionUrl is gone or renamed');
  assert.match(match[1], /seasonSlug/, 'the division URL omits the season directory');
});

// League was a column and a filter here; season replaced both.
test('the page filters and sorts on season, not league', () => {
  const page = fs.readFileSync(path.join(ROOT, 'cpl/dupr-audit/index.html'), 'utf8');
  assert.match(page, /id="season-filter"/);
  assert.ok(!page.includes('id="league-filter"'), 'the league filter is still there');
  assert.ok(!page.includes("header('League'"), 'the league column header is still there');
  // leaguePath survives on purpose: a dashboard URL still needs the league.
  assert.match(page, /leaguePath/);
});
