import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import keepLast from '#lib/keep-last'

suite('keep-last', () => {
  test('array', () => {
    const arr = [1, 2, 3]

    expect(keepLast(0)(arr)).to.deep.equal([])
    expect(keepLast(1)(arr)).to.deep.equal([3])
    expect(keepLast(2)(arr)).to.deep.equal([2, 3])
    expect(keepLast(4)(arr)).to.deep.equal([1, 2, 3])
  })

  test('shared internals are called as expected', () => {
    const numToKeep = 2
    const coll = [1, 2, 3]
    const keepLast2 = keepLast(numToKeep)
    expect(si.assertArgIsInt.argsPerCall).to.deep.equal([
      [numToKeep, 'numToKeep', 'keepLast', { nonNegative: true }],
    ])

    keepLast2(coll)
    expect(si.assertArgIsOneOfType.argsPerCall).to.deep.equal([
      [coll, 'sequence', si.commonTypes.sequence, 'keepLast'],
    ])
  })
})
