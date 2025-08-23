import { test, expect } from 'tstyche'
import type { Collection as DistColl } from 'common-fp'
import type { Collection as SharedColl } from '@common-fp/shared-types'

test('shared types are exported from common-fp', () => {
  expect<DistColl>().type.toBe<SharedColl>()
})
