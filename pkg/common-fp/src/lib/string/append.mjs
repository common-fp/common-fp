import { assertArgIsType } from '@common-fp/shared-internals'

const append = end => {
  assertArgIsType(end, 'end', 'string', 'append')

  return base => {
    assertArgIsType(base, 'base', 'string', 'append')

    return base + end
  }
}

export default append
