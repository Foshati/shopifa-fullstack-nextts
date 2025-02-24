import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // پیکربندی‌های پایه Next.js
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  {
    // تنظیمات پارسر برای استفاده از اطلاعات تایپ
    languageOptions: {
      parser: {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'], // مسیر فایل tsconfig.json شما
        tsconfigRootDir: __dirname,
      },
    },

    // قوانین TypeScript برای جلوگیری از خطاهای رایج
    rules: {
      // قوانین مربوط به Promise ها
      '@typescript-eslint/no-misused-promises': 'warn',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/await-thenable': 'warn',

      // قوانین مربوط به type safety
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-unsafe-return': 'warn',

      // قوانین اضافی مفید برای Next.js 15
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-empty-function': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',

      // قوانین مربوط به import
      'import/no-anonymous-default-export': 'warn',
      'import/no-duplicates': 'warn',

      // قوانین عمومی JavaScript
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'warn',
    },
  },

  // قوانین خاص برای فایل‌های مختلف
  {
    files: ['app/**/*.tsx', 'app/**/*.ts'],
    rules: {
      'react/no-children-prop': 'error',
    },
  },

  // قوانین متفاوت برای فایل‌های تست
  {
    files: ['**/*.test.ts', '**/*.test.tsx'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'no-console': 'off',
    },
  },
];

export default eslintConfig;
