import { TNumber, TString } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'

const labels = []
const name = 'withStringsDescending'
const signatures = [
  () => (
    <>
      {`(left:${nbsp}`}
      <TString />
      {`,${nbsp}right:${nbsp}`}
      <TString />
      {`)${nbsp}=> `}
      <TNumber />
    </>
  ),
]
const srcDir = 'compare/strings'

export { labels, name, signatures, srcDir }
