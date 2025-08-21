import { Collection, ValueCollection } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.aka['_.without'], l.data.Collection]
const name = 'discard'
const signatures = [
  () => (
    <>
      {`(values:${nbsp}`}
      <ValueCollection />
      {`)${nbsp}=> (collection:${nbsp}`}
      <Collection />
      {`)${nbsp}=> `}
      <Collection />
    </>
  ),
]

export { labels, name, signatures }
