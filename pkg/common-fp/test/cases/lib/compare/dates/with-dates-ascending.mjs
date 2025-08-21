import { expect } from 'chai'

import asc from '#lib/compare/dates/with-dates-ascending'

test('compare/dates/with-dates-ascending', () => {
  const jan14 = new Date('2023 01 14')
  const jan15 = new Date('2023 01 15')
  const jan16 = new Date('2023 01 16')

  expect([jan15, jan16, jan14].sort(asc)).to.deep.equal([jan14, jan15, jan16])
})
