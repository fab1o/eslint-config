#! /bin/sh

validate_version()
{
    VER=$1

    # Checking version type
    if [[ $VER = "major" ]]
    then
        echo ""
    elif [[ $VER = "minor" ]]
    then
        echo ""
    elif [[ $VER = "patch" ]]
    then
        echo ""
    else
        echo ${ERROR_RED}
        echo "Type the version at the end of the command:"
        echo "major | minor | patch"
        echo ${NO_COLOR}
        exit 1
    fi
}
