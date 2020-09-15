// babel + vue + jsdoc + mocha + jest + prettier

module.exports = {
    extends: [
        '@fab1o/eslint-config-babel',
        require.resolve('../only'),

        '@fab1o/eslint-config-base/addon/jsdoc',
        '@fab1o/eslint-config-base/addon/mocha',
        '@fab1o/eslint-config-base/addon/jest',

        '@fab1o/eslint-config-babel/addon/prettier'
    ]
};
