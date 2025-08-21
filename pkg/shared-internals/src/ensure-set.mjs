/**
 * this utility expects arrOrSet to have already been asserted to be an array
 * or set
 */

import getType from './get-type.mjs'

const ensureSet = arrOrSet => {
  return getType(arrOrSet) === 'set' ? arrOrSet : new Set(arrOrSet)
}

export default ensureSet
