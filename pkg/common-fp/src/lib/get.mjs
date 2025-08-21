import { assertArgIsOneOfType, commonTypes as ct } from '@common-fp/shared-internals'

const get = key => {
  assertArgIsOneOfType(key, 'key', ct.propertyKey, 'get')

  return anything => anything?.[key]
}

export default get
