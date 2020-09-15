// .prettierrc config
const baseRules = require('@fab1o/eslint-config-base/addon/prettier/config');

const newRules = {
    vueIndentScriptAndStyle: true
};

module.exports = Object.assign(baseRules, newRules);
