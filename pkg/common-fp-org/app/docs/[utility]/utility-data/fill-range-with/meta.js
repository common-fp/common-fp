import { Any, TArray, Range } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.array]
const name = 'fillRangeWith'
const signatures = [
  () => (
    <>
      {`(value:${nbsp}`}
      <Any />
      {`, range:${nbsp}`}
      <Range />
      {`)${nbsp}=> (anArray:${nbsp}`}
      <TArray />
      {`)${nbsp}=> `}
      <TArray />
    </>
  ),
]
const srcDir = 'array'

export { labels, name, signatures, srcDir }
