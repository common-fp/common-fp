import { describe, expect, test } from 'tstyche'
import mSet from '#src/mutable/m-set'

describe('mutable/m-set-at-path', () => {
  test('happy path', () => {
    const a = { a: 1 }
    const setATo2 = mSet('a', 2)
    const res = setATo2(a)
    expect(res).type.toBe<{ a: number }>()
  })

  test('false positive', () => {
    const a = { a: 1 } as { a: 1 }
    const setATo2 = mSet('a', 2)
    const res = setATo2(a)
    expect(res).type.toBe<{ a: 1 }>()
  })

  test('works on many object types', () => {
    const arr = [1, 2, 3]
    const empty = mSet('length', 0)
    const res = empty(arr)
    expect(res).type.toBe<number[]>()

    const re = /(hi)/g
    const resetLastIndex = mSet('lastIndex', 0)
    const resRegexp = resetLastIndex(re)
    expect(resRegexp).type.toBe<RegExp>()
  })
})
