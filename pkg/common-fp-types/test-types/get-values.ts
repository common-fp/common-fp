import { describe, expect, test } from 'tstyche'
import { objToMap } from '@common-fp/test-utils'
import getValues from '#src/get-values'

describe('get-values', () => {
  test('literal', () => {
    const obj = { a: 'A', b: 'B' } as const
    const valuesObj = getValues(obj)
    expect(valuesObj).type.toBe<Array<'A' | 'B'>>()

    const valuesMap = getValues(objToMap(obj))
    expect(valuesMap).type.toBe<Array<'A' | 'B'>>()
  })

  test('general', () => {
    const obj = { a: 'A', b: 'B' }
    const valuesObj = getValues(obj)
    expect(valuesObj).type.toBe<string[]>()

    const valuesMap = getValues(objToMap(obj))
    expect(valuesMap).type.toBe<string[]>()
  })
})
