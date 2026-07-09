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
const DEFAULT_SORT = Object.freeze({ key: 'winPct', direction: -1 });
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
  team: getRequiredElement('team'),
  teams: getRequiredElement('teams'),
  teamView: getRequiredElement('teamview'),
};

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
  return `<span class="pname" data-name="${escapeHtml(player.name)}">${escapeHtml(player.name)}${highlighted}</span>`;
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
  const minimumGames = Number(elements.minGames.value);

  return DATA.players.filter(
    (player) =>
      (!query || player.name.toLowerCase().includes(query)) &&
      (!teamFilter || player.team === teamFilter) &&
      (!genderFilter || player.gender === genderFilter) &&
      player.gamesPlayed >= minimumGames,
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
        <tr>
          <td class="l">Wk ${game.week}</td>
          <td class="l"><span class="teamdot" style="background:${getTeamColor(game.opp)}"></span>${game.homeAway === 'H' ? 'vs' : '@'} ${escapeHtml(game.opp)}</td>
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

function renderGameLogRows(player) {
  let gameLog = '';
  let lastWeek = null;

  for (const game of player.games || []) {
    if (game.wk !== lastWeek) {
      lastWeek = game.wk;
      gameLog += `
        <tr class="wkrow"><td colspan="5" class="l">Week ${game.wk} • vs ${escapeHtml(game.opp)}</td></tr>
      `;
    }

    const [label, className] = GAME_TYPE_LABELS[game.t] || ['', ''];
    const resultClass = game.w ? 'res-W' : 'res-L';
    const forfeitTag = game.ff ? ' <span class="ff-tag">F</span>' : '';
    const partnerCell = game.ff
      ? '<span class="ff-tag" title="Forfeit / walkover — not counted in the rating">forfeit</span>'
      : escapeHtml(game.with);
    const opponentCell = game.ff ? '' : `${escapeHtml(game.vs[0])} / ${escapeHtml(game.vs[1])}`;
    gameLog += `
      <tr${game.ff ? ' class="ffrow"' : ''}>
        <td class="l"><span class="pill ${className}">${label}</span></td>
        <td class="l">${partnerCell}</td>
        <td class="l">${opponentCell}</td>
        <td class="${resultClass}">${game.f}–${game.a}</td>
        <td class="${resultClass}">${game.w ? 'W' : 'L'}${forfeitTag}</td>
      </tr>
    `;
  }

  return gameLog;
}

function renderModalBody(player) {
  const matchRows = renderMatchLogRows(player);
  const gameRows = renderGameLogRows(player);
  const gameCount = (player.games || []).length;

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
    <div class="gtitle">Game-by-game log <span>${gameCount} games • actual final scores</span></div>
    <table class="mlog glog">
      <thead>
        <tr>
          <th class="l">Type</th>
          <th class="l">Partner</th>
          <th class="l">Opponents</th>
          <th>Score</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>${gameRows}</tbody>
    </table>
    <p class="mnote">Top table = per-week match summary (league-recorded splits). Bottom = every individual game with partner, opponents and the actual final score. Type: <b>MIX</b> mixed • <b>W</b> women&#39;s • <b>M</b> men&#39;s. An <b>F</b> tag marks a forfeit/walkover (1–0) — it counts in the win/loss record but is excluded from the Rating.</p>
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

function renderTeamMatchBlock(match, teamName) {
  const homeSide = match.home === teamName;
  const usPoints = homeSide ? match.homePoints : match.awayPoints;
  const themPoints = homeSide ? match.awayPoints : match.homePoints;
  const usGames = homeSide ? match.homeGW : match.awayGW;
  const themGames = homeSide ? match.awayGW : match.homeGW;
  const opponent = homeSide ? match.away : match.home;
  const won = homeSide === (match.result === 'home');

  const gameRows = (match.games || [])
    .map((game) => {
      const usPlayers = homeSide ? game.h : game.a;
      const themPlayers = homeSide ? game.a : game.h;
      const usScore = homeSide ? game.hs : game.as;
      const themScore = homeSide ? game.as : game.hs;
      const win = usScore > themScore;
      const [label, className] = GAME_TYPE_LABELS[game.t] || ['', ''];
      const resultClass = win ? 'res-W' : 'res-L';
      return `
        <tr${game.ff ? ' class="ffrow"' : ''}>
          <td class="l"><span class="pill ${className}">${label}</span></td>
          <td class="l">${game.ff ? '<span class="ff-tag">forfeit</span>' : escapeHtml(usPlayers.join(' & '))}</td>
          <td class="l">${game.ff ? '' : escapeHtml(themPlayers.join(' / '))}</td>
          <td class="${resultClass}">${usScore}–${themScore}</td>
          <td class="${resultClass}">${win ? 'W' : 'L'}${game.ff ? ' <span class="ff-tag">F</span>' : ''}</td>
        </tr>
      `;
    })
    .join('');

  return `
    <div class="wk-block">
      <div class="wk-head">
        <span>Week ${match.week} • ${homeSide ? 'vs' : '@'} ${escapeHtml(opponent)}</span>
        <span class="${won ? 'res-W' : 'res-L'}">${won ? 'WON' : 'LOST'} ${usGames}–${themGames}</span>
      </div>
      <div class="match-summary">Match points <b>${usPoints}–${themPoints}</b> • Games <b>${usGames}–${themGames}</b></div>
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
    ? upcoming
        .map((match) => {
          const homeSide = match.home === team.name;
          const opponent = homeSide ? match.away : match.home;
          return `<div class="up-row"><span class="op">Week ${match.week} • ${homeSide ? 'vs' : '@'} <b>${escapeHtml(opponent)}</b></span><span class="dt">${formatMatchDate(match.time)}</span></div>`;
        })
        .join('')
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
      <h3>Upcoming</h3>
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

function initialize() {
  renderSummary();
  renderTeams();
  renderTeamFilterOptions();
  renderTableHead();
  renderDuos();

  elements.head.addEventListener('click', handleColumnSort);
  document.addEventListener('click', handlePlayerClick);
  elements.teams.addEventListener('click', handleTeamCardClick);
  elements.duoBody.addEventListener('click', handleDuoClick);
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
