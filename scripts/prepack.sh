#! /usr/bin/env sh

pkgName="${1}"

pnpm install --filter "${pkgName}"
pnpm build --filter "${pkgName}"

cp package.json package.json.bak
pnpm lean-package --copy 'sideEffects' --input package.json --output package.json

if [ -e "license.txt" ]; then
  cp license.txt license.txt.bak
else
  cp ../../license.txt .
fi
