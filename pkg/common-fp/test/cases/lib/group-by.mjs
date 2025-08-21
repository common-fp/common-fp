import { expect } from 'chai'
import { spy } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import groupBy from '#lib/group-by'

suite('group-by', () => {
  const coll = [0.9, 1.2, 1.8]

  test('returns the expected results', () => {
    const result = groupBy(Math.ceil)(coll)

    expect(result).to.deep.equal({
      1: [0.9],
      2: [1.2, 1.8],
    })
  })

  test('toGroup is called as expected', () => {
    const ceilSpy = spy(Math.ceil)
    groupBy(ceilSpy)(coll)
    expect(ceilSpy.argsPerCall).to.deep.equal([
      [0.9, 0, coll],
      [1.2, 1, coll],
      [1.8, 2, coll],
    ])
  })

  test('shared internals are called as expected', () => {
    const groupByCeil = groupBy(Math.ceil)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [Math.ceil, 'toGroup', 'function', 'groupBy'],
    ])

    groupByCeil(coll)
    expect(si.getType.argsPerCall).to.deep.equal([[coll]])
    expect(si.assertArgTypeIsOneOf.argsPerCall).to.deep.equal([
      ['array', 'collection', si.commonTypes.collection, 'groupBy'],
    ])
    expect(si.getIterator.argsPerCall).to.deep.equal([
      ['entries', coll, 'array'],
    ])
  })
})
