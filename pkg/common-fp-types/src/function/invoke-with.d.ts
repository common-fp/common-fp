import type { UnknownArray } from '@common-fp/shared-types'

export default function <A extends UnknownArray>(
  args: A
): <R>(fn: (...args: A) => R) => R
