import { Range, Sequence } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.array]
const name = 'discardRange'
const signatures = [
  () => (
    <>
      {`(range:${nbsp}`}
      <Range />
      {`)${nbsp}=> (sequence:${nbsp}`}
      <Sequence />
      {`)${nbsp}=> `}
      <Sequence />
    </>
  ),
]

export { labels, name, signatures }
