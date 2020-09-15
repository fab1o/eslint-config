# @fab1o/eslint-config-base

🤩🤩🤩

The ESLint configuration for JavaScript (ES6) engineers.

### Usage

```sh
npm install --save-dev @fab1o/eslint-config-base
```

#### .eslintrc.json

```json
{
    "extends": [
        "@fab1o/eslint-config-base",

        "@fab1o/eslint-config-base/addon/node",
        "@fab1o/eslint-config-base/addon/aws",
        "@fab1o/eslint-config-base/addon/disable",
        "@fab1o/eslint-config-base/addon/jsdoc",
        "@fab1o/eslint-config-base/addon/mocha",
        "@fab1o/eslint-config-base/addon/jest",
        "@fab1o/eslint-config-base/addon/promise",
        "@fab1o/eslint-config-base/addon/prettier"
    ]
}
```

Note: Make sure to put add-ons last in the extends array, so they get the chance to override other configs.

Or

```json
{
    "extends": "@fab1o/eslint-config-base/all"
}
```

Which includes all add-ons except `aws`.

### Custom Configuration

By installing this package or any other package, you have access to all this:

-   `"@fab1o/eslint-config-base"` - ES6 base only
-   `"@fab1o/eslint-config-base/all"` - ES6 base + all add-ons
-   `"@fab1o/eslint-config-base/addon/node"` - Node only
-   `"@fab1o/eslint-config-base/addon/aws"` - AWS & Node only
-   `"@fab1o/eslint-config-base/addon/disable"` - Disable only
-   `"@fab1o/eslint-config-base/addon/jest"` - Jest only
-   `"@fab1o/eslint-config-base/addon/jsdoc"` - JSDoc only
-   `"@fab1o/eslint-config-base/addon/mocha"` - Mocha only
-   `"@fab1o/eslint-config-base/addon/promise"` - Promise only
-   `"@fab1o/eslint-config-base/addon/prettier"` - Prettier for ES6 only

### Prettier Configuration

Create a `.prettierrc.js` file with the following content:

```js
const baseRules = require('@fab1o/eslint-config-babel/addon/prettier/config');

const newRules = {
    // your custom Prettier rules go here
};

module.exports = Object.assign(baseRules, newRules);
```
