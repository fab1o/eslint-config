// prettier eslint
const prettier = require('./config');

module.exports = {
    extends: 'plugin:prettier/recommended',
    rules: {
        'prettier/prettier': ['error', prettier]
    }
};
