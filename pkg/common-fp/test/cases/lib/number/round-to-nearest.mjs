import { expect } from 'chai'
import { truncateToNChars } from '@common-fp/shared-internals'
import { sharedInternals as si } from '#test/spies'
import roundToNearest from '#lib/number/round-to-nearest'

suite('number/round-to-nearest', () => {
  test('rounds to the nearest precision', () => {
    const precision = '0.1'
    const aNumber = 0.5
    expect(roundToNearest(precision)(aNumber)).to.equal(0.5)

    expect(roundToNearest('0.1')(0.55)).to.equal(0.6)
    expect(roundToNearest('0.01')(0.555)).to.equal(0.56)

    expect(roundToNearest('1')(5)).to.equal(5)
    expect(roundToNearest('1')(5.5)).to.equal(6)
    expect(roundToNearest('10')(5)).to.equal(10)
    expect(roundToNearest('10')(4)).to.equal(0)
  })

  suite('invalid decimal precision format', () => {
    const getExpectedErrorMsg = precision => {
      const truncatedPrecision = truncateToNChars(15, precision)

      let errMsg =
        'With a decimal, roundToNearest requires a precision passing the regex /^0\\.0{0,9}1$/'
      errMsg += `\n  precision: ${truncatedPrecision}`

      return errMsg
    }

    test('too many leading zeroes', () => {
      const tenZeroes = '0'.repeat(10)
      const precision = `0.${tenZeroes}1`
      const expectedErrorMsg = getExpectedErrorMsg(precision)
      expect(() => roundToNearest(precision)).to.throw(expectedErrorMsg)
    })
    test('not a regex match', () => {
      const precision = `not.a.regex.match`
      const expectedErrorMsg = getExpectedErrorMsg(precision)
      expect(() => roundToNearest(precision)).to.throw(expectedErrorMsg)
    })
  })

  suite('invalid integer precision format', () => {
    const getExpectedErrorMsg = precision => {
      const truncatedPrecision = truncateToNChars(15, precision)

      let errMsg =
        'Without a decimal, roundToNearest requires a precision passing the regex /^10{0,9}$/'
      errMsg += `\n  precision: ${truncatedPrecision}`

      return errMsg
    }

    test('too many trailing zeroes', () => {
      const tenZeroes = '0'.repeat(10)
      const precision = `1${tenZeroes}`
      const expectedErrorMsg = getExpectedErrorMsg(precision)
      expect(() => roundToNearest(precision)).to.throw(expectedErrorMsg)
    })
    test('not a regex match', () => {
      const precision = `not a regex match`
      const expectedErrorMsg = getExpectedErrorMsg(precision)
      expect(() => roundToNearest(precision)).to.throw(expectedErrorMsg)
    })
  })

  test('shared internals are called as expected', () => {
    const precision = '0.1'
    const aNumber = 2.53
    roundToNearest('0.1')(2.53)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [precision, 'precision', 'string', 'roundToNearest'],
      [aNumber, 'aNumber', 'number', 'roundToNearest'],
    ])
  })
})
