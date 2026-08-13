import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: ['cpl/local/data.js', 'cpl/local/data-*.js', 'cpl/travel/data.js', 'cpl/travel/data-*.js', 'node_modules/**', '_site/**', 'vendor/**'],
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
      },
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
  {
    files: ['cpl/local/bootstrap.js', 'cpl/travel/bootstrap.js'],
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
