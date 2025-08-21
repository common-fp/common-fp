import { expect } from 'chai'
import { spy } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import discardFirstWhile from '#lib/array/discard-first-while'

suite('array/discard-first-while', () => {
  const lt3 = n => n < 3
  const arr = [1, 2, 3, 4]

  test('returns the expected result', () => {
    expect(discardFirstWhile(lt3)(arr)).to.deep.equal([3, 4])
  })

  test('calls predicate as expected', () => {
    const lt3Spy = spy(lt3)

    discardFirstWhile(lt3Spy)(arr)
    expect(lt3Spy.argsPerCall).to.deep.equal([
      [1, 0, arr],
      [2, 1, arr],
      [3, 2, arr],
    ])
  })

  test('shared internals are called as expected', () => {
    discardFirstWhile(lt3)(arr)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [lt3, 'predicate', 'function', 'discardFirstWhile'],
      [arr, 'anArray', 'array', 'discardFirstWhile'],
    ])
  })
})
