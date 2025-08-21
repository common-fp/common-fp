import type { ValueAtKey } from '@common-fp/shared-types'

export default function <K extends PropertyKey>(
  key: K
): <const O>(anything: O) => ValueAtKey<O, K>
