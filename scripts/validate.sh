#! /usr/bin/env sh

rm -rf test-results

pnpm turbo run \
  --log-order grouped \
  --concurrency 100% \
  '//#shellcheck' \
  lint \
  build \
  lint-built \
  test \
  test-full \
  coverage-check
