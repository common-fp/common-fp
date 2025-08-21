import type { Collection } from '@common-fp/shared-types'

declare function getMinValue<C extends Collection<number>>(
  collection: C
): number | undefined
declare function getMinValue(collection: Collection<number>): number | undefined

export default getMinValue
