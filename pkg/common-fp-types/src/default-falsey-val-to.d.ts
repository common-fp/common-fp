import type { Falsey } from '@common-fp/shared-types'

export default function <const D>(
  defaultVal: D
): <V>(val: V | Falsey) => Exclude<V, Falsey> | D
