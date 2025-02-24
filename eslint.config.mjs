// eslint.config.mjs
import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
  {
    // Global settings
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  js.configs.recommended,
  nextPlugin.configs['recommended'],
  nextPlugin.configs['core-web-vitals'],
  {
    // TypeScript rules
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@next/next/no-img-element': 'off',
    },
  },
  {
    // Custom overrides
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'no-unused-vars': 'off',
      'import/no-unresolved': 'error',
      'no-empty-function': 'error',
      '@typescript-eslint/no-empty-function': 'error',
    },
  },
];
