# @fab1o/eslint-config-babel

💛💛💛

The Babel ESLint configuration for JavaScript engineers running Babel.

### Usage

```sh
npm install --save-dev @fab1o/eslint-config-babel
```

#### .eslintrc.json

```json
{
    "extends": [
        "@fab1o/eslint-config-babel",
        "@fab1o/eslint-config-base/addon/jsdoc",
        "@fab1o/eslint-config-base/addon/mocha",
        "@fab1o/eslint-config-base/addon/jest",
        "@fab1o/eslint-config-base/addon/promise",
        "@fab1o/eslint-config-babel/addon/prettier"
    ]
}
```

Or

```json
{
    "extends": "@fab1o/eslint-config-babel/all"
}
```

### Custom Configuration

By installing this package or React package, you have access to all this:

-   `"@fab1o/eslint-config-babel"` is ES6 base + Babel
-   `"@fab1o/eslint-config-babel/only"` is Babel only
-   `"@fab1o/eslint-config-babel/all"` is ES6 base + Babel + all add-ons
-   `"@fab1o/eslint-config-babel/addon/prettier"` is Prettier for Babel only

Plus, you also have access to all the [base configurations](../eslint-config-base#custom-configuration).
