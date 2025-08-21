import { assertArgIsType } from '@common-fp/shared-internals'

const prependOne = value => anArray => {
  assertArgIsType(anArray, 'anArray', 'array', 'prependOne')

  return [value, ...anArray]
}

export default prependOne
