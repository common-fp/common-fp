import { EntryCollection } from '@/cmpt/inline-types'
import UpdateMapperFns from '@/docs/[utility]/cmpt/update-mapper-fns'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.EntryCollection]
const name = 'update'
const signatures = [
  () => (
    <>
      {`(mapperFns:${nbsp}`}
      <UpdateMapperFns />
      {`)${nbsp}=> (collection:${nbsp}`}
      <EntryCollection />
      {`)${nbsp}=> `}
      <EntryCollection />
    </>
  ),
]

export { labels, name, signatures }
