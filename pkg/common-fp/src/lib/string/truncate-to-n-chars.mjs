import {
  assertArgIsType,
  assertArgIsInt,
  truncateToNChars as truncateToNCharsInternal,
} from '@common-fp/shared-internals'

const truncateToNChars = n => {
  assertArgIsInt(n, 'n', 'truncateToNChars', {
    nonNegative: true,
  })

  return aString => {
    assertArgIsType(aString, 'aString', 'string', 'truncateToNChars')

    return truncateToNCharsInternal(n, aString)
  }
}

export default truncateToNChars
