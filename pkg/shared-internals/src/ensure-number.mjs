/**
 * this utility expects strOrNum to have already been asserted to be a string
 * or number
 */

const ensureNumber = strOrNum => {
  return typeof strOrNum === 'number' ? strOrNum : Number(strOrNum)
}

export default ensureNumber
