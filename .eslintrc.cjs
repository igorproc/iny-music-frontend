module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended',
        'plugin:import/errors',
        'plugin:import/warnings'
    ],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'parser': '@typescript-eslint/parser',
        'sourceType': 'module'
    },
    'plugins': ['@typescript-eslint', 'vue'],
    'rules': {
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'never'],
        'import/order': ['error', { 'newlines-between': 'always' }],
        'comma-dangle': 'off',
    }
}
