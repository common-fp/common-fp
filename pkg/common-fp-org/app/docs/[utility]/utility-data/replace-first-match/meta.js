import { Either, TRegex, TString } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.aka["''.replace"], l.data.string]
const name = 'replaceFirstMatch'
const signatures = [
  () => (
    <>
      {`(search:${nbsp}`}
      <Either arr={[TRegex, TString]} />
      {`,${nbsp}replacement:${nbsp}`}
      <TString />
      {`)${nbsp}=> (aString:${nbsp}`}
      <TString />
      {`)${nbsp}=> `}
      <TString />
    </>
  ),
]
const srcDir = 'string'

export { labels, name, signatures, srcDir }
