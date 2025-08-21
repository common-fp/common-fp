import { getFn } from '@common-fp/shared-internals'

const fillWith = value => collection => {
  const fn = getFn(typeToFn, collection, 'collection', 'fillWith')
  return fn(collection, value)
}

const typeToFn = {
  array: fillWith_array,
  map: fillWith_map,
  object: fillWith_object,
}

function fillWith_array(arr, value) {
  return new Array(arr.length).fill(value)
}

function fillWith_map(aMap, value) {
  const result = new Map()
  for (const k of aMap.keys()) {
    result.set(k, value)
  }
  return result
}

function fillWith_object(obj, value) {
  const result = {}
  for (const k of Object.keys(obj)) {
    result[k] = value
  }
  return result
}

export default fillWith
