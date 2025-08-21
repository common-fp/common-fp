import { describe, expect, test } from 'tstyche'
import type { EntryCollection, UnknownArray, UnknownMap } from '@common-fp/shared-types'
import { objToMap } from '@common-fp/test-utils'
import update from '#src/update'

describe('update', () => {
  const inc = (n: number) => n + 1
  const toString = (n: number) => '' + n

  test('array mappers', () => {
    const tick = update([inc, toString])
    expect(tick).type.toBe<<C extends UnknownArray>(collection: C) => C>()
  })

  test('map mappers', () => {
    const aMap = objToMap({ a: inc, b: toString })
    const tick = update(aMap)

    expect(tick).type.toBe<<C extends UnknownMap>(collection: C) => C>()
  })

  test('object mappers', () => {
    const obj = { 0: inc, 1: toString }
    const tick = update(obj)

    expect(tick).type.toBe<<C extends EntryCollection>(collection: C) => C>()
  })
})
