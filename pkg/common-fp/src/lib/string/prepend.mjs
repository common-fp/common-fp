import { assertArgIsType } from '@common-fp/shared-internals'

const prepend = start => {
  assertArgIsType(start, 'start', 'string', 'append')

  return base => {
    assertArgIsType(base, 'base', 'string', 'append')

    return start + base
  }
}

export default prepend
