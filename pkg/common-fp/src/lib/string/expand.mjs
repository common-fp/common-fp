import {
  assertArgIsChar,
  assertArgIsInt,
  assertArgIsType,
} from '@common-fp/shared-internals'

const expand = (length, char) => {
  assertArgIsInt(length, 'length', 'expand', { nonNegative: true })
  assertArgIsChar(char, 'char', 'expand')

  return aString => {
    assertArgIsType(aString, 'aString', 'string', 'expand')

    if (length <= aString.length) return aString

    const nHalf = (length - aString.length) / 2
    // fill end first since that's how lodash does it heh
    const nEnd = Math.ceil(nHalf)
    const nStart = Math.floor(nHalf)
    return char.repeat(nStart) + aString + char.repeat(nEnd)
  }
}

export default expand
