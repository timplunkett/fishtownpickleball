/**
 * Wraps a handler so any call after the first is a no-op — including one
 * made while the first call is still running (synchronous work) or still in
 * flight (an unresolved promise the wrapper doesn't await).
 *
 * Built for `process.on('SIGINT', ...)`-style handlers: a second SIGINT
 * arriving mid-handler must not re-enter it, and must not be left for Node's
 * default signal handling either (see fetch-dupr.js's persistAndExit, which
 * this fixes — an impatient double Ctrl-C used to fall through to an
 * unhandled second SIGINT and could kill the process mid-`fs.writeFileSync`,
 * corrupting the file it was trying to save).
 */
function guardAgainstReentry(fn) {
  let entered = false;
  return (...args) => {
    if (entered) return undefined;
    entered = true;
    return fn(...args);
  };
}

module.exports = { guardAgainstReentry };
