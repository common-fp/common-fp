import { expect } from 'chai'
import { spy } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import findLast from '#lib/array/find-last'

suite('array/find-last', () => {
  const arr = [1, 2, 3, 4]
  const lt = r => l => l < r
  const lt3 = lt(3)

  test('returns the expected result', () => {
    expect(findLast(lt3)(arr)).to.equal(2)
  })

  test('predicate is called as expected', () => {
    const lt3Spy = spy(lt3)
    findLast(lt3Spy)(arr)
    expect(lt3Spy.argsPerCall).to.deep.equal([
      [4, 3, arr],
      [3, 2, arr],
      [2, 1, arr],
    ])
  })

  test('shared internals are called as expected', () => {
    findLast(lt3)(arr)

    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [lt3, 'predicate', 'function', 'findLast'],
      [arr, 'anArray', 'array', 'findLast'],
    ])
  })

  expect(findLast(lt(0))(arr)).to.equal(undefined)
})
