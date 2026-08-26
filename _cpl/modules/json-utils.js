// Serialize to JSON using literal UTF-8 characters rather than \uXXXX escapes,
// so accented player names stay readable in the cached JSON and its diffs.
//
// JSON.stringify in Node already emits non-ASCII as literal UTF-8; the escapes
// it *does* produce are for control characters (U+0000–U+001F) and the
// line/paragraph separators U+2028/U+2029. Un-escaping those would emit
// invalid JSON (a literal control character inside a string), so this is a
// plain passthrough kept as a named seam in case the policy ever changes.
function jsonStringify(data) {
  return JSON.stringify(data, null, 2);
}

// Serialize with the top `levels` of structure broken across lines and
// everything below them kept compact on one line.
//
// Generated data files are committed, so how they wrap decides whether a change
// is reviewable. A whole table on one line makes every edit a full-file rewrite:
// adding three ratings rewrote 290KB and told a reviewer nothing. Fully
// indenting instead spreads each record over five lines, so a single changed
// rating still moves several. One record per line is the useful middle — a
// changed rating is a changed line — and it costs under 1% gzipped, because the
// added whitespace is the most compressible thing in the file.
//
// levels=1 suits a flat table of records; levels=2 also expands the arrays
// inside a wrapper object, one element per line.
function expandJson(value, levels = 1, indent = '') {
  if (levels <= 0 || value === null || typeof value !== 'object') {
    return JSON.stringify(value);
  }
  const inner = `${indent} `;
  const wrap = (open, close, parts) => (
    parts.length ? `${open}\n${parts.join(',\n')}\n${indent}${close}` : `${open}${close}`
  );
  if (Array.isArray(value)) {
    return wrap('[', ']', value.map((item) => inner + expandJson(item, levels - 1, inner)));
  }
  return wrap('{', '}', Object.keys(value).map(
    (key) => `${inner}${JSON.stringify(key)}: ${expandJson(value[key], levels - 1, inner)}`,
  ));
}

module.exports = { jsonStringify, expandJson };
