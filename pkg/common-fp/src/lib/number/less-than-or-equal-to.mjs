import { assertArgIsType } from '@common-fp/shared-internals'

const lessThanOrEqualTo = right => {
  assertArgIsType(right, 'right', 'number', 'lessThanOrEqualTo')

  return left => {
    assertArgIsType(left, 'left', 'number', 'lessThanOrEqualTo')

    return left <= right
  }
}

export default lessThanOrEqualTo
