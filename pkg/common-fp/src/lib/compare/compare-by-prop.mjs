import {
  assertArgIsOneOfType,
  assertArgIsType,
  commonTypes as ct,
} from '@common-fp/shared-internals'

const compareByProp = (key, compareFn) => {
  assertArgIsOneOfType(key, 'key', ct.propertyKey, 'compareByProp')
  assertArgIsType(compareFn, 'compareFn', 'function', 'compareByProp')

  return (left, right) => {
    const leftVal = left?.[key]
    const rightVal = right?.[key]

    // spec defines how to handle undefined here
    // https://tc39.es/ecma262/#sec-comparearrayelements
    if (leftVal === undefined && rightVal === undefined) return 0
    if (leftVal === undefined) return 1
    if (rightVal === undefined) return -1

    return compareFn(leftVal, rightVal)
  }
}

export default compareByProp
