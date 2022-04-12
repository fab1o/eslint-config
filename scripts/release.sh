#! /bin/sh

. ./scripts/colors.sh --source-only

release()
{
    PKG=$1
    VER=$2

    color $PKG

    # Inform the user
    echo "Releasing ${COLOR}eslint-config-$PKG${NO_COLOR} - version: ${CYAN_COLOR}$VER${NO_COLOR}"

    # Go to package folder
    cd packages/eslint-config-${PKG}

    echo "From folder: $(pwd)"
    echo Working...

    # Calling np
    np $VER

    # Getting the version from package.json
    PACKAGE_VERSION=$(cat package.json \
    | grep version \
    | head -1 \
    | awk -F: '{ print $2 }' \
    | sed 's/[",]//g' \
    | tr -d '[[:space:]]')

    # Commit to repo
    git add .
    git commit -m "$PACKAGE_VERSION"

    # Go to root folder
    cd ..
    cd ..
}
