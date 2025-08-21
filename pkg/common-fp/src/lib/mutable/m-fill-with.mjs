import { getFn } from '@common-fp/shared-internals'

const mFillWith = value => collection => {
  const fn = getFn(typeToFn, collection, 'collection', 'mFillWith')
  return fn(collection, value)
}

const typeToFn = {
  array: mFillWith_array,
  map: mFillWith_map,
  object: mFillWith_object,
}

function mFillWith_array(arr, value) {
  return arr.fill(value)
}

function mFillWith_map(aMap, value) {
  for (const k of aMap.keys()) {
    aMap.set(k, value)
  }
  return aMap
}

function mFillWith_object(obj, value) {
  for (const k of Object.keys(obj)) {
    obj[k] = value
  }
  return obj
}

export default mFillWith
