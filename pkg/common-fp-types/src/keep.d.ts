// this type is the same as ./discard.  We're copying it so we don't expose a
// generally named type DiscardOrKeep which would be less clear

import type {
  Collection,
  CollectionSubset,
  ValueCollection,
} from '@common-fp/shared-types'

export default function Discard<V>(
  values: ValueCollection<V>
): <C extends Collection<V>>(collection: C) => CollectionSubset<C>
