import {
  assertArgTypeIsOneOf,
  commonTypes as ct,
  getType,
} from '@common-fp/shared-internals'

const findLastKeyWithVal = value => {
  const valType = getType(value)

  return sequence => {
    const seqType = getType(sequence)
    assertArgTypeIsOneOf(seqType, 'sequence', ct.sequence, 'findLastKeyWithVal')
    if (seqType === 'string' && valType !== 'string') {
      throw new Error(
        'When calling findLastKeyWithVal with a sequence of type string, value must also be a string' +
          `\n  value type: ${valType}`
      )
    }

    const idx = sequence.lastIndexOf(value)
    return idx === -1 ? undefined : idx
  }
}

export default findLastKeyWithVal
