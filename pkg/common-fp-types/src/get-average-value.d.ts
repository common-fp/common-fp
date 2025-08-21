import type { Collection } from '@common-fp/shared-types'

declare function getAverageValue<C extends Collection<number>>(
  collection: C
): number | undefined
declare function getAverageValue(
  collection: Collection<number>
): number | undefined

export default getAverageValue
