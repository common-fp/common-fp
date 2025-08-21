import {
  assertArgIsChar,
  assertArgIsInt,
  assertArgIsType,
} from '@common-fp/shared-internals'

const expandEnd = (length, char) => {
  assertArgIsInt(length, 'length', 'expandEnd', { nonNegative: true })
  assertArgIsChar(char, 'char', 'expandEnd')

  return aString => {
    assertArgIsType(aString, 'aString', 'string', 'expandEnd')

    return aString.padEnd(length, char)
  }
}

export default expandEnd
