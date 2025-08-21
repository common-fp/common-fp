import {
  assertArgIsArrayOfAcceptedTypes,
  assertArgIsType,
  commonTypes as ct,
} from '@common-fp/shared-internals'
import getAtPath from '#internal/get-at-path'

const compareByPath = (path, compareFn) => {
  assertArgIsArrayOfAcceptedTypes(path, 'path', ct.propertyKey, 'compareByPath')
  assertArgIsType(compareFn, 'compareFn', 'function', 'compareByPath')

  return (left, right) => {
    const leftProp = getAtPath(path, left)
    const rightProp = getAtPath(path, right)

    // spec defines how to handle undefined here
    // https://tc39.es/ecma262/#sec-comparearrayelements
    if (leftProp === undefined && rightProp === undefined) return 0
    if (leftProp === undefined) return 1
    if (rightProp === undefined) return -1

    return compareFn(leftProp, rightProp)
  }
}

export default compareByPath
