import {
  Any,
  Either,
  EntryCollection,
  KeyOrIndex,
  TString,
} from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.aka['[].indexOf'], l.data.EntryCollectionOrString]
const name = 'findKeyWithVal'
const signatures = [
  () => (
    <>
      {`(value:${nbsp}`}
      <Any />
      {`)${nbsp}=> (collection:${nbsp}`}
      <Either arr={[EntryCollection, TString]} />
      {`)${nbsp}=> `}
      <KeyOrIndex />
    </>
  ),
]

export { labels, name, signatures }
