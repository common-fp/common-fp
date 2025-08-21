import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import getValueAtMapKey from '#lib/map/get-value-at-map-key'

suite('map/get-value-at-map-key', () => {
  const aMap = new Map([['a', 1]])

  test('returns the expected result', () => {
    expect(getValueAtMapKey('a')(aMap)).to.equal(1)
    expect(getValueAtMapKey('b')(aMap)).to.be.undefined
  })

  test('shared internals are called as expected', () => {
    getValueAtMapKey('a')(aMap)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [aMap, 'aMap', 'map', 'getValueAtMapKey'],
    ])
  })
})
