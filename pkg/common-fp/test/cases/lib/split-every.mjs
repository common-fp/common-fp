import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import splitEvery from '#lib/split-every'

suite('split-every', () => {
  suite('returns the expected result', () => {
    test('string', () => {
      const splitEvery2 = splitEvery(2)
      expect(splitEvery2('abc')).to.deep.equal(['ab', 'c'])
      expect(splitEvery2('a')).to.deep.equal(['a'])
      expect(splitEvery2('')).to.deep.equal([''])
    })

    test('array', () => {
      const splitEvery2 = splitEvery(2)
      expect(splitEvery2(['a', 'b', 'c'])).to.deep.equal([['a', 'b'], ['c']])
      expect(splitEvery2(['a'])).to.deep.equal([['a']])
      expect(splitEvery2([])).to.deep.equal([[]])
    })
  })

  test('shared internals are called as expected', () => {
    const splitEvery3 = splitEvery(3)
    expect(si.assertArgIsInt.argsPerCall).to.deep.equal([
      [3, 'groupSize', 'splitEvery', { positive: true }],
    ])

    splitEvery3('abc')
    expect(si.getType.argsPerCall).to.deep.equal([['abc']])
    expect(si.assertArgTypeIsOneOf.argsPerCall).to.deep.equal([
      ['string', 'sequence', si.commonTypes.sequence, 'splitEvery'],
    ])
  })
})
