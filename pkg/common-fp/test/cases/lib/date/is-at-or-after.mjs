import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import isAtOrAfter from '#lib/date/is-at-or-after'

suite('date/is-at-or-after', () => {
  const aYearAgo = new Date()
  const now = new Date()
  const y = aYearAgo.getFullYear()

  aYearAgo.setFullYear(y - 1)

  test('returns the expected result', () => {
    expect(isAtOrAfter(aYearAgo)(now)).to.be.true
    expect(isAtOrAfter(now)(aYearAgo)).to.be.false
    expect(isAtOrAfter(now)(now)).to.be.true
  })

  test('shared internals are called as expected', () => {
    isAtOrAfter(now)(aYearAgo)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [now, 'date1', 'date', 'isAtOrAfter'],
      [aYearAgo, 'date2', 'date', 'isAtOrAfter'],
    ])
  })
})
