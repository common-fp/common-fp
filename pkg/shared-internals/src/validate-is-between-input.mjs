import assertArgIsType from './assert-arg-is-type.mjs'

const validateIsBetweenInput = (
  val1,
  val1Name,
  val2,
  val2Name,
  type,
  utilName,
  { exclusiveMin, exclusiveMax } = {}
) => {
  assertArgIsType(val1, val1Name, type, utilName)
  assertArgIsType(val2, val2Name, type, utilName)
  if (exclusiveMin !== undefined)
    assertArgIsType(exclusiveMin, 'exclusiveMin', 'boolean', utilName)
  if (exclusiveMax !== undefined)
    assertArgIsType(exclusiveMax, 'exclusiveMax', 'boolean', utilName)
}

export default validateIsBetweenInput
