#! /usr/bin/env sh

scPath="./deps/shellcheck-v0.11.0/shellcheck"
shellFpaths=$(git ls-files | grep -P '\.sh$')
# shellcheck disable=SC2086
# if we quote here, the list of paths will be interepreted as one string
${scPath} ${shellFpaths}
