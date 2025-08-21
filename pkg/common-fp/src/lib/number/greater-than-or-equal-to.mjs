import { assertArgIsType } from '@common-fp/shared-internals'

const greaterThanOrEqualTo = right => {
  assertArgIsType(right, 'right', 'number', 'greaterThanOrEqualTo')

  return left => {
    assertArgIsType(left, 'left', 'number', 'greaterThanOrEqualTo')

    return left >= right
  }
}

export default greaterThanOrEqualTo
