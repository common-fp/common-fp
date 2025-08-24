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
if [ "${1}" == '--local-dev' ]; then
  isLocalDev=true
fi

for p in ${pkgs}; do
  if [ "${isLocalDev}" = 'true' -a "${p}" = "common-fp-org" ]; then
    pnpm --filter "${p}" pre-build
  else
    pnpm --filter "${p}" build
  fi


  if [ $? -ne 0 ]; then
    echo -e "\nerror when building package ${p}.  Rest of packages skipped\n" >&2
    exit 1
  fi
done

echo -e '\ndone building all packages !'
