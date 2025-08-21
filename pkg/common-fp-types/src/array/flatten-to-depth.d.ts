import type { IntRangeUnion } from '@common-fp/shared-types'

// based off FlatArray
type ZeroToTen = IntRangeUnion<0, 10>

export default function <D extends number>(
  depth: D
): <const V>(
  anArray: readonly V[]
) => D extends ZeroToTen ? FlatArray<V[], D>[] : unknown[]
