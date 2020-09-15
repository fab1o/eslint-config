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

        "@fab1o/eslint-config-base/addon/node",
        "@fab1o/eslint-config-base/addon/aws",
        "@fab1o/eslint-config-base/addon/disable",
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

Which includes all add-ons except `aws`.

#### React + Babel

```json
{
    "extends": [
        "@fab1o/eslint-config-react/babel",

        "@fab1o/eslint-config-react/addon/hooks",
        "@fab1o/eslint-config-react/addon/jsdoc",

        "@fab1o/eslint-config-base/addon/node",
        "@fab1o/eslint-config-base/addon/aws",
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

Which includes all add-ons except `aws`.

#### React + TypeScript

```json
{
    "extends": [
        "@fab1o/eslint-config-react/typescript",

        "@fab1o/eslint-config-react/addon/hooks",
        "@fab1o/eslint-config-react/addon/jsdoc",

        "@fab1o/eslint-config-base/addon/node",
        "@fab1o/eslint-config-base/addon/aws",
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
    "extends": "@fab1o/eslint-config-react/typescript/all"
}
```

Which includes all add-ons except `aws`.

### Custom Configuration

By installing this package, you have access to all this:

-   `"@fab1o/eslint-config-react"` - ES6 base + React
-   `"@fab1o/eslint-config-react/only"` - React only
-   `"@fab1o/eslint-config-react/babel"` - React for Babel
-   `"@fab1o/eslint-config-react/babel/all"` - React for Babel + all add-ons
-   `"@fab1o/eslint-config-react/typescript"` - React for TypeScript
-   `"@fab1o/eslint-config-react/typescript/all"` - React for TypeScript + all add-ons
-   `"@fab1o/eslint-config-react/addon/hooks"` - Hooks for React only
-   `"@fab1o/eslint-config-react/addon/jsdoc"` - JSDoc for React only
-   `"@fab1o/eslint-config-react/all"` - ES6 base + React + all add-ons
-   `"@fab1o/eslint-config-react/babel/addon/prettier"` - Prettier for Babel only
-   `"@fab1o/eslint-config-react/typescript/addon/prettier"` - Prettier for TypeScript only

Plus, you also have access to all the [base configurations](../eslint-config-base#custom-configuration),
all the [Babel configurations](../eslint-config-babel#custom-configuration),
and all the [TypeScript configurations](../eslint-config-typescript#custom-configuration).

### Prettier Configuration

Create a `.prettierrc.js` file with the following content:

```js
const baseRules = require('@fab1o/eslint-config-base/addon/prettier/config');

const newRules = {
    // your custom Prettier rules go here
};

module.exports = Object.assign(baseRules, newRules);
```

Replace `'@fab1o/eslint-config-base'` with either `'@fab1o/eslint-config-babel'` or `'@fab1o/eslint-config-typescript'` depending on your case.
