import { TMap, TObject } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.KeyedCollection, l.mutable]
const name = 'mAssignOverrides'
const signatures = [
  () => (
    <>
      {`(overrides:${nbsp}`}
      <TObject />
      {`)${nbsp}=> (base:${nbsp}`}
      <TObject />
      {`)${nbsp}=> base`}
    </>
  ),
  () => (
    <>
      {`(overrides:${nbsp}`}
      <TMap />
      {`)${nbsp}=> (base:${nbsp}`}
      <TMap />
      {`)${nbsp}=> base`}
    </>
  ),
]
const srcDir = 'mutable'

export { labels, name, signatures, srcDir }
