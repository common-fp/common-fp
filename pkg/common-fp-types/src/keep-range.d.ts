// this type is the same as ./discard-range.  We're copying it to expose their
// function definitions on mouse-over instead of a less intuitive, generally
// named alias.

import type { Sequence, SubSequence } from '@common-fp/shared-types'

export default function (range: {
  startIdx: number
  endIdx: number
}): <S extends Sequence>(sequence: S) => SubSequence<S>
