import type { MutableEntryCollection } from '@common-fp/shared-types'

export default function <K>(
  keys: readonly K[]
): <C extends MutableEntryCollection<K>>(collection: C) => C
