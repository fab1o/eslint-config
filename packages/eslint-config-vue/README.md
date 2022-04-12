# @fab1o/eslint-config-vue

💚💚💚

The ESLint configuration for JavaScript engineers running Vue.

### Usage

```sh
npm install --save-dev @fab1o/eslint-config-vue
```

#### .eslintrc.json

```json
{
    "extends": [
        "@fab1o/eslint-config-vue",

        "@fab1o/eslint-config-base/addon/node",
        "@fab1o/eslint-config-base/addon/aws",
        "@fab1o/eslint-config-base/addon/jsdoc",
        "@fab1o/eslint-config-base/addon/mocha",
        "@fab1o/eslint-config-base/addon/jest",
        "@fab1o/eslint-config-base/addon/promise",

        "@fab1o/eslint-config-vue/addon/prettier"
    ]
}
```

Note: Make sure to put add-ons last in the extends array, so they get the chance to override other configs.

Or

```json
{
    "extends": "@fab1o/eslint-config-vue/all"
}
```

Which includes all add-ons except `aws`.

### Custom Configuration

By installing this package or React package, you have access to all this:

-   `"@fab1o/eslint-config-vue"` - ES6 base + Vue
-   `"@fab1o/eslint-config-vue/only"` - Vue only
-   `"@fab1o/eslint-config-vue/all"` - ES6 base + Vue + all add-ons
-   `"@fab1o/eslint-config-vue/addon/prettier"` - Prettier for Vue only

Plus, you also have access to all the [base configurations](../eslint-config-base#custom-configuration).

### Configuring Vue with Babel

```sh
npm install --save-dev @fab1o/eslint-config-babel @fab1o/eslint-config-vue
```

#### .eslintrc.json

```json
{
    "extends": [
        "@fab1o/eslint-config-babel"
        "@fab1o/eslint-config-vue/only",

        "@fab1o/eslint-config-base/addon/node",
        "@fab1o/eslint-config-base/addon/aws",
        "@fab1o/eslint-config-base/addon/jsdoc",
        "@fab1o/eslint-config-base/addon/mocha",
        "@fab1o/eslint-config-base/addon/jest",
        "@fab1o/eslint-config-base/addon/promise",

        "@fab1o/eslint-config-babel/addon/prettier"
    ]
}
```

### Prettier Configuration

Create a `.prettierrc.js` file with the following content:

```js
const baseRules = require('@fab1o/eslint-config-vue/addon/prettier/config');

const newRules = {
    // your custom Prettier rules go here
};

module.exports = Object.assign(baseRules, newRules);
```
