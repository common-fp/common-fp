import { CT, TNumber } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const Numbers = () => (
  <CT name="Numbers">
    <p>A collection of numbers</p>
    <p>i.e. an array, set, object or map of numbers</p>
  </CT>
)

const labels = [l.data.Collection]
const name = 'sumValues'
const signatures = [
  () => (
    <>
      {`(collection:${nbsp}`}
      <Numbers />
      {`)${nbsp}=> `}
      <TNumber />
    </>
  ),
]

export { labels, name, signatures }
