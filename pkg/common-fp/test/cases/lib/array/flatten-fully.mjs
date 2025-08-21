import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import flattenFully from '#lib/array/flatten-fully'

suite('array/flatten-fully', () => {
  const arr = [1, [2, [3, [4]]], 5]

  test('returns the expected result', () => {
    expect(flattenFully(arr)).to.deep.equal([1, 2, 3, 4, 5])
  })

  test('shared internals are called as expected', () => {
    flattenFully(arr)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [arr, 'anArray', 'array', 'flattenFully'],
    ])
  })
})
