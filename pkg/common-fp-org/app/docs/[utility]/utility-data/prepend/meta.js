import { TString } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.string]
const name = 'prepend'
const signatures = [
  () => (
    <>
      {`(start:${nbsp}`}
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
