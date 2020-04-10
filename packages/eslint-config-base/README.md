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
        "@fab1o/eslint-config-base/addon/jsdoc",
        "@fab1o/eslint-config-base/addon/mocha",
        "@fab1o/eslint-config-base/addon/jest",
        "@fab1o/eslint-config-base/addon/promise",
        "@fab1o/eslint-config-base/addon/prettier"
    ]
}
```

Or

```json
{
    "extends": "@fab1o/eslint-config-base/all"
}
```

### Custom Configuration

By installing this package or any other package, you have access to all this:

-   `"@fab1o/eslint-config-base"` is ES6 base only
-   `"@fab1o/eslint-config-base/all"` is ES6 base + all add-ons
-   `"@fab1o/eslint-config-base/addon/jest"` is Jest only
-   `"@fab1o/eslint-config-base/addon/jsdoc"` is JSDoc only
-   `"@fab1o/eslint-config-base/addon/mocha"` is Mocha only
-   `"@fab1o/eslint-config-base/addon/promise"` is Promise only
-   `"@fab1o/eslint-config-base/addon/prettier"` is Prettier for ES6 only
