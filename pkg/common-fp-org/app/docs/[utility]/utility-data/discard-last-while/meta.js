import { TArray, ArrayPredicate } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.aka['_.dropRightWhile'], l.data.array]
const name = 'discardLastWhile'
const signatures = [
  () => (
    <>
      {`(predicate:${nbsp}`}
      <ArrayPredicate />
      {`)${nbsp}=> (anArray:${nbsp}`}
      <TArray />
      {`)${nbsp}=> `}
      <TArray />
    </>
  ),
]
const srcDir = 'array'

export { labels, name, signatures, srcDir }
