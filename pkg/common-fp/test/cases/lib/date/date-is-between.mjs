import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import dateIsBetween from '#lib/date/date-is-between'

suite('date/date-is-between', () => {
  const now = new Date()
  const y = now.getFullYear()

  const aYearAgo = new Date()
  aYearAgo.setFullYear(y - 1)

  const aYearFromNow = new Date()
  aYearFromNow.setSeconds(y + 1)

  suite('returns the expected result', () => {
    test('default behavior', () => {
      expect(dateIsBetween(aYearAgo, aYearFromNow)(now)).to.be.true
      expect(dateIsBetween(aYearAgo, aYearFromNow)(aYearFromNow)).to.be.true
      expect(dateIsBetween(aYearAgo, aYearFromNow)(aYearAgo)).to.be.true
      expect(dateIsBetween(aYearAgo, now)(aYearFromNow)).to.be.false
      expect(dateIsBetween(now, aYearFromNow)(aYearAgo)).to.be.false
    })

    // the first two arguments are reversed from the 'default behavior' test
    // this just shows dateIsBetween can be called with the earlier date first
    // or second, it doesn't matter
    test('handles reversed order', () => {
      expect(dateIsBetween(aYearFromNow, aYearAgo)(now)).to.be.true
      expect(dateIsBetween(aYearFromNow, aYearAgo)(aYearFromNow)).to.be.true
      expect(dateIsBetween(aYearFromNow, aYearAgo)(aYearAgo)).to.be.true
      expect(dateIsBetween(now, aYearAgo)(aYearFromNow)).to.be.false
      expect(dateIsBetween(aYearFromNow, now)(aYearAgo)).to.be.false
    })

    test('exclusive min', () => {
      const exclusiveMin = true
      const exclusive = { exclusiveMin }

      expect(dateIsBetween(aYearAgo, aYearFromNow, exclusive)(now)).to.be.true
      expect(dateIsBetween(aYearAgo, aYearFromNow, exclusive)(aYearFromNow)).to
        .be.true
      expect(dateIsBetween(aYearAgo, aYearFromNow, exclusive)(aYearAgo)).to.be
        .false
      expect(dateIsBetween(aYearAgo, now, exclusive)(aYearFromNow)).to.be.false
      expect(dateIsBetween(now, aYearFromNow, exclusive)(aYearAgo)).to.be.false
    })

    test('exclusive max', () => {
      const exclusiveMax = true
      const exclusive = { exclusiveMax }

      expect(dateIsBetween(aYearAgo, aYearFromNow, exclusive)(now)).to.be.true
      expect(dateIsBetween(aYearAgo, aYearFromNow, exclusive)(aYearFromNow)).to
        .be.false
      expect(dateIsBetween(aYearAgo, aYearFromNow, exclusive)(aYearAgo)).to.be
        .true
      expect(dateIsBetween(aYearAgo, now, exclusive)(aYearFromNow)).to.be.false
      expect(dateIsBetween(now, aYearFromNow, exclusive)(aYearAgo)).to.be.false
    })

    test('exclusive both', () => {
      const exclusiveMin = true
      const exclusiveMax = true
      const exclusive = { exclusiveMin, exclusiveMax }

      expect(dateIsBetween(aYearAgo, aYearFromNow, exclusive)(now)).to.be.true
      expect(dateIsBetween(aYearAgo, aYearFromNow, exclusive)(aYearFromNow)).to
        .be.false
      expect(dateIsBetween(aYearAgo, aYearFromNow, exclusive)(aYearAgo)).to.be
        .false
      expect(dateIsBetween(aYearAgo, now, exclusive)(aYearFromNow)).to.be.false
      expect(dateIsBetween(now, aYearFromNow, exclusive)(aYearAgo)).to.be.false
    })
  })

  test('shared internals are called as expected', () => {
    const opts = {
      exclusiveMin: true,
      exclusiveMax: true,
    }
    const isWithinAYearFromNow = dateIsBetween(aYearAgo, aYearFromNow, opts)
    expect(si.validateIsBetweenInput.argsPerCall).to.deep.equal([
      [aYearAgo, 'date1', aYearFromNow, 'date2', 'date', 'dateIsBetween', opts],
    ])

    isWithinAYearFromNow(now)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [now, 'aDate', 'date', 'dateIsBetween'],
    ])
  })
})
