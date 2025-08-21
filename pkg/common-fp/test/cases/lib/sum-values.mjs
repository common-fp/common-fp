import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import sumValues from '#lib/sum-values'

suite('sum-values', () => {
  const arr = [1, 2, 3]
  test('returns the expected result', () => {
    expect(sumValues(arr)).to.equal(6)
    expect(sumValues([])).to.equal(0)
  })

  test('shared internals are called as expected', () => {
    sumValues(arr)
    expect(si.getType.argsPerCall).to.deep.equal([[arr]])
    expect(si.assertArgTypeIsOneOf.argsPerCall).to.deep.equal([
      ['array', 'collection', si.commonTypes.collection, 'sumValues'],
    ])
    expect(si.assertArgHasValuesOfType.argsPerCall).to.deep.equal([
      [arr, 'collection', 'number', 'sumValues'],
    ])
    expect(si.getIterator.argsPerCall).deep.equals([['values', arr, 'array']])
  })
})
