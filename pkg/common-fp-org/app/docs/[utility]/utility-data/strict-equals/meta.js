import { Any, TBoolean } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.any]
const name = 'strictEquals'
const signatures = [
  () => (
    <>
      {`(item1:${nbsp}`}
      <Any />
      {`)${nbsp}=> (item2:${nbsp}`}
      <Any />
      {`)${nbsp}=> `}
      <TBoolean />
    </>
  ),
]

export { labels, name, signatures }
