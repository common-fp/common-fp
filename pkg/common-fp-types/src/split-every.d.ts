import type { Sequence, SubSequence } from '@common-fp/shared-types'

export default function (
  groupSize: number
): <S extends Sequence>(sequence: S) => SubSequence<S>[]
