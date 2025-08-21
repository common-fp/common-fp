import type { CollectionKey, EntryCollection } from '@common-fp/shared-types'

export default function <
  C1 extends EntryCollection<K, V>,
  V = unknown,
  K = unknown,
>(
  predicate: (value: V, key: K, collection: C1) => boolean
): <C2 extends C1>(collection: C2) => CollectionKey<C2> | undefined
