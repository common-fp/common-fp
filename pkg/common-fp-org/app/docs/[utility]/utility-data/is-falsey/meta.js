import { Any, TBoolean } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.any]
const name = 'isFalsey'
const signatures = [
  () => (
    <>
      {`(value:${nbsp}`}
      <Any />
      {`)${nbsp}=> `}
      <TBoolean />
    </>
  ),
]

export { labels, name, signatures }
