import {
  assertArgIsInt,
  assertArgIsOneOfType,
  commonTypes as ct,
} from '@common-fp/shared-internals'

const discardLast = num => {
  assertArgIsInt(num, 'num', 'discardLast', {
    nonNegative: true,
  })

  return sequence => {
    assertArgIsOneOfType(sequence, 'sequence', ct.sequence, 'discardLast')
    return sequence.slice(0, Math.max(0, sequence.length - num))
  }
}

export default discardLast
