# example call:
# pnpm coverage-one lib/map-values.mjs

fpath="${1}"

c8 --include "src/${fpath}" --exclude "" pnpm test-one "test/cases/${fpath}"
