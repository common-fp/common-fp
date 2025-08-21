import { Any, TArray } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.array]
const name = 'prependOne'
const signatures = [
  () => (
    <>
      {`(value:${nbsp}`}
      <Any />
      {`)${nbsp}=> (base:${nbsp}`}
      <TArray />
      {`)${nbsp}=> `}
      <TArray />
    </>
  ),
]
const srcDir = 'array'

export { labels, name, signatures, srcDir }
