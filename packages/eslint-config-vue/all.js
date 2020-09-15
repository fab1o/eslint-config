// base + babel + all

module.exports = {
    extends: [
        require.resolve('./index'),

        '@fab1o/eslint-config-base/addon/jsdoc',
        '@fab1o/eslint-config-base/addon/mocha',
        '@fab1o/eslint-config-base/addon/promise',
        '@fab1o/eslint-config-base/addon/jest',

        '@fab1o/eslint-config-base/addon/prettier'
    ]
};
