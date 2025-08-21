import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import getMinValue from '#lib/get-min-value'

suite('get-min-value', () => {
  test('returns the expected result', () => {
    const arr = [2, 1, 3]
    expect(getMinValue(arr)).to.equal(1)
    expect(getMinValue([])).to.equal(undefined)
  })

  test('shared internals are called as expected', () => {
    const arr = [1, 2, 3]
    getMinValue(arr)
    expect(si.getType.argsPerCall).to.deep.equal([[arr]])
    expect(si.assertArgTypeIsOneOf.argsPerCall).to.deep.equal([
      ['array', 'collection', si.commonTypes.collection, 'getMinValue'],
    ])
    expect(si.assertArgHasValuesOfType.argsPerCall).to.deep.equal([
      [arr, 'collection', 'number', 'getMinValue'],
    ])
    expect(si.getIterator.argsPerCall).to.deep.equal([['values', arr, 'array']])
  })
})
