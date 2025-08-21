import { describe, expect, test } from 'tstyche'
import invert from '#src/invert'

describe('invert', () => {
  test('literal', () => {
    const res = invert({
      a: 1,
      b: 2,
    } as const)
    expect(res).type.toBe<{ 1: 'a'; 2: 'b' }>()
  })

  test('general', () => {
    const obj: Record<string, number> = {
      a: 1,
      b: 2,
    }
    const res = invert(obj)
    expect(res).type.toBe<{ [k: number]: string }>()
  })

  test('map', () => {
    const res = invert(
      new Map([
        ['a', 1],
        ['b', 2],
      ])
    )
    expect(res).type.toBe<Map<number, string>>()
  })
})
