#! /usr/bin/env sh

node --no-warnings=ExperimentalWarning \
  --watch-path ./code-examples \
  --watch-path ./scripts/build-resources \
  --watch-path ./app/misc/editor-types.d.ts \
  --watch-path ./misc/code-example-transforms.mjs \
  --watch-preserve-output \
  scripts/build-resources/index.mjs &
