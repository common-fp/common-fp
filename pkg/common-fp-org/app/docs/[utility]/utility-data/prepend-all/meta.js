import { TArray } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.aka['[].concat'], l.data.array]
const name = 'prependAll'
const signatures = [
  () => (
    <>
      {`(prepended:${nbsp}`}
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
