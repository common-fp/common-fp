import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import mOrder from '#lib/mutable/array/m-order'

suite('mutable/array/m-order', () => {
  const asc = (l, r) => l - r
  const desc = (l, r) => r - l

  test('returns the expected result', () => {
    const arr1 = [1, 10, 2]
    let result = mOrder(desc)(arr1)
    expect(result).to.deep.equal([10, 2, 1])
    expect(result).to.equal(arr1)

    const arr2 = [1, 10, 2]
    result = mOrder(asc)(arr2)
    expect(result).to.deep.equal([1, 2, 10])
    expect(result).to.equal(arr2)
  })

  test('shared internals are called as expected', () => {
    const arr1 = [1, 10, 2]
    mOrder(asc)(arr1)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [asc, 'compareFn', 'function', 'mOrder'],
      [arr1, 'anArray', 'array', 'mOrder'],
    ])
  })
})
