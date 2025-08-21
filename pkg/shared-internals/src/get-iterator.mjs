/**
 * this utility expects the passed collection to have already been asserted
 * also, the iteratorType error shouldn't ever reach users of Common FP, it's
 * just here in case custom utility authors mess up.
 */

import getType from './get-type.mjs'

const getIterator = (iteratorType, coll, collType) => {
  validateIteratorType(iteratorType)
  const type = collType || getType(coll)
  return type === 'object' ?
      Object[iteratorType](coll).values()
    : coll[iteratorType]()
}

function validateIteratorType(iteratorType) {
  if (!['values', 'keys', 'entries'].includes(iteratorType)) {
    throw new Error("iteratorType must be one of 'values', 'keys' or 'entries'")
  }
}

export default getIterator
