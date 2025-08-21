import {
  assertArgIsType,
  assertArgTypeIsOneOf,
  commonTypes as ct,
  getIterator,
  getType,
} from '@common-fp/shared-internals'

const alter = (reducerFn, makeInitial) => {
  assertArgIsType(reducerFn, 'reducerFn', 'function', 'alter')
  assertArgIsType(makeInitial, 'makeInitial', 'function', 'alter')

  return collection => {
    const collType = getType(collection)
    assertArgTypeIsOneOf(collType, 'collection', ct.collection, 'alter')
    const iterator = getIterator('entries', collection, collType)

    let result = makeInitial(collection)
    for (const [key, val] of iterator) {
      result = reducerFn(result, val, key, collection)
    }
    return result
  }
}

export default alter
