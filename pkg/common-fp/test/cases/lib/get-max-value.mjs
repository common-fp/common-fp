import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import getMaxValue from '#lib/get-max-value'

suite('get-max-value', () => {
  test('returns the expected result', () => {
    const arr = [2, 1, 3]
    expect(getMaxValue(arr)).to.equal(3)
    expect(getMaxValue([])).to.equal(undefined)
  })

  test('shared internals are called as expected', () => {
    const arr = [1, 2, 3]
    getMaxValue(arr)
    expect(si.getType.argsPerCall).to.deep.equal([[arr]])
    expect(si.assertArgTypeIsOneOf.argsPerCall).to.deep.equal([
      ['array', 'collection', si.commonTypes.collection, 'getMaxValue'],
    ])
    expect(si.assertArgHasValuesOfType.argsPerCall).to.deep.equal([
      [arr, 'collection', 'number', 'getMaxValue'],
    ])
    expect(si.getIterator.argsPerCall).to.deep.equal([['values', arr, 'array']])
  })
})
