import getType from './get-type.mjs'

const assertArgIsInt = (n, argName, utilName, furtherAssertions = {}) => {
  const nType = getType(n)
  const { nonNegative, positive } = furtherAssertions

  if (nType !== 'number') {
    throw new Error(
      `${utilName} requires argument '${argName}' to be an integer - but a ${nType} was passed`
    )
  }
  if (nonNegative) {
    const isNonNegative = Number.isInteger(n) && n >= 0
    if (!isNonNegative) {
      throw new Error(
        `${utilName} requires argument '${argName}' to be an integer greater than or equal to zero - but ${n} was passed`
      )
    }
  } else if (positive) {
    const isPositive = Number.isInteger(n) && n > 0
    if (!isPositive) {
      throw new Error(
        `${utilName} requires argument '${argName}' to be a positive integer - but ${n} was passed`
      )
    }
  } else {
    if (!Number.isInteger(n)) {
      throw new Error(
        `${utilName} requires argument '${argName}' to be an integer - but ${n} was passed`
      )
    }
  }
}

export default assertArgIsInt
