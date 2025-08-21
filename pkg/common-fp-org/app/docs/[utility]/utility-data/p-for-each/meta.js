import { Collection, CT, TAsync } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.aka['a.eachOf'], l.async, l.data.Collection]
const name = 'pForEach'
const signatures = [
  () => (
    <>
      {`(fn:${nbsp}`}
      <CT
        name="AsyncFunction"
        content="async (value, key, collection) => void"
      />
      {`)${nbsp}=> `}
      <TAsync />
      {`${nbsp}(collection:${nbsp}`}
      <Collection />
      {`)${nbsp}=> `}
      <Collection />
    </>
  ),
]
const srcDir = 'async'

export { labels, name, signatures, srcDir }
