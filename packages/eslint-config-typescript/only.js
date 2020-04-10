// just ts

module.exports = {
    extends: 'plugin:@typescript-eslint/recommended',
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            tsx: true
        }
    },
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off'
    }
};
