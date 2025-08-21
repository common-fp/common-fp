import { assertArgIsType } from '@common-fp/shared-internals'

const greaterThan = right => {
  assertArgIsType(right, 'right', 'number', 'greaterThan')

  return left => {
    assertArgIsType(left, 'left', 'number', 'greaterThan')

    return left > right
  }
}

export default greaterThan
