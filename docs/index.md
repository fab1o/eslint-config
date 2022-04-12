# ESLint for Everyone

💛💚💜

ESLint configurations for everyone.

## Usage

Determine what your project runs: React, Babel, TypeScript or a combination of them.

### React

#### Step 1: Install the appropriate package

```sh
npm install --save-dev @eslint-config-react
```

The React package also contains Babel and TypeScript packages. So you do not need to install them separately.

#### Step 2: Write ESLint configuration file

```json
{
    "extends": ["@fab1o/eslint-config-react/all"]
}
```

This gives us the most basic rules for a React project. However, you might need specific TypeScript or Babel rules as well.

#### Step 3: Edit your ESlint configuration file to use React with TypeScript

If you are running React with TypeScript, use the configuration below as an example:

```json
{
    "extends": ["@fab1o/eslint-config-react/typescript/all"]
}
```

But if you are running React with Babel, use the configuration below instead:

```json
{
    "extends": ["@fab1o/eslint-config-react/babel/all"]
}
```

For more specific rules, check out more examples: https://github.bamtech.co/Web/dss-eslint-config/tree/master/packages/eslint-config-react

### Babel

```sh
npm install --save-dev @fab1o/eslint-config-babel
```

Then, use the configuration below:

```json
{
    "extends": ["@fab1o/eslint-config-babel/all"]
}
```

### TypeScript

```sh
npm install --save-dev @fab1o/eslint-config-typescript
```

Then, use the configuration below:

```json
{
    "extends": ["@fab1o/eslint-config-typescript/all"]
}
```

### Combining Babel and TypeScript

If you want to combine Babel, TypeScript and React all together, use the configuration below:

```json
{
    "extends": ["@fab1o/eslint-config-react/babel/all", "@fab1o/eslint-config-react/typescript/only"]
}
```

As you could see, the React package also contains Babel and TypeScript packages.
But if you are running both Babel and TypeScript without React, you will need to install them separately.

```sh
npm install --save-dev @fab1o/eslint-config-babel @fab1o/eslint-config-typescript
```

Then, use the configuration below:

```json
{
    "extends": ["@fab1o/eslint-config-babel/all", "@fab1o/eslint-config-typescript/only"]
}
```

All the examples of configuration above use the `/all` extension. This includes all of the following add-ons:

### Add-ons

-   Node
-   AWS
-   Disable
-   Jest
-   JSDoc
-   Mocha
-   Promise
-   Prettier
-   React Hooks

But if you do not want to include all of these add-ons, you can cherry pick.

Example of configuration for a React+Babel project with all the add-ons you can cherry pick:

```json
{
    "extends": [
        "@fab1o/eslint-config-react/babel",

        "@fab1o/eslint-config-base/addon/node",
        "@fab1o/eslint-config-base/addon/aws",
        "@fab1o/eslint-config-base/addon/disable",
        "@fab1o/eslint-config-react/addon/hooks",
        "@fab1o/eslint-config-react/addon/jsdoc",
        "@fab1o/eslint-config-base/addon/mocha",
        "@fab1o/eslint-config-base/addon/jest",
        "@fab1o/eslint-config-base/addon/promise",

        "@fab1o/eslint-config-babel/addon/prettier"
    ]
}
```

Example of configuration for a React+TypeScript project with all the add-ons you can cherry pick:

```json
{
    "extends": [
        "@fab1o/eslint-config-react/typescript",

        "@fab1o/eslint-config-base/addon/node",
        "@fab1o/eslint-config-base/addon/aws",
        "@fab1o/eslint-config-base/addon/disable",
        "@fab1o/eslint-config-react/addon/hooks",
        "@fab1o/eslint-config-react/addon/jsdoc",
        "@fab1o/eslint-config-base/addon/mocha",
        "@fab1o/eslint-config-base/addon/jest",
        "@fab1o/eslint-config-base/addon/promise",

        "@fab1o/eslint-config-typescript/addon/prettier"
    ]
}
```

Example of configuration for a Babel project with all the add-ons you can cherry pick:

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

Example of configuration for a TypeScript project with all the add-ons you can cherry pick:

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

Example of configuration for a Babel+TypeScript project with all the add-ons you can cherry pick:

```json
{
    "extends": [
        "@fab1o/eslint-config-react/babel/all",
        "@fab1o/eslint-config-react/typescript/only",

        "@fab1o/eslint-config-base/addon/node",
        "@fab1o/eslint-config-base/addon/aws",
        "@fab1o/eslint-config-base/addon/disable",
        "@fab1o/eslint-config-base/addon/jsdoc",
        "@fab1o/eslint-config-base/addon/mocha",
        "@fab1o/eslint-config-base/addon/jest",
        "@fab1o/eslint-config-base/addon/promise",

        "@fab1o/eslint-config-babel/addon/prettier"
        "@fab1o/eslint-config-typescript/addon/prettier"
    ]
}
```

-   Note: Prettier uses different configurations for TypeScript and Babel.
-   Note: Make sure to put add-ons last in the extends array, so they get the chance to override other configs.

### Prettier Configuration

Create a `.prettierrc.js` file with the following content:

```js
const baseRules = require('@fab1o/eslint-config-base/addon/prettier/config');
const newRules = {
    // your custom Prettier rules go here
};

module.exports = Object.assign(baseRules, newRules);
```
