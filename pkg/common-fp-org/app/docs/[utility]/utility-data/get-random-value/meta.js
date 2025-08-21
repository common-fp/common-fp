import { Any, Collection } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.Collection]
const name = 'getRandomValue'
const signatures = [
  () => (
    <>
      {`(collection:${nbsp}`}
      <Collection />
      {`)${nbsp}=> `}
      <Any />
    </>
  ),
]

export { labels, name, signatures }
