import type { Collection } from '@common-fp/shared-types'

declare function sumValues<C extends Collection<number>>(collection: C): number
declare function sumValues(collection: Collection<number>): number

export default sumValues
