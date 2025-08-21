import { expect } from 'chai'
import { spy, suiteWithResources } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import pAny from '#lib/async/p-any'

const pGt3 = async n => n > 3

suite('async/p-any', () => {
  const pGt3Spy = spy(pGt3)

  test('returns the expected result', async () => {
    expect(await pAny(pGt3)([3, 2, 1])).to.be.false
    expect(await pAny(pGt3)([4, 3, 2])).to.be.true
  })

  test('shared internals are called as expected', async () => {
    const anyGt3 = pAny(pGt3)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [pGt3, 'predicate', 'function', 'pAny'],
    ])

    const coll = [3, 2, 1]
    await anyGt3(coll)
    expect(si.getType.argsPerCall).to.deep.equal([[coll]])
    expect(si.assertArgTypeIsOneOf.argsPerCall).to.deep.equal([
      ['array', 'collection', si.commonTypes.collection, 'pAny'],
    ])
    expect(si.getIterator.argsPerCall).to.deep.equal([
      ['entries', coll, 'array'],
    ])
  })

  suiteWithResources('predicate is called as expected', [pGt3Spy], () => {
    test('none pass - all are iterated', async () => {
      const coll = [3, 2, 1]
      await pAny(pGt3Spy)(coll)
      expect(pGt3Spy.argsPerCall).to.deep.equal([
        [3, 0, coll],
        [2, 1, coll],
        [1, 2, coll],
      ])
    })

    test('first passes - only one is iterated', async () => {
      const coll = [4, 3, 2]
      await pAny(pGt3Spy)(coll)
      expect(pGt3Spy.argsPerCall).to.deep.equal([[4, 0, coll]])
    })
  })
})
