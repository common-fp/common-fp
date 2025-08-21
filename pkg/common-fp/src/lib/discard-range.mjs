import { getFn, validateRange } from '@common-fp/shared-internals'

const discardRange = ({ startIdx, endIdx } = {}) => {
  validateRange(startIdx, endIdx, 'discardRange')

  return sequence => {
    const fn = getFn(typeToFn, sequence, 'sequence', 'discardRange')
    return fn(sequence, startIdx, endIdx)
  }
}

const typeToFn = {
  array: discardRange_array,
  string: discardRange_string,
}

function discardRange_array(sequence, startIdx, endIdx) {
  const result = [...sequence]
  const numToDiscard = endIdx + 1 - startIdx
  result.splice(startIdx, numToDiscard)
  return result
}

function discardRange_string(sequence, startIdx, endIdx) {
  const start = sequence.slice(0, startIdx)
  const end = sequence.slice(endIdx + 1)
  return start + end
}

export default discardRange
