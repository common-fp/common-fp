import type { MutableEntryCollection } from '@common-fp/shared-types'

export default function <
  C1 extends MutableEntryCollection<K, V>,
  V = unknown,
  K = unknown,
>(
  mapperFn: (value: V, key: K, collection: C1) => V
): <C2 extends C1>(collection: C2) => C2
