import { CompareFn, PropertyKey } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'

const labels = []
const name = 'compareByProp'
const signatures = [
  () => (
    <>
      {`(key:${nbsp}`}
      <PropertyKey />
      {`, compareFn:${nbsp}`}
      <CompareFn />
      {`)${nbsp}=> `}
      <CompareFn />
    </>
  ),
]

const srcDir = 'compare'

export { labels, name, signatures, srcDir }
