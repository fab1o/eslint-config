# @fab1o/eslint-config-react

⚛️⚛️⚛️

The ESLint configuration for React engineers.

### Usage

```sh
npm install --save-dev @fab1o/eslint-config-react
```

#### .eslintrc.json

-   [React + ES6](#react--es6)
-   [React + Babel](#react--babel)
-   [React + TypeScript](#react--typescript)

#### React + ES6

```json
{
    "extends": [
        "@fab1o/eslint-config-react",
        "@fab1o/eslint-config-react/addon/hooks",
        "@fab1o/eslint-config-react/addon/jsdoc",
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
    "extends": "@fab1o/eslint-config-react/all"
}
```

#### React + Babel

```json
{
    "extends": [
        "@fab1o/eslint-config-react/babel",
        "@fab1o/eslint-config-react/addon/hooks",
        "@fab1o/eslint-config-react/addon/jsdoc",
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
    "extends": "@fab1o/eslint-config-react/babel/all"
}
```

#### React + TypeScript

```json
{
    "extends": [
        "@fab1o/eslint-config-react/typescript",
        "@fab1o/eslint-config-react/addon/hooks",
        "@fab1o/eslint-config-react/addon/jsdoc",
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
    "extends": "@fab1o/eslint-config-react/typescript/all"
}
```

### Custom Configuration

By installing this package, you have access to all this:

-   `"@fab1o/eslint-config-react"` is ES6 base + React
-   `"@fab1o/eslint-config-react/only"` is React only
-   `"@fab1o/eslint-config-react/babel"` is React for Babel
-   `"@fab1o/eslint-config-react/babel/all"` is React for Babel + all add-ons
-   `"@fab1o/eslint-config-react/typescript"` is React for TypeScript
-   `"@fab1o/eslint-config-react/typescript/all"` is React for TypeScript + all add-ons
-   `"@fab1o/eslint-config-react/addon/hooks"` is Hooks for React only
-   `"@fab1o/eslint-config-react/addon/jsdoc"` is JSDoc for React only
-   `"@fab1o/eslint-config-react/all"` is ES6 base + React + all add-ons
-   `"@fab1o/eslint-config-react/babel/addon/prettier"` is Prettier for Babel only
-   `"@fab1o/eslint-config-react/typescript/addon/prettier"` is Prettier for TypeScript only

Plus, you also have access to all the [base configurations](../eslint-config-base#custom-configuration),
all the [Babel configurations](../eslint-config-babel#custom-configuration),
and all the [TypeScript configurations](../eslint-config-typescript#custom-configuration).
