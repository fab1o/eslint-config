#! /bin/sh

. ./scripts/colors.sh --source-only

install()
{
    PKG=$1

    color $PKG

    echo ${COLOR}
    echo "Installing eslint-config-${PKG}"
    echo ${NO_COLOR}
    cd packages/eslint-config-${PKG}
    npm i

    cd ..
    cd ..
}
