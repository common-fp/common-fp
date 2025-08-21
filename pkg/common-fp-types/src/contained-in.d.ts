import type { Collection } from '@common-fp/shared-types'

declare function containedIn(collection: string): (value: string) => boolean

declare function containedIn<V>(
  collection: Collection<V>
): (value: V) => boolean

export default containedIn
