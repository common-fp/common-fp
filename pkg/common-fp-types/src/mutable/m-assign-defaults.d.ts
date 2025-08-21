// no super constraints in typescript so we've gotta stick with the same type
// for defaults and base
// https://github.com/microsoft/TypeScript/issues/14520

import type { UnknownRecord } from '@common-fp/shared-types'

declare function mAssignDefaults<C extends Map<unknown, unknown>>(
  defaults: C
): (base: C) => C

declare function mAssignDefaults<C extends UnknownRecord>(
  defaults: C
): (base: C) => C

export default mAssignDefaults
