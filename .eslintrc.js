module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'vue', 'no-relative-import-paths'],
  rules: {
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-relative-import-paths/no-relative-import-paths': ['error', { allowSameFolder: false, prefix: '~' }],
    'vue/valid-v-slot': ['error', { allowModifiers: true }],
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
  },
  overrides: [
    {
      files: ['i18n/*.json', 'i18n/*.js'],
      rules: {
        'sort-keys': ['error', 'asc', { caseSensitive: true, minKeys: 2, natural: false }],
      },
    },
    {
      files: ['*.test.ts', '*.spec.ts'],
      rules: {
        'no-unused-expressions': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
      },
    },
  ],
  ignorePatterns: ['**tests/mock/*.ts'],
}
