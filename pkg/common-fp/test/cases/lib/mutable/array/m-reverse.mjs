import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import mReverse from '#lib/mutable/array/m-reverse'

suite('mutable/array/m-reverse', () => {
  test('returns the expected result', () => {
    const arr = [1, 2, 3]
    const result = mReverse(arr)
    expect(result).to.deep.equal([3, 2, 1])
    expect(arr).to.equal(result)
  })

  test('shared internals are called as expected', () => {
    const arr = [1, 2, 3]
    mReverse(arr)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [arr, 'anArray', 'array', 'mReverse'],
    ])
  })
})
