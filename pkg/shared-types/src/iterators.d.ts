import type { Collection } from './collection.d.ts'
import type { UnknownArray, UnknownRecord } from './unknown-types.d.ts'

type CollectionEntriesIterator<C extends Collection> =
  C extends ReadonlyArray<infer V>
    ? IterableIterator<[number, V]>
    : C extends ReadonlyMap<infer K, infer V>
      ? IterableIterator<[K, V]>
      : C extends ReadonlySet<infer V>
        ? IterableIterator<[V, V]>
        : C extends Record<PropertyKey, infer V>
          ? // entries only iterates over own enumerable string keys
            IterableIterator<[string, V]>
          : never

type CollectionKeysIterator<C extends Collection> = C extends UnknownArray
  ? IterableIterator<number>
  : C extends ReadonlyMap<infer K, unknown>
    ? IterableIterator<K>
    : C extends ReadonlySet<infer V>
      ? IterableIterator<V>
      : C extends UnknownRecord
        ? IterableIterator<string>
        : never

export type { CollectionEntriesIterator, CollectionKeysIterator }
