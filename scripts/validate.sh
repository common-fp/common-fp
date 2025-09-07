#! /usr/bin/env sh

rm -rf test-results

pnpm turbo run \
  --log-order grouped \
  --concurrency '100%' \
  '//#shellcheck' \
  lint \
  build \
  lint-built \
  prettier-check \
  test \
  test-full \
  coverage-check
