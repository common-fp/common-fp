import { Collection, CT, TAsync } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const AsyncMapperFn = () => (
  <CT name="AsyncMapperFn" content="async (value, key, collection) => value" />
)

const labels = [l.aka['a.map'], l.async, l.data.Collection]
const name = 'pMapValues'
const signatures = [
  () => (
    <>
      {`(mapperFn:${nbsp}`}
      <AsyncMapperFn />
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
