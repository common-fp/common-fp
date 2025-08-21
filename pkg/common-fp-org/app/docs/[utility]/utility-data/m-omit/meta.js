import { EntryCollection, EntryKey } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.EntryCollection, l.mutable]
const name = 'mOmit'
const signatures = [
  () => (
    <>
      {`(keys:${nbsp}`}
      <EntryKey />
      {`[])${nbsp}=> (collection:${nbsp}`}
      <EntryCollection />
      {`)${nbsp}=> collection`}
    </>
  ),
]
const srcDir = 'mutable'

export { labels, name, signatures, srcDir }
