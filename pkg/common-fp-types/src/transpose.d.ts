import type { UnknownArray } from '@common-fp/shared-types'

declare function transpose<C1, C2>(
  anArray: readonly [readonly C1[], readonly C2[]]
): Array<[C1, C2]>

declare function transpose<C1, C2, C3>(
  anArray: readonly [readonly C1[], readonly C2[], readonly C3[]]
): Array<[C1, C2, C3]>

declare function transpose<C1, C2, C3, C4>(
  anArray: readonly [readonly C1[], readonly C2[], readonly C3[], readonly C4[]]
): Array<[C1, C2, C3, C4]>

declare function transpose<V>(anArray: ReadonlyArray<readonly V[]>): Array<V[]>

declare function transpose(
  anArray: ReadonlyArray<UnknownArray>
): Array<unknown[]>

export default transpose
