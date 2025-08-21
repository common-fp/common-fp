#! /usr/bin/env sh

node --no-warnings=ExperimentalWarning \
  --watch-path ./code-examples \
  --watch-path ./scripts/pre-build \
  --watch-path ./app/misc/editor-types.d.ts \
  --watch-path ./misc/code-example-transforms.mjs \
  --watch-preserve-output \
  scripts/pre-build/index.mjs &
