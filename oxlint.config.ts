import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss';
import { defineConfig } from 'oxlint';

export default defineConfig({
  overrides: [
    {
      files: ['**/*.{js,jsx,ts,tsx,mjs,cjs}'],
      jsPlugins: ['@tanstack/eslint-plugin-query', 'eslint-plugin-better-tailwindcss'],
      rules: {
        'eslint/no-unused-vars': 'error',
        'eslint/curly': 'warn',
        // TypeScript rules
        'typescript/consistent-type-imports': ['error', { prefer: 'type-imports' }],
        'typescript/no-explicit-any': 'warn',
        // --- React rules ---
        'react/exhaustive-deps': 'error',
        'react/rules-of-hooks': 'error',
        'react/jsx-key': 'error',
        'react/no-array-index-key': 'warn',
        'react/jsx-curly-brace-presence': 'warn',
        // --- TanStack Query rules ---
        '@tanstack/query/exhaustive-deps': 'error',
        '@tanstack/query/no-rest-destructuring': 'error',
        '@tanstack/query/stable-query-client': 'error',
        '@tanstack/query/no-unstable-deps': 'error',
        '@tanstack/query/infinite-query-property-order': 'error',
        '@tanstack/query/no-void-query-fn': 'error',
        '@tanstack/query/mutation-property-order': 'error',
        '@tanstack/query/prefer-query-options': 'error',
        // --- Better Tailwind CSS rules ---
        ...eslintPluginBetterTailwindcss.configs.recommended.rules,
        'better-tailwindcss/enforce-consistent-line-wrapping': [
          'warn',
          { printWidth: 100, strictness: 'loose' },
        ],
      },
    },
  ],
  settings: {
    'better-tailwindcss': {
      entryPoint: 'src/styles.css',
      detectComponentClasses: true,
    },
  },
});
