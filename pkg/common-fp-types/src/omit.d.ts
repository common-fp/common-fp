// this type is the same as ./pick.  We're copying it so we don't expose a
// generally named type e.g. PickOrOmit which would be less clear

import type { CollectionSubset, EntryCollection } from '@common-fp/shared-types'

export default function <K>(
  keys: readonly K[]
): <C extends EntryCollection<K>>(collection: C) => CollectionSubset<C>
