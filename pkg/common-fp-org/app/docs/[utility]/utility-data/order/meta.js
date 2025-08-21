import { CompareFn, TArray } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.array]
const name = 'order'
const signatures = [
  () => (
    <>
      {`(compareFn:${nbsp}`}
      <CompareFn />
      {`)${nbsp}=> (anArray:${nbsp}`}
      <TArray />
      {`)${nbsp}=> `}
      <TArray />
    </>
  ),
]
const srcDir = 'array'

export { labels, name, signatures, srcDir }
