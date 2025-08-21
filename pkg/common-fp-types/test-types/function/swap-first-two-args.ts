import { describe, expect, test } from 'tstyche'
import swapFirstTwoArgs from '#src/function/swap-first-two-args'

describe('function/swap-first-two-args', () => {
  describe('no rest args', () => {
    test('no args', () => {
      const return1 = () => 1 as const
      const alsoReturn1 = swapFirstTwoArgs(return1)
      expect(alsoReturn1).type.toBe<() => 1>()
    })

    test('one arg', () => {
      const gt2 = (n: number) => n > 2
      const idxGt2 = swapFirstTwoArgs(gt2)

      expect(idxGt2).type.toBe<(arg1: unknown, arg2: number) => boolean>()
    })

    test('two args', () => {
      const uppercaseKey = (key: string, _val: number) => key.toUpperCase()
      const upperCaseKeyMapper = swapFirstTwoArgs(uppercaseKey)

      expect(upperCaseKeyMapper).type.toBe<
        (arg1: number, arg2: string) => string
      >()
    })

    test('more args', () => {
      const uppercaseKey = (
        key: string,
        _val: number,
        _obj: Record<string, number>
      ) => key.toUpperCase()
      const upperCaseKeyMapper = swapFirstTwoArgs(uppercaseKey)

      expect(upperCaseKeyMapper).type.toBe<
        (arg1: number, arg2: string, _obj: Record<string, number>) => string
      >()
    })
  })

  describe('with rest args', () => {
    test('no positional args', () => {
      const fn = (...rest: string[]) => rest.length
      const swappedFn = swapFirstTwoArgs(fn)

      expect(swappedFn).type.toBe<
        (
          arg1?: string | undefined,
          arg2?: string | undefined,
          ...rest: string[]
        ) => number
      >()
    })

    test('one positional arg', () => {
      const fn = (_arg1: number, ...rest: string[]) => rest.length
      const swappedFn = swapFirstTwoArgs(fn)

      expect(swappedFn).type.toBe<
        (arg1: string | undefined, arg2: number, ...rest: string[]) => number
      >()
    })

    test('two positional args', () => {
      const fn = (_arg1: number, _arg2: boolean, ...rest: string[]) =>
        rest.length
      const swappedFn = swapFirstTwoArgs(fn)

      expect(swappedFn).type.toBe<
        (arg1: boolean, arg2: number, ...rest: string[]) => number
      >()
    })
  })
})
