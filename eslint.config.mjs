import js from '@eslint/js';
import globals from 'globals';
import configPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  
  js.configs.recommended,
  configPrettier,

  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {

      camelcase: ['error', { properties: 'always' }],

      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'prefer-const': 'error',
      'one-var': ['error', 'never'],

      'no-console': 'warn',
    },
  },
];
