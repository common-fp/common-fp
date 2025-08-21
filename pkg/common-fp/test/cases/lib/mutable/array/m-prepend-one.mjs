import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import mPrependOne from '#lib/mutable/array/m-prepend-one'

suite('mutable/array/m-prepend-one', () => {
  test('returns the expected result', () => {
    const bc = ['b', 'c']
    const result = mPrependOne('a')(bc)
    expect(result).to.deep.equal(['a', 'b', 'c'])
    expect(result).to.equal(bc)
  })

  test('shared internals are called as expected', () => {
    const bc = ['b', 'c']
    mPrependOne('a')(bc)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [bc, 'anArray', 'array', 'mPrependOne'],
    ])
  })
})
