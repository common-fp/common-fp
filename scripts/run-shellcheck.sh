#! /usr/bin/env sh

sc11Url='https://github.com/koalaman/shellcheck/releases/download/v0.11.0/shellcheck-v0.11.0.linux.x86_64.tar.xz'

mkdir -p ./deps
if [ ! -e './deps/shellcheck-v0.11.0' ]; then
  curl -s --location "${sc11Url}" | tar -x --xz --directory ./deps
fi

scPath="./deps/shellcheck-v0.11.0/shellcheck"
shellFpaths=$(git ls-files | grep -P '\.sh$')
# shellcheck disable=SC2086
# if we quote here, the list of paths will be interepreted as one string
${scPath} ${shellFpaths}
