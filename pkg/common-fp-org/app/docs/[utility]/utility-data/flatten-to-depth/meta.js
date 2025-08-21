import { TArray, TNumber } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.array]
const name = 'flattenToDepth'
const signatures = [
  () => (
    <>
      {`(depth:${nbsp}`}
      <TNumber />
      {`)${nbsp}=> `}
      {`(anArray:${nbsp}`}
      <TArray />
      {`)${nbsp}=> `}
      <TArray />
    </>
  ),
]

const srcDir = 'array'

export { labels, name, signatures, srcDir }
