import { CollectionPredicate, CT, EntryCollection } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.EntryCollection]
const name = 'findKey'
const signatures = [
  () => (
    <>
      {`(predicate:${nbsp}`}
      <CollectionPredicate />
      {`)${nbsp}=> (collection:${nbsp}`}
      <EntryCollection />
      {`)${nbsp}=> `}
      <CT name="Key" content="key or index of collection" />
    </>
  ),
]

export { labels, name, signatures }
