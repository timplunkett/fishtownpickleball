'use strict';

const TEAM_COLORS = Object.freeze({
  'Picholas Cage': '#e8c66b',
  'License to Dill': '#7fd6ee',
  'Balls of Fury': '#e5534b',
  Baggers: '#1db2dc',
  'Kitchen Nightmares': '#19d39a',
});
const HIGHLIGHTED_PLAYER = '';
const EMPTY_VALUE = '—';
const DEFAULT_SORT = Object.freeze({ key: 'rating', direction: -1 });
const COLUMNS = Object.freeze([
  { key: 'name', label: 'Player', align: 'left' },
  { key: 'team', label: 'Team', align: 'left' },
  { key: 'rating', label: 'Rating', align: 'right' },
  { key: 'conf', label: 'Conf', align: 'right' },
  { key: 'soo', label: 'Opp Str', align: 'right' },
  { key: 'sop', label: 'Partner Str', align: 'right' },
  { key: 'leagueRank', label: 'Lg Rank', align: 'right' },
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
  loss: 'res-L',
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
  duoBody: getRequiredElement('duobody'),
  footer: getRequiredElement('foot'),
  gender: getRequiredElement('gender'),
  gridHost: getRequiredElement('grid-host'),
  head: getRequiredElement('head'),
  mainView: getRequiredElement('mainview'),
  minGames: getRequiredElement('minq'),
  modalBody: getRequiredElement('mbody'),
  modalClose: getRequiredElement('mx'),
  modalHead: getRequiredElement('mhead'),
  overlay: getRequiredElement('overlay'),
  playerCount: getRequiredElement('plabel'),
  search: getRequiredElement('search'),
  subhead: getRequiredElement('sub'),
  swarmHost: getRequiredElement('swarm-host'),
  team: getRequiredElement('team'),
  teams: getRequiredElement('teams'),
  teamView: getRequiredElement('teamview'),
};

const TEAM_ABBR = Object.freeze({
  'Balls of Fury': 'Fury',
  Baggers: 'Baggers',
  'License to Dill': 'Dill',
  'Picholas Cage': 'Cage',
  'Kitchen Nightmares': 'KN',
});

// Build a name → rating lookup from DATA (data.js loads before app.js).
const playerRatingByName = Object.fromEntries(
  DATA.players
    .filter((p) => p.rating != null)
    .map((p) => [p.name, p.rating]),
);

let sortKey = DEFAULT_SORT.key;
let sortDirection = DEFAULT_SORT.direction;

function getRequiredElement(id) {
  const element = document.getElementById(id);

  if (!element) {
    throw new Error(`Missing required element: #${id}`);
  }

  return element;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => HTML_ESCAPE_MAP[character]);
}

function isMissing(value) {
  return value === null || value === undefined;
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

function renderSummary() {
  elements.subhead.textContent =
    `${DATA.meta.matchesPlayed} matches played (Weeks ${DATA.meta.weeks}) • ` +
    `${DATA.meta.totalPlayers} players • as of ${DATA.meta.asOf}`;
  elements.footer.textContent =
    `Live from the Bounce league API • division 3e9b6a58 • Weeks ${DATA.meta.weeks}, ` +
    `${DATA.meta.matchesPlayed} completed matches. "PF/PA" are the league's recorded ` +
    `points for/against; +/- is their difference. Win% = game wins ÷ games played. ` +
    `Rating is a ridge-regularized adjusted plus-minus: each player's net points per ` +
    `game above an average player, controlling for partner and opponent strength. The ` +
    `"Conf" column shows how much of each rating is backed by real game evidence ` +
    `(0–100%) — early-season ratings are low-confidence and will shift as more ` +
    `games are played.`;
}

function renderTeams() {
  elements.teams.innerHTML = DATA.teams
    .map((team, index) => `
      <div class="tcard" data-team="${slugify(team.name)}" style="border-top:3px solid ${getTeamColor(team.name)}">
        <div class="seed">#${index + 1}</div>
        <h3>${escapeHtml(team.name)}</h3>
        <div class="rec">${team.w}–${team.l} <small>match${pluralize(team.w + team.l, '', 'es')}</small></div>
        <div class="pts">Games <b class="txt-strong">${team.gw}–${team.gl}</b></div>
        <div class="pts">PF ${team.pf} • PA ${team.pa} • <span class="d">${formatDiffSpan(team.diff)}</span></div>
        <div class="go">View team →</div>
      </div>
    `)
    .join('');
}

function renderTeamFilterOptions() {
  elements.team.innerHTML = [
    '<option value="">All teams</option>',
    ...DATA.teams.map(
      (team) => `<option value="${escapeHtml(team.name)}">${escapeHtml(team.name)}</option>`,
    ),
  ].join('');
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
  const genderFilter = elements.gender.value;
  const matchFilter = Number(elements.minGames.value);

  return DATA.players.filter(
    (player) =>
      (!query || player.name.toLowerCase().includes(query)) &&
      (!teamFilter || player.team === teamFilter) &&
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
    </div>
    ${narrative}
    ${partnersLine}
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
  const favoured = expectedMargin > 0;
  const diff = Math.abs(expectedMargin).toFixed(1);
  if ((diff === '0.0') || (favoured && won) || (!favoured && !won)) {
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
  if (expectedMargin > 0) {
    return {
      outcome: 'win',
      resultClass: RESULT_CLASS.win,
      marginLabel,
      resultLabel: 'Proj W',
      displayLabel: `Proj W (${marginLabel})`,
    };
  }
  if (expectedMargin < 0) {
    return {
      outcome: 'loss',
      resultClass: RESULT_CLASS.loss,
      marginLabel,
      resultLabel: 'Proj L',
      displayLabel: `Proj L (${marginLabel})`,
    };
  }
  return {
    outcome: 'tie',
    resultClass: RESULT_CLASS.neutral,
    marginLabel,
    resultLabel: 'Even',
    displayLabel: 'Even (0.0)',
  };
}

// Returns an inline HTML fragment summarising upset wins/losses for a set of
// games, e.g. "• ↑ 2  ↓ 1". Returns '' when there are no upsets to report.
function renderUpsetSummary(upsetWins, upsetLosses) {
  if (!upsetWins && !upsetLosses) return '';
  const parts = [];
  if (upsetWins) {
    parts.push(`<span class="exp-tag exp-upset" title="Upset wins (won despite a pair-rating deficit)">↑</span>&nbsp;${upsetWins}`);
  }
  if (upsetLosses) {
    parts.push(`<span class="exp-tag exp-drop" title="Upset losses (lost despite a pair-rating advantage)">↓</span>&nbsp;${upsetLosses}`);
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
        <td class="${resultClass}">${game.w ? 'W' : 'L'}${forfeitTag}${expectTag}</td>
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

  let upsetWins = 0, upsetLosses = 0;
  for (const game of player.games || []) {
    if (game.ff) continue;
    const em = computeExpectedOutcome(player.name, game.with, game.vs[0], game.vs[1]);
    if (em === null || em === 0) continue;
    if (em < 0 && game.w === 1) upsetWins++;
    if (em > 0 && game.w === 0) upsetLosses++;
  }
  const upsetLine = renderUpsetSummary(upsetWins, upsetLosses);

  return `
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
          <th>Result</th>
          <th>Projection</th>
        </tr>
      </thead>
      <tbody>${gameRows}</tbody>
    </table>
    <p class="mnote">Top table = per-week match summary (league-recorded splits). Bottom = every individual game with partner, opponents and the actual final score, plus pending lineup projections when posted. Type: <b>MIX</b> mixed • <b>W</b> women&#39;s • <b>M</b> men&#39;s. An <b>F</b> tag marks a forfeit/walkover (1–0) — it counts in the win/loss record but is excluded from the Rating. <b>sub</b> rows are intra-league sub appearances for another team and are not counted in the match total. Projection is rating-based: <b>Proj W/L</b> is the expected winner and the value in parentheses is expected pair-rating margin (pts/game); <b>Even</b> means neutral. <b>exp</b> = result matched the rating-based expectation; <b>↑</b> = upset win (overcame a pair-rating deficit); <b>↓</b> = upset loss (pair had a rating advantage). Tags appear only when all four players have a rating.</p>
  `;
}

function openPlayer(name) {
  const player = DATA.players.find((candidate) => candidate.name === name);

  if (!player) {
    return;
  }

  elements.modalHead.innerHTML = renderModalHeader(player);
  elements.modalBody.innerHTML = renderModalBody(player);
  elements.overlay.hidden = false;
}

function closeModal() {
  elements.overlay.hidden = true;
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

  let upsetWins = 0, upsetLosses = 0;
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
      if (expectedMargin !== null && expectedMargin !== 0) {
        if (expectedMargin < 0 && win) upsetWins++;
        if (expectedMargin > 0 && !win) upsetLosses++;
      }
      const expectTag = renderExpectationTag(expectedMargin, win);
      return `
        <tr${game.ff ? ' class="ffrow"' : ''}>
          <td class="l"><span class="pill ${className}">${label}</span></td>
          <td class="l">${game.ff ? '<span class="ff-tag">forfeit</span>' : formatSubAwarePlayers(usPlayers)}</td>
          <td class="l">${game.ff ? '' : escapeHtml(themPlayers.join(' / '))}</td>
          <td class="${resultClass}">${usScore}–${themScore}</td>
          <td class="${resultClass}">${win ? 'W' : 'L'}${game.ff ? ' <span class="ff-tag">F</span>' : ''}${expectTag}</td>
        </tr>
      `;
    })
    .join('');

  const upsetLine = renderUpsetSummary(upsetWins, upsetLosses);

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
          <thead><tr><th class="l">Type</th><th class="l">Our pair</th><th class="l">Opponents</th><th>Score</th><th>Result</th></tr></thead>
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
  const rank = DATA.teams.findIndex((candidate) => candidate.name === team.name) + 1;
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
    const total = wins + losses;
    const pct = total ? Math.round((100 * wins) / total) : 0;
    return `<div class="fmt-card"><div class="l">${label}</div><div class="v">${wins}–${losses}</div><div class="p">${pct}% game wins</div></div>`;
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
        <span><b>#${rank}</b> in standings</span>
        <span>Record <b>${team.w}–${team.l}</b></span>
        <span>Games <b>${team.gw}–${team.gl}</b></span>
        <span>PF <b>${team.pf}</b> · PA <b>${team.pa}</b> · <b class="${team.diff >= 0 ? 'pos-diff' : 'neg-diff'}">${formatSignedValue(team.diff)}</b></span>
        <span>Power <b class="${powerClass}">${isMissing(team.power) ? EMPTY_VALUE : formatSignedValue(team.power)}</b> <span class="mut">(#${team.powerRank} of ${DATA.teams.length})</span></span>
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
  const routeMatch = (window.location.hash || '').match(/^#team\/(.+)$/);

  if (routeMatch) {
    const slug = decodeURIComponent(routeMatch[1]);
    const team = DATA.teams.find((candidate) => slugify(candidate.name) === slug);

    if (team) {
      renderTeamPage(team);
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
  const teams = DATA.teams.map((team) => team.name);
  const abbr = (name) => TEAM_ABBR[name] || name;
  const results = {};
  teams.forEach((row) => { results[row] = {}; teams.forEach((col) => { results[row][col] = []; }); });
  (DATA.matches || []).filter((match) => match.complete).forEach((match) => {
    const homeWon = match.result === 'home';
    results[match.home][match.away].push({ gf: match.homeGW, ga: match.awayGW, win: homeWon, pd: match.homePoints - match.awayPoints, week: match.week });
    results[match.away][match.home].push({ gf: match.awayGW, ga: match.homeGW, win: !homeWon, pd: match.awayPoints - match.homePoints, week: match.week });
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
            return '<td class="empty">—</td>';
          }
          const total = list.length + (next ? 1 : 0);
          let className;
          if (list.length === 1) {
            className = list[0].win ? 'win' : 'loss';
          } else {
            className = 'upcoming';
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

  elements.gridHost.innerHTML = `<table>${headRow}${bodyRows}</table>
    <div class="grid-cap">Read across a row: how that team fared against each opponent — <b>week</b>, <b>game wins–losses</b>, and <b>net point differential</b>. Green = won the match, red = lost. Matches are decided by games won, so a team can win the match yet be negative on points. A grey <b>NEXT</b> box marks that team's next scheduled matchup. Blank = not yet played; cells stack both meetings once teams play home and away.</div>`;
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
  renderSummary();
  renderTeams();
  renderResultsGrid();
  renderTeamFilterOptions();
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
  ['search', 'team', 'gender', 'minq'].forEach((id) => {
    getRequiredElement(id).addEventListener('input', render);
  });

  render();
  handleRoute();
}

initialize();
