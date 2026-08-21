#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const repoRoot = path.join(__dirname, '..');

function readRequiredFile(relativePath) {
  const absolutePath = path.join(repoRoot, relativePath);
  if (!fs.existsSync(absolutePath)) {
    throw new Error(`Missing required file: ${relativePath}`);
  }
  return fs.readFileSync(absolutePath, 'utf8');
}

function assertContains(source, expectedSnippet, fileLabel) {
  if (!source.includes(expectedSnippet)) {
    throw new Error(`${fileLabel} is missing expected snippet:\n${expectedSnippet}`);
  }
}

function assertRuntimeBeforeBootstrap(html, runtimeScriptPath, bootstrapScriptPath, fileLabel) {
  const runtimeTag = `<script src="${runtimeScriptPath}"></script>`;
  const bootstrapTag = `<script src="${bootstrapScriptPath}"></script>`;
  const runtimeIndex = html.indexOf(runtimeTag);
  const bootstrapIndex = html.indexOf(bootstrapTag);

  if (runtimeIndex < 0 || bootstrapIndex < 0 || runtimeIndex > bootstrapIndex) {
    throw new Error(`${fileLabel} must load ${runtimeScriptPath} before ${bootstrapScriptPath}`);
  }
}

function main() {
  const runtimeSource = readRequiredFile('cpl/bootstrap-runtime.js');
  assertContains(
    runtimeSource,
    "appendScript('../dupr-format.js', loadAppScript, loadAppScript);",
    'cpl/bootstrap-runtime.js',
  );
  assertContains(
    runtimeSource,
    'window.initCplBootstrap = function initCplBootstrap',
    'cpl/bootstrap-runtime.js',
  );

  const localBootstrap = readRequiredFile('cpl/local/bootstrap.js');
  const travelBootstrap = readRequiredFile('cpl/travel/bootstrap.js');
  assertContains(localBootstrap, 'window.initCplBootstrap({ divisions: DIVISIONS, config: CONFIG });', 'cpl/local/bootstrap.js');
  assertContains(travelBootstrap, 'window.initCplBootstrap({ divisions: DIVISIONS, config: CONFIG });', 'cpl/travel/bootstrap.js');

  const localHtml = readRequiredFile('cpl/local/index.html');
  const travelHtml = readRequiredFile('cpl/travel/index.html');
  const rootHtml = readRequiredFile('cpl/index.html');
  const auditHtml = readRequiredFile('cpl/dupr-audit/index.html');
  assertRuntimeBeforeBootstrap(localHtml, '../bootstrap-runtime.js', 'bootstrap.js', 'cpl/local/index.html');
  assertRuntimeBeforeBootstrap(travelHtml, '../bootstrap-runtime.js', 'bootstrap.js', 'cpl/travel/index.html');
  assertRuntimeBeforeBootstrap(rootHtml, 'bootstrap-runtime.js', 'local/bootstrap.js', 'cpl/index.html');
  assertRuntimeBeforeBootstrap(rootHtml, 'bootstrap-runtime.js', 'travel/bootstrap.js', 'cpl/index.html');
  assertRuntimeBeforeBootstrap(auditHtml, '../bootstrap-runtime.js', '../local/bootstrap.js', 'cpl/dupr-audit/index.html');
  assertRuntimeBeforeBootstrap(auditHtml, '../bootstrap-runtime.js', '../travel/bootstrap.js', 'cpl/dupr-audit/index.html');

  console.log('Bootstrap runtime wiring checks passed.');
}

try {
  main();
} catch (error) {
  console.error(`Bootstrap runtime wiring check failed: ${error.message}`);
  process.exit(1);
}
