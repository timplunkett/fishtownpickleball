const readline = require('readline');

/**
 * Pins a single "in progress" status as the last line of output, with
 * finished results and warnings scrolling above it — so a long run reads as
 * a scrollback of completed outcomes with a live status pinned at the
 * bottom, rather than one line per player that never says how it turned out
 * until the summary table at the very end.
 *
 * Only meaningful on a real terminal, where a line can be cleared and
 * redrawn in place. Off a TTY (a CI log file) there is no "current line" to
 * redraw — writing a bare status with no trailing newline would just
 * concatenate onto whatever prints next — so `set()`/`done()` are no-ops
 * there and only finished lines from `println()` print, one per line.
 */
function createProgressLine(stream = process.stdout) {
  const isTTY = Boolean(stream.isTTY);
  let current = '';

  function clearCurrent() {
    if (!current) return;
    readline.clearLine(stream, 0);
    readline.cursorTo(stream, 0);
  }

  return {
    /** Sets (or replaces) the pinned status line. No-op off a TTY. */
    set(text) {
      if (!isTTY) return;
      clearCurrent();
      stream.write(text);
      current = text;
    },

    /**
     * Prints a line that becomes permanent scrollback, then restores
     * whatever status line was pinned before it (if any).
     */
    println(text) {
      if (!isTTY) {
        stream.write(`${text}\n`);
        return;
      }
      clearCurrent();
      stream.write(`${text}\n`);
      if (current) stream.write(current);
    },

    /**
     * Clears the pinned status line for good. Call before any output that
     * should not be followed by a stale status — a final summary, an early
     * exit — otherwise that line lingers under output that has moved on.
     */
    done() {
      if (!isTTY) return;
      clearCurrent();
      current = '';
    },

    /**
     * Wraps a console.warn-style sink so a warning fired mid-status scrolls
     * above the pinned line instead of being interleaved into it. The
     * warning itself still goes through the original sink (and stream,
     * typically stderr) unchanged — only the surrounding clear/redraw is
     * added, since a shared terminal display doesn't care which file
     * descriptor wrote which bytes.
     */
    wrapSink(sink = console.warn) {
      return (...args) => {
        if (!isTTY) {
          sink(...args);
          return;
        }
        clearCurrent();
        sink(...args);
        if (current) stream.write(current);
      };
    },
  };
}

module.exports = { createProgressLine };
