import { describe, expect, test } from 'tstyche'
import pResolveValues from '#src/async/p-resolve-values'

describe('resolve-values', () => {
  test('literal array', async () => {
    const res = await pResolveValues([
      Promise.resolve('a'),
      Promise.resolve(1),
    ] as const)
    expect(res).type.toBe<[string, number]>()
  })

  test('general array', async () => {
    const res = await pResolveValues([Promise.resolve('a'), Promise.resolve(1)])
    expect(res).type.toBe<Array<string | number>>()
  })

  test('set', async () => {
    const res = await pResolveValues(
      new Set([Promise.resolve('a'), Promise.resolve(1)])
    )
    expect(res).type.toBe<Set<string | number>>()
  })

  test('literal object', async () => {
    const res = await pResolveValues({
      a: Promise.resolve('a'),
      1: Promise.resolve(1),
    })
    expect(res).type.toBe<{ a: string; 1: number }>()
  })

  test('general object', async () => {
    const res = await pResolveValues({
      a: Promise.resolve('a'),
      1: Promise.resolve(1),
    } as Record<string, Promise<string | number>>)
    expect(res).type.toBe<Record<string, string | number>>()
  })
})
