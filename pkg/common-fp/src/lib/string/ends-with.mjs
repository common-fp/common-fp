import { assertArgIsType } from '@common-fp/shared-internals'

const endsWith = suffix => {
  assertArgIsType(suffix, 'suffix', 'string', 'endsWith')

  return aString => {
    assertArgIsType(aString, 'aString', 'string', 'endsWith')

    return aString.endsWith(suffix)
  }
}

export default endsWith
