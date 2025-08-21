import { describe, expect, test } from 'tstyche'
import type { Sequence, SubSequence } from '@common-fp/shared-types'
import discardRange from '#src/discard-range'

describe('discard-range', () => {
  // the return type doesn't depend on these values
  const firstTwo = { startIdx: 0, endIdx: 1 }
  const discardFirstTwo = discardRange(firstTwo)

  test('returned function', () => {
    expect(discardFirstTwo).type.toBe<
      <S extends Sequence>(sequence: S) => SubSequence<S>
    >()
  })
  test('string', () => {
    const res = discardFirstTwo('abc')
    expect(res).type.toBe<string>()
  })
  test('array', () => {
    const res = discardFirstTwo([1, 2])
    expect(res).type.toBe<number[]>()
  })
})
