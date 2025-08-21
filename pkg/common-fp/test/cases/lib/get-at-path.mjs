import { expect } from 'chai'
import {
  sharedInternals as si,
  getAtPath as internalGetAtPath,
} from '#test/spies'
import getAtPath from '#lib/get-at-path'

suite('get-at-path', () => {
  test('calls getAtPathInternal and returns its result ', () => {
    const aPath = ['a', 'b']
    const obj = { some: 'object' }
    internalGetAtPath.resultPerCall = ['some result']
    expect(getAtPath(aPath)(obj)).to.equal('some result')
    expect(internalGetAtPath.argsPerCall).to.deep.equal([[aPath, obj]])
  })

  test('shared internals are called as expected', () => {
    const aPath = ['a', 'b']
    getAtPath(aPath)
    expect(si.assertArgIsArrayOfAcceptedTypes.argsPerCall).to.deep.equal([
      [aPath, 'path', si.commonTypes.propertyKey, 'getAtPath'],
    ])
  })
})
