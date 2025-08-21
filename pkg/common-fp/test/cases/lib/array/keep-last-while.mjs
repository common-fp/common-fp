import { expect } from 'chai'
import { spy } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import keepLastWhile from '#lib/array/keep-last-while'

suite('array/keep-last-while', () => {
  const gt2 = n => n > 2
  const arr = [1, 2, 3, 4]

  test('returns the expected result', () => {
    expect(keepLastWhile(gt2)(arr)).to.deep.equal([3, 4])
  })

  test('predicate is called as expected', () => {
    const gt2Spy = spy(gt2)
    keepLastWhile(gt2Spy)(arr)
    expect(gt2Spy.argsPerCall).to.deep.equal([
      [4, 3, arr],
      [3, 2, arr],
      [2, 1, arr],
    ])
  })

  test('shared internals are called as expected', () => {
    keepLastWhile(gt2)(arr)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [gt2, 'predicate', 'function', 'keepLastWhile'],
      [arr, 'anArray', 'array', 'keepLastWhile'],
    ])
  })
})
