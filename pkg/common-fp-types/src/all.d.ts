// this type is the same as ./any.  We're copying it so we don't expose a
// generally named type AnyOrEvery which would be less clear

import type { Collection } from '@common-fp/shared-types'

export default function <C1 extends Collection<V, K>, V = unknown, K = unknown>(
  predicate: (value: V, key: K, collection: C1) => boolean
): <C2 extends C1>(collection: C2) => boolean
