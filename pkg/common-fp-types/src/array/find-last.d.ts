import type { CollectionValue } from '@common-fp/shared-types'

export default function <V, A1 extends readonly V[]>(
  predicate: (value: V, idx: number, anArray: A1) => boolean
): <const A2 extends A1>(anArray: A2) => CollectionValue<A2> | undefined
