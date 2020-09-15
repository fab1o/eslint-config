# @fab1o/eslint-config-typescript

💙💙💙

The ESLint configuration for TypeScript engineers.

### Usage

```sh
npm install --save-dev @fab1o/eslint-config-typescript
```

#### .eslintrc.json

```json
{
    "extends": [
        "@fab1o/eslint-config-typescript",

        "@fab1o/eslint-config-base/addon/node",
        "@fab1o/eslint-config-base/addon/aws",
        "@fab1o/eslint-config-base/addon/disable",
        "@fab1o/eslint-config-base/addon/jsdoc",
        "@fab1o/eslint-config-base/addon/mocha",
        "@fab1o/eslint-config-base/addon/jest",
        "@fab1o/eslint-config-base/addon/promise",

        "@fab1o/eslint-config-typescript/addon/prettier"
    ]
}
```

Note: Make sure to put add-ons last in the extends array, so they get the chance to override other configs.

Or

```json
{
    "extends": "@fab1o/eslint-config-typescript/all"
}
```

Which includes all add-ons except `aws`.

### Custom Configuration

By installing this package or React package, you have access to all this:

-   `"@fab1o/eslint-config-typescript"` - ES6 base + TypeScript
-   `"@fab1o/eslint-config-typescript/only"` - TypeScript only
-   `"@fab1o/eslint-config-typescript/all"` - ES6 base + TypeScript + all add-ons
-   `"@fab1o/eslint-config-typescript/addon/prettier"` - Prettier for TypeScript only

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
