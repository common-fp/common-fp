#! /usr/bin/env sh

# reverse the damage done in prepack
mv package.json.bak package.json
rm license.txt

if [ -e "license.txt.bak" ]; then
  mv license.txt.bak license.txt
fi
