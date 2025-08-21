import { expect } from 'chai'
import { spy } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import mKeepFirstWhile from '#lib/mutable/array/m-keep-first-while'

suite('mutable/array/m-keep-first-while', () => {
  const lt3 = n => n < 3

  test('returns the expected result', () => {
    const arr = [1, 2, 3]
    const result = mKeepFirstWhile(lt3)(arr)
    expect(result).to.deep.equal([1, 2])
    expect(arr).to.equal(result)
  })

  test('predicate is called as expected', () => {
    const lt3Spy = spy(lt3)
    const arr = [1, 2, 3, 4]
    mKeepFirstWhile(lt3Spy)(arr)
    expect(lt3Spy.argsPerCall).to.deep.equal([
      [1, 0, arr],
      [2, 1, arr],
      [3, 2, arr],
    ])
  })

  test('shared internals are called as expected', () => {
    const arr = [1, 2, 3]
    mKeepFirstWhile(lt3)(arr)

    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [lt3, 'predicate', 'function', 'mKeepFirstWhile'],
      [arr, 'anArray', 'array', 'mKeepFirstWhile'],
    ])
  })
})
