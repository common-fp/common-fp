import type { Sequence } from '@common-fp/shared-types'

declare function findLastKeyWithVal(
  value: string
): <S extends Sequence<string>>(sequence: S) => number | undefined

declare function findLastKeyWithVal<V>(
  value: V
): <S extends ReadonlyArray<V>>(sequence: S) => number | undefined

export default findLastKeyWithVal
