import { expect } from 'chai'
import { spy } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import all from '#lib/all'

suite('all', () => {
  const lt4 = num => num < 4

  test('returns the expected result', () => {
    expect(all(lt4)([1, 2, 3])).to.be.true
    expect(all(lt4)([1, 4, 3])).to.be.false
  })

  test('calls the predicate as expected', () => {
    const coll1 = [1, 2, 3]
    const lt4Spy = spy(lt4)

    all(lt4Spy)(coll1)
    expect(lt4Spy.argsPerCall).to.deep.equal([
      [1, 0, coll1],
      [2, 1, coll1],
      [3, 2, coll1],
    ])
    lt4Spy.reset()

    const coll2 = [1, 4, 3]
    all(lt4Spy)([1, 4, 3])
    expect(lt4Spy.argsPerCall).to.deep.equal([
      [1, 0, coll2],
      [4, 1, coll2],
    ])
  })

  test('shared internals are called as expected', () => {
    const coll = [1, 2, 3]
    const allLt4 = all(lt4)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [lt4, 'predicate', 'function', 'all'],
    ])

    allLt4(coll)
    expect(si.getType.argsPerCall).to.deep.equal([[coll]])
    expect(si.assertArgTypeIsOneOf.argsPerCall).to.deep.equal([
      ['array', 'collection', si.commonTypes.collection, 'all'],
    ])
    expect(si.getIterator.argsPerCall).to.deep.equal([
      ['entries', coll, 'array'],
    ])
  })
})
