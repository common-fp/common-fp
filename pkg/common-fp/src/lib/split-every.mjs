import {
  assertArgIsInt,
  assertArgTypeIsOneOf,
  commonTypes as ct,
  getType,
} from '@common-fp/shared-internals'

const splitEvery = groupSize => {
  assertArgIsInt(groupSize, 'groupSize', 'splitEvery', { positive: true })

  return sequence => {
    const seqType = getType(sequence)
    assertArgTypeIsOneOf(seqType, 'sequence', ct.sequence, 'splitEvery')

    if (!sequence.length) {
      const emptySeq = seqType === 'string' ? '' : []
      return [emptySeq]
    }

    const numArrays = Math.ceil(sequence.length / groupSize)
    const res = new Array(numArrays)

    for (let i = 0; i < numArrays - 1; i += 1) {
      res[i] = sequence.slice(i * groupSize, (i + 1) * groupSize)
    }

    res[numArrays - 1] = sequence.slice((numArrays - 1) * groupSize)

    return res
  }
}

export default splitEvery
