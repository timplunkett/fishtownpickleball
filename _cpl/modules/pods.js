// Pod / section detection for a division.
//
// Two notions of "pod" exist and are deliberately kept separate:
//   - Sections come from the schedule: connected sub-groups of teams that only
//     ever play each other. This is the grouping standings, seeding and the
//     head-to-head grid all assume.
//   - Reported pods are the league's own regional labels from /teams. Teams
//     routinely play opponents in other reported pods, so these are carried as
//     annotations, never used to section the UI.

// Pod values the league publishes when there is nothing meaningful to report:
// "Overall" for an undivided division, "TBD" before the pods have been drawn.
const PLACEHOLDER_POD_NAMES = new Set(['overall', 'tbd', 'n/a', 'none']);

// Sections come from the schedule: connected sub-groups of teams that only ever
// play each other and never meet teams in another sub-group. Uses all matchups
// (completed + scheduled) so the structure is known before the season ends. This
// is the grouping standings, seeding and the head-to-head grid all assume, because
// it's the only one guaranteed to contain every matchup it's asked to display.
function inferPodsFromSchedule(teamArr, matchups) {
  const parent = {};
  const seed = name => { if (name && !parent[name]) parent[name] = name; };
  for (const m of matchups) { seed(m.homeName); seed(m.awayName); }
  for (const t of teamArr) seed(t.name);
  const find = n => { while (parent[n] !== n) { parent[n] = parent[parent[n]]; n = parent[n]; } return n; };
  for (const m of matchups) {
    if (m.homeName && m.awayName) {
      const ra = find(m.homeName), rb = find(m.awayName);
      if (ra !== rb) parent[ra] = rb;
    }
  }
  // Number pods by first appearance in the (already sorted/ranked) team list.
  const numberByRoot = {};
  let next = 1;
  const byTeam = new Map();
  for (const t of teamArr) {
    const root = find(t.name);
    if (!numberByRoot[root]) numberByRoot[root] = next++;
    byTeam.set(t.name, numberByRoot[root]);
  }
  return { byTeam, podCount: next - 1, podNames: null };
}

// The pod name the league reports per team in /teams. This is a regional label,
// not a scheduling group — teams routinely play opponents in other pods — so it is
// carried alongside the schedule sections rather than replacing them.
// Returns null when any team is missing a usable pod.
function podsFromApi(teamArr, podNameByTeam) {
  if (!podNameByTeam || !podNameByTeam.size) return null;
  const nameByTeam = new Map();
  for (const t of teamArr) {
    const raw = podNameByTeam.get(String(t.name).trim());
    const name = typeof raw === 'string' ? raw.trim() : '';
    if (!name || PLACEHOLDER_POD_NAMES.has(name.toLowerCase())) return null;
    nameByTeam.set(t.name, name);
  }
  const podNames = [...new Set(nameByTeam.values())].sort((a, b) => a.localeCompare(b));
  const numberByName = new Map(podNames.map((name, i) => [name, i + 1]));
  const byTeam = new Map();
  for (const [team, name] of nameByTeam) byTeam.set(team, numberByName.get(name));
  return { byTeam, podCount: podNames.length, podNames };
}

// Group members by pod for logging/annotation, keyed by pod name when available.
function podGroups({ byTeam, podNames }) {
  const groups = {};
  for (const [team, number] of byTeam) {
    const key = (podNames && podNames[number - 1]) || `Pod ${number}`;
    (groups[key] = groups[key] || []).push(team);
  }
  for (const members of Object.values(groups)) members.sort((a, b) => a.localeCompare(b));
  return groups;
}

// Count matchups whose two teams sit in different reported pods. Zero means the
// reported pods partition the schedule — nobody plays outside their pod.
function countCrossPodMatchups({ byTeam }, matchups) {
  let cross = 0;
  for (const m of matchups) {
    if (!m.homeName || !m.awayName) continue;
    const home = byTeam.get(m.homeName), away = byTeam.get(m.awayName);
    if (home == null || away == null) continue;
    if (home !== away) cross++;
  }
  return cross;
}

// Reported pods sometimes arrive as lettered halves of one region ("Northeast A",
// "Northeast B"). Map each to its shared base name, but only where every team in
// that base sits in a single section — otherwise the collapsed name would describe
// two different sections and stop identifying either.
function collapsePodVariants(teamArr, reported) {
  const baseOf = name => {
    const match = /^(.*\S)\s+(?:[A-Za-z]|\d+)$/.exec(name);
    return match ? match[1] : name;
  };
  const variantsByBase = new Map();
  for (const name of reported.podNames) {
    const base = baseOf(name);
    if (!variantsByBase.has(base)) variantsByBase.set(base, []);
    variantsByBase.get(base).push(name);
  }
  const collapsed = new Map();
  for (const [base, variants] of variantsByBase) {
    const sections = new Set(
      teamArr.filter(t => variants.includes(t.reportedPod)).map(t => t.pod),
    );
    const collapsible = variants.length > 1 && sections.size === 1;
    for (const name of variants) collapsed.set(name, collapsible ? base : name);
  }
  return collapsed;
}

// Label each section with the reported pods it actually contains, joined when it
// spans more than one — a section holding Northeast A/B and Northwest A/B reads
// "Northeast / Northwest". That stays honest about the span, where naming the
// section after a single one of its pods would not. Sections that would end up
// sharing a label are indistinguishable, so those divisions stay numeric.
function labelSectionsFromReportedPods(teamArr, sections, reported) {
  const collapsed = collapsePodVariants(teamArr, reported);
  const names = [];
  for (let p = 1; p <= sections.podCount; p++) {
    const members = teamArr.filter(t => t.pod === p);
    if (!members.length || members.some(t => !t.reportedPod)) return null;
    names[p - 1] = [...new Set(members.map(t => collapsed.get(t.reportedPod) || t.reportedPod))]
      .sort((a, b) => a.localeCompare(b))
      .join(' / ');
  }
  return names.every(Boolean) && new Set(names).size === names.length ? names : null;
}

// Assign each team its section (`pod`, `podName`) plus the league's own label for it
// (`reportedPod`). Mutates teamArr and returns the matching meta fields.
function assignPods(teamArr, matchups, podNameByTeam) {
  const sections = inferPodsFromSchedule(teamArr, matchups);
  const reported = podsFromApi(teamArr, podNameByTeam);

  for (const t of teamArr) {
    t.pod = sections.byTeam.get(t.name) || 1;
    t.reportedPod = reported ? reported.podNames[reported.byTeam.get(t.name) - 1] : null;
  }

  // Reported pods are a regional label, not a scheduling group: teams routinely play
  // opponents in other pods. Sections therefore stay schedule-based, and take their
  // label from every reported pod they contain rather than from any single one.
  const crossPod = reported ? countCrossPodMatchups(reported, matchups) : 0;
  const podNames = reported ? labelSectionsFromReportedPods(teamArr, sections, reported) : null;
  for (const t of teamArr) t.podName = podNames ? podNames[t.pod - 1] : null;

  const meta = {
    podCount: sections.podCount,
    podNames,
    podSource: podNames ? 'api' : 'schedule',
    reportedPods: reported ? reported.podNames : null,
  };

  if (sections.podCount > 1) {
    console.warn(`  ⚠️  ${sections.podCount} pods in this division (labels: ${meta.podSource}).`);
    for (const [label, members] of Object.entries(podGroups({ byTeam: sections.byTeam, podNames }))) {
      console.warn(`     ${label}: ${members.join(', ')}`);
    }
  }

  // Annotation only (never used to section the UI): the league's pods are a regional
  // label and teams often play across them. Record how far apart the two groupings
  // are so the difference stays reviewable in the build log and the emitted data.
  if (reported && crossPod > 0) {
    const scheduled = matchups.filter(m => m.homeName && m.awayName).length;
    meta.podMismatch = {
      crossPodMatchups: crossPod,
      totalMatchups: scheduled,
      reported: podGroups(reported),
      schedule: podGroups({ byTeam: sections.byTeam, podNames: null }),
    };
    console.warn(`  ⚠️  ${reported.podCount} reported pods do not partition the schedule: ${crossPod}/${scheduled} matchups cross a pod boundary. Sections stay schedule-based and are labelled with every pod they span.`);
  }

  return meta;
}

module.exports = {
  PLACEHOLDER_POD_NAMES,
  inferPodsFromSchedule,
  podsFromApi,
  podGroups,
  countCrossPodMatchups,
  collapsePodVariants,
  labelSectionsFromReportedPods,
  assignPods,
};
