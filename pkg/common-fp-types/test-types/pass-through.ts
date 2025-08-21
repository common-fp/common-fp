import { describe, expect, test } from 'tstyche'
import type { UnknownFunction } from '@common-fp/shared-types'
import passThrough from '#src/pass-through'

describe('pass-through', () => {
  const inc = (n: number) => n + 1
  const double = (n: number) => n * 2
  const toString = (n: number) => '' + n

  test('literal fn array', () => {
    const resStr = passThrough(1, [inc, double, toString])
    expect(resStr).type.toBe<string>()

    const resNum = passThrough(1, [inc, double])
    expect(resNum).type.toBe<number>()
  })

  test('general fn array', () => {
    const resStr = passThrough(1, [inc, double, toString] as UnknownFunction[])
    expect(resStr).type.toBe<unknown>()

    const resNum = passThrough(1, [inc, double] as UnknownFunction[])
    expect(resNum).type.toBe<unknown>()
  })

  test('general fn array with asserted return type', () => {
    const resStr = passThrough(1, [
      inc,
      double,
      toString,
    ] as UnknownFunction[]) as string
    expect(resStr).type.toBe<string>()

    const resNum = passThrough(1, [inc, double] as UnknownFunction[]) as number
    expect(resNum).type.toBe<number>()
  })
})
