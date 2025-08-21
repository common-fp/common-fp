import { describe, expect, test } from 'tstyche'
import invokeWith from '#src/function/invoke-with'

describe('compare/invoke-with', () => {
  test('array', () => {
    const invokeWithAB = invokeWith(['a', 'b'])
    expect(invokeWithAB).type.toBe<<R>(fn: (...args: string[]) => R) => R>()

    const upperStrings = (...strings: string[]) =>
      strings.map(s => s.toUpperCase())
    expect(invokeWithAB(upperStrings)).type.not.toRaiseError()

    const add = (left: number, right: number) => left + right
    // @ts-expect-error Type 'string' is not assignable to type 'number'
    invokeWithAB(add)
  })

  test('literal', () => {
    const invokeWithAB = invokeWith(['a', 'b'] as const)
    expect(invokeWithAB).type.toBe<
      <R>(fn: (args_0: 'a', args_1: 'b') => R) => R
    >()

    const upperA = (a: 'a') => a.toUpperCase()
    expect(invokeWithAB(upperA)).type.not.toRaiseError()

    const upperAB = (a: 'a', b: 'b') => a.toUpperCase() + b.toUpperCase()
    expect(invokeWithAB(upperAB)).type.not.toRaiseError()

    const upperAC = (a: 'a', c: 'c') => a.toUpperCase() + c.toUpperCase()
    // @ts-expect-error Type '"b"' is not assignable to type '"c"'
    invokeWithAB(upperAC)

    const upperABC = (a: 'a', b: 'b', c: 'c') =>
      a.toUpperCase() + b.toUpperCase() + c.toUpperCase()
    expect(invokeWithAB).type.not.toBeCallableWith(upperABC)
  })
})
