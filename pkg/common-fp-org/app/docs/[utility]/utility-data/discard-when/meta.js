import { Collection, CollectionPredicate } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.aka['_.filter'], l.data.Collection]
const name = 'discardWhen'
const signatures = [
  () => (
    <>
      {`(predicate:${nbsp}`}
      <CollectionPredicate />
      {`)${nbsp}=> (collection:${nbsp}`}
      <Collection />
      {`)${nbsp}=> `}
      <Collection />
    </>
  ),
]

export { labels, name, signatures }
