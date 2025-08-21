import { expect } from 'chai'
import { spy } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import mKeepLastWhile from '#lib/mutable/array/m-keep-last-while'

suite('mutable/array/m-keep-last-while', () => {
  const gt2 = n => n > 2

  test('returns the expected result', () => {
    const arr = [1, 2, 3, 4]
    const result = mKeepLastWhile(gt2)(arr)
    expect(result).to.deep.equal([3, 4])
    expect(arr).to.equal(result)
  })

  test('predicate is called as expected', () => {
    const arr = [1, 2, 3, 4]
    const gt2Spy = spy(gt2)
    mKeepLastWhile(gt2Spy)(arr)
    expect(gt2Spy.argsPerCall).to.deep.equal([
      [4, 3, arr],
      [3, 2, arr],
      [2, 1, arr],
    ])
  })

  test('shared internals are called as expected', () => {
    const arr = [1, 2, 3, 4]
    mKeepLastWhile(gt2)(arr)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [gt2, 'predicate', 'function', 'mKeepLastWhile'],
      [arr, 'anArray', 'array', 'mKeepLastWhile'],
    ])
  })
})
