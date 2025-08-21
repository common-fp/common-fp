import {
  assertArgIsOneOfType,
  commonTypes as ct,
  validateRange,
} from '@common-fp/shared-internals'

const keepRange = ({ startIdx, endIdx } = {}) => {
  validateRange(startIdx, endIdx, 'keepRange')

  return sequence => {
    assertArgIsOneOfType(sequence, 'sequence', ct.sequence, 'keepRange')
    return sequence.slice(startIdx, endIdx + 1)
  }
}

export default keepRange
