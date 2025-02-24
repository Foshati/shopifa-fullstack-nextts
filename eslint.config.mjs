// eslint.config.mjs
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import tsPlugin from '@typescript-eslint/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Next.js core-web-vitals
  ...compat.extends('plugin:@next/next/core-web-vitals'),

  // ESLint recommended & TypeScript recommended
  js.configs.recommended,
  tsPlugin.configs.recommended,
  tsPlugin.configs['recommended-requiring-type-checking'],

  // Custom config
  {
    languageOptions: {
      parser: tsPlugin.parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      '@next/next': nextPlugin,
    },
    rules: {
      'import/named': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'import/no-unresolved': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-empty-function': 'error',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'off',
      '@next/next/no-img-element': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
    overrides: [
      {
        files: ['*.d.ts'],
        rules: {
          '@typescript-eslint/no-unused-vars': 'off',
        },
      },
      {
        files: ['app/(main)/blog/[slug]/page.tsx'],
        rules: {
          '@typescript-eslint/no-misused-promises': 'off',
          '@typescript-eslint/no-floating-promises': 'off',
          '@typescript-eslint/no-unused-vars': 'off',
          '@typescript-eslint/no-unsafe-return': 'off',
        },
      },
    ],
  },
];
