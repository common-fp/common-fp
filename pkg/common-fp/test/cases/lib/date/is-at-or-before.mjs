import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import isAtOrBefore from '#lib/date/is-at-or-before'

suite('date/is-at-or-before', () => {
  const aYearAgo = new Date()
  const now = new Date()
  const y = aYearAgo.getFullYear()

  aYearAgo.setFullYear(y - 1)

  test('returns the expected result', () => {
    expect(isAtOrBefore(now)(aYearAgo)).to.be.true
    expect(isAtOrBefore(aYearAgo)(now)).to.be.false
    expect(isAtOrBefore(now)(now)).to.be.true
  })

  test('shared internals are called as expected', () => {
    isAtOrBefore(now)(aYearAgo)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [now, 'date1', 'date', 'isAtOrBefore'],
      [aYearAgo, 'date2', 'date', 'isAtOrBefore'],
    ])
  })
})
