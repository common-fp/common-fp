import { expect } from 'chai'
import { spy } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import findLastKey from '#lib/array/find-last-key'

suite('array/find-last-key', () => {
  const arr = [1, 2, 3, 4]
  const lt = r => l => l < r
  const lt3 = lt(3)

  test('returns expected result', () => {
    expect(findLastKey(lt3)(arr)).to.equal(1)
    expect(findLastKey(lt(0))(arr)).to.equal(undefined)
  })

  test('calls predicate as expected', () => {
    const lt3Spy = spy(lt3)
    findLastKey(lt3Spy)(arr)
    expect(lt3Spy.argsPerCall).to.deep.equal([
      [4, 3, arr],
      [3, 2, arr],
      [2, 1, arr],
    ])
  })

  test('shared internals are called as expected', () => {
    findLastKey(lt3)(arr)

    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [lt3, 'predicate', 'function', 'findLastKey'],
      [arr, 'anArray', 'array', 'findLastKey'],
    ])
  })
})
