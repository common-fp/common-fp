import { Range, Sequence } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.Sequence]
const name = 'keepRange'
const signatures = [
  () => (
    <>
      {`(range:${nbsp}`}
      <Range />
      {`) => (sequence:${nbsp}`}
      <Sequence />
      {`)${nbsp}=> `}
      <Sequence />
    </>
  ),
]

export { labels, name, signatures }
