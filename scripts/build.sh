#! /usr/bin/env sh

# these are in order.  We cannot use parallel
pkgs='shared-types
common-fp-types
shared-internals-types
shared-internals
common-fp
eslint-plugin-cfp-org
common-fp-org'

isLocalDev=false
if [ "${1}" = '--local-dev' ]; then
  isLocalDev=true
fi

for p in ${pkgs}; do
  if [ "${isLocalDev}" = 'true' ] && [ "${p}" = "common-fp-org" ]; then
    pnpm --filter "${p}" prebuild
    exitCode=$?
  else
    pnpm --filter "${p}" build
    exitCode=$?
  fi


  if [ $exitCode -ne 0 ]; then
    printf "\nerror when building package %s.  Rest of packages skipped\n" "${p}" >&2
    exit 1
  fi
done

printf '\ndone building all packages !'
