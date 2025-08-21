import type { UnknownRecord } from '@common-fp/shared-types'

declare function assignOverrides<K1, V1>(
  overrides: ReadonlyMap<K1, V1>
): <K2, V2>(base: ReadonlyMap<K2, V2>) => Map<K1 | K2, V1 | V2>

declare function assignOverrides<O extends UnknownRecord>(
  overrides: O
): <B extends UnknownRecord>(
  base: B
) => { [K in keyof B | keyof O]: K extends keyof O ? O[K] : B[K] }

export default assignOverrides
