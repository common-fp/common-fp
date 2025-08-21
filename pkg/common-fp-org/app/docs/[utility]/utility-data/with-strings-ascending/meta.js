import { TNumber, TString } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'

const labels = []
const name = 'withStringsAscending'
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

export { labels, name, signatures }
