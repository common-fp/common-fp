import type {
  EntryCollection,
  KeyedCollection,
  UnknownMap,
} from '@common-fp/shared-types'

type WithAddedKeyVal<K1, V1, C extends EntryCollection> =
  C extends ReadonlyArray<infer V2> ? Array<V1 | V2>
  : C extends ReadonlyMap<infer K2, infer V2> ? Map<K1 | K2, V1 | V2>
  : C extends Record<infer K2, infer V2> ?
    K1 extends PropertyKey ?
      Record<K1 | K2, V1 | V2>
    : never
  : never

declare function set<K1 extends number, const V1>(
  key: K1,
  val: V1
): <C extends EntryCollection>(collection: C) => WithAddedKeyVal<K1, V1, C>

declare function set<K1 extends PropertyKey, const V1>(
  key: K1,
  val: V1
): <C extends KeyedCollection>(collection: C) => WithAddedKeyVal<K1, V1, C>

declare function set<const K1, const V1>(
  key: K1,
  val: V1
): <C extends UnknownMap>(collection: C) => WithAddedKeyVal<K1, V1, C>

export default set
export type { WithAddedKeyVal }
