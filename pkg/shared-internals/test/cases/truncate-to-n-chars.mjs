import { expect } from 'chai'
import truncateToNChars from '#src/truncate-to-n-chars'

suite('truncate-to-n-chars', () => {
  test('default cases', () => {
    expect(truncateToNChars(5, ['12345'])).to.equal('12345')
    expect(truncateToNChars(5, ['123456'])).to.equal('12...')
  })

  test('edge cases', () => {
    expect(truncateToNChars(0, [''])).to.equal('')
    expect(truncateToNChars(0, ['1'])).to.equal('')
    expect(truncateToNChars(1, ['12'])).to.equal('.')
  })
})
