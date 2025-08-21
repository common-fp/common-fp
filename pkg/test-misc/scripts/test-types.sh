#! /usr/bin/env sh

target=''

if [ "${1}" = '--one-target' ]; then
  target='--target 5.9'
fi

parallel pnpm tstyche ${target} --config '{}/tstyche.config.json' ::: ./test-types/*

if [ $? -ne 0 ]; then
  echo -e '\ntype tests failed\n' >&2
  exit 1
else
  echo -e '\ntype tests succeeded!'
fi
