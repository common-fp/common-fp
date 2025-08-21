import { assertArgIsType } from '@common-fp/shared-internals'

const mPrependAll = prependedValues => {
  assertArgIsType(prependedValues, 'prependedValues', 'array', 'mPrependAll')

  return anArray => {
    assertArgIsType(anArray, 'anArray', 'array', 'mPrependAll')

    anArray.unshift(...prependedValues)
    return anArray
  }
}

export default mPrependAll
