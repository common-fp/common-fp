import {
  assertArgIsOneOfType,
  assertArgIsType,
} from '@common-fp/shared-internals'

const split = separator => {
  assertArgIsOneOfType(separator, 'separator', ['regexp', 'string'], 'split')

  return aString => {
    assertArgIsType(aString, 'aString', 'string', 'split')

    return aString.split(separator)
  }
}

export default split
