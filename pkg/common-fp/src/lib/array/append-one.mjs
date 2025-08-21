import { assertArgIsType } from '@common-fp/shared-internals'

const appendOne = value => anArray => {
  assertArgIsType(anArray, 'anArray', 'array', 'appendOne')

  return anArray.concat([value])
}

export default appendOne
