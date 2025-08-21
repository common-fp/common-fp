## Common FP Types

This hosts the source for `common-fp-types`, which is an optional peer
dependency to common-fp.

I want to keep the types in a separate package for versioning purposes, as I
don't use typescript regularly and haven't ironed out how I want to manage it.

## Install

This package only ever makes sense along with `common-fp`

```sh
$ npm i common-fp common-fp-types
```

## Use

_Note: `common-fp` redirects typescript to `commom-fp-types`_

```ts
import { mapValues } from 'common-fp'

const incrementAll = mapValues((i: number) => i + 1)

const result = incrementAll('string is invalid')
// typescript shows you incrementAll can't take a string
```
