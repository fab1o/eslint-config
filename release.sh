#! /bin/sh

PACKAGE=$1
VERSION=$2

. ./scripts/colors.sh --source-only
. ./scripts/intro.sh --source-only

. ./scripts/bumpv.sh --source-only
. ./scripts/release.sh --source-only
. ./scripts/release_all.sh --source-only
. ./scripts/validate_branch.sh --source-only
. ./scripts/validate_pkg.sh --source-only
. ./scripts/validate_version.sh --source-only


validate_branch
validate_pkg $PACKAGE
validate_version $VERSION

if [[ ${PACKAGE} = "all" ]]
then
    release_all base babel typescript react
else
    release $PACKAGE $VERSION
fi

git push

exit 0
