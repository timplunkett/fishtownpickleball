import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: ['cpl/data.js', 'node_modules/**', '_site/**', 'vendor/**'],
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
      },
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
];
