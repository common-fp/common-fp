import { AnyPredicate } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'

const labels = []
const name = 'negate'
const signatures = [
  () => (
    <>
      {`(predicate:${nbsp}`}
      <AnyPredicate />
      {`)${nbsp}=> `}
      <AnyPredicate />
    </>
  ),
]
const srcDir = 'function'

export { labels, name, signatures, srcDir }
