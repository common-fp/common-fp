import type { UnknownArray } from '@common-fp/shared-types'

export default function <const V>(
  value: V
): <const A extends UnknownArray>(anArray: A) => [...A, V]
