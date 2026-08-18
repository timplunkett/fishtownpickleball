#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { downloadLatestApiData } = require('./modules/fetcher');
const { compileDashboardHtml, buildPlayerIndex } = require('./modules/compiler');

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const DEFAULT_TIMEZONE = 'America/New_York';
const DEFAULT_RESULTS_WINDOW_HOURS = 12;
const DEFAULT_MATCH_DURATION_HOURS = 2;

function parseArgs(argv) {
  const out = {
    league: null,
    primaryOnly: false,
    refreshMode: 'full',
    timezone: DEFAULT_TIMEZONE,
    resultsWindowHours: DEFAULT_RESULTS_WINDOW_HOURS,
    matchDurationHours: DEFAULT_MATCH_DURATION_HOURS,
  };

  for (const arg of argv) {
    if (arg === 'local' || arg === 'travel') {
      out.league = arg;
    } else if (arg === '--primary-only') {
      out.primaryOnly = true;
    } else if (arg.startsWith('--league=')) {
      out.league = arg.split('=')[1];
    } else if (arg.startsWith('--refresh-mode=')) {
      const value = arg.split('=')[1];
      if (value === 'due' || value === 'full') out.refreshMode = value;
    } else if (arg.startsWith('--timezone=')) {
      out.timezone = arg.split('=')[1] || DEFAULT_TIMEZONE;
    } else if (arg.startsWith('--results-window-hours=')) {
      const value = Number(arg.split('=')[1]);
      if (Number.isFinite(value) && value > 0) out.resultsWindowHours = value;
    } else if (arg.startsWith('--match-duration-hours=')) {
      const value = Number(arg.split('=')[1]);
      if (Number.isFinite(value) && value > 0) out.matchDurationHours = value;
    }
  }

  return out;
}

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
  return { parts, weekday, utcDate };
}

function readJson(filePath) {
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function firstValues(raw) {
  return raw?.$values || raw?.matchups?.$values || raw || [];
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
    if (parsedTime.utcDate.getTime() > prevTs) {
      weekdayLatest.set(parsedTime.weekday, parsedTime.utcDate.getTime());
    }
  }

  const weekdayEntries = [...weekdayCounts.entries()];
  weekdayEntries.sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    return (weekdayLatest.get(b[0]) || 0) - (weekdayLatest.get(a[0]) || 0);
  });
  const primaryWeekday = weekdayEntries.length ? weekdayEntries[0][0] : 'unknown';

  const incomplete = parsed.filter(({ matchup }) => !matchup.endResult);
  const insideWindow = [];
  const staleIncomplete = [];
  for (const m of incomplete) {
    const endUtc = new Date(m.utcDate.getTime() + matchDurationMs);
    const windowEndUtc = new Date(endUtc.getTime() + resultsWindowMs);
    if (nowUtc >= endUtc && nowUtc <= windowEndUtc) {
      insideWindow.push(m);
    } else if (nowUtc > windowEndUtc) {
      staleIncomplete.push(m);
    }
  }

  let eligible = false;
  let reason = 'outside post-match window';
  if (insideWindow.length > 0) {
    eligible = true;
    reason = `inside post-match window (${insideWindow.length} incomplete)`;
  } else if (staleIncomplete.length > 0) {
    eligible = true;
    reason = `stale incomplete matches (${staleIncomplete.length})`;
  }

  if (!incomplete.length) {
    reason = 'no incomplete scheduled matches';
  }

  return {
    primaryWeekday,
    weekdayCounts: weekdayEntries.map(([day, count]) => `${day}:${count}`).join(', ') || 'none',
    incompleteCount: incomplete.length,
    eligible,
    reason,
  };
}

function selectDueDivisionSlugs(league, options) {
  const dataSubdir = league === 'travel' ? 'data-travel' : 'data-local';
  const divisionsFile = league === 'travel' ? 'divisions-travel.json' : 'divisions.json';
  const dataDir = path.join(__dirname, dataSubdir);
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
    const raw = readJson(matchupsPath);
    const matchups = Array.isArray(firstValues(raw)) ? firstValues(raw) : [];
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

  console.log(`\n${league.toUpperCase()} schedule-derived refresh summary (timezone: ${options.timezone}):`);
  for (const row of rows) {
    console.log(
      `  ${row.selected ? '[SELECT]' : '[SKIP]  '} ${row.slug} (${row.name}) ` +
      `weekday=${row.primaryWeekday} counts=${row.weekdayCounts} reason=${row.reason}`,
    );
  }
  console.log(`  Selected ${selected.length} / ${rows.length} divisions.\n`);

  return selected;
}

async function runPipeline(league, options) {
  try {
    let divisionSlugs = null;
    if (options.refreshMode === 'due') {
      divisionSlugs = selectDueDivisionSlugs(league, options);
    } else {
      console.log(`\n${league.toUpperCase()} refresh mode: full (weekly safety refresh/manual backfill).`);
    }

    // 1. Fetch from Azure APIs and cache raw JSON files to _data/
    await downloadLatestApiData(league, {
      primaryOnly: options.primaryOnly,
      divisionSlugs,
    });

    // 2. Load the cached files, compute stats, and write cpl/<league>/data.js
    await compileDashboardHtml(league, {
      primaryOnly: options.primaryOnly,
      divisionSlugs,
    });

    console.log(`\n🚀 CPL Pipeline (${league}) completed successfully!`);
  } catch (err) {
    console.error("\n❌ Pipeline execution failed:", err.message);
    process.exit(1);
  }
}

const options = parseArgs(process.argv.slice(2));

if (options.league === 'local') {
  runPipeline('local', options).then(() => buildPlayerIndex());
} else if (options.league === 'travel') {
  runPipeline('travel', options).then(() => buildPlayerIndex());
} else {
  (async () => {
    await runPipeline('local', options);
    await runPipeline('travel', options);
    buildPlayerIndex();
  })();
}
