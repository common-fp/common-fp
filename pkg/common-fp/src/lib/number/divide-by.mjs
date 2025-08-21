import { assertArgIsType } from '@common-fp/shared-internals'

const divideBy = right => {
  assertArgIsType(right, 'right', 'number', 'divideBy')

  return left => {
    assertArgIsType(left, 'left', 'number', 'divideBy')

    return left / right
  }
}

export default divideBy
