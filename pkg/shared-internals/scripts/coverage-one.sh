#! /usr/bin/env sh

# example call:
# pnpm coverage-one to-english-list.mjs

fname="${1}"

c8 --include "src/${fname}" --exclude "" pnpm test-one "test/cases/${fname}"
