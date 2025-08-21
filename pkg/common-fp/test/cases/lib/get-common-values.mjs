import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import getCommonValues from '#lib/get-common-values'

suite('get-common-values', () => {
  const arr = [
    [1, 2, 3],
    [2, 3, 4],
  ]

  test('returns the expected result', () => {
    expect(getCommonValues(arr)).to.deep.equal([2, 3])
    expect(getCommonValues([[1, 2]])).to.deep.equal([1, 2])
    expect(getCommonValues([new Set([1, 2])])).to.deep.equal([1, 2])
    expect(
      getCommonValues([
        [1, 2],
        [3, 4],
      ])
    ).to.deep.equal([])
  })

  test('shared internals are called as expected', () => {
    getCommonValues(arr)
    expect(si.assertArgIsArrayOfAcceptedTypes.argsPerCall).to.deep.equal([
      [arr, 'anArray', si.commonTypes.valueCollection, 'getCommonValues'],
    ])
    expect(si.ensureSet.argsPerCall).to.deep.equal([
      [[1, 2, 3], 0, arr],
      [[2, 3, 4], 1, arr],
    ])
  })
})
