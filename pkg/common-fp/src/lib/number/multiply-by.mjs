import { assertArgIsType } from '@common-fp/shared-internals'

const multiplyBy = n1 => {
  assertArgIsType(n1, 'n1', 'number', 'multiplyBy')

  return n2 => {
    assertArgIsType(n2, 'n2', 'number', 'multiplyBy')

    return n2 * n1
  }
}

export default multiplyBy
