import type { Collection, UnknownArray } from '@common-fp/shared-types'

export default function <C extends Collection | string>(
  collection: C
): C extends UnknownArray ? C['length'] : number
