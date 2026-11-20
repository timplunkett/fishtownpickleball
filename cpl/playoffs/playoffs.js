/* Playoff overview (cpl/playoffs/index.html): every current division's playoffs. */
(function () {
  'use strict';

  // Same guard as the archive page: shared.js and data.js each have their own
  // cache entry, so either can be the one thing missing, and a throw inside an
  // IIFE would leave a heading over nothing that looks like an empty season.
  var shared = window.CPLShared;
  var host = document.getElementById('playoffs-host');
  var empty = document.getElementById('playoffs-empty');
  if (!shared || !shared.escapeHtml || !host) {
    if (host) {
      host.innerHTML = '<p class="panel-empty load-error-msg"></p>';
      host.firstChild.textContent = "Couldn't load this page's scripts. Reload to try again.";
    }
    return;
  }

  var escapeHtml = shared.escapeHtml;

  function divisions() {
    var data = window.CPL_PLAYOFFS;
    return data && Array.isArray(data.divisions) ? data.divisions : [];
  }

  // --- Small formatting helpers ----------------------------------------------

  // Match times are the venue's wall-clock time with no zone
  // ("2026-11-18T19:00:00"), which a browser reads as local time — right for
  // everyone who plays in these leagues.
  function parseTime(value) {
    if (!value) return null;
    var date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  function formatDay(value) {
    var date = parseTime(value);
    return date ? date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) : '';
  }

  function formatClock(value) {
    var date = parseTime(value);
    return date ? date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }) : '';
  }

  function formatWhen(value) {
    var day = formatDay(value);
    var clock = formatClock(value);
    return day && clock ? day + ' · ' + clock : day;
  }

  // The first of `times` that is today or later. Today counts, so a match
  // tonight is still "next" this afternoon. A time that has passed with no
  // result is a match awaiting its score, not one coming up — upstream leaves
  // an unreported match on the schedule for weeks.
  function startOfToday() {
    var now = new Date(Date.now());
    return new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  }

  function isPast(value) {
    var date = parseTime(value);
    return !!date && date.getTime() < startOfToday();
  }

  function nextTime(times) {
    return (times || []).filter(function (value) { return parseTime(value) && !isPast(value); }).sort()[0] || null;
  }

  // When each posted, unplayed playoff match is scheduled.
  function playoffTimes(row) {
    var times = [];
    (row.rounds || []).forEach(function (round) {
      if (round.projected) return;
      round.slots.forEach(function (slot) {
        if (!slot.bye && !slot.result && slot.time) times.push(slot.time);
      });
    });
    if (row.bronze && !row.bronze.result && row.bronze.time) times.push(row.bronze.time);
    return times;
  }

  function plural(count, one, many) {
    return count + ' ' + (count === 1 ? one : (many || one + 's'));
  }

  function divisionLabel(row) {
    return shared.divisionOptionLabel(row.league, { divisionName: row.division, clubName: row.clubName });
  }

  // Prefixed: a division slug is a slug, and an element id is shared with
  // everything else on the page.
  function sectionId(row) {
    return 'division-' + row.slug;
  }

  function dashboardHref(row) {
    return shared.divisionHref(row.league, row.season, row.slug, '../');
  }

  // A team's own page on its division's dashboard: the ?team= route the
  // dashboard's own team cards link to, so a name here goes where the same
  // name goes there.
  function teamHref(row, name) {
    return '../' + shared.divisionPath(
      { league: row.league, season: row.season, slug: row.slug },
      { team: shared.slugify(name) },
    );
  }

  // The title repeats the name because bracket cards cut long ones short.
  function teamLink(row, name, className) {
    return '<a class="pname' + (className ? ' ' + className : '') + '" href="' + escapeHtml(teamHref(row, name)) +
      '" title="' + escapeHtml(name) + '">' + escapeHtml(name) + '</a>';
  }

  // Short names for the round strip on each tile. The full name is its title.
  var ROUND_SHORT = { Championship: 'F', Semifinals: 'SF', Quarterfinals: 'QF' };
  function shortRound(label) {
    if (ROUND_SHORT[label]) return ROUND_SHORT[label];
    var size = /^Round of (\d+)$/.exec(label || '');
    return size ? 'R' + size[1] : label;
  }

  // --- What stage a division is at -----------------------------------------------

  function stageOf(row) {
    if (row.stage === 'decided') return { key: 'decided', text: 'Champion decided' };
    if (row.stage === 'playoffs') {
      var posted = (row.rounds || []).some(function (round) {
        return round.label === row.current && !round.projected;
      });
      return {
        key: 'playoffs',
        text: row.current ? (posted ? row.current : row.current + ' — draw pending') : 'Playoffs',
      };
    }
    if (row.stage === 'awaiting') return { key: 'awaiting', text: 'Awaiting the draw' };
    return { key: 'regular', text: 'Regular season' };
  }

  function stagePill(row) {
    var stage = stageOf(row);
    return '<span class="po-stage is-' + stage.key + '">' + escapeHtml(stage.text) + '</span>';
  }

  // Where each round stands, for the strip of round markers on a tile: played
  // out, the one being played now, or still to come.
  function roundStates(row) {
    var currentSeen = false;
    return (row.rounds || []).map(function (round) {
      var playable = round.slots.filter(function (slot) { return !slot.bye; });
      var done = !round.projected && playable.every(function (slot) { return slot.result; });
      var state = done ? 'done' : (!currentSeen ? 'current' : 'later');
      if (state === 'current') currentSeen = true;
      return { label: round.label, state: state };
    });
  }

  function progressHtml(row) {
    if (row.rounds && row.rounds.length) {
      var states = roundStates(row);
      var more = row.drawPending
        ? '<li class="po-round is-later" title="Later rounds — not drawn yet">…</li>'
        : '';
      return '<ol class="po-rounds" aria-label="Rounds">' + states.map(function (round) {
        return '<li class="po-round is-' + round.state + '" title="' + escapeHtml(round.label) + '">' +
          escapeHtml(shortRound(round.label)) + '</li>';
      }).join('') + more + '</ol>';
    }
    var regular = row.regular || { played: 0, total: 0 };
    var share = regular.total ? Math.round((regular.played / regular.total) * 100) : 0;
    return '<span class="po-progress" role="img" aria-label="' + regular.played + ' of ' + regular.total +
      ' regular-season matches played"><span style="width:' + share + '%"></span></span>';
  }

  function tileFacts(row) {
    if (row.stage === 'decided') {
      return '<span class="po-champ"><span aria-hidden="true">🏆</span> ' + escapeHtml(row.podium[0]) + '</span>';
    }
    var facts = [];
    var times;
    if (row.rounds && row.rounds.length) {
      facts.push(row.alive + ' of ' + plural(row.field.length, 'team') + ' alive');
      times = playoffTimes(row);
    } else {
      var regular = row.regular;
      var left = regular.total - regular.played;
      facts.push(left ? plural(left, 'match', 'matches') + ' left' : 'Regular season complete');
      times = regular.times || [];
    }
    var next = nextTime(times);
    if (next) facts.push('Next ' + formatDay(next));
    else if (times.length) facts.push('Awaiting results');
    return facts.map(function (fact) { return '<span>' + escapeHtml(fact) + '</span>'; }).join('');
  }

  // --- The summary ---------------------------------------------------------------

  function seasonGroups(list) {
    var groups = [];
    var bySlug = {};
    list.forEach(function (row) {
      if (!bySlug[row.season]) {
        bySlug[row.season] = { slug: row.season, label: row.seasonLabel, order: row.order || 0, rows: [] };
        groups.push(bySlug[row.season]);
      }
      bySlug[row.season].rows.push(row);
    });
    return groups.sort(shared.compareSeasonsNewestFirst);
  }

  function countsLine(rows) {
    var counts = { playoffs: 0, regular: 0, awaiting: 0, decided: 0 };
    rows.forEach(function (row) { counts[row.stage] = (counts[row.stage] || 0) + 1; });
    var parts = [];
    if (counts.playoffs) parts.push(counts.playoffs + ' in the playoffs');
    if (counts.awaiting) parts.push(counts.awaiting + ' awaiting the draw');
    if (counts.regular) parts.push(counts.regular + ' finishing the regular season');
    if (counts.decided) parts.push(counts.decided + ' decided');
    return plural(rows.length, 'division') + (parts.length ? ' · ' + parts.join(' · ') : '');
  }

  function tileHtml(row) {
    return '<a class="po-tile is-' + row.stage + '" href="#' + sectionId(row) + '">' +
      '<span class="po-tile-head"><span class="po-tile-name">' + escapeHtml(divisionLabel(row)) + '</span>' +
      stagePill(row) + '</span>' +
      progressHtml(row) +
      '<span class="po-tile-facts">' + tileFacts(row) + '</span>' +
      '</a>';
  }

  function summaryHtml(groups) {
    return groups.map(function (group) {
      return '<div class="po-season">' +
        '<h3 class="po-season-head">' + escapeHtml(group.label) + '</h3>' +
        '<p class="tier-sub">' + escapeHtml(countsLine(group.rows)) + '</p>' +
        '<div class="po-tiles">' + group.rows.map(tileHtml).join('') + '</div>' +
        '</div>';
    }).join('');
  }

  // --- Coming up -------------------------------------------------------------------
  //
  // Every posted playoff match still to be played, across every division. The
  // question a reader arrives with on a playoff week is "who is playing
  // tonight", and the answer used to take a visit to each division's dashboard
  // in turn.
  //
  // Grouped by day, then by division within the day, then by time. Division
  // order is the page's own (the catalog's, the same as the tiles and sections
  // below), not the label's alphabetical order or the clock: sorted by time
  // first, two divisions playing the same evening interleaved row by row.

  // The local calendar day a match falls on, as a sortable key. Everything
  // already past without a result shares one key that sorts ahead of the rest,
  // because those are listed together under "Awaiting a result".
  function dayKey(value) {
    if (isPast(value)) return '0';
    var date = parseTime(value);
    if (!date) return '9';
    var pad = function (n) { return (n < 10 ? '0' : '') + n; };
    return '1-' + date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate());
  }

  function upcomingMatches(rows) {
    var list = [];
    rows.forEach(function (row, order) {
      (row.rounds || []).forEach(function (round) {
        if (round.projected) return;
        round.slots.forEach(function (slot) {
          if (slot.bye || slot.result || !slot.time) return;
          list.push({ row: row, order: order, round: round.label, slot: slot, day: dayKey(slot.time) });
        });
      });
      if (row.bronze && !row.bronze.result && row.bronze.time) {
        list.push({ row: row, order: order, round: 'Bronze match', slot: row.bronze, day: dayKey(row.bronze.time) });
      }
    });
    // Down to the home team's name, so two matches at the same time in the
    // same division can't swap places from one load to the next.
    return list.sort(function (a, b) {
      return a.day.localeCompare(b.day)
        || a.order - b.order
        || String(a.slot.time).localeCompare(String(b.slot.time))
        || String(a.slot.home).localeCompare(String(b.slot.home));
    });
  }

  function seeded(row, name, seed) {
    var badge = seed != null ? '<span class="pseed">#' + escapeHtml(String(seed)) + '</span> ' : '';
    return badge + teamLink(row, name);
  }

  function upcomingRow(entry, firstInDivision, firstInDay) {
    // The division is named once, on the first of its rows; a rule above that
    // row separates it from the division before. The day's own heading row
    // already does that for the first division of a day.
    var classes = firstInDivision && !firstInDay ? ' class="po-div-start"' : '';
    var division = firstInDivision
      ? '<a class="app-link" href="#' + sectionId(entry.row) + '">' + escapeHtml(divisionLabel(entry.row)) + '</a>'
      : '';
    return '<tr' + classes + '>' +
      '<td class="po-time">' + escapeHtml(isPast(entry.slot.time) ? formatDay(entry.slot.time) : formatClock(entry.slot.time)) + '</td>' +
      '<td class="po-division-cell">' + division + '</td>' +
      '<td class="po-round-cell">' + escapeHtml(entry.round) + '</td>' +
      '<td class="po-match">' + seeded(entry.row, entry.slot.home, entry.slot.homeSeed) + ' <span class="po-vs">vs</span> ' +
        seeded(entry.row, entry.slot.away, entry.slot.awaySeed) + '</td>' +
      '</tr>';
  }

  function upcomingHtml(rows) {
    var list = upcomingMatches(rows);
    if (!list.length) return '';
    var days = [];
    var waiting = list.filter(function (entry) { return entry.day === '0'; }).length;
    list.forEach(function (entry) {
      if (!days.length || days[days.length - 1].key !== entry.day) {
        // Played on a day that has gone, with no result yet: grouped together
        // at the top rather than under their dates, which would read as fixtures.
        days.push({ key: entry.day, label: entry.day === '0' ? 'Awaiting a result' : formatDay(entry.slot.time), entries: [] });
      }
      days[days.length - 1].entries.push(entry);
    });
    var body = days.map(function (group) {
      return '<tr class="arch-group"><th scope="colgroup" colspan="4">' + escapeHtml(group.label) + '</th></tr>' +
        group.entries.map(function (entry, index) {
          var previous = group.entries[index - 1];
          return upcomingRow(entry, !previous || previous.order !== entry.order, index === 0);
        }).join('');
    }).join('');
    return '<section class="po-section" id="coming-up">' +
      '<h2 class="tier-head">Coming up</h2>' +
      '<p class="tier-sub">' + plural(list.length - waiting, 'playoff match', 'playoff matches') + ' scheduled' +
        (waiting ? ' · ' + waiting + ' awaiting a result' : '') + '</p>' +
      '<div class="arch-scroll"><table class="arch-table po-upcoming">' +
      '<thead><tr><th scope="col">Time</th><th scope="col">Division</th><th scope="col" class="po-round-cell">Round</th><th scope="col">Match</th></tr></thead>' +
      '<tbody>' + body + '</tbody></table></div></section>';
  }

  // --- The bracket -----------------------------------------------------------------
  //
  // Drawn from the compiler's rounds: each slot after the first round names the
  // two slots of the round before that feed it (`from`). Cards are positioned
  // absolutely — one first-round match per row, each later match centred
  // between its two feeders — and the connectors are one SVG laid under them. A
  // bracket whose rounds did not chain (`linked` false) has no `from` anywhere,
  // and is drawn as plain columns.

  var CARD_W = 208;
  var CARD_H = 66;
  var ROW_GAP = 12;
  var COL_GAP = 40;
  var HEAD_H = 28;

  function layout(rounds, linked) {
    var positions = rounds.map(function (round) { return new Array(round.slots.length); });
    if (!linked) {
      var tallest = 0;
      rounds.forEach(function (round, level) {
        round.slots.forEach(function (_, index) { positions[level][index] = index; });
        tallest = Math.max(tallest, round.slots.length);
      });
      return { positions: positions, rows: tallest };
    }
    var next = 0;
    function place(level, index) {
      if (positions[level][index] != null) return positions[level][index];
      var slot = rounds[level].slots[index];
      var row;
      if (level === 0 || !slot.from) {
        row = next;
        next += 1;
      } else {
        row = (place(level - 1, slot.from[0]) + place(level - 1, slot.from[1])) / 2;
      }
      positions[level][index] = row;
      return row;
    }
    // From the last round back, so each first-round pair lands next to each other.
    var last = rounds.length - 1;
    rounds[last].slots.forEach(function (_, index) { place(last, index); });
    return { positions: positions, rows: next };
  }

  function teamLine(row, name, seed, state, score) {
    return '<div class="pb-team' + (state ? ' is-' + state : '') + '">' +
      '<span class="pb-seed">' + (seed != null ? escapeHtml(String(seed)) : '') + '</span>' +
      (name ? teamLink(row, name, 'pb-name') : '<span class="pb-name"></span>') +
      '<span class="pb-score">' + (score != null ? escapeHtml(String(score)) : '') + '</span>' +
      '</div>';
  }

  function placeholderLine(side) {
    return '<div class="pb-team is-tbd"><span class="pb-seed"></span><span class="pb-name" title="' +
      escapeHtml(side.title) + '">' + escapeHtml(side.text) + '</span><span class="pb-score"></span></div>';
  }

  // What to call a side of a projected match that nobody has filled yet: the
  // two teams it is waiting on, if that match has been posted, abbreviated the
  // way the dashboard's grids abbreviate them, with the full names as a title.
  function sideName(rounds, level, feederIndex, abbr) {
    var feeder = rounds[level - 1] && rounds[level - 1].slots[feederIndex];
    if (!feeder || feeder.projected || !feeder.home || !feeder.away) {
      return { text: 'TBD', title: 'Decided by an earlier round' };
    }
    var short = function (name) { return (abbr[name] && abbr[name].label) || name; };
    return {
      text: short(feeder.home) + ' / ' + short(feeder.away),
      title: 'Winner of ' + feeder.home + ' v ' + feeder.away,
    };
  }

  function cardHtml(row, rounds, level, index, abbr) {
    var slot = rounds[level].slots[index];
    var classes = ['pb-card'];
    var lines;
    var meta;
    if (slot.bye) {
      classes.push('is-bye');
      lines = teamLine(row, slot.home, slot.homeSeed, 'win', null) + placeholderLine({ text: 'Bye', title: 'No opponent this round' });
      meta = 'Through on a bye';
    } else if (slot.projected) {
      classes.push('is-projected');
      lines = (slot.home ? teamLine(row, slot.home, null, '', null) : placeholderLine(sideName(rounds, level, slot.from[0], abbr))) +
        (slot.away ? teamLine(row, slot.away, null, '', null) : placeholderLine(sideName(rounds, level, slot.from[1], abbr)));
      meta = 'Projected · not posted yet';
    } else if (slot.result) {
      var homeWon = slot.result === 'home';
      lines = teamLine(row, slot.home, slot.homeSeed, homeWon ? 'win' : 'loss', slot.homeGW) +
        teamLine(row, slot.away, slot.awaySeed, homeWon ? 'loss' : 'win', slot.awayGW);
      meta = (slot.provisional ? 'Provisional' : 'Final') +
        (slot.homePoints != null ? ' · pts ' + slot.homePoints + '–' + slot.awayPoints : '');
      if (slot.provisional) classes.push('is-provisional');
    } else {
      classes.push('is-pending');
      lines = teamLine(row, slot.home, slot.homeSeed, '', null) + teamLine(row, slot.away, slot.awaySeed, '', null);
      meta = slot.time ? formatWhen(slot.time) : 'Time TBD';
    }
    return { classes: classes.join(' '), html: lines + '<div class="pb-meta">' + escapeHtml(meta) + '</div>' };
  }

  function positioned(className, left, top, html) {
    return '<div class="' + className + '" style="left:' + left + 'px;top:' + top + 'px;width:' + CARD_W +
      'px;height:' + CARD_H + 'px">' + html + '</div>';
  }

  function heading(label, left, projected) {
    return '<div class="pb-head' + (projected ? ' is-projected' : '') + '" style="left:' + left + 'px;width:' +
      CARD_W + 'px">' + escapeHtml(label) + '</div>';
  }

  function bracketHtml(row) {
    var rounds = row.rounds || [];
    if (!rounds.length) return '';
    var names = (row.field || []).map(function (team) { return team.name; });
    var abbr = shared.buildTeamAbbreviations ? shared.buildTeamAbbreviations(names) : {};
    var grid = layout(rounds, row.linked);
    var unit = CARD_H + ROW_GAP;
    var decided = row.stage === 'decided' && row.podium && row.podium.length;
    var columns = rounds.length + (row.drawPending ? 1 : 0) + (decided ? 1 : 0);
    var width = columns * CARD_W + (columns - 1) * COL_GAP;
    var height = HEAD_H + grid.rows * unit - ROW_GAP;
    var x = function (level) { return level * (CARD_W + COL_GAP); };
    var y = function (level, index) { return HEAD_H + grid.positions[level][index] * unit; };

    var parts = [];
    var paths = [];
    rounds.forEach(function (round, level) {
      parts.push(heading(round.label, x(level), round.projected));
      round.slots.forEach(function (slot, index) {
        var card = cardHtml(row, rounds, level, index, abbr);
        parts.push(positioned(card.classes, x(level), y(level, index), card.html));
        if (!slot.from) return;
        var x2 = x(level);
        var y2 = y(level, index) + CARD_H / 2;
        slot.from.forEach(function (feederIndex) {
          var feeder = rounds[level - 1].slots[feederIndex];
          var x1 = x(level - 1) + CARD_W;
          var y1 = y(level - 1, feederIndex) + CARD_H / 2;
          var xm = x1 + COL_GAP / 2;
          // A line is lit once the team travelling along it is known.
          var settled = !!(feeder.result || feeder.bye);
          paths.push('<path' + (settled ? ' class="is-settled"' : '') + ' d="M' + x1 + ' ' + y1 +
            'H' + xm + 'V' + y2 + 'H' + x2 + '"/>');
        });
      });
    });

    if (row.drawPending) {
      var nextX = x(rounds.length);
      parts.push(heading('Next round', nextX, true));
      parts.push('<div class="pb-note" style="left:' + nextX + 'px;top:' + HEAD_H + 'px;width:' + CARD_W + 'px">' +
        'The league hasn’t posted the next round, and the pods don’t settle who meets whom, so it isn’t drawn here yet.</div>');
    }
    if (decided) {
      var lastLevel = rounds.length - 1;
      var finalY = y(lastLevel, 0);
      var champX = x(rounds.length);
      parts.push(heading('Champion', champX, false));
      parts.push(positioned('pb-card is-champion', champX, finalY,
        '<span class="pb-trophy" aria-hidden="true">🏆</span>' + teamLink(row, row.podium[0], 'pb-champ-name')));
      paths.push('<path class="is-settled" d="M' + (x(lastLevel) + CARD_W) + ' ' + (finalY + CARD_H / 2) + 'H' + champX + '"/>');
    }

    return '<div class="pb-scroll"><div class="pb-bracket" role="group" aria-label="' +
      escapeHtml(divisionLabel(row)) + ' bracket" style="width:' + width + 'px;height:' + height + 'px">' +
      '<svg class="pb-lines" width="' + width + '" height="' + height + '" viewBox="0 0 ' + width + ' ' + height +
      '" aria-hidden="true">' + paths.join('') + '</svg>' + parts.join('') + '</div></div>';
  }

  function bronzeHtml(row) {
    if (!row.bronze) return '';
    var card = cardHtml(row, [{ slots: [row.bronze] }], 0, 0, {});
    return '<div class="po-bronze"><h4 class="po-sub-head"><span aria-hidden="true">🥉</span> Bronze match</h4>' +
      '<div class="' + card.classes + ' is-static" style="width:' + CARD_W + 'px;height:' + CARD_H + 'px">' +
      card.html + '</div></div>';
  }

  // --- The field and the pod tables --------------------------------------------------

  function statusCell(team) {
    if (team.status === 'champion') return '<span class="po-status is-champion">🏆 Champion</span>';
    if (team.status === 'alive') return '<span class="po-status is-alive">Alive</span>';
    if (team.place === 2) return '<span class="po-status is-out">🥈 Runner-up</span>';
    if (team.place === 3) return '<span class="po-status is-out">🥉 Bronze</span>';
    if (team.place === 4) return '<span class="po-status is-out">Fourth</span>';
    return '<span class="po-status is-out">Out in the ' + escapeHtml(team.out || 'playoffs') + '</span>';
  }

  function fieldHtml(row) {
    if (!row.field || !row.field.length) return '';
    var hasPods = row.field.some(function (team) { return team.pod; });
    var body = row.field.map(function (team) {
      return '<tr' + (team.status === 'out' ? ' class="is-out"' : '') + '>' +
        '<td class="po-num">' + (team.seed != null ? escapeHtml(String(team.seed)) : '') + '</td>' +
        '<th scope="row">' + teamLink(row, team.name) + '</th>' +
        (hasPods ? '<td>' + escapeHtml(team.pod || '') + '</td>' : '') +
        '<td class="po-num">' + (team.w != null ? team.w + '–' + team.l : '') + '</td>' +
        '<td>' + statusCell(team) + '</td>' +
        '</tr>';
    }).join('');
    return '<details class="po-field">' +
      '<summary>Playoff field · ' + escapeHtml(row.alive + ' of ' + row.field.length + ' still alive') + '</summary>' +
      '<div class="arch-scroll"><table class="arch-table">' +
      '<thead><tr><th scope="col" title="First-round seed, as the league published it">Seed</th><th scope="col">Team</th>' +
      (hasPods ? '<th scope="col">Pod</th>' : '') +
      '<th scope="col" title="Regular-season record">W–L</th><th scope="col">Status</th></tr></thead>' +
      '<tbody>' + body + '</tbody></table></div></details>';
  }

  function leadersHtml(row) {
    var regular = row.regular || { played: 0, total: 0 };
    var left = regular.total - regular.played;
    var next = nextTime(regular.times);
    var intro = left
      ? regular.played + ' of ' + plural(regular.total, 'regular-season match', 'regular-season matches') + ' played' +
        (next ? ', the next on ' + formatDay(next) : ', the rest awaiting results') +
        '. The bracket appears here once the league posts it.'
      : 'Every regular-season match is in. The bracket appears here once the league posts it.';
    // In-pod record first: it is what the league seeds by (see rankPod in
    // playoff-outputs.js), and the overall record beside it is why the order
    // can look wrong at a glance.
    var groups = (row.leaders || []).map(function (group) {
      return '<div class="po-pod">' +
        '<div class="po-pod-head">' +
          (group.label ? '<h4 class="po-sub-head">' + escapeHtml(group.label) + '</h4>' : '<span></span>') +
          '<span class="po-pod-cols" aria-hidden="true"><span>In pod</span><span>All</span></span>' +
        '</div>' +
        '<ol class="po-pod-list">' + group.teams.map(function (team) {
          var inPod = team.pw != null ? team.pw + '–' + team.pl : '';
          return '<li>' + teamLink(row, team.name, 'po-pod-name') +
            '<span class="po-pod-rec" title="' + escapeHtml(inPod + ' against pod opponents') + '">' + inPod + '</span>' +
            '<span class="po-pod-rec po-pod-all" title="' + escapeHtml(team.w + '–' + team.l + ' overall') + '">' +
            team.w + '–' + team.l + '</span></li>';
        }).join('') + '</ol></div>';
    }).join('');
    return '<p class="po-note">' + escapeHtml(intro) + '</p>' +
      (groups ? '<div class="po-pods">' + groups + '</div>' : '');
  }

  function divisionSummaryLine(row) {
    var bits = [plural(row.teams, 'team')];
    if (row.rounds && row.rounds.length) {
      if (row.stage === 'decided') {
        bits.push('won by ' + row.podium[0]);
      } else {
        bits.push(row.alive + ' of ' + row.field.length + ' still alive');
        var next = nextTime(playoffTimes(row));
        if (next) bits.push('next match ' + formatWhen(next));
      }
    }
    return bits.join(' · ');
  }

  function divisionSectionHtml(row) {
    // A round posted in part has projected matches of its own.
    var projected = (row.rounds || []).some(function (round) {
      return round.slots.some(function (slot) { return slot.projected; });
    });
    var legend = projected
      ? '<p class="po-note po-note-quiet">Dashed matches aren’t posted by the league yet; they show who meets whom as the earlier rounds are decided.</p>'
      : '';
    var body = row.rounds && row.rounds.length
      ? bracketHtml(row) + legend + bronzeHtml(row) + fieldHtml(row)
      : leadersHtml(row);
    return '<section class="po-section po-division" id="' + sectionId(row) + '">' +
      '<div class="po-division-head"><h2 class="tier-head">' + escapeHtml(divisionLabel(row)) + '</h2>' +
      stagePill(row) + '</div>' +
      '<p class="tier-sub">' + escapeHtml(divisionSummaryLine(row)) +
      ' · <a class="app-link" href="' + escapeHtml(dashboardHref(row)) + '">Division dashboard</a></p>' +
      body + '</section>';
  }

  // --- The strip ---------------------------------------------------------------------
  //
  // The archive page's strip, cut down: pills that jump to a section, marking
  // the one the reader is in. Written out here rather than shared, for the
  // reason archive.js gives — this page loads none of app.js — and styled once,
  // in styles.css. The pills are plain fragment links; the sections carry a
  // scroll-margin that clears the strip.

  var toc = document.getElementById('playoffs-toc');
  var SCROLL_GAP = 10;

  function tocHeight() {
    return toc && !toc.hidden ? Math.round(toc.getBoundingClientRect().height) : 0;
  }

  function syncTocHeight() {
    document.documentElement.style.setProperty('--toc-height', tocHeight() + 'px');
  }

  function markCurrent(sections) {
    if (!toc || toc.hidden || !sections.length) return;
    var ceiling = tocHeight() + SCROLL_GAP + 2;
    var current = sections[0];
    sections.forEach(function (section) {
      if (section.getBoundingClientRect().top <= ceiling) current = section;
    });
    Array.prototype.forEach.call(toc.querySelectorAll('a[href^="#"]'), function (link) {
      var on = link.getAttribute('href') === '#' + current.id;
      link.className = on ? 'toc-current' : '';
      if (on) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  }

  function renderToc(entries) {
    if (!toc) return;
    if (entries.length < 2) {
      toc.hidden = true;
      return;
    }
    toc.innerHTML =
      '<button type="button" class="toc-top" title="Back to the top of the page">↑ Top</button>' +
      entries.map(function (entry) {
        return '<a href="#' + entry.id + '">' + escapeHtml(entry.label) + '</a>';
      }).join('');
    toc.hidden = false;
    var sections = entries.map(function (entry) { return document.getElementById(entry.id); }).filter(Boolean);

    toc.addEventListener('click', function (event) {
      if (!event.target.closest('.toc-top')) return;
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', window.location.pathname);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    var frame = 0;
    window.addEventListener('scroll', function () {
      if (frame) return;
      frame = window.requestAnimationFrame(function () {
        frame = 0;
        markCurrent(sections);
      });
    }, { passive: true });
    window.addEventListener('resize', function () {
      syncTocHeight();
      markCurrent(sections);
    });
    syncTocHeight();
    markCurrent(sections);
  }

  // --- The page ------------------------------------------------------------------------

  function renderFreshness(rows, groups) {
    var line = document.getElementById('playoffs-freshness');
    if (!line) return;
    var newest = rows.map(function (row) { return row.asOf; }).filter(Boolean).sort().pop();
    var age = newest ? shared.formatDataAge(newest) : null;
    line.textContent = groups.map(function (group) { return group.label; }).join(' · ') + (age ? ' · ' + age.text : '');
    if (age && age.title) line.title = age.title;
  }

  function appendHtml(html) {
    var holder = document.createElement('div');
    holder.innerHTML = html;
    host.appendChild(holder);
  }

  var rows = divisions();
  var groups = seasonGroups(rows);
  // Set either way: the markup ships the empty line hidden, and leaving the
  // page's correctness to an attribute in a file nothing checks is how the two
  // drift apart.
  if (empty) empty.hidden = rows.length > 0;
  if (!rows.length) {
    renderToc([]);
    return;
  }

  renderFreshness(rows, groups);

  var tocEntries = [{ id: 'summary', label: 'Summary' }];
  appendHtml('<section class="po-section" id="summary"><h2 class="tier-head">Summary</h2>' + summaryHtml(groups) + '</section>');

  var upcoming = upcomingHtml(rows);
  if (upcoming) {
    appendHtml(upcoming);
    tocEntries.push({ id: 'coming-up', label: 'Coming up' });
  }

  groups.forEach(function (group) {
    group.rows.forEach(function (row) {
      appendHtml(divisionSectionHtml(row));
      tocEntries.push({ id: sectionId(row), label: divisionLabel(row) });
    });
  });

  renderToc(tocEntries);

  // A #division-… the page was opened with: nothing here existed when the
  // browser parsed the URL, so it could not scroll there itself.
  if (window.location.hash.length > 1) {
    var target = document.getElementById(window.location.hash.slice(1));
    if (target && target.scrollIntoView) target.scrollIntoView({ block: 'start' });
  }
}());
