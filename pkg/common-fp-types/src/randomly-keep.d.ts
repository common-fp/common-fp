import type { Collection, CollectionSubset } from '@common-fp/shared-types'

export default function (
  num: number
): <C extends Collection>(collection: C) => CollectionSubset<C>
