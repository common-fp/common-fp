import type {
  KeyedCollection,
  WithUnknownKeyType,
  WithPropertyKeyType,
} from '@common-fp/shared-types'

export default function <
  KAfter,
  C1 extends KeyedCollection<KBefore, V>,
  KBefore = unknown,
  V = unknown,
>(
  mapperFn: (value: V, key: KBefore, collection: C1) => KAfter
): [KAfter] extends [PropertyKey] ?
  <C2 extends C1>(collection: C2) => WithPropertyKeyType<C2, KAfter>
: <C2 extends ReadonlyMap<KBefore, V>>(
    collection: C2
  ) => WithUnknownKeyType<C2, KAfter>
