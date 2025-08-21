import { CompareFn, Path } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'

const labels = []
const name = 'compareByPath'
const signatures = [
  () => (
    <>
      {`(path:${nbsp}`}
      <Path />
      {`, compareFn:${nbsp}`}
      <CompareFn />
      {`)${nbsp}=> `}
      <CompareFn />
    </>
  ),
]

const srcDir = 'compare'

export { labels, name, signatures, srcDir }
