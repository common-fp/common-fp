import {
  Collection,
  CollectionPredicateAsync,
  TAsync,
  TBoolean,
} from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.aka['a.someSeries'], l.async, l.data.Collection]
const name = 'pAny'
const signatures = [
  () => (
    <>
      {`(predicate:${nbsp}`}
      <CollectionPredicateAsync />
      {`)${nbsp}=> `}
      <TAsync />
      {`${nbsp}(collection:${nbsp}`}
      <Collection />
      {`)${nbsp}=> `}
      <TBoolean />
    </>
  ),
]
const srcDir = 'async'

export { labels, name, signatures, srcDir }
