import { TNumber } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'

const labels = []
const name = 'withNumbersDescending'
const signatures = [
  () => (
    <>
      {`(left:${nbsp}`}
      <TNumber />
      {`,${nbsp}right:${nbsp}`}
      <TNumber />
      {`)${nbsp}=> `}
      <TNumber />
    </>
  ),
]
const srcDir = 'compare/numbers'

export { labels, name, signatures, srcDir }
