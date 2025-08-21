import { EntryCollection, EntryKey } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.EntryCollection]
const name = 'pick'
const signatures = [
  () => (
    <>
      {`(keys:${nbsp}`}
      <EntryKey />
      {`[])${nbsp}=> (collection:${nbsp}`}
      <EntryCollection />
      {`)${nbsp}=> `}
      <EntryCollection />
    </>
  ),
]

export { labels, name, signatures }
