import { assertArgIsType } from '@common-fp/shared-internals'

// also known as 'tap'
const peek = fn => {
  assertArgIsType(fn, 'fn', 'function', 'peek')

  return prevResult => {
    fn(prevResult)
    return prevResult
  }
}

export default peek
