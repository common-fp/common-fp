import { describe, expect, test } from 'tstyche'
import type { UnknownFunction } from '@common-fp/shared-types'
import pPassThrough from '#src/async/p-pass-through'

describe('async/p-pass-through', () => {
  const inc = (n: number) => Promise.resolve(n + 1)
  const double = (n: number) => Promise.resolve(n * 2)
  const toString = (n: number) => Promise.resolve('' + n)

  test('literal fn array', async () => {
    const resStr = await pPassThrough(1, [inc, double, toString])
    expect(resStr).type.toBe<string>()

    const resNum = await pPassThrough(1, [inc, double])
    expect(resNum).type.toBe<number>()
  })

  test('general fn array', async () => {
    const resStr = await pPassThrough(1, [
      inc,
      double,
      toString,
    ] as UnknownFunction[])
    expect(resStr).type.toBe<unknown>()

    const resNum = await pPassThrough(1, [inc, double] as UnknownFunction[])
    expect(resNum).type.toBe<unknown>()
  })

  test('general fn array with asserted return type', async () => {
    const resStr = (await pPassThrough(1, [
      inc,
      double,
      toString,
    ] as UnknownFunction[])) as string
    expect(resStr).type.toBe<string>()

    const resNum = (await pPassThrough(1, [
      inc,
      double,
    ] as UnknownFunction[])) as number
    expect(resNum).type.toBe<number>()
  })
})
