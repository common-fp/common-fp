import { Character, TString } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.aka['_.trim'], l.data.string]
const name = 'prune'
const signatures = [
  () => (
    <>
      {`(pruneArg:${nbsp}`}
      <Character />
      {`${nbsp}|${nbsp}`}
      <Character />
      {`[])${nbsp}=> (aString:${nbsp}`}
      <TString />
      {`)${nbsp}=> `}
      <TString />
    </>
  ),
]
const srcDir = 'string'

export { labels, name, signatures, srcDir }
