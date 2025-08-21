import { replace } from 'fibble'
import * as sharedInternals from '@common-fp/shared-internals'
import { spy } from '@common-fp/test-utils'

const { getType } = sharedInternals

const sharedInternalsSpy = spyRecursively(sharedInternals)
await replace('@common-fp/shared-internals', sharedInternalsSpy)

function spyRecursively(obj) {
  const result = {}
  for (const [k, v] of Object.entries(obj)) {
    let newVal = v
    if (typeof v === 'function') {
      newVal = spy(v)
    } else if (getType(v) === 'object') {
      newVal = spyRecursively(v)
    }
    result[k] = newVal
  }
  return result
}

export default sharedInternalsSpy
