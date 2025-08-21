import { assertArgIsInt, assertArgIsType } from '@common-fp/shared-internals'

const flattenToDepth = depth => {
  if (depth !== Infinity)
    assertArgIsInt(depth, 'depth', 'flattenToDepth', { nonNegative: true })

  return anArray => {
    assertArgIsType(anArray, 'anArray', 'array', 'flattenToDepth')

    return anArray.flat(depth)
  }
}

export default flattenToDepth
