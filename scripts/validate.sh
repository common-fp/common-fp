#! /usr/bin/env sh

pnpm shellcheck \
  && pnpm build \
  && pnpm check-deps \
  && pnpm lint \
  && pnpm test-full \
  && pnpm -r coverage-check
