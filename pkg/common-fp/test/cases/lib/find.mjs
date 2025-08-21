import { expect } from 'chai'
import { spy } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import find from '#lib/find'

suite('find', () => {
  const propGte2 = obj => obj.prop >= 2
  const coll = [{ prop: 1 }, { prop: 2 }, { prop: 3 }]

  test('returns the expected result', () => {
    expect(find(propGte2)(coll)).to.deep.equal({ prop: 2 })
    expect(find(propGte2)([{ prop: 1 }])).to.be.undefined
  })

  test('predicate is called as expected', () => {
    const propGte2Spy = spy(propGte2)
    find(propGte2Spy)(coll)
    expect(propGte2Spy.argsPerCall).to.deep.equal([
      [{ prop: 1 }, 0, coll],
      [{ prop: 2 }, 1, coll],
    ])
  })

  test('shared internals are called as expected', () => {
    const findWherePropGte2 = find(propGte2)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [propGte2, 'predicate', 'function', 'find'],
    ])

    findWherePropGte2(coll)
    expect(si.getType.argsPerCall).to.deep.equal([[coll]])
    expect(si.assertArgTypeIsOneOf.argsPerCall).to.deep.equal([
      ['array', 'collection', si.commonTypes.collection, 'find'],
    ])
    expect(si.getIterator.argsPerCall).to.deep.equal([
      ['entries', coll, 'array'],
    ])
  })
})
