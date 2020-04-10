// prettier
const prettier = require('./.prettierrc');

const rules = {
    'prettier/prettier': ['error', prettier]
};

module.exports = {
    extends: 'plugin:prettier/recommended',
    rules
};
