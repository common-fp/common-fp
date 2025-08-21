import { describe, expect, test } from 'tstyche'
import returnFirstArg from '#src/return-first-arg'

describe('return-first-arg', () => {
  test('no args', () => {
    const resultUndef = returnFirstArg()
    expect(resultUndef).type.toBe<undefined>()
  })

  test('literal arg', () => {
    const resultLiteral = returnFirstArg('a' as const, 'b')
    expect(resultLiteral).type.toBe<'a'>()
  })

  test('general arg', () => {
    const resultGen = returnFirstArg('a', 'b')
    expect(resultGen).type.toBe<string>()
  })

  test('general array', () => {
    const strArr = [] as string[]
    const resultGenArr = returnFirstArg(...strArr)
    expect(resultGenArr).type.toBe<string | undefined>()
  })
})
