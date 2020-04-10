#! /bin/sh

validate_pkg()
{
    PKG=$1

    # Checking package type
    if [[ $PKG = "base" ]]
    then
        echo ""
    elif [[ $PKG = "babel" ]]
    then
        echo ""
    elif [[ $PKG = "react" ]]
    then
        echo ""
    elif [[ $PKG = "typescript" ]]
    then
        echo ""
    elif [[ $PKG = "legacy" ]]
    then
        echo ""
    elif [[ $PKG = "all" ]]
    then
        echo ""
    else
        echo ""
        echo ${ERROR_RED}
        echo "Type the name of the package at the end of the command:"
        echo "base | babel | react | typescript | legacy | all"
        echo ${NO_COLOR}
        exit 1
    fi
}
