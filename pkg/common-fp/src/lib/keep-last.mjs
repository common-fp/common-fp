import {
  assertArgIsInt,
  assertArgIsOneOfType,
  commonTypes as ct,
} from '@common-fp/shared-internals'

const keepLast = numToKeep => {
  assertArgIsInt(numToKeep, 'numToKeep', 'keepLast', { nonNegative: true })

  return sequence => {
    assertArgIsOneOfType(sequence, 'sequence', ct.sequence, 'keepLast')
    return sequence.slice(Math.max(0, sequence.length - numToKeep))
  }
}

export default keepLast
