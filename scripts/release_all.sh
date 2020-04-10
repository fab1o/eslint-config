#! /bin/sh

. ./scripts/release.sh --source-only

release_all()
{
    PACKAGES=$@
    for PKG in $PACKAGES
    do
        release $PKG $VERSION $COLOR
    done
}
