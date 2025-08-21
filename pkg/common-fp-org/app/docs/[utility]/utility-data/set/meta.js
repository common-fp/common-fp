import { Any, EntryCollection, EntryKey } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.EntryCollection]
const name = 'set'
const signatures = [
  () => (
    <>
      {`(key:${nbsp}`}
      <EntryKey />
      {`, value:${nbsp}`}
      <Any />
      {`)${nbsp}=> (collection:${nbsp}`}
      <EntryCollection />
      {`)${nbsp}=> `}
      <EntryCollection />
    </>
  ),
]

export { labels, name, signatures }
