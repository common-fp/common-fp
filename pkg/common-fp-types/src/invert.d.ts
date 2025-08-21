import type { KeyedCollection, ObjectKey } from '@common-fp/shared-types'

export default function <C extends KeyedCollection>(
  collection: C
): C extends ReadonlyMap<infer K, infer V> ? Map<V, K>
: {
    -readonly [K in keyof C as K extends ObjectKey ?
      C[K] extends ObjectKey ?
        C[K]
      : never
    : never]: K
  }
