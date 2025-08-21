import { expect } from 'chai'
import { spy } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import pForEach from '#lib/async/p-for-each'

const pNoop = async () => {}

suite('async/p-each', async () => {
  const coll = [1, 2, 3]

  test('return the expected result', async () => {
    expect(await pForEach(pNoop)(coll)).to.equal(coll)
  })

  test('fn is called as expected', async () => {
    const pNoopSpy = spy(pNoop)
    await pForEach(pNoopSpy)(coll)
    expect(pNoopSpy.argsPerCall).to.deep.equal([
      [1, 0, coll],
      [2, 1, coll],
      [3, 2, coll],
    ])
  })

  test('shared internals are called as expected', async () => {
    const noopEach = pForEach(pNoop)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [pNoop, 'fn', 'function', 'pForEach'],
    ])

    await noopEach(coll)
    expect(si.getType.argsPerCall).to.deep.equal([[coll]])
    expect(si.assertArgTypeIsOneOf.argsPerCall).to.deep.equal([
      ['array', 'collection', si.commonTypes.collection, 'pForEach'],
    ])
    expect(si.getIterator.argsPerCall).to.deep.equal([
      ['entries', coll, 'array'],
    ])
  })
})
