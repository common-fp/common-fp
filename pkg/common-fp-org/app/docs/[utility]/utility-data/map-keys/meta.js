import { CT, KeyedCollection } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const Mapperfn = () => (
  <CT name="MapperFn" content="(value, key, collection) => key" />
)

const labels = [l.data.KeyedCollection]
const name = 'mapKeys'
const signatures = [
  () => (
    <>
      {`(mapperFn:${nbsp}`}
      <Mapperfn />
      {`)${nbsp}=> (collection:${nbsp}`}
      <KeyedCollection />
      {`)${nbsp}=> `}
      <KeyedCollection />
    </>
  ),
]

export { labels, name, signatures }
