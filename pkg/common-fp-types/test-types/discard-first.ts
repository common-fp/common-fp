import { describe, expect, test } from 'tstyche'
import discardFirst from '#src/discard-first'

describe('discard-first', () => {
  const discardFirst2 = discardFirst(2)

  test('string', () => {
    const res = discardFirst2('abc')
    expect(res).type.toBe<string>()
  })

  test('literals', () => {
    const res = discardFirst2([1, 2, 3] as const)
    expect(res).type.toBe<(1 | 2 | 3)[]>()
  })

  test('general', () => {
    const res = discardFirst2([1, 2, 3])
    expect(res).type.toBe<number[]>()
  })
})
