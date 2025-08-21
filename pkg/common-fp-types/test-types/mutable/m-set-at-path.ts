import { describe, expect, test } from 'tstyche'
import mSetAtPath from '#src/mutable/m-set-at-path'

describe('mutable/m-set-at-path', () => {
  test('happy path', () => {
    const ab = { a: { b: 1 } }
    const setBTo2 = mSetAtPath(['a', 'b'], 2)
    const res = setBTo2(ab)
    expect(res).type.toBe<{ a: { b: number } }>()
  })

  test('false positive', () => {
    const ab = { a: { b: 1 } } as { a: { b: 1 } }
    const setBTo2 = mSetAtPath(['a', 'b'], 2)
    const res = setBTo2(ab)
    expect(res).type.toBe<{ a: { b: 1 } }>()
  })

  test('works on many object types', () => {
    const arr = [1, 2, 3]
    const empty = mSetAtPath(['length'], 0)
    const res = empty(arr)
    expect(res).type.toBe<number[]>()

    const re = /(hi)/g
    const resetLastIndex = mSetAtPath(['lastIndex'], 0)
    const resRegexp = resetLastIndex(re)
    expect(resRegexp).type.toBe<RegExp>()
  })
})
