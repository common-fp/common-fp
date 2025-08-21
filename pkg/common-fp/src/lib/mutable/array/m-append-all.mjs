import { assertArgIsType } from '@common-fp/shared-internals'

const mAppendAll = appended => {
  assertArgIsType(appended, 'appended', 'array', 'mAppendAll')

  return base => {
    assertArgIsType(base, 'base', 'array', 'mAppendAll')

    base.push(...appended)
    return base
  }
}

export default mAppendAll
