import { assertArgIsType } from '@common-fp/shared-internals'

const subtract = right => {
  assertArgIsType(right, 'right', 'number', 'subtract')

  return left => {
    assertArgIsType(left, 'left', 'number', 'subtract')

    return left - right
  }
}

export default subtract
