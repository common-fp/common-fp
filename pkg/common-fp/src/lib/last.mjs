import { assertArgIsOneOfType, commonTypes as ct } from '@common-fp/shared-internals'

// also known as 'tail'
const last = sequence => {
  assertArgIsOneOfType(sequence, 'sequence', ct.sequence, 'last')
  return sequence[sequence.length - 1]
}

export default last
