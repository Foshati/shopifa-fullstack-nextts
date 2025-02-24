import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const filename = fileURLToPath(import.meta.url);
const dirname = dirname(filename);
const compat = new FlatCompat({ baseDirectory: dirname });

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ),
  {
    plugins: {
      '@typescript-eslint': compat.plugin('@typescript-eslint/eslint-plugin'),
      react: compat.plugin('eslint-plugin-react'),
      'react-hooks': compat.plugin('eslint-plugin-react-hooks'),
      'jsx-a11y': compat.plugin('eslint-plugin-jsx-a11y'),
    },
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
      // TypeScript Rules
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',

      // React Rules
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/self-closing-comp': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // General Rules
      'no-console': 'warn',
      'no-undef': 'error',
      'no-unused-vars': 'off', // استفاده از نسخه TypeScript
      'prefer-const': 'error',

      // Prettier Integration
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'lf',
          semi: true,
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'all',
          printWidth: 120,
          jsxSingleQuote: true,
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
  },
];

export default eslintConfig;
