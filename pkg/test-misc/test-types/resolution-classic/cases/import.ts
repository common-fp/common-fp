import { describe, test, expect } from 'tstyche'
import * as _ from '@common-fp/common-fp'
import * as ST from '@common-fp/shared-types'
import si = require('@common-fp/shared-internals')

describe('typescript import', async () => {
  test('root', () => {
    const res = _.add(1)
    expect(res).type.toBe<(n2: number) => number>()

    expect<ST.Falsey>().type.toBe<false | null | undefined | '' | 0>()

    const aOrAnRes = si.aOrAn('str')
    expect(aOrAnRes).type.toBe<`a ${string}` | `an ${string}`>()
  })
})
