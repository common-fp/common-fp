import { Collection, CollectionPredicate } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.Collection]
const name = 'keepWhen'
const signatures = [
  () => (
    <>
      {`(predicate:${nbsp}`}
      <CollectionPredicate />
      {`) => (collection:${nbsp}`}
      <Collection />
      {`)${nbsp}=> `}
      <Collection />
    </>
  ),
]

export { labels, name, signatures }
