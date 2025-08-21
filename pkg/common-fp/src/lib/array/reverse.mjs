import { assertArgIsType } from '@common-fp/shared-internals'

const reverse = anArray => {
  assertArgIsType(anArray, 'anArray', 'array', 'reverse')
  return [...anArray].reverse()
}

export default reverse
