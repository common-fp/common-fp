import type { Collection, CollectionValue } from '@common-fp/shared-types'

export default function <
  C1 extends Collection<V1, K>,
  R extends PropertyKey,
  V1 = unknown,
  K = unknown,
>(
  toGroup: (value: V1, key: K, collection: C1) => R
): <C2 extends C1>(collection: C2) => Record<R, CollectionValue<C2>[]>
