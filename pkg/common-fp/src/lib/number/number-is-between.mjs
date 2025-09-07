import {
  assertArgIsType,
  validateIsBetweenInput,
} from '@common-fp/shared-internals'

const numberIsBetween = (num1, num2, opts = {}) => {
  let { exclusiveMin, exclusiveMax } = opts

  validateIsBetweenInput(
    num1,
    'num1',
    num2,
    'num2',
    'number',
    'numberIsBetween',
    {
      exclusiveMin,
      exclusiveMax,
    }
  )

  const [min, max] = num1 <= num2 ? [num1, num2] : [num2, num1]
  if (exclusiveMin === undefined) exclusiveMin = false
  if (exclusiveMax === undefined) exclusiveMax = false

  return aNumber => {
    assertArgIsType(aNumber, 'aNumber', 'number', 'numberIsBetween')
    const minCheck = exclusiveMin ? aNumber > min : aNumber >= min
    if (!minCheck) return false

    return exclusiveMax ? aNumber < max : aNumber <= max
  }
}

export default numberIsBetween
