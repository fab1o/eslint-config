# ESLint for Everyone

🧡💚💜

The ESLint configuration for everyone.

### Usage

You can custom configure your ESLint setup. Example:

#### Babel and TypeScript

```sh
npm install --save-dev @fab1o/eslint-config-babel @fab1o/eslint-config-typescript
```

##### .eslintrc.json

```json
{
    "extends": ["@fab1o/eslint-config-babel/all", "@fab1o/eslint-config-typescript/only"]
}
```

Or

```json
{
    "extends": ["@fab1o/eslint-config-typescript/all", "@fab1o/eslint-config-babel/only"]
}
```

### Support

Check out [Migrating ESLint to v6.0.0](https://eslint.org/docs/user-guide/migrating-to-6.0.0).

Open an issue.
