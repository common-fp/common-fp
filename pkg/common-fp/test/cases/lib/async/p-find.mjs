import { expect } from 'chai'
import { spy, suiteWithResources } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import pFind from '#lib/async/p-find'

const pGt2 = async n => n > 2

suite('async/p-find', () => {
  const pGt2Spy = spy(pGt2)
  test('returns expected result', async () => {
    expect(await pFind(pGt2)([1, 2, 3])).to.equal(3)
    expect(await pFind(pGt2)([1, 2])).to.be.undefined
  })

  suiteWithResources('predicate is called as expected', [pGt2Spy], () => {
    test('none found - iterates all elements', async () => {
      const coll = [-1, 0, 1]
      await pFind(pGt2Spy)(coll)
      expect(pGt2Spy.argsPerCall).to.deep.equal([
        [-1, 0, coll],
        [0, 1, coll],
        [1, 2, coll],
      ])
    })

    test('first found - iterates first element', async () => {
      const coll = [3, 2, 1]
      await pFind(pGt2Spy)(coll)
      expect(pGt2Spy.argsPerCall).to.deep.equal([[3, 0, coll]])
    })
  })

  test('shared internals are called as expected', async () => {
    const findGt2 = pFind(pGt2)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [pGt2, 'predicate', 'function', 'pFind'],
    ])

    const coll = [1, 2, 3]
    await findGt2(coll)
    expect(si.getType.argsPerCall).to.deep.equal([[coll]])
    expect(si.assertArgTypeIsOneOf.argsPerCall).to.deep.equal([
      ['array', 'collection', si.commonTypes.collection, 'pFind'],
    ])
    expect(si.getIterator.argsPerCall).to.deep.equal([
      ['entries', coll, 'array'],
    ])
  })
})
