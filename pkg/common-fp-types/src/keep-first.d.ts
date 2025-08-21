// this is the same as the ./keep-last and ./discard-(first|last) definitions.
// We're copying them so we don't expose a generally named type DiscardOrKeep
// which would be less clear

import type { Sequence, SubSequence } from '@common-fp/shared-types'

export default function (
  num: number
): <S extends Sequence>(sequence: S) => SubSequence<S>
