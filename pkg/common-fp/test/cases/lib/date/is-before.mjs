import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import isBefore from '#lib/date/is-before'

suite('date/is-before', () => {
  const aYearAgo = new Date()
  const now = new Date()
  const y = aYearAgo.getFullYear()

  aYearAgo.setFullYear(y - 1)

  test('returns the expected result', () => {
    expect(isBefore(now)(aYearAgo)).to.be.true
    expect(isBefore(aYearAgo)(now)).to.be.false
    expect(isBefore(now)(now)).to.be.false
  })

  test('shared internals are called as expected', () => {
    isBefore(now)(aYearAgo)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [now, 'date1', 'date', 'isBefore'],
      [aYearAgo, 'date2', 'date', 'isBefore'],
    ])
  })
})
