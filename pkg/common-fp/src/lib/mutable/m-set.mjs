import { assertArgIsOneOfType, commonTypes as ct } from '@common-fp/shared-internals'

const mSet = (key, value) => {
  assertArgIsOneOfType(key, 'key', ct.propertyKey, 'mSet')

  return anything => {
    try {
      anything[key] = value
    } catch (innerError) {
      const err = new Error(
        'mSet requires key to be assignable.  See error properties for more info.'
      )
      Object.assign(err, { innerError, arguments: { key, value, anything } })
      throw err
    }
    return anything
  }
}

export default mSet
