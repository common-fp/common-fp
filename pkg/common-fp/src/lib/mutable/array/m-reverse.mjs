import { assertArgIsType } from '@common-fp/shared-internals'

const mReverse = anArray => {
  assertArgIsType(anArray, 'anArray', 'array', 'mReverse')
  return anArray.reverse()
}

export default mReverse
