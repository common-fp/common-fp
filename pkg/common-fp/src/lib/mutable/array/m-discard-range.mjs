import { assertArgIsType, validateRange } from '@common-fp/shared-internals'

const mDiscardRange = ({ startIdx, endIdx } = {}) => {
  validateRange(startIdx, endIdx, 'mDiscardRange')

  return anArray => {
    assertArgIsType(anArray, 'anArray', 'array', 'mDiscardRange')

    const numToDiscard = endIdx + 1 - startIdx
    anArray.splice(startIdx, numToDiscard)

    return anArray
  }
}

export default mDiscardRange
