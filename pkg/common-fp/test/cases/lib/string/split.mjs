import { expect } from 'chai'
import { createStubResource, testWithResources } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import split from '#lib/string/split'

suite('string/split', () => {
  test('returns the expected result', () => {
    const separator = '**'
    const aString = 'a**bc**d'
    expect(split(separator)(aString)).to.deep.equal(['a', 'bc', 'd'])
  })

  test('shared internals are called as expected', () => {
    const separator = '**'
    const aString = 'a**bc**d'
    split(separator)(aString)
    expect(si.assertArgIsOneOfType.argsPerCall).to.deep.equal([
      [separator, 'separator', ['regexp', 'string'], 'split'],
    ])
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [aString, 'aString', 'string', 'split'],
    ])
  })

  const splitResource = createStubResource(String.prototype, 'split')
  const resources = [splitResource]
  testWithResources('split is called as expected', resources, () => {
    const separator = '**'
    const aString = 'a**bc**d'
    split(separator)(aString)
    expect(splitResource.stub.argsPerCall).to.deep.equal([[separator]])
  })
})
