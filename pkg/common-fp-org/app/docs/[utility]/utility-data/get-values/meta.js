import { ArrayOf, KeyedCollection } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.EntryCollection]
const name = 'getValues'
const signatures = [
  () => (
    <>
      {`(collection:${nbsp}`}
      <KeyedCollection />
      {`)${nbsp}=> `}
      <ArrayOf type="any" />
    </>
  ),
]

export { labels, name, signatures }
