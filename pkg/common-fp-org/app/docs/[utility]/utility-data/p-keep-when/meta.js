import {
  Collection,
  CollectionPredicateAsync,
  TAsync,
} from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.aka['a.filter'], l.async, l.data.Collection]
const name = 'pKeepWhen'
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
      <Collection />
    </>
  ),
]
const srcDir = 'async'

export { labels, name, signatures, srcDir }
