/**
 * wrapping conditional checks in tuples prevents union types from expanding
 * e.g. boolean -> true | false
 */

import type { IfUnknownOrAny, IfEqual } from './if-types.d.ts'

// case #'s referred to in tests
type Collection<V = unknown, K = unknown> = [K] extends [IfUnknownOrAny<K>]
  ? readonly V[] | Record<PropertyKey, V> | ReadonlySet<V> | ReadonlyMap<K, V> // case 1
  : [K] extends [IfEqual<K, V>]
    ? [K] extends [number]
      ? readonly V[] | Record<number, V> | ReadonlySet<V> | ReadonlyMap<K, V> // case 2
      : [K] extends [PropertyKey]
        ? // case 3
          | Record<Extract<PropertyKey, K>, V>
            | ReadonlySet<V>
            | ReadonlyMap<K, V>
        : ReadonlySet<V> | ReadonlyMap<K, V> // case 4
    : // if K is not V
      [K] extends [number]
      ? readonly V[] | Record<number, V> | ReadonlyMap<K, V> // case 5
      : [K] extends [PropertyKey]
        ? Record<Extract<PropertyKey, K>, V> | ReadonlyMap<K, V> // case 6
        : ReadonlyMap<K, V> // case 7

type CollectionKey<C extends Collection> = C extends readonly unknown[]
  ? number
  : C extends ReadonlyMap<infer K, unknown>
    ? K
    : keyof C

type CollectionSubset<C extends Collection> =
  C extends ReadonlyArray<infer V>
    ? V[]
    : C extends ReadonlyMap<infer K, infer V>
      ? Map<K, V>
      : C extends ReadonlySet<infer V>
        ? Set<V>
        : Partial<C>

type CollectionValue<C extends Collection> = C extends
  | ReadonlyArray<infer V>
  | ReadonlyMap<unknown, infer V>
  ? V
  : C extends ReadonlySet<infer V>
    ? V
    : C extends Record<PropertyKey, infer V>
      ? V
      : never

type EntryCollection<K = unknown, V = unknown> = [K] extends [IfUnknownOrAny<K>]
  ? ReadonlyMap<K, V> | Record<PropertyKey, V> | readonly V[]
  : [K] extends [number]
    ? ReadonlyMap<K, V> | Record<K, V> | readonly V[]
    : [K] extends [PropertyKey]
      ? ReadonlyMap<K, V> | Record<K, V>
      : ReadonlyMap<K, V>

type KeyedCollection<K = unknown, V = unknown> = [K] extends [IfUnknownOrAny<K>]
  ? ReadonlyMap<K, V> | Record<PropertyKey, V>
  : [K] extends [PropertyKey]
    ? ReadonlyMap<K, V> | Record<K, V>
    : ReadonlyMap<K, V>

type MutableEntryCollection<K = unknown, V = unknown> = [K] extends [
  IfUnknownOrAny<K>,
]
  ? Map<K, V> | Record<PropertyKey, V> | V[]
  : [K] extends [number]
    ? Map<K, V> | Record<K, V> | V[]
    : [K] extends [PropertyKey]
      ? Map<K, V> | Record<K, V>
      : Map<K, V>

type MutableKeyedCollection<K = unknown, V = unknown> = [K] extends [
  IfUnknownOrAny<K>,
]
  ? Map<K, V> | Record<PropertyKey, V>
  : [K] extends [PropertyKey]
    ? Map<K, V> | Record<K, V>
    : Map<K, V>

type ValueCollection<V = unknown> = readonly V[] | ReadonlySet<V>

export type {
  Collection,
  CollectionKey,
  CollectionSubset,
  CollectionValue,
  EntryCollection,
  KeyedCollection,
  MutableEntryCollection,
  MutableKeyedCollection,
  ValueCollection,
}
