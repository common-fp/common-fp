import { assertArgIsType, validateRange } from '@common-fp/shared-internals'

const fillRangeWith = (value, { startIdx, endIdx } = {}) => {
  validateRange(startIdx, endIdx, 'fillRangeWith')

  return anArray => {
    assertArgIsType(anArray, 'anArray', 'array', 'fillRangeWith')

    const result = [...anArray]
    for (let i = startIdx; i < anArray.length && i <= endIdx; i += 1) {
      result[i] = value
    }
    return result
  }
}

export default fillRangeWith
