import { expect } from 'chai'
import assertArgIsType from '#src/assert-arg-is-type'

suite('assert-arg-is-type', () => {
  test('success', () => {
    expect(() =>
      assertArgIsType('a string', 'argName', 'string', 'utilName')
    ).to.not.throw()
  })

  test('error', () => {
    const errMsg = `utilName requires argument 'argName' to be a string - but a number was passed`
    expect(() => assertArgIsType(1, 'argName', 'string', 'utilName')).to.throw(
      errMsg
    )
  })
})
