import type { MutableEntryCollection } from '@common-fp/shared-types'

export default function <V>(
  value: V
): <C extends MutableEntryCollection<unknown, V>>(collection: C) => C
