import { assertArgIsType } from '@common-fp/shared-internals'

const add = n1 => {
  assertArgIsType(n1, 'n1', 'number', 'add')

  return n2 => {
    assertArgIsType(n2, 'n2', 'number', 'add')

    return n1 + n2
  }
}

export default add
