import { Character, TNumber, TString } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.aka['_.padEnd'], l.data.string]
const name = 'expandEnd'
const signatures = [
  () => (
    <>
      {`(length:${nbsp}`}
      <TNumber />
      {`, char:${nbsp}`}
      <Character />
      {`)${nbsp}=> (aString:${nbsp}`}
      <TString />
      {`)${nbsp}=> `}
      <TString />
    </>
  ),
]
const srcDir = 'string'

export { labels, name, signatures, srcDir }
