import { assertArgIsType } from '@common-fp/shared-internals'

const getValueAtMapKey = key => aMap => {
  assertArgIsType(aMap, 'aMap', 'map', 'getValueAtMapKey')
  return aMap.get(key)
}

export default getValueAtMapKey
