import { assertArgIsType } from '@common-fp/shared-internals'

const flattenOnce = anArray => {
  assertArgIsType(anArray, 'anArray', 'array', 'flattenOnce')

  return anArray.flat()
}

export default flattenOnce
