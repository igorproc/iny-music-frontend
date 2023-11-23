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
        '@typescript-eslint/ban-ts-comment': 'off',
        'comma-dangle': ['error', 'always-multiline'],
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'no-relative-import-paths/no-relative-import-paths': ['error', { allowSameFolder: false, prefix: '~' }],
        '@typescript-eslint/no-explicit-any': 'off',
        'vue/valid-v-slot': ['error', { allowModifiers: true }],
        'vue/multi-word-component-names': 'off',
        'vue/no-multiple-template-root': 'off',
        'vue/no-v-html': 'off',
        'vue/no-dupe-keys': 'off',
    },
    overrides: [
        {
            files: ['app/locales/*.json', 'app/locales/*.ts'],
            rules: {
                'sort-keys': ['error', 'asc', { caseSensitive: true, minKeys: 2, natural: false }],
            },
        },
    ],
}

