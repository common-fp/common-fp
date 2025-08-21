import {
  Collection,
  CollectionPredicateAsync,
  Either,
  TAsync,
  TUndefined,
  ValueOf,
} from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.aka['a.detectSeries'], l.async, l.data.Collection]
const name = 'pFind'
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
      <Either arr={[ValueOf.Collection, TUndefined]} />
    </>
  ),
]
const srcDir = 'async'

export { labels, name, signatures, srcDir }
