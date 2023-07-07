// basic

module.exports = {
    extends: [
        './rules/best-practices',
        './rules/errors',
        './rules/style',
        './rules/variables',
        './rules/strict'
    ],
    parserOptions: {
        ecmaVersion: 5,
        requireConfigFile: false
    }
};
