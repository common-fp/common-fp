import { expect } from 'chai'
import assertArgIsInt from '#src/assert-arg-is-int'

suite('assert-arg-is-int', () => {
  suite('success', () => {
    test('default case', () => {
      expect(() => assertArgIsInt(-1, 'argName', 'utilName')).not.to.throw()
    })
    test('non-negative', () => {
      expect(() =>
        assertArgIsInt(0, 'argName', 'utilName', { nonNegative: true })
      ).not.to.throw()
    })
    test('positive', () => {
      expect(() =>
        assertArgIsInt(1, 'argName', 'utilName', { positive: true })
      ).not.to.throw()
    })
  })

  suite('error', () => {
    test('arg is not a number', () => {
      const errMsg = `utilName requires argument 'argName' to be an integer - but a string was passed`
      expect(() => assertArgIsInt('1', 'argName', 'utilName')).to.throw(errMsg)
    })
    test('arg is not an integer', () => {
      const n = 1.23
      const errMsg = `utilName requires argument 'argName' to be an integer - but ${n} was passed`
      expect(() => assertArgIsInt(n, 'argName', 'utilName')).to.throw(errMsg)
    })
    test('arg is negative', () => {
      const n = -1
      const errMsg = `utilName requires argument 'argName' to be an integer greater than or equal to zero - but ${n} was passed`
      expect(() =>
        assertArgIsInt(n, 'argName', 'utilName', { nonNegative: true })
      ).to.throw(errMsg)
    })
    test('arg is zero', () => {
      const n = 0
      const errMsg = `utilName requires argument 'argName' to be a positive integer - but ${n} was passed`
      expect(() =>
        assertArgIsInt(n, 'argName', 'utilName', { positive: true })
      ).to.throw(errMsg)
    })
  })
})
