import { assertArgIsType } from '@common-fp/shared-internals'

const flattenFully = anArray => {
  assertArgIsType(anArray, 'anArray', 'array', 'flattenFully')

  return anArray.flat(Infinity)
}

export default flattenFully
