// babel + react + hooks + jsdoc + mocha + jest + prettier

module.exports = {
    extends: [
        '@fab1o/eslint-config-babel',
        require.resolve('../only'),
        require.resolve('../addon/hooks'),
        require.resolve('../addon/jsdoc'),
        '@fab1o/eslint-config-base/addon/mocha',
        '@fab1o/eslint-config-base/addon/jest',
        require.resolve('./addon/prettier')
    ]
};
