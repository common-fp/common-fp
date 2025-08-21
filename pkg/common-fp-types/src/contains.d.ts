import type { Collection } from '@common-fp/shared-types'

declare function contains(
  value: string
): <C extends Collection<string> | string>(collection: C) => boolean

declare function contains<V>(
  value: V
): <C extends Collection<V>>(collection: C) => boolean

export default contains
