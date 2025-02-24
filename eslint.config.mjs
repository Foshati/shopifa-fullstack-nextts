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
    // قوانین ساده‌تر که به اطلاعات تایپ نیاز ندارند
    rules: {
      // قوانین مرتبط با type information غیرفعال شده‌اند
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/await-thenable': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',

      // قوانین باقی‌مانده که به اطلاعات تایپ نیاز ندارند
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-function': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
      'import/no-anonymous-default-export': 'warn',
      'import/no-duplicates': 'warn',
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
