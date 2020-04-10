#! /bin/sh

validate_branch()
{
    BRANCH=$(git symbolic-ref HEAD | sed -e 's,.*/\(.*\),\1,')

    # Check if branch is master
    if [[ ! ($BRANCH = "master") ]]
    then
        echo ${ERROR_RED}
        echo "Switch to master to release."
        echo ${NO_COLOR}
        exit 1
    fi

    # Check if git status is clean
    if [ -n "$(git status --porcelain)" ]
    then
        echo ${ERROR_RED}
        echo "Your git status is not clean. Run git commit before proceeding.";
        echo ${NO_COLOR}
        exit 1
    fi
}
