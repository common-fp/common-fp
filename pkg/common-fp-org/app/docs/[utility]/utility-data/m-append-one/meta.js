import { Any, TArray } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.array, l.mutable]
const name = 'mAppendOne'
const signatures = [
  () => (
    <>
      {`(value:${nbsp}`}
      <Any />
      {`)${nbsp}=> (anArray:${nbsp}`}
      <TArray />
      {`)${nbsp}=> anArray`}
    </>
  ),
]
const srcDir = 'mutable/array'

export { labels, name, signatures, srcDir }
