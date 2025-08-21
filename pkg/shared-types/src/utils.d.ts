import type { Collection, KeyedCollection } from './collection.d.ts'
import type { UnknownArray, UnknownMap, UnknownSet } from './unknown-types.d.ts'

// "extends unknown" looks odd here, but is required here to get the behavior
// we're looking for.  i.e. ArrayOfSameType<string | number> results in
// (string[] | number[]) rather than (string | number)[]
type ArrayOfSameType<PossibleTypes> = PossibleTypes extends unknown
  ? ReadonlyArray<PossibleTypes>
  : never

type Falsey = false | null | undefined | '' | 0

type IsNotTuple<T> = T extends readonly [unknown, ...unknown[]] ? never : T
type IsTuple<T> = T extends readonly [unknown, ...unknown[]] ? T : never

type Nullish = undefined | null

type ObjectKey = string | number

type Sequence<V = unknown> = string | readonly V[]

type SequenceItem<S extends Sequence> =
  S extends ReadonlyArray<infer V> ? V : string

type SubSequence<S extends Sequence> =
  S extends ReadonlyArray<infer V> ? V[] : string

type ValueAtKey<C, K extends PropertyKey, FB = unknown> = K extends keyof C
  ? C[K]
  : FB

type ValueAtPath<C, P extends readonly PropertyKey[], FB = unknown> = (
  P extends readonly [infer K extends PropertyKey]
    ? C extends Record<K, unknown>
      ? C[K]
      : FB
    : P extends readonly [
          infer K extends PropertyKey,
          ...infer R extends readonly PropertyKey[],
        ]
      ? C extends Record<K, unknown>
        ? ValueAtPath<C[K], R, FB>
        : FB
      : FB
) extends infer O
  ? O
  : never
/**
 * note: the `extends infer O...` does nothing to the resulting type.  Its
 *   purpose is to add 'redirection' so the typescript compiler displays
 *   ValueAtPath<...> instead of the recursed calculated type which is
 *   unreadable.  More info here:
 *   https://stackoverflow.com/questions/74232694/how-can-i-get-intellisense-to-display-a-type-alias-instead-of-a-union-of-strings
 */

type WithUnknownKeyType<C extends UnknownMap, K> =
  C extends ReadonlyMap<unknown, infer V> ? Map<K, V> : never

type WithPropertyKeyType<C extends KeyedCollection, K extends PropertyKey> =
  C extends ReadonlyMap<unknown, infer V>
    ? Map<K, V>
    : C extends Record<PropertyKey, infer V>
      ? Record<K, V>
      : never

type WithValueType<C extends Collection, V> = C extends UnknownArray
  ? V[]
  : C extends ReadonlyMap<infer K, unknown>
    ? Map<K, V>
    : C extends UnknownSet
      ? Set<V>
      : { -readonly [k in keyof C]: V }

export type {
  ArrayOfSameType,
  Falsey,
  IsNotTuple,
  IsTuple,
  Nullish,
  ObjectKey,
  Sequence,
  SequenceItem,
  SubSequence,
  ValueAtKey,
  ValueAtPath,
  WithUnknownKeyType,
  WithPropertyKeyType,
  WithValueType,
}
