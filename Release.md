# Releases

## Order of Release

Respect the order when releasing all of the them at the same time:

1.  Base
2.  Babel
3.  TypeScript
4.  React

## Automated Release

Execute the release script to release a package with a version.

```
Package can be:
    base | babel | react | typescript | legacy | all

Version can be:
    patch | minor | major
```

### Examples

Release Babel

```sh
./release.sh babel major
```

Release all of them

```sh
./release.sh all patch
```

## Manual Release

Before you start, make sure:

-   You are on **master**;
-   You are in the root folder;
-   Do `git pull`;
-   Do `npm run prettier-lint`;
-   Do `npm test`.

1. Publish `eslint-config-base`.

```sh
cd packages
cd eslint-config-base

np
```

2. `git commit -m "X.X.X"` where X is the version number you chose when publishing base.

3. Publish `eslint-config-babel`:

```sh
cd ..
cd eslint-config-babel

np
```

4. `git commit -m "X.X.X"` where X is the version number you chose when publishing babel.

5. Publish `eslint-config-typescript`:

```sh
cd ..
cd eslint-config-typescript

np
```

6. `git commit -m "X.X.X"` where X is the version number you chose when publishing typescript.

7. Publish `eslint-config-react`:

```sh
cd ..
cd eslint-config-react

np
```

8. `git commit -m "X.X.X"` where X is the version number you chose when publishing react.

9. `npm install`

10. `npm version minor -m "%s"` or major

11. `git commit -m "X.X.X"` where X is the version number in root folder > package.json

12. `git push`

13. Create a new release on github, follow the pattern from earlier releases.
