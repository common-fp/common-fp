/**
 * intended for small'ish non-negative ranges
 * used in common-fp-types/flatten* utils
 *
 * code from here:
 * https://stackoverflow.com/a/39495173/984407
 */

type IntRangeUnion_Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc['length'] extends N
  ? Acc[number]
  : IntRangeUnion_Enumerate<N, [...Acc, Acc['length']]>

type IntRangeUnion<Min extends number, Max extends number> =
  | Exclude<IntRangeUnion_Enumerate<Max>, IntRangeUnion_Enumerate<Min>>
  | Max

type IntRangeTuple_Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc['length'] extends N
  ? [...Acc, Acc['length']]
  : IntRangeTuple_Enumerate<N, [...Acc, Acc['length']]>

type ExcludeFromTuple<T extends ReadonlyArray<unknown>, E> = T extends [
  infer F,
  ...infer R,
]
  ? [F] extends [E]
    ? ExcludeFromTuple<R, E>
    : [F, ...ExcludeFromTuple<R, E>]
  : []

type IntRangeTuple<Min extends number, Max extends number> = ExcludeFromTuple<
  IntRangeTuple_Enumerate<Max>,
  IntRangeUnion_Enumerate<Min>
>

export type { IntRangeUnion, IntRangeTuple }
