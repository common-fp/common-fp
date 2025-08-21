import { TMap, TObject } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.aka['{}.assign'], l.data.KeyedCollection]
const name = 'assignOverrides'
const signatures = [
  () => (
    <>
      {`(overrides:${nbsp}`}
      <TObject />
      {`)${nbsp}=> (base:${nbsp}`}
      <TObject />
      {`)${nbsp}=> `}
      <TObject />
    </>
  ),
  () => (
    <>
      {`(overrides:${nbsp}`}
      <TMap />
      {`)${nbsp}=> (base:${nbsp}`}
      <TMap />
      {`)${nbsp}=> `}
      <TMap />
    </>
  ),
]

export { labels, name, signatures }
