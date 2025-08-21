import { KeyedCollection } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.KeyedCollection]
const name = 'invert'
const signatures = [
  () => (
    <>
      {`(collection:${nbsp}`}
      <KeyedCollection />
      {`)${nbsp}=> `}
      <KeyedCollection />
    </>
  ),
]

export { labels, name, signatures }
