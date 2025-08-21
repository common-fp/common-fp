import { TNumber } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.number]
const name = 'multiplyBy'
const signatures = [
  () => (
    <>
      {`(n1:${nbsp}`}
      <TNumber />
      {`)${nbsp}=> (n2:${nbsp}`}
      <TNumber />
      {`)${nbsp}=> `}
      <TNumber />
    </>
  ),
]
const srcDir = 'number'

export { labels, name, signatures, srcDir }
