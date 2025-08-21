import {
  assertArgIsChar,
  assertArgIsInt,
  assertArgIsType,
} from '@common-fp/shared-internals'

const expandStart = (length, char) => {
  assertArgIsInt(length, 'length', 'expandStart', { nonNegative: true })
  assertArgIsChar(char, 'char', 'expandStart')

  return aString => {
    assertArgIsType(aString, 'aString', 'string', 'expandStart')

    return aString.padStart(length, char)
  }
}

export default expandStart
