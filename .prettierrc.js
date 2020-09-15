const baseRules = require('./packages/eslint-config-base/addon/prettier/config');

const newRules = {};

module.exports = Object.assign(baseRules, newRules);
