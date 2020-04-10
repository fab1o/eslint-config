// base + ts

module.exports = {
    extends: ['./base', './only'].map(require.resolve)
};
