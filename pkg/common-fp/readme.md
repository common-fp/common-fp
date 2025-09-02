<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./misc/header_dark.svg">
  <img alt="Welcome To Common FP" src="./misc/header_light.svg">
</picture>

<br>
<br>

Before you start, I suggest visiting [common-fp.org](https://common-fp.org)
instead. It has all the below information and looks better :)

![Full code coverage](./misc/coverage-badge.svg)

## Contents

- [Install](#install)
- [Use](#and-use)
- [Why Choose Common FP?](#why-choose-common-fp)
- [Why Not Choose Common FP?](#why-not-choose-common-fp)
- [Related Links](#related-links)

<br>

## Install

```sh
$ npm i common-fp

# using typescript?
$ npm i common-fp-types
```

<br>

## Use

```js
import { mapValues } from 'common-fp'

const giveEveryoneAnApple = mapValues(numApples => numApples + 1)

const applesPerPersonObj = {
  jason: 2,
  amy: 3,
}

const resultObj = giveEveryoneAnApple(applesPerPersonObj)
console.log(resultObj)
// a new object {
//   jason: 3,
//   amy: 4,
// }

// works on a Map as well (and arrays, and Sets)
const applesPerPersonMap = new Map([
  ['jason', 2],
  ['amy', 3],
])

const resultMap = giveEveryoneAnApple(applesPerPersonMap)
console.log(resultMap)
// a new Map [
//   ['jason', 3],
//   ['amy', 4],
// ]
```

<br>

## Why Choose Common FP?

You may find Common FP helpful if you...

- are looking for a utility library that works on data types generically.
  - For example, [mapValues](https://common-fp.org/docs/mapValues) can map over
    the values of an array, object, Map or Set, returning a new instance of the
    type you passed in.
- have run into limitations with chaining.
  - Chaining feels natural until you want to call a function outside the
    prototype. Then you either need to modify the prototype and account for
    collisions or use a different approach, such as function composition.
- are looking for a functional library but without the jargon.
  - In my experience, some functional concepts are a little too foreign for the
    broader community and pose a barrier to entry. Common FP attempts to lower
    that barrier by doing things such as naming the utilities in plain English,
    not currying, and keeping the source intended for the common devs' eyes.

<br>

## Why Not Choose Common FP?

Common FP is not for everyone. You may prefer other libraries if you...

- are content with your current utilities.
  - Common FP may feel odd and unnecessary to you. That's fine! Keep writing
    code in a way that's comfortable for you and your team.
- are already familiar with functional programming.
  - If [Ramda](https://ramdajs.com/) or [Sanctuary](https://sanctuary.js.org/)
    makes sense to you, then Common FP may feel watered down and missing what
    you like about functional programming.
- prefer less opinionated code.
  - Common FP is opinionated and will throw errors when you use it in an
    unintended way. For example, [mapValues](https://common-fp.org/docs/mapValues)
    requires you to pass a function, whereas Lodash provides a default. Calling
    mapValues without a function doesn't make sense to me; thus, I enforce that
    convention. This is one opinion of many that won't be shared by everyone -
    which is okay :)

<br>

## Related Links

- Learn more at [common-fp.org](https://common-fp.org)
- [Reference documentation](https://common-fp.org/docs)
- [Try it out in-browser](https://common-fp.org/try-it)
- [View the source](../../pkg/common-fp-types) for `common-fp-types`
- [Join our Discord](https://discord.gg/N8e7mtfwNM) or [raise a Github issue](https://github.com/common-fp/common-fp/issues/new) if you have questions, suggestions, or anything else.
