import { assertArgIsType } from '@common-fp/shared-internals'

const prependAll = prepended => {
  assertArgIsType(prepended, 'prepended', 'array', 'prependAll')

  return base => {
    assertArgIsType(base, 'base', 'array', 'prependAll')

    return prepended.concat(base)
  }
}

export default prependAll
