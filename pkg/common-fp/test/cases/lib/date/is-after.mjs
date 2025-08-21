import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import isAfter from '#lib/date/is-after'

suite('date/is-after', () => {
  const aYearAgo = new Date()
  const now = new Date()
  const y = aYearAgo.getFullYear()

  aYearAgo.setFullYear(y - 1)

  test('returns the expected result', () => {
    expect(isAfter(aYearAgo)(now)).to.be.true
    expect(isAfter(now)(aYearAgo)).to.be.false
    expect(isAfter(now)(now)).to.be.false
  })

  test('shared internals are called as expected', () => {
    isAfter(now)(aYearAgo)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [now, 'date1', 'date', 'isAfter'],
      [aYearAgo, 'date2', 'date', 'isAfter'],
    ])
  })
})
