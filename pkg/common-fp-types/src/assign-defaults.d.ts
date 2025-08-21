import type { UnknownRecord } from '@common-fp/shared-types'

declare function assignDefaults<K1, V1>(
  defaults: ReadonlyMap<K1, V1>
): <K2, V2>(base: ReadonlyMap<K2, V2>) => Map<K1 | K2, V1 | V2>

declare function assignDefaults<D extends UnknownRecord>(
  defaults: D
): <O extends UnknownRecord>(
  base: O
) => {
  [K in keyof D | keyof O]: K extends keyof O ? O[K]
  : K extends keyof D ? D[K]
  : never
}

export default assignDefaults
