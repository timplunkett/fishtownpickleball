import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: [
      // Compiled per-division shards, now one directory deeper: cpl/<league>/<season>/.
      'cpl/local/*/data-*.js', 'cpl/local/*/detail-*.js', 'cpl/local/*/dupr-*.js',
      'cpl/travel/*/data-*.js', 'cpl/travel/*/detail-*.js', 'cpl/travel/*/dupr-*.js',
      'cpl/shared.js', // generated copy of _cpl/modules/shared.js
      'cpl/catalog.js', 'cpl/player-index.js', 'cpl/dupr-ratings.js',
      'cpl/archive/data.js', 'cpl/dupr-audit/data.js',
      'node_modules/**', '_site/**', 'vendor/**',
    ],
  },
  {
    files: ['_cpl/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: globals.node,
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-console': 'off',
    },
  },
  {
    files: ['cpl/app.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script',
      globals: {
        ...globals.browser,
        DATA: 'readonly',
        DIVISIONS: 'readonly',
        CPLShared: 'readonly',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
  {
    files: ['cpl/archive/archive.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script',
      globals: { ...globals.browser, CPLShared: 'readonly' },
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
  {
    // Generated: the per-season bootstrap and the per-league redirect stub.
    files: [
      'cpl/local/*/bootstrap.js', 'cpl/travel/*/bootstrap.js',
      'cpl/local/redirect.js', 'cpl/travel/redirect.js',
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script',
      globals: globals.browser,
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
];
