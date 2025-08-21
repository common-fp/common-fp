import { Any, EntryCollection } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.EntryCollection, l.mutable]
const name = 'mFillWith'
const signatures = [
  () => (
    <>
      {`(value:${nbsp}`}
      <Any />
      {`)${nbsp}=> (collection:${nbsp}`}
      <EntryCollection />
      {`)${nbsp}=> collection`}
    </>
  ),
]
const srcDir = 'mutable'

export { labels, name, signatures, srcDir }
