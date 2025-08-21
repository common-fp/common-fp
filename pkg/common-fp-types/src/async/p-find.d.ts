import type { Collection, CollectionValue } from '@common-fp/shared-types'

export default function <C1 extends Collection<V, K>, V = unknown, K = unknown>(
  predicate: (value: V, key: K, collection: C1) => Promise<boolean>
): <C2 extends C1>(collection: C2) => Promise<CollectionValue<C2> | undefined>
