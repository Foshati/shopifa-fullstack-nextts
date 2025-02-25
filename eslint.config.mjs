import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  {
    rules: {
      // TypeScript Rules
      '@typescript-eslint/no-misused-promises': 'warn',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/array-type': ['warn', { default: 'array-simple' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],

      // React Rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-curly-brace-presence': ['warn', 'never'],
      'react/jsx-no-useless-fragment': 'warn',

      // General Rules
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
        },
      ],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'warn',
    },
  },

  {
    files: ['app/**/*.tsx', 'app/**/*.ts'],
    rules: {
      'react/no-children-prop': 'error',
    },
  },

  {
    files: ['**/*.test.ts', '**/*.test.tsx'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'off',
    },
  },

  {
    ignores: ['node_modules/', '.next/', 'out/', '*.d.ts'],
  },
];

export default eslintConfig;
