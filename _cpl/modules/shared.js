// Utilities shared between the build pipeline (Node, via require) and the
// dashboard pages (browser, as window.CPLShared — the compile step copies this
// file verbatim to cpl/shared.js). Keep this file dependency-free and UMD-safe.
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.CPLShared = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
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

  return {
    escapeHtml,
    decodeHtmlEntities,
    slugify,
    normalizeName,
    isGenderedTravelDivisionName,
    formatTravelDivisionLabel,
    divisionSortKey,
    getTravelDivisionSortKey,
  };
}));
