import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import mKeepLast from '#lib/mutable/array/m-keep-last'

suite('mutable/array/m-keep-last', () => {
  test('returns the expected result', () => {
    let arr = [1, 2, 3]
    let result = mKeepLast(4)(arr)
    expect(result).to.deep.equal([1, 2, 3])
    expect(arr).to.equal(result)

    result = mKeepLast(2)(arr)
    expect(result).to.deep.equal([2, 3])
    expect(arr).to.equal(result)

    arr = [1, 2, 3]
    result = mKeepLast(0)(arr)
    expect(result).to.deep.equal([])
    expect(arr).to.equal(result)
  })

  test('shared internals are called as expected', () => {
    const arr = [1, 2, 3]
    mKeepLast(4)(arr)
    expect(si.assertArgIsInt.argsPerCall).to.deep.equal([
      [4, 'numToKeep', 'mKeepLast', { nonNegative: true }],
    ])
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [arr, 'anArray', 'array', 'mKeepLast'],
    ])
  })
})
