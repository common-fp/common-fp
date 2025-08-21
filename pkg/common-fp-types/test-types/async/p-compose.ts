import { describe, expect, test } from 'tstyche'
import type { UnknownFunction } from '@common-fp/shared-types'
import pCompose from '#src/async/p-compose'

describe('async/p-compose', () => {
  const inc = async (n: number) => n + 1
  const double = async (n: number) => n * 2
  const toString = async (n: number) => '' + n
  const unknownToString = async (u: unknown) => '' + u

  test('empty fn array', () => {
    const getArg = pCompose([])
    expect(getArg).type.toBe<{
      (): Promise<undefined>
      <A>(first: A, ...rest: unknown[]): Promise<A>
      (...args: unknown[]): Promise<unknown>
    }>()
  })

  test('one fn', () => {
    const getStr = pCompose([toString])
    expect(getStr).type.toBe<(n: number) => Promise<string>>()
  })

  test('two fns', () => {
    const incThenStr = pCompose([inc, unknownToString])
    expect(incThenStr).type.toBe<(n: number) => Promise<string>>()
  })

  test('unknown fns', () => {
    const getUnknown = pCompose([inc, double, toString] as UnknownFunction[])
    expect(getUnknown).type.toBe<(...args: never[]) => Promise<unknown>>()
  })

  test('unknown fns with asserted return type', () => {
    expect(
      pCompose([inc, double, toString] as UnknownFunction[])
    ).type.toBeAssignableWith<(n: number) => Promise<string>>()
  })
})
