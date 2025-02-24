import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import typescriptEslintParser from '@typescript-eslint/parser';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactHooks from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  eslint.configs.recommended,
  {
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
  },
  ...compat.extends(
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'react-hooks': reactHooks,
      import: importPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // TypeScript Rules
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

      // React Rules
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-key': 'error',
      'react/jsx-no-target-blank': 'error',
      'react/self-closing-comp': ['error', { component: true, html: true }],

      // Import Rules
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/no-duplicates': 'error',
      'import/newline-after-import': 'error',

      // General JavaScript Rules
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      eqeqeq: 'error',
      curly: 'error',
      'arrow-body-style': ['error', 'as-needed'],

      // Prettier Integration
      'prettier/prettier': 'error',
    },
  },
  {
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
      react: {
        version: 'detect',
      },
    },
  },
];
