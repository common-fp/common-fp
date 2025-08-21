import type { CollectionValue, KeyedCollection } from '@common-fp/shared-types'

export default function <C extends KeyedCollection>(
  collection: C
): CollectionValue<C>[]
