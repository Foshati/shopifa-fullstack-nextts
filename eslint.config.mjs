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
    // قوانین TypeScript برای جلوگیری از خطاهای رایج
    rules: {
      // قوانین مربوط به Promise ها
      '@typescript-eslint/no-misused-promises': 'warn', // هشدار برای استفاده نامناسب از Promise‌ها
      '@typescript-eslint/no-floating-promises': 'warn', // تغییر به warn برای شروع آسان‌تر
      '@typescript-eslint/await-thenable': 'warn', // هشدار برای await روی مقادیر غیر Promise

      // قوانین مربوط به type safety
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          // هشدار برای متغیرهای استفاده نشده
          argsIgnorePattern: '^_', // نادیده گرفتن آرگومان‌هایی که با _ شروع می‌شوند
          varsIgnorePattern: '^_', // نادیده گرفتن متغیرهایی که با _ شروع می‌شوند
        },
      ],
      '@typescript-eslint/no-unsafe-return': 'warn', // تغییر به warn برای شروع آسان‌تر

      // قوانین اضافی مفید برای Next.js 15
      '@typescript-eslint/no-explicit-any': 'warn', // هشدار برای استفاده از any
      '@typescript-eslint/explicit-function-return-type': 'off', // عدم نیاز به تعیین صریح نوع برگشتی توابع
      '@typescript-eslint/no-empty-function': 'warn', // هشدار برای توابع خالی
      'react-hooks/rules-of-hooks': 'error', // الزام به رعایت قوانین React Hooks
      'react-hooks/exhaustive-deps': 'warn', // هشدار برای وابستگی‌های ناقص در useEffect
      'react/prop-types': 'off', // غیرفعال کردن prop-types چون از TypeScript استفاده می‌کنیم
      'react/react-in-jsx-scope': 'off', // در Next.js 15 نیازی به import React نیست
      'react/display-name': 'off', // غیرفعال کردن اجبار displayName

      // قوانین مربوط به import
      'import/no-anonymous-default-export': 'warn', // هشدار برای export default بدون نام
      'import/no-duplicates': 'warn', // هشدار برای import‌های تکراری

      // قوانین عمومی JavaScript
      'no-console': ['warn', { allow: ['warn', 'error'] }], // هشدار برای console.log اما اجازه console.warn/error
      'prefer-const': 'warn', // استفاده از const به جای let اگر متغیر تغییر نمی‌کند
    },
  },

  // قوانین خاص برای فایل‌های مختلف
  {
    files: ['app/**/*.tsx', 'app/**/*.ts'],
    rules: {
      // قوانین سختگیرانه‌تر برای کامپوننت‌های صفحه
      'react/no-children-prop': 'error', // ممانعت از ارسال children به عنوان prop
    },
  },

  // قوانین متفاوت برای فایل‌های تست
  {
    files: ['**/*.test.ts', '**/*.test.tsx'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off', // اجازه استفاده از any در تست‌ها
      'no-console': 'off', // اجازه استفاده از console در تست‌ها
    },
  },
];

export default eslintConfig;
