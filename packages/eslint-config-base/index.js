// base

module.exports = {
    extends: [
        // 'eslint-config-airbnb-base',
        './rules/best-practices',
        './rules/errors',
        './rules/style',
        './rules/variables',
        './rules/es6',
        './rules/imports',
        './rules/strict'
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        requireConfigFile: false
    }
};
