import { Collection, ValueCollection } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.Collection]
const name = 'keep'
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
