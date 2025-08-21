import { Collection, CT, TAsync } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const ResolvedCollection = () => (
  <CT
    name="ResolvedCollection"
    content="the collection with all values resolved"
  />
)

const labels = [l.aka['p.all'], l.async, l.data.Collection]
const name = 'pResolveValues'
const signatures = [
  () => (
    <>
      <TAsync />
      {`${nbsp}(collection:${nbsp}`}
      <Collection />
      {`)${nbsp}=> `}
      <ResolvedCollection />
    </>
  ),
]
const srcDir = 'async'

export { labels, name, signatures, srcDir }
