# ESLint Configuration

✅✅✅

The ESLint configuration for everyone. Based on [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

### Usage

Choose the configuration package for your environment:

-   [ESLint for React (Babel or TypeScript) engineers](/packages/eslint-config-react#dsseslint-config-react)
-   [ESLint for React (ES6) engineers](/packages/eslint-config-react#dsseslint-config-react)
-   [ESLint for Babel engineers](/packages/eslint-config-babel#dsseslint-config-babel)
-   [ESLint for TypeScript engineers](/packages/eslint-config-typescript#dsseslint-config-typescript)
-   [ESLint for JavaScript (ES6) engineers](/packages/eslint-config-base#dsseslint-config-base)

#### Running both Babel and TypeScript, without React?

-   [ESLint for Babel and TypeScript engineers](/Guide.md#eslint-for-everyone)

### Add-ons

-   Jest
-   JSDoc
-   Mocha
-   Promise
-   Prettier
-   React Hooks

## Collaboration

Execute the install script to install depedencies for all packages.

```sh
./install.sh all
```

Then run:

```sh
npm test && npm run prettier-lint
```

### Release

Check the [Release Guide](/Release.md).
