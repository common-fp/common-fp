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

# reverse the damage done in prepack
mv package.json.bak package.json
rm license.txt

if [ -e "license.txt.bak" ]; then
  mv license.txt.bak license.txt
fi
