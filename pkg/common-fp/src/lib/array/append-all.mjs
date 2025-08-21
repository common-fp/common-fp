import { assertArgIsType } from '@common-fp/shared-internals'

const appendAll = appended => {
  assertArgIsType(appended, 'appended', 'array', 'appendAll')

  return base => {
    assertArgIsType(base, 'base', 'array', 'appendAll')

    return base.concat(appended)
  }
}

export default appendAll
