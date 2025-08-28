import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import numberIsBetween from '#lib/number/number-is-between'

suite('number/number-is-between', () => {
  const min = 1
  const max = 3

  suite('returns the expected result', () => {
    test('default behavior', () => {
      expect(numberIsBetween(min, max)(0)).to.be.false
      expect(numberIsBetween(min, max)(1)).to.be.true
      expect(numberIsBetween(min, max)(3)).to.be.true
      expect(numberIsBetween(min, max)(4)).to.be.false
    })

    // the first two arguments are reversed from the 'default behavior' test
    // this just shows numberIsBetween can be called with the lower number first
    // or second, it doesn't matter
    test('default behavior', () => {
      expect(numberIsBetween(max, min)(0)).to.be.false
      expect(numberIsBetween(max, min)(1)).to.be.true
      expect(numberIsBetween(max, min)(3)).to.be.true
      expect(numberIsBetween(max, min)(4)).to.be.false
    })
    test('exclusive min', () => {
      const exclusiveMin = true
      expect(numberIsBetween(min, max, { exclusiveMin })(1)).to.be.false
      expect(numberIsBetween(min, max, { exclusiveMin })(2)).to.be.true
      expect(numberIsBetween(min, max, { exclusiveMin })(3)).to.be.true
      expect(numberIsBetween(min, max, { exclusiveMin })(4)).to.be.false
    })
    test('exclusive max', () => {
      const exclusiveMax = true
      expect(numberIsBetween(min, max, { exclusiveMax })(0)).to.be.false
      expect(numberIsBetween(min, max, { exclusiveMax })(1)).to.be.true
      expect(numberIsBetween(min, max, { exclusiveMax })(2)).to.be.true
      expect(numberIsBetween(min, max, { exclusiveMax })(3)).to.be.false
    })
    test('exclusive both', () => {
      const exclusive = { exclusiveMin: true, exclusiveMax: true }
      expect(numberIsBetween(min, max, exclusive)(1)).to.be.false
      expect(numberIsBetween(min, max, exclusive)(2)).to.be.true
      expect(numberIsBetween(min, max, exclusive)(3)).to.be.false
    })
  })

  test('shared internals are called as expected', () => {
    const opts = { exclusiveMin: true, exclusiveMax: true }
    const isBetween1And3 = numberIsBetween(1, 3, opts)
    expect(si.validateIsBetweenInput.argsPerCall).to.deep.equal([
      [1, 'num1', 3, 'num2', 'number', 'numberIsBetween', opts],
    ])

    isBetween1And3(1)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [1, 'aNumber', 'number', 'numberIsBetween'],
    ])
  })
})
