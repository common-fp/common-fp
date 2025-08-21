import { expect } from 'chai'
import { createStubResource, testWithResources } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import startsWith from '#lib/string/starts-with'

suite('string/starts-with', () => {
  test('returns the expected result', () => {
    expect(startsWith('a')('bcd')).to.be.false
    expect(startsWith('ab')('abc')).to.be.true
  })

  test('shared internals are called as expected', () => {
    const aString = 'abc'
    const prefix = 'ab'
    startsWith(prefix)(aString)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [prefix, 'prefix', 'string', 'startsWith'],
      [aString, 'aString', 'string', 'startsWith'],
    ])
  })

  const strStartsWithResource = createStubResource(
    String.prototype,
    'startsWith'
  )
  const resources = [strStartsWithResource]
  testWithResources('startsWith is called as expected', resources, () => {
    const aString = 'abc'
    const prefix = 'ab'
    startsWith(prefix)(aString)
    expect(strStartsWithResource.stub.argsPerCall).to.deep.equal([[prefix]])
  })
})
