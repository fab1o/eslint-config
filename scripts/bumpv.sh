#! /bin/sh

bumpv(){

    # Bump the version of the parent
    npm version $VERSION -m "%s"

    PACKAGE_VERSION=$(cat package.json \
    | grep version \
    | head -1 \
    | awk -F: '{ print $2 }' \
    | sed 's/[",]//g' \
    | tr -d '[[:space:]]')

    git add .
    git commit -m "$PACKAGE_VERSION"
}
