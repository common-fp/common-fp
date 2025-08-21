import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import get from '#lib/get'

suite('get', () => {
  test('returns the expected result', () => {
    expect(get('prop')({ prop: 1 })).to.equal(1)
    expect(get('length')('abc')).to.equal(3)
    expect(get('0')('abc')).to.equal('a')
    expect(get('abc')({})).to.equal(undefined)
  })

  test('shared internals are called as expected', () => {
    get('prop')
    expect(si.assertArgIsOneOfType.argsPerCall).to.deep.equal([
      ['prop', 'key', si.commonTypes.propertyKey, 'get'],
    ])
  })
})
