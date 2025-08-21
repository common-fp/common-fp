import type { Collection } from '@common-fp/shared-types'

declare function getRandomValue<C extends readonly [unknown, ...unknown[]]>(
  collection: C
): C extends ReadonlyArray<infer V> ? V : never

declare function getRandomValue<C extends Collection>(
  collection: C
): C extends Collection<infer V> ? V | undefined : never

export default getRandomValue
