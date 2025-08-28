#! /usr/bin/env sh

testTypesCmd=''
exitCode=0

if [ "${1}" = '--one-target' ]; then
  testTypesCmd='tstyche --target 5.9'
else
  testTypesCmd='testSupportedTSVersions'
fi

for d in ./test-types/*; do
  echo -e "Testing ${d}\n"
  pnpm exec ${testTypesCmd} --config "${d}/tstyche.config.json"
  lastExitCode=$?
  if [ ${lastExitCode} -ne 0 ]; then
    exitCode=${lastExitCode}
  fi
  echo -e "\n"
done

if [ ${exitCode} -ne 0 ]; then
  echo -e '\ntype tests failed\n' >&2
  exit ${exitCode}
else
  echo -e '\ntype tests succeeded!'
fi
