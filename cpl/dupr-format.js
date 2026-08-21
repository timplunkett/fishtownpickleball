'use strict';

(() => {
  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => (
      { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]
    ));
  }

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

  window.formatDuprRating = formatDuprRating;
})();
