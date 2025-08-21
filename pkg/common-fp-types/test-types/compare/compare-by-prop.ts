import { expect, test } from 'tstyche'
import compareByProp from '#src/compare/compare-by-prop'

test('compare/compare-by-prop', () => {
  const bAsc = compareByProp('a', (l: number, r: number) => l - r)
  expect(bAsc).type.toBe<
    <O extends Record<'a', number>>(left: O, right: O) => number
  >()
})
