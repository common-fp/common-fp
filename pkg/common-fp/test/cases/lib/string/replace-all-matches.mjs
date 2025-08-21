import { expect } from 'chai'
import { createStubResource, testWithResources } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import replaceAllMatches from '#lib/string/replace-all-matches'

suite('string/replace-all-matches', () => {
  const aString = "I'll tell you what I want, what I really really want"
  const replacement = 'all'
  const expected = "I'll tell you all I want, all I really really want"

  suite('returns the expected result', () => {
    test('regex', () => {
      const search = /what/g
      expect(replaceAllMatches(search, replacement)(aString)).to.equal(expected)
    })

    test('string', () => {
      const search = 'what'
      expect(replaceAllMatches(search, replacement)(aString)).to.equal(expected)
    })
  })

  const replaceAllResource = createStubResource(String.prototype, 'replaceAll')
  const resources = [replaceAllResource]
  testWithResources('replaceAll is called as expected', resources, () => {
    const search = 'what'
    replaceAllMatches(search, replacement)(aString)
    expect(replaceAllResource.stub.argsPerCall).to.deep.equal([
      [search, replacement],
    ])
  })

  test('shared internals are called as expected', () => {
    const search = 'what'
    replaceAllMatches(search, replacement)(aString)
    expect(si.assertArgTypeIsOneOf.argsPerCall).to.deep.equal([
      ['string', 'search', ['regexp', 'string'], 'replaceAllMatches'],
    ])
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [replacement, 'replacement', 'string', 'replaceAllMatches'],
      [aString, 'aString', 'string', 'replaceAllMatches'],
    ])
  })

  test('global regex required', () => {
    const search = /what/
    const expectedErrMsg =
      'When passing a regex to replaceAllMatches, it must be global.' +
      " In other words, add the the 'g' flag."

    expect(() => replaceAllMatches(search, replacement)).to.throw(
      expectedErrMsg
    )
  })
})
