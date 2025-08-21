import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import flattenOnce from '#lib/array/flatten-once'

suite('array/flatten-once', () => {
  const arr = [1, 2, [3, [4]], 5]

  test('returns the expected result', () => {
    expect(flattenOnce(arr)).to.deep.equal([1, 2, 3, [4], 5])
  })

  test('shared internals are called as expected', () => {
    flattenOnce(arr)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [arr, 'anArray', 'array', 'flattenOnce'],
    ])
  })
})
