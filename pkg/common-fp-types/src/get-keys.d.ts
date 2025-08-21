import type { CollectionKey, KeyedCollection } from '@common-fp/shared-types'

export default function <C extends KeyedCollection>(
  collection: C
): CollectionKey<C>[]
