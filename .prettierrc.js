const baseRules = require('./packages/eslint-config-base/addon/prettier/.prettierrc');
const newRules = {};

module.exports = Object.assign(baseRules, newRules);
