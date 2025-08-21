import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import mAppendAll from '#lib/mutable/array/m-append-all'

suite('mutable/array/m-append-all', () => {
  test('returns the expected result', () => {
    const ab = ['a', 'b']
    const cd = ['c', 'd']
    const result = mAppendAll(cd)(ab)
    expect(result).to.deep.equal(['a', 'b', 'c', 'd'])
    expect(result).to.equal(ab)
  })

  test('shared internals are called as expected', () => {
    const ab = ['a', 'b']
    const cd = ['c', 'd']
    mAppendAll(cd)(ab)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [cd, 'appended', 'array', 'mAppendAll'],
      [ab, 'base', 'array', 'mAppendAll'],
    ])
  })
})
