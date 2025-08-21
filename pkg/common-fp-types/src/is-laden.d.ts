// this is the same as ./is-empty.  We're copying it so we don't expose a
// generally named type IsEmptyOrLaden which would be less clear

import type { Collection } from '@common-fp/shared-types'

declare function isLaden<C extends Collection | string>(collection: C): boolean
declare function isLaden(collection: Collection | string): boolean

export default isLaden
