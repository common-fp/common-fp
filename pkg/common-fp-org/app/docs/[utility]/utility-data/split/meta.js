import { Either, TRegex, TString } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.string]
const name = 'split'
const signatures = [
  () => (
    <>
      {`(separator:${nbsp}`}
      <Either arr={[TString, TRegex]} />
      {`)${nbsp}=> (aString:${nbsp}`}
      <TString />
      {`)${nbsp}=> `}
      <TString />
      {`[]`}
    </>
  ),
]

export { labels, name, signatures }
