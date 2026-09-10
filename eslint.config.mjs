import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: [
      // Pure generated data — nothing here is worth linting, and bootstrap.js
      // / redirect.js below are deliberately NOT in this list: they're small
      // enough that a generator bug shows up as a real lint error, so they
      // stay linted from their new home in compiled/ (see package.json).
      'cpl/local/*/compiled/data-*.js', 'cpl/local/*/compiled/detail-*.js', 'cpl/local/*/compiled/dupr-*.js',
      'cpl/travel/*/compiled/data-*.js', 'cpl/travel/*/compiled/detail-*.js', 'cpl/travel/*/compiled/dupr-*.js',
      'cpl/compiled/shared.js', // generated copy of _cpl/modules/shared.js
      'cpl/compiled/catalog.js', 'cpl/compiled/player-index.js', 'cpl/compiled/dupr-ratings.js',
      'cpl/archive/compiled/data.js', 'cpl/dupr-audit/compiled/data.js',
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
      'cpl/local/*/compiled/bootstrap.js', 'cpl/travel/*/compiled/bootstrap.js',
      'cpl/local/compiled/redirect.js', 'cpl/travel/compiled/redirect.js',
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
