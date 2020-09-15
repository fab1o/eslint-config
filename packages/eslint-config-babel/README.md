# @fab1o/eslint-config-babel

💛💛💛

The ESLint configuration for JavaScript engineers running Babel.

### Usage

```sh
npm install --save-dev @fab1o/eslint-config-babel
```

#### .eslintrc.json

```json
{
    "extends": [
        "@fab1o/eslint-config-babel",

        "@fab1o/eslint-config-base/addon/node",
        "@fab1o/eslint-config-base/addon/aws",
        "@fab1o/eslint-config-base/addon/disable",
        "@fab1o/eslint-config-base/addon/jsdoc",
        "@fab1o/eslint-config-base/addon/mocha",
        "@fab1o/eslint-config-base/addon/jest",
        "@fab1o/eslint-config-base/addon/promise",

        "@fab1o/eslint-config-babel/addon/prettier"
    ]
}
```

Note: Make sure to put add-ons last in the extends array, so they get the chance to override other configs.

Or

```json
{
    "extends": "@fab1o/eslint-config-babel/all"
}
```

Which includes all add-ons except `aws`.

### Custom Configuration

By installing this package or React package, you have access to all this:

-   `"@fab1o/eslint-config-babel"` - ES6 base + Babel
-   `"@fab1o/eslint-config-babel/only"` - Babel only
-   `"@fab1o/eslint-config-babel/all"` - ES6 base + Babel + all add-ons
-   `"@fab1o/eslint-config-babel/addon/prettier"` - Prettier for Babel only

Plus, you also have access to all the [base configurations](../eslint-config-base#custom-configuration).

### Prettier Configuration

Create a `.prettierrc.js` file with the following content:

```js
const baseRules = require('@fab1o/eslint-config-base/addon/prettier/config');

const newRules = {
    // your custom Prettier rules go here
};

module.exports = Object.assign(baseRules, newRules);
```
