import { TArray, ArrayPredicate } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.aka['_.dropRightWhile'], l.data.array, l.mutable]
const name = 'mDiscardLastWhile'
const signatures = [
  () => (
    <>
      {`(predicate:${nbsp}`}
      <ArrayPredicate />
      {`)${nbsp}=> (anArray:${nbsp}`}
      <TArray />
      {`)${nbsp}=> anArray`}
    </>
  ),
]
const srcDir = 'mutable/array'

export { labels, name, signatures, srcDir }
