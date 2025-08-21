import { expect } from 'chai'
import validateArrayKeys from '#src/validate-array-keys'

suite('validate-array-keys', () => {
  test('success', () => {
    expect(() => validateArrayKeys([1, '2'])).to.not.throw()
  })
  test('error', () => {
    const getExpectedMsg = badKey => {
      return (
        "when calling utilName with an array, 'keys' must all be integers zero or above" +
        `\n  invalid key found: ${badKey}`
      )
    }

    let badKey = true
    expect(() => validateArrayKeys([badKey], 'utilName')).to.throw(
      getExpectedMsg(badKey)
    )

    badKey = -1
    expect(() => validateArrayKeys([badKey], 'utilName')).to.throw(
      getExpectedMsg(badKey)
    )

    badKey = '2.1'
    expect(() => validateArrayKeys([badKey], 'utilName')).to.throw(
      getExpectedMsg(badKey)
    )
  })
})
