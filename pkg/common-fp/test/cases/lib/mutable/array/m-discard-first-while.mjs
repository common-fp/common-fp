import { expect } from 'chai'
import { spy } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import mDiscardFirstWhile from '#lib/mutable/array/m-discard-first-while'

suite('mutable/array/m-discard-first-while', () => {
  const lt3 = n => n < 3

  test('returns the expected result', () => {
    const arr = [1, 2, 3]
    const result = mDiscardFirstWhile(lt3)(arr)
    expect(result).to.deep.equal([3])
    expect(arr).to.equal(result)
  })

  test('calls predicate as expected', () => {
    const lt3Spy = spy(lt3)
    const arr = [1, 2, 3, 4]
    mDiscardFirstWhile(lt3Spy)(arr)
    expect(lt3Spy.argsPerCall).to.deep.equal([
      [1, 0, arr],
      [2, 1, arr],
      [3, 2, arr],
    ])
  })

  test('shared internals are called as expected', () => {
    const arr = [1, 2, 3]
    mDiscardFirstWhile(lt3)(arr)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [lt3, 'predicate', 'function', 'mDiscardFirstWhile'],
      [arr, 'anArray', 'array', 'mDiscardFirstWhile'],
    ])
  })
})
