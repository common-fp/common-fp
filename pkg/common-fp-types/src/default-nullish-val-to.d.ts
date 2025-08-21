import type { Nullish } from '@common-fp/shared-types'

export default function <const D>(
  defaultVal: D
): <V>(someVal: V | Nullish) => Exclude<V, Nullish> | D
