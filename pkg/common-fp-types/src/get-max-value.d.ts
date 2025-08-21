import type { Collection } from '@common-fp/shared-types'

declare function getMaxValue<C extends Collection<number>>(
  collection: C
): number | undefined
declare function getMaxValue(collection: Collection<number>): number | undefined

export default getMaxValue
