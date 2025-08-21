import { assertArgIsType, validateRange } from '@common-fp/shared-internals'

const mFillRangeWith = (anything, { startIdx, endIdx } = {}) => {
  validateRange(startIdx, endIdx, 'mFillRangeWith')

  return anArray => {
    assertArgIsType(anArray, 'anArray', 'array', 'mFillRangeWith')

    for (let i = startIdx; i <= endIdx; i += 1) {
      anArray[i] = anything
    }
    return anArray
  }
}

export default mFillRangeWith
