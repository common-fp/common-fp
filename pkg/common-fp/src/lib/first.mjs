import { assertArgIsOneOfType, commonTypes as ct } from '@common-fp/shared-internals'

// also known as 'head'
const first = sequence => {
  assertArgIsOneOfType(sequence, 'sequence', ct.sequence, 'first')
  return sequence[0]
}

export default first
