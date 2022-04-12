#! /bin/sh

NO_COLOR="\033[0m"
ERROR_RED="\033[0;31m"
VUE_GREEN="\033[0;32m"
BABEL_YELLOW="\033[0;33m"
TS_BLUE="\033[0;34m"
REACT_PURPLE="\033[0;35m"
CYAN_COLOR="\033[0;36m"
GRAY="\033[0;37m"

COLOR=$NO_COLOR

color() {
    PKG=$1

    if [[ $PKG = "base" ]]
    then
        COLOR=$GRAY
    elif [[ $PKG = "babel" ]]
    then
        COLOR=$BABEL_YELLOW
    elif [[ $PKG = "react" ]]
    then
        COLOR=$REACT_PURPLE
    elif [[ $PKG = "typescript" ]]
    then
        COLOR=$TS_BLUE
    elif [[ $PKG = "vue" ]]
    then
        COLOR=$VUE_GREEN
    fi
}
