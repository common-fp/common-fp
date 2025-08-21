import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import mDiscardLast from '#lib/mutable/array/m-discard-last'

suite('mutable/array/m-discard-last', () => {
  test('returns the expected result', () => {
    let arr = [1, 2, 3]
    let res = mDiscardLast(0)(arr)
    expect(res).to.deep.equal([1, 2, 3])
    expect(arr).to.equal(res)

    arr = [1, 2, 3]
    res = mDiscardLast(1)(arr)
    expect(res).to.deep.equal([1, 2])
    expect(arr).to.equal(res)

    arr = [1, 2, 3]
    res = mDiscardLast(2)(arr)
    expect(res).to.deep.equal([1])
    expect(arr).to.equal(res)

    arr = [1, 2, 3]
    res = mDiscardLast(4)(arr)
    expect(res).to.deep.equal([])
    expect(arr).to.equal(res)
  })

  test('shared internals are called as expected', () => {
    const arr = [1, 2, 3]
    mDiscardLast(0)(arr)
    expect(si.assertArgIsInt.argsPerCall).to.deep.equal([
      [0, 'numToDiscard', 'mDiscardLast', { nonNegative: true }],
    ])
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [arr, 'anArray', 'array', 'mDiscardLast'],
    ])
  })
})
