import { TArray, TNumber } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.aka['_.takeRight'], l.data.array, l.mutable]
const name = 'mKeepLast'
const signatures = [
  () => (
    <>
      {`(num:${nbsp}`}
      <TNumber />
      {`) => (anArray:${nbsp}`}
      <TArray />
      {`)${nbsp}=> anArray`}
    </>
  ),
]
const srcDir = 'mutable/array'

export { labels, name, signatures, srcDir }
