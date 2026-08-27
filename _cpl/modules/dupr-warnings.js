/**
 * Helpers behind the DUPR fetch's warnings.
 */

/**
 * True when two DUPR IDs are the same ID.
 *
 * DUPR IDs are case-insensitive: the API returns them upper-cased, while the
 * roster spreadsheets they are typed into hold every mixture. Comparing the raw
 * strings reported a merged account for every player whose stored ID was not
 * upper-case, which drowned out the real mismatches.
 */
function sameDuprId(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') return false;
  return a.trim().toUpperCase() === b.trim().toUpperCase();
}

module.exports = { sameDuprId };
