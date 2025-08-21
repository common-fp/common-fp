import { getFn } from '@common-fp/shared-internals'

const getKeys = collection => {
  const fn = getFn(typeToFn, collection, 'collection', 'getKeys')

  return fn(collection)
}

const typeToFn = {
  array: getKeys_iterator,
  map: getKeys_iterator,
  object: getKeys_object,
}

function getKeys_iterator(coll) {
  return Array.from(coll.keys())
}

function getKeys_object(obj) {
  return Object.keys(obj)
}

export default getKeys
