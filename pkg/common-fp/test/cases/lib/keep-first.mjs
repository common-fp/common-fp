import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import keepFirst from '#lib/keep-first'

suite('keep-first', () => {
  test('returns the expected result', () => {
    const arr = [1, 2, 3]

    expect(keepFirst(0)(arr)).to.deep.equal([])
    expect(keepFirst(1)(arr)).to.deep.equal([1])
    expect(keepFirst(2)(arr)).to.deep.equal([1, 2])
    expect(keepFirst(4)(arr)).to.deep.equal([1, 2, 3])
  })

  test('shared internals are called as expected', () => {
    const numToKeep = 2
    const coll = [1, 2, 3]

    const keepFirst2 = keepFirst(numToKeep)
    expect(si.assertArgIsInt.argsPerCall).to.deep.equal([
      [numToKeep, 'num', 'keepFirst', { nonNegative: true }],
    ])

    keepFirst2(coll)
    expect(si.assertArgIsOneOfType.argsPerCall).to.deep.equal([
      [coll, 'sequence', si.commonTypes.sequence, 'keepFirst'],
    ])
  })
})
