import { describe, expect, test } from 'tstyche'
import type { UnknownFunction } from '@common-fp/shared-types'
import compose from '#src/compose'

describe('compose', () => {
  const inc = (n: number) => n + 1
  const double = (n: number) => n * 2
  const toString = (n: number) => '' + n
  const unknownToString = (u: unknown) => '' + u

  test('empty fn array', () => {
    const getArg = compose([])
    expect(getArg).type.toBe<{
      (): undefined
      <A>(first: A, ...rest: unknown[]): A
      (...args: unknown[]): unknown
    }>()
  })

  test('one fn', () => {
    const getStr = compose([toString])
    expect(getStr).type.toBe<(n: number) => string>()
  })

  test('two fns', () => {
    const getStr = compose([inc, unknownToString])
    expect(getStr).type.toBe<(n: number) => string>()
  })

  test('unknown fns', () => {
    const getUnknown = compose([inc, double, toString] as UnknownFunction[])
    expect(getUnknown).type.toBe<UnknownFunction>()
  })

  test('unknown fns with asserted return type', () => {
    const getStr = compose([inc, double, toString] as UnknownFunction[]) as (
      n: number
    ) => string
    expect(getStr).type.toBe<(n: number) => string>()
  })
})
