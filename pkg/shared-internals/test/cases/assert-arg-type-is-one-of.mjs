import { expect } from 'chai'
import assertArgTypeIsOneOf from '#src/assert-arg-type-is-one-of'

suite('assert-arg-type-os-one-of', () => {
  test('success', () => {
    expect(() =>
      assertArgTypeIsOneOf(
        'string',
        'argName',
        ['string', 'number'],
        'utilName'
      )
    ).to.not.throw()
    expect(() =>
      assertArgTypeIsOneOf(
        'number',
        'argName',
        ['string', 'number'],
        'utilName'
      )
    ).to.not.throw()
  })

  test('error', () => {
    const errMsg = `utilName requires argument 'argName' to be a string or number - but a boolean was passed`
    expect(() =>
      assertArgTypeIsOneOf(
        'boolean',
        'argName',
        ['string', 'number'],
        'utilName'
      )
    ).to.throw(errMsg)
  })
})
