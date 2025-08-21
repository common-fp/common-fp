import type { IntRangeTuple, IntRangeUnion } from '@common-fp/shared-types'

// two leading zeroes is purposeful in order to decrement via index.
// The zero'th index will never actually be reached
type DecLimit = [0, ...IntRangeTuple<0, 9>]

type ZeroToTen = IntRangeUnion<0, 10>

type FullyFlatArray<V, Limit extends ZeroToTen> =
  V extends ReadonlyArray<infer InnerV> ?
    Limit extends 0 ?
      never
    : FullyFlatArray<InnerV, DecLimit[Limit]>
  : V

export default function <const V>(
  anArray: readonly V[]
): FullyFlatArray<V, 10>[]
