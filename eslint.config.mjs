import { dirname as pathDirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

// Resolve the current directory
const filename = fileURLToPath(import.meta.url);
const currentDirname = pathDirname(filename);

// Create a compatibility layer for legacy configs
const compat = new FlatCompat({ baseDirectory: currentDirname });

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ),
  {
    plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    rules: {
      // TypeScript
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/consistent-type-imports': 'error',
      // React
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/self-closing-comp': ['error', { component: true, html: true }],
      // Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      // General
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      // Prettier Integration
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
    env: {
      browser: true,
      node: true,
      es2022: true,
    },
    ignorePatterns: ['.next/', 'node_modules/'],
  },
];

export default eslintConfig;
