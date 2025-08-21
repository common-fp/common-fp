import { Collection, CT } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const MapperFn = () => (
  <CT name="MapperFn" content="(value, key, collection) => value" />
)

const labels = [l.data.Collection]
const name = 'mapValues'
const signatures = [
  () => (
    <>
      {`(mapperFn:${nbsp}`}
      <MapperFn />
      {`)${nbsp}=> (collection:${nbsp}`}
      <Collection />
      {`)${nbsp}=> `}
      <Collection />
    </>
  ),
]

export { labels, name, signatures }
