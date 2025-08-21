import { Any, Either, TMap, TUndefined, ValueOf } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.map]
const name = 'getValueAtMapKey'
const signatures = [
  () => (
    <>
      {`(key:${nbsp}`}
      <Any />
      {`)${nbsp}=> (aMap:${nbsp}`}
      <TMap />
      {`)${nbsp}=> `}
      <Either arr={[ValueOf.Map, TUndefined]} />
    </>
  ),
]

const srcDir = 'map'

export { labels, name, signatures, srcDir }
