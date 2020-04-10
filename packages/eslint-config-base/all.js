// base + all

module.exports = {
    extends: [
        './index',
        './addon/node',
        './addon/jsdoc',
        './addon/mocha',
        './addon/promise',
        './addon/jest',
        './addon/prettier/index'
    ].map(require.resolve)
};
