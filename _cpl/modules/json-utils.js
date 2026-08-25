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

module.exports = { jsonStringify };
