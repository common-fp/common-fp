import {
  Collection,
  CollectionPredicate,
  Either,
  TUndefined,
  ValueOf,
} from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.Collection]
const name = 'find'
const signatures = [
  () => (
    <>
      {`(predicate:${nbsp}`}
      <CollectionPredicate />
      {`)${nbsp}=> (collection:${nbsp}`}
      <Collection />
      {`)${nbsp}=> `}
      <Either arr={[ValueOf.Collection, TUndefined]} />
    </>
  ),
]

export { labels, name, signatures }
