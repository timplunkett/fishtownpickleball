/**
 * Warning helpers for the DUPR fetch.
 *
 * A full rebuild logs a few thousand lines, so a warning scrolls out of sight
 * long before the run ends — on GitHub Actions it is buried in a collapsed step.
 * Warnings are therefore recorded as they are logged and reprinted as a block
 * after the summary table, where they are the last thing on screen.
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

function formatArg(arg) {
  if (typeof arg === 'string') return arg;
  if (arg instanceof Error) return arg.message;
  if (arg == null) return String(arg);
  try {
    return typeof arg === 'object' ? JSON.stringify(arg) : String(arg);
  } catch {
    return String(arg);
  }
}

/**
 * A console.warn that also keeps what it wrote.
 *
 * `sink` is the underlying logger, so the live output is unchanged; tests pass
 * their own to keep the run quiet.
 */
function createWarningLog(sink = console.warn) {
  const messages = [];
  return {
    messages,
    warn(...args) {
      messages.push(args.map(formatArg).join(' '));
      sink(...args);
    },
  };
}

/**
 * Renders the collected warnings as a block, or null when there were none —
 * a clean run should not print a heading over an empty list.
 */
function formatWarningReport(messages) {
  if (!messages || messages.length === 0) return null;
  const heading = messages.length === 1 ? '1 warning from this run:' : `${messages.length} warnings from this run:`;
  const lines = messages.map((message, index) => `  ${index + 1}. ${message}`);
  return [heading, ...lines].join('\n');
}

module.exports = { sameDuprId, createWarningLog, formatWarningReport };
