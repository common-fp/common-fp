import { TArray } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.aka['[].concat'], l.data.array]
const name = 'appendAll'
const signatures = [
  () => (
    <>
      {`(appended:${nbsp}`}
      <TArray />
      {`)${nbsp}=> (base:${nbsp}`}
      <TArray />
      {`)${nbsp}=> `}
      <TArray />
    </>
  ),
]
const srcDir = 'array'

export { labels, name, signatures, srcDir }
