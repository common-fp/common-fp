import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import getAverageValue from '#lib/get-average-value'

suite('get-average-value', () => {
  test('returns the expected result', () => {
    const arr = [1, 1, 1, 5]
    expect(getAverageValue(arr)).to.equal(2)
    expect(getAverageValue([])).to.equal(undefined)
    expect(getAverageValue([1])).to.equal(1)
    expect(getAverageValue([1, 2])).to.equal(1.5)
  })

  test('shared internals are called as expected', () => {
    const nums = []
    getAverageValue(nums)
    expect(si.assertArgTypeIsOneOf.argsPerCall).to.deep.equal([
      ['array', 'nums', si.commonTypes.collection, 'getAverageValue'],
    ])
    expect(si.assertArgHasValuesOfType.argsPerCall).to.deep.equal([
      [nums, 'nums', 'number', 'getAverageValue'],
    ])
    expect(si.getIterator.argsPerCall).to.deep.equal([
      ['values', nums, 'array'],
    ])
  })
})
