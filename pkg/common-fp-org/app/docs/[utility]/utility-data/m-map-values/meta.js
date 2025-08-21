import { EntryCollection, CT } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const MapperFn = () => (
  <CT name="MapperFn" content="(val, key, collection) => val" />
)
const labels = [l.data.EntryCollection, l.mutable]
const name = 'mMapValues'
const signatures = [
  () => (
    <>
      {`(mapperFn:${nbsp}`}
      <MapperFn />
      {`)${nbsp}=> (collection:${nbsp}`}
      <EntryCollection />
      {`)${nbsp}=> collection`}
    </>
  ),
]
const srcDir = 'mutable'

export { labels, name, signatures, srcDir }
