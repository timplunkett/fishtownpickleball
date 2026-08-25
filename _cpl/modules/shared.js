// Utilities shared between the build pipeline (Node, via require) and the
// dashboard pages (browser, as window.CPLShared — the compile step copies this
// file verbatim to cpl/shared.js). Keep this file dependency-free and UMD-safe.
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.CPLShared = factory();
  }
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const HTML_ESCAPE_MAP = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => HTML_ESCAPE_MAP[character]);
  }

  // Decode the named/numeric entities the league API is known to emit.
  function decodeHtmlEntities(value) {
    return String(value)
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#0*39;|&apos;/g, "'")
      .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)));
  }

  function slugify(name) {
    return String(name || '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  // Collapse whitespace and title-case each word ("joe  DOE" -> "Joe Doe").
  function normalizeName(value) {
    return String(value || '')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase()
      .replace(/\b\w/g, (character) => character.toUpperCase());
  }

  function isGenderedTravelDivisionName(name) {
    return /\b(women'?s?|men'?s?)\b/i.test(String(name || ''));
  }

  // Divisions served by the /gender leg of the CPL API are single-gender: the
  // roster is all-male or all-female and every game is same-gender doubles, so
  // mixed and opposite-gender splits are dead weight in those divisions.
  function isGenderApiBase(apiBase) {
    return /\/gender\//.test(String(apiBase || ''));
  }

  // The gender a division name implies: "4.5 Mens" -> Male, "3.25 Womens" ->
  // Female, anything else -> null. Women is tested first: "Womens" would also
  // match the men pattern.
  function travelDivisionGender(name) {
    const text = String(name || '');
    if (/women'?s?\b/i.test(text)) return 'Female';
    if (/men'?s?\b/i.test(text)) return 'Male';
    return null;
  }

  // "3.5 Women's" -> "Women's 3.5"; non-gendered names pass through untouched.
  function formatTravelDivisionLabel(name) {
    const text = String(name || '').trim();
    const match = text.match(/^(\d+(?:\.\d+)?)\s+(women'?s?|men'?s?)$/i);
    if (!match) return text;
    return `${match[2]} ${match[1]}`;
  }

  // Leading number in a division name, for numeric sort ("3.25 - 3.99" -> 3.25).
  function divisionSortKey(name) {
    const match = String(name || '').match(/[\d.]+/);
    return match ? parseFloat(match[0]) : Infinity;
  }

  // Composite sort key for travel divisions: numeric bracket first, regular
  // divisions before gendered ones, then name.
  function getTravelDivisionSortKey(name) {
    const text = formatTravelDivisionLabel(name);
    const ratingMatch = text.match(/(\d+(?:\.\d+)?)/);
    const rating = ratingMatch ? Number(ratingMatch[1]) : Number.POSITIVE_INFINITY;
    const genderedRank = isGenderedTravelDivisionName(text) ? 1 : 0;
    return { rating, genderedRank, text: text.toLowerCase() };
  }

  // Render a DUPR rating as HTML: linked to the player's DUPR dashboard when
  // the numeric id is known, starred when provisional, em-dash when absent.
  function formatDuprRating(duprData) {
    if (!duprData || duprData.rating == null) return '—';

    const numericRating = Number(duprData.rating);
    const label = Number.isFinite(numericRating)
      ? escapeHtml(numericRating.toFixed(3))
      : escapeHtml(String(duprData.rating));
    const display = duprData.provisional
      ? `${label}<sup title="Provisional rating">*</sup>`
      : label;

    return duprData.numericId
      ? `<a href="https://dashboard.dupr.com/dashboard/player/${encodeURIComponent(duprData.numericId)}" target="_blank" rel="nofollow">${display}</a>`
      : display;
  }

  // Decode the packed player index emitted by the compiler (string table +
  // integer entries; see packPlayerIndex) into the plain entry objects the
  // finder and dashboards consume. Unpacks once, then serves the cached array.
  function getPlayerIndex() {
    const root = globalThis;
    if (Array.isArray(root.PLAYER_INDEX)) return root.PLAYER_INDEX;
    const packed = root.PLAYER_INDEX_PACKED;
    if (!packed || !Array.isArray(packed.e)) return [];
    const s = (index) => (index === -1 ? '' : packed.s[index]);
    root.PLAYER_INDEX = packed.e.map((entry) => {
      const decoded = {
        name: s(entry[0]),
        team: s(entry[1]),
        division: s(entry[2]),
        slug: s(entry[3]),
        league: entry[4] === 1 ? 'travel' : 'local',
        playerId: entry[5] === -1 ? null : packed.s[entry[5]],
      };
      if (entry[6] !== -1) decoded.club = packed.s[entry[6]];
      if (entry[7] & 1) decoded.isCaptain = true;
      if (entry[7] & 2) decoded.isSub = true;
      return decoded;
    });
    return root.PLAYER_INDEX;
  }

  return {
    escapeHtml,
    decodeHtmlEntities,
    slugify,
    normalizeName,
    isGenderedTravelDivisionName,
    isGenderApiBase,
    travelDivisionGender,
    formatTravelDivisionLabel,
    divisionSortKey,
    getTravelDivisionSortKey,
    formatDuprRating,
    getPlayerIndex,
  };
}));
