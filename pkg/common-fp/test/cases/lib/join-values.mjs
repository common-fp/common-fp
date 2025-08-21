import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import joinValues from '#lib/join-values'

suite('join-values', () => {
  const separator = ','
  const coll = ['a', 'b']

  test('returns the expected value', () => {
    expect(joinValues(separator)(coll)).to.equal('a,b')
  })

  test('shared internals are called as expected', () => {
    const joinWithCommas = joinValues(separator)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [separator, 'separator', 'string', 'joinValues'],
    ])

    joinWithCommas(coll)
    expect(si.getType.argsPerCall).to.deep.equal([[coll]])
    expect(si.assertArgTypeIsOneOf.argsPerCall).to.deep.equal([
      ['array', 'collection', si.commonTypes.collection, 'joinValues'],
    ])
    expect(si.getIterator.argsPerCall).to.deep.equal([
      ['values', coll, 'array'],
    ])
  })
})
