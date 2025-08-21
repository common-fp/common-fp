import { expect } from 'chai'
import { spy } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import findKey from '#lib/find-key'

const propGte2 = obj => obj.prop >= 2

suite('find-key', () => {
  test('returns the expected result', () => {
    expect(findKey(propGte2)([{ prop: 1 }, { prop: 2 }])).to.equal(1)
    expect(findKey(propGte2)([{ prop: 1 }])).to.equal(undefined)
  })

  test('predicate is called as expected', () => {
    const coll = [{ prop: 1 }, { prop: 2 }, { prop: 3 }]
    const propGte2Spy = spy(propGte2)
    findKey(propGte2Spy)(coll)
    expect(propGte2Spy.argsPerCall).to.deep.equals([
      [{ prop: 1 }, 0, coll],
      [{ prop: 2 }, 1, coll],
    ])
  })

  test('shared internals are called as expected', () => {
    const findKeyWithpropGte2 = findKey(propGte2)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [propGte2, 'predicate', 'function', 'findKey'],
    ])

    const coll = [{ prop: 1 }, { prop: 2 }]
    findKeyWithpropGte2(coll)
    expect(si.getType.argsPerCall).to.deep.equal([[coll]])
    expect(si.assertArgTypeIsOneOf.argsPerCall).to.deep.equal([
      ['array', 'collection', si.commonTypes.entryCollection, 'findKey'],
    ])
    expect(si.getIterator.argsPerCall).to.deep.equal([
      ['entries', coll, 'array'],
    ])
  })
})
