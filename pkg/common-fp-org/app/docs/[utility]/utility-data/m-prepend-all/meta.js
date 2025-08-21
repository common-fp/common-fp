import { TArray } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.array, l.mutable]
const name = 'mPrependAll'
const signatures = [
  () => (
    <>
      {`(prepended:${nbsp}`}
      <TArray />
      {`)${nbsp}=> (base:${nbsp}`}
      <TArray />
      {`)${nbsp}=> base`}
    </>
  ),
]
const srcDir = 'mutable/array'

export { labels, name, signatures, srcDir }
