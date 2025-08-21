import type { UnknownArray } from '@common-fp/shared-types'

export default function <const A1 extends UnknownArray>(
  prepended: A1
): <const A2 extends UnknownArray>(base: A2) => [...A1, ...A2]
