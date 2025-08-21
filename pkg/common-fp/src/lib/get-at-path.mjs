import {
  assertArgIsArrayOfAcceptedTypes,
  commonTypes as ct,
} from '@common-fp/shared-internals'
import getAtPathInternal from '#internal/get-at-path'

const getAtPath = path => {
  assertArgIsArrayOfAcceptedTypes(path, 'path', ct.propertyKey, 'getAtPath')

  return anObject => getAtPathInternal(path, anObject)
}

export default getAtPath
