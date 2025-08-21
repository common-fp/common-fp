import { TBoolean, Collection, CollectionPredicate } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.aka['_.every'], l.data.Collection]
const name = 'all'
const signatures = [
  () => (
    <>
      {`(predicate:${nbsp}`}
      <CollectionPredicate />
      {`)${nbsp}=> (collection:${nbsp}`}
      <Collection />
      {`)${nbsp}=> `}
      <TBoolean />
    </>
  ),
]

export { labels, name, signatures }
