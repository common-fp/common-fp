## Common FP Types

This holds the types for `common-fp`.

I want to keep the types in a separate package for versioning purposes, as I
don't use typescript regularly and haven't ironed out how I want to manage it.

## Install

This package only ever makes sense with `common-fp`

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

You can also [try it out][tryit] in your browser.

[tryit]: https://common-fp.org/try-it#editorData=eyJjb2RlIjoiaW1wb3J0IHsgbWFwVmFsdWVzIH0gZnJvbSAnY29tbW9uLWZwJ1xuXG5jb25zdCBnaXZlRXZlcnlvbmVBbkFwcGxlID0gbWFwVmFsdWVzKChudW1BcHBsZXM6IG51bWJlcikgPT4gbnVtQXBwbGVzICsgMSlcblxuY29uc3QgYXBwbGVzUGVyUGVyc29uT2JqID0ge1xuICBtYXJ5OiAyLFxuICBzYXJhaDogMyxcbn1cblxuY29uc3QgcmVzdWx0T2JqID0gZ2l2ZUV2ZXJ5b25lQW5BcHBsZShhcHBsZXNQZXJQZXJzb25PYmopXG5zaG93KHJlc3VsdE9iailcbi8vIGEgbmV3IG9iamVjdCB7XG4vLyAgIG1hcnk6IDNcbi8vICAgc2FyYWg6IDRcbi8vIH0iLCJsYW5ndWFnZSI6InRzIiwidmVyc2lvbiI6MX0%3D
