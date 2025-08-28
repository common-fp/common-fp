import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import mShuffle from '#lib/mutable/array/m-shuffle'

suite('mutable/array/m-shuffle', () => {
  test('returns the expected result', () => {
    const arr = [1, 2, 3]
    si.getRandomInt.resultPerCall = [0, 2]
    const result = mShuffle(arr)
    expect(result).to.deep.equal([1, 3, 2])
    expect(arr).to.equal(result)
  })

  test('shared internals are called as expected', () => {
    const arr = [1, 2, 3]
    mShuffle(arr)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [arr, 'anArray', 'array', 'mShuffle'],
    ])
  })
})
