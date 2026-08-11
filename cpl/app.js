'use strict';

const TEAM_COLOR_PALETTE = Object.freeze([
  '#1db2dc', // Blue
  '#e5534b', // Red
  '#19d39a', // Green
  '#7fd6ee', // Light blue
  '#e8c66b', // Yellow
]);
const TEAM_COLORS = Object.freeze(Object.fromEntries(
  [...(Array.isArray(DATA.teams) ? DATA.teams : [])]
    .sort((a, b) => (a?.name ?? '').localeCompare(b?.name ?? ''))
    .map((team, index) => [
      team.name,
      TEAM_COLOR_PALETTE[index % TEAM_COLOR_PALETTE.length],
    ]),
));
const HIGHLIGHTED_PLAYER = '';
const EMPTY_VALUE = '—';
const DEFAULT_SORT = Object.freeze({ key: 'rating', direction: -1 });
const COLUMNS = Object.freeze([
  { key: 'name', label: 'Player', align: 'left' },
  { key: 'team', label: 'Team', align: 'left' },
  { key: 'rating', label: 'Rating', align: 'right' },
  { key: 'conf', label: 'Conf', align: 'right' },
  { key: 'soo', label: 'Opp <br>Str', align: 'right' },
  { key: 'sop', label: 'Partner <br>Str', align: 'right' },
  { key: 'leagueRank', label: 'Lg <br>Rank', align: 'right' },
  { key: 'matches', label: 'M', align: 'right' },
  { key: 'gamesPlayed', label: 'GP', align: 'right' },
  { key: 'wl', label: 'W–L', align: 'right' },
  { key: 'winPct', label: 'Win%', align: 'right' },
  { key: 'diff', label: '+/–', align: 'right' },
  { key: 'mixed', label: 'Mixed', align: 'right' },
  { key: 'gender', label: 'Gendr', align: 'right' },
  { key: 'clutch', label: 'Clutch', align: 'right' },
]);
const GAME_TYPE_LABELS = Object.freeze({
  mixed: ['MIX', 't-mixed'],
  female: ['W', 't-female'],
  male: ['M', 't-male'],
});
const RESULT_CLASS = Object.freeze({
  win: 'res-W',
  slightWin: 'res-slight-W',
  loss: 'res-L',
  slightLoss: 'res-slight-L',
  neutral: 'mut',
});
const HTML_ESCAPE_MAP = Object.freeze({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
});

const elements = {
  body: getRequiredElement('body'),
  divisionSelect: getRequiredElement('division-select'),
  duoBody: getRequiredElement('duobody'),
  footer: getRequiredElement('foot'),
  gender: getRequiredElement('gender'),
  gridHost: getRequiredElement('grid-host'),
  head: getRequiredElement('head'),
  kicker: getRequiredElement('kicker'),
  mainView: getRequiredElement('mainview'),
  minGames: getRequiredElement('minq'),
  modalBody: getRequiredElement('mbody'),
  modalClose: getRequiredElement('mx'),
  modalHead: getRequiredElement('mhead'),
  overlay: getRequiredElement('overlay'),
  playerCount: getRequiredElement('plabel'),
  pod: getRequiredElement('pod'),
  search: getRequiredElement('search'),
  subhead: getRequiredElement('sub'),
  swarmHost: getRequiredElement('swarm-host'),
  team: getRequiredElement('team'),
  teams: getRequiredElement('teams'),
  teamView: getRequiredElement('teamview'),
  title: getRequiredElement('title'),
};

const TEAM_ABBR = Object.freeze(buildTeamAbbreviations(
  (Array.isArray(DATA.teams) ? DATA.teams : []).map((team) => team.name),
));

// Build a name → rating lookup from DATA (data.js loads before app.js).
const playerRatingByName = Object.fromEntries(
  DATA.players
    .filter((p) => p.rating != null)
    .map((p) => [p.name, p.rating]),
);
const currentRatingRankByName = Object.fromEntries(
  DATA.players
    .filter((player) => player.rating != null)
    .slice()
    .sort((playerA, playerB) => (
      (playerB.rating - playerA.rating) ||
      (playerB.confidence - playerA.confidence) ||
      (playerB.ratingGames - playerA.ratingGames) ||
      playerA.name.localeCompare(playerB.name)
    ))
    .map((player, index) => [player.name, index + 1]),
);
const ratingHistoryWeeks = Array.isArray(DATA.meta.ratingHistoryWeeks) && DATA.meta.ratingHistoryWeeks.length
  ? DATA.meta.ratingHistoryWeeks
  : (() => {
      const match = String(DATA.meta.weeks || '').match(/(\d+)(?!.*\d)/);
      return match ? [Number(match[1])] : [];
    })();

let sortKey = DEFAULT_SORT.key;
let sortDirection = DEFAULT_SORT.direction;
let hashSetByApp = false;

function getRequiredElement(id) {
  const element = document.getElementById(id);

  if (!element) {
    throw new Error(`Missing required element: #${id}`);
  }

  return element;
}

function getCurrentDivision() {
  const currentSlug = DATA.meta.divisionSlug;
  if (currentSlug) {
    const matchedDivision = DIVISIONS.find((division) => division.slug === currentSlug);
    if (matchedDivision) {
      return matchedDivision;
    }
  }

  return DIVISIONS[0] || null;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => HTML_ESCAPE_MAP[character]);
}

function isMissing(value) {
  return value === null || value === undefined;
}

function abbreviateTeamName(teamName) {
  const normalizedName = String(teamName || '').trim();
  const words = normalizedName.split(/[^A-Za-z0-9]+/).filter(Boolean);
  if (!words.length) return normalizedName;
  if (normalizedName.length <= 12) return normalizedName;
  if (words.length === 1) return words[0].slice(0, 8);
  return words.map((word) => word[0]).join('').toUpperCase().slice(0, 4);
}

function buildTeamAbbreviations(teamNames) {
  const abbreviations = {};
  const used = new Set();

  teamNames.forEach((teamName) => {
    let abbreviation = abbreviateTeamName(teamName) || String(teamName || '');
    if (!used.has(abbreviation)) {
      abbreviations[teamName] = abbreviation;
      used.add(abbreviation);
      return;
    }

    let attempt = 2;
    while (used.has(`${abbreviation}${attempt}`)) {
      attempt += 1;
    }
    abbreviation = `${abbreviation}${attempt}`;
    abbreviations[teamName] = abbreviation;
    used.add(abbreviation);
  });

  return abbreviations;
}

function getTeamColor(teamName) {
  return TEAM_COLORS[teamName] ?? 'var(--accent)';
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function formatSignedValue(value, digits) {
  const number = digits === undefined ? String(value) : value.toFixed(digits);
  return `${value >= 0 ? '+' : ''}${number}`;
}

function formatWinPct(wins, losses) {
  const total = wins + losses;
  return total ? ((100 * wins) / total).toFixed(1) : '0.0';
}

function formatRecordWithPct(wins, losses) {
  return `${wins}–${losses} (${formatWinPct(wins, losses)}%)`;
}

function formatDiffSpan(value) {
  const className = value >= 0 ? 'pos-diff' : 'neg-diff';
  return `<span class="${className}">${formatSignedValue(value)}</span>`;
}

function getWinLossClass(won) {
  return won ? RESULT_CLASS.win : RESULT_CLASS.loss;
}

function pluralize(count, singular, plural = `${singular}s`) {
  return count === 1 ? singular : plural;
}

function getPlayerRatingHistory(player) {
  if (Array.isArray(player.ratingHistory) && player.ratingHistory.length) {
    return player.ratingHistory;
  }

  const fallbackWeek = ratingHistoryWeeks[ratingHistoryWeeks.length - 1];
  if (player.rating == null || fallbackWeek == null) {
    return [];
  }

  return [{
    week: fallbackWeek,
    rating: player.rating,
    confidence: player.confidence,
    rank: currentRatingRankByName[player.name] ?? null,
    ratingGames: player.ratingGames,
    strengthOfPartners: player.strengthOfPartners,
    strengthOfOpponents: player.strengthOfOpponents,
  }];
}

function getLatestRatingSnapshot(player) {
  const history = getPlayerRatingHistory(player);
  return history.length ? history[history.length - 1] : null;
}

function renderDivisionSelector() {
  const currentSlug = getCurrentDivision()?.slug || '';
  const isTravel = DATA.meta.leagueType === 'travel';

  elements.divisionSelect.innerHTML = DIVISIONS.map((div) => {
    const label = isTravel || !div.clubName ? div.divisionName : `${div.clubName} — ${div.divisionName}`;
    const selected = div.slug === currentSlug ? ' selected' : '';
    return `<option value="${div.slug}"${selected}>${escapeHtml(label)}</option>`;
  }).join('');

  elements.divisionSelect.addEventListener('change', () => {
    const slug = elements.divisionSelect.value;
    const url = new URL(window.location.href);
    url.searchParams.set('d', slug);
    url.hash = '';
    window.location.href = url.toString();
  });
}

function renderHeader() {
  const currentDivision = getCurrentDivision();
  const isTravel = DATA.meta.leagueType === 'travel';
  const clubName = DATA.meta.clubName || currentDivision?.clubName || '';
  const divisionName = DATA.meta.divisionName || currentDivision?.divisionName || '';
  const titlePrefix = divisionName ? `${divisionName} ` : '';
  if (isTravel) {
    const regionName = DATA.meta.regionName || 'Philadelphia';
    elements.kicker.textContent = `Cross Club League • ${regionName}`;
  } else {
    if (!clubName) {
      throw new Error('Missing clubName for current CPL dataset.');
    }
    elements.kicker.textContent = clubName;
  }
  elements.title.textContent = `${titlePrefix}Standings & Player Stats`;
}

function renderSummary() {
  const currentSlug = DATA.meta.divisionSlug || getCurrentDivision()?.slug || '';
  const isTravel = DATA.meta.leagueType === 'travel';
  const leagueLabel = isTravel ? 'Cross Club League API' : 'Local League API';
  elements.subhead.textContent =
    `${DATA.meta.matchesPlayed} matches played (Weeks ${DATA.meta.weeks}) • ` +
    `${DATA.meta.totalPlayers} players • as of ${DATA.meta.asOf}`;
  elements.footer.textContent =
    `Live from the ${leagueLabel} • division ${currentSlug} • Weeks ${DATA.meta.weeks}, ` +
    `${DATA.meta.matchesPlayed} completed matches. "PF/PA" are the league's recorded ` +
    `points for/against; +/- is their difference. Win% = game wins ÷ games played. ` +
    `Rating is a ridge-regularized adjusted plus-minus: each player's net points per ` +
    `game above an average player, controlling for partner and opponent strength. The ` +
    `"Conf" column shows how much of each rating is backed by real game evidence ` +
    `(0–100%) — early-season ratings are low-confidence and will shift as more ` +
    `games are played.`;
}

function renderTeams() {
  const podCount = DATA.meta && DATA.meta.podCount > 1 ? DATA.meta.podCount : 1;
  if (podCount <= 1) {
    elements.teams.innerHTML = DATA.teams
      .map((team, index) => `
        <div class="tcard" data-team="${slugify(team.name)}" style="border-top:3px solid ${getTeamColor(team.name)}">
          <div class="seed">#${index + 1}</div>
          <h3>${escapeHtml(team.name)}</h3>
          <div class="rec">${team.w}–${team.l} <small>match${pluralize(team.w + team.l, '', 'es')}</small></div>
          <div class="pts">Games <b class="txt-strong">${formatRecordWithPct(team.gw, team.gl)}</b></div>
          <div class="pts">PF ${team.pf} • PA ${team.pa} • <span class="d">${formatDiffSpan(team.diff)}</span></div>
          <div class="go">View team →</div>
        </div>
      `)
      .join('');
    return;
  }
  // Multiple pods: group teams by pod, show a pod header before each group,
  // and seed within the pod rather than across the whole division.
  const sections = [];
  for (let p = 1; p <= podCount; p++) {
    const podTeams = DATA.teams.filter((t) => t.pod === p);
    const cards = podTeams
      .map((team, index) => `
        <div class="tcard" data-team="${slugify(team.name)}" style="border-top:3px solid ${getTeamColor(team.name)}">
          <div class="seed">#${index + 1}</div>
          <h3>${escapeHtml(team.name)}</h3>
          <div class="rec">${team.w}–${team.l} <small>match${pluralize(team.w + team.l, '', 'es')}</small></div>
          <div class="pts">Games <b class="txt-strong">${formatRecordWithPct(team.gw, team.gl)}</b></div>
          <div class="pts">PF ${team.pf} • PA ${team.pa} • <span class="d">${formatDiffSpan(team.diff)}</span></div>
          <div class="go">View team →</div>
        </div>
      `)
      .join('');
    sections.push(`<div class="pod-section"><h3 class="pod-heading">Pod ${p}</h3><div class="tgrid">${cards}</div></div>`);
  }
  elements.teams.innerHTML = sections.join('');
}

function renderTeamFilterOptions() {
  elements.team.innerHTML = [
    '<option value="">All teams</option>',
    ...DATA.teams.map(
      (team) => `<option value="${escapeHtml(team.name)}">${escapeHtml(team.name)}</option>`,
    ),
  ].join('');
}

function renderPodFilterOptions() {
  const podCount = DATA.meta && DATA.meta.podCount > 1 ? DATA.meta.podCount : 1;
  if (podCount <= 1) {
    elements.pod.hidden = true;
    return;
  }
  elements.pod.innerHTML = [
    '<option value="">All pods</option>',
    ...Array.from({ length: podCount }, (_, i) => i + 1).map(
      (p) => `<option value="${p}">Pod ${p}</option>`,
    ),
  ].join('');
  elements.pod.hidden = false;
}

function renderTableHead() {
  elements.head.innerHTML = COLUMNS.map(({ key, label, align }) => {
    const classes = [];

    if (align === 'left') {
      classes.push('l');
    }

    if (key === sortKey) {
      classes.push('sorted');
    }

    const classAttribute = classes.length > 0 ? ` class="${classes.join(' ')}"` : '';
    return `<th data-k="${key}"${classAttribute}>${label}</th>`;
  }).join('');
}

function getSortValue(player, key) {
  switch (key) {
    case 'rating':
      return isMissing(player.rating) ? Number.NEGATIVE_INFINITY : player.rating;
    case 'conf':
      return player.confidence;
    case 'soo':
      return isMissing(player.strengthOfOpponents)
        ? Number.NEGATIVE_INFINITY
        : player.strengthOfOpponents;
    case 'sop':
      return isMissing(player.strengthOfPartners)
        ? Number.NEGATIVE_INFINITY
        : player.strengthOfPartners;
    case 'wl':
      return player.wins * 1000 - player.losses;
    case 'mixed':
      return player.mixedWins;
    case 'gender':
      return player.genderWins;
    case 'clutch':
      return player.clutchWins;
    default:
      return player[key];
  }
}

function renderPlayerName(player) {
  const highlighted = player.name === HIGHLIGHTED_PLAYER ? ' ★' : '';
  const subTag = player.outsideSub ? ' <span class="sub-tag" title="Outside sub — not a rostered team member">sub</span>' : '';
  return `<span class="pname" data-name="${escapeHtml(player.name)}">${escapeHtml(player.name)}${highlighted}</span>${subTag}`;
}

function renderTeamCell(teamName) {
  return `
    <span class="teamdot" style="background:${getTeamColor(teamName)}"></span>${escapeHtml(teamName)}
  `;
}

function renderRatingCell(player) {
  if (isMissing(player.rating)) {
    return EMPTY_VALUE;
  }

  const className = player.rating >= 0 ? 'pos-diff' : 'neg-diff';
  return `
    <span class="rating ${className}" title="${player.ratingGames} games">
      ${formatSignedValue(player.rating, 1)}
    </span>
  `;
}

function renderConfidenceCell(player) {
  if (isMissing(player.rating)) {
    return EMPTY_VALUE;
  }

  const matchLabel = pluralize(player.matches, 'match');
  const title =
    `${player.confidence}% confidence — share of this rating driven by real game evidence ` +
    `(${player.matches} ${matchLabel}, ${player.ratingGames} games) vs. the average-player prior`;

  return `
    <span class="confwrap" title="${escapeHtml(title)}">
      <span class="confbar"><i style="width:${player.confidence}%"></i></span>
      <span class="confnum">${player.confidence}%</span>
    </span>
  `;
}

function renderStrengthCell(player, key) {
  const value = key === 'soo' ? player.strengthOfOpponents : player.strengthOfPartners;

  if (isMissing(value)) {
    return EMPTY_VALUE;
  }

  const counterpart = key === 'soo' ? 'opponents faced' : 'partners played with';
  const tooltip =
    `Average rating of ${counterpart}, on the same points/game scale. ` +
    'Above 0 = stronger than league average.';

  return `<span class="sos" title="${escapeHtml(tooltip)}">${formatSignedValue(value, 1)}</span>`;
}

function renderCell(player, key) {
  switch (key) {
    case 'name':
      return renderPlayerName(player);
    case 'team':
      return renderTeamCell(player.team);
    case 'wl':
      return `<b>${player.wins}</b>–${player.losses}`;
    case 'diff':
      return formatDiffSpan(player.diff);
    case 'pointsWon':
      return `<span class="pf">${player.pointsWon}</span>`;
    case 'mixed':
      return `${player.mixedWins}–${player.mixedLosses}`;
    case 'gender':
      return `${player.genderWins}–${player.genderLosses}`;
    case 'clutch':
      return `${player.clutchWins}–${player.clutchLosses}`;
    case 'rating':
      return renderRatingCell(player);
    case 'conf':
      return renderConfidenceCell(player);
    case 'soo':
    case 'sop':
      return renderStrengthCell(player, key);
    case 'leagueRank':
      return isMissing(player.leagueRank)
        ? EMPTY_VALUE
        : `<span class="lgrank">#${player.leagueRank}</span>`;
    case 'winPct':
    case 'ppg':
      return player[key].toFixed(1);
    default:
      return escapeHtml(player[key]);
  }
}

function getFilteredPlayers() {
  const query = elements.search.value.trim().toLowerCase();
  const teamFilter = elements.team.value;
  const podFilter = Number(elements.pod.value) || 0;
  const genderFilter = elements.gender.value;
  const matchFilter = Number(elements.minGames.value);

  return DATA.players.filter(
    (player) =>
      (!query || player.name.toLowerCase().includes(query)) &&
      (!teamFilter || player.team === teamFilter) &&
      (!podFilter || (() => {
        const t = DATA.teams.find((tm) => tm.name === player.team);
        return t && t.pod === podFilter;
      })()) &&
      (!genderFilter || player.gender === genderFilter) &&
      (matchFilter === 0 || (matchFilter === 1 ? player.matches === 1 : player.matches >= matchFilter)),
  );
}

function comparePlayers(playerA, playerB) {
  const valueA = getSortValue(playerA, sortKey);
  const valueB = getSortValue(playerB, sortKey);

  if (typeof valueA === 'string' && typeof valueB === 'string') {
    return valueA.toLowerCase().localeCompare(valueB.toLowerCase()) * sortDirection;
  }

  return (valueA - valueB) * sortDirection || playerB.winPct - playerA.winPct;
}

function renderRows(rows) {
  elements.body.innerHTML = rows
    .map((player, index) => {
      const rowClass = player.name === HIGHLIGHTED_PLAYER ? ' class="me"' : '';
      const rankClass =
        sortKey === 'winPct' && sortDirection === -1 && index < 3 ? ` g${index + 1}` : '';
      const rankMarkup = `<span class="pos${rankClass}">${index + 1}</span>`;

      const cells = COLUMNS.map(({ key, align }, columnIndex) => {
        const classAttribute = align === 'left' ? ' class="l"' : '';
        const prefix = columnIndex === 0 ? rankMarkup : '';
        return `<td${classAttribute}>${prefix}${renderCell(player, key)}</td>`;
      }).join('');

      return `<tr${rowClass}>${cells}</tr>`;
    })
    .join('');

  elements.playerCount.textContent = `${rows.length} shown`;
}

function updateSortedHeader() {
  elements.head.querySelectorAll('th').forEach((headerCell) => {
    headerCell.classList.toggle('sorted', headerCell.dataset.k === sortKey);
  });
}

function render() {
  const rows = getFilteredPlayers().sort(comparePlayers);
  updateSortedHeader();
  renderRows(rows);
}

function describeStrength(value, strongLabel, weakLabel) {
  if (value >= 1) {
    return strongLabel;
  }

  if (value <= -1) {
    return weakLabel;
  }

  return 'average';
}

function sosNarrative(player) {
  if (isMissing(player.rating)) {
    return '';
  }

  const opponentWord = describeStrength(player.strengthOfOpponents, 'tough', 'weak');
  const partnerWord = describeStrength(player.strengthOfPartners, 'strong', 'weak');
  let tail = '';

  if (player.winPct >= 80 && player.strengthOfOpponents <= -0.5 && player.strengthOfPartners >= 0.5) {
    tail = ' Their record is helped by favorable conditions.';
  } else if (player.winPct < 50 && player.strengthOfOpponents >= 0.5) {
    tail = ' Their record is dragged down by a hard schedule.';
  } else if (player.strengthOfPartners <= -0.5 && player.rating >= 0.5) {
    tail = ' Strong showing given below-average partners.';
  }

  return `Rated <b>${formatSignedValue(player.rating)}</b> pts/game vs. an average player ` +
    `(${player.confidence}% confidence), facing <b>${opponentWord}</b> opponents ` +
    `(${formatSignedValue(player.strengthOfOpponents, 1)}) alongside <b>${partnerWord}</b> ` +
    `partners (${formatSignedValue(player.strengthOfPartners, 1)}).${tail}`;
}

function renderPartnerChip(partner, className) {
  return `
    <span class="pchip" data-name="${escapeHtml(partner.name)}">
      <b>${escapeHtml(partner.name)}</b>
      <span class="${className}">${formatSignedValue(partner.synergy, 1)}</span>
      <span class="mut">(${partner.n}g)</span>
    </span>
  `;
}

function renderPartnersLine(player) {
  const partners = player.partners || [];

  if (partners.length === 0) {
    return '';
  }

  const best = partners[0];
  const worst = partners[partners.length - 1];
  let markup = `<div class="mh-partners"><span class="pl">Chemistry</span> best ${renderPartnerChip(best, 'pos-diff')}`;

  if (partners.length > 1 && worst !== best) {
    markup += ` &nbsp;•&nbsp; toughest fit ${renderPartnerChip(worst, 'neg-diff')}`;
  }

  return `${markup}</div>`;
}

function renderModalHeader(player) {
  const genderLabel = player.gender === 'Male' ? 'Men' : 'Women';
  const ratingClass = player.rating >= 0 ? 'pos-diff' : 'neg-diff';
  const diffClass = player.diff >= 0 ? 'pos-diff' : 'neg-diff';
  const narrative = !isMissing(player.rating) ? `<p class="mh-narr">${sosNarrative(player)}</p>` : '';
  const partnersLine = renderPartnersLine(player);
  const latestRatingSnapshot = getLatestRatingSnapshot(player);
  const divisionRankStat = latestRatingSnapshot?.rank == null
    ? ''
    : `<div class="mh-stat"><div class="n">#${latestRatingSnapshot.rank}</div><div class="l">DIV RANK</div></div>`;
  const leagueRankStat = isMissing(player.leagueRank)
    ? ''
    : `<div class="mh-stat"><div class="n">#${player.leagueRank}</div><div class="l">LG RANK</div></div>`;

  return `
    <div class="mh-name">${escapeHtml(player.name)}${player.name === HIGHLIGHTED_PLAYER ? ' ★' : ''}</div>
    <div class="mh-sub">
      <span class="teamdot" style="background:${getTeamColor(player.team)}"></span>
      ${escapeHtml(player.team)} • ${genderLabel} • season totals
    </div>
    <div class="mh-stats">
      <div class="mh-stat"><div class="n ${ratingClass}">${isMissing(player.rating) ? EMPTY_VALUE : formatSignedValue(player.rating)}</div><div class="l">RATING</div></div>
      <div class="mh-stat"><div class="n">${isMissing(player.rating) ? EMPTY_VALUE : `${player.confidence}%`}</div><div class="l">CONFIDENCE</div></div>
      <div class="mh-stat"><div class="n">${isMissing(player.strengthOfOpponents) ? EMPTY_VALUE : formatSignedValue(player.strengthOfOpponents)}</div><div class="l">OPP STR</div></div>
      <div class="mh-stat"><div class="n">${isMissing(player.strengthOfPartners) ? EMPTY_VALUE : formatSignedValue(player.strengthOfPartners)}</div><div class="l">PARTNER STR</div></div>
      <div class="mh-stat"><div class="n">${player.wins}–${player.losses}</div><div class="l">RECORD</div></div>
      <div class="mh-stat"><div class="n">${player.winPct.toFixed(0)}%</div><div class="l">WIN RATE</div></div>
      <div class="mh-stat"><div class="n">${player.pointsWon}</div><div class="l">POINTS FOR</div></div>
      <div class="mh-stat"><div class="n ${diffClass}">${formatSignedValue(player.diff)}</div><div class="l">DIFF</div></div>
      <div class="mh-stat"><div class="n">${player.matches}</div><div class="l">MATCH${pluralize(player.matches, '', 'ES')}</div></div>
      ${divisionRankStat}
      ${leagueRankStat}
    </div>
    ${narrative}
    ${partnersLine}
  `;
}

function renderRatingTrendChart(player, history) {
  const weeks = ratingHistoryWeeks.length ? ratingHistoryWeeks : history.map((snapshot) => snapshot.week);
  if (!weeks.length) {
    return '';
  }

  const ratings = history.map((snapshot) => snapshot.rating).filter((rating) => rating != null);
  if (!ratings.length) {
    return '';
  }

  let domainMin = Math.min(...ratings, 0);
  let domainMax = Math.max(...ratings, 0);
  if (domainMin === domainMax) {
    domainMin -= 1;
    domainMax += 1;
  } else {
    const pad = Math.max(0.5, (domainMax - domainMin) * 0.2);
    domainMin -= pad;
    domainMax += pad;
  }

  const W = 640;
  const H = 180;
  const left = 46;
  const right = 12;
  const top = 14;
  const bottom = 34;
  const firstWeek = weeks[0];
  const lastWeek = weeks[weeks.length - 1];
  const xScale = (week) => {
    if (firstWeek === lastWeek) {
      return (left + (W - right)) / 2;
    }
    return left + ((week - firstWeek) / (lastWeek - firstWeek)) * (W - left - right);
  };
  const yScale = (rating) => top + ((domainMax - rating) / (domainMax - domainMin)) * (H - top - bottom);
  const yTicks = Array.from({ length: 5 }, (_, index) => {
    if (index === 4) {
      return domainMax;
    }
    return domainMin + ((domainMax - domainMin) * index) / 4;
  });
  const historyByWeek = new Map(history.map((snapshot) => [snapshot.week, snapshot]));
  const segments = [];
  let currentSegment = [];

  for (const week of weeks) {
    const snapshot = historyByWeek.get(week);
    if (!snapshot) {
      if (currentSegment.length) {
        segments.push(currentSegment.join(' '));
        currentSegment = [];
      }
      continue;
    }
    currentSegment.push(`${xScale(week).toFixed(1)},${yScale(snapshot.rating).toFixed(1)}`);
  }
  if (currentSegment.length) {
    segments.push(currentSegment.join(' '));
  }

  const lineMarkup = segments
    .map((points) => `<polyline fill="none" stroke="${getTeamColor(player.team)}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" points="${points}"/>`)
    .join('');
  const dotMarkup = history
    .map((snapshot, index) => {
      const cx = xScale(snapshot.week).toFixed(1);
      const cy = yScale(snapshot.rating).toFixed(1);
      const radius = index === history.length - 1 ? 5 : 4;
      const rankLabel = snapshot.rank == null ? '' : ` • #${snapshot.rank}`;
      return `
        <circle cx="${cx}" cy="${cy}" r="${radius}" fill="${getTeamColor(player.team)}" stroke="rgb(0 0 0 / 30%)" stroke-width="1.2">
          <title>Week ${snapshot.week}: ${formatSignedValue(snapshot.rating, 1)}${rankLabel} • ${snapshot.confidence}% confidence</title>
        </circle>
      `;
    })
    .join('');
  const tickMarkup = weeks
    .map((week) => {
      const x = xScale(week).toFixed(1);
      return `
        <line x1="${x}" y1="${top}" x2="${x}" y2="${H - bottom}" stroke="var(--line)" stroke-dasharray="2 4" opacity="0.45"/>
        <text x="${x}" y="${H - 11}" text-anchor="middle" font-size="11" fill="var(--mut)">W${week}</text>
      `;
    })
    .join('');
  const yAxisMarkup = yTicks
    .map((tick) => {
      const y = yScale(tick).toFixed(1);
      const isZero = Math.abs(tick) < 0.05;
      return `
        <line x1="${left}" y1="${y}" x2="${W - right}" y2="${y}" stroke="var(--line)" stroke-width="${isZero ? 1.3 : 1}"${isZero ? '' : ' stroke-dasharray="2 4"'} opacity="${isZero ? 0.8 : 0.35}"/>
        <text x="${left - 8}" y="${(Number(y) + 3.5).toFixed(1)}" text-anchor="end" font-size="10.5" fill="var(--mut)">${formatSignedValue(Math.round(tick * 10) / 10, 1)}</text>
      `;
    })
    .join('');
  const lastSnapshot = history[history.length - 1];
  const lastX = xScale(lastSnapshot.week).toFixed(1);
  const lastY = yScale(lastSnapshot.rating).toFixed(1);
  const labelYOffset = Number(lastY) > ((H - bottom + top) / 2) ? -10 : 16;
  const currentLabel = `
    <text x="${lastX}" y="${(Number(lastY) + labelYOffset).toFixed(1)}" text-anchor="middle" font-size="11" font-weight="700" fill="${getTeamColor(player.team)}">
      ${formatSignedValue(lastSnapshot.rating, 1)}
    </text>
  `;

  return `
    <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Player rating by week">
      ${yAxisMarkup}
      <line x1="${left}" y1="${top}" x2="${left}" y2="${H - bottom}" stroke="var(--line)" stroke-width="1.1"/>
      ${tickMarkup}
      ${lineMarkup}
      ${dotMarkup}
      ${currentLabel}
    </svg>
  `;
}

function renderRatingHistorySection(player) {
  const history = getPlayerRatingHistory(player);
  if (!history.length) {
    return '';
  }

  const firstSnapshot = history[0];
  const latestSnapshot = history[history.length - 1];
  const change = latestSnapshot.rating - firstSnapshot.rating;
  const changeClass = change >= 0 ? 'pos-diff' : 'neg-diff';
  const currentRank = latestSnapshot.rank == null ? EMPTY_VALUE : `#${latestSnapshot.rank}`;
  const trendSummary = history.length > 1
    ? `Change since Wk ${firstSnapshot.week}`
    : 'Current snapshot';
  const rows = history
    .map((snapshot, index) => {
      const previousSnapshot = index > 0 ? history[index - 1] : null;
      const diff = previousSnapshot == null ? null : snapshot.rating - previousSnapshot.rating;
      const roundedDiff = diff == null ? null : Math.round(diff * 10) / 10;
      const rankCell = snapshot.rank == null ? EMPTY_VALUE : `#${snapshot.rank}`;
      return `
        <div class="rhist-row">
          <div class="wk">Wk ${snapshot.week}</div>
          <div class="val ${snapshot.rating >= 0 ? 'pos-diff' : 'neg-diff'}">${formatSignedValue(snapshot.rating, 1)}</div>
          <div class="df ${roundedDiff == null || roundedDiff === 0 ? 'mut' : roundedDiff > 0 ? 'pos-diff' : 'neg-diff'}">${roundedDiff == null || roundedDiff === 0 ? EMPTY_VALUE : formatSignedValue(roundedDiff, 1)}</div>
          <div class="rk">${rankCell}</div>
          <div class="cf">${snapshot.confidence}%</div>
        </div>
      `;
    })
    .join('');

  return `
    <section class="mtrend">
      <div class="gtitle">Rating by week <span>cumulative through each week • rank = among rated players in this division</span></div>
      <div class="mtrend-chart">${renderRatingTrendChart(player, history)}</div>
      <div class="mtrend-summary">
        <div><span class="lab">Current</span><b class="${latestSnapshot.rating >= 0 ? 'pos-diff' : 'neg-diff'}">${formatSignedValue(latestSnapshot.rating, 1)}</b></div>
        <div><span class="lab">Rank</span><b>${currentRank}</b></div>
        <div><span class="lab">${trendSummary}</span><b class="${changeClass}">${formatSignedValue(change, 1)}</b></div>
      </div>
      <div class="rhist-head">
        <span>Week</span>
        <span>Rating</span>
        <span>Diff</span>
        <span>Rank</span>
        <span>Conf</span>
      </div>
      <div class="rhist">${rows}</div>
    </section>
  `;
}

function renderMatchLogRows(player) {
  return player.log
    .map(
      (game) => `
        <tr${game.sub ? ' class="subrow"' : ''}>
          <td class="l">Wk ${game.week}${game.sub ? ` <span class="sub-tag" title="Intra-league sub — not counted in match totals">sub</span>` : ''}</td>
          <td class="l"><span class="teamdot" style="background:${getTeamColor(game.opp)}"></span>${game.homeAway === 'H' ? 'vs' : '@'} ${escapeHtml(game.opp)}${game.sub && game.subFor ? ` <span class="mut">(for ${escapeHtml(game.subFor)})</span>` : ''}</td>
          <td><b>${game.w}</b>–${game.l}</td>
          <td>${game.pf}–${game.pa}</td>
          <td>${game.mx[0]}–${game.mx[1]}</td>
          <td>${game.gn[0]}–${game.gn[1]}</td>
          <td>${game.cl[0]}–${game.cl[1]}</td>
          <td class="res-${game.teamRes}">${game.teamRes} ${game.teamGW}–${game.teamGL}</td>
        </tr>
      `,
    )
    .join('');
}

// Returns the expected scoring margin for pair [nameA, nameB] vs [nameC, nameD]
// (positive = [A,B] favoured), or null when any player lacks a rating.
function computeExpectedOutcome(nameA, nameB, nameC, nameD) {
  const rA = playerRatingByName[nameA];
  const rB = playerRatingByName[nameB];
  const rC = playerRatingByName[nameC];
  const rD = playerRatingByName[nameD];
  if (rA == null || rB == null || rC == null || rD == null) return null;
  return (rA + rB) - (rC + rD);
}

// Returns a small HTML pill showing whether the result matched the expectation.
// `expectedMargin` is from computeExpectedOutcome (positive = this pair favoured).
// `won` is whether this pair won the game.
function renderExpectationTag(expectedMargin, won) {
  if (expectedMargin === null) return '';
  const absMargin = Math.abs(expectedMargin);
  if (absMargin < 1.0) return '';
  const favoured = expectedMargin > 0;
  const diff = absMargin.toFixed(1);
  if ((favoured && won) || (!favoured && !won)) {
    return ' <span class="exp-tag exp-met" title="Result matched the rating-based expectation">exp</span>';
  }
  if (!favoured && won) {
    return ` <span class="exp-tag exp-upset" title="Upset win — overcame a ${diff} pt/game pair-rating deficit">↑</span>`;
  }
  return ` <span class="exp-tag exp-drop" title="Upset loss — despite a ${diff} pt/game pair-rating advantage">↓</span>`;
}

function describeProjectedOutcome(expectedMargin) {
  if (expectedMargin === null) {
    return {
      outcome: 'unrated',
      resultClass: RESULT_CLASS.neutral,
      marginLabel: EMPTY_VALUE,
      resultLabel: '—',
      displayLabel: '—',
    };
  }
  const marginLabel = formatSignedValue(expectedMargin, 1);
  const absMargin = Math.abs(expectedMargin);
  if (absMargin < 1.0) {
    return {
      outcome: 'tie',
      resultClass: RESULT_CLASS.neutral,
      marginLabel,
      resultLabel: 'Even',
      displayLabel: `Even (${marginLabel})`,
    };
  }
  if (expectedMargin > 2.5) {
    return {
      outcome: 'win',
      resultClass: RESULT_CLASS.win,
      marginLabel,
      resultLabel: 'Proj W',
      displayLabel: `Proj W (${marginLabel})`,
    };
  }
  if (expectedMargin > 0) {
    return {
      outcome: 'win',
      resultClass: RESULT_CLASS.slightWin,
      marginLabel,
      resultLabel: 'Slight W',
      displayLabel: `Slight W (${marginLabel})`,
    };
  }
  if (expectedMargin < -2.5) {
    return {
      outcome: 'loss',
      resultClass: RESULT_CLASS.loss,
      marginLabel,
      resultLabel: 'Proj L',
      displayLabel: `Proj L (${marginLabel})`,
    };
  }
  return {
    outcome: 'loss',
    resultClass: RESULT_CLASS.slightLoss,
    marginLabel,
    resultLabel: 'Slight L',
    displayLabel: `Slight L (${marginLabel})`,
  };
}

// Returns an inline HTML fragment summarising expected and upset outcomes for
// rated games, e.g. "• exp W 2  exp L 1  ups W 1  ups L 1". Returns '' when
// there are no rated games to report.
function renderUpsetSummary(expectedWins, expectedLosses, upsetWins, upsetLosses) {
  if (!expectedWins && !expectedLosses && !upsetWins && !upsetLosses) return '';
  const parts = [];
  if (expectedWins) {
    parts.push(`<span class="exp-tag exp-upset" title="Expected wins (rating-based favorite won)">${expectedWins} exp W</span>`);
  }
  if (expectedLosses) {
    parts.push(`<span class="exp-tag exp-drop" title="Expected losses (rating-based underdog lost)">${expectedLosses} exp L</span>`);
  }
  if (upsetWins) {
    parts.push(`<span class="exp-tag exp-upset" title="Upset wins (won despite a pair-rating deficit)">${upsetWins} ups W</span>`);
  }
  if (upsetLosses) {
    parts.push(`<span class="exp-tag exp-drop" title="Upset losses (lost despite a pair-rating advantage)">${upsetLosses} ups L</span>`);
  }
  return ` • ${parts.join('&ensp;')}`;
}

function getProjectedPlayerGames(player) {
  const projectedGames = [];
  for (const match of DATA.matches || []) {
    if (match.complete || !(match.games || []).length) continue;
    for (const game of match.games || []) {
      const playerOnHomeSide = game.h?.includes(player.name);
      const playerOnAwaySide = game.a?.includes(player.name);
      if (!playerOnHomeSide && !playerOnAwaySide) continue;
      const usPlayers = playerOnHomeSide ? game.h : game.a;
      const themPlayers = playerOnHomeSide ? game.a : game.h;
      const partner = usPlayers[0] === player.name ? usPlayers[1] : usPlayers[0];
      projectedGames.push({
        wk: match.week,
        opp: playerOnHomeSide ? match.away : match.home,
        t: game.t,
        with: partner || '',
        vs: [themPlayers[0] || '', themPlayers[1] || ''],
        expectedMargin: computeExpectedOutcome(usPlayers[0], usPlayers[1], themPlayers[0], themPlayers[1]),
      });
    }
  }
  projectedGames.sort((a, b) => a.wk - b.wk);
  return projectedGames;
}

function renderGameLogRows(player, projectedGames = []) {
  let gameLog = '';
  let lastWeek = null;

  for (const game of player.games || []) {
    if (game.wk !== lastWeek) {
      lastWeek = game.wk;
      const subNote = game.sub && game.subFor
        ? ` <span class="mut">(sub for ${escapeHtml(game.subFor)})</span>`
        : '';
      gameLog += `
        <tr class="wkrow"><td colspan="6" class="l">Week ${game.wk} • vs ${escapeHtml(game.opp)}${subNote}</td></tr>
      `;
    }

    const [label, className] = GAME_TYPE_LABELS[game.t] || ['', ''];
    const resultClass = getWinLossClass(game.w);
    const forfeitTag = game.ff ? ' <span class="ff-tag">F</span>' : '';
    const partnerCell = game.ff
      ? '<span class="ff-tag" title="Forfeit / walkover — not counted in the rating">forfeit</span>'
      : escapeHtml(game.with);
    const opponentCell = game.ff ? '' : `${escapeHtml(game.vs[0])} / ${escapeHtml(game.vs[1])}`;
    const expectedMargin = game.ff
      ? null
      : computeExpectedOutcome(player.name, game.with, game.vs[0], game.vs[1]);
    const expectTag = renderExpectationTag(expectedMargin, game.w === 1);
    const projection = describeProjectedOutcome(expectedMargin);
    gameLog += `
      <tr${game.ff ? ' class="ffrow"' : (game.sub ? ' class="subrow"' : '')}>
        <td class="l"><span class="pill ${className}">${label}</span></td>
        <td class="l">${partnerCell}</td>
        <td class="l">${opponentCell}</td>
        <td class="${resultClass}">${game.f}–${game.a}</td>
        <td class="${resultClass} l">${game.w ? 'W' : 'L'}${forfeitTag}${expectTag}</td>
        <td class="${projection.resultClass}">${projection.displayLabel}</td>
      </tr>
    `;
  }

  for (const game of projectedGames) {
    if (game.wk !== lastWeek) {
      lastWeek = game.wk;
      gameLog += `
        <tr class="wkrow wkrow-projected">
          <td colspan="6" class="l"><span class="mut">(projected)</span> Week ${game.wk} • vs ${escapeHtml(game.opp)}</td>
        </tr>
      `;
    }

    const [label, className] = GAME_TYPE_LABELS[game.t] || ['', ''];
    const projection = describeProjectedOutcome(game.expectedMargin);
    gameLog += `
      <tr>
        <td class="l"><span class="pill ${className}">${label}</span></td>
        <td class="l">${escapeHtml(game.with)}</td>
        <td class="l">${escapeHtml(game.vs[0])} / ${escapeHtml(game.vs[1])}</td>
        <td class="mut">${EMPTY_VALUE}</td>
        <td class="mut">Pending</td>
        <td class="${projection.resultClass}">${projection.displayLabel}</td>
      </tr>
    `;
  }

  return gameLog;
}

function renderModalBody(player) {
  const projectedGames = getProjectedPlayerGames(player);
  const matchRows = renderMatchLogRows(player);
  const gameRows = renderGameLogRows(player, projectedGames);
  const gameCount = (player.games || []).length;
  const projectedCount = projectedGames.length;
  const ratingHistorySection = renderRatingHistorySection(player);

  let expectedWins = 0, expectedLosses = 0, upsetWins = 0, upsetLosses = 0;
  for (const game of player.games || []) {
    if (game.ff) continue;
    const em = computeExpectedOutcome(player.name, game.with, game.vs[0], game.vs[1]);
    if (em === null || Math.abs(em) < 1.0) continue;
    if (em < 0 && game.w === 1) {
      upsetWins++;
    } else if (em > 0 && game.w === 0) {
      upsetLosses++;
    } else if (game.w === 1) {
      expectedWins++;
    } else {
      expectedLosses++;
    }
  }
  const upsetLine = renderUpsetSummary(expectedWins, expectedLosses, upsetWins, upsetLosses);

  return `
    ${ratingHistorySection}
    <table class="mlog">
      <thead>
        <tr>
          <th class="l">Week</th>
          <th class="l">Opponent</th>
          <th>Ind. W–L</th>
          <th>Pts F–A</th>
          <th>Mixed</th>
          <th>Same-gen</th>
          <th>Clutch</th>
          <th>Team result</th>
        </tr>
      </thead>
      <tbody>${matchRows}</tbody>
    </table>
    <div class="gtitle">Game-by-game log <span>${gameCount} games${projectedCount ? ` + ${projectedCount} projected` : ''}${upsetLine}</span></div>
    <table class="mlog glog">
      <thead>
        <tr>
          <th class="l">Type</th>
          <th class="l">Partner</th>
          <th class="l">Opponents</th>
          <th>Score</th>
          <th class="l">Result</th>
          <th>Projection</th>
        </tr>
      </thead>
      <tbody>${gameRows}</tbody>
    </table>
    <p class="mnote">The rating chart is cumulative through each week, so each point shows what the model would have said at that moment in the season; rank is the player&#39;s place among rated players in this division for that snapshot. Top table = per-week match summary (league-recorded splits). Bottom = every individual game with partner, opponents and the actual final score, plus pending lineup projections when posted. Type: <b>MIX</b> mixed • <b>W</b> women&#39;s • <b>M</b> men&#39;s. An <b>F</b> tag marks a forfeit/walkover (1–0) — it counts in the win/loss record but is excluded from the Rating. <b>sub</b> rows are intra-league sub appearances for another team and are not counted in the match total. Projection is rating-based and uses expected pair-rating margin (pts/game): <b>Proj W/L</b> = clear favorite/underdog (&gt;2.5 pt margin); <b>Slight W/L</b> = mild edge (1.0–2.5 pt margin); <b>Even</b> = too close to call (&lt;1.0 pt margin). For completed games the Result column shows: <b>exp</b> = result met expectations when there is a rating-based favorite; <b>↑</b> = upset win (overcame a pair-rating deficit of ≥1.0 pt); <b>↓</b> = upset loss (pair had a rating advantage of ≥1.0 pt). Tags appear only when all four players have a rating and the matchup is not rated Even.</p>
  `;
}

function showModal() {
  elements.overlay.hidden = false;
}

function hideModal() {
  elements.overlay.hidden = true;
}

function showPlayerModal(name) {
  const player = DATA.players.find((candidate) => candidate.name === name);

  if (!player) {
    return;
  }

  elements.modalHead.innerHTML = renderModalHeader(player);
  elements.modalBody.innerHTML = renderModalBody(player);
  showModal();
}

function openPlayer(name) {
  hashSetByApp = true;
  window.location.hash = `#player/${slugify(name)}`;
}

function closeModal() {
  if ((window.location.hash || '').startsWith('#player/')) {
    if (hashSetByApp) {
      history.back();
    } else {
      window.location.hash = '';
    }
  } else {
    hideModal();
  }
}

function handleColumnSort(event) {
  const headerCell = event.target.closest('th');

  if (!headerCell) {
    return;
  }

  const nextSortKey = headerCell.dataset.k;

  if (!nextSortKey) {
    return;
  }

  if (nextSortKey === sortKey) {
    sortDirection *= -1;
  } else {
    sortKey = nextSortKey;
    sortDirection = nextSortKey === 'leagueRank' ? 1 : -1;
  }

  render();
}

function handlePlayerClick(event) {
  const nameElement = event.target.closest('.pname');

  if (nameElement?.dataset.name) {
    openPlayer(nameElement.dataset.name);
  }
}

function handleOverlayClick(event) {
  if (event.target === elements.overlay) {
    closeModal();
  }
}

function handleEscapeKey(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

function getFilteredDuos() {
  const query = elements.search.value.trim().toLowerCase();
  const teamFilter = elements.team.value;

  return (DATA.duos || []).filter(
    (duo) =>
      (!teamFilter || duo.team === teamFilter) &&
      (!query ||
        duo.a.toLowerCase().includes(query) ||
        duo.b.toLowerCase().includes(query)),
  );
}

function renderDuos() {
  const duos = getFilteredDuos();
  const rows = duos
    .map((duo, index) => {
      const synergyClass = duo.synergy >= 0 ? 'pos-diff' : 'neg-diff';
      const rankClass = index < 3 ? ` g${index + 1}` : '';
      return `
        <tr class="duorow" data-name="${escapeHtml(duo.a)}">
          <td class="l"><span class="pos${rankClass}">${index + 1}</span></td>
          <td class="l">${escapeHtml(duo.a)} <span class="amp">&amp;</span> ${escapeHtml(duo.b)}</td>
          <td class="l"><span class="teamdot" style="background:${getTeamColor(duo.team)}"></span>${escapeHtml(duo.team ?? '')}</td>
          <td>${duo.n}</td>
          <td><b>${duo.w}</b>–${duo.l}</td>
          <td><span class="rating ${synergyClass}">${formatSignedValue(duo.synergy, 1)}</span></td>
          <td>${formatSignedValue(duo.avgActual, 1)}</td>
          <td class="mut">${formatSignedValue(duo.avgExpected, 1)}</td>
        </tr>
      `;
    })
    .join('');

  const emptyMessage =
    elements.team.value || elements.search.value.trim()
      ? 'No duos with 3+ games together match the current filter.'
      : 'Not enough shared games yet — duos appear once a pair has played 3+ games together.';

  elements.duoBody.innerHTML =
    rows || `<tr><td colspan="8" class="l mut" style="padding:16px">${emptyMessage}</td></tr>`;
}

function formatMatchDate(iso) {
  if (!iso) {
    return '';
  }

  const date = new Date(iso);

  if (Number.isNaN(date.getTime())) {
    return iso;
  }

  const day = date.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
  const time = date.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });
  return `${day} · ${time}`;
}

// Compact date (e.g. "Jul 15") for the grid's next-matchup markers.
function formatShortDate(iso) {
  if (!iso) {
    return '';
  }

  const date = new Date(iso);

  if (Number.isNaN(date.getTime())) {
    return '';
  }

  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

function renderTeamMatchBlock(match, teamName) {
  const homeSide = match.home === teamName;
  const usPoints = homeSide ? match.homePoints : match.awayPoints;
  const themPoints = homeSide ? match.awayPoints : match.homePoints;
  const usGames = homeSide ? match.homeGW : match.awayGW;
  const themGames = homeSide ? match.awayGW : match.homeGW;
  const opponent = homeSide ? match.away : match.home;
  const won = homeSide === (match.result === 'home');

  let expectedWins = 0, expectedLosses = 0, upsetWins = 0, upsetLosses = 0;
  const matchSubs = new Set(match.subs || []);
  const formatSubAwarePlayers = (names) => names
    .map((n) => n + (matchSubs.has(n) ? ' <span class="sub-tag" title="Intra-league sub">sub</span>' : ''))
    .join(' &amp; ');
  const gameRows = (match.games || [])
    .map((game) => {
      const usPlayers = homeSide ? game.h : game.a;
      const themPlayers = homeSide ? game.a : game.h;
      const usScore = homeSide ? game.hs : game.as;
      const themScore = homeSide ? game.as : game.hs;
      const win = usScore > themScore;
      const [label, className] = GAME_TYPE_LABELS[game.t] || ['', ''];
      const resultClass = getWinLossClass(win);
      const expectedMargin = game.ff
        ? null
        : computeExpectedOutcome(usPlayers[0], usPlayers[1], themPlayers[0], themPlayers[1]);
      const projection = describeProjectedOutcome(expectedMargin);
      if (expectedMargin !== null && Math.abs(expectedMargin) >= 1.0) {
        if (expectedMargin < 0 && win) {
          upsetWins++;
        } else if (expectedMargin > 0 && !win) {
          upsetLosses++;
        } else if (win) {
          expectedWins++;
        } else {
          expectedLosses++;
        }
      }
      const expectTag = renderExpectationTag(expectedMargin, win);
      return `
        <tr${game.ff ? ' class="ffrow"' : ''}>
          <td class="l"><span class="pill ${className}">${label}</span></td>
          <td class="l">${game.ff ? '<span class="ff-tag">forfeit</span>' : formatSubAwarePlayers(usPlayers)}</td>
          <td class="l">${game.ff ? '' : escapeHtml(themPlayers.join(' / '))}</td>
          <td class="${resultClass}">${usScore}–${themScore}</td>
          <td class="${resultClass} l">${win ? 'W' : 'L'}${game.ff ? ' <span class="ff-tag">F</span>' : ''}${expectTag}</td>
          <td class="${projection.resultClass}">${projection.displayLabel}</td>
        </tr>
      `;
    })
    .join('');

  const upsetLine = renderUpsetSummary(expectedWins, expectedLosses, upsetWins, upsetLosses);

  return `
    <div class="wk-block">
      <div class="wk-head">
        <span>Week ${match.week} • ${homeSide ? 'vs' : '@'} ${escapeHtml(opponent)}</span>
        <span class="${getWinLossClass(won)}">${won ? 'WON' : 'LOST'} ${usGames}–${themGames}</span>
      </div>
      <div class="match-summary">Match points <b>${usPoints}–${themPoints}</b> • Games <b>${usGames}–${themGames}</b>${upsetLine}</div>
      <details>
        <summary>Game-by-game (${(match.games || []).length})</summary>
        <table class="mlog glog">
          <thead><tr><th class="l">Type</th><th class="l">Our pair</th><th class="l">Opponents</th><th>Score</th><th class="l">Result</th><th>Projection</th></tr></thead>
          <tbody>${gameRows}</tbody>
        </table>
      </details>
    </div>
  `;
}

function renderPendingTeamMatchBlock(match, teamName) {
  const homeSide = match.home === teamName;
  const opponent = homeSide ? match.away : match.home;
  const scheduledTime = formatMatchDate(match.time);
  const gameCount = (match.games || []).length;

  if (!gameCount) {
    return `
      <div class="wk-block pending-match">
        <div class="wk-head">
          <span>Week ${match.week} • ${homeSide ? 'vs' : '@'} ${escapeHtml(opponent)}</span>
          <span class="mut">${scheduledTime || 'TBD'}</span>
        </div>
        <div class="match-summary">Lineups have not been posted yet.</div>
      </div>
    `;
  }

  let projectedWins = 0, projectedLosses = 0, projectedTies = 0, unrated = 0;
  const gameRows = (match.games || []).map((game) => {
    const usPlayers = homeSide ? game.h : game.a;
    const themPlayers = homeSide ? game.a : game.h;
    const expectedMargin = computeExpectedOutcome(usPlayers[0], usPlayers[1], themPlayers[0], themPlayers[1]);
    const projection = describeProjectedOutcome(expectedMargin);
    const resultClass = projection.outcome === 'unrated' ? '' : projection.resultClass;
    if (projection.outcome === 'win') projectedWins++;
    if (projection.outcome === 'loss') projectedLosses++;
    if (projection.outcome === 'tie') projectedTies++;
    if (projection.outcome === 'unrated') unrated++;

    const [label, className] = GAME_TYPE_LABELS[game.t] || ['', ''];
    return `
      <tr>
        <td class="l"><span class="pill ${className}">${label}</span></td>
        <td class="l">${escapeHtml(usPlayers.join(' / '))}</td>
        <td class="l">${escapeHtml(themPlayers.join(' / '))}</td>
        <td class="${resultClass}">${projection.marginLabel}</td>
        <td class="${resultClass}">${projection.resultLabel}</td>
      </tr>
    `;
  }).join('');

  const projectedSummary = `Projected games <b>${projectedWins}–${projectedLosses}${projectedTies ? `–${projectedTies}` : ''}</b>`;
  const unratedSummary = unrated ? ` • ${unrated} ${pluralize(unrated, 'lineup', 'lineups')} missing ratings` : '';

  return `
    <div class="wk-block pending-match">
      <div class="wk-head">
        <span>Week ${match.week} • ${homeSide ? 'vs' : '@'} ${escapeHtml(opponent)}</span>
        <span class="mut">${scheduledTime || 'TBD'}</span>
      </div>
      <div class="match-summary">${projectedSummary}${unratedSummary}</div>
      <details>
        <summary>Projected game-by-game (${gameCount})</summary>
        <table class="mlog glog">
          <thead><tr><th class="l">Type</th><th class="l">Our pair</th><th class="l">Opponents</th><th>Exp margin</th><th>Projection</th></tr></thead>
          <tbody>${gameRows}</tbody>
        </table>
      </details>
    </div>
  `;
}

function renderTeamPage(team) {
  const color = getTeamColor(team.name);
  const podCount = DATA.meta && DATA.meta.podCount > 1 ? DATA.meta.podCount : 1;
  const rankTeams = podCount > 1 ? DATA.teams.filter((t) => t.pod === team.pod) : DATA.teams;
  const rank = rankTeams.findIndex((candidate) => candidate.name === team.name) + 1;
  const rankLabel = podCount > 1 ? `#${rank} in Pod ${team.pod}` : `#${rank} in standings`;
  const roster = DATA.players
    .filter((player) => player.team === team.name)
    .sort((a, b) => (b.rating ?? -99) - (a.rating ?? -99));
  const duos = DATA.duos.filter((duo) => duo.team === team.name);
  const history = DATA.matches
    .filter((match) => match.complete && (match.home === team.name || match.away === team.name))
    .sort((a, b) => a.week - b.week);
  const upcoming = DATA.matches
    .filter((match) => !match.complete && (match.home === team.name || match.away === team.name))
    .sort((a, b) => a.week - b.week);
  const powerClass = isMissing(team.power) ? '' : (team.power >= 0 ? 'pos-diff' : 'neg-diff');

  const rosterRows = roster
    .map((player) => `
      <tr>
        <td class="l">${renderCell(player, 'name')}</td>
        <td>${renderCell(player, 'rating')}</td>
        <td>${renderCell(player, 'conf')}</td>
        <td>${renderCell(player, 'soo')}</td>
        <td>${renderCell(player, 'sop')}</td>
        <td>${renderCell(player, 'wl')}</td>
        <td>${player.winPct.toFixed(0)}%</td>
        <td>${player.gamesPlayed}</td>
      </tr>
    `)
    .join('');

  const formatCard = (label, record) => {
    const [wins, losses] = record;
    return `<div class="fmt-card"><div class="l">${label}</div><div class="v">${formatRecordWithPct(wins, losses)}</div><div class="p">${formatWinPct(wins, losses)}% game wins</div></div>`;
  };

  const duosMarkup = duos.length
    ? `<div class="duolist">${duos
        .map((duo) => `
          <div class="d">
            <span><b>${escapeHtml(duo.a)}</b> &amp; <b>${escapeHtml(duo.b)}</b> <span class="mut">(${duo.w}–${duo.l}, ${duo.n}g)</span></span>
            <span class="${duo.synergy >= 0 ? 'pos-diff' : 'neg-diff'}">${formatSignedValue(duo.synergy, 1)}</span>
          </div>
        `)
        .join('')}</div>`
    : '<div class="mut" style="font-size:13px">No duos with 3+ games together yet.</div>';

  const upcomingMarkup = upcoming.length
    ? upcoming.map((match) => renderPendingTeamMatchBlock(match, team.name)).join('')
    : '<div class="mut" style="font-size:13px;padding:4px 0">No upcoming matches scheduled.</div>';

  const historyMarkup = history.length
    ? history.map((match) => renderTeamMatchBlock(match, team.name)).join('')
    : '<div class="mut" style="font-size:13px">No completed matches yet.</div>';

  elements.teamView.innerHTML = `
    <a class="backlink" href="#">← All standings</a>
    <div class="team-hero" style="border-top:3px solid ${color};padding-top:12px">
      <h2><span class="teamdot" style="background:${color};width:12px;height:12px"></span> ${escapeHtml(team.name)}</h2>
      <div class="team-meta">
        <span><b>${rankLabel}</b></span>
        <span>Record <b>${team.w}–${team.l}</b></span>
        <span>Games <b>${formatRecordWithPct(team.gw, team.gl)}</b></span>
        <span>PF <b>${team.pf}</b> · PA <b>${team.pa}</b> · <b class="${team.diff >= 0 ? 'pos-diff' : 'neg-diff'}">${formatSignedValue(team.diff)}</b></span>
        <span>Power <b class="${powerClass}">${isMissing(team.power) ? EMPTY_VALUE : formatSignedValue(team.power)}</b> <span class="mut">(#${team.powerRank} of ${rankTeams.length})</span></span>
      </div>
    </div>
    <div class="team-section">
      <h3>Game-type splits <span class="tag">team game record by format</span></h3>
      <div class="fmt-cards">${formatCard('Mixed', team.fmt.mixed)}${formatCard("Men's", team.fmt.male)}${formatCard("Women's", team.fmt.female)}</div>
    </div>
    <div class="team-section">
      <h3>Roster <span class="tag">${roster.length} players • click a name for detail</span></h3>
      <div class="panel scroll"><table><thead><tr>
        <th class="l">Player</th><th>Rating</th><th>Conf</th><th>Opp Str</th><th>Partner Str</th><th>W–L</th><th>Win%</th><th>GP</th>
      </tr></thead><tbody>${rosterRows}</tbody></table></div>
    </div>
    <div class="team-section">
      <h3>Best duos <span class="tag">chemistry on this roster (3+ games)</span></h3>
      ${duosMarkup}
    </div>
    <div class="team-section">
      <h3>Match history <span class="tag">by week</span></h3>
      ${historyMarkup}
    </div>
    <div class="team-section">
      <h3>Pending matchups <span class="tag">scheduled + projected game lines when available</span></h3>
      ${upcomingMarkup}
    </div>
  `;
  elements.mainView.hidden = true;
  elements.teamView.hidden = false;
  elements.subhead.textContent = `${team.name} — team page`;
  window.scrollTo(0, 0);
}

function showMainView() {
  elements.teamView.hidden = true;
  elements.mainView.hidden = false;
  renderSummary();
  window.scrollTo(0, 0);
}

function handleRoute() {
  const hash = window.location.hash || '';
  const teamMatch = hash.match(/^#team\/(.+)$/);
  const playerMatch = hash.match(/^#player\/(.+)$/);

  hideModal();

  if (teamMatch) {
    const slug = decodeURIComponent(teamMatch[1]);
    const team = DATA.teams.find((candidate) => slugify(candidate.name) === slug);

    if (team) {
      renderTeamPage(team);
      return;
    }
  }

  if (playerMatch) {
    const slug = decodeURIComponent(playerMatch[1]);
    const player = DATA.players.find((candidate) => slugify(candidate.name) === slug);

    if (player) {
      showPlayerModal(player.name);
      return;
    }
  }

  showMainView();
}

function handleTeamCardClick(event) {
  const card = event.target.closest('.tcard');

  if (card?.dataset.team) {
    window.location.hash = `#team/${card.dataset.team}`;
  }
}

function handleDuoClick(event) {
  const row = event.target.closest('.duorow');

  if (row?.dataset.name) {
    openPlayer(row.dataset.name);
  }
}

function handlePartnerChipClick(event) {
  const chip = event.target.closest('.pchip');

  if (chip?.dataset.name) {
    openPlayer(chip.dataset.name);
  }
}

function renderResultsGrid() {
  const allTeams = DATA.teams.map((team) => team.name);
  const abbr = (name) => TEAM_ABBR[name] || name;
  const results = {};
  allTeams.forEach((row) => { results[row] = {}; allTeams.forEach((col) => { results[row][col] = []; }); });
  (DATA.matches || []).filter((match) => match.complete).forEach((match) => {
    const homeWon = match.result === 'home';
    results[match.home][match.away].push({ gf: match.homeGW, ga: match.awayGW, win: homeWon, pd: match.homePoints - match.awayPoints, week: match.week });
    results[match.away][match.home].push({ gf: match.awayGW, ga: match.homeGW, win: !homeWon, pd: match.awayPoints - match.homePoints, week: match.week });
  });

  // All pairs that appear anywhere in the schedule (played or upcoming).
  const scheduledPairs = new Set();
  (DATA.matches || []).forEach((match) => {
    scheduledPairs.add(`${match.home}||${match.away}`);
    scheduledPairs.add(`${match.away}||${match.home}`);
  });

  // Each team's next scheduled opponent, marked in that team's row.
  const upcoming = {};
  (DATA.matches || []).filter((match) => !match.complete).forEach((match) => {
    [[match.home, match.away], [match.away, match.home]].forEach(([team, opponent]) => {
      if (!upcoming[team] || match.week < upcoming[team].week) {
        upcoming[team] = { opponent, week: match.week, time: match.time };
      }
    });
  });

  const entryHtml = (entry) => `
    <div class="entry ${entry.win ? 'win' : 'loss'}">
      <div class="wk">Wk ${entry.week}</div>
      <div class="res">${entry.win ? 'W' : 'L'}</div>
      <div class="sc">${entry.gf}–${entry.ga}<span class="gword"> games</span></div>
      <div class="pd ${entry.pd >= 0 ? 'pos-diff' : 'neg-diff'}">${formatSignedValue(entry.pd)}</div>
    </div>`;

  const nextHtml = (info) => `
    <div class="entry next">
      <div class="wk">Wk ${info.week}</div>
      <div class="res">NEXT</div>
      <div class="sc">${escapeHtml(formatShortDate(info.time))}</div>
    </div>`;

  const renderGridForTeams = (teams) => {
    const headRow = `<tr><th></th>${teams
      .map((col) => `<th class="col"><span class="gdot" style="background:${getTeamColor(col)}"></span>${escapeHtml(abbr(col))}</th>`)
      .join('')}</tr>`;

    const bodyRows = teams
      .map((row) => {
        const cells = teams
          .map((col) => {
            if (row === col) {
              return '<td class="self"></td>';
            }
            const list = results[row][col].sort((a, b) => a.week - b.week);
            const next = upcoming[row] && upcoming[row].opponent === col ? upcoming[row] : null;
            if (list.length === 0 && !next) {
              return scheduledPairs.has(`${row}||${col}`) ? '<td class="empty">—</td>' : '<td class="non-opp"></td>';
            }
            const total = list.length + (next ? 1 : 0);
            let className;
            if (list.length === 0) {
              className = 'upcoming';
            } else {
              const wins = list.filter((e) => e.win).length;
              const losses = list.length - wins;
              if (wins > losses) {
                className = 'win';
              } else if (losses > wins) {
                className = 'loss';
              } else {
                className = 'split';
              }
            }
            if (total > 1) {
              className += '-multi';
            }
            const inner = list.map(entryHtml).join('') + (next ? nextHtml(next) : '');
            return `<td class="played ${className}" data-team="${slugify(row)}">${inner}</td>`;
          })
          .join('');
        return `<tr><th class="row"><span class="gdot" style="background:${getTeamColor(row)}"></span><span class="full">${escapeHtml(row)}</span><span class="abbr">${escapeHtml(abbr(row))}</span></th>${cells}</tr>`;
      })
      .join('');

    return `<table>${headRow}${bodyRows}</table>`;
  };

  const cap = `<div class="grid-cap">Read across a row: how that team fared against each opponent — <b>week</b>, <b>game wins–losses</b>, and <b>net point differential</b>. Green = won the match, red = lost; each entry is colored individually when teams split their two meetings. Matches are decided by games won, so a team can win the match yet be negative on points. A grey <b>NEXT</b> box marks that team's next scheduled matchup. Blank = not yet played; hatched = not scheduled to meet. Cells stack both meetings once teams play home and away.</div>`;

  const podCount = DATA.meta && DATA.meta.podCount > 1 ? DATA.meta.podCount : 1;
  if (podCount <= 1) {
    elements.gridHost.innerHTML = `${renderGridForTeams(allTeams)}${cap}`;
    return;
  }

  const sections = [];
  for (let p = 1; p <= podCount; p++) {
    const podTeams = DATA.teams.filter((t) => t.pod === p).map((t) => t.name);
    sections.push(`<div class="grid-pod-section"><h3 class="pod-heading">Pod ${p}</h3>${renderGridForTeams(podTeams)}</div>`);
  }
  elements.gridHost.innerHTML = `${sections.join('')}${cap}`;
}

function computeSwarmLayout(players, geometry) {
  const { xScale, cy, top, bottom, radius } = geometry;
  const minDist = 2 * radius + 1; // required center-to-center distance between dots
  const nodes = players
    .slice()
    .sort((a, b) => a.rating - b.rating)
    .map((player) => ({ player, x: xScale(player.rating), y: cy }));
  const placed = [];
  const overlaps = (x, y) => placed.some((other) => {
    const dx = other.x - x;
    const dy = other.y - y;
    return dx * dx + dy * dy < minDist * minDist;
  });
  nodes.forEach((node) => {
    // Scan outward from the centre line in 1px steps for the closest free slot.
    let best = cy;
    for (let offset = 0; offset <= (bottom - top) / 2; offset += 1) {
      const candidates = offset === 0 ? [cy] : [cy - offset, cy + offset];
      const slot = candidates.find((y) => y >= top + radius && y <= bottom - radius && !overlaps(node.x, y));
      if (slot !== undefined) {
        best = slot;
        break;
      }
    }
    node.y = best;
    placed.push(node);
  });
  return placed;
}

function renderBeeswarm() {
  const players = DATA.players.filter((player) => player.rating != null);
  const W = 720, H = 250, left = 34, right = 34, top = 14, bottom = 40;
  const cy = (top + (H - bottom)) / 2;
  const domainMin = -5, domainMax = 5;
  const xScale = (value) => left + ((value - domainMin) / (domainMax - domainMin)) * (W - left - right);
  const radius = 5.4;
  const placed = computeSwarmLayout(players, { xScale, cy, top, bottom: H - bottom, radius });

  let gridlines = '';
  for (let tick = -4; tick <= 4; tick += 1) {
    const x = xScale(tick);
    const zero = tick === 0;
    gridlines += `<line x1="${x}" y1="${top}" x2="${x}" y2="${H - bottom}" stroke="var(--line)" stroke-width="${zero ? 1.4 : 1}"${zero ? '' : ' stroke-dasharray="2 4"'} opacity="${zero ? 0.9 : 0.5}"/>`;
    gridlines += `<text x="${x}" y="${H - bottom + 18}" text-anchor="middle" font-size="11" fill="var(--mut)">${tick > 0 ? '+' : ''}${tick}</text>`;
  }
  const avgLabel = `<text x="${xScale(0)}" y="${H - bottom + 33}" text-anchor="middle" font-size="10.5" fill="var(--mut)">league average</text>`;
  const axisLabel = `<text x="${W - right}" y="${top - 3}" text-anchor="end" font-size="10.5" fill="var(--mut)">Rating (net points / game)</text>`;

  const dots = placed
    .map((node) => {
      const { player } = node;
      const opacity = (0.5 + 0.5 * (player.confidence / 100)).toFixed(2);
      return `<circle class="swarm-dot" data-name="${escapeHtml(player.name)}" cx="${node.x.toFixed(1)}" cy="${node.y.toFixed(1)}" r="${radius}" fill="${getTeamColor(player.team)}" stroke="rgb(0 0 0 / 25%)" stroke-width="0.5" opacity="${opacity}"/>`;
    })
    .join('');

  const legend = DATA.teams
    .map((team) => `<span><i style="background:${getTeamColor(team.name)}"></i>${escapeHtml(team.name)}</span>`)
    .join('');

  elements.swarmHost.innerHTML = `
    <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Distribution of player ratings, one dot per player, colored by team">
      ${gridlines}${avgLabel}${axisLabel}${dots}
    </svg>
    <div class="swarm-legend">${legend}</div>
    <div class="swarm-tip" id="swarm-tip"></div>`;
}

function handleGridClick(event) {
  const cell = event.target.closest('td.played');
  if (cell?.dataset.team) {
    window.location.hash = `#team/${cell.dataset.team}`;
  }
}

function handleSwarmClick(event) {
  const dot = event.target.closest('.swarm-dot');
  if (dot?.dataset.name) {
    openPlayer(dot.dataset.name);
  }
}

function handleSwarmOver(event) {
  const dot = event.target.closest('.swarm-dot');
  const tip = document.getElementById('swarm-tip');
  if (!dot || !tip) {
    return;
  }
  const player = DATA.players.find((candidate) => candidate.name === dot.dataset.name);
  if (!player) {
    return;
  }
  const ratingColor = player.rating >= 0 ? 'var(--win)' : 'var(--loss)';
  tip.innerHTML =
    `<b>${escapeHtml(player.name)}</b><br>` +
    `<span style="color:${ratingColor};font-weight:700">${formatSignedValue(player.rating, 1)}</span> pts/game · ${player.confidence}% conf<br>` +
    `<span style="color:var(--mut)">${escapeHtml(player.team)}</span>`;
  const host = elements.swarmHost.getBoundingClientRect();
  const rect = dot.getBoundingClientRect();
  tip.style.left = `${rect.left - host.left + rect.width / 2}px`;
  tip.style.top = `${rect.top - host.top - tip.offsetHeight - 8}px`;
  tip.style.opacity = '1';
}

function handleSwarmOut(event) {
  if (event.target.closest('.swarm-dot')) {
    const tip = document.getElementById('swarm-tip');
    if (tip) {
      tip.style.opacity = '0';
    }
  }
}

function initialize() {
  renderHeader();
  renderDivisionSelector();
  renderSummary();
  renderTeams();
  renderResultsGrid();
  renderTeamFilterOptions();
  renderPodFilterOptions();
  renderTableHead();
  renderDuos();
  renderBeeswarm();

  elements.head.addEventListener('click', handleColumnSort);
  document.addEventListener('click', handlePlayerClick);
  elements.teams.addEventListener('click', handleTeamCardClick);
  elements.gridHost.addEventListener('click', handleGridClick);
  elements.duoBody.addEventListener('click', handleDuoClick);
  elements.swarmHost.addEventListener('click', handleSwarmClick);
  elements.swarmHost.addEventListener('mouseover', handleSwarmOver);
  elements.swarmHost.addEventListener('mouseout', handleSwarmOut);
  elements.modalHead.addEventListener('click', handlePartnerChipClick);
  elements.modalClose.addEventListener('click', closeModal);
  elements.overlay.addEventListener('click', handleOverlayClick);
  document.addEventListener('keydown', handleEscapeKey);
  window.addEventListener('hashchange', handleRoute);

  // The Team filter and search box also drive the Top Duos table; gender and
  // min-games apply to the player table only (they don't affect pairs).
  getRequiredElement('team').addEventListener('input', renderDuos);
  getRequiredElement('search').addEventListener('input', renderDuos);
  ['search', 'team', 'pod', 'gender', 'minq'].forEach((id) => {
    getRequiredElement(id).addEventListener('input', render);
  });

  render();
  handleRoute();
}

initialize();
