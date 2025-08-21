import { getFn } from '@common-fp/shared-internals'

const getSize = collection => {
  const fn = getFn(typeToFn, collection, 'collection', 'getSize')
  return fn(collection)
}

const typeToFn = {
  array: getSize_hasLength,
  map: getSize_hasSize,
  object: getSize_object,
  set: getSize_hasSize,
  string: getSize_hasLength,
}

function getSize_hasSize(coll) {
  return coll.size
}

function getSize_hasLength(coll) {
  return coll.length
}

function getSize_object(obj) {
  return Object.keys(obj).length
}

export default getSize
