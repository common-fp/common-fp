import { TNumber, TString } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.string]
const name = 'truncateToNChars'
const signatures = [
  () => (
    <>
      {`(n:${nbsp}`}
      <TNumber />
      {`)${nbsp}=> (aString:${nbsp}`}
      <TString />
      {`)${nbsp}=> `}
      <TString />
    </>
  ),
]
const srcDir = 'string'

export { labels, name, signatures, srcDir }
