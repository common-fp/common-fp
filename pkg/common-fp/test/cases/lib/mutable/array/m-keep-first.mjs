import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import mKeepFirst from '#lib/mutable/array/m-keep-first'

suite('mutable/array/m-keep-first', () => {
  test('returns the expected result', () => {
    let arr = [1, 2, 3]
    let result = mKeepFirst(4)(arr)
    expect(result).to.deep.equal([1, 2, 3])
    expect(arr).to.equal(result)

    result = mKeepFirst(2)(arr)
    expect(result).to.deep.equal([1, 2])
    expect(arr).to.equal(result)

    arr = [1, 2, 3]
    result = mKeepFirst(0)(arr)
    expect(result).to.deep.equal([])
    expect(arr).to.equal(result)
  })

  test('shared internals are called as expected', () => {
    const arr = [1, 2, 3]
    const keepFirst4 = mKeepFirst(4)
    expect(si.assertArgIsInt.argsPerCall).to.deep.equal([
      [4, 'numToKeep', 'mKeepFirst', { nonNegative: true }],
    ])

    keepFirst4(arr)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [arr, 'anArray', 'array', 'mKeepFirst'],
    ])
  })
})
