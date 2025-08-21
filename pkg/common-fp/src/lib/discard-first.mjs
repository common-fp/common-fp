import {
  assertArgIsInt,
  assertArgIsOneOfType,
  commonTypes as ct,
} from '@common-fp/shared-internals'

const discardFirst = num => {
  assertArgIsInt(num, 'num', 'discardFirst', {
    nonNegative: true,
  })

  return sequence => {
    assertArgIsOneOfType(sequence, 'sequence', ct.sequence, 'discardFirst')
    return sequence.slice(num)
  }
}

export default discardFirst
