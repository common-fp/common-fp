import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import flattenToDepth from '#lib/array/flatten-to-depth'

suite('array/flatten-to-depth', () => {
  const arr = [1, [2, [3, [4]]], 5]

  test('returns the expected result', () => {
    expect(flattenToDepth(0)(arr)).to.deep.equal([1, [2, [3, [4]]], 5])
    expect(flattenToDepth(2)(arr)).to.deep.equal([1, 2, 3, [4], 5])
    expect(flattenToDepth(Infinity)(arr)).to.deep.equal([1, 2, 3, 4, 5])
  })

  test('shared internals are called as expected', () => {
    const flattenTwice = flattenToDepth(2)
    expect(si.assertArgIsInt.argsPerCall).to.deep.equal([
      [2, 'depth', 'flattenToDepth', { nonNegative: true }],
    ])

    flattenTwice(arr)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [arr, 'anArray', 'array', 'flattenToDepth'],
    ])
  })

  test('int assertion is skipped at depth Infinity', () => {
    flattenToDepth(Infinity)
    expect(si.assertArgIsInt.argsPerCall).to.deep.equal([])
  })
})
