import { TNumber } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.number]
const name = 'greaterThan'
const signatures = [
  () => (
    <>
      {`(right:${nbsp}`}
      <TNumber />
      {`)${nbsp}=> (left:${nbsp}`}
      <TNumber />
      {`)${nbsp}=> `}
      <TNumber />
    </>
  ),
]
const srcDir = 'number'

export { labels, name, signatures, srcDir }
