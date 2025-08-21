import { expect } from 'chai'
import assertArgIsChar from '#src/assert-arg-is-char'

suite('assert-arg-is-char', () => {
  test('success', () => {
    expect(() => assertArgIsChar('a', 'argName', 'utilName'))
  })

  suite('error', () => {
    test('arg is not typeof string', () => {
      const errMsg = `utilName requires argument 'argName' to be typeof string - but type number was passed`
      expect(() => assertArgIsChar(1, 'argName', 'utilName')).to.throw(errMsg)
    })
    test('arg is not single character', () => {
      const errMsg = `utilName requires argument 'argName' to be a single character - but 15CharL... was passed`
      expect(() =>
        assertArgIsChar('15CharLengthStr', 'argName', 'utilName')
      ).to.throw(errMsg)
    })
  })
})
