#! /bin/sh

PACKAGE=$1

. ./scripts/colors.sh --source-only
. ./scripts/intro.sh --source-only

. ./scripts/validate_pkg.sh --source-only
. ./scripts/install.sh --source-only
. ./scripts/install_all.sh --source-only

validate_pkg $PACKAGE

if [[ ${PACKAGE} = "all" ]]
then
    install_all base babel typescript react
else
    install $PACKAGE
fi

exit 0
