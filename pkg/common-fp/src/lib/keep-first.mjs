import {
  assertArgIsInt,
  assertArgIsOneOfType,
  commonTypes as ct,
} from '@common-fp/shared-internals'

const keepFirst = num => {
  assertArgIsInt(num, 'num', 'keepFirst', { nonNegative: true })

  return sequence => {
    assertArgIsOneOfType(sequence, 'sequence', ct.sequence, 'keepFirst')
    return sequence.slice(0, num)
  }
}

export default keepFirst
