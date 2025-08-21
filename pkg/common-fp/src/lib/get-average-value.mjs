import {
  assertArgHasValuesOfType,
  assertArgTypeIsOneOf,
  commonTypes as ct,
  getIterator,
  getType,
} from '@common-fp/shared-internals'

const getAverage = nums => {
  const numsType = getType(nums)
  assertArgTypeIsOneOf(numsType, 'nums', ct.collection, 'getAverageValue')
  assertArgHasValuesOfType(nums, 'nums', 'number', 'getAverageValue')

  const numArr = [...getIterator('values', nums, numsType)]
  if (!numArr.length) return undefined

  const total = numArr.reduce((runningTotal, num) => runningTotal + num, 0)
  return total / numArr.length
}

export default getAverage
