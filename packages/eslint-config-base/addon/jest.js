// jest

module.exports = {
    extends: 'plugin:jest/all',
    env: {
        jest: true
    },
    rules: {
        'jest/prefer-expect-assertions': 'off',
        'jest/no-try-expect': 'off',
        'jest/valid-title': 'off',
        'jest/lowercase-name': 'off',
        'jest/no-hooks': 'off'
    }
};
