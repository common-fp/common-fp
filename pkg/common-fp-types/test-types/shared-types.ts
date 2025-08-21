import { describe, expect, test } from 'tstyche'
import type { Collection as SharedColl } from '@common-fp/shared-types'
import type { Collection as DistColl } from '#dist/index'

describe('shared-types', () => {
  test('are exported from common-fp-types', () => {
    expect<DistColl>().type.toBe<SharedColl>()
  })
})
