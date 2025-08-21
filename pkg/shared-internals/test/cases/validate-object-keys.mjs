import { expect } from 'chai'
import validateObjectKeys from '#src/validate-object-keys'

suite('validate-object-keys', () => {
  test('success', () => {
    expect(() => validateObjectKeys([1, '2'])).to.not.throw()
  })
  test('error', () => {
    const badKey = false
    expect(() => validateObjectKeys([badKey], 'utilName')).to.throw(
      `when calling utilName with an object, 'keys' must all be typeof string or number` +
        `\n  invalid key type found: ${typeof badKey}`
    )
  })
})
