// no super constraints in typescript so we've gotta stick with the same type
// for defaults and base
// https://github.com/microsoft/TypeScript/issues/14520

import type { UnknownRecord } from '@common-fp/shared-types'

declare function mAssignOverrides<C extends Map<unknown, unknown>>(
  overrides: C
): (base: C) => C

declare function mAssignOverrides<C extends UnknownRecord>(
  overrides: C
): (base: C) => C

export default mAssignOverrides
