const fs = require('fs');
const path = require('path');
const { extractValues, getLeagueDataConfig } = require('./division-utils');
const { currentSeason, resolveLeagueSeasons } = require('./seasons');

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const DEFAULT_TIMEZONE = 'America/New_York';
const DEFAULT_RESULTS_WINDOW_HOURS = 12;
const DEFAULT_MATCH_DURATION_HOURS = 2;

function parseIsoLocalDateTime(iso) {
  if (typeof iso !== 'string') return null;
  const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2}))?$/);
  if (!m) return null;
  return {
    year: Number(m[1]),
    month: Number(m[2]),
    day: Number(m[3]),
    hour: Number(m[4]),
    minute: Number(m[5]),
    second: Number(m[6] || 0),
  };
}

function getTimeZoneOffsetMs(date, timeZone) {
  const dtf = new Intl.DateTimeFormat('en-US', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  });
  const values = {};
  for (const part of dtf.formatToParts(date)) {
    if (part.type !== 'literal') values[part.type] = Number(part.value);
  }
  const asUtc = Date.UTC(
    values.year,
    (values.month || 1) - 1,
    values.day || 1,
    values.hour || 0,
    values.minute || 0,
    values.second || 0,
  );
  return asUtc - date.getTime();
}

function zonedDateTimeToUtc(parts, timeZone) {
  const wallTimeUtc = Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute, parts.second);
  let ts = wallTimeUtc;
  for (let i = 0; i < 2; i += 1) {
    const offset = getTimeZoneOffsetMs(new Date(ts), timeZone);
    ts = wallTimeUtc - offset;
  }
  return new Date(ts);
}

function parseScheduledTime(iso, timeZone) {
  const parts = parseIsoLocalDateTime(iso);
  if (!parts) return null;
  const weekday = DAY_NAMES[new Date(Date.UTC(parts.year, parts.month - 1, parts.day)).getUTCDay()];
  const utcDate = zonedDateTimeToUtc(parts, timeZone);
  return { weekday, utcDate };
}

function readJson(filePath) {
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function summarizeDivisionSchedule(matchups, nowUtc, options) {
  const resultsWindowMs = options.resultsWindowHours * 60 * 60 * 1000;
  const matchDurationMs = options.matchDurationHours * 60 * 60 * 1000;
  const parsed = [];
  const weekdayCounts = new Map();
  const weekdayLatest = new Map();

  for (const m of matchups) {
    if (!m?.scheduledTime) continue;
    const parsedTime = parseScheduledTime(m.scheduledTime, options.timezone);
    if (!parsedTime) continue;
    parsed.push({ matchup: m, ...parsedTime });
    weekdayCounts.set(parsedTime.weekday, (weekdayCounts.get(parsedTime.weekday) || 0) + 1);
    const prevTs = weekdayLatest.get(parsedTime.weekday) || 0;
    if (parsedTime.utcDate.getTime() > prevTs) weekdayLatest.set(parsedTime.weekday, parsedTime.utcDate.getTime());
  }

  const weekdayEntries = [...weekdayCounts.entries()];
  weekdayEntries.sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    return (weekdayLatest.get(b[0]) || 0) - (weekdayLatest.get(a[0]) || 0);
  });
  const primaryWeekday = weekdayEntries.length ? weekdayEntries[0][0] : 'unknown';

  const incomplete = parsed.filter(({ matchup }) => !matchup.endResult);
  let insideWindowCount = 0;
  let staleCount = 0;
  for (const m of incomplete) {
    const endUtc = new Date(m.utcDate.getTime() + matchDurationMs);
    const windowEndUtc = new Date(endUtc.getTime() + resultsWindowMs);
    if (nowUtc >= endUtc && nowUtc <= windowEndUtc) insideWindowCount += 1;
    else if (nowUtc > windowEndUtc) staleCount += 1;
  }

  let eligible = false;
  let reason = 'outside post-match window';
  if (insideWindowCount > 0) {
    eligible = true;
    reason = `inside post-match window (${insideWindowCount} incomplete)`;
  } else if (staleCount > 0) {
    eligible = true;
    reason = `stale incomplete matches (${staleCount})`;
  } else if (!incomplete.length) {
    reason = 'no incomplete scheduled matches';
  }

  return {
    primaryWeekday,
    weekdayCounts: weekdayEntries.map(([day, count]) => `${day}:${count}`).join(', ') || 'none',
    eligible,
    reason,
  };
}

// Due-mode only ever considers the current season. An archived season has no
// matches left to come in, and is not fetchable in any case — evaluating its
// schedule would only ever print a page of SKIPs, and every match in it is by
// definition "stale incomplete" the moment the season ends, which would have
// selected the whole archive on every six-hourly run.
function selectDueDivisionSlugs(league, options) {
  const { dataSubdir, divisionsFile, seasonsFile } = getLeagueDataConfig(league);
  const leagueDir = path.join(__dirname, '..', dataSubdir);
  const seasons = readJson(path.join(leagueDir, seasonsFile));
  const season = Array.isArray(seasons) ? currentSeason(resolveLeagueSeasons(league, seasons)) : null;
  if (!season) {
    console.log(`\n${league.toUpperCase()} schedule selection: no current season cached; falling back to full refresh.`);
    return null;
  }

  const dataDir = path.join(leagueDir, season.slug);
  const divisionsPath = path.join(dataDir, divisionsFile);
  const nowUtc = new Date();
  const divisions = readJson(divisionsPath);

  if (!Array.isArray(divisions) || !divisions.length) {
    console.log(`\n${league.toUpperCase()} schedule selection: no cached divisions found; falling back to full refresh.`);
    return null;
  }

  const selected = [];
  const rows = [];

  for (const div of divisions) {
    const matchupsPath = path.join(dataDir, div.slug, 'matchups.json');
    const matchups = extractValues(readJson(matchupsPath));
    const schedule = summarizeDivisionSchedule(matchups, nowUtc, options);
    if (schedule.eligible) selected.push(div.slug);
    rows.push({
      slug: div.slug,
      name: div.divisionName || div.slug,
      primaryWeekday: schedule.primaryWeekday,
      selected: schedule.eligible,
      reason: schedule.reason,
      weekdayCounts: schedule.weekdayCounts,
    });
  }

  console.log(`\n${league.toUpperCase()} due-refresh summary`);
  console.log(`  Timezone: ${options.timezone}`);
  console.log(`  Divisions evaluated: ${rows.length}`);
  for (const row of rows) {
    console.log(`\n  ${row.selected ? '✓ SELECT' : '• SKIP'} ${row.name} (${row.slug})`);
    console.log(`    Primary day: ${row.primaryWeekday}`);
    console.log(`    Day counts:  ${row.weekdayCounts}`);
    console.log(`    Reason:      ${row.reason}`);
  }
  console.log(`\n  Selected divisions: ${selected.length} / ${rows.length}\n`);

  return selected;
}

module.exports = {
  DEFAULT_MATCH_DURATION_HOURS,
  DEFAULT_RESULTS_WINDOW_HOURS,
  DEFAULT_TIMEZONE,
  parseScheduledTime,
  selectDueDivisionSlugs,
  summarizeDivisionSchedule,
};
