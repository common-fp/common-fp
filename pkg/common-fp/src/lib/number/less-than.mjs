import { assertArgIsType } from '@common-fp/shared-internals'

const lessThan = right => {
  assertArgIsType(right, 'right', 'number', 'lessThan')

  return left => {
    assertArgIsType(left, 'left', 'number', 'lessThan')

    return left < right
  }
}

export default lessThan
