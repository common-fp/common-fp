# Unplugin - Transform Import

This is an unplugin which transforms named imports to subpath exports.

e.g.

```js
// from
import { mapValues } from 'common-fp'

// to
import mapValues from 'common-fp/map-values'
```

## Why

[Barrel files][what-is-barrel-file] are convenient to use but hard on bundlers.
By transforming imports, we can write convenient code while telling bundlers to
skip the barrel.

I couldn't find a generic solution to this problem besides [babel-plugin-import][babel-plugin-import],
and I don't want devs to have to pull in babel for this. Therefore, I plan on
supporting this transform for major bundlers.

[what-is-barrel-file]: https://vercel.com/blog/how-we-optimized-package-imports-in-next-js#what-is-a-barrel-file?
[babel-plugin-import]: https://www.npmjs.com/package/babel-plugin-import
