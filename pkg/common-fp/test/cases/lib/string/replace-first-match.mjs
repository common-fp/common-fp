import { expect } from 'chai'
import { createStubResource, testWithResources } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import replaceFirstMatch from '#lib/string/replace-first-match'

suite('string/replace-first-match', () => {
  const aString = "I'll tell you what I want, what I really really want"
  const replacement = 'all'
  const expected = "I'll tell you all I want, what I really really want"

  suite('returns the expected result', () => {
    test('regex', () => {
      const search = /what/
      expect(replaceFirstMatch(search, replacement)(aString)).to.equal(expected)
    })

    test('string', () => {
      const search = 'what'
      expect(replaceFirstMatch(search, replacement)(aString)).to.equal(expected)
    })
  })

  const replaceResource = createStubResource(String.prototype, 'replace')
  const resources = [replaceResource]
  testWithResources('replace is called as expected', resources, () => {
    const search = /what/
    replaceFirstMatch(search, replacement)(aString)
    expect(replaceResource.stub.argsPerCall).to.deep.equal([
      [search, replacement],
    ])
  })

  test('shared internals are called as expected', () => {
    const search = 'what'
    replaceFirstMatch(search, replacement)(aString)
    expect(si.assertArgTypeIsOneOf.argsPerCall).to.deep.equal([
      ['string', 'search', ['regexp', 'string'], 'replaceFirstMatch'],
    ])
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [replacement, 'replacement', 'string', 'replaceFirstMatch'],
      [aString, 'aString', 'string', 'replaceFirstMatch'],
    ])
  })

  test('error when a global regex is passed', () => {
    const expectedErrMsg =
      'When passing a regex to replaceFirstMatch, it cannot be global.' +
      "  In other words, remove the 'g' flag."

    expect(() => replaceFirstMatch(/what/g, 'all')).to.throw(expectedErrMsg)
  })
})
