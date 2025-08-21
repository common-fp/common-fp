import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import getExclusiveValues from '#lib/get-exclusive-values'

suite('get-exclusive', () => {
  const anArray = [
    [1, 2, 3],
    [2, 3, 4],
  ]

  test('returns expected results', () => {
    expect(getExclusiveValues(anArray)).to.deep.equal([1, 4])
    expect(getExclusiveValues([])).to.deep.equal([])
    expect(getExclusiveValues([[1, 2]])).to.deep.equal([1, 2])
    expect(getExclusiveValues([[1, 2], new Set([3, 4])])).to.deep.equal([
      1, 2, 3, 4,
    ])
  })

  test('shared internals are called as expected', () => {
    getExclusiveValues(anArray)
    expect(si.assertArgIsArrayOfAcceptedTypes.argsPerCall).to.deep.equal([
      [
        anArray,
        'anArray',
        si.commonTypes.valueCollection,
        'getExclusiveValues',
      ],
    ])
    expect(si.ensureSet.argsPerCall).to.deep.equal([
      [[1, 2, 3], 0, anArray],
      [[2, 3, 4], 1, anArray],
    ])
  })
})
