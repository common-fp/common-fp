import { assertArgIsType, validateRange } from '@common-fp/shared-internals'

const mKeepRange = ({ startIdx, endIdx } = {}) => {
  validateRange(startIdx, endIdx, 'mKeepRange')

  return anArray => {
    assertArgIsType(anArray, 'anArray', 'array', 'mKeepRange')

    const numToRemoveAtEnd = anArray.length - 1 - endIdx
    anArray.splice(endIdx + 1, numToRemoveAtEnd)
    anArray.splice(0, startIdx)

    return anArray
  }
}

export default mKeepRange
