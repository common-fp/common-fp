import type { UnknownArray } from '@common-fp/shared-types'

export default function <const A extends UnknownArray>(
  anArray: A
): FlatArray<A, 1>[]
