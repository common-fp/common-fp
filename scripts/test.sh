#! /usr/bin/env sh

liteFullPkgs='common-fp
shared-internals
common-fp-types
shared-types
test-consumption'

pkgs='eslint-import-resolver-pjson-imports
prettier-plugin-comments
common-fp-org'

liteOrFull='full'
if [ "${1}" = '--lite' -o "${2}" = '--lite' ]; then
  liteOrFull=lite
fi

isParallel=true
if [ "${1}" = '--serial' -o "${2}" = '--serial' ]; then
  isParallel=false
fi


#
# test
#

if [ "${isParallel}" = 'true' ]; then
  parallel --tty -j+0 pnpm --filter '@common-fp/{}' test ::: ${pkgs}

  if [ $? -ne 0 ]; then
    echo -e "\nerror when testing packages" >&2
    echo -e "\nrun 'pnpm test-${liteOrFull} --serial' for easier debugging\n" >&2
    exit 1
  fi

  echo -e "\ndone with regular tests, now running ${liteOrFull} tests\n"

  parallel --tty -j+0 pnpm --filter '@common-fp/{}' "test-${liteOrFull}" ::: ${liteFullPkgs}

  if [ $? -ne 0 ]; then
    echo -e "\nerror when running test-${liteOrFull} on packages" >&2
    echo -e "\nrun 'pnpm test-${liteOrFull} --serial' for easier debugging\n" >&2
    exit 1
  fi

else
  for p in ${pkgs}; do
    pnpm --filter "@common-fp/${p}" test

    if [ $? -ne 0 ]; then
      echo -e "\nerror when testing package ${p}\n" >&2
      exit 1
    fi
  done

  echo -e "\ndone with regular tests, now running ${liteOrFull} tests\n"

  for p in ${liteFullPkgs}; do
    pnpm --filter "@common-fp/${p}" "test-${liteOrFull}"

    if [ $? -ne 0 ]; then
      echo -e "\nerror when running test-${liteOrFull} against package ${p}\n" >&2
      exit 1
    fi
  done
fi

echo -e '\n'
echo '---------------------------'
echo '|                         |'
echo '|   all tests passed :)   |'
echo '|                         |'
echo '---------------------------'
