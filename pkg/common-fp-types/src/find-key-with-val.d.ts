import type {
  CollectionKey,
  EntryCollection,
  KeyedCollection,
  Sequence,
} from '@common-fp/shared-types'

declare function findKeyWithVal(value: string): {
  <C extends Sequence<string> | KeyedCollection<unknown, string>>(
    collection: C
  ): C extends KeyedCollection ? CollectionKey<C> | undefined
  : number | undefined
}

declare function findKeyWithVal<V>(value: V): {
  <C extends EntryCollection<unknown, V>>(
    collection: C
  ): CollectionKey<C> | undefined
}

export default findKeyWithVal
