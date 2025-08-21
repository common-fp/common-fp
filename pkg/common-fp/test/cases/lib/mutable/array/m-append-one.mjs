import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import mAppendOne from '#lib/mutable/array/m-append-one'

suite('mutable/array/m-append-one', () => {
  test('returns the expected result', () => {
    const ab = ['a', 'b']
    const result = mAppendOne('c')(ab)

    expect(result).to.deep.equal(['a', 'b', 'c'])

    // ensure ab is mutated
    expect(result).to.equal(ab)
  })

  test('shared internals are called as expected', () => {
    const ab = ['a', 'b']
    mAppendOne('c')(ab)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [ab, 'anArray', 'array', 'mAppend'],
    ])
  })
})
