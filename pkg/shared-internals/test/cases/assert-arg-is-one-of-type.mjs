import { expect } from 'chai'
import assertArgIsOneOfType from '#src/assert-arg-is-one-of-type'

suite('assert-arg-is-one-of-type', () => {
  test('success', async () => {
    expect(() =>
      assertArgIsOneOfType(
        'a string',
        'argName',
        ['string', 'number'],
        'utilName'
      )
    ).to.not.throw()
    expect(() =>
      assertArgIsOneOfType(1, 'argName', ['string', 'number'], 'utilName')
    ).to.not.throw()
  })

  test('error', async () => {
    const errMsg = `utilName requires argument 'argName' to be a string or number - but a boolean was passed`
    expect(() =>
      assertArgIsOneOfType(true, 'argName', ['string', 'number'], 'utilName')
    ).to.throw(errMsg)
  })
})
