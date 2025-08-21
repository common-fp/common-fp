import { assertArgIsArrayOfType } from '@common-fp/shared-internals'

/**
 * commonly known as _.zip
 * https://lodash.com/docs/4.17.15#zip
 *
 * wiki article
 * https://en.wikipedia.org/wiki/Transpose
 */
const transpose = anArray => {
  assertArgIsArrayOfType(anArray, 'anArray', 'array', 'transpose')
  if (!anArray.length) return []

  validateArraysHaveSameLength(anArray)

  const numCols = anArray[0].length
  const numRows = anArray.length
  const result = new Array(numCols)

  for (let col = 0; col < numCols; col += 1) {
    const group = new Array(numRows)

    for (let row = 0; row < numRows; row += 1) {
      group[row] = anArray[row][col]
    }

    result[col] = group
  }

  return result
}

function validateArraysHaveSameLength(anArray) {
  const expectedLength = anArray[0].length

  const allArraysHaveSameLength = anArray
    .slice(1)
    .every(arr => arr.length === expectedLength)
  if (!allArraysHaveSameLength) {
    const errMsg =
      "transpose requires 'anArray' to contain arrays of equal length"
    throw new Error(errMsg)
  }
}

export default transpose
