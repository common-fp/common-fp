import { expect } from 'chai'
import { spy } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import discardLastWhile from '#lib/array/discard-last-while'

suite('array/discard-last-while', () => {
  const gt2 = n => n > 2
  const arr = [1, 2, 3, 4]

  test('returns the expected result', () => {
    expect(discardLastWhile(gt2)(arr)).to.deep.equal([1, 2])
  })

  test('calls predicate as expected', () => {
    const gt2Spy = spy(gt2)
    discardLastWhile(gt2Spy)(arr)
    expect(gt2Spy.argsPerCall).to.deep.equal([
      [4, 3, arr],
      [3, 2, arr],
      [2, 1, arr],
    ])
  })

  test('shared internals are called as expected', () => {
    discardLastWhile(gt2)(arr)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [gt2, 'predicate', 'function', 'discardLastWhile'],
      [arr, 'anArray', 'array', 'discardLastWhile'],
    ])
  })
})
