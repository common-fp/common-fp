import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import mDiscardFirst from '#lib/mutable/array/m-discard-first'

suite('mutable/array/m-discard-first', () => {
  test('returns the expected result', () => {
    let arr = [1, 2, 3]
    let res = mDiscardFirst(0)(arr)
    expect(res).to.deep.equal([1, 2, 3])
    expect(arr).to.equal(res)

    arr = [1, 2, 3]
    res = mDiscardFirst(1)(arr)
    expect(res).to.deep.equal([2, 3])
    expect(arr).to.equal(res)

    arr = [1, 2, 3]
    res = mDiscardFirst(2)(arr)
    expect(res).to.deep.equal([3])
    expect(arr).to.equal(res)

    arr = [1, 2, 3]
    res = mDiscardFirst(4)(arr)
    expect(res).to.deep.equal([])
    expect(arr).to.equal(res)
  })

  test('shared internals are called as expected', () => {
    const arr = [1, 2, 3]
    mDiscardFirst(0)(arr)
    expect(si.assertArgIsInt.argsPerCall).to.deep.equal([
      [0, 'num', 'mDiscardFirst', { nonNegative: true }],
    ])
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [arr, 'anArray', 'array', 'mDiscardFirst'],
    ])
  })
})
