import { expect } from 'chai'
import negate from '#src/negate'

test('negate', () => {
  const gt3 = n => n > 3
  const lte2 = negate(gt3)
  for (let n = 1; n < 5; n += 1) {
    expect(gt3(n)).to.equal(!lte2(n))
  }
})
