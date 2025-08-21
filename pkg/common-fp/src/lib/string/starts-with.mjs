import { assertArgIsType } from '@common-fp/shared-internals'

const startsWith = prefix => {
  assertArgIsType(prefix, 'prefix', 'string', 'startsWith')

  return aString => {
    assertArgIsType(aString, 'aString', 'string', 'startsWith')

    return aString.startsWith(prefix)
  }
}

export default startsWith
