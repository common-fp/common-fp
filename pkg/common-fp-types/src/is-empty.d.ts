// this is the same as ./is-laden.  We're copying it so we don't expose a
// generally named type IsEmptyOrLaden which would be less clear

import type { Collection } from '@common-fp/shared-types'

declare function isEmpty<C extends Collection | string>(collection: C): boolean
declare function isEmpty(collection: Collection | string): boolean

export default isEmpty
