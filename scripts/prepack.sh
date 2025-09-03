#! /usr/bin/env sh

pkgName="${1}"

case "${pkgName}" in
  common-fp|common-fp-types|shared-internals|shared-internals-types|shared-types)
    # success
    ;;
  *)
    echo "invalid package name passed '${pkgName}'"
    exit 1
    ;;
esac

pnpm install --filter "${pkgName}"
pnpm build --filter "${pkgName}"

cp package.json package.json.bak
pnpm lean-package -i package.json -o package.json

if [ -e "license.txt" ]; then
  cp license.txt license.txt.bak
else
  cp ../../license.txt .
fi
