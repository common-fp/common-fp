import { getFn } from '@common-fp/shared-internals'

const isEmpty = collection => {
  const fn = getFn(typeToFn, collection, 'collection', 'isEmpty')
  return fn(collection)
}

const typeToFn = {
  array: isEmpty_hasLength,
  map: isEmpty_hasSize,
  object: isEmpty_object,
  set: isEmpty_hasSize,
  string: isEmpty_hasLength,
}

function isEmpty_hasSize(coll) {
  return coll.size === 0
}

function isEmpty_hasLength(coll) {
  return coll.length === 0
}

function isEmpty_object(coll) {
  return Object.keys(coll).length === 0
}

export default isEmpty
