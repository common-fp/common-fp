import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import mPrependAll from '#lib/mutable/array/m-prepend-all'

suite('mutable/array/m-prepend-all', () => {
  test('returns the expected result', () => {
    const ab = ['a', 'b']
    const cd = ['c', 'd']

    const result = mPrependAll(ab)(cd)

    expect(result).to.deep.equal(['a', 'b', 'c', 'd'])
    expect(result).to.equal(cd)
  })

  test('shared internals are called as expected', () => {
    const ab = ['a', 'b']
    const cd = ['c', 'd']
    mPrependAll(ab)(cd)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [ab, 'prependedValues', 'array', 'mPrependAll'],
      [cd, 'anArray', 'array', 'mPrependAll'],
    ])
  })
})
