import { commonTypes as ct, getFn, getType } from '@common-fp/shared-internals'

const set = (key, val) => {
  const keyType = getType(key)

  return collection => {
    const typeFn = getFn(typeToFn, collection, 'collection', 'set')
    return typeFn(collection, key, val, keyType)
  }
}

const typeToFn = {
  array: set_array,
  map: set_map,
  object: set_object,
}

function set_array(arr, key, val, keyType) {
  if (!ct.objectKey.has(keyType)) {
    throw new Error(
      "when calling set with an array, 'key' must be a number or string" +
        `\n  key type: ${keyType}`
    )
  }

  const result = [...arr]

  result[key] = val

  return result
}

function set_map(aMap, key, val) {
  const result = new Map(aMap)
  return result.set(key, val)
}

function set_object(obj, key, val, keyType) {
  if (!ct.objectKey.has(keyType)) {
    throw new Error(
      "when calling set with an object, 'key' must be a number or string" +
        `\n  key type: ${keyType}`
    )
  }

  return { ...obj, [key]: val }
}

export default set
