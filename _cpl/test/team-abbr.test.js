const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const shared = require('../modules/shared');

const { buildTeamAbbreviations, condenseWords } = shared;

const labelsOf = (names, overrides) => {
  const built = buildTeamAbbreviations(names, overrides);
  return Object.fromEntries(Object.entries(built).map(([name, a]) => [name, a.label]));
};
const codesOf = (names, overrides) => {
  const built = buildTeamAbbreviations(names, overrides);
  return Object.fromEntries(Object.entries(built).map(([name, a]) => [name, a.code]));
};

test('condenseWords gives up detail in budget order', () => {
  assert.equal(condenseWords(['Rocks'], 9), 'Rocks');
  assert.equal(condenseWords(['One', 'Love'], 9), 'OneLove');
  assert.equal(condenseWords(['Tinton', 'Falls'], 9), 'TFalls');
  assert.equal(condenseWords(['Hamilton', 'Prime', 'Time'], 9), 'HPTime');
  assert.equal(condenseWords(['Hamilton', 'Prime', 'Time'], 4), 'HPT');
  assert.equal(condenseWords(['Hillsborough'], 5), 'Hills');
  assert.equal(condenseWords([], 5), '');
});

test('short names are still shortened for a cell chip', () => {
  // The pre-2026-08-27 logic returned anything <= 12 chars verbatim, so these
  // five set the column width on their own.
  const codes = codesOf(['Flemington', 'Home Court', 'One Love', 'Premiere', 'Monroe']);
  assert.deepEqual(codes, {
    Flemington: 'FLEM',
    'Home Court': 'HOME',
    'One Love': 'ONEL',
    Premiere: 'PREM',
    Monroe: 'MONR',
  });
  // The header form keeps more, since it has the room.
  assert.equal(labelsOf(['Home Court'])['Home Court'], 'HomeCourt');
});

test('a shared brand is reduced to initials and the location keeps the budget', () => {
  const names = [
    'Pickleball Kingdom Hillsborough',
    'Pickleball Kingdom Watchung',
    'Pickleball Kingdom Tinton Falls',
  ];
  assert.deepEqual(labelsOf(names), {
    'Pickleball Kingdom Hillsborough': 'PK·Hillsbor',
    'Pickleball Kingdom Watchung': 'PK·Watchung',
    'Pickleball Kingdom Tinton Falls': 'PK·TFalls',
  });
  assert.deepEqual(codesOf(names), {
    'Pickleball Kingdom Hillsborough': 'HILL',
    'Pickleball Kingdom Watchung': 'WATC',
    'Pickleball Kingdom Tinton Falls': 'TINT',
  });
});

test('a name with no group keeps its own words', () => {
  assert.deepEqual(labelsOf(['PCKLRAMA', 'Stelton Sports', 'Allstar Pickler']), {
    PCKLRAMA: 'PCKLRAMA',
    'Stelton Sports': 'SSports',
    'Allstar Pickler': 'APickler',
  });
});

test('clustering nests, so a sub-brand is stripped too', () => {
  // "Palace" is shared by two teams but not by the wider "Pickleball" group. A
  // flat common-prefix pass stops at "Pickleball" and leaves both tails starting
  // "Palace", which is the shape that used to bottom out at PPB / PPB2.
  const codes = codesOf([
    'Pickleball Kingdom Hillsborough',
    'Pickleball Kingdom Watchung',
    'Pickleball Palace Black',
    'Pickleball Palace Blue',
  ]);
  assert.deepEqual(codes, {
    'Pickleball Kingdom Hillsborough': 'HILL',
    'Pickleball Kingdom Watchung': 'WATC',
    'Pickleball Palace Black': 'BLAC',
    'Pickleball Palace Blue': 'BLUE',
  });
});

test('the last word rescues names whose leading letters agree', () => {
  const codes = codesOf(['Pickle Place', 'Pickleball Palace', 'Jersey Devil', 'Jersey Pickleball Club']);
  assert.deepEqual(codes, {
    'Pickle Place': 'PLAC',
    'Pickleball Palace': 'PALA',
    'Jersey Devil': 'DEVI',
    // Shares "Jersey" with Jersey Devil, so the brand is stripped and the tail
    // "Pickleball Club" opens on PICK — which is where Picklr teams also land.
    'Jersey Pickleball Club': 'CLUB',
  });
});

test('names keep a readable truncation instead of collapsing to initials', () => {
  assert.deepEqual(labelsOf(['ACE Moorestown', 'ACE Downingtown']), {
    'ACE Moorestown': 'A·Mooresto',
    'ACE Downingtown': 'A·Downingt',
  });
});

test('a known franchise brand is stripped even when it appears once', () => {
  // Clustering can only see the division being rendered. Alone against a
  // "Pickleball …" team that is not a Kingdom team, this used to keep "Kingdom"
  // in its tail and abbreviate to KING.
  const names = ['Pickleball Kingdom Tinton Falls', 'Pickleball Lehigh Valley', 'Premiere'];
  assert.deepEqual(codesOf(names), {
    'Pickleball Kingdom Tinton Falls': 'TINT',
    'Pickleball Lehigh Valley': 'LEHI',
    Premiere: 'PREM',
  });
  assert.equal(labelsOf(names)['Pickleball Kingdom Tinton Falls'], 'PK·TFalls');

  // The same code whichever division it is rendered in.
  const elsewhere = codesOf(['Pickleball Kingdom Tinton Falls', 'Pickleball Kingdom Watchung']);
  assert.equal(elsewhere['Pickleball Kingdom Tinton Falls'], 'TINT');

  // Longest match wins, and a brand never consumes the whole name.
  assert.equal(codesOf(['Bounce Malvern Boom'])['Bounce Malvern Boom'], 'BOOM');
  assert.equal(codesOf(['Bounce Malvern'])['Bounce Malvern'], 'MALV');
  assert.equal(codesOf(['Picklr Newtown'])['Picklr Newtown'], 'NEWT');
});

test('a club that fields two teams is not treated as a franchise', () => {
  // Flemington identifies the team when it is the only Flemington side present.
  assert.equal(codesOf(['Flemington Blue', 'Premiere'])['Flemington Blue'], 'FLEM');
  // And clustering strips it when both are.
  assert.deepEqual(codesOf(['Flemington Blue', 'Flemington Green']), {
    'Flemington Blue': 'BLUE',
    'Flemington Green': 'GREE',
  });
});

test('colliding teams advance together rather than first-come-first-served', () => {
  // Monroe and Monroeville are separate clusters whose codes truncate alike, so
  // both step down the ladder until the letters diverge. Flemington collides
  // with neither and keeps the first rung.
  const codes = codesOf(['Monroe', 'Monroeville', 'Flemington']);
  assert.equal(codes.Flemington, 'FLEM');
  assert.notEqual(codes.Monroe, codes.Monroeville);
  Object.entries(codes).forEach(([name, code]) => {
    assert.ok(!/\d/.test(code), `${name} fell back to a numeric suffix ("${code}")`);
  });
});

test('same-brand same-city teams are told apart by the discriminating word', () => {
  // The old logic gave these "PN" and "PN2".
  const codes = codesOf(['Picklr Newtown', 'Picklr Newark', 'Picklr Fair Lawn']);
  assert.deepEqual(codes, {
    'Picklr Newtown': 'NEWT',
    'Picklr Newark': 'NEWA',
    'Picklr Fair Lawn': 'FAIR',
  });
  const labels = labelsOf(['Picklr Newtown', 'Picklr Newark']);
  assert.equal(labels['Picklr Newtown'], 'P·Newtown');
  assert.equal(labels['Picklr Newark'], 'P·Newark');
});

test('scope is the set passed in, so unrelated pods do not steal abbreviations', () => {
  // Ballers Philly is what made Bounce Philly "BP2" division-wide. Alone in a
  // grid, Bounce Philly gets the plain form.
  assert.equal(codesOf(['Bounce Philly'])['Bounce Philly'], 'PHIL');
  const together = codesOf(['Ballers Philly', 'Bounce Philly']);
  assert.notEqual(together['Ballers Philly'], together['Bounce Philly']);
  assert.ok(!/\d/.test(together['Bounce Philly']), 'no numeric suffix when letters can tell them apart');
});

test('overrides win and push the rest around them', () => {
  const built = buildTeamAbbreviations(
    ['Pickleball Kingdom Hillsborough', 'Hillside Crew'],
    { 'Pickleball Kingdom Hillsborough': { code: 'HILL', label: 'PK·Hills' } },
  );
  assert.equal(built['Pickleball Kingdom Hillsborough'].code, 'HILL');
  assert.equal(built['Pickleball Kingdom Hillsborough'].label, 'PK·Hills');
  assert.notEqual(built['Hillside Crew'].code, 'HILL');
});

test('degenerate input does not throw', () => {
  assert.deepEqual(buildTeamAbbreviations([]), {});
  assert.deepEqual(buildTeamAbbreviations(null), {});
  assert.deepEqual(buildTeamAbbreviations([null, '', undefined]), {});
  const punctuation = buildTeamAbbreviations(['---', 'Real Team']);
  assert.equal(typeof punctuation['---'].code, 'string');
});

// --- Every compiled division, so a data refresh that adds a team surfaces here.

function loadDivisions() {
  const roots = ['travel', 'local'].map((leg) => path.join(__dirname, '../../cpl', leg));
  const datasets = [];
  roots.forEach((root) => {
    if (!fs.existsSync(root)) return;
    fs.readdirSync(root)
      .filter((file) => /^data-[0-9a-f]+\.js$/.test(file))
      .forEach((file) => {
        const context = { window: { CPL_DATASETS: {} } };
        context.globalThis = context;
        vm.runInNewContext(fs.readFileSync(path.join(root, file), 'utf8'), context);
        const data = context.window.DATA;
        if (data && Array.isArray(data.teams)) {
          datasets.push({ file: `${path.basename(root)}/${file}`, data });
        }
      });
  });
  return datasets;
}

function gridsOf(data) {
  const podCount = data.meta && data.meta.podCount > 1 ? data.meta.podCount : 1;
  if (podCount <= 1) return [data.teams.map((team) => team.name)];
  return Array.from({ length: podCount }, (_, index) => (
    data.teams.filter((team) => team.pod === index + 1).map((team) => team.name)
  )).filter((names) => names.length);
}

const DIVISIONS = loadDivisions();

test('compiled divisions are present to check', () => {
  assert.ok(DIVISIONS.length > 0, 'expected compiled data-*.js files under cpl/{travel,local}');
});

DIVISIONS.forEach(({ file, data }) => {
  test(`${file}: every grid gets unique, bounded, digit-free abbreviations`, () => {
    gridsOf(data).forEach((names, index) => {
      const built = buildTeamAbbreviations(names);
      const where = `${file} grid ${index + 1} (${names.length} teams)`;

      assert.equal(Object.keys(built).length, names.length, `${where}: one entry per team`);

      ['label', 'code'].forEach((kind) => {
        const values = names.map((name) => built[name][kind]);
        assert.equal(new Set(values).size, values.length, `${where}: duplicate ${kind}`);
        values.forEach((value, position) => {
          assert.ok(value.length > 0, `${where}: empty ${kind} for ${names[position]}`);
          assert.ok(
            !/\d+$/.test(value) || /\d/.test(names[position]),
            `${where}: ${kind} "${value}" fell back to a numeric suffix`,
          );
        });
      });

      const codeLengths = names.map((name) => built[name].code.length);
      assert.ok(
        Math.max(...codeLengths) <= 8,
        `${where}: code too long for a cell chip (${Math.max(...codeLengths)} chars)`,
      );
      const labelLengths = names.map((name) => built[name].label.length);
      assert.ok(
        Math.max(...labelLengths) <= 16,
        `${where}: label too long for a header (${Math.max(...labelLengths)} chars)`,
      );
    });
  });
});
