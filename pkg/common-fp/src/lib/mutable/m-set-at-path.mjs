import {
  assertArgIsArrayOfAcceptedTypes,
  commonTypes as ct,
} from '@common-fp/shared-internals'

const mSetAtPath = (path, value) => {
  assertArgIsArrayOfAcceptedTypes(path, 'path', ct.propertyKey, 'mSetAtPath')
  if (!path.length) {
    throw new Error("mSetAtPath requries 'path' to be a non-empty array")
  }

  return anything => {
    const initialPath = path.slice(0, -1)
    let obj = anything

    for (const key of initialPath) {
      obj = obj?.[key]
      if (obj === undefined) {
        const err = new Error(
          "mSetAtPath requires path to exist on 'anything'.  Arguments are assigned to this error to aid in debugging."
        )
        Object.assign(err, { arguments: { path, value, anything } })
        throw err
      }
    }

    const lastKey = path[path.length - 1]
    try {
      obj[lastKey] = value
    } catch (innerError) {
      const err = new Error(
        'mSetAtPath requires the property at path to be assignable.  See error properties for more info.'
      )
      Object.assign(err, { innerError, arguments: { path, value, anything } })
      throw err
    }

    return anything
  }
}

export default mSetAtPath
