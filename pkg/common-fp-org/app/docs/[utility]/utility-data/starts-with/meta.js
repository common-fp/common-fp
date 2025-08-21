import { TBoolean, TString } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.string]
const name = 'startsWith'
const signatures = [
  () => (
    <>
      {`(prefix:${nbsp}`}
      <TString />
      {`)${nbsp}=> (aString:${nbsp}`}
      <TString />
      {`)${nbsp}=> `}
      <TBoolean />
    </>
  ),
]
const srcDir = 'string'

export { labels, name, signatures, srcDir }
