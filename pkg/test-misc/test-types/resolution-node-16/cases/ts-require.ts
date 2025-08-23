import { describe, test, expect } from 'tstyche'
import _ = require('common-fp')
import add = require('common-fp/add')
import ST = require('@common-fp/shared-types')
import type * as U from '@common-fp/shared-types/utils'
import si = require('@common-fp/shared-internals')
import aOrAn = require('@common-fp/shared-internals/a-or-an')

describe('typescript import', async () => {
  test('root', () => {
    const res = _.add(1)
    expect(res).type.toBe<(n2: number) => number>()

    expect<ST.Falsey>().type.toBe<false | null | undefined | '' | 0>()

    const aOrAnRes = si.aOrAn('str')
    expect(aOrAnRes).type.toBe<`a ${string}` | `an ${string}`>()
  })
  test('sub paths', () => {
    const res = add(1)
    expect(res).type.toBe<(n2: number) => number>()

    expect<U.Falsey>().type.toBe<false | null | undefined | '' | 0>()

    const aOrAnRes = aOrAn('str')
    expect(aOrAnRes).type.toBe<`a ${string}` | `an ${string}`>()
  })
})
