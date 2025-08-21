import type { UnknownArray } from '@common-fp/shared-types'

export default function <const A2 extends UnknownArray>(
  appended: A2
): <const A1 extends UnknownArray>(base: A1) => [...A1, ...A2]
