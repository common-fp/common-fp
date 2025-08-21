import {
  TArray,
  ArrayPredicate,
  Either,
  TUndefined,
  ValueOf,
} from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.array]
const name = 'findLast'
const signatures = [
  () => (
    <>
      {`(predicate:${nbsp}`}
      <ArrayPredicate />
      {`)${nbsp}=> (anArray:${nbsp}`}
      <TArray />
      {`)${nbsp}=> `}
      <Either arr={[ValueOf.Array, TUndefined]} />
    </>
  ),
]

const srcDir = 'array'

export { labels, name, signatures, srcDir }
