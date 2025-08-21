import type { Collection } from '@common-fp/shared-types'

export default function <C1 extends Collection<V, K>, V = unknown, K = unknown>(
  fn: (value: V, key: K, collection: C1) => void
): <C2 extends C1>(collection: C2) => C2
