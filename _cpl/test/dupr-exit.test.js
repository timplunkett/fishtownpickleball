// An expired DUPR token produces a green run with byte-identical output files,
// so neither the workflow nor the diff can see it. These two mechanisms are the
// only things that can: a miss-rate floor after the fact, and a JWT `exp` read
// before the fact.
const test = require('node:test');
const assert = require('node:assert/strict');
const {
  MAX_MISS_RATE,
  MIN_MISS_RATE_SAMPLE,
  TOKEN_EXPIRY_WARN_DAYS,
  decodeJwtExpiry,
  describeTokenExpiry,
  exceedsMissRateFloor,
  formatMissRateError,
} = require('../fetch-dupr');

const DAY_MS = 86400000;
const NOW = Date.UTC(2026, 5, 1); // Fixed, so the expiry maths is not clock-dependent.

function base64url(obj) {
  return Buffer.from(JSON.stringify(obj), 'utf-8').toString('base64url');
}

function jwt(payload) {
  return `${base64url({ alg: 'HS256', typ: 'JWT' })}.${base64url(payload)}.signature`;
}

function tokenExpiringInDays(days) {
  return jwt({ sub: 'someone', exp: Math.floor((NOW + days * DAY_MS) / 1000) });
}

test('the miss-rate ceiling is the documented 20%', () => {
  assert.equal(MAX_MISS_RATE, 0.2);
  assert.equal(TOKEN_EXPIRY_WARN_DAYS, 7);
});

test('exceedsMissRateFloor fires only above the ceiling', () => {
  // 20% exactly is allowed; the check is strictly greater-than.
  assert.equal(exceedsMissRateFloor(100, 20), false);
  assert.equal(exceedsMissRateFloor(100, 21), true);
  assert.equal(exceedsMissRateFloor(100, 0), false);
  // The total-failure case this exists for: a dead token misses everything.
  assert.equal(exceedsMissRateFloor(3000, 3000), true);
});

test('exceedsMissRateFloor ignores runs too small to mean anything', () => {
  // One genuinely unlisted player out of two is 50% and must not go red.
  assert.equal(exceedsMissRateFloor(2, 1), false);
  assert.equal(exceedsMissRateFloor(MIN_MISS_RATE_SAMPLE - 1, MIN_MISS_RATE_SAMPLE - 1), false);
  assert.equal(exceedsMissRateFloor(MIN_MISS_RATE_SAMPLE, MIN_MISS_RATE_SAMPLE), true);
});

test('exceedsMissRateFloor treats a run with no API lookups as fine', () => {
  // Every player was cached or skipped, so the run says nothing about the API.
  assert.equal(exceedsMissRateFloor(0, 0), false);
});

test('formatMissRateError names the numbers and the likely cause', () => {
  const message = formatMissRateError(1000, 990);
  assert.match(message, /^::error::/);
  assert.match(message, /990 of 1000/);
  assert.match(message, /99\.0%/);
  assert.match(message, /DUPR_ACCESS_TOKEN/);
});

test('decodeJwtExpiry reads exp out of the payload segment', () => {
  const exp = Math.floor(NOW / 1000) + 3600;
  assert.equal(decodeJwtExpiry(jwt({ exp })), exp);
});

test('decodeJwtExpiry returns null for anything it cannot parse', () => {
  // Advisory check only: a token shape this does not understand must never stop
  // a run whose token may be perfectly valid.
  assert.equal(decodeJwtExpiry('not-a-jwt'), null);
  assert.equal(decodeJwtExpiry(''), null);
  assert.equal(decodeJwtExpiry('a.!!!not-base64!!!.c'), null);
  assert.equal(decodeJwtExpiry(jwt({ sub: 'no-exp-claim' })), null);
  assert.equal(decodeJwtExpiry(jwt({ exp: 'soon' })), null);
  assert.equal(decodeJwtExpiry(undefined), null);
  assert.equal(decodeJwtExpiry(null), null);
});

test('describeTokenExpiry stays quiet on a fresh token', () => {
  const result = describeTokenExpiry(tokenExpiringInDays(29), NOW);
  assert.equal(result.level, 'ok');
  assert.equal(result.message, null);
});

test('describeTokenExpiry warns inside the rotation window', () => {
  const result = describeTokenExpiry(tokenExpiringInDays(3), NOW);
  assert.equal(result.level, 'warn');
  assert.match(result.message, /^::warning::DUPR_ACCESS_TOKEN expires in 3 day\(s\)/);
  assert.match(result.message, /update the DUPR_ACCESS_TOKEN repository secret/);

  // The boundary itself warns.
  assert.equal(describeTokenExpiry(tokenExpiringInDays(TOKEN_EXPIRY_WARN_DAYS), NOW).level, 'warn');
  assert.equal(describeTokenExpiry(tokenExpiringInDays(TOKEN_EXPIRY_WARN_DAYS + 0.5), NOW).level, 'ok');
});

test('describeTokenExpiry reports an already-expired token as fatal', () => {
  const result = describeTokenExpiry(tokenExpiringInDays(-4), NOW);
  assert.equal(result.level, 'expired');
  assert.match(result.message, /^::error::DUPR_ACCESS_TOKEN expired 4 day\(s\) ago/);
});

test('describeTokenExpiry reports unknown rather than throwing on a malformed token', () => {
  const result = describeTokenExpiry('garbage', NOW);
  assert.equal(result.level, 'unknown');
  assert.equal(result.message, null);
  assert.equal(result.daysLeft, null);
});
