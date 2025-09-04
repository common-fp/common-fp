This folder contains dependencies which have been copied in here. Their
respective Licenses are listed in the root license.txt file.

Modifications to their source code are listed here

1. vfs-slim.mjs

- this file is the output of scripts/build-resources/build-vfs-slim/index.mjs

  This was necessary to get around an issue next.js was having while processing
  the dependency. See this issue for more info

  https://github.com/microsoft/TypeScript-Website/pull/3022

2. traverser.mjs

- this file was copied from eslint at
  https://github.com/eslint/eslint/blob/b04b84bc17d4aaaea1326cb08196593624db02a2/lib/shared/traverser.js

  I modified it to use esm and remove the debug log

  I copied it since I wanted to traverse the espree ast and figured I'd do it
  how eslint does.
