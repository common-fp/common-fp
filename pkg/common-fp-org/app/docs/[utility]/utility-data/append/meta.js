import { TString } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.string]
const name = 'append'
const signatures = [
  () => (
    <>
      {`(end:${nbsp}`}
      <TString />
      {`)${nbsp}=> (base:${nbsp}`}
      <TString />
      {`)${nbsp}=> `}
      <TString />
    </>
  ),
]
const srcDir = 'string'

export { labels, name, signatures, srcDir }
