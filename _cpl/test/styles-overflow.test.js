// The one CSS invariant the dashboard's sticky headers depend on, checked
// because getting it wrong is silent and looks like a rendering bug rather than
// a stylesheet one.
//
// A wrapper with a non-visible overflow is a scroll container, and a scroll
// container — not the viewport — is what `position: sticky` inside it resolves
// against. So the wrappers scroll by default and cpl/app.js marks the ones whose
// table fits with .scroll-fits, which takes the overflow away and lets their
// column header stick. Two invariants fall out of that, and both fail silently.
//
// The default has to stay scrolling, because styles.css is shared with pages
// that never load app.js — cpl/dupr-audit uses .scroll and has no dashboard
// script, so a default of `overflow: visible` would strand its tables at
// whatever width the page happens to be.
//
// And the overflow has to be declared in exactly one place. A second declaration
// later in the file wins on source order and puts the wrapper back to scrolling
// behind app.js's back, which turns the sticky offset on its header into a
// displacement that parks it over the first row of data — precisely what a
// duplicate `.grid-wrap { overflow-x: auto }` did once already.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const CSS_PATH = path.join(__dirname, '../../cpl/styles.css');
const css = fs.readFileSync(CSS_PATH, 'utf8');

// Strip comments so prose about overflow doesn't read as a declaration.
const code = css.replace(/\/\*[\s\S]*?\*\//g, '');

// Every rule block, as [selectorList, body]. Good enough for this stylesheet:
// it has no nested rules apart from @media, whose inner blocks this still sees
// individually.
function rules() {
  const found = [];
  const pattern = /([^{}]+)\{([^{}]*)\}/g;
  let match = pattern.exec(code);
  while (match) {
    const selector = match[1].trim();
    if (selector && !selector.startsWith('@')) {
      found.push([selector, match[2]]);
    }
    match = pattern.exec(code);
  }
  return found;
}

// Rules whose selector list targets a bare .scroll or .grid-wrap — the wrapper
// itself, not a descendant and not the .scroll-fits variant.
function wrapperOverflowRules() {
  return rules().filter(([selector, body]) => {
    if (!/overflow(-x|-y)?\s*:/.test(body)) return false;
    return selector.split(',').some((one) => {
      const trimmed = one.trim();
      return trimmed === '.scroll' || trimmed === '.grid-wrap';
    });
  });
}

test('the wrappers declare their overflow exactly once, together', () => {
  const found = wrapperOverflowRules();
  assert.equal(
    found.length,
    1,
    `expected one rule setting overflow on .scroll / .grid-wrap, found ${found.length}: ` +
      found.map(([selector]) => selector.replace(/\s+/g, ' ')).join(' || '),
  );
  const [[selector, body]] = found;
  // Both wrappers, so neither can drift away from the other.
  assert.match(selector, /\.scroll\b/);
  assert.match(selector, /\.grid-wrap\b/);
  // Scrolling by default is what keeps a table reachable on a page that never
  // loads app.js.
  assert.match(body, /overflow-x:\s*auto/);
  assert.ok(!/overflow:\s*visible/.test(body), 'the default leaves a wide table with no way to scroll');
});

test('only .scroll-fits takes a wrapper out of scrolling', () => {
  const offenders = rules().filter(([selector, body]) => {
    if (!/overflow(-x|-y)?\s*:\s*(visible|clip)/.test(body)) return false;
    return selector.split(',').some((one) => {
      const trimmed = one.trim();
      // .float-head .grid-wrap is the mirror's inner mount, not a real wrapper.
      if (trimmed.startsWith('.float-head')) return false;
      const targetsWrapper = /(^|\s)\.(scroll|grid-wrap)(\.[\w-]+)*$/.test(trimmed);
      return targetsWrapper && !trimmed.includes('.scroll-fits');
    });
  });
  assert.deepEqual(
    offenders.map(([selector]) => selector.replace(/\s+/g, ' ')),
    [],
    'a wrapper stops scrolling without app.js having measured that it fits',
  );
});

// Only an unlatched wrapper's header can stick, and only to the viewport, so it
// has to clear the two bars above it. Getting that offset onto a header inside a
// scrolling wrapper is the failure that parks it over the first row of data.
test('only a wrapper that fits gives its header a sticky offset', () => {
  const unlatched = rules().filter(([selector, body]) => (
    /\.scroll-fits\s+thead\s+th/.test(selector) && /top\s*:/.test(body)
  ));
  assert.ok(unlatched.length > 0, 'nothing positions the header of a wrapper that fits');
  unlatched.forEach(([selector, body]) => {
    const offset = /top:\s*([^;]+);/.exec(body);
    const where = selector.replace(/\s+/g, ' ');
    assert.ok(offset, `${where} sets no top`);
    // Both bars, in one calc: the strip is above every section, the heading
    // above this one.
    assert.match(offset[1], /--toc-height/, `${where} must clear the contents strip`);
    assert.match(offset[1], /--section-head-height/, `${where} must clear the section heading`);
  });

  // A still-scrolling wrapper's header stays in flow. Nothing may give it a top:
  // its scrollport is the wrapper, which never scrolls vertically, so any offset
  // is a displacement rather than a position. `thead th` itself must not position
  // either, or every table on every page inherits the problem.
  const latched = rules().filter(([selector, body]) => {
    if (!/top\s*:/.test(body)) return false;
    const trimmed = selector.trim();
    if (trimmed === 'thead th') return true;
    return /\.(scroll|grid-wrap)\s+thead\s+th/.test(trimmed) && !trimmed.includes('.scroll-fits');
  });
  assert.deepEqual(
    latched.map(([selector]) => selector.replace(/\s+/g, ' ')),
    [],
    'a header inside a scrolling wrapper was given an offset it cannot honour',
  );
});

// The reason a latched header can stay in flow: a mirrored copy is drawn at the
// sticky ceiling instead. The wrapper stays uncapped so that no vertical
// scrollbar can appear in it — a box scrolling two ways inside a page scrolling
// one way is worse than the problem, and it is what the user rejected.
test('a scrolling wrapper is never capped, and its header is mirrored', () => {
  const [latchRule] = wrapperOverflowRules();
  assert.ok(latchRule, 'nothing lets a wrapper scroll');
  const [, body] = latchRule;
  assert.match(body, /overflow-x:\s*auto/, 'a scrolling wrapper has to scroll sideways');
  // The one assertion that matters here: with no cap the wrapper is as tall as
  // its content, so scrollHeight equals clientHeight and no vertical scrollbar
  // is ever drawn. (It is still a scroll container in both axes — overflow-y
  // computes to auto — which is precisely why the mirror is needed at all.)
  assert.ok(!/max-height/.test(body), 'the wrapper is capped — that is the 2D scroll we removed');

  // The mirror has to be fixed, or it takes room in the layout and any ancestor
  // with a non-visible overflow clips it.
  const [floatRule] = rules().filter(([selector]) => selector.trim() === '.float-head');
  assert.ok(floatRule, 'no .float-head rule — nothing draws the mirrored header');
  assert.match(floatRule[1], /position:\s*fixed/);
  // Scrollable, because it is also the reader's handle on the table's horizontal
  // scroll; the wrapper's own scrollbar is at the foot of the table.
  assert.match(floatRule[1], /overflow-x:\s*auto/, 'the mirror cannot be dragged sideways');
  assert.match(floatRule[1], /overflow-y:\s*hidden/, 'the mirror should not scroll vertically');
  // The page background, not the header's. The grid's header cells sit 4px apart
  // under border-spacing, and in the real grid those gaps show the page through
  // them — painting the box in the header colour drew a lighter seam around
  // every cell. Opaque either way, so the rows underneath cannot show.
  assert.match(
    floatRule[1],
    /background:\s*var\(--bg\)/,
    "the mirror's backdrop must match what shows between the real header cells",
  );

  const app = fs.readFileSync(path.join(__dirname, '../../cpl/app.js'), 'utf8');
  assert.ok(
    app.includes("'.scroll:not(.scroll-fits), .grid-wrap:not(.scroll-fits)'"),
    'app.js mirrors no wrappers',
  );
  assert.ok(app.includes('float-head'), 'app.js builds no mirror box');
});

// A mirrored grid header needs the `.grid-wrap th` rules that style those cells,
// and needs its corner cell to keep pinning left the way the real one does.
test('a mirrored grid header keeps its styling and its pinned corner', () => {
  const inner = rules().filter(([selector]) => selector.trim() === '.float-head .grid-wrap');
  assert.equal(inner.length, 1, 'nothing scopes the .grid-wrap a mirrored grid sits inside');
  assert.match(
    inner[0][1],
    /overflow:\s*visible/,
    'the inner .grid-wrap must not become a scrollport — the box outside it is the one that counts',
  );

  const [corner] = rules().filter(([selector]) => (
    selector.trim() === '.float-head .grid-wrap thead th.row'
  ));
  assert.ok(corner, 'a mirrored grid loses the corner cell the real one pins');
  assert.match(corner[1], /position:\s*sticky/);
  assert.match(corner[1], /left:\s*0/);
});

// In a grid scrolling both ways the two sticky bands cross, and a row header
// travelling upward must pass behind the column headers rather than over them.
test('the grid paints its column header band above its row header band', () => {
  const zIndex = (pattern) => {
    const [found] = rules().filter(([selector, body]) => (
      selector.trim() === pattern && /z-index/.test(body)
    ));
    assert.ok(found, `no z-index for ${pattern}`);
    return Number(/z-index:\s*(\d+)/.exec(found[1])[1]);
  };
  const column = zIndex('.grid-wrap thead th');
  const row = zIndex('.grid-wrap th.row');
  const corner = zIndex('.grid-wrap thead th.row');
  assert.ok(column > row, `column band (${column}) must paint over row band (${row})`);
  assert.ok(corner > column, `the corner (${corner}) must paint over both`);
});

// The stylesheet can only offset a sticky header correctly if it knows how tall
// the bars above it are, and both numbers come from app.js at runtime.
test('the sticky offsets are driven by the measured custom properties', () => {
  ['--toc-height', '--section-head-height'].forEach((prop) => {
    assert.match(css, new RegExp(`${prop}:\\s*0px`), `${prop} has no :root fallback`);
    assert.ok(css.includes(`var(${prop})`), `${prop} is defined but never used`);
  });
  const app = fs.readFileSync(path.join(__dirname, '../../cpl/app.js'), 'utf8');
  ['--toc-height', '--section-head-height'].forEach((prop) => {
    assert.ok(app.includes(`'${prop}'`), `${prop} is never set by app.js`);
  });
});
