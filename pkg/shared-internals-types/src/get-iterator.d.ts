import type {
  Collection,
  CollectionKeysIterator,
  CollectionEntriesIterator,
} from '@common-fp/shared-types'

declare function getIterator<V>(
  iteratorType: 'values',
  coll: Collection<V>,
  collType?: string
): IterableIterator<V>

declare function getIterator<C extends Collection>(
  iteratorType: 'keys',
  coll: C,
  collType?: string
): CollectionKeysIterator<C>

declare function getIterator<C extends Collection>(
  iteratorType: 'entries',
  coll: C,
  collType?: string
): CollectionEntriesIterator<C>

export default getIterator
