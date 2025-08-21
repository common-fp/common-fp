import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import findLastKeyWithVal from '#lib/find-last-key-with-val'

suite('find-last-key-with-val', () => {
  test('returns the expected result', () => {
    expect(findLastKeyWithVal('a')(['a', 'b', 'a'])).to.equal(2)
    expect(findLastKeyWithVal('a')('aba')).to.equal(2)
    expect(findLastKeyWithVal('c')('aba')).to.equal(undefined)
  })
  test('shared internals are called as expected', () => {
    findLastKeyWithVal('a')('aba')
    expect(si.getType.argsPerCall).to.deep.equal([['a'], ['aba']])
    expect(si.assertArgTypeIsOneOf.argsPerCall).to.deep.equal([
      ['string', 'sequence', si.commonTypes.sequence, 'findLastKeyWithVal'],
    ])
  })

  test('string validation', () => {
    const errMsg =
      'When calling findLastKeyWithVal with a sequence of type string, value must also be a string' +
      '\n  value type: object'
    const obj = {}
    expect(() => findLastKeyWithVal(obj)('abc')).to.throw(errMsg)
  })
})
