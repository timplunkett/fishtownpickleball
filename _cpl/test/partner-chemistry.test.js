// The player modal's "Partner chemistry" table lists every partner a player
// has had. Qualified partners (3+ rated games) read their record and margins
// from the pair's DATA.duos row, so the modal and Top Duos can't disagree;
// the rest are counted off the game log. Rendered through cpl/app.js against
// every compiled division, with its real detail shard merged in.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const { compiledDivisions } = require('./helpers/compiled');
const { loadApp } = require('./helpers/app-harness');

function loadWithDetails(file) {
  const loaded = loadApp(file);
  const { context } = loaded;
  const detailFile = path.join(path.dirname(file), path.basename(context.DATA.meta.detailFile));
  vm.runInNewContext(fs.readFileSync(detailFile, 'utf8'), context, { filename: detailFile });
  context.mergePlayerDetails();
  return loaded;
}

const rowsIn = (markup) => markup.match(/<tr class="partner-row[^"]*"/g) || [];

for (const { label, file } of compiledDivisions()) {
  test(`${label}: every partner gets one row, qualified ones matching Top Duos`, () => {
    const { context } = loadWithDetails(file);
    const duoKey = (a, b) => [a, b].sort().join('|');
    const duos = new Map((context.DATA.duos || []).map((duo) => [duoKey(duo.aId, duo.bId), duo]));

    for (const player of context.DATA.players) {
      const rows = context.collectPartnerChemistry(player);
      const names = rows.map((row) => row.name);
      assert.equal(new Set(names).size, names.length, `${player.name}: a partner is listed twice`);

      const partners = player.partners || [];
      // Qualified partners lead, in the compiler's best-first order.
      assert.deepEqual([...rows.slice(0, partners.length).map((row) => row.name)], [...partners.map((p) => p.name)]);
      for (const row of rows.slice(0, partners.length)) {
        const duo = duos.get(duoKey(player.playerId, row.key));
        assert.ok(duo, `${player.name} + ${row.name}: qualified partner missing from DATA.duos`);
        assert.equal(row.w, duo.w);
        assert.equal(row.l, duo.l);
        assert.equal(row.avgActual, duo.avgActual);
        assert.equal(row.avgExpected, duo.avgExpected);
      }
      for (const row of rows.slice(partners.length)) {
        assert.equal(row.synergy, null);
        assert.equal(row.w + row.l, row.n);
      }

      const markup = context.renderPartnerChemistrySection(player);
      assert.equal(rowsIn(markup).length, rows.length);
      if (!rows.length) assert.equal(markup, '');
    }
  });
}
