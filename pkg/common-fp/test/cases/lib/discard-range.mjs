import { expect } from 'chai'
import { validateGetFnArgs } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import discardRange from '#lib/discard-range'

const typeToFn = {
  array: function discardRange_array() {},
  string: function discardRange_string() {},
}

suite('discard-range', () => {
  suite('returns expected result', () => {
    test('array', () => {
      const arr = [1, 2, 3, 4]
      let startIdx = 1
      let endIdx = 2

      expect(discardRange({ startIdx, endIdx })(arr)).to.deep.equal([1, 4])

      startIdx = 0
      endIdx = 5
      expect(discardRange({ startIdx, endIdx })(arr)).to.deep.equal([])

      startIdx = 1
      endIdx = 5
      expect(discardRange({ startIdx, endIdx })(arr)).to.deep.equal([1])
    })

    test('string', () => {
      const str = 'abcd'
      let startIdx = 1
      let endIdx = 2

      expect(discardRange({ startIdx, endIdx })(str)).to.equal('ad')

      startIdx = 0
      endIdx = 5
      expect(discardRange({ startIdx, endIdx })(str)).to.equal('')

      startIdx = 1
      endIdx = 5
      expect(discardRange({ startIdx, endIdx })(str)).to.equal('a')
    })
  })

  test('shared internals are called as expected', () => {
    const str = 'abcd'
    const startIdx = 1
    const endIdx = 2
    const discardCouple = discardRange({ startIdx, endIdx })

    expect(si.validateRange.argsPerCall).to.deep.equal([
      [startIdx, endIdx, 'discardRange'],
    ])

    discardCouple(str)
    validateGetFnArgs(si.getFn.argsPerCall, [
      [typeToFn, str, 'sequence', 'discardRange'],
    ])
  })
})
