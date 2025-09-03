#! /usr/bin/env sh

testTypesCmd=''
exitCode=0

if [ "${1}" = '--one-target' ]; then
  testTypesCmd='tstyche --target 5.9'
else
  testTypesCmd='testSupportedTSVersions'
fi

for d in ./test-types/*; do
  printf 'Testing %s\n' "${d}\n"

  # shellcheck disable=SC2086
  # sc recommends us using a function instead of building the command, but I
  # find that to be less readable, so disabling it here
  if ! pnpm exec ${testTypesCmd} --config "${d}/tstyche.config.json"; then
    exitCode=1
  fi
  printf "\n\n"
done

if [ ${exitCode} -ne 0 ]; then
  printf '\ntype tests failed\n\n' >&2
  exit ${exitCode}
else
  printf '\ntype tests succeeded!\n'
fi
