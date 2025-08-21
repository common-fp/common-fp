import { Collection, CT } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.Collection]
const name = 'forEach'
const signatures = [
  () => (
    <>
      {`(fn:${nbsp}`}
      <CT name="Function" content="(value, key, collection) => void" />
      {`)${nbsp}=> `}
      {`(collection:${nbsp}`}
      <Collection />
      {`)${nbsp}=> `}
      <Collection />
    </>
  ),
]

export { labels, name, signatures }
