import type { Sequence, SequenceItem } from '@common-fp/shared-types'

export default function <S extends Sequence>(
  sequence: S
): SequenceItem<S> | undefined
