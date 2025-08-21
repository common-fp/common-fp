import { ArrayPredicate, TArray } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.aka['_.takeWhile'], l.data.array, l.mutable]
const name = 'mKeepFirstWhile'
const signatures = [
  () => (
    <>
      {`(predicate:${nbsp}`}
      <ArrayPredicate />
      {`) => (anArray:${nbsp}`}
      <TArray />
      {`)${nbsp}=> anArray`}
    </>
  ),
]
const srcDir = 'mutable/array'

export { labels, name, signatures, srcDir }
