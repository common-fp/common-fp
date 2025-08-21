import { EntryCollection } from '@/cmpt/inline-types'
import UpdateMapperFns from '@/docs/[utility]/cmpt/update-mapper-fns'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.EntryCollection, l.mutable]
const name = 'mUpdate'
const signatures = [
  () => (
    <>
      {`(mapperFns:${nbsp}`}
      <UpdateMapperFns />
      {`)${nbsp}=> (collection:${nbsp}`}
      <EntryCollection />
      {`)${nbsp}=> collection`}
    </>
  ),
]
const srcDir = 'mutable'

export { labels, name, signatures, srcDir }
