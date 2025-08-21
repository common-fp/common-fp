import { expect } from 'chai'
import { spy, suiteWithResources } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import pAll from '#lib/async/p-all'

const pLt4 = async num => num < 4

suite('async/p-all', () => {
  const pLt4Spy = spy(pLt4)

  test('returns the expected result', async () => {
    expect(await pAll(pLt4)([3, 2, 1])).to.be.true
    expect(await pAll(pLt4)([4, 3, 2])).to.be.false
  })

  test('shared internals are called as expected', async () => {
    const allLt4 = pAll(pLt4)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [pLt4, 'predicate', 'function', 'pAll'],
    ])

    const coll = [3, 2, 1]
    await allLt4(coll)
    expect(si.getType.argsPerCall).to.deep.equal([[coll]])
    expect(si.assertArgTypeIsOneOf.argsPerCall).to.deep.equal([
      ['array', 'collection', si.commonTypes.collection, 'pAll'],
    ])
    expect(si.getIterator.argsPerCall).to.deep.equal([
      ['entries', coll, 'array'],
    ])
  })

  suiteWithResources('predicate is called as expected', [pLt4Spy], () => {
    test('all pass - iterates all elements', async () => {
      const coll = [3, 2, 1]
      await pAll(pLt4Spy)(coll)
      expect(pLt4Spy.argsPerCall).to.deep.equal([
        [3, 0, coll],
        [2, 1, coll],
        [1, 2, coll],
      ])
    })

    test('first element fails - only iterates first element', async () => {
      const coll = [4, 3, 2]
      await pAll(pLt4Spy)(coll)
      expect(pLt4Spy.argsPerCall).to.deep.equal([[4, 0, coll]])
    })
  })
})
