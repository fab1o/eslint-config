#! /bin/sh

. ./scripts/install.sh --source-only

install_all()
{
    PACKAGES=$@
    for PKG in $PACKAGES
    do
        install $PKG $VERSION $COLOR
    done
}
