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
        "@fab1o/eslint-config-base/addon/jsdoc",
        "@fab1o/eslint-config-base/addon/mocha",
        "@fab1o/eslint-config-base/addon/jest",
        "@fab1o/eslint-config-base/addon/promise",
        "@fab1o/eslint-config-typescript/addon/prettier"
    ]
}
```

Or

```json
{
    "extends": "@fab1o/eslint-config-typescript/all"
}
```

### Custom Configuration

By installing this package or React package, you have access to all this:

-   `"@fab1o/eslint-config-typescript"` is ES6 base + TypeScript
-   `"@fab1o/eslint-config-typescript/only"` is TypeScript only
-   `"@fab1o/eslint-config-typescript/all"` is ES6 base + TypeScript + all add-ons
-   `"@fab1o/eslint-config-typescript/addon/prettier"` is Prettier for TypeScript only

Plus, you also have access to all the [base configurations](../eslint-config-base#custom-configuration).
