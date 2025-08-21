import { assertArgIsType } from '@common-fp/shared-internals'

const pWaitMs = ms => {
  assertArgIsType(ms, 'ms', 'number', 'pWaitMs')
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default pWaitMs
