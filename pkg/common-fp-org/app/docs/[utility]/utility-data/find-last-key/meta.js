import {
  TArray,
  ArrayPredicate,
  Either,
  TNumber,
  TUndefined,
} from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.aka['[].findLastIndex'], l.data.array]
const name = 'findLastKey'
const signatures = [
  () => (
    <>
      {`(predicate:${nbsp}`}
      <ArrayPredicate />
      {`)${nbsp}=> (anArray:${nbsp}`}
      <TArray />
      {`)${nbsp}=> `}
      <Either arr={[TNumber, TUndefined]} />
    </>
  ),
]

const srcDir = 'array'

export { labels, name, signatures, srcDir }
