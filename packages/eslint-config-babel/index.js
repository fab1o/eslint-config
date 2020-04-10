// base + babel

module.exports = {
    extends: ['./base', './only'].map(require.resolve)
};
