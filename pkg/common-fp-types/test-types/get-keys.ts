import { describe, expect, test } from 'tstyche'
import { objToMap } from '@common-fp/test-utils'
import getKeys from '#src/get-keys'

describe('get-keys', () => {
  test('literal', () => {
    const obj = { a: 'A', b: 'B' } as const
    const keysObj = getKeys(obj)
    expect(keysObj).type.toBe<Array<'a' | 'b'>>()

    const keysMap = getKeys(objToMap(obj))
    expect(keysMap).type.toBe<Array<'a' | 'b'>>()
  })

  test('general', () => {
    const obj = { a: 'A', b: 'B' } as Record<string, string>
    const keysObj = getKeys(obj)
    expect(keysObj).type.toBe<string[]>()

    const keysMap = getKeys(objToMap(obj))
    expect(keysMap).type.toBe<string[]>()
  })
})
